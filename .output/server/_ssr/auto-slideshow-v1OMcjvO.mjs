import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { m as require_jsx_runtime } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auto-slideshow-v1OMcjvO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AutoSlideshow({ images, alt, intervalMs = 3500 }) {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setI((v) => (v + 1) % images.length), intervalMs);
		return () => window.clearInterval(id);
	}, [images.length, intervalMs]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]",
		children: [images.map((src, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: `${alt} ${idx + 1}`,
			loading: idx === 0 ? "eager" : "lazy",
			className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`
		}, src)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2",
			children: images.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"}` }, idx))
		})]
	});
}
//#endregion
export { AutoSlideshow as t };
