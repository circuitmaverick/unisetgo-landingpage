// Bump this to invalidate all previously-cached entries after a data-shape change.
const CACHE_VERSION = "v1";
const PREFIX = `usg:cache:${CACHE_VERSION}:`;

export const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

type CacheEntry<T> = { value: T; expiresAt: number };

const inflight = new Map<string, Promise<unknown>>();

/**
 * TTL cache over localStorage. No-op passthrough on the server (SSR has no
 * localStorage). Concurrent calls for the same key while the cache is cold
 * share one in-flight fetch instead of racing multiple network requests.
 */
export async function withCache<T>(
  key: string,
  ttlMs: number,
  fetcher: () => Promise<T>,
): Promise<T> {
  if (typeof window === "undefined") return fetcher();

  const storageKey = PREFIX + key;

  const cached = readEntry<T>(storageKey);
  if (cached) return cached;

  const existing = inflight.get(storageKey);
  if (existing) return existing as Promise<T>;

  const promise = fetcher()
    .then((value) => {
      writeEntry(storageKey, value, ttlMs);
      return value;
    })
    .finally(() => {
      inflight.delete(storageKey);
    });

  inflight.set(storageKey, promise);
  return promise;
}

function readEntry<T>(storageKey: string): T | undefined {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return undefined;

    const parsed = JSON.parse(raw) as CacheEntry<T>;
    if (typeof parsed?.expiresAt !== "number") return undefined;

    if (parsed.expiresAt <= Date.now()) {
      localStorage.removeItem(storageKey);
      return undefined;
    }

    return parsed.value;
  } catch {
    return undefined;
  }
}

function writeEntry<T>(storageKey: string, value: T, ttlMs: number): void {
  try {
    const entry: CacheEntry<T> = { value, expiresAt: Date.now() + ttlMs };
    localStorage.setItem(storageKey, JSON.stringify(entry));
  } catch {
    // Quota exceeded, private-browsing restrictions, etc. — best effort only.
  }
}
