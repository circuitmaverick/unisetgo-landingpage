// Bump this to invalidate all previously-cached images after a change.
const DB_NAME = "usg-image-cache-v1";
const DB_VERSION = 1;
const STORE_NAME = "images";

export const IMAGE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

type ImageEntry = { blob: Blob; cachedAt: number };

let dbPromise: Promise<IDBDatabase> | null = null;

function openDb(): Promise<IDBDatabase> {
  if (typeof indexedDB === "undefined") {
    return Promise.reject(new Error("indexedDB unavailable"));
  }

  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        if (!req.result.objectStoreNames.contains(STORE_NAME)) {
          req.result.createObjectStore(STORE_NAME);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  return dbPromise;
}

function deleteEntry(url: string): void {
  openDb()
    .then(
      (db) =>
        new Promise<void>((resolve, reject) => {
          const tx = db.transaction(STORE_NAME, "readwrite");
          tx.objectStore(STORE_NAME).delete(url);
          tx.oncomplete = () => resolve();
          tx.onerror = () => reject(tx.error);
        }),
    )
    .catch(() => {});
}

/**
 * Returns an object URL for a fresh cache hit, or null on miss/expired/
 * unsupported. Caller is responsible for revoking the returned object URL
 * once done with it.
 */
export async function getCachedImageUrl(url: string): Promise<string | null> {
  try {
    const db = await openDb();
    const entry = await new Promise<ImageEntry | undefined>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const req = tx.objectStore(STORE_NAME).get(url);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });

    if (!entry) return null;

    if (Date.now() - entry.cachedAt > IMAGE_TTL_MS) {
      deleteEntry(url);
      return null;
    }

    return URL.createObjectURL(entry.blob);
  } catch {
    return null;
  }
}

/**
 * Fetches the URL as a Blob, stores it, and returns an object URL. Returns
 * null on any failure (network, CORS, IndexedDB unavailable) so the caller
 * can fall back to the plain remote URL.
 */
export async function fetchAndCacheImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;

    const blob = await res.blob();
    const db = await openDb();
    const entry: ImageEntry = { blob, cachedAt: Date.now() };

    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      tx.objectStore(STORE_NAME).put(entry, url);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });

    return URL.createObjectURL(blob);
  } catch {
    return null;
  }
}
