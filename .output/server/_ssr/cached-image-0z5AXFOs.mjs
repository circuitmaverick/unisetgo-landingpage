import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { o as Skeleton } from "./packages-skeletons-B3eJwqpl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cached-image-0z5AXFOs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DB_NAME = "usg-image-cache-v1";
var DB_VERSION = 1;
var STORE_NAME = "images";
var dbPromise = null;
function openDb() {
	if (typeof indexedDB === "undefined") return Promise.reject(/* @__PURE__ */ new Error("indexedDB unavailable"));
	if (!dbPromise) dbPromise = new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, DB_VERSION);
		req.onupgradeneeded = () => {
			if (!req.result.objectStoreNames.contains(STORE_NAME)) req.result.createObjectStore(STORE_NAME);
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
	return dbPromise;
}
function deleteEntry(url) {
	openDb().then((db) => new Promise((resolve, reject) => {
		const tx = db.transaction(STORE_NAME, "readwrite");
		tx.objectStore(STORE_NAME).delete(url);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
	})).catch(() => {});
}
/**
* Returns an object URL for a fresh cache hit, or null on miss/expired/
* unsupported. Caller is responsible for revoking the returned object URL
* once done with it.
*/
async function getCachedImageUrl(url) {
	try {
		const db = await openDb();
		const entry = await new Promise((resolve, reject) => {
			const req = db.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME).get(url);
			req.onsuccess = () => resolve(req.result);
			req.onerror = () => reject(req.error);
		});
		if (!entry) return null;
		if (Date.now() - entry.cachedAt > 6048e5) {
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
async function fetchAndCacheImage(url) {
	try {
		const res = await fetch(url);
		if (!res.ok) return null;
		const blob = await res.blob();
		const db = await openDb();
		const entry = {
			blob,
			cachedAt: Date.now()
		};
		await new Promise((resolve, reject) => {
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
var resolved = /* @__PURE__ */ new Map();
var inflight = /* @__PURE__ */ new Map();
function resolveSrc(src) {
	const existing = inflight.get(src);
	if (existing) return existing;
	const promise = (async () => {
		const finalSrc = await getCachedImageUrl(src) ?? await fetchAndCacheImage(src) ?? src;
		resolved.set(src, finalSrc);
		return finalSrc;
	})().finally(() => {
		inflight.delete(src);
	});
	inflight.set(src, promise);
	return promise;
}
/**
* Drop-in <img> replacement that avoids the network entirely on a cache hit.
*
* Setting a real remote `src` on first render would make the browser's own
* image loader fetch it immediately — before any async cache check could
* run — defeating the point of caching. So instead this renders a skeleton
* placeholder matching layout until the IndexedDB check resolves, then
* renders the real `<img>` with either a cached blob URL or,
* on a miss, the plain remote URL (which is fetched-and-cached for next
* time). The gap is normally a handful of milliseconds — a local IndexedDB
* read — and applies uniformly on SSR hard-loads and client navigation
* alike, since image resolution is always client-driven either way.
*/
function CachedImage({ src, ...rest }) {
	const [resolvedSrc, setResolvedSrc] = (0, import_react.useState)(() => resolved.get(src) ?? null);
	(0, import_react.useEffect)(() => {
		const known = resolved.get(src);
		if (known) {
			setResolvedSrc(known);
			return;
		}
		let cancelled = false;
		setResolvedSrc(null);
		resolveSrc(src).then((finalSrc) => {
			if (!cancelled) setResolvedSrc(finalSrc);
		});
		return () => {
			cancelled = true;
		};
	}, [src]);
	if (resolvedSrc === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
		"aria-hidden": true,
		className: rest.className
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: resolvedSrc,
		...rest
	});
}
//#endregion
export { CachedImage as t };
