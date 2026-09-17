import { t as supabase } from "./supabase-BIUzkaSY.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-form._id-Bh5tl8Hu.js
var FUNCTION_URL = `https://dixvcowknljhnvvbfbgb.supabase.co/functions/v1/review-form`;
var ANON_KEY = "sb_publishable_KUSFa7gfUFqQhPjQ7WFKeg_07uD9GlV";
function authHeaders() {
	return {
		Authorization: `Bearer ${ANON_KEY}`,
		apikey: ANON_KEY
	};
}
/** Returns null for both "not found" and "invalid id" — the page shows the
* same friendly not-found state either way. */
async function getReviewDraft(id) {
	const res = await fetch(`${FUNCTION_URL}?id=${encodeURIComponent(id)}`, { headers: authHeaders() });
	if (res.status === 404 || res.status === 400) return null;
	if (!res.ok) throw new Error("Failed to load review");
	return res.json();
}
async function submitReviewForm(id, payload) {
	const res = await fetch(FUNCTION_URL, {
		method: "POST",
		headers: {
			...authHeaders(),
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			id,
			...payload
		})
	});
	if (res.ok) return { ok: true };
	const body = await res.json().catch(() => ({}));
	if (res.status === 409) return {
		ok: false,
		reason: "already_submitted"
	};
	if (res.status === 404) return {
		ok: false,
		reason: "not_found"
	};
	if (res.status === 422) return {
		ok: false,
		reason: "validation",
		fields: body.fields ?? {}
	};
	return {
		ok: false,
		reason: "invalid"
	};
}
async function uploadReviewPhoto(file) {
	const ext = file.name.split(".").pop() || "jpg";
	const path = `${crypto.randomUUID()}.${ext}`;
	const { error } = await supabase.storage.from("reviews_gallery").upload(path, file, { contentType: file.type });
	if (error) throw error;
	const { data } = supabase.storage.from("reviews_gallery").getPublicUrl(path);
	return data.publicUrl;
}
var $$splitComponentImporter = () => import("./review-form._id-BSujTEoX.mjs");
var Route = createFileRoute("/review-form/$id")({
	loader: async ({ params }) => {
		return { draft: await getReviewDraft(params.id) };
	},
	head: () => ({ meta: [{ title: "Share Your Feedback — UniSetGo" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { submitReviewForm as n, uploadReviewPhoto as r, Route as t };
