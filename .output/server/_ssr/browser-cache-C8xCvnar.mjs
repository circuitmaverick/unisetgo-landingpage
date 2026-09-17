//#region node_modules/.nitro/vite/services/ssr/assets/browser-cache-C8xCvnar.js
var PREFIX = `usg:cache:v1:`;
var SEVEN_DAYS_MS = 10080 * 60 * 1e3;
var inflight = /* @__PURE__ */ new Map();
/**
* TTL cache over localStorage. No-op passthrough on the server (SSR has no
* localStorage). Concurrent calls for the same key while the cache is cold
* share one in-flight fetch instead of racing multiple network requests.
*/
async function withCache(key, ttlMs, fetcher) {
	if (typeof window === "undefined") return fetcher();
	const storageKey = PREFIX + key;
	const cached = readEntry(storageKey);
	if (cached) return cached;
	const existing = inflight.get(storageKey);
	if (existing) return existing;
	const promise = fetcher().then((value) => {
		writeEntry(storageKey, value, ttlMs);
		return value;
	}).finally(() => {
		inflight.delete(storageKey);
	});
	inflight.set(storageKey, promise);
	return promise;
}
function readEntry(storageKey) {
	try {
		const raw = localStorage.getItem(storageKey);
		if (!raw) return void 0;
		const parsed = JSON.parse(raw);
		if (typeof parsed?.expiresAt !== "number") return void 0;
		if (parsed.expiresAt <= Date.now()) {
			localStorage.removeItem(storageKey);
			return;
		}
		return parsed.value;
	} catch {
		return;
	}
}
function writeEntry(storageKey, value, ttlMs) {
	try {
		const entry = {
			value,
			expiresAt: Date.now() + ttlMs
		};
		localStorage.setItem(storageKey, JSON.stringify(entry));
	} catch {}
}
//#endregion
export { withCache as n, SEVEN_DAYS_MS as t };
