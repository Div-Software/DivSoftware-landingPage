const s =
		/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
	a = {
		'&amp;': '&',
		'&#38;': '&',
		'&lt;': '<',
		'&#60;': '<',
		'&gt;': '>',
		'&#62;': '>',
		'&apos;': "'",
		'&#39;': "'",
		'&quot;': '"',
		'&#34;': '"',
		'&nbsp;': ' ',
		'&#160;': ' ',
		'&copy;': '©',
		'&#169;': '©',
		'&reg;': '®',
		'&#174;': '®',
		'&hellip;': '…',
		'&#8230;': '…',
		'&#x2F;': '/',
		'&#47;': '/',
	},
	o = (t) => a[t],
	u = (t) => t.replace(s, o);
let e = {
	bindI18n: 'languageChanged',
	bindI18nStore: '',
	transEmptyNodeValue: '',
	transSupportBasicHtmlNodes: !0,
	transWrapTextNodes: '',
	transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
	useSuspense: !0,
	unescape: u,
};
function p() {
	let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	e = { ...e, ...t };
}
function r() {
	return e;
}
let n;
function l(t) {
	n = t;
}
function i() {
	return n;
}
export { l as a, i as b, r as g, p as s };
