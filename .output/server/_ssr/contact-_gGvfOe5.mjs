import { t as supabase } from "./supabase-BIUzkaSY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-_gGvfOe5.js
var CONTACT = {
	brand: "UniSetGo",
	tagline: "Explore Beyond Boundaries",
	phoneDisplay: "+91 94991 62350",
	phoneE164: "9499162350",
	email: "unisetgo@gmail.com",
	bookingsEmail: "bookings@unisetgo.com",
	address: "UniSetGo, Chandigarh Tricity, India",
	instagram: "https://instagram.com/unisetgo",
	linkedin: "https://www.linkedin.com/company/unisetgo",
	facebook: "https://www.facebook.com/profile.php?id=100093573855381&mibextid=ZbWKwL"
};
function waLink(message) {
	return `https://wa.me/${CONTACT.phoneE164}?text=${encodeURIComponent(message)}`;
}
function mailLink(subject, body = "", to = CONTACT.email) {
	return `mailto:${to}?${new URLSearchParams({
		subject,
		body
	}).toString()}`;
}
var NAME_REGEX = /^[a-zA-Z\s'-]{2,50}$/;
var EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var PHONE_REGEX = /^[\+]?[0-9\s\-\(\)]{10,20}$/;
function validatePhoneDigits(value) {
	const digits = value.replace(/\D/g, "");
	return digits.length >= 10 && digits.length <= 15;
}
async function submitContactEnquiry(data) {
	const { error } = await supabase.from("messages").insert({
		name: data.name,
		email: data.email,
		phone_number: data.phone,
		message: data.message,
		interested_package: data.packageSlug ?? null
	});
	if (error) throw error;
	return { ok: true };
}
//#endregion
export { mailLink as a, waLink as c, PHONE_REGEX as i, EMAIL_REGEX as n, submitContactEnquiry as o, NAME_REGEX as r, validatePhoneDigits as s, CONTACT as t };
