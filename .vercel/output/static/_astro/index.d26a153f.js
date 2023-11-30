import { r as b, R as B, $ as Dl } from './index.d4f15412.js';
var ts = { exports: {} },
	yr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fl = b,
	Il = Symbol.for('react.element'),
	Ol = Symbol.for('react.fragment'),
	Nl = Object.prototype.hasOwnProperty,
	Bl = Fl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	jl = { key: !0, ref: !0, __self: !0, __source: !0 };
function rs(e, t, r) {
	var n,
		o = {},
		s = null,
		i = null;
	r !== void 0 && (s = '' + r),
		t.key !== void 0 && (s = '' + t.key),
		t.ref !== void 0 && (i = t.ref);
	for (n in t) Nl.call(t, n) && !jl.hasOwnProperty(n) && (o[n] = t[n]);
	if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
	return { $$typeof: Il, type: e, key: s, ref: i, props: o, _owner: Bl.current };
}
yr.Fragment = Ol;
yr.jsx = rs;
yr.jsxs = rs;
ts.exports = yr;
var Um = ts.exports;
const er = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
	ns = B.createContext(er),
	Kl = B.createContext(!1);
let Ul = !!(typeof window < 'u' && window.document && window.document.createElement),
	kr = new WeakMap();
function Hl(e = !1) {
	let t = b.useContext(ns),
		r = b.useRef(null);
	if (r.current === null && !e) {
		var n, o;
		let s =
			(n = B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
			n === void 0 ||
			(o = n.ReactCurrentOwner) === null ||
			o === void 0
				? void 0
				: o.current;
		if (s) {
			let i = kr.get(s);
			i == null
				? kr.set(s, { id: t.current, state: s.memoizedState })
				: s.memoizedState !== i.state && ((t.current = i.id), kr.delete(s));
		}
		r.current = ++t.current;
	}
	return r.current;
}
function Wl(e) {
	let t = b.useContext(ns);
	t === er &&
		!Ul &&
		console.warn(
			'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
		);
	let r = Hl(!!e),
		n = `react-aria${t.prefix}`;
	return e || `${n}-${r}`;
}
function zl(e) {
	let t = B.useId(),
		[r] = b.useState(br()),
		n = r ? 'react-aria' : `react-aria${er.prefix}`;
	return e || `${n}-${t}`;
}
const Gl = typeof B.useId == 'function' ? zl : Wl;
function _l() {
	return !1;
}
function Xl() {
	return !0;
}
function Yl(e) {
	return () => {};
}
function br() {
	return typeof B.useSyncExternalStore == 'function'
		? B.useSyncExternalStore(Yl, _l, Xl)
		: b.useContext(Kl);
}
class ql {
	getStringForLocale(t, r) {
		let n = this.strings[r];
		n || ((n = Zl(r, this.strings, this.defaultLocale)), (this.strings[r] = n));
		let o = n[t];
		if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
		return o;
	}
	constructor(t, r = 'en-US') {
		(this.strings = { ...t }), (this.defaultLocale = r);
	}
}
function Zl(e, t, r = 'en-US') {
	if (t[e]) return t[e];
	let n = Jl(e);
	if (t[n]) return t[n];
	for (let o in t) if (o.startsWith(n + '-')) return t[o];
	return t[r];
}
function Jl(e) {
	return Intl.Locale ? new Intl.Locale(e).language : e.split('-')[0];
}
const mo = new Map(),
	go = new Map();
class Ql {
	format(t, r) {
		let n = this.strings.getStringForLocale(t, this.locale);
		return typeof n == 'function' ? n(r, this) : n;
	}
	plural(t, r, n = 'cardinal') {
		let o = r['=' + t];
		if (o) return typeof o == 'function' ? o() : o;
		let s = this.locale + ':' + n,
			i = mo.get(s);
		i || ((i = new Intl.PluralRules(this.locale, { type: n })), mo.set(s, i));
		let a = i.select(t);
		return (o = r[a] || r.other), typeof o == 'function' ? o() : o;
	}
	number(t) {
		let r = go.get(this.locale);
		return r || ((r = new Intl.NumberFormat(this.locale)), go.set(this.locale, r)), r.format(t);
	}
	select(t, r) {
		let n = t[r] || t.other;
		return typeof n == 'function' ? n() : n;
	}
	constructor(t, r) {
		(this.locale = t), (this.strings = r);
	}
}
function eu(e, t) {
	if (t.has(e))
		throw new TypeError('Cannot initialize the same private elements twice on an object');
}
function tu(e, t, r) {
	eu(e, t), t.set(e, r);
}
function Hm(e, t, r) {
	let [n, o] = b.useState(e || t),
		s = b.useRef(e !== void 0),
		i = e !== void 0;
	b.useEffect(() => {
		let u = s.current;
		u !== i &&
			console.warn(
				`WARN: A component changed from ${u ? 'controlled' : 'uncontrolled'} to ${
					i ? 'controlled' : 'uncontrolled'
				}.`
			),
			(s.current = i);
	}, [i]);
	let a = i ? e : n,
		l = b.useCallback(
			(u, ...c) => {
				let d = (p, ...h) => {
					r && (Object.is(a, p) || r(p, ...h)), i || (a = p);
				};
				typeof u == 'function'
					? (console.warn(
							'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320'
					  ),
					  o((h, ...g) => {
							let P = u(i ? a : h, ...g);
							return d(P, ...c), i ? h : P;
					  }))
					: (i || o(u), d(u, ...c));
			},
			[i, a, r]
		);
	return [a, l];
}
function tn(e, t = -1 / 0, r = 1 / 0) {
	return Math.min(Math.max(e, t), r);
}
function os(e) {
	var t,
		r,
		n = '';
	if (typeof e == 'string' || typeof e == 'number') n += e;
	else if (typeof e == 'object')
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++) e[t] && (r = os(e[t])) && (n && (n += ' '), (n += r));
		else for (t in e) e[t] && (n && (n += ' '), (n += t));
	return n;
}
function ru() {
	for (var e, t, r = 0, n = ''; r < arguments.length; )
		(e = arguments[r++]) && (t = os(e)) && (n && (n += ' '), (n += t));
	return n;
}
const Y = typeof document < 'u' ? B.useLayoutEffect : () => {};
function Z(e) {
	const t = b.useRef(null);
	return (
		Y(() => {
			t.current = e;
		}, [e]),
		b.useCallback((...r) => {
			const n = t.current;
			return n(...r);
		}, [])
	);
}
function nu(e) {
	let [t, r] = b.useState(e),
		n = b.useRef(null),
		o = Z(() => {
			let i = n.current.next();
			if (i.done) {
				n.current = null;
				return;
			}
			t === i.value ? o() : r(i.value);
		});
	Y(() => {
		n.current && o();
	});
	let s = Z((i) => {
		(n.current = i(t)), o();
	});
	return [t, s];
}
let tr = new Map();
function Ln(e) {
	let [t, r] = b.useState(e),
		n = b.useRef(null),
		o = Gl(t),
		s = b.useCallback((i) => {
			n.current = i;
		}, []);
	return (
		tr.set(o, s),
		Y(() => {
			let i = o;
			return () => {
				tr.delete(i);
			};
		}, [o]),
		b.useEffect(() => {
			let i = n.current;
			i && ((n.current = null), r(i));
		}),
		o
	);
}
function ou(e, t) {
	if (e === t) return e;
	let r = tr.get(e);
	if (r) return r(t), t;
	let n = tr.get(t);
	return n ? (n(e), e) : t;
}
function Wm(e = []) {
	let t = Ln(),
		[r, n] = nu(t),
		o = b.useCallback(() => {
			n(function* () {
				yield t, yield document.getElementById(t) ? t : void 0;
			});
		}, [t, n]);
	return Y(o, [t, o, ...e]), r;
}
function iu(...e) {
	return (...t) => {
		for (let r of e) typeof r == 'function' && r(...t);
	};
}
function de(...e) {
	let t = { ...e[0] };
	for (let r = 1; r < e.length; r++) {
		let n = e[r];
		for (let o in n) {
			let s = t[o],
				i = n[o];
			typeof s == 'function' &&
			typeof i == 'function' &&
			o[0] === 'o' &&
			o[1] === 'n' &&
			o.charCodeAt(2) >= 65 &&
			o.charCodeAt(2) <= 90
				? (t[o] = iu(s, i))
				: (o === 'className' || o === 'UNSAFE_className') &&
				  typeof s == 'string' &&
				  typeof i == 'string'
				? (t[o] = ru(s, i))
				: o === 'id' && s && i
				? (t.id = ou(s, i))
				: (t[o] = i !== void 0 ? i : s);
		}
	}
	return t;
}
function zm(...e) {
	return e.length === 1
		? e[0]
		: (t) => {
				for (let r of e) typeof r == 'function' ? r(t) : r != null && (r.current = t);
		  };
}
const su = new Set(['id']),
	au = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
	lu = new Set(['href', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
	uu = /^(data-.*)$/;
function cu(e, t = {}) {
	let { labelable: r, isLink: n, propNames: o } = t,
		s = {};
	for (const i in e)
		Object.prototype.hasOwnProperty.call(e, i) &&
			(su.has(i) || (r && au.has(i)) || (n && lu.has(i)) || o?.has(i) || uu.test(i)) &&
			(s[i] = e[i]);
	return s;
}
function ue(e) {
	if (fu()) e.focus({ preventScroll: !0 });
	else {
		let t = du(e);
		e.focus(), pu(t);
	}
}
let Ft = null;
function fu() {
	if (Ft == null) {
		Ft = !1;
		try {
			var e = document.createElement('div');
			e.focus({
				get preventScroll() {
					return (Ft = !0), !0;
				},
			});
		} catch {}
	}
	return Ft;
}
function du(e) {
	for (
		var t = e.parentNode, r = [], n = document.scrollingElement || document.documentElement;
		t instanceof HTMLElement && t !== n;

	)
		(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
			r.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
			(t = t.parentNode);
	return (
		n instanceof HTMLElement &&
			r.push({ element: n, scrollTop: n.scrollTop, scrollLeft: n.scrollLeft }),
		r
	);
}
function pu(e) {
	for (let { element: t, scrollTop: r, scrollLeft: n } of e) (t.scrollTop = r), (t.scrollLeft = n);
}
function xr(e) {
	var t;
	return typeof window > 'u' || window.navigator == null
		? !1
		: ((t = window.navigator.userAgentData) === null || t === void 0
				? void 0
				: t.brands.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent);
}
function kn(e) {
	var t;
	return typeof window < 'u' && window.navigator != null
		? e.test(
				((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) ||
					window.navigator.platform
		  )
		: !1;
}
function Ke() {
	return kn(/^Mac/i);
}
function hu() {
	return kn(/^iPhone/i);
}
function is() {
	return kn(/^iPad/i) || (Ke() && navigator.maxTouchPoints > 1);
}
function At() {
	return hu() || is();
}
function Gm() {
	return Ke() || At();
}
function mu() {
	return xr(/AppleWebKit/i) && !gu();
}
function gu() {
	return xr(/Chrome/i);
}
function ss() {
	return xr(/Android/i);
}
function vu() {
	return xr(/Firefox/i);
}
const yu = b.createContext({ isNative: !0, open: xu });
function _m() {
	return b.useContext(yu);
}
function Xm(e, t) {
	let r = e.getAttribute('target');
	return (
		(!r || r === '_self') &&
		e.origin === location.origin &&
		!e.hasAttribute('download') &&
		!t.metaKey &&
		!t.ctrlKey &&
		!t.altKey &&
		!t.shiftKey
	);
}
function Ae(e, t, r = !0) {
	var n, o;
	let { metaKey: s, ctrlKey: i, altKey: a, shiftKey: l } = t;
	vu() &&
		!((n = window.event) === null || n === void 0 || (o = n.type) === null || o === void 0) &&
		o.startsWith('key') &&
		e.target === '_blank' &&
		(Ke() ? (s = !0) : (i = !0));
	let u =
		mu() && Ke() && !is()
			? new KeyboardEvent('keydown', {
					keyIdentifier: 'Enter',
					metaKey: s,
					ctrlKey: i,
					altKey: a,
					shiftKey: l,
			  })
			: new MouseEvent('click', {
					metaKey: s,
					ctrlKey: i,
					altKey: a,
					shiftKey: l,
					bubbles: !0,
					cancelable: !0,
			  });
	(Ae.isOpening = r), ue(e), e.dispatchEvent(u), (Ae.isOpening = !1);
}
Ae.isOpening = !1;
function bu(e, t) {
	if (e instanceof HTMLAnchorElement) t(e);
	else if (e.hasAttribute('data-href')) {
		let r = document.createElement('a');
		(r.href = e.getAttribute('data-href')),
			e.hasAttribute('data-target') && (r.target = e.getAttribute('data-target')),
			e.hasAttribute('data-rel') && (r.rel = e.getAttribute('data-rel')),
			e.hasAttribute('data-download') && (r.download = e.getAttribute('data-download')),
			e.hasAttribute('data-ping') && (r.ping = e.getAttribute('data-ping')),
			e.hasAttribute('data-referrer-policy') &&
				(r.referrerPolicy = e.getAttribute('data-referrer-policy')),
			e.appendChild(r),
			t(r),
			e.removeChild(r);
	}
}
function xu(e, t) {
	bu(e, (r) => Ae(r, t));
}
let Ze = new Map(),
	rn = new Set();
function vo() {
	if (typeof window > 'u') return;
	let e = (r) => {
			let n = Ze.get(r.target);
			n || ((n = new Set()), Ze.set(r.target, n), r.target.addEventListener('transitioncancel', t)),
				n.add(r.propertyName);
		},
		t = (r) => {
			let n = Ze.get(r.target);
			if (
				n &&
				(n.delete(r.propertyName),
				n.size === 0 && (r.target.removeEventListener('transitioncancel', t), Ze.delete(r.target)),
				Ze.size === 0)
			) {
				for (let o of rn) o();
				rn.clear();
			}
		};
	document.body.addEventListener('transitionrun', e),
		document.body.addEventListener('transitionend', t);
}
typeof document < 'u' &&
	(document.readyState !== 'loading' ? vo() : document.addEventListener('DOMContentLoaded', vo));
function Vn(e) {
	requestAnimationFrame(() => {
		Ze.size === 0 ? e() : rn.add(e);
	});
}
function Rn() {
	let e = b.useRef(new Map()),
		t = b.useCallback((o, s, i, a) => {
			let l = a?.once
				? (...u) => {
						e.current.delete(i), i(...u);
				  }
				: i;
			e.current.set(i, { type: s, eventTarget: o, fn: l, options: a }), o.addEventListener(s, i, a);
		}, []),
		r = b.useCallback((o, s, i, a) => {
			var l;
			let u = ((l = e.current.get(i)) === null || l === void 0 ? void 0 : l.fn) || i;
			o.removeEventListener(s, u, a), e.current.delete(i);
		}, []),
		n = b.useCallback(() => {
			e.current.forEach((o, s) => {
				r(o.eventTarget, o.type, s, o.options);
			});
		}, [r]);
	return (
		b.useEffect(() => n, [n]),
		{ addGlobalListener: t, removeGlobalListener: r, removeAllGlobalListeners: n }
	);
}
function Pu(e, t) {
	let { id: r, 'aria-label': n, 'aria-labelledby': o } = e;
	return (
		(r = Ln(r)),
		o && n
			? (o = [...new Set([r, ...o.trim().split(/\s+/)])].join(' '))
			: o && (o = o.trim().split(/\s+/).join(' ')),
		!n && !o && t && (n = t),
		{ id: r, 'aria-label': n, 'aria-labelledby': o }
	);
}
function Tu() {
	return typeof window.ResizeObserver < 'u';
}
function $u(e) {
	const { ref: t, onResize: r } = e;
	b.useEffect(() => {
		let n = t?.current;
		if (n)
			if (Tu()) {
				const o = new window.ResizeObserver((s) => {
					s.length && r();
				});
				return (
					o.observe(n),
					() => {
						n && o.unobserve(n);
					}
				);
			} else
				return (
					window.addEventListener('resize', r, !1),
					() => {
						window.removeEventListener('resize', r, !1);
					}
				);
	}, [r, t]);
}
function Dn(e, t) {
	Y(() => {
		if (e && e.ref && t)
			return (
				(e.ref.current = t.current),
				() => {
					e.ref.current = null;
				}
			);
	});
}
function yo(e) {
	for (bo(e) && (e = e.parentElement); e && !bo(e); ) e = e.parentElement;
	return e || document.scrollingElement || document.documentElement;
}
function bo(e) {
	let t = window.getComputedStyle(e);
	return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
let wu = 0;
const Vr = new Map();
function Eu(e) {
	let [t, r] = b.useState(void 0);
	return (
		Y(() => {
			if (!e) return;
			let n = Vr.get(e);
			if (n) r(n.element.id);
			else {
				let o = `react-aria-description-${wu++}`;
				r(o);
				let s = document.createElement('div');
				(s.id = o),
					(s.style.display = 'none'),
					(s.textContent = e),
					document.body.appendChild(s),
					(n = { refCount: 0, element: s }),
					Vr.set(e, n);
			}
			return (
				n.refCount++,
				() => {
					--n.refCount === 0 && (n.element.remove(), Vr.delete(e));
				}
			);
		}, [e]),
		{ 'aria-describedby': e ? t : void 0 }
	);
}
function Ym(e, t, r, n) {
	let o = Z(r),
		s = r == null;
	b.useEffect(() => {
		if (s) return;
		let i = e.current;
		return (
			i.addEventListener(t, o, n),
			() => {
				i.removeEventListener(t, o, n);
			}
		);
	}, [e, t, n, s, o]);
}
function Su(e, t) {
	let r = xo(e, t, 'left'),
		n = xo(e, t, 'top'),
		o = t.offsetWidth,
		s = t.offsetHeight,
		i = e.scrollLeft,
		a = e.scrollTop,
		{ borderTopWidth: l, borderLeftWidth: u } = getComputedStyle(e),
		c = e.scrollLeft + parseInt(u, 10),
		d = e.scrollTop + parseInt(l, 10),
		p = c + e.clientWidth,
		h = d + e.clientHeight;
	r <= i ? (i = r - parseInt(u, 10)) : r + o > p && (i += r + o - p),
		n <= d ? (a = n - parseInt(l, 10)) : n + s > h && (a += n + s - h),
		(e.scrollLeft = i),
		(e.scrollTop = a);
}
function xo(e, t, r) {
	const n = r === 'left' ? 'offsetLeft' : 'offsetTop';
	let o = 0;
	for (; t.offsetParent && ((o += t[n]), t.offsetParent !== e); ) {
		if (t.offsetParent.contains(e)) {
			o -= e[n];
			break;
		}
		t = t.offsetParent;
	}
	return o;
}
function qm(e, t) {
	if (document.contains(e)) {
		let i = document.scrollingElement || document.documentElement;
		if (window.getComputedStyle(i).overflow === 'hidden') {
			let l = yo(e);
			for (; e && l && e !== i && l !== i; ) Su(l, e), (e = l), (l = yo(e));
		} else {
			var r;
			let { left: l, top: u } = e.getBoundingClientRect();
			e == null ||
				(r = e.scrollIntoView) === null ||
				r === void 0 ||
				r.call(e, { block: 'nearest' });
			let { left: c, top: d } = e.getBoundingClientRect();
			if (Math.abs(l - c) > 1 || Math.abs(u - d) > 1) {
				var n, o, s;
				t == null ||
					(n = t.containingElement) === null ||
					n === void 0 ||
					(o = n.scrollIntoView) === null ||
					o === void 0 ||
					o.call(n, { block: 'center', inline: 'center' }),
					(s = e.scrollIntoView) === null || s === void 0 || s.call(e, { block: 'nearest' });
			}
		}
	}
}
function $t(e) {
	return e.mozInputSource === 0 && e.isTrusted
		? !0
		: ss() && e.pointerType
		? e.type === 'click' && e.buttons === 1
		: e.detail === 0 && !e.pointerType;
}
function as(e) {
	return (
		(!ss() && e.width === 0 && e.height === 0) ||
		(e.width === 1 &&
			e.height === 1 &&
			e.pressure === 0 &&
			e.detail === 0 &&
			e.pointerType === 'mouse')
	);
}
function Zm(e, t, r) {
	let n = b.useRef(t),
		o = Z(() => {
			r && r(n.current);
		});
	b.useEffect(() => {
		var s;
		let i = e == null || (s = e.current) === null || s === void 0 ? void 0 : s.form;
		return (
			i?.addEventListener('reset', o),
			() => {
				i?.removeEventListener('reset', o);
			}
		);
	}, [e, o]);
}
const Cu = new Set([
		'Arab',
		'Syrc',
		'Samr',
		'Mand',
		'Thaa',
		'Mend',
		'Nkoo',
		'Adlm',
		'Rohg',
		'Hebr',
	]),
	Au = new Set([
		'ae',
		'ar',
		'arc',
		'bcc',
		'bqi',
		'ckb',
		'dv',
		'fa',
		'glk',
		'he',
		'ku',
		'mzn',
		'nqo',
		'pnb',
		'ps',
		'sd',
		'ug',
		'ur',
		'yi',
	]);
function Mu(e) {
	if (Intl.Locale) {
		let r = new Intl.Locale(e).maximize().script;
		return Cu.has(r);
	}
	let t = e.split('-')[0];
	return Au.has(t);
}
function ls() {
	let e = (typeof navigator < 'u' && (navigator.language || navigator.userLanguage)) || 'en-US';
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = 'en-US';
	}
	return { locale: e, direction: Mu(e) ? 'rtl' : 'ltr' };
}
let nn = ls(),
	gt = new Set();
function Po() {
	nn = ls();
	for (let e of gt) e(nn);
}
function Lu() {
	let e = br(),
		[t, r] = b.useState(nn);
	return (
		b.useEffect(
			() => (
				gt.size === 0 && window.addEventListener('languagechange', Po),
				gt.add(r),
				() => {
					gt.delete(r), gt.size === 0 && window.removeEventListener('languagechange', Po);
				}
			),
			[]
		),
		e ? { locale: 'en-US', direction: 'ltr' } : t
	);
}
const ku = B.createContext(null);
function Fn() {
	let e = Lu();
	return b.useContext(ku) || e;
}
const To = new WeakMap();
function Vu(e) {
	let t = To.get(e);
	return t || ((t = new ql(e)), To.set(e, t)), t;
}
function Ru(e) {
	let { locale: t } = Fn(),
		r = b.useMemo(() => Vu(e), [e]);
	return b.useMemo(() => new Ql(t, r), [t, r]);
}
let Rr = new Map();
function Jm(e) {
	let { locale: t } = Fn(),
		r =
			t +
			(e
				? Object.entries(e)
						.sort((o, s) => (o[0] < s[0] ? -1 : 1))
						.join()
				: '');
	if (Rr.has(r)) return Rr.get(r);
	let n = new Intl.Collator(t, e);
	return Rr.set(r, n), n;
}
function Du(e, t) {
	return t.get ? t.get.call(e) : t.value;
}
function us(e, t, r) {
	if (!t.has(e)) throw new TypeError('attempted to ' + r + ' private field on non-instance');
	return t.get(e);
}
function Fu(e, t) {
	var r = us(e, t, 'get');
	return Du(e, r);
}
function Iu(e, t, r) {
	if (t.set) t.set.call(e, r);
	else {
		if (!t.writable) throw new TypeError('attempted to set read only private field');
		t.value = r;
	}
}
function $o(e, t, r) {
	var n = us(e, t, 'set');
	return Iu(e, n, r), r;
}
let Qe = 'default',
	on = '',
	Yt = new WeakMap();
function wo(e) {
	At()
		? (Qe === 'default' &&
				((on = document.documentElement.style.webkitUserSelect),
				(document.documentElement.style.webkitUserSelect = 'none')),
		  (Qe = 'disabled'))
		: (e instanceof HTMLElement || e instanceof SVGElement) &&
		  (Yt.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function It(e) {
	if (At()) {
		if (Qe !== 'disabled') return;
		(Qe = 'restoring'),
			setTimeout(() => {
				Vn(() => {
					Qe === 'restoring' &&
						(document.documentElement.style.webkitUserSelect === 'none' &&
							(document.documentElement.style.webkitUserSelect = on || ''),
						(on = ''),
						(Qe = 'default'));
				});
			}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Yt.has(e)) {
		let t = Yt.get(e);
		e.style.userSelect === 'none' && (e.style.userSelect = t),
			e.getAttribute('style') === '' && e.removeAttribute('style'),
			Yt.delete(e);
	}
}
const In = B.createContext(null);
In.displayName = 'PressResponderContext';
function Ou(e) {
	let t = b.useContext(In);
	if (t) {
		let { register: r, ...n } = t;
		(e = de(n, e)), r();
	}
	return Dn(t, e.ref), e;
}
var Ot = new WeakMap();
class Nt {
	continuePropagation() {
		$o(this, Ot, !1);
	}
	get shouldStopPropagation() {
		return Fu(this, Ot);
	}
	constructor(t, r, n) {
		tu(this, Ot, { writable: !0, value: void 0 }),
			$o(this, Ot, !0),
			(this.type = t),
			(this.pointerType = r),
			(this.target = n.currentTarget),
			(this.shiftKey = n.shiftKey),
			(this.metaKey = n.metaKey),
			(this.ctrlKey = n.ctrlKey),
			(this.altKey = n.altKey);
	}
}
const Eo = Symbol('linkClicked');
function Nu(e) {
	let {
			onPress: t,
			onPressChange: r,
			onPressStart: n,
			onPressEnd: o,
			onPressUp: s,
			isDisabled: i,
			isPressed: a,
			preventFocusOnPress: l,
			shouldCancelOnPointerExit: u,
			allowTextSelectionOnPress: c,
			ref: d,
			...p
		} = Ou(e),
		[h, g] = b.useState(!1),
		P = b.useRef({
			isPressed: !1,
			ignoreEmulatedMouseEvents: !1,
			ignoreClickAfterPress: !1,
			didFirePressStart: !1,
			isTriggeringEvent: !1,
			activePointerId: null,
			target: null,
			isOverTarget: !1,
			pointerType: null,
		}),
		{ addGlobalListener: $, removeAllGlobalListeners: A } = Rn(),
		x = Z((f, E) => {
			let R = P.current;
			if (i || R.didFirePressStart) return;
			let y = !0;
			if (((R.isTriggeringEvent = !0), n)) {
				let w = new Nt('pressstart', E, f);
				n(w), (y = w.shouldStopPropagation);
			}
			return r && r(!0), (R.isTriggeringEvent = !1), (R.didFirePressStart = !0), g(!0), y;
		}),
		T = Z((f, E, R = !0) => {
			let y = P.current;
			if (!y.didFirePressStart) return;
			(y.ignoreClickAfterPress = !0), (y.didFirePressStart = !1), (y.isTriggeringEvent = !0);
			let w = !0;
			if (o) {
				let m = new Nt('pressend', E, f);
				o(m), (w = m.shouldStopPropagation);
			}
			if ((r && r(!1), g(!1), t && R && !i)) {
				let m = new Nt('press', E, f);
				t(m), w && (w = m.shouldStopPropagation);
			}
			return (y.isTriggeringEvent = !1), w;
		}),
		C = Z((f, E) => {
			let R = P.current;
			if (!i) {
				if (s) {
					R.isTriggeringEvent = !0;
					let y = new Nt('pressup', E, f);
					return s(y), (R.isTriggeringEvent = !1), y.shouldStopPropagation;
				}
				return !0;
			}
		}),
		M = Z((f) => {
			let E = P.current;
			E.isPressed &&
				(E.isOverTarget && T(pe(E.target, f), E.pointerType, !1),
				(E.isPressed = !1),
				(E.isOverTarget = !1),
				(E.activePointerId = null),
				(E.pointerType = null),
				A(),
				c || It(E.target));
		}),
		L = Z((f) => {
			u && M(f);
		}),
		k = b.useMemo(() => {
			let f = P.current,
				E = {
					onKeyDown(y) {
						if (Dr(y.nativeEvent, y.currentTarget) && y.currentTarget.contains(y.target)) {
							Co(y.target, y.key) && y.preventDefault();
							let w = !0;
							!f.isPressed &&
								!y.repeat &&
								((f.target = y.currentTarget),
								(f.isPressed = !0),
								(w = x(y, 'keyboard')),
								$(document, 'keyup', R, !1)),
								w && y.stopPropagation(),
								y.metaKey && Ke() && f.metaKeyEvents.set(y.key, y.nativeEvent);
						} else y.key === 'Meta' && (f.metaKeyEvents = new Map());
					},
					onKeyUp(y) {
						Dr(y.nativeEvent, y.currentTarget) &&
							!y.repeat &&
							y.currentTarget.contains(y.target) &&
							C(pe(f.target, y), 'keyboard');
					},
					onClick(y) {
						if (
							!(y && !y.currentTarget.contains(y.target)) &&
							y &&
							y.button === 0 &&
							!f.isTriggeringEvent &&
							!Ae.isOpening
						) {
							let w = !0;
							if (
								(i && y.preventDefault(),
								!f.ignoreClickAfterPress &&
									!f.ignoreEmulatedMouseEvents &&
									!f.isPressed &&
									(f.pointerType === 'virtual' || $t(y.nativeEvent)))
							) {
								!i && !l && ue(y.currentTarget);
								let m = x(y, 'virtual'),
									v = C(y, 'virtual'),
									S = T(y, 'virtual');
								w = m && v && S;
							}
							(f.ignoreEmulatedMouseEvents = !1),
								(f.ignoreClickAfterPress = !1),
								w && y.stopPropagation();
						}
					},
				},
				R = (y) => {
					var w;
					if (f.isPressed && Dr(y, f.target)) {
						var m;
						Co(y.target, y.key) && y.preventDefault();
						let v = y.target,
							S = T(pe(f.target, y), 'keyboard', f.target.contains(v));
						A(),
							S && y.stopPropagation(),
							y.key !== 'Enter' &&
								On(f.target) &&
								f.target.contains(v) &&
								!y[Eo] &&
								((y[Eo] = !0), Ae(f.target, y, !1)),
							(f.isPressed = !1),
							(m = f.metaKeyEvents) === null || m === void 0 || m.delete(y.key);
					} else if (
						y.key === 'Meta' &&
						!((w = f.metaKeyEvents) === null || w === void 0) &&
						w.size
					) {
						let v = f.metaKeyEvents;
						f.metaKeyEvents = null;
						for (let S of v.values()) f.target.dispatchEvent(new KeyboardEvent('keyup', S));
					}
				};
			if (typeof PointerEvent < 'u') {
				(E.onPointerDown = (v) => {
					if (v.button !== 0 || !v.currentTarget.contains(v.target)) return;
					if (as(v.nativeEvent)) {
						f.pointerType = 'virtual';
						return;
					}
					Fr(v.currentTarget) && v.preventDefault(), (f.pointerType = v.pointerType);
					let S = !0;
					f.isPressed ||
						((f.isPressed = !0),
						(f.isOverTarget = !0),
						(f.activePointerId = v.pointerId),
						(f.target = v.currentTarget),
						!i && !l && ue(v.currentTarget),
						c || wo(f.target),
						(S = x(v, f.pointerType)),
						$(document, 'pointermove', y, !1),
						$(document, 'pointerup', w, !1),
						$(document, 'pointercancel', m, !1)),
						S && v.stopPropagation();
				}),
					(E.onMouseDown = (v) => {
						v.currentTarget.contains(v.target) &&
							v.button === 0 &&
							(Fr(v.currentTarget) && v.preventDefault(), v.stopPropagation());
					}),
					(E.onPointerUp = (v) => {
						!v.currentTarget.contains(v.target) ||
							f.pointerType === 'virtual' ||
							(v.button === 0 && Ge(v, v.currentTarget) && C(v, f.pointerType || v.pointerType));
					});
				let y = (v) => {
						v.pointerId === f.activePointerId &&
							(Ge(v, f.target)
								? f.isOverTarget || ((f.isOverTarget = !0), x(pe(f.target, v), f.pointerType))
								: f.isOverTarget &&
								  ((f.isOverTarget = !1), T(pe(f.target, v), f.pointerType, !1), L(v)));
					},
					w = (v) => {
						v.pointerId === f.activePointerId &&
							f.isPressed &&
							v.button === 0 &&
							(Ge(v, f.target)
								? T(pe(f.target, v), f.pointerType)
								: f.isOverTarget && T(pe(f.target, v), f.pointerType, !1),
							(f.isPressed = !1),
							(f.isOverTarget = !1),
							(f.activePointerId = null),
							(f.pointerType = null),
							A(),
							c || It(f.target));
					},
					m = (v) => {
						M(v);
					};
				E.onDragStart = (v) => {
					v.currentTarget.contains(v.target) && M(v);
				};
			} else {
				(E.onMouseDown = (m) => {
					if (m.button !== 0 || !m.currentTarget.contains(m.target)) return;
					if ((Fr(m.currentTarget) && m.preventDefault(), f.ignoreEmulatedMouseEvents)) {
						m.stopPropagation();
						return;
					}
					(f.isPressed = !0),
						(f.isOverTarget = !0),
						(f.target = m.currentTarget),
						(f.pointerType = $t(m.nativeEvent) ? 'virtual' : 'mouse'),
						!i && !l && ue(m.currentTarget),
						x(m, f.pointerType) && m.stopPropagation(),
						$(document, 'mouseup', y, !1);
				}),
					(E.onMouseEnter = (m) => {
						if (!m.currentTarget.contains(m.target)) return;
						let v = !0;
						f.isPressed &&
							!f.ignoreEmulatedMouseEvents &&
							((f.isOverTarget = !0), (v = x(m, f.pointerType))),
							v && m.stopPropagation();
					}),
					(E.onMouseLeave = (m) => {
						if (!m.currentTarget.contains(m.target)) return;
						let v = !0;
						f.isPressed &&
							!f.ignoreEmulatedMouseEvents &&
							((f.isOverTarget = !1), (v = T(m, f.pointerType, !1)), L(m)),
							v && m.stopPropagation();
					}),
					(E.onMouseUp = (m) => {
						m.currentTarget.contains(m.target) &&
							!f.ignoreEmulatedMouseEvents &&
							m.button === 0 &&
							C(m, f.pointerType || 'mouse');
					});
				let y = (m) => {
					if (m.button === 0) {
						if (((f.isPressed = !1), A(), f.ignoreEmulatedMouseEvents)) {
							f.ignoreEmulatedMouseEvents = !1;
							return;
						}
						Ge(m, f.target)
							? T(pe(f.target, m), f.pointerType)
							: f.isOverTarget && T(pe(f.target, m), f.pointerType, !1),
							(f.isOverTarget = !1);
					}
				};
				(E.onTouchStart = (m) => {
					if (!m.currentTarget.contains(m.target)) return;
					let v = Bu(m.nativeEvent);
					if (!v) return;
					(f.activePointerId = v.identifier),
						(f.ignoreEmulatedMouseEvents = !0),
						(f.isOverTarget = !0),
						(f.isPressed = !0),
						(f.target = m.currentTarget),
						(f.pointerType = 'touch'),
						!i && !l && ue(m.currentTarget),
						c || wo(f.target),
						x(m, f.pointerType) && m.stopPropagation(),
						$(window, 'scroll', w, !0);
				}),
					(E.onTouchMove = (m) => {
						if (!m.currentTarget.contains(m.target)) return;
						if (!f.isPressed) {
							m.stopPropagation();
							return;
						}
						let v = So(m.nativeEvent, f.activePointerId),
							S = !0;
						v && Ge(v, m.currentTarget)
							? f.isOverTarget || ((f.isOverTarget = !0), (S = x(m, f.pointerType)))
							: f.isOverTarget && ((f.isOverTarget = !1), (S = T(m, f.pointerType, !1)), L(m)),
							S && m.stopPropagation();
					}),
					(E.onTouchEnd = (m) => {
						if (!m.currentTarget.contains(m.target)) return;
						if (!f.isPressed) {
							m.stopPropagation();
							return;
						}
						let v = So(m.nativeEvent, f.activePointerId),
							S = !0;
						v && Ge(v, m.currentTarget)
							? (C(m, f.pointerType), (S = T(m, f.pointerType)))
							: f.isOverTarget && (S = T(m, f.pointerType, !1)),
							S && m.stopPropagation(),
							(f.isPressed = !1),
							(f.activePointerId = null),
							(f.isOverTarget = !1),
							(f.ignoreEmulatedMouseEvents = !0),
							c || It(f.target),
							A();
					}),
					(E.onTouchCancel = (m) => {
						m.currentTarget.contains(m.target) && (m.stopPropagation(), f.isPressed && M(m));
					});
				let w = (m) => {
					f.isPressed &&
						m.target.contains(f.target) &&
						M({ currentTarget: f.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
				};
				E.onDragStart = (m) => {
					m.currentTarget.contains(m.target) && M(m);
				};
			}
			return E;
		}, [$, i, l, A, c, M, L, T, x, C]);
	return (
		b.useEffect(
			() => () => {
				c || It(P.current.target);
			},
			[c]
		),
		{ isPressed: a || h, pressProps: de(p, k) }
	);
}
function On(e) {
	return e.tagName === 'A' && e.hasAttribute('href');
}
function Dr(e, t) {
	const { key: r, code: n } = e,
		o = t,
		s = o.getAttribute('role');
	return (
		(r === 'Enter' || r === ' ' || r === 'Spacebar' || n === 'Space') &&
		!(
			(o instanceof HTMLInputElement && !cs(o, r)) ||
			o instanceof HTMLTextAreaElement ||
			o.isContentEditable
		) &&
		!((s === 'link' || (!s && On(o))) && r !== 'Enter')
	);
}
function Bu(e) {
	const { targetTouches: t } = e;
	return t.length > 0 ? t[0] : null;
}
function So(e, t) {
	const r = e.changedTouches;
	for (let n = 0; n < r.length; n++) {
		const o = r[n];
		if (o.identifier === t) return o;
	}
	return null;
}
function pe(e, t) {
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
	};
}
function ju(e) {
	let t = e.width / 2 || e.radiusX || 0,
		r = e.height / 2 || e.radiusY || 0;
	return { top: e.clientY - r, right: e.clientX + t, bottom: e.clientY + r, left: e.clientX - t };
}
function Ku(e, t) {
	return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Ge(e, t) {
	let r = t.getBoundingClientRect(),
		n = ju(e);
	return Ku(r, n);
}
function Fr(e) {
	return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function Co(e, t) {
	return e instanceof HTMLInputElement
		? !cs(e, t)
		: e instanceof HTMLButtonElement
		? e.type !== 'submit' && e.type !== 'reset'
		: !On(e);
}
const Uu = new Set([
	'checkbox',
	'radio',
	'range',
	'color',
	'file',
	'image',
	'button',
	'submit',
	'reset',
]);
function cs(e, t) {
	return e.type === 'checkbox' || e.type === 'radio' ? t === ' ' : Uu.has(e.type);
}
function Hu({ children: e }) {
	return B.createElement(In.Provider, { value: void 0 }, e);
}
class Wu {
	isDefaultPrevented() {
		return this.nativeEvent.defaultPrevented;
	}
	preventDefault() {
		(this.defaultPrevented = !0), this.nativeEvent.preventDefault();
	}
	stopPropagation() {
		this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
	}
	isPropagationStopped() {
		return !1;
	}
	persist() {}
	constructor(t, r) {
		(this.nativeEvent = r),
			(this.target = r.target),
			(this.currentTarget = r.currentTarget),
			(this.relatedTarget = r.relatedTarget),
			(this.bubbles = r.bubbles),
			(this.cancelable = r.cancelable),
			(this.defaultPrevented = r.defaultPrevented),
			(this.eventPhase = r.eventPhase),
			(this.isTrusted = r.isTrusted),
			(this.timeStamp = r.timeStamp),
			(this.type = t);
	}
}
function fs(e) {
	let t = b.useRef({ isFocused: !1, observer: null });
	Y(() => {
		const n = t.current;
		return () => {
			n.observer && (n.observer.disconnect(), (n.observer = null));
		};
	}, []);
	let r = Z((n) => {
		e?.(n);
	});
	return b.useCallback(
		(n) => {
			if (
				n.target instanceof HTMLButtonElement ||
				n.target instanceof HTMLInputElement ||
				n.target instanceof HTMLTextAreaElement ||
				n.target instanceof HTMLSelectElement
			) {
				t.current.isFocused = !0;
				let o = n.target,
					s = (i) => {
						(t.current.isFocused = !1),
							o.disabled && r(new Wu('blur', i)),
							t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
					};
				o.addEventListener('focusout', s, { once: !0 }),
					(t.current.observer = new MutationObserver(() => {
						if (t.current.isFocused && o.disabled) {
							t.current.observer.disconnect();
							let i = o === document.activeElement ? null : document.activeElement;
							o.dispatchEvent(new FocusEvent('blur', { relatedTarget: i })),
								o.dispatchEvent(new FocusEvent('focusout', { bubbles: !0, relatedTarget: i }));
						}
					})),
					t.current.observer.observe(o, { attributes: !0, attributeFilter: ['disabled'] });
			}
		},
		[r]
	);
}
function ds(e) {
	let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
	const s = b.useCallback(
			(l) => {
				if (l.target === l.currentTarget) return n && n(l), o && o(!1), !0;
			},
			[n, o]
		),
		i = fs(s),
		a = b.useCallback(
			(l) => {
				l.target === l.currentTarget &&
					document.activeElement === l.target &&
					(r && r(l), o && o(!0), i(l));
			},
			[o, r, i]
		);
	return {
		focusProps: { onFocus: !t && (r || o || n) ? a : void 0, onBlur: !t && (n || o) ? s : void 0 },
	};
}
let xe = null,
	wt = new Set(),
	Ao = !1,
	Ue = !1,
	sn = !1;
const zu = { Tab: !0, Escape: !0 };
function Pr(e, t) {
	for (let r of wt) r(e, t);
}
function Gu(e) {
	return !(
		e.metaKey ||
		(!Ke() && e.altKey) ||
		e.ctrlKey ||
		e.key === 'Control' ||
		e.key === 'Shift' ||
		e.key === 'Meta'
	);
}
function Mo(e) {
	(Ue = !0), Gu(e) && ((xe = 'keyboard'), Pr('keyboard', e));
}
function _e(e) {
	(xe = 'pointer'),
		(e.type === 'mousedown' || e.type === 'pointerdown') && ((Ue = !0), Pr('pointer', e));
}
function _u(e) {
	$t(e) && ((Ue = !0), (xe = 'virtual'));
}
function Xu(e) {
	e.target === window ||
		e.target === document ||
		(!Ue && !sn && ((xe = 'virtual'), Pr('virtual', e)), (Ue = !1), (sn = !1));
}
function Yu() {
	(Ue = !1), (sn = !0);
}
function rr() {
	if (typeof window > 'u' || Ao) return;
	let e = HTMLElement.prototype.focus;
	(HTMLElement.prototype.focus = function () {
		(Ue = !0), e.apply(this, arguments);
	}),
		document.addEventListener('keydown', Mo, !0),
		document.addEventListener('keyup', Mo, !0),
		document.addEventListener('click', _u, !0),
		window.addEventListener('focus', Xu, !0),
		window.addEventListener('blur', Yu, !1),
		typeof PointerEvent < 'u'
			? (document.addEventListener('pointerdown', _e, !0),
			  document.addEventListener('pointermove', _e, !0),
			  document.addEventListener('pointerup', _e, !0))
			: (document.addEventListener('mousedown', _e, !0),
			  document.addEventListener('mousemove', _e, !0),
			  document.addEventListener('mouseup', _e, !0)),
		(Ao = !0);
}
typeof document < 'u' &&
	(document.readyState !== 'loading' ? rr() : document.addEventListener('DOMContentLoaded', rr));
function ps() {
	return xe !== 'pointer';
}
function qu() {
	return xe;
}
function Qm(e) {
	(xe = e), Pr(e, null);
}
function eg() {
	rr();
	let [e, t] = b.useState(xe);
	return (
		b.useEffect(() => {
			let r = () => {
				t(xe);
			};
			return (
				wt.add(r),
				() => {
					wt.delete(r);
				}
			);
		}, []),
		br() ? null : e
	);
}
function Zu(e, t, r) {
	return !(e && t === 'keyboard' && r instanceof KeyboardEvent && !zu[r.key]);
}
function Ju(e, t, r) {
	rr(),
		b.useEffect(() => {
			let n = (o, s) => {
				Zu(r?.isTextInput, o, s) && e(ps());
			};
			return (
				wt.add(n),
				() => {
					wt.delete(n);
				}
			);
		}, t);
}
function Nn(e) {
	let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e,
		s = b.useRef({ isFocusWithin: !1 }),
		i = b.useCallback(
			(u) => {
				s.current.isFocusWithin &&
					!u.currentTarget.contains(u.relatedTarget) &&
					((s.current.isFocusWithin = !1), r && r(u), o && o(!1));
			},
			[r, o, s]
		),
		a = fs(i),
		l = b.useCallback(
			(u) => {
				!s.current.isFocusWithin &&
					document.activeElement === u.target &&
					(n && n(u), o && o(!0), (s.current.isFocusWithin = !0), a(u));
			},
			[n, o, a]
		);
	return t
		? { focusWithinProps: { onFocus: null, onBlur: null } }
		: { focusWithinProps: { onFocus: l, onBlur: i } };
}
let nr = !1,
	Ir = 0;
function an() {
	(nr = !0),
		setTimeout(() => {
			nr = !1;
		}, 50);
}
function Lo(e) {
	e.pointerType === 'touch' && an();
}
function Qu() {
	if (!(typeof document > 'u'))
		return (
			typeof PointerEvent < 'u'
				? document.addEventListener('pointerup', Lo)
				: document.addEventListener('touchend', an),
			Ir++,
			() => {
				Ir--,
					!(Ir > 0) &&
						(typeof PointerEvent < 'u'
							? document.removeEventListener('pointerup', Lo)
							: document.removeEventListener('touchend', an));
			}
		);
}
function tg(e) {
	let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e,
		[s, i] = b.useState(!1),
		a = b.useRef({
			isHovered: !1,
			ignoreEmulatedMouseEvents: !1,
			pointerType: '',
			target: null,
		}).current;
	b.useEffect(Qu, []);
	let { hoverProps: l, triggerHoverEnd: u } = b.useMemo(() => {
		let c = (h, g) => {
				if (
					((a.pointerType = g),
					o || g === 'touch' || a.isHovered || !h.currentTarget.contains(h.target))
				)
					return;
				a.isHovered = !0;
				let P = h.currentTarget;
				(a.target = P),
					t && t({ type: 'hoverstart', target: P, pointerType: g }),
					r && r(!0),
					i(!0);
			},
			d = (h, g) => {
				if (((a.pointerType = ''), (a.target = null), g === 'touch' || !a.isHovered)) return;
				a.isHovered = !1;
				let P = h.currentTarget;
				n && n({ type: 'hoverend', target: P, pointerType: g }), r && r(!1), i(!1);
			},
			p = {};
		return (
			typeof PointerEvent < 'u'
				? ((p.onPointerEnter = (h) => {
						(nr && h.pointerType === 'mouse') || c(h, h.pointerType);
				  }),
				  (p.onPointerLeave = (h) => {
						!o && h.currentTarget.contains(h.target) && d(h, h.pointerType);
				  }))
				: ((p.onTouchStart = () => {
						a.ignoreEmulatedMouseEvents = !0;
				  }),
				  (p.onMouseEnter = (h) => {
						!a.ignoreEmulatedMouseEvents && !nr && c(h, 'mouse'),
							(a.ignoreEmulatedMouseEvents = !1);
				  }),
				  (p.onMouseLeave = (h) => {
						!o && h.currentTarget.contains(h.target) && d(h, 'mouse');
				  })),
			{ hoverProps: p, triggerHoverEnd: d }
		);
	}, [t, r, n, o, a]);
	return (
		b.useEffect(() => {
			o && u({ currentTarget: a.target }, a.pointerType);
		}, [o]),
		{ hoverProps: l, isHovered: s }
	);
}
function ec(e) {
	let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e,
		s = b.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
		i = Z((l) => {
			r && Bt(l, t) && (o && o(l), (s.current.isPointerDown = !0));
		}),
		a = Z((l) => {
			r && r(l);
		});
	b.useEffect(() => {
		let l = s.current;
		if (!n)
			if (typeof PointerEvent < 'u') {
				let u = (c) => {
					l.isPointerDown && Bt(c, t) && a(c), (l.isPointerDown = !1);
				};
				return (
					document.addEventListener('pointerdown', i, !0),
					document.addEventListener('pointerup', u, !0),
					() => {
						document.removeEventListener('pointerdown', i, !0),
							document.removeEventListener('pointerup', u, !0);
					}
				);
			} else {
				let u = (d) => {
						l.ignoreEmulatedMouseEvents
							? (l.ignoreEmulatedMouseEvents = !1)
							: l.isPointerDown && Bt(d, t) && a(d),
							(l.isPointerDown = !1);
					},
					c = (d) => {
						(l.ignoreEmulatedMouseEvents = !0),
							l.isPointerDown && Bt(d, t) && a(d),
							(l.isPointerDown = !1);
					};
				return (
					document.addEventListener('mousedown', i, !0),
					document.addEventListener('mouseup', u, !0),
					document.addEventListener('touchstart', i, !0),
					document.addEventListener('touchend', c, !0),
					() => {
						document.removeEventListener('mousedown', i, !0),
							document.removeEventListener('mouseup', u, !0),
							document.removeEventListener('touchstart', i, !0),
							document.removeEventListener('touchend', c, !0);
					}
				);
			}
	}, [t, n, i, a]);
}
function Bt(e, t) {
	if (e.button > 0) return !1;
	if (e.target) {
		const r = e.target.ownerDocument;
		if (
			!r ||
			!r.documentElement.contains(e.target) ||
			e.target.closest('[data-react-aria-top-layer]')
		)
			return !1;
	}
	return t.current && !t.current.contains(e.target);
}
function ko(e) {
	if (!e) return;
	let t = !0;
	return (r) => {
		let n = {
			...r,
			preventDefault() {
				r.preventDefault();
			},
			isDefaultPrevented() {
				return r.isDefaultPrevented();
			},
			stopPropagation() {
				console.error(
					'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.'
				);
			},
			continuePropagation() {
				t = !1;
			},
		};
		e(n), t && r.stopPropagation();
	};
}
function tc(e) {
	return {
		keyboardProps: e.isDisabled ? {} : { onKeyDown: ko(e.onKeyDown), onKeyUp: ko(e.onKeyUp) },
	};
}
const rc = 500;
function rg(e) {
	let {
		isDisabled: t,
		onLongPressStart: r,
		onLongPressEnd: n,
		onLongPress: o,
		threshold: s = rc,
		accessibilityDescription: i,
	} = e;
	const a = b.useRef(null);
	let { addGlobalListener: l, removeGlobalListener: u } = Rn(),
		{ pressProps: c } = Nu({
			isDisabled: t,
			onPressStart(p) {
				if (
					(p.continuePropagation(),
					(p.pointerType === 'mouse' || p.pointerType === 'touch') &&
						(r && r({ ...p, type: 'longpressstart' }),
						(a.current = setTimeout(() => {
							p.target.dispatchEvent(new PointerEvent('pointercancel', { bubbles: !0 })),
								o && o({ ...p, type: 'longpress' }),
								(a.current = null);
						}, s)),
						p.pointerType === 'touch'))
				) {
					let h = (g) => {
						g.preventDefault();
					};
					l(p.target, 'contextmenu', h, { once: !0 }),
						l(
							window,
							'pointerup',
							() => {
								setTimeout(() => {
									u(p.target, 'contextmenu', h);
								}, 30);
							},
							{ once: !0 }
						);
				}
			},
			onPressEnd(p) {
				a.current && clearTimeout(a.current),
					n &&
						(p.pointerType === 'mouse' || p.pointerType === 'touch') &&
						n({ ...p, type: 'longpressend' });
			},
		}),
		d = Eu(o && !t ? i : null);
	return { longPressProps: de(c, d) };
}
function hs(e) {
	if (qu() === 'virtual') {
		let t = document.activeElement;
		Vn(() => {
			document.activeElement === t && document.contains(e) && ue(e);
		});
	} else ue(e);
}
function nc(e) {
	if (!(e instanceof HTMLElement) && !(e instanceof SVGElement)) return !1;
	let { display: t, visibility: r } = e.style,
		n = t !== 'none' && r !== 'hidden' && r !== 'collapse';
	if (n) {
		const { getComputedStyle: o } = e.ownerDocument.defaultView;
		let { display: s, visibility: i } = o(e);
		n = s !== 'none' && i !== 'hidden' && i !== 'collapse';
	}
	return n;
}
function oc(e, t) {
	return (
		!e.hasAttribute('hidden') &&
		(e.nodeName === 'DETAILS' && t && t.nodeName !== 'SUMMARY' ? e.hasAttribute('open') : !0)
	);
}
function ms(e, t) {
	return (
		e.nodeName !== '#comment' && nc(e) && oc(e, t) && (!e.parentElement || ms(e.parentElement, e))
	);
}
const Vo = B.createContext(null);
let H = null;
function ic(e) {
	let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e,
		s = b.useRef(),
		i = b.useRef(),
		a = b.useRef([]),
		{ parentNode: l } = b.useContext(Vo) || {},
		u = b.useMemo(() => new ln({ scopeRef: a }), [a]);
	Y(() => {
		let p = l || G.root;
		if (G.getTreeNode(p.scopeRef) && H && !ir(H, p.scopeRef)) {
			let h = G.getTreeNode(H);
			h && (p = h);
		}
		p.addChild(u), G.addNode(u);
	}, [u, l]),
		Y(() => {
			let p = G.getTreeNode(a);
			p.contain = r;
		}, [r]),
		Y(() => {
			let p = s.current.nextSibling,
				h = [];
			for (; p && p !== i.current; ) h.push(p), (p = p.nextSibling);
			a.current = h;
		}, [t]),
		dc(a, n, r),
		uc(a, r),
		hc(a, n, r),
		fc(a, o),
		b.useEffect(() => {
			if (a) {
				let p = document.activeElement,
					h = null;
				if (J(p, a.current)) {
					for (let g of G.traverse()) J(p, g.scopeRef.current) && (h = g);
					h === G.getTreeNode(a) && (H = h.scopeRef);
				}
				return () => {
					let g = G.getTreeNode(a).parent.scopeRef;
					(a === H || ir(a, H)) && (!g || G.getTreeNode(g)) && (H = g), G.removeTreeNode(a);
				};
			}
		}, [a]);
	let c = b.useMemo(() => sc(a), []),
		d = b.useMemo(() => ({ focusManager: c, parentNode: u }), [u, c]);
	return B.createElement(
		Vo.Provider,
		{ value: d },
		B.createElement('span', { 'data-focus-scope-start': !0, hidden: !0, ref: s }),
		t,
		B.createElement('span', { 'data-focus-scope-end': !0, hidden: !0, ref: i })
	);
}
function sc(e) {
	return {
		focusNext(t = {}) {
			let r = e.current,
				{ from: n, tabbable: o, wrap: s, accept: i } = t,
				a = n || document.activeElement,
				l = r[0].previousElementSibling,
				u = Ee(Ne(r), { tabbable: o, accept: i }, r);
			u.currentNode = J(a, r) ? a : l;
			let c = u.nextNode();
			return !c && s && ((u.currentNode = l), (c = u.nextNode())), c && ge(c, !0), c;
		},
		focusPrevious(t = {}) {
			let r = e.current,
				{ from: n, tabbable: o, wrap: s, accept: i } = t,
				a = n || document.activeElement,
				l = r[r.length - 1].nextElementSibling,
				u = Ee(Ne(r), { tabbable: o, accept: i }, r);
			u.currentNode = J(a, r) ? a : l;
			let c = u.previousNode();
			return !c && s && ((u.currentNode = l), (c = u.previousNode())), c && ge(c, !0), c;
		},
		focusFirst(t = {}) {
			let r = e.current,
				{ tabbable: n, accept: o } = t,
				s = Ee(Ne(r), { tabbable: n, accept: o }, r);
			s.currentNode = r[0].previousElementSibling;
			let i = s.nextNode();
			return i && ge(i, !0), i;
		},
		focusLast(t = {}) {
			let r = e.current,
				{ tabbable: n, accept: o } = t,
				s = Ee(Ne(r), { tabbable: n, accept: o }, r);
			s.currentNode = r[r.length - 1].nextElementSibling;
			let i = s.previousNode();
			return i && ge(i, !0), i;
		},
	};
}
const Bn = [
		'input:not([disabled]):not([type=hidden])',
		'select:not([disabled])',
		'textarea:not([disabled])',
		'button:not([disabled])',
		'a[href]',
		'area[href]',
		'summary',
		'iframe',
		'object',
		'embed',
		'audio[controls]',
		'video[controls]',
		'[contenteditable]',
	],
	ac = Bn.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
Bn.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const lc = Bn.join(':not([hidden]):not([tabindex="-1"]),');
function Ne(e) {
	return e[0].parentElement;
}
function vt(e) {
	let t = G.getTreeNode(H);
	for (; t && t.scopeRef !== e; ) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function uc(e, t) {
	let r = b.useRef(),
		n = b.useRef(null);
	Y(() => {
		let o = e.current;
		if (!t) {
			n.current && (cancelAnimationFrame(n.current), (n.current = null));
			return;
		}
		let s = (l) => {
				if (l.key !== 'Tab' || l.altKey || l.ctrlKey || l.metaKey || !vt(e)) return;
				let u = document.activeElement,
					c = e.current;
				if (!J(u, c)) return;
				let d = Ee(Ne(c), { tabbable: !0 }, c);
				d.currentNode = u;
				let p = l.shiftKey ? d.previousNode() : d.nextNode();
				p ||
					((d.currentNode = l.shiftKey
						? c[c.length - 1].nextElementSibling
						: c[0].previousElementSibling),
					(p = l.shiftKey ? d.previousNode() : d.nextNode())),
					l.preventDefault(),
					p && ge(p, !0);
			},
			i = (l) => {
				(!H || ir(H, e)) && J(l.target, e.current)
					? ((H = e), (r.current = l.target))
					: vt(e) && !or(l.target, e)
					? r.current
						? r.current.focus()
						: H && sr(H.current)
					: vt(e) && (r.current = l.target);
			},
			a = (l) => {
				n.current && cancelAnimationFrame(n.current),
					(n.current = requestAnimationFrame(() => {
						vt(e) &&
							!or(document.activeElement, e) &&
							((H = e),
							document.body.contains(l.target)
								? ((r.current = l.target), r.current.focus())
								: H && sr(H.current));
					}));
			};
		return (
			document.addEventListener('keydown', s, !1),
			document.addEventListener('focusin', i, !1),
			o.forEach((l) => l.addEventListener('focusin', i, !1)),
			o.forEach((l) => l.addEventListener('focusout', a, !1)),
			() => {
				document.removeEventListener('keydown', s, !1),
					document.removeEventListener('focusin', i, !1),
					o.forEach((l) => l.removeEventListener('focusin', i, !1)),
					o.forEach((l) => l.removeEventListener('focusout', a, !1));
			}
		);
	}, [e, t]),
		Y(
			() => () => {
				n.current && cancelAnimationFrame(n.current);
			},
			[n]
		);
}
function gs(e) {
	return or(e);
}
function J(e, t) {
	return t.some((r) => r.contains(e));
}
function or(e, t = null) {
	if (e instanceof Element && e.closest('[data-react-aria-top-layer]')) return !0;
	for (let { scopeRef: r } of G.traverse(G.getTreeNode(t))) if (J(e, r.current)) return !0;
	return !1;
}
function cc(e) {
	return or(e, H);
}
function ir(e, t) {
	var r;
	let n = (r = G.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
	for (; n; ) {
		if (n.scopeRef === e) return !0;
		n = n.parent;
	}
	return !1;
}
function ge(e, t = !1) {
	if (e != null && !t)
		try {
			hs(e);
		} catch {}
	else if (e != null)
		try {
			e.focus();
		} catch {}
}
function sr(e, t = !0) {
	let r = e[0].previousElementSibling,
		n = Ee(Ne(e), { tabbable: t }, e);
	n.currentNode = r;
	let o = n.nextNode();
	t && !o && ((n = Ee(Ne(e), { tabbable: !1 }, e)), (n.currentNode = r), (o = n.nextNode())), ge(o);
}
function fc(e, t) {
	const r = B.useRef(t);
	b.useEffect(() => {
		r.current && ((H = e), J(document.activeElement, H.current) || sr(e.current)), (r.current = !1);
	}, [e]);
}
function dc(e, t, r) {
	Y(() => {
		if (t || r) return;
		let n = e.current,
			o = (s) => {
				let i = s.target;
				J(i, e.current) ? (H = e) : gs(i) || (H = null);
			};
		return (
			document.addEventListener('focusin', o, !1),
			n.forEach((s) => s.addEventListener('focusin', o, !1)),
			() => {
				document.removeEventListener('focusin', o, !1),
					n.forEach((s) => s.removeEventListener('focusin', o, !1));
			}
		);
	}, [e, t, r]);
}
function pc(e) {
	let t = G.getTreeNode(H);
	for (; t && t.scopeRef !== e; ) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function hc(e, t, r) {
	const n = b.useRef(typeof document < 'u' ? document.activeElement : null);
	Y(() => {
		let o = e.current;
		if (!t || r) return;
		let s = () => {
			(!H || ir(H, e)) && J(document.activeElement, e.current) && (H = e);
		};
		return (
			document.addEventListener('focusin', s, !1),
			o.forEach((i) => i.addEventListener('focusin', s, !1)),
			() => {
				document.removeEventListener('focusin', s, !1),
					o.forEach((i) => i.removeEventListener('focusin', s, !1));
			}
		);
	}, [e, r]),
		Y(() => {
			if (!t) return;
			let o = (s) => {
				if (s.key !== 'Tab' || s.altKey || s.ctrlKey || s.metaKey || !vt(e)) return;
				let i = document.activeElement;
				if (!J(i, e.current)) return;
				let a = G.getTreeNode(e).nodeToRestore,
					l = Ee(document.body, { tabbable: !0 });
				l.currentNode = i;
				let u = s.shiftKey ? l.previousNode() : l.nextNode();
				if (
					((!document.body.contains(a) || a === document.body) &&
						((a = null), (G.getTreeNode(e).nodeToRestore = null)),
					(!u || !J(u, e.current)) && a)
				) {
					l.currentNode = a;
					do u = s.shiftKey ? l.previousNode() : l.nextNode();
					while (J(u, e.current));
					s.preventDefault(), s.stopPropagation(), u ? ge(u, !0) : gs(a) ? ge(a, !0) : i.blur();
				}
			};
			return (
				r || document.addEventListener('keydown', o, !0),
				() => {
					r || document.removeEventListener('keydown', o, !0);
				}
			);
		}, [e, t, r]),
		Y(() => {
			if (t)
				return (
					(G.getTreeNode(e).nodeToRestore = n.current),
					() => {
						let o = G.getTreeNode(e).nodeToRestore;
						if (
							t &&
							o &&
							(J(document.activeElement, e.current) ||
								(document.activeElement === document.body && pc(e)))
						) {
							let s = G.clone();
							requestAnimationFrame(() => {
								if (document.activeElement === document.body) {
									let i = s.getTreeNode(e);
									for (; i; ) {
										if (i.nodeToRestore && document.body.contains(i.nodeToRestore)) {
											ge(i.nodeToRestore);
											return;
										}
										i = i.parent;
									}
									for (i = s.getTreeNode(e); i; ) {
										if (i.scopeRef && G.getTreeNode(i.scopeRef)) {
											sr(i.scopeRef.current, !0);
											return;
										}
										i = i.parent;
									}
								}
							});
						}
					}
				);
		}, [e, t]);
}
function Ee(e, t, r) {
	let n = t?.tabbable ? lc : ac,
		o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode(s) {
				var i;
				return !(t == null || (i = t.from) === null || i === void 0) && i.contains(s)
					? NodeFilter.FILTER_REJECT
					: s.matches(n) && ms(s) && (!r || J(s, r)) && (!t?.accept || t.accept(s))
					? NodeFilter.FILTER_ACCEPT
					: NodeFilter.FILTER_SKIP;
			},
		});
	return t?.from && (o.currentNode = t.from), o;
}
class jn {
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(t) {
		return this.fastMap.get(t);
	}
	addTreeNode(t, r, n) {
		let o = this.fastMap.get(r ?? null),
			s = new ln({ scopeRef: t });
		o.addChild(s), (s.parent = o), this.fastMap.set(t, s), n && (s.nodeToRestore = n);
	}
	addNode(t) {
		this.fastMap.set(t.scopeRef, t);
	}
	removeTreeNode(t) {
		if (t === null) return;
		let r = this.fastMap.get(t),
			n = r.parent;
		for (let s of this.traverse())
			s !== r &&
				r.nodeToRestore &&
				s.nodeToRestore &&
				r.scopeRef.current &&
				J(s.nodeToRestore, r.scopeRef.current) &&
				(s.nodeToRestore = r.nodeToRestore);
		let o = r.children;
		n.removeChild(r),
			o.size > 0 && o.forEach((s) => n.addChild(s)),
			this.fastMap.delete(r.scopeRef);
	}
	*traverse(t = this.root) {
		if ((t.scopeRef != null && (yield t), t.children.size > 0))
			for (let r of t.children) yield* this.traverse(r);
	}
	clone() {
		let t = new jn();
		for (let r of this.traverse()) t.addTreeNode(r.scopeRef, r.parent.scopeRef, r.nodeToRestore);
		return t;
	}
	constructor() {
		(this.fastMap = new Map()),
			(this.root = new ln({ scopeRef: null })),
			this.fastMap.set(null, this.root);
	}
}
class ln {
	addChild(t) {
		this.children.add(t), (t.parent = this);
	}
	removeChild(t) {
		this.children.delete(t), (t.parent = void 0);
	}
	constructor(t) {
		(this.children = new Set()), (this.contain = !1), (this.scopeRef = t.scopeRef);
	}
}
let G = new jn();
function ng(e = {}) {
	let { autoFocus: t = !1, isTextInput: r, within: n } = e,
		o = b.useRef({ isFocused: !1, isFocusVisible: t || ps() }),
		[s, i] = b.useState(!1),
		[a, l] = b.useState(() => o.current.isFocused && o.current.isFocusVisible),
		u = b.useCallback(() => l(o.current.isFocused && o.current.isFocusVisible), []),
		c = b.useCallback(
			(h) => {
				(o.current.isFocused = h), i(h), u();
			},
			[u]
		);
	Ju(
		(h) => {
			(o.current.isFocusVisible = h), u();
		},
		[],
		{ isTextInput: r }
	);
	let { focusProps: d } = ds({ isDisabled: n, onFocusChange: c }),
		{ focusWithinProps: p } = Nn({ isDisabled: !n, onFocusWithinChange: c });
	return { isFocused: s, isFocusVisible: a, focusProps: n ? p : d };
}
let mc = B.createContext(null);
function gc(e) {
	let t = b.useContext(mc) || {};
	Dn(t, e);
	let { ref: r, ...n } = t;
	return n;
}
function vc(e, t) {
	let { focusProps: r } = ds(e),
		{ keyboardProps: n } = tc(e),
		o = de(r, n),
		s = gc(t),
		i = e.isDisabled ? {} : s,
		a = b.useRef(e.autoFocus);
	return (
		b.useEffect(() => {
			a.current && t.current && hs(t.current), (a.current = !1);
		}, [t]),
		{
			focusableProps: de(
				{ ...o, tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0 },
				i
			),
		}
	);
}
const Ro = {
	border: 0,
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: '1px',
	margin: '-1px',
	overflow: 'hidden',
	padding: 0,
	position: 'absolute',
	width: '1px',
	whiteSpace: 'nowrap',
};
function yc(e = {}) {
	let { style: t, isFocusable: r } = e,
		[n, o] = b.useState(!1),
		{ focusWithinProps: s } = Nn({ isDisabled: !r, onFocusWithinChange: (a) => o(a) }),
		i = b.useMemo(() => (n ? t : t ? { ...Ro, ...t } : Ro), [n]);
	return { visuallyHiddenProps: { ...s, style: i } };
}
function bc(e) {
	let { children: t, elementType: r = 'div', isFocusable: n, style: o, ...s } = e,
		{ visuallyHiddenProps: i } = yc(e);
	return B.createElement(r, de(s, i), t);
}
function xc(e) {
	return e && e.__esModule ? e.default : e;
}
const Do = { top: 'top', bottom: 'top', left: 'left', right: 'left' },
	ar = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' },
	Pc = { top: 'left', left: 'top' },
	un = { top: 'height', left: 'width' },
	Tc = { width: 'totalWidth', height: 'totalHeight' },
	jt = {};
let Xe = typeof document < 'u' && window.visualViewport;
function Fo(e) {
	let t = 0,
		r = 0,
		n = 0,
		o = 0,
		s = 0,
		i = 0,
		a = {};
	if (e.tagName === 'BODY') {
		let c = document.documentElement;
		(n = c.clientWidth), (o = c.clientHeight);
		var l;
		t = (l = Xe?.width) !== null && l !== void 0 ? l : n;
		var u;
		(r = (u = Xe?.height) !== null && u !== void 0 ? u : o),
			(a.top = c.scrollTop || e.scrollTop),
			(a.left = c.scrollLeft || e.scrollLeft);
	} else
		({ width: t, height: r, top: s, left: i } = it(e)),
			(a.top = e.scrollTop),
			(a.left = e.scrollLeft),
			(n = t),
			(o = r);
	return { width: t, height: r, totalWidth: n, totalHeight: o, scroll: a, top: s, left: i };
}
function $c(e) {
	return { top: e.scrollTop, left: e.scrollLeft, width: e.scrollWidth, height: e.scrollHeight };
}
function Io(e, t, r, n, o, s) {
	let i = o.scroll[e],
		a = n[un[e]],
		l = t - s - i,
		u = t + s - i + r;
	return l < 0 ? -l : u > a ? Math.max(a - u, -l) : 0;
}
function wc(e) {
	let t = window.getComputedStyle(e);
	return {
		top: parseInt(t.marginTop, 10) || 0,
		bottom: parseInt(t.marginBottom, 10) || 0,
		left: parseInt(t.marginLeft, 10) || 0,
		right: parseInt(t.marginRight, 10) || 0,
	};
}
function Oo(e) {
	if (jt[e]) return jt[e];
	let [t, r] = e.split(' '),
		n = Do[t] || 'right',
		o = Pc[n];
	Do[r] || (r = 'center');
	let s = un[n],
		i = un[o];
	return (
		(jt[e] = { placement: t, crossPlacement: r, axis: n, crossAxis: o, size: s, crossSize: i }),
		jt[e]
	);
}
function Or(e, t, r, n, o, s, i, a, l, u) {
	let { placement: c, crossPlacement: d, axis: p, crossAxis: h, size: g, crossSize: P } = n,
		$ = {};
	($[h] = e[h]),
		d === 'center' ? ($[h] += (e[P] - r[P]) / 2) : d !== h && ($[h] += e[P] - r[P]),
		($[h] += s);
	const A = e[h] - r[P] + l + u,
		x = e[h] + e[P] - l - u;
	if ((($[h] = tn($[h], A, x)), c === p)) {
		const T = a ? i[g] : t[Tc[g]];
		$[ar[p]] = Math.floor(T - e[p] + o);
	} else $[p] = Math.floor(e[p] + e[g] + o);
	return $;
}
function Ec(e, t, r, n, o, s) {
	return e.top != null
		? Math.max(0, t.height + t.top + t.scroll.top - (r.top + e.top) - (o.top + o.bottom + s))
		: Math.max(0, n.top + r.top - (t.top + t.scroll.top) - (o.top + o.bottom + s));
}
function No(e, t, r, n, o, s) {
	let { placement: i, axis: a, size: l } = s;
	return i === a
		? Math.max(0, r[a] - e[a] - e.scroll[a] + t[a] - n[a] - n[ar[a]] - o)
		: Math.max(0, e[l] + e[a] + e.scroll[a] - t[a] - r[a] - r[l] - n[a] - n[ar[a]] - o);
}
function Sc(e, t, r, n, o, s, i, a, l, u, c, d, p, h, g, P) {
	let $ = Oo(e),
		{ size: A, crossAxis: x, crossSize: T, placement: C, crossPlacement: M } = $,
		L = Or(t, a, r, $, c, d, u, p, g, P),
		k = c,
		f = No(a, u, t, o, s + c, $);
	if (i && n[A] > f) {
		let N = Oo(`${ar[C]} ${M}`),
			j = Or(t, a, r, N, c, d, u, p, g, P);
		No(a, u, t, o, s + c, N) > f && (($ = N), (L = j), (k = c));
	}
	let E = Io(x, L[x], r[T], a, l, s);
	L[x] += E;
	let R = Ec(L, a, u, t, o, s);
	h && h < R && (R = h),
		(r.height = Math.min(r.height, R)),
		(L = Or(t, a, r, $, k, d, u, p, g, P)),
		(E = Io(x, L[x], r[T], a, l, s)),
		(L[x] += E);
	let y = {},
		w = t[x] + 0.5 * t[T] - r[x];
	const m = g / 2 + P,
		v = r[T] - g / 2 - P,
		S = t[x] - r[x] + g / 2,
		D = t[x] + t[T] - r[x] - g / 2,
		O = tn(w, S, D);
	return (
		(y[x] = tn(O, m, v)),
		{
			position: L,
			maxHeight: R,
			arrowOffsetLeft: y.left,
			arrowOffsetTop: y.top,
			placement: $.placement,
		}
	);
}
function Cc(e) {
	let {
			placement: t,
			targetNode: r,
			overlayNode: n,
			scrollNode: o,
			padding: s,
			shouldFlip: i,
			boundaryElement: a,
			offset: l,
			crossOffset: u,
			maxHeight: c,
			arrowSize: d = 0,
			arrowBoundaryOffset: p = 0,
		} = e,
		h = n instanceof HTMLElement ? Ac(n) : document.documentElement,
		g = h === document.documentElement;
	const P = window.getComputedStyle(h).position;
	let $ = !!P && P !== 'static',
		A = g ? it(r) : Bo(r, h);
	if (!g) {
		let { marginTop: f, marginLeft: E } = window.getComputedStyle(r);
		(A.top += parseInt(f, 10) || 0), (A.left += parseInt(E, 10) || 0);
	}
	let x = it(n),
		T = wc(n);
	(x.width += T.left + T.right), (x.height += T.top + T.bottom);
	let C = $c(o),
		M = Fo(a),
		L = Fo(h),
		k = a.tagName === 'BODY' ? it(h) : Bo(h, a);
	return Sc(t, A, x, C, T, s, i, M, L, k, l, u, $, c, d, p);
}
function it(e) {
	let { top: t, left: r, width: n, height: o } = e.getBoundingClientRect(),
		{ scrollTop: s, scrollLeft: i, clientTop: a, clientLeft: l } = document.documentElement;
	return { top: t + s - a, left: r + i - l, width: n, height: o };
}
function Bo(e, t) {
	let r = window.getComputedStyle(e),
		n;
	if (r.position === 'fixed') {
		let { top: o, left: s, width: i, height: a } = e.getBoundingClientRect();
		n = { top: o, left: s, width: i, height: a };
	} else {
		n = it(e);
		let o = it(t),
			s = window.getComputedStyle(t);
		(o.top += (parseInt(s.borderTopWidth, 10) || 0) - t.scrollTop),
			(o.left += (parseInt(s.borderLeftWidth, 10) || 0) - t.scrollLeft),
			(n.top -= o.top),
			(n.left -= o.left);
	}
	return (n.top -= parseInt(r.marginTop, 10) || 0), (n.left -= parseInt(r.marginLeft, 10) || 0), n;
}
function Ac(e) {
	let t = e.offsetParent;
	if (
		(t &&
			t === document.body &&
			window.getComputedStyle(t).position === 'static' &&
			!jo(t) &&
			(t = document.documentElement),
		t == null)
	)
		for (t = e.parentElement; t && !jo(t); ) t = t.parentElement;
	return t || document.documentElement;
}
function jo(e) {
	let t = window.getComputedStyle(e);
	return (
		t.transform !== 'none' ||
		/transform|perspective/.test(t.willChange) ||
		t.filter !== 'none' ||
		t.contain === 'paint' ||
		('backdropFilter' in t && t.backdropFilter !== 'none') ||
		('WebkitBackdropFilter' in t && t.WebkitBackdropFilter !== 'none')
	);
}
const vs = new WeakMap();
function Mc(e) {
	let { triggerRef: t, isOpen: r, onClose: n } = e;
	b.useEffect(() => {
		if (!r || n === null) return;
		let o = (s) => {
			let i = s.target;
			if (!t.current || (i instanceof Node && !i.contains(t.current))) return;
			let a = n || vs.get(t.current);
			a && a();
		};
		return (
			window.addEventListener('scroll', o, !0),
			() => {
				window.removeEventListener('scroll', o, !0);
			}
		);
	}, [r, n, t]);
}
let ie = typeof document < 'u' && window.visualViewport;
function og(e) {
	let { direction: t } = Fn(),
		{
			arrowSize: r = 0,
			targetRef: n,
			overlayRef: o,
			scrollRef: s = o,
			placement: i = 'bottom',
			containerPadding: a = 12,
			shouldFlip: l = !0,
			boundaryElement: u = typeof document < 'u' ? document.body : null,
			offset: c = 0,
			crossOffset: d = 0,
			shouldUpdatePosition: p = !0,
			isOpen: h = !0,
			onClose: g,
			maxHeight: P,
			arrowBoundaryOffset: $ = 0,
		} = e,
		[A, x] = b.useState({
			position: {},
			arrowOffsetLeft: void 0,
			arrowOffsetTop: void 0,
			maxHeight: void 0,
			placement: void 0,
		}),
		T = [p, i, o.current, n.current, s.current, a, l, u, c, d, h, t, P, $, r],
		C = b.useCallback(() => {
			if (p === !1 || !h || !o.current || !n.current || !s.current || !u) return;
			let k = Cc({
				placement: kc(i, t),
				overlayNode: o.current,
				targetNode: n.current,
				scrollNode: s.current,
				padding: a,
				shouldFlip: l,
				boundaryElement: u,
				offset: c,
				crossOffset: d,
				maxHeight: P,
				arrowSize: r,
				arrowBoundaryOffset: $,
			});
			Object.keys(k.position).forEach((f) => (o.current.style[f] = k.position[f] + 'px')),
				(o.current.style.maxHeight = k.maxHeight != null ? k.maxHeight + 'px' : void 0),
				x(k);
		}, T);
	Y(C, T), Lc(C), $u({ ref: o, onResize: C });
	let M = b.useRef(!1);
	Y(() => {
		let k,
			f = () => {
				(M.current = !0),
					clearTimeout(k),
					(k = setTimeout(() => {
						M.current = !1;
					}, 500)),
					C();
			};
		return (
			ie?.addEventListener('resize', f),
			ie?.addEventListener('scroll', f),
			() => {
				ie?.removeEventListener('resize', f), ie?.removeEventListener('scroll', f);
			}
		);
	}, [C]);
	let L = b.useCallback(() => {
		M.current || g();
	}, [g, M]);
	return (
		Mc({ triggerRef: n, isOpen: h, onClose: g && L }),
		{
			overlayProps: {
				style: { position: 'absolute', zIndex: 1e5, ...A.position, maxHeight: A.maxHeight },
			},
			placement: A.placement,
			arrowProps: {
				'aria-hidden': 'true',
				role: 'presentation',
				style: { left: A.arrowOffsetLeft, top: A.arrowOffsetTop },
			},
			updatePosition: C,
		}
	);
}
function Lc(e) {
	Y(
		() => (
			window.addEventListener('resize', e, !1),
			() => {
				window.removeEventListener('resize', e, !1);
			}
		),
		[e]
	);
}
function kc(e, t) {
	return t === 'rtl'
		? e.replace('start', 'right').replace('end', 'left')
		: e.replace('start', 'left').replace('end', 'right');
}
const he = [];
function ig(e, t) {
	let {
		onClose: r,
		shouldCloseOnBlur: n,
		isOpen: o,
		isDismissable: s = !1,
		isKeyboardDismissDisabled: i = !1,
		shouldCloseOnInteractOutside: a,
	} = e;
	b.useEffect(
		() => (
			o && he.push(t),
			() => {
				let g = he.indexOf(t);
				g >= 0 && he.splice(g, 1);
			}
		),
		[o, t]
	);
	let l = () => {
			he[he.length - 1] === t && r && r();
		},
		u = (g) => {
			(!a || a(g.target)) && he[he.length - 1] === t && (g.stopPropagation(), g.preventDefault());
		},
		c = (g) => {
			(!a || a(g.target)) &&
				(he[he.length - 1] === t && (g.stopPropagation(), g.preventDefault()), l());
		},
		d = (g) => {
			g.key === 'Escape' && !i && (g.stopPropagation(), g.preventDefault(), l());
		};
	ec({ ref: t, onInteractOutside: s ? c : null, onInteractOutsideStart: u });
	let { focusWithinProps: p } = Nn({
			isDisabled: !n,
			onBlurWithin: (g) => {
				!g.relatedTarget || cc(g.relatedTarget) || ((!a || a(g.relatedTarget)) && r());
			},
		}),
		h = (g) => {
			g.target === g.currentTarget && g.preventDefault();
		};
	return { overlayProps: { onKeyDown: d, ...p }, underlayProps: { onPointerDown: h } };
}
function sg(e, t, r) {
	let { type: n } = e,
		{ isOpen: o } = t;
	b.useEffect(() => {
		r && r.current && vs.set(r.current, t.close);
	});
	let s;
	n === 'menu' ? (s = !0) : n === 'listbox' && (s = 'listbox');
	let i = Ln();
	return {
		triggerProps: {
			'aria-haspopup': s,
			'aria-expanded': o,
			'aria-controls': o ? i : null,
			onPress: t.toggle,
		},
		overlayProps: { id: i },
	};
}
var ys = {},
	bs = {};
bs = { dismiss: 'تجاهل' };
var xs = {};
xs = { dismiss: 'Отхвърляне' };
var Ps = {};
Ps = { dismiss: 'Odstranit' };
var Ts = {};
Ts = { dismiss: 'Luk' };
var $s = {};
$s = { dismiss: 'Schließen' };
var ws = {};
ws = { dismiss: 'Απόρριψη' };
var Es = {};
Es = { dismiss: 'Dismiss' };
var Ss = {};
Ss = { dismiss: 'Descartar' };
var Cs = {};
Cs = { dismiss: 'Lõpeta' };
var As = {};
As = { dismiss: 'Hylkää' };
var Ms = {};
Ms = { dismiss: 'Rejeter' };
var Ls = {};
Ls = { dismiss: 'התעלם' };
var ks = {};
ks = { dismiss: 'Odbaci' };
var Vs = {};
Vs = { dismiss: 'Elutasítás' };
var Rs = {};
Rs = { dismiss: 'Ignora' };
var Ds = {};
Ds = { dismiss: '閉じる' };
var Fs = {};
Fs = { dismiss: '무시' };
var Is = {};
Is = { dismiss: 'Atmesti' };
var Os = {};
Os = { dismiss: 'Nerādīt' };
var Ns = {};
Ns = { dismiss: 'Lukk' };
var Bs = {};
Bs = { dismiss: 'Negeren' };
var js = {};
js = { dismiss: 'Zignoruj' };
var Ks = {};
Ks = { dismiss: 'Descartar' };
var Us = {};
Us = { dismiss: 'Dispensar' };
var Hs = {};
Hs = { dismiss: 'Revocare' };
var Ws = {};
Ws = { dismiss: 'Пропустить' };
var zs = {};
zs = { dismiss: 'Zrušiť' };
var Gs = {};
Gs = { dismiss: 'Opusti' };
var _s = {};
_s = { dismiss: 'Odbaci' };
var Xs = {};
Xs = { dismiss: 'Avvisa' };
var Ys = {};
Ys = { dismiss: 'Kapat' };
var qs = {};
qs = { dismiss: 'Скасувати' };
var Zs = {};
Zs = { dismiss: '取消' };
var Js = {};
Js = { dismiss: '關閉' };
ys = {
	'ar-AE': bs,
	'bg-BG': xs,
	'cs-CZ': Ps,
	'da-DK': Ts,
	'de-DE': $s,
	'el-GR': ws,
	'en-US': Es,
	'es-ES': Ss,
	'et-EE': Cs,
	'fi-FI': As,
	'fr-FR': Ms,
	'he-IL': Ls,
	'hr-HR': ks,
	'hu-HU': Vs,
	'it-IT': Rs,
	'ja-JP': Ds,
	'ko-KR': Fs,
	'lt-LT': Is,
	'lv-LV': Os,
	'nb-NO': Ns,
	'nl-NL': Bs,
	'pl-PL': js,
	'pt-BR': Ks,
	'pt-PT': Us,
	'ro-RO': Hs,
	'ru-RU': Ws,
	'sk-SK': zs,
	'sl-SI': Gs,
	'sr-SP': _s,
	'sv-SE': Xs,
	'tr-TR': Ys,
	'uk-UA': qs,
	'zh-CN': Zs,
	'zh-TW': Js,
};
function ag(e) {
	let { onDismiss: t, ...r } = e,
		n = Ru(xc(ys)),
		o = Pu(r, n.format('dismiss')),
		s = () => {
			t && t();
		};
	return B.createElement(bc, null, B.createElement('button', { ...o, tabIndex: -1, onClick: s }));
}
let ct = new WeakMap(),
	se = [];
function lg(e, t = document.body) {
	let r = new Set(e),
		n = new Set(),
		o = (l) => {
			for (let p of l.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))
				r.add(p);
			let u = (p) => {
					if (
						r.has(p) ||
						(n.has(p.parentElement) && p.parentElement.getAttribute('role') !== 'row')
					)
						return NodeFilter.FILTER_REJECT;
					for (let h of r) if (p.contains(h)) return NodeFilter.FILTER_SKIP;
					return NodeFilter.FILTER_ACCEPT;
				},
				c = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, { acceptNode: u }),
				d = u(l);
			if ((d === NodeFilter.FILTER_ACCEPT && s(l), d !== NodeFilter.FILTER_REJECT)) {
				let p = c.nextNode();
				for (; p != null; ) s(p), (p = c.nextNode());
			}
		},
		s = (l) => {
			var u;
			let c = (u = ct.get(l)) !== null && u !== void 0 ? u : 0;
			(l.getAttribute('aria-hidden') === 'true' && c === 0) ||
				(c === 0 && l.setAttribute('aria-hidden', 'true'), n.add(l), ct.set(l, c + 1));
		};
	se.length && se[se.length - 1].disconnect(), o(t);
	let i = new MutationObserver((l) => {
		for (let u of l)
			if (
				!(u.type !== 'childList' || u.addedNodes.length === 0) &&
				![...r, ...n].some((c) => c.contains(u.target))
			) {
				for (let c of u.removedNodes) c instanceof Element && (r.delete(c), n.delete(c));
				for (let c of u.addedNodes)
					(c instanceof HTMLElement || c instanceof SVGElement) &&
					(c.dataset.liveAnnouncer === 'true' || c.dataset.reactAriaTopLayer === 'true')
						? r.add(c)
						: c instanceof Element && o(c);
			}
	});
	i.observe(t, { childList: !0, subtree: !0 });
	let a = {
		observe() {
			i.observe(t, { childList: !0, subtree: !0 });
		},
		disconnect() {
			i.disconnect();
		},
	};
	return (
		se.push(a),
		() => {
			i.disconnect();
			for (let l of n) {
				let u = ct.get(l);
				u === 1 ? (l.removeAttribute('aria-hidden'), ct.delete(l)) : ct.set(l, u - 1);
			}
			a === se[se.length - 1]
				? (se.pop(), se.length && se[se.length - 1].observe())
				: se.splice(se.indexOf(a), 1);
		}
	);
}
const Vc = B.createContext(null);
function ug(e) {
	let t = br(),
		{ portalContainer: r = t ? null : document.body, isExiting: n } = e,
		[o, s] = b.useState(!1),
		i = b.useMemo(() => ({ contain: o, setContain: s }), [o, s]);
	if (!r) return null;
	let a = e.children;
	return (
		e.disableFocusManagement ||
			(a = B.createElement(ic, { restoreFocus: !0, contain: o && !n }, a)),
		(a = B.createElement(Vc.Provider, { value: i }, B.createElement(Hu, null, a))),
		Dl.createPortal(a, r)
	);
}
function cg(e) {
	return b.forwardRef(e);
}
var fg = (e, t, r = !0) => {
		if (!t) return [e, {}];
		const n = t.reduce((o, s) => (s in e ? { ...o, [s]: e[s] } : o), {});
		return r
			? [
					Object.keys(e)
						.filter((s) => !t.includes(s))
						.reduce((s, i) => ({ ...s, [i]: e[i] }), {}),
					n,
			  ]
			: [e, n];
	},
	Rc = [
		'0',
		'xs',
		'sm',
		'md',
		'lg',
		'xl',
		'2xl',
		'3xl',
		'4xl',
		'5xl',
		'6xl',
		'7xl',
		'8xl',
		'9xl',
		'1',
		'2',
		'3',
		'3.5',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'20',
		'24',
		'28',
		'32',
		'36',
		'40',
		'44',
		'48',
		'52',
		'56',
		'60',
		'64',
		'72',
		'80',
		'96',
	],
	Nr = Rc.map((e) => `unit-${e}`),
	Ko = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
	Q = (e) => !e || typeof e != 'object' || Object.keys(e).length === 0,
	Dc = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Qs(e, t) {
	e.forEach(function (r) {
		Array.isArray(r) ? Qs(r, t) : t.push(r);
	});
}
function ea(e) {
	let t = [];
	return Qs(e, t), t;
}
var Fc = (...e) => ea(e).filter(Boolean),
	Kn = (e, t) => {
		let r = {},
			n = Object.keys(e),
			o = Object.keys(t);
		for (let s of n)
			if (o.includes(s)) {
				let i = e[s],
					a = t[s];
				typeof i == 'object' && typeof a == 'object' ? (r[s] = Kn(i, a)) : (r[s] = a + ' ' + i);
			} else r[s] = e[s];
		for (let s of o) n.includes(s) || (r[s] = t[s]);
		return r;
	},
	Uo = (e) => (!e || typeof e != 'string' ? e : e.replace(/\s+/g, ' ').trim());
function Ic() {
	for (var e = 0, t, r, n = ''; e < arguments.length; )
		(t = arguments[e++]) && (r = ta(t)) && (n && (n += ' '), (n += r));
	return n;
}
function ta(e) {
	if (typeof e == 'string') return e;
	for (var t, r = '', n = 0; n < e.length; n++)
		e[n] && (t = ta(e[n])) && (r && (r += ' '), (r += t));
	return r;
}
var Un = '-';
function Oc(e) {
	var t = Bc(e),
		r = e.conflictingClassGroups,
		n = e.conflictingClassGroupModifiers,
		o = n === void 0 ? {} : n;
	function s(a) {
		var l = a.split(Un);
		return l[0] === '' && l.length !== 1 && l.shift(), ra(l, t) || Nc(a);
	}
	function i(a, l) {
		var u = r[a] || [];
		return l && o[a] ? [].concat(u, o[a]) : u;
	}
	return { getClassGroupId: s, getConflictingClassGroupIds: i };
}
function ra(e, t) {
	if (e.length === 0) return t.classGroupId;
	var r = e[0],
		n = t.nextPart.get(r),
		o = n ? ra(e.slice(1), n) : void 0;
	if (o) return o;
	if (t.validators.length !== 0) {
		var s = e.join(Un);
		return t.validators.find(function (i) {
			var a = i.validator;
			return a(s);
		})?.classGroupId;
	}
}
var Ho = /^\[(.+)\]$/;
function Nc(e) {
	if (Ho.test(e)) {
		var t = Ho.exec(e)[1],
			r = t?.substring(0, t.indexOf(':'));
		if (r) return 'arbitrary..' + r;
	}
}
function Bc(e) {
	var t = e.theme,
		r = e.prefix,
		n = { nextPart: new Map(), validators: [] },
		o = Kc(Object.entries(e.classGroups), r);
	return (
		o.forEach(function (s) {
			var i = s[0],
				a = s[1];
			cn(a, n, i, t);
		}),
		n
	);
}
function cn(e, t, r, n) {
	e.forEach(function (o) {
		if (typeof o == 'string') {
			var s = o === '' ? t : Wo(t, o);
			s.classGroupId = r;
			return;
		}
		if (typeof o == 'function') {
			if (jc(o)) {
				cn(o(n), t, r, n);
				return;
			}
			t.validators.push({ validator: o, classGroupId: r });
			return;
		}
		Object.entries(o).forEach(function (i) {
			var a = i[0],
				l = i[1];
			cn(l, Wo(t, a), r, n);
		});
	});
}
function Wo(e, t) {
	var r = e;
	return (
		t.split(Un).forEach(function (n) {
			r.nextPart.has(n) || r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
				(r = r.nextPart.get(n));
		}),
		r
	);
}
function jc(e) {
	return e.isThemeGetter;
}
function Kc(e, t) {
	return t
		? e.map(function (r) {
				var n = r[0],
					o = r[1],
					s = o.map(function (i) {
						return typeof i == 'string'
							? t + i
							: typeof i == 'object'
							? Object.fromEntries(
									Object.entries(i).map(function (a) {
										var l = a[0],
											u = a[1];
										return [t + l, u];
									})
							  )
							: i;
					});
				return [n, s];
		  })
		: e;
}
function Uc(e) {
	if (e < 1) return { get: function () {}, set: function () {} };
	var t = 0,
		r = new Map(),
		n = new Map();
	function o(s, i) {
		r.set(s, i), t++, t > e && ((t = 0), (n = r), (r = new Map()));
	}
	return {
		get: function (i) {
			var a = r.get(i);
			if (a !== void 0) return a;
			if ((a = n.get(i)) !== void 0) return o(i, a), a;
		},
		set: function (i, a) {
			r.has(i) ? r.set(i, a) : o(i, a);
		},
	};
}
var na = '!';
function Hc(e) {
	var t = e.separator || ':',
		r = t.length === 1,
		n = t[0],
		o = t.length;
	return function (i) {
		for (var a = [], l = 0, u = 0, c, d = 0; d < i.length; d++) {
			var p = i[d];
			if (l === 0) {
				if (p === n && (r || i.slice(d, d + o) === t)) {
					a.push(i.slice(u, d)), (u = d + o);
					continue;
				}
				if (p === '/') {
					c = d;
					continue;
				}
			}
			p === '[' ? l++ : p === ']' && l--;
		}
		var h = a.length === 0 ? i : i.substring(u),
			g = h.startsWith(na),
			P = g ? h.substring(1) : h,
			$ = c && c > u ? c - u : void 0;
		return {
			modifiers: a,
			hasImportantModifier: g,
			baseClassName: P,
			maybePostfixModifierPosition: $,
		};
	};
}
function Wc(e) {
	if (e.length <= 1) return e;
	var t = [],
		r = [];
	return (
		e.forEach(function (n) {
			var o = n[0] === '[';
			o ? (t.push.apply(t, r.sort().concat([n])), (r = [])) : r.push(n);
		}),
		t.push.apply(t, r.sort()),
		t
	);
}
function zc(e) {
	return { cache: Uc(e.cacheSize), splitModifiers: Hc(e), ...Oc(e) };
}
var Gc = /\s+/;
function _c(e, t) {
	var r = t.splitModifiers,
		n = t.getClassGroupId,
		o = t.getConflictingClassGroupIds,
		s = new Set();
	return e
		.trim()
		.split(Gc)
		.map(function (i) {
			var a = r(i),
				l = a.modifiers,
				u = a.hasImportantModifier,
				c = a.baseClassName,
				d = a.maybePostfixModifierPosition,
				p = n(d ? c.substring(0, d) : c),
				h = !!d;
			if (!p) {
				if (!d) return { isTailwindClass: !1, originalClassName: i };
				if (((p = n(c)), !p)) return { isTailwindClass: !1, originalClassName: i };
				h = !1;
			}
			var g = Wc(l).join(':'),
				P = u ? g + na : g;
			return {
				isTailwindClass: !0,
				modifierId: P,
				classGroupId: p,
				originalClassName: i,
				hasPostfixModifier: h,
			};
		})
		.reverse()
		.filter(function (i) {
			if (!i.isTailwindClass) return !0;
			var a = i.modifierId,
				l = i.classGroupId,
				u = i.hasPostfixModifier,
				c = a + l;
			return s.has(c)
				? !1
				: (s.add(c),
				  o(l, u).forEach(function (d) {
						return s.add(a + d);
				  }),
				  !0);
		})
		.reverse()
		.map(function (i) {
			return i.originalClassName;
		})
		.join(' ');
}
function fn() {
	for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
	var n,
		o,
		s,
		i = a;
	function a(u) {
		var c = t[0],
			d = t.slice(1),
			p = d.reduce(function (h, g) {
				return g(h);
			}, c());
		return (n = zc(p)), (o = n.cache.get), (s = n.cache.set), (i = l), l(u);
	}
	function l(u) {
		var c = o(u);
		if (c) return c;
		var d = _c(u, n);
		return s(u, d), d;
	}
	return function () {
		return i(Ic.apply(null, arguments));
	};
}
function U(e) {
	var t = function (n) {
		return n[e] || [];
	};
	return (t.isThemeGetter = !0), t;
}
var oa = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	Xc = /^\d+\/\d+$/,
	Yc = new Set(['px', 'full', 'screen']),
	qc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	Zc =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	Jc = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function le(e) {
	return Be(e) || Yc.has(e) || Xc.test(e) || dn(e);
}
function dn(e) {
	return He(e, 'length', of);
}
function Qc(e) {
	return He(e, 'size', ia);
}
function ef(e) {
	return He(e, 'position', ia);
}
function tf(e) {
	return He(e, 'url', sf);
}
function Kt(e) {
	return He(e, 'number', Be);
}
function Be(e) {
	return !Number.isNaN(Number(e));
}
function rf(e) {
	return e.endsWith('%') && Be(e.slice(0, -1));
}
function ft(e) {
	return zo(e) || He(e, 'number', zo);
}
function I(e) {
	return oa.test(e);
}
function dt() {
	return !0;
}
function Te(e) {
	return qc.test(e);
}
function nf(e) {
	return He(e, '', af);
}
function He(e, t, r) {
	var n = oa.exec(e);
	return n ? (n[1] ? n[1] === t : r(n[2])) : !1;
}
function of(e) {
	return Zc.test(e);
}
function ia() {
	return !1;
}
function sf(e) {
	return e.startsWith('url(');
}
function zo(e) {
	return Number.isInteger(Number(e));
}
function af(e) {
	return Jc.test(e);
}
function pn() {
	var e = U('colors'),
		t = U('spacing'),
		r = U('blur'),
		n = U('brightness'),
		o = U('borderColor'),
		s = U('borderRadius'),
		i = U('borderSpacing'),
		a = U('borderWidth'),
		l = U('contrast'),
		u = U('grayscale'),
		c = U('hueRotate'),
		d = U('invert'),
		p = U('gap'),
		h = U('gradientColorStops'),
		g = U('gradientColorStopPositions'),
		P = U('inset'),
		$ = U('margin'),
		A = U('opacity'),
		x = U('padding'),
		T = U('saturate'),
		C = U('scale'),
		M = U('sepia'),
		L = U('skew'),
		k = U('space'),
		f = U('translate'),
		E = function () {
			return ['auto', 'contain', 'none'];
		},
		R = function () {
			return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
		},
		y = function () {
			return ['auto', I, t];
		},
		w = function () {
			return [I, t];
		},
		m = function () {
			return ['', le];
		},
		v = function () {
			return ['auto', Be, I];
		},
		S = function () {
			return [
				'bottom',
				'center',
				'left',
				'left-bottom',
				'left-top',
				'right',
				'right-bottom',
				'right-top',
				'top',
			];
		},
		D = function () {
			return ['solid', 'dashed', 'dotted', 'double', 'none'];
		},
		O = function () {
			return [
				'normal',
				'multiply',
				'screen',
				'overlay',
				'darken',
				'lighten',
				'color-dodge',
				'color-burn',
				'hard-light',
				'soft-light',
				'difference',
				'exclusion',
				'hue',
				'saturation',
				'color',
				'luminosity',
				'plus-lighter',
			];
		},
		N = function () {
			return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
		},
		j = function () {
			return ['', '0', I];
		},
		oe = function () {
			return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
		},
		F = function () {
			return [Be, Kt];
		},
		te = function () {
			return [Be, I];
		};
	return {
		cacheSize: 500,
		theme: {
			colors: [dt],
			spacing: [le],
			blur: ['none', '', Te, I],
			brightness: F(),
			borderColor: [e],
			borderRadius: ['none', '', 'full', Te, I],
			borderSpacing: w(),
			borderWidth: m(),
			contrast: F(),
			grayscale: j(),
			hueRotate: te(),
			invert: j(),
			gap: w(),
			gradientColorStops: [e],
			gradientColorStopPositions: [rf, dn],
			inset: y(),
			margin: y(),
			opacity: F(),
			padding: w(),
			saturate: F(),
			scale: F(),
			sepia: j(),
			skew: te(),
			space: w(),
			translate: w(),
		},
		classGroups: {
			aspect: [{ aspect: ['auto', 'square', 'video', I] }],
			container: ['container'],
			columns: [{ columns: [Te] }],
			'break-after': [{ 'break-after': oe() }],
			'break-before': [{ 'break-before': oe() }],
			'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
			'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
			box: [{ box: ['border', 'content'] }],
			display: [
				'block',
				'inline-block',
				'inline',
				'flex',
				'inline-flex',
				'table',
				'inline-table',
				'table-caption',
				'table-cell',
				'table-column',
				'table-column-group',
				'table-footer-group',
				'table-header-group',
				'table-row-group',
				'table-row',
				'flow-root',
				'grid',
				'inline-grid',
				'contents',
				'list-item',
				'hidden',
			],
			float: [{ float: ['right', 'left', 'none'] }],
			clear: [{ clear: ['left', 'right', 'both', 'none'] }],
			isolation: ['isolate', 'isolation-auto'],
			'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
			'object-position': [{ object: [].concat(S(), [I]) }],
			overflow: [{ overflow: R() }],
			'overflow-x': [{ 'overflow-x': R() }],
			'overflow-y': [{ 'overflow-y': R() }],
			overscroll: [{ overscroll: E() }],
			'overscroll-x': [{ 'overscroll-x': E() }],
			'overscroll-y': [{ 'overscroll-y': E() }],
			position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
			inset: [{ inset: [P] }],
			'inset-x': [{ 'inset-x': [P] }],
			'inset-y': [{ 'inset-y': [P] }],
			start: [{ start: [P] }],
			end: [{ end: [P] }],
			top: [{ top: [P] }],
			right: [{ right: [P] }],
			bottom: [{ bottom: [P] }],
			left: [{ left: [P] }],
			visibility: ['visible', 'invisible', 'collapse'],
			z: [{ z: ['auto', ft] }],
			basis: [{ basis: y() }],
			'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
			'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
			flex: [{ flex: ['1', 'auto', 'initial', 'none', I] }],
			grow: [{ grow: j() }],
			shrink: [{ shrink: j() }],
			order: [{ order: ['first', 'last', 'none', ft] }],
			'grid-cols': [{ 'grid-cols': [dt] }],
			'col-start-end': [{ col: ['auto', { span: ['full', ft] }, I] }],
			'col-start': [{ 'col-start': v() }],
			'col-end': [{ 'col-end': v() }],
			'grid-rows': [{ 'grid-rows': [dt] }],
			'row-start-end': [{ row: ['auto', { span: [ft] }, I] }],
			'row-start': [{ 'row-start': v() }],
			'row-end': [{ 'row-end': v() }],
			'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
			'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', I] }],
			'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', I] }],
			gap: [{ gap: [p] }],
			'gap-x': [{ 'gap-x': [p] }],
			'gap-y': [{ 'gap-y': [p] }],
			'justify-content': [{ justify: ['normal'].concat(N()) }],
			'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
			'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			'align-content': [{ content: ['normal'].concat(N(), ['baseline']) }],
			'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
			'place-content': [{ 'place-content': [].concat(N(), ['baseline']) }],
			'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			p: [{ p: [x] }],
			px: [{ px: [x] }],
			py: [{ py: [x] }],
			ps: [{ ps: [x] }],
			pe: [{ pe: [x] }],
			pt: [{ pt: [x] }],
			pr: [{ pr: [x] }],
			pb: [{ pb: [x] }],
			pl: [{ pl: [x] }],
			m: [{ m: [$] }],
			mx: [{ mx: [$] }],
			my: [{ my: [$] }],
			ms: [{ ms: [$] }],
			me: [{ me: [$] }],
			mt: [{ mt: [$] }],
			mr: [{ mr: [$] }],
			mb: [{ mb: [$] }],
			ml: [{ ml: [$] }],
			'space-x': [{ 'space-x': [k] }],
			'space-x-reverse': ['space-x-reverse'],
			'space-y': [{ 'space-y': [k] }],
			'space-y-reverse': ['space-y-reverse'],
			w: [{ w: ['auto', 'min', 'max', 'fit', I, t] }],
			'min-w': [{ 'min-w': ['min', 'max', 'fit', I, le] }],
			'max-w': [
				{ 'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [Te] }, Te, I] },
			],
			h: [{ h: [I, t, 'auto', 'min', 'max', 'fit'] }],
			'min-h': [{ 'min-h': ['min', 'max', 'fit', I, le] }],
			'max-h': [{ 'max-h': [I, t, 'min', 'max', 'fit'] }],
			'font-size': [{ text: ['base', Te, dn] }],
			'font-smoothing': ['antialiased', 'subpixel-antialiased'],
			'font-style': ['italic', 'not-italic'],
			'font-weight': [
				{
					font: [
						'thin',
						'extralight',
						'light',
						'normal',
						'medium',
						'semibold',
						'bold',
						'extrabold',
						'black',
						Kt,
					],
				},
			],
			'font-family': [{ font: [dt] }],
			'fvn-normal': ['normal-nums'],
			'fvn-ordinal': ['ordinal'],
			'fvn-slashed-zero': ['slashed-zero'],
			'fvn-figure': ['lining-nums', 'oldstyle-nums'],
			'fvn-spacing': ['proportional-nums', 'tabular-nums'],
			'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
			tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', I] }],
			'line-clamp': [{ 'line-clamp': ['none', Be, Kt] }],
			leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', I, le] }],
			'list-image': [{ 'list-image': ['none', I] }],
			'list-style-type': [{ list: ['none', 'disc', 'decimal', I] }],
			'list-style-position': [{ list: ['inside', 'outside'] }],
			'placeholder-color': [{ placeholder: [e] }],
			'placeholder-opacity': [{ 'placeholder-opacity': [A] }],
			'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
			'text-color': [{ text: [e] }],
			'text-opacity': [{ 'text-opacity': [A] }],
			'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
			'text-decoration-style': [{ decoration: [].concat(D(), ['wavy']) }],
			'text-decoration-thickness': [{ decoration: ['auto', 'from-font', le] }],
			'underline-offset': [{ 'underline-offset': ['auto', I, le] }],
			'text-decoration-color': [{ decoration: [e] }],
			'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
			'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
			indent: [{ indent: w() }],
			'vertical-align': [
				{
					align: [
						'baseline',
						'top',
						'middle',
						'bottom',
						'text-top',
						'text-bottom',
						'sub',
						'super',
						I,
					],
				},
			],
			whitespace: [
				{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
			],
			break: [{ break: ['normal', 'words', 'all', 'keep'] }],
			hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
			content: [{ content: ['none', I] }],
			'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
			'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
			'bg-opacity': [{ 'bg-opacity': [A] }],
			'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
			'bg-position': [{ bg: [].concat(S(), [ef]) }],
			'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
			'bg-size': [{ bg: ['auto', 'cover', 'contain', Qc] }],
			'bg-image': [
				{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, tf] },
			],
			'bg-color': [{ bg: [e] }],
			'gradient-from-pos': [{ from: [g] }],
			'gradient-via-pos': [{ via: [g] }],
			'gradient-to-pos': [{ to: [g] }],
			'gradient-from': [{ from: [h] }],
			'gradient-via': [{ via: [h] }],
			'gradient-to': [{ to: [h] }],
			rounded: [{ rounded: [s] }],
			'rounded-s': [{ 'rounded-s': [s] }],
			'rounded-e': [{ 'rounded-e': [s] }],
			'rounded-t': [{ 'rounded-t': [s] }],
			'rounded-r': [{ 'rounded-r': [s] }],
			'rounded-b': [{ 'rounded-b': [s] }],
			'rounded-l': [{ 'rounded-l': [s] }],
			'rounded-ss': [{ 'rounded-ss': [s] }],
			'rounded-se': [{ 'rounded-se': [s] }],
			'rounded-ee': [{ 'rounded-ee': [s] }],
			'rounded-es': [{ 'rounded-es': [s] }],
			'rounded-tl': [{ 'rounded-tl': [s] }],
			'rounded-tr': [{ 'rounded-tr': [s] }],
			'rounded-br': [{ 'rounded-br': [s] }],
			'rounded-bl': [{ 'rounded-bl': [s] }],
			'border-w': [{ border: [a] }],
			'border-w-x': [{ 'border-x': [a] }],
			'border-w-y': [{ 'border-y': [a] }],
			'border-w-s': [{ 'border-s': [a] }],
			'border-w-e': [{ 'border-e': [a] }],
			'border-w-t': [{ 'border-t': [a] }],
			'border-w-r': [{ 'border-r': [a] }],
			'border-w-b': [{ 'border-b': [a] }],
			'border-w-l': [{ 'border-l': [a] }],
			'border-opacity': [{ 'border-opacity': [A] }],
			'border-style': [{ border: [].concat(D(), ['hidden']) }],
			'divide-x': [{ 'divide-x': [a] }],
			'divide-x-reverse': ['divide-x-reverse'],
			'divide-y': [{ 'divide-y': [a] }],
			'divide-y-reverse': ['divide-y-reverse'],
			'divide-opacity': [{ 'divide-opacity': [A] }],
			'divide-style': [{ divide: D() }],
			'border-color': [{ border: [o] }],
			'border-color-x': [{ 'border-x': [o] }],
			'border-color-y': [{ 'border-y': [o] }],
			'border-color-t': [{ 'border-t': [o] }],
			'border-color-r': [{ 'border-r': [o] }],
			'border-color-b': [{ 'border-b': [o] }],
			'border-color-l': [{ 'border-l': [o] }],
			'divide-color': [{ divide: [o] }],
			'outline-style': [{ outline: [''].concat(D()) }],
			'outline-offset': [{ 'outline-offset': [I, le] }],
			'outline-w': [{ outline: [le] }],
			'outline-color': [{ outline: [e] }],
			'ring-w': [{ ring: m() }],
			'ring-w-inset': ['ring-inset'],
			'ring-color': [{ ring: [e] }],
			'ring-opacity': [{ 'ring-opacity': [A] }],
			'ring-offset-w': [{ 'ring-offset': [le] }],
			'ring-offset-color': [{ 'ring-offset': [e] }],
			shadow: [{ shadow: ['', 'inner', 'none', Te, nf] }],
			'shadow-color': [{ shadow: [dt] }],
			opacity: [{ opacity: [A] }],
			'mix-blend': [{ 'mix-blend': O() }],
			'bg-blend': [{ 'bg-blend': O() }],
			filter: [{ filter: ['', 'none'] }],
			blur: [{ blur: [r] }],
			brightness: [{ brightness: [n] }],
			contrast: [{ contrast: [l] }],
			'drop-shadow': [{ 'drop-shadow': ['', 'none', Te, I] }],
			grayscale: [{ grayscale: [u] }],
			'hue-rotate': [{ 'hue-rotate': [c] }],
			invert: [{ invert: [d] }],
			saturate: [{ saturate: [T] }],
			sepia: [{ sepia: [M] }],
			'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
			'backdrop-blur': [{ 'backdrop-blur': [r] }],
			'backdrop-brightness': [{ 'backdrop-brightness': [n] }],
			'backdrop-contrast': [{ 'backdrop-contrast': [l] }],
			'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
			'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
			'backdrop-invert': [{ 'backdrop-invert': [d] }],
			'backdrop-opacity': [{ 'backdrop-opacity': [A] }],
			'backdrop-saturate': [{ 'backdrop-saturate': [T] }],
			'backdrop-sepia': [{ 'backdrop-sepia': [M] }],
			'border-collapse': [{ border: ['collapse', 'separate'] }],
			'border-spacing': [{ 'border-spacing': [i] }],
			'border-spacing-x': [{ 'border-spacing-x': [i] }],
			'border-spacing-y': [{ 'border-spacing-y': [i] }],
			'table-layout': [{ table: ['auto', 'fixed'] }],
			caption: [{ caption: ['top', 'bottom'] }],
			transition: [
				{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', I] },
			],
			duration: [{ duration: te() }],
			ease: [{ ease: ['linear', 'in', 'out', 'in-out', I] }],
			delay: [{ delay: te() }],
			animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', I] }],
			transform: [{ transform: ['', 'gpu', 'none'] }],
			scale: [{ scale: [C] }],
			'scale-x': [{ 'scale-x': [C] }],
			'scale-y': [{ 'scale-y': [C] }],
			rotate: [{ rotate: [ft, I] }],
			'translate-x': [{ 'translate-x': [f] }],
			'translate-y': [{ 'translate-y': [f] }],
			'skew-x': [{ 'skew-x': [L] }],
			'skew-y': [{ 'skew-y': [L] }],
			'transform-origin': [
				{
					origin: [
						'center',
						'top',
						'top-right',
						'right',
						'bottom-right',
						'bottom',
						'bottom-left',
						'left',
						'top-left',
						I,
					],
				},
			],
			accent: [{ accent: ['auto', e] }],
			appearance: ['appearance-none'],
			cursor: [
				{
					cursor: [
						'auto',
						'default',
						'pointer',
						'wait',
						'text',
						'move',
						'help',
						'not-allowed',
						'none',
						'context-menu',
						'progress',
						'cell',
						'crosshair',
						'vertical-text',
						'alias',
						'copy',
						'no-drop',
						'grab',
						'grabbing',
						'all-scroll',
						'col-resize',
						'row-resize',
						'n-resize',
						'e-resize',
						's-resize',
						'w-resize',
						'ne-resize',
						'nw-resize',
						'se-resize',
						'sw-resize',
						'ew-resize',
						'ns-resize',
						'nesw-resize',
						'nwse-resize',
						'zoom-in',
						'zoom-out',
						I,
					],
				},
			],
			'caret-color': [{ caret: [e] }],
			'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
			resize: [{ resize: ['none', 'y', 'x', ''] }],
			'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
			'scroll-m': [{ 'scroll-m': w() }],
			'scroll-mx': [{ 'scroll-mx': w() }],
			'scroll-my': [{ 'scroll-my': w() }],
			'scroll-ms': [{ 'scroll-ms': w() }],
			'scroll-me': [{ 'scroll-me': w() }],
			'scroll-mt': [{ 'scroll-mt': w() }],
			'scroll-mr': [{ 'scroll-mr': w() }],
			'scroll-mb': [{ 'scroll-mb': w() }],
			'scroll-ml': [{ 'scroll-ml': w() }],
			'scroll-p': [{ 'scroll-p': w() }],
			'scroll-px': [{ 'scroll-px': w() }],
			'scroll-py': [{ 'scroll-py': w() }],
			'scroll-ps': [{ 'scroll-ps': w() }],
			'scroll-pe': [{ 'scroll-pe': w() }],
			'scroll-pt': [{ 'scroll-pt': w() }],
			'scroll-pr': [{ 'scroll-pr': w() }],
			'scroll-pb': [{ 'scroll-pb': w() }],
			'scroll-pl': [{ 'scroll-pl': w() }],
			'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
			'snap-stop': [{ snap: ['normal', 'always'] }],
			'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
			'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
			touch: [
				{
					touch: [
						'auto',
						'none',
						'pinch-zoom',
						'manipulation',
						{ pan: ['x', 'left', 'right', 'y', 'up', 'down'] },
					],
				},
			],
			select: [{ select: ['none', 'text', 'all', 'auto'] }],
			'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', I] }],
			fill: [{ fill: [e, 'none'] }],
			'stroke-w': [{ stroke: [le, Kt] }],
			stroke: [{ stroke: [e, 'none'] }],
			sr: ['sr-only', 'not-sr-only'],
		},
		conflictingClassGroups: {
			overflow: ['overflow-x', 'overflow-y'],
			overscroll: ['overscroll-x', 'overscroll-y'],
			inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
			'inset-x': ['right', 'left'],
			'inset-y': ['top', 'bottom'],
			flex: ['basis', 'grow', 'shrink'],
			gap: ['gap-x', 'gap-y'],
			p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
			px: ['pr', 'pl'],
			py: ['pt', 'pb'],
			m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
			mx: ['mr', 'ml'],
			my: ['mt', 'mb'],
			'font-size': ['leading'],
			'fvn-normal': [
				'fvn-ordinal',
				'fvn-slashed-zero',
				'fvn-figure',
				'fvn-spacing',
				'fvn-fraction',
			],
			'fvn-ordinal': ['fvn-normal'],
			'fvn-slashed-zero': ['fvn-normal'],
			'fvn-figure': ['fvn-normal'],
			'fvn-spacing': ['fvn-normal'],
			'fvn-fraction': ['fvn-normal'],
			rounded: [
				'rounded-s',
				'rounded-e',
				'rounded-t',
				'rounded-r',
				'rounded-b',
				'rounded-l',
				'rounded-ss',
				'rounded-se',
				'rounded-ee',
				'rounded-es',
				'rounded-tl',
				'rounded-tr',
				'rounded-br',
				'rounded-bl',
			],
			'rounded-s': ['rounded-ss', 'rounded-es'],
			'rounded-e': ['rounded-se', 'rounded-ee'],
			'rounded-t': ['rounded-tl', 'rounded-tr'],
			'rounded-r': ['rounded-tr', 'rounded-br'],
			'rounded-b': ['rounded-br', 'rounded-bl'],
			'rounded-l': ['rounded-tl', 'rounded-bl'],
			'border-spacing': ['border-spacing-x', 'border-spacing-y'],
			'border-w': [
				'border-w-s',
				'border-w-e',
				'border-w-t',
				'border-w-r',
				'border-w-b',
				'border-w-l',
			],
			'border-w-x': ['border-w-r', 'border-w-l'],
			'border-w-y': ['border-w-t', 'border-w-b'],
			'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
			'border-color-x': ['border-color-r', 'border-color-l'],
			'border-color-y': ['border-color-t', 'border-color-b'],
			'scroll-m': [
				'scroll-mx',
				'scroll-my',
				'scroll-ms',
				'scroll-me',
				'scroll-mt',
				'scroll-mr',
				'scroll-mb',
				'scroll-ml',
			],
			'scroll-mx': ['scroll-mr', 'scroll-ml'],
			'scroll-my': ['scroll-mt', 'scroll-mb'],
			'scroll-p': [
				'scroll-px',
				'scroll-py',
				'scroll-ps',
				'scroll-pe',
				'scroll-pt',
				'scroll-pr',
				'scroll-pb',
				'scroll-pl',
			],
			'scroll-px': ['scroll-pr', 'scroll-pl'],
			'scroll-py': ['scroll-pt', 'scroll-pb'],
		},
		conflictingClassGroupModifiers: { 'font-size': ['leading'] },
	};
}
function lf(e, t) {
	for (var r in t) sa(e, r, t[r]);
	return e;
}
var uf = Object.prototype.hasOwnProperty,
	cf = new Set(['string', 'number', 'boolean']);
function sa(e, t, r) {
	if (!uf.call(e, t) || cf.has(typeof r) || r === null) {
		e[t] = r;
		return;
	}
	if (Array.isArray(r) && Array.isArray(e[t])) {
		e[t] = e[t].concat(r);
		return;
	}
	if (typeof r == 'object' && typeof e[t] == 'object') {
		if (e[t] === null) {
			e[t] = r;
			return;
		}
		for (var n in r) sa(e[t], n, r[n]);
	}
}
function ff(e) {
	for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
		r[n - 1] = arguments[n];
	return typeof e == 'function'
		? fn.apply(void 0, [pn, e].concat(r))
		: fn.apply(
				void 0,
				[
					function () {
						return lf(pn(), e);
					},
				].concat(r)
		  );
}
var df = fn(pn),
	pf = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
	aa = (e) => e || void 0,
	lr = (...e) => aa(ea(e).filter(Boolean).join(' ')),
	Br = null,
	ur = {},
	hn = !1,
	pt =
		(...e) =>
		(t) =>
			t.twMerge ? ((!Br || hn) && ((hn = !1), (Br = Q(ur) ? df : ff(ur))), aa(Br(lr(e)))) : lr(e),
	Go = (e, t) => {
		for (let r in t) e.hasOwnProperty(r) ? (e[r] = lr(e[r], t[r])) : (e[r] = t[r]);
		return e;
	},
	hf = (e, t) => {
		let {
				extend: r = null,
				slots: n = {},
				variants: o = {},
				compoundVariants: s = [],
				compoundSlots: i = [],
				defaultVariants: a = {},
			} = e,
			l = { ...pf, ...t },
			u = r != null && r.base ? lr(r.base, e?.base) : e?.base,
			c = r != null && r.variants && !Q(r.variants) ? Kn(o, r.variants) : o,
			d =
				r != null && r.defaultVariants && !Q(r.defaultVariants)
					? { ...r.defaultVariants, ...a }
					: a;
		!Q(l.twMergeConfig) && !Dc(l.twMergeConfig, ur) && ((hn = !0), (ur = l.twMergeConfig));
		let p = Q(n) ? {} : { base: e?.base, ...n },
			h = Q(r?.slots) ? p : Go({ ...r?.slots }, Q(p) ? { base: e?.base } : p),
			g = ($) => {
				if (Q(c) && Q(n) && Q(r?.slots)) return pt(u, $?.class, $?.className)(l);
				if (s && !Array.isArray(s))
					throw new TypeError(
						`The "compoundVariants" prop must be an array. Received: ${typeof s}`
					);
				if (i && !Array.isArray(i))
					throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);
				let A = (y, w, m = [], v) => {
						let S = m;
						if (typeof w == 'string')
							S = S.concat(
								Uo(w)
									.split(' ')
									.map((D) => `${y}:${D}`)
							);
						else if (Array.isArray(w)) S = S.concat(w.reduce((D, O) => D.concat(`${y}:${O}`), []));
						else if (typeof w == 'object' && typeof v == 'string') {
							for (let D in w)
								if (w.hasOwnProperty(D) && D === v) {
									let O = w[D];
									if (O && typeof O == 'string') {
										let N = Uo(O);
										S[v]
											? (S[v] = S[v].concat(N.split(' ').map((j) => `${y}:${j}`)))
											: (S[v] = N.split(' ').map((j) => `${y}:${j}`));
									} else
										Array.isArray(O) &&
											O.length > 0 &&
											(S[v] = O.reduce((N, j) => N.concat(`${y}:${j}`), []));
								}
						}
						return S;
					},
					x = (y, w = c, m = null, v = null) => {
						var S;
						let D = w[y];
						if (!D || Q(D)) return null;
						let O = (S = v?.[y]) != null ? S : $?.[y];
						if (O === null) return null;
						let N = Ko(O),
							j =
								(Array.isArray(l.responsiveVariants) && l.responsiveVariants.length > 0) ||
								l.responsiveVariants === !0,
							oe = d?.[y],
							F = [];
						if (typeof N == 'object' && j)
							for (let [_, lt] of Object.entries(N)) {
								let Rt = D[lt];
								if (_ === 'initial') {
									oe = lt;
									continue;
								}
								(Array.isArray(l.responsiveVariants) && !l.responsiveVariants.includes(_)) ||
									(F = A(_, Rt, F, m));
							}
						let te = D[N] || D[Ko(oe)];
						return typeof F == 'object' && typeof m == 'string' && F[m]
							? Go(F, te)
							: F.length > 0
							? (F.push(te), F)
							: te;
					},
					T = () => (c ? Object.keys(c).map((y) => x(y, c)) : null),
					C = (y, w) => {
						if (!c || typeof c != 'object') return null;
						let m = new Array();
						for (let v in c) {
							let S = x(v, c, y, w),
								D = y === 'base' && typeof S == 'string' ? S : S && S[y];
							D && (m[m.length] = D);
						}
						return m;
					},
					M = {};
				for (let y in $) $[y] !== void 0 && (M[y] = $[y]);
				let L = (y, w) => {
						var m;
						let v =
							typeof $?.[y] == 'object' ? { [y]: (m = $[y]) == null ? void 0 : m.initial } : {};
						return { ...d, ...M, ...v, ...w };
					},
					k = (y = [], w) => {
						let m = [];
						for (let { class: v, className: S, ...D } of y) {
							let O = !0;
							for (let [N, j] of Object.entries(D)) {
								let oe = L(N, w);
								if (Array.isArray(j)) {
									if (!j.includes(oe[N])) {
										O = !1;
										break;
									}
								} else if (oe[N] !== j) {
									O = !1;
									break;
								}
							}
							O && (v && m.push(v), S && m.push(S));
						}
						return m;
					},
					f = (y) => {
						let w = k(s, y),
							m = k(r?.compoundVariants, y);
						return Fc(m, w);
					},
					E = (y) => {
						let w = f(y);
						if (!Array.isArray(w)) return w;
						let m = {};
						for (let v of w)
							if ((typeof v == 'string' && (m.base = pt(m.base, v)(l)), typeof v == 'object'))
								for (let [S, D] of Object.entries(v)) m[S] = pt(m[S], D)(l);
						return m;
					},
					R = (y) => {
						if (i.length < 1) return null;
						let w = {};
						for (let { slots: m = [], class: v, className: S, ...D } of i) {
							if (!Q(D)) {
								let O = !0;
								for (let N of Object.keys(D)) {
									let j = L(N, y)[N];
									if (j === void 0 || (Array.isArray(D[N]) ? !D[N].includes(j) : D[N] !== j)) {
										O = !1;
										break;
									}
								}
								if (!O) continue;
							}
							for (let O of m) (w[O] = w[O] || []), w[O].push([v, S]);
						}
						return w;
					};
				if (!Q(n) || !Q(r?.slots)) {
					let y = {};
					if (typeof h == 'object' && !Q(h))
						for (let w of Object.keys(h))
							y[w] = (m) => {
								var v, S;
								return pt(
									h[w],
									C(w, m),
									((v = E(m)) != null ? v : [])[w],
									((S = R(m)) != null ? S : [])[w],
									m?.class,
									m?.className
								)(l);
							};
					return y;
				}
				return pt(u, T(), f(), $?.class, $?.className)(l);
			},
			P = () => {
				if (!(!c || typeof c != 'object')) return Object.keys(c);
			};
		return (
			(g.variantKeys = P()),
			(g.extend = r),
			(g.base = u),
			(g.slots = h),
			(g.variants = c),
			(g.defaultVariants = d),
			(g.compoundSlots = i),
			(g.compoundVariants = s),
			g
		);
	},
	mf = (e) => (t, r) => hf(t, r ? Kn(e, r) : e),
	Ut = ['small', 'medium', 'large'],
	dg = mf({
		twMerge: !0,
		twMergeConfig: {
			theme: {
				opacity: ['disabled'],
				spacing: ['divider', 'unit', ...Nr],
				borderWidth: Ut,
				borderRadius: Ut,
			},
			classGroups: {
				shadow: [{ shadow: Ut }],
				'font-size': [{ text: ['tiny', ...Ut] }],
				'bg-image': ['bg-stripe-gradient'],
				'min-w': [{ 'min-w': ['unit', ...Nr] }],
				'min-h': [{ 'min-h': ['unit', ...Nr] }],
			},
		},
	}),
	pg = [
		'outline-none',
		'data-[focus-visible=true]:z-10',
		'data-[focus-visible=true]:outline-2',
		'data-[focus-visible=true]:outline-focus',
		'data-[focus-visible=true]:outline-offset-2',
	],
	hg = [
		'outline-none',
		'group-data-[focus-visible=true]:z-10',
		'group-data-[focus-visible=true]:ring-2',
		'group-data-[focus-visible=true]:ring-focus',
		'group-data-[focus-visible=true]:ring-offset-2',
		'group-data-[focus-visible=true]:ring-offset-background',
	],
	mg = {
		default: ['[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		primary: ['[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		secondary: ['[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		success: ['[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		warning: ['[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		danger: ['[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]'],
	};
function la(e) {
	var t,
		r,
		n = '';
	if (typeof e == 'string' || typeof e == 'number') n += e;
	else if (typeof e == 'object')
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++) e[t] && (r = la(e[t])) && (n && (n += ' '), (n += r));
		else for (t in e) e[t] && (n && (n += ' '), (n += t));
	return n;
}
function gg(...e) {
	for (var t = 0, r, n, o = ''; t < e.length; )
		(r = e[t++]) && (n = la(r)) && (o && (o += ' '), (o += n));
	return o;
}
var vg = (e) => (e ? 'true' : void 0);
function yg(e = {}) {
	const {
			strict: t = !0,
			errorMessage:
				r = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
			name: n,
		} = e,
		o = b.createContext(void 0);
	o.displayName = n;
	function s() {
		var i;
		const a = b.useContext(o);
		if (!a && t) {
			const l = new Error(r);
			throw (
				((l.name = 'ContextError'), (i = Error.captureStackTrace) == null || i.call(Error, l, s), l)
			);
		}
		return a;
	}
	return [o.Provider, s, o];
}
function bg(e) {
	const t = b.useRef(null);
	return b.useImperativeHandle(e, () => t.current), t;
}
var ua = B.createContext(null);
ua.displayName = 'PressResponderContext';
var gf = Object.defineProperty,
	vf = (e, t, r) =>
		t in e ? gf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
	Re = (e, t, r) => (vf(e, typeof t != 'symbol' ? t + '' : t, r), r),
	ca = (e, t, r) => {
		if (!t.has(e)) throw TypeError('Cannot ' + r);
	},
	yf = (e, t, r) => (ca(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
	bf = (e, t, r) => {
		if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
		t instanceof WeakSet ? t.add(e) : t.set(e, r);
	},
	xf = (e, t, r, n) => (ca(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
	qt,
	Ht = class {
		constructor(e, t, r) {
			Re(this, 'type'),
				Re(this, 'pointerType'),
				Re(this, 'target'),
				Re(this, 'shiftKey'),
				Re(this, 'ctrlKey'),
				Re(this, 'metaKey'),
				Re(this, 'altKey'),
				bf(this, qt, !0),
				(this.type = e),
				(this.pointerType = t),
				(this.target = r.currentTarget),
				(this.shiftKey = r.shiftKey),
				(this.metaKey = r.metaKey),
				(this.ctrlKey = r.ctrlKey),
				(this.altKey = r.altKey);
		}
		continuePropagation() {
			xf(this, qt, !1);
		}
		get shouldStopPropagation() {
			return yf(this, qt);
		}
	};
qt = new WeakMap();
var Oe = (e) => {
		var t;
		return (t = e?.ownerDocument) != null ? t : document;
	},
	mn = (e) => {
		var t, r;
		return (r = (t = e?.ownerDocument) == null ? void 0 : t.defaultView) != null ? r : window;
	},
	et = 'default',
	gn = '',
	Zt = new WeakMap();
function _o(e) {
	if (At()) {
		if (et === 'default') {
			const t = Oe(e);
			(gn = t.documentElement.style.webkitUserSelect),
				(t.documentElement.style.webkitUserSelect = 'none');
		}
		et = 'disabled';
	} else
		(e instanceof HTMLElement || e instanceof SVGElement) &&
			(Zt.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function Wt(e) {
	if (At()) {
		if (et !== 'disabled') return;
		(et = 'restoring'),
			setTimeout(() => {
				Vn(() => {
					if (et === 'restoring') {
						const t = Oe(e);
						t.documentElement.style.webkitUserSelect === 'none' &&
							(t.documentElement.style.webkitUserSelect = gn || ''),
							(gn = ''),
							(et = 'default');
					}
				});
			}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Zt.has(e)) {
		let t = Zt.get(e);
		e.style.userSelect === 'none' && t && (e.style.userSelect = t),
			e.getAttribute('style') === '' && e.removeAttribute('style'),
			Zt.delete(e);
	}
}
function Pf(e) {
	let t = b.useContext(ua);
	if (t) {
		let { register: r, ...n } = t;
		(e = de(n, e)), r();
	}
	return Dn(t, e.ref), e;
}
var Xo = Symbol('linkClicked');
function Tf(e) {
	let {
			onPress: t,
			onPressChange: r,
			onPressStart: n,
			onPressEnd: o,
			onPressUp: s,
			isDisabled: i,
			isPressed: a,
			preventFocusOnPress: l,
			shouldCancelOnPointerExit: u,
			allowTextSelectionOnPress: c,
			ref: d,
			...p
		} = Pf(e),
		[h, g] = b.useState(!1),
		P = b.useRef({
			isPressed: !1,
			ignoreEmulatedMouseEvents: !1,
			ignoreClickAfterPress: !1,
			didFirePressStart: !1,
			isTriggeringEvent: !1,
			activePointerId: null,
			target: null,
			isOverTarget: !1,
			pointerType: null,
		}),
		{ addGlobalListener: $, removeAllGlobalListeners: A } = Rn(),
		x = Z((f, E) => {
			let R = P.current;
			if (i || R.didFirePressStart) return;
			let y = !0;
			if (((R.isTriggeringEvent = !0), n)) {
				let w = new Ht('pressstart', E, f);
				n(w), (y = w.shouldStopPropagation);
			}
			return r && r(!0), (R.isTriggeringEvent = !1), (R.didFirePressStart = !0), g(!0), y;
		}),
		T = Z((f, E, R = !0) => {
			let y = P.current;
			if (!y.didFirePressStart) return;
			(y.ignoreClickAfterPress = !0), (y.didFirePressStart = !1), (y.isTriggeringEvent = !0);
			let w = !0;
			if (o) {
				let m = new Ht('pressend', E, f);
				o(m), (w = m.shouldStopPropagation);
			}
			if ((r && r(!1), g(!1), t && R && !i)) {
				let m = new Ht('press', E, f);
				t(m), w && (w = m.shouldStopPropagation);
			}
			return (y.isTriggeringEvent = !1), w;
		}),
		C = Z((f, E) => {
			let R = P.current;
			if (!i) {
				if (s) {
					R.isTriggeringEvent = !0;
					let y = new Ht('pressup', E, f);
					return s(y), (R.isTriggeringEvent = !1), y.shouldStopPropagation;
				}
				return !0;
			}
		}),
		M = Z((f) => {
			let E = P.current;
			E.isPressed &&
				(E.isOverTarget && E.target && T(me(E.target, f), E.pointerType, !1),
				(E.isPressed = !1),
				(E.isOverTarget = !1),
				(E.activePointerId = null),
				(E.pointerType = null),
				A(),
				!c && E.target && Wt(E.target));
		}),
		L = Z((f) => {
			u && M(f);
		}),
		k = b.useMemo(() => {
			let f = P.current,
				E = {
					onKeyDown(y) {
						var w;
						if (jr(y.nativeEvent, y.currentTarget) && y.currentTarget.contains(y.target)) {
							qo(y.target, y.key) && y.preventDefault();
							let m = !0;
							!f.isPressed &&
								!y.repeat &&
								((f.target = y.currentTarget),
								(f.isPressed = !0),
								(m = x(y, 'keyboard')),
								$(Oe(y.currentTarget), 'keyup', R, !1)),
								m && y.stopPropagation(),
								y.metaKey && Ke() && ((w = f.metaKeyEvents) == null || w.set(y.key, y.nativeEvent));
						} else y.key === 'Meta' && (f.metaKeyEvents = new Map());
					},
					onKeyUp(y) {
						f.target &&
							jr(y.nativeEvent, y.currentTarget) &&
							!y.repeat &&
							y.currentTarget.contains(y.target) &&
							C(me(f.target, y), 'keyboard');
					},
					onClick(y) {
						if (
							!(y && !y.currentTarget.contains(y.target)) &&
							y &&
							y.button === 0 &&
							!f.isTriggeringEvent &&
							!Ae.isOpening
						) {
							let w = !0;
							if (
								(i && y.preventDefault(),
								!f.ignoreClickAfterPress &&
									!f.ignoreEmulatedMouseEvents &&
									!f.isPressed &&
									(f.pointerType === 'virtual' || $t(y.nativeEvent)))
							) {
								!i && !l && ue(y.currentTarget);
								let m = x(y, 'virtual'),
									v = C(y, 'virtual'),
									S = T(y, 'virtual');
								w = m && v && S;
							}
							(f.ignoreEmulatedMouseEvents = !1),
								(f.ignoreClickAfterPress = !1),
								w && y.stopPropagation();
						}
					},
				},
				R = (y) => {
					var w, m;
					if (f.isPressed && f.target && jr(y, f.target)) {
						qo(y.target, y.key) && y.preventDefault();
						let v = y.target,
							S = T(me(f.target, y), 'keyboard', f.target.contains(v));
						A(),
							S && y.stopPropagation(),
							y.key !== 'Enter' &&
								Hn(f.target) &&
								f.target.contains(v) &&
								!y[Xo] &&
								((y[Xo] = !0), Ae(f.target, y, !1)),
							(f.isPressed = !1),
							(w = f.metaKeyEvents) == null || w.delete(y.key);
					} else if (y.key === 'Meta' && (m = f.metaKeyEvents) != null && m.size) {
						let v = f.metaKeyEvents;
						f.metaKeyEvents = null;
						for (let S of v.values())
							f.target && f.target.dispatchEvent(new KeyboardEvent('keyup', S));
					}
				};
			if (typeof PointerEvent < 'u') {
				(E.onPointerDown = (v) => {
					if (v.button !== 0 || !v.currentTarget.contains(v.target)) return;
					if (as(v.nativeEvent)) {
						f.pointerType = 'virtual';
						return;
					}
					Kr(v.currentTarget) && v.preventDefault(), (f.pointerType = v.pointerType);
					let S = !0;
					f.isPressed ||
						((f.isPressed = !0),
						(f.isOverTarget = !0),
						(f.activePointerId = v.pointerId),
						(f.target = v.currentTarget),
						!i && !l && ue(v.currentTarget),
						c || _o(f.target),
						(S = x(v, f.pointerType)),
						$(Oe(v.currentTarget), 'pointermove', y, !1),
						$(Oe(v.currentTarget), 'pointerup', w, !1),
						$(Oe(v.currentTarget), 'pointercancel', m, !1)),
						S && v.stopPropagation();
				}),
					(E.onMouseDown = (v) => {
						v.currentTarget.contains(v.target) &&
							v.button === 0 &&
							(Kr(v.currentTarget) && v.preventDefault(), v.stopPropagation());
					}),
					(E.onPointerUp = (v) => {
						!v.currentTarget.contains(v.target) ||
							f.pointerType === 'virtual' ||
							(v.button === 0 && Ye(v, v.currentTarget) && C(v, f.pointerType || v.pointerType));
					});
				let y = (v) => {
						v.pointerId !== f.activePointerId ||
							!f.target ||
							(Ye(v, f.target)
								? f.isOverTarget || ((f.isOverTarget = !0), x(me(f.target, v), f.pointerType))
								: f.isOverTarget &&
								  ((f.isOverTarget = !1), T(me(f.target, v), f.pointerType, !1), L(v)));
					},
					w = (v) => {
						v.pointerId === f.activePointerId &&
							f.isPressed &&
							v.button === 0 &&
							f.target &&
							((Ye(v, f.target) || f.isOverTarget) && T(me(f.target, v), f.pointerType),
							(f.isPressed = !1),
							(f.isOverTarget = !1),
							(f.activePointerId = null),
							(f.pointerType = null),
							A(),
							c || Wt(f.target));
					},
					m = (v) => {
						M(v);
					};
				E.onDragStart = (v) => {
					v.currentTarget.contains(v.target) && M(v);
				};
			} else {
				(E.onMouseDown = (m) => {
					if (m.button !== 0 || !m.currentTarget.contains(m.target)) return;
					if ((Kr(m.currentTarget) && m.preventDefault(), f.ignoreEmulatedMouseEvents)) {
						m.stopPropagation();
						return;
					}
					(f.isPressed = !0),
						(f.isOverTarget = !0),
						(f.target = m.currentTarget),
						(f.pointerType = $t(m.nativeEvent) ? 'virtual' : 'mouse'),
						!i && !l && ue(m.currentTarget),
						x(m, f.pointerType) && m.stopPropagation(),
						$(Oe(m.currentTarget), 'mouseup', y, !1);
				}),
					(E.onMouseEnter = (m) => {
						if (!m.currentTarget.contains(m.target)) return;
						let v = !0;
						f.isPressed &&
							!f.ignoreEmulatedMouseEvents &&
							((f.isOverTarget = !0), (v = x(m, f.pointerType))),
							v && m.stopPropagation();
					}),
					(E.onMouseLeave = (m) => {
						if (!m.currentTarget.contains(m.target)) return;
						let v = !0;
						f.isPressed &&
							!f.ignoreEmulatedMouseEvents &&
							((f.isOverTarget = !1), (v = T(m, f.pointerType, !1)), L(m)),
							v && m.stopPropagation();
					}),
					(E.onMouseUp = (m) => {
						m.currentTarget.contains(m.target) &&
							!f.ignoreEmulatedMouseEvents &&
							m.button === 0 &&
							C(m, f.pointerType || 'mouse');
					});
				let y = (m) => {
					if (m.button === 0) {
						if (((f.isPressed = !1), A(), f.ignoreEmulatedMouseEvents)) {
							f.ignoreEmulatedMouseEvents = !1;
							return;
						}
						f.target &&
							(Ye(m, f.target)
								? T(me(f.target, m), f.pointerType)
								: f.isOverTarget && T(me(f.target, m), f.pointerType, !1),
							(f.isOverTarget = !1));
					}
				};
				(E.onTouchStart = (m) => {
					if (!m.currentTarget.contains(m.target)) return;
					let v = $f(m.nativeEvent);
					if (!v) return;
					(f.activePointerId = v.identifier),
						(f.ignoreEmulatedMouseEvents = !0),
						(f.isOverTarget = !0),
						(f.isPressed = !0),
						(f.target = m.currentTarget),
						(f.pointerType = 'touch'),
						!i && !l && ue(m.currentTarget),
						c || _o(f.target),
						x(m, f.pointerType) && m.stopPropagation(),
						$(mn(m.currentTarget), 'scroll', w, !0);
				}),
					(E.onTouchMove = (m) => {
						if (!m.currentTarget.contains(m.target)) return;
						if (!f.isPressed) {
							m.stopPropagation();
							return;
						}
						let v = Yo(m.nativeEvent, f.activePointerId),
							S = !0;
						v && Ye(v, m.currentTarget)
							? f.isOverTarget || ((f.isOverTarget = !0), (S = x(m, f.pointerType)))
							: f.isOverTarget && ((f.isOverTarget = !1), (S = T(m, f.pointerType, !1)), L(m)),
							S && m.stopPropagation();
					}),
					(E.onTouchEnd = (m) => {
						if (!m.currentTarget.contains(m.target)) return;
						if (!f.isPressed) {
							m.stopPropagation();
							return;
						}
						let v = Yo(m.nativeEvent, f.activePointerId),
							S = !0;
						v && Ye(v, m.currentTarget)
							? (C(m, f.pointerType), (S = T(m, f.pointerType)))
							: f.isOverTarget && (S = T(m, f.pointerType, !1)),
							S && m.stopPropagation(),
							(f.isPressed = !1),
							(f.activePointerId = null),
							(f.isOverTarget = !1),
							(f.ignoreEmulatedMouseEvents = !0),
							!c && f.target && Wt(f.target),
							A();
					}),
					(E.onTouchCancel = (m) => {
						m.currentTarget.contains(m.target) && (m.stopPropagation(), f.isPressed && M(m));
					});
				let w = (m) => {
					f.isPressed &&
						m.target.contains(f.target) &&
						M({ currentTarget: f.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
				};
				E.onDragStart = (m) => {
					m.currentTarget.contains(m.target) && M(m);
				};
			}
			return E;
		}, [$, i, l, A, c, M, L, T, x, C]);
	return (
		b.useEffect(
			() => () => {
				!c && P.current.target && Wt(P.current.target);
			},
			[c]
		),
		{ isPressed: a || h, pressProps: de(p, k) }
	);
}
function Hn(e) {
	return e.tagName === 'A' && e.hasAttribute('href');
}
function jr(e, t) {
	const { key: r, code: n } = e,
		o = t,
		s = o.getAttribute('role');
	return (
		(r === 'Enter' || r === ' ' || r === 'Spacebar' || n === 'Space') &&
		!(
			(o instanceof mn(o).HTMLInputElement && !fa(o, r)) ||
			o instanceof mn(o).HTMLTextAreaElement ||
			o.isContentEditable
		) &&
		!((s === 'link' || (!s && Hn(o))) && r !== 'Enter')
	);
}
function $f(e) {
	const { targetTouches: t } = e;
	return t.length > 0 ? t[0] : null;
}
function Yo(e, t) {
	const r = e.changedTouches;
	for (let n = 0; n < r.length; n++) {
		const o = r[n];
		if (o.identifier === t) return o;
	}
	return null;
}
function me(e, t) {
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
	};
}
function wf(e) {
	let t = e.width ? e.width / 2 : e.radiusX || 0,
		r = e.height ? e.height / 2 : e.radiusY || 0;
	return { top: e.clientY - r, right: e.clientX + t, bottom: e.clientY + r, left: e.clientX - t };
}
function Ef(e, t) {
	return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Ye(e, t) {
	let r = t.getBoundingClientRect(),
		n = wf(e);
	return Ef(r, n);
}
function Kr(e) {
	return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function qo(e, t) {
	return e instanceof HTMLInputElement
		? !fa(e, t)
		: e instanceof HTMLButtonElement
		? e.type !== 'submit' && e.type !== 'reset'
		: !Hn(e);
}
var Sf = new Set([
	'checkbox',
	'radio',
	'range',
	'color',
	'file',
	'image',
	'button',
	'submit',
	'reset',
]);
function fa(e, t) {
	return e.type === 'checkbox' || e.type === 'radio' ? t === ' ' : Sf.has(e.type);
}
const da = b.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
	Tr = b.createContext({}),
	$r = b.createContext(null),
	wr = typeof document < 'u',
	Wn = wr ? b.useLayoutEffect : b.useEffect,
	pa = b.createContext({ strict: !1 });
function Cf(e, t, r, n) {
	const { visualElement: o } = b.useContext(Tr),
		s = b.useContext(pa),
		i = b.useContext($r),
		a = b.useContext(da).reducedMotion,
		l = b.useRef();
	(n = n || s.renderer),
		!l.current &&
			n &&
			(l.current = n(e, {
				visualState: t,
				parent: o,
				props: r,
				presenceContext: i,
				blockInitialAnimation: i ? i.initial === !1 : !1,
				reducedMotionConfig: a,
			}));
	const u = l.current;
	b.useInsertionEffect(() => {
		u && u.update(r, i);
	});
	const c = b.useRef(!!window.HandoffAppearAnimations);
	return (
		Wn(() => {
			u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
		}),
		b.useEffect(() => {
			u &&
				(u.updateFeatures(),
				!c.current && u.animationState && u.animationState.animateChanges(),
				(window.HandoffAppearAnimations = void 0),
				(c.current = !1));
		}),
		u
	);
}
function tt(e) {
	return typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current');
}
function Af(e, t, r) {
	return b.useCallback(
		(n) => {
			n && e.mount && e.mount(n),
				t && (n ? t.mount(n) : t.unmount()),
				r && (typeof r == 'function' ? r(n) : tt(r) && (r.current = n));
		},
		[t]
	);
}
function Et(e) {
	return typeof e == 'string' || Array.isArray(e);
}
function Er(e) {
	return typeof e == 'object' && typeof e.start == 'function';
}
const zn = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
	Gn = ['initial', ...zn];
function Sr(e) {
	return Er(e.animate) || Gn.some((t) => Et(e[t]));
}
function ha(e) {
	return !!(Sr(e) || e.variants);
}
function Mf(e, t) {
	if (Sr(e)) {
		const { initial: r, animate: n } = e;
		return { initial: r === !1 || Et(r) ? r : void 0, animate: Et(n) ? n : void 0 };
	}
	return e.inherit !== !1 ? t : {};
}
function Lf(e) {
	const { initial: t, animate: r } = Mf(e, b.useContext(Tr));
	return b.useMemo(() => ({ initial: t, animate: r }), [Zo(t), Zo(r)]);
}
function Zo(e) {
	return Array.isArray(e) ? e.join(' ') : e;
}
const Jo = {
		animation: [
			'animate',
			'variants',
			'whileHover',
			'whileTap',
			'exit',
			'whileInView',
			'whileFocus',
			'whileDrag',
		],
		exit: ['exit'],
		drag: ['drag', 'dragControls'],
		focus: ['whileFocus'],
		hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
		tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
		pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
		inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
		layout: ['layout', 'layoutId'],
	},
	St = {};
for (const e in Jo) St[e] = { isEnabled: (t) => Jo[e].some((r) => !!t[r]) };
function kf(e) {
	for (const t in e) St[t] = { ...St[t], ...e[t] };
}
const _n = b.createContext({}),
	ma = b.createContext({}),
	Vf = Symbol.for('motionComponentSymbol');
function Rf({
	preloadedFeatures: e,
	createVisualElement: t,
	useRender: r,
	useVisualState: n,
	Component: o,
}) {
	e && kf(e);
	function s(a, l) {
		let u;
		const c = { ...b.useContext(da), ...a, layoutId: Df(a) },
			{ isStatic: d } = c,
			p = Lf(a),
			h = n(a, d);
		if (!d && wr) {
			p.visualElement = Cf(o, h, c, t);
			const g = b.useContext(ma),
				P = b.useContext(pa).strict;
			p.visualElement && (u = p.visualElement.loadFeatures(c, P, e, g));
		}
		return b.createElement(
			Tr.Provider,
			{ value: p },
			u && p.visualElement ? b.createElement(u, { visualElement: p.visualElement, ...c }) : null,
			r(o, a, Af(h, p.visualElement, l), h, d, p.visualElement)
		);
	}
	const i = b.forwardRef(s);
	return (i[Vf] = o), i;
}
function Df({ layoutId: e }) {
	const t = b.useContext(_n).id;
	return t && e !== void 0 ? t + '-' + e : e;
}
function Ff(e) {
	function t(n, o = {}) {
		return Rf(e(n, o));
	}
	if (typeof Proxy > 'u') return t;
	const r = new Map();
	return new Proxy(t, { get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)) });
}
const If = [
	'animate',
	'circle',
	'defs',
	'desc',
	'ellipse',
	'g',
	'image',
	'line',
	'filter',
	'marker',
	'mask',
	'metadata',
	'path',
	'pattern',
	'polygon',
	'polyline',
	'rect',
	'stop',
	'switch',
	'symbol',
	'svg',
	'text',
	'tspan',
	'use',
	'view',
];
function Xn(e) {
	return typeof e != 'string' || e.includes('-') ? !1 : !!(If.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const cr = {};
function Of(e) {
	Object.assign(cr, e);
}
const Mt = [
		'transformPerspective',
		'x',
		'y',
		'z',
		'translateX',
		'translateY',
		'translateZ',
		'scale',
		'scaleX',
		'scaleY',
		'rotate',
		'rotateX',
		'rotateY',
		'rotateZ',
		'skew',
		'skewX',
		'skewY',
	],
	We = new Set(Mt);
function ga(e, { layout: t, layoutId: r }) {
	return (
		We.has(e) || e.startsWith('origin') || ((t || r !== void 0) && (!!cr[e] || e === 'opacity'))
	);
}
const re = (e) => !!(e && e.getVelocity),
	Nf = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
	Bf = Mt.length;
function jf(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
	let s = '';
	for (let i = 0; i < Bf; i++) {
		const a = Mt[i];
		if (e[a] !== void 0) {
			const l = Nf[a] || a;
			s += `${l}(${e[a]}) `;
		}
	}
	return (
		t && !e.z && (s += 'translateZ(0)'),
		(s = s.trim()),
		o ? (s = o(e, n ? '' : s)) : r && n && (s = 'none'),
		s
	);
}
const va = (e) => (t) => typeof t == 'string' && t.startsWith(e),
	ya = va('--'),
	vn = va('var(--'),
	Kf = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
	Uf = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
	Me = (e, t, r) => Math.min(Math.max(r, e), t),
	ze = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
	bt = { ...ze, transform: (e) => Me(0, 1, e) },
	zt = { ...ze, default: 1 },
	xt = (e) => Math.round(e * 1e5) / 1e5,
	Cr = /(-)?([\d]*\.?[\d])+/g,
	ba =
		/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
	Hf =
		/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Lt(e) {
	return typeof e == 'string';
}
const kt = (e) => ({
		test: (t) => Lt(t) && t.endsWith(e) && t.split(' ').length === 1,
		parse: parseFloat,
		transform: (t) => `${t}${e}`,
	}),
	$e = kt('deg'),
	fe = kt('%'),
	V = kt('px'),
	Wf = kt('vh'),
	zf = kt('vw'),
	Qo = { ...fe, parse: (e) => fe.parse(e) / 100, transform: (e) => fe.transform(e * 100) },
	ei = { ...ze, transform: Math.round },
	xa = {
		borderWidth: V,
		borderTopWidth: V,
		borderRightWidth: V,
		borderBottomWidth: V,
		borderLeftWidth: V,
		borderRadius: V,
		radius: V,
		borderTopLeftRadius: V,
		borderTopRightRadius: V,
		borderBottomRightRadius: V,
		borderBottomLeftRadius: V,
		width: V,
		maxWidth: V,
		height: V,
		maxHeight: V,
		size: V,
		top: V,
		right: V,
		bottom: V,
		left: V,
		padding: V,
		paddingTop: V,
		paddingRight: V,
		paddingBottom: V,
		paddingLeft: V,
		margin: V,
		marginTop: V,
		marginRight: V,
		marginBottom: V,
		marginLeft: V,
		rotate: $e,
		rotateX: $e,
		rotateY: $e,
		rotateZ: $e,
		scale: zt,
		scaleX: zt,
		scaleY: zt,
		scaleZ: zt,
		skew: $e,
		skewX: $e,
		skewY: $e,
		distance: V,
		translateX: V,
		translateY: V,
		translateZ: V,
		x: V,
		y: V,
		z: V,
		perspective: V,
		transformPerspective: V,
		opacity: bt,
		originX: Qo,
		originY: Qo,
		originZ: V,
		zIndex: ei,
		fillOpacity: bt,
		strokeOpacity: bt,
		numOctaves: ei,
	};
function Yn(e, t, r, n) {
	const { style: o, vars: s, transform: i, transformOrigin: a } = e;
	let l = !1,
		u = !1,
		c = !0;
	for (const d in t) {
		const p = t[d];
		if (ya(d)) {
			s[d] = p;
			continue;
		}
		const h = xa[d],
			g = Uf(p, h);
		if (We.has(d)) {
			if (((l = !0), (i[d] = g), !c)) continue;
			p !== (h.default || 0) && (c = !1);
		} else d.startsWith('origin') ? ((u = !0), (a[d] = g)) : (o[d] = g);
	}
	if (
		(t.transform ||
			(l || n ? (o.transform = jf(e.transform, r, c, n)) : o.transform && (o.transform = 'none')),
		u)
	) {
		const { originX: d = '50%', originY: p = '50%', originZ: h = 0 } = a;
		o.transformOrigin = `${d} ${p} ${h}`;
	}
}
const qn = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Pa(e, t, r) {
	for (const n in t) !re(t[n]) && !ga(n, r) && (e[n] = t[n]);
}
function Gf({ transformTemplate: e }, t, r) {
	return b.useMemo(() => {
		const n = qn();
		return Yn(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function _f(e, t, r) {
	const n = e.style || {},
		o = {};
	return Pa(o, n, e), Object.assign(o, Gf(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function Xf(e, t, r) {
	const n = {},
		o = _f(e, t, r);
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((n.draggable = !1),
			(o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
			(o.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
		e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
		(n.style = o),
		n
	);
}
const Yf = new Set([
	'animate',
	'exit',
	'variants',
	'initial',
	'style',
	'values',
	'variants',
	'transition',
	'transformTemplate',
	'transformValues',
	'custom',
	'inherit',
	'onLayoutAnimationStart',
	'onLayoutAnimationComplete',
	'onLayoutMeasure',
	'onBeforeLayoutMeasure',
	'onAnimationStart',
	'onAnimationComplete',
	'onUpdate',
	'onDragStart',
	'onDrag',
	'onDragEnd',
	'onMeasureDragConstraints',
	'onDirectionLock',
	'onDragTransitionEnd',
	'_dragX',
	'_dragY',
	'onHoverStart',
	'onHoverEnd',
	'onViewportEnter',
	'onViewportLeave',
	'ignoreStrict',
	'viewport',
]);
function fr(e) {
	return (
		e.startsWith('while') ||
		(e.startsWith('drag') && e !== 'draggable') ||
		e.startsWith('layout') ||
		e.startsWith('onTap') ||
		e.startsWith('onPan') ||
		Yf.has(e)
	);
}
let Ta = (e) => !fr(e);
function qf(e) {
	e && (Ta = (t) => (t.startsWith('on') ? !fr(t) : e(t)));
}
try {
	qf(require('@emotion/is-prop-valid').default);
} catch {}
function Zf(e, t, r) {
	const n = {};
	for (const o in e)
		(o === 'values' && typeof e.values == 'object') ||
			((Ta(o) ||
				(r === !0 && fr(o)) ||
				(!t && !fr(o)) ||
				(e.draggable && o.startsWith('onDrag'))) &&
				(n[o] = e[o]));
	return n;
}
function ti(e, t, r) {
	return typeof e == 'string' ? e : V.transform(t + r * e);
}
function Jf(e, t, r) {
	const n = ti(t, e.x, e.width),
		o = ti(r, e.y, e.height);
	return `${n} ${o}`;
}
const Qf = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
	ed = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function td(e, t, r = 1, n = 0, o = !0) {
	e.pathLength = 1;
	const s = o ? Qf : ed;
	e[s.offset] = V.transform(-n);
	const i = V.transform(t),
		a = V.transform(r);
	e[s.array] = `${i} ${a}`;
}
function Zn(
	e,
	{
		attrX: t,
		attrY: r,
		attrScale: n,
		originX: o,
		originY: s,
		pathLength: i,
		pathSpacing: a = 1,
		pathOffset: l = 0,
		...u
	},
	c,
	d,
	p
) {
	if ((Yn(e, u, c, p), d)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	(e.attrs = e.style), (e.style = {});
	const { attrs: h, style: g, dimensions: P } = e;
	h.transform && (P && (g.transform = h.transform), delete h.transform),
		P &&
			(o !== void 0 || s !== void 0 || g.transform) &&
			(g.transformOrigin = Jf(P, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)),
		t !== void 0 && (h.x = t),
		r !== void 0 && (h.y = r),
		n !== void 0 && (h.scale = n),
		i !== void 0 && td(h, i, a, l, !1);
}
const $a = () => ({ ...qn(), attrs: {} }),
	Jn = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function rd(e, t, r, n) {
	const o = b.useMemo(() => {
		const s = $a();
		return (
			Zn(s, t, { enableHardwareAcceleration: !1 }, Jn(n), e.transformTemplate),
			{ ...s.attrs, style: { ...s.style } }
		);
	}, [t]);
	if (e.style) {
		const s = {};
		Pa(s, e.style, e), (o.style = { ...s, ...o.style });
	}
	return o;
}
function nd(e = !1) {
	return (r, n, o, { latestValues: s }, i) => {
		const l = (Xn(r) ? rd : Xf)(n, s, i, r),
			c = { ...Zf(n, typeof r == 'string', e), ...l, ref: o },
			{ children: d } = n,
			p = b.useMemo(() => (re(d) ? d.get() : d), [d]);
		return b.createElement(r, { ...c, children: p });
	};
}
const Qn = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function wa(e, { style: t, vars: r }, n, o) {
	Object.assign(e.style, t, o && o.getProjectionStyles(n));
	for (const s in r) e.style.setProperty(s, r[s]);
}
const Ea = new Set([
	'baseFrequency',
	'diffuseConstant',
	'kernelMatrix',
	'kernelUnitLength',
	'keySplines',
	'keyTimes',
	'limitingConeAngle',
	'markerHeight',
	'markerWidth',
	'numOctaves',
	'targetX',
	'targetY',
	'surfaceScale',
	'specularConstant',
	'specularExponent',
	'stdDeviation',
	'tableValues',
	'viewBox',
	'gradientTransform',
	'pathLength',
	'startOffset',
	'textLength',
	'lengthAdjust',
]);
function Sa(e, t, r, n) {
	wa(e, t, void 0, n);
	for (const o in t.attrs) e.setAttribute(Ea.has(o) ? o : Qn(o), t.attrs[o]);
}
function eo(e, t) {
	const { style: r } = e,
		n = {};
	for (const o in r) (re(r[o]) || (t.style && re(t.style[o])) || ga(o, e)) && (n[o] = r[o]);
	return n;
}
function Ca(e, t) {
	const r = eo(e, t);
	for (const n in e)
		if (re(e[n]) || re(t[n])) {
			const o = Mt.indexOf(n) !== -1 ? 'attr' + n.charAt(0).toUpperCase() + n.substring(1) : n;
			r[o] = e[n];
		}
	return r;
}
function to(e, t, r, n = {}, o = {}) {
	return (
		typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
		typeof t == 'string' && (t = e.variants && e.variants[t]),
		typeof t == 'function' && (t = t(r !== void 0 ? r : e.custom, n, o)),
		t
	);
}
function Aa(e) {
	const t = b.useRef(null);
	return t.current === null && (t.current = e()), t.current;
}
const dr = (e) => Array.isArray(e),
	od = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
	id = (e) => (dr(e) ? e[e.length - 1] || 0 : e);
function Jt(e) {
	const t = re(e) ? e.get() : e;
	return od(t) ? t.toValue() : t;
}
function sd({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, s) {
	const i = { latestValues: ad(n, o, s, e), renderState: t() };
	return r && (i.mount = (a) => r(n, a, i)), i;
}
const Ma = (e) => (t, r) => {
	const n = b.useContext(Tr),
		o = b.useContext($r),
		s = () => sd(e, t, n, o);
	return r ? s() : Aa(s);
};
function ad(e, t, r, n) {
	const o = {},
		s = n(e, {});
	for (const p in s) o[p] = Jt(s[p]);
	let { initial: i, animate: a } = e;
	const l = Sr(e),
		u = ha(e);
	t &&
		u &&
		!l &&
		e.inherit !== !1 &&
		(i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
	let c = r ? r.initial === !1 : !1;
	c = c || i === !1;
	const d = c ? a : i;
	return (
		d &&
			typeof d != 'boolean' &&
			!Er(d) &&
			(Array.isArray(d) ? d : [d]).forEach((h) => {
				const g = to(e, h);
				if (!g) return;
				const { transitionEnd: P, transition: $, ...A } = g;
				for (const x in A) {
					let T = A[x];
					if (Array.isArray(T)) {
						const C = c ? T.length - 1 : 0;
						T = T[C];
					}
					T !== null && (o[x] = T);
				}
				for (const x in P) o[x] = P[x];
			}),
		o
	);
}
const z = (e) => e;
class ri {
	constructor() {
		(this.order = []), (this.scheduled = new Set());
	}
	add(t) {
		if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0;
	}
	remove(t) {
		const r = this.order.indexOf(t);
		r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
	}
	clear() {
		(this.order.length = 0), this.scheduled.clear();
	}
}
function ld(e) {
	let t = new ri(),
		r = new ri(),
		n = 0,
		o = !1,
		s = !1;
	const i = new WeakSet(),
		a = {
			schedule: (l, u = !1, c = !1) => {
				const d = c && o,
					p = d ? t : r;
				return u && i.add(l), p.add(l) && d && o && (n = t.order.length), l;
			},
			cancel: (l) => {
				r.remove(l), i.delete(l);
			},
			process: (l) => {
				if (o) {
					s = !0;
					return;
				}
				if (((o = !0), ([t, r] = [r, t]), r.clear(), (n = t.order.length), n))
					for (let u = 0; u < n; u++) {
						const c = t.order[u];
						c(l), i.has(c) && (a.schedule(c), e());
					}
				(o = !1), s && ((s = !1), a.process(l));
			},
		};
	return a;
}
const Gt = ['prepare', 'read', 'update', 'preRender', 'render', 'postRender'],
	ud = 40;
function cd(e, t) {
	let r = !1,
		n = !0;
	const o = { delta: 0, timestamp: 0, isProcessing: !1 },
		s = Gt.reduce((d, p) => ((d[p] = ld(() => (r = !0))), d), {}),
		i = (d) => s[d].process(o),
		a = () => {
			const d = performance.now();
			(r = !1),
				(o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, ud), 1)),
				(o.timestamp = d),
				(o.isProcessing = !0),
				Gt.forEach(i),
				(o.isProcessing = !1),
				r && t && ((n = !1), e(a));
		},
		l = () => {
			(r = !0), (n = !0), o.isProcessing || e(a);
		};
	return {
		schedule: Gt.reduce((d, p) => {
			const h = s[p];
			return (d[p] = (g, P = !1, $ = !1) => (r || l(), h.schedule(g, P, $))), d;
		}, {}),
		cancel: (d) => Gt.forEach((p) => s[p].cancel(d)),
		state: o,
		steps: s,
	};
}
const {
		schedule: K,
		cancel: Pe,
		state: q,
		steps: Ur,
	} = cd(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : z, !0),
	fd = {
		useVisualState: Ma({
			scrapeMotionValuesFromProps: Ca,
			createRenderState: $a,
			onMount: (e, t, { renderState: r, latestValues: n }) => {
				K.read(() => {
					try {
						r.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect();
					} catch {
						r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
					}
				}),
					K.render(() => {
						Zn(r, n, { enableHardwareAcceleration: !1 }, Jn(t.tagName), e.transformTemplate),
							Sa(t, r);
					});
			},
		}),
	},
	dd = { useVisualState: Ma({ scrapeMotionValuesFromProps: eo, createRenderState: qn }) };
function pd(e, { forwardMotionProps: t = !1 }, r, n) {
	return {
		...(Xn(e) ? fd : dd),
		preloadedFeatures: r,
		useRender: nd(t),
		createVisualElement: n,
		Component: e,
	};
}
function ve(e, t, r, n = { passive: !0 }) {
	return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const La = (e) =>
	e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1;
function Ar(e, t = 'page') {
	return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
}
const hd = (e) => (t) => La(t) && e(t, Ar(t));
function ye(e, t, r, n) {
	return ve(e, t, hd(r), n);
}
const md = (e, t) => (r) => t(e(r)),
	Se = (...e) => e.reduce(md);
function ka(e) {
	let t = null;
	return () => {
		const r = () => {
			t = null;
		};
		return t === null ? ((t = e), r) : !1;
	};
}
const ni = ka('dragHorizontal'),
	oi = ka('dragVertical');
function Va(e) {
	let t = !1;
	if (e === 'y') t = oi();
	else if (e === 'x') t = ni();
	else {
		const r = ni(),
			n = oi();
		r && n
			? (t = () => {
					r(), n();
			  })
			: (r && r(), n && n());
	}
	return t;
}
function Ra() {
	const e = Va(!0);
	return e ? (e(), !1) : !0;
}
class ke {
	constructor(t) {
		(this.isMounted = !1), (this.node = t);
	}
	update() {}
}
function ii(e, t) {
	const r = 'pointer' + (t ? 'enter' : 'leave'),
		n = 'onHover' + (t ? 'Start' : 'End'),
		o = (s, i) => {
			if (s.type === 'touch' || Ra()) return;
			const a = e.getProps();
			e.animationState && a.whileHover && e.animationState.setActive('whileHover', t),
				a[n] && K.update(() => a[n](s, i));
		};
	return ye(e.current, r, o, { passive: !e.getProps()[n] });
}
class gd extends ke {
	mount() {
		this.unmount = Se(ii(this.node, !0), ii(this.node, !1));
	}
	unmount() {}
}
class vd extends ke {
	constructor() {
		super(...arguments), (this.isActive = !1);
	}
	onFocus() {
		let t = !1;
		try {
			t = this.node.current.matches(':focus-visible');
		} catch {
			t = !0;
		}
		!t ||
			!this.node.animationState ||
			(this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
	}
	mount() {
		this.unmount = Se(
			ve(this.node.current, 'focus', () => this.onFocus()),
			ve(this.node.current, 'blur', () => this.onBlur())
		);
	}
	unmount() {}
}
const Da = (e, t) => (t ? (e === t ? !0 : Da(e, t.parentElement)) : !1);
function Hr(e, t) {
	if (!t) return;
	const r = new PointerEvent('pointer' + e);
	t(r, Ar(r));
}
class yd extends ke {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = z),
			(this.removeEndListeners = z),
			(this.removeAccessibleListeners = z),
			(this.startPointerPress = (t, r) => {
				if ((this.removeEndListeners(), this.isPressing)) return;
				const n = this.node.getProps(),
					s = ye(
						window,
						'pointerup',
						(a, l) => {
							if (!this.checkPressEnd()) return;
							const { onTap: u, onTapCancel: c } = this.node.getProps();
							K.update(() => {
								Da(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
							});
						},
						{ passive: !(n.onTap || n.onPointerUp) }
					),
					i = ye(window, 'pointercancel', (a, l) => this.cancelPress(a, l), {
						passive: !(n.onTapCancel || n.onPointerCancel),
					});
				(this.removeEndListeners = Se(s, i)), this.startPress(t, r);
			}),
			(this.startAccessiblePress = () => {
				const t = (s) => {
						if (s.key !== 'Enter' || this.isPressing) return;
						const i = (a) => {
							a.key !== 'Enter' ||
								!this.checkPressEnd() ||
								Hr('up', (l, u) => {
									const { onTap: c } = this.node.getProps();
									c && K.update(() => c(l, u));
								});
						};
						this.removeEndListeners(),
							(this.removeEndListeners = ve(this.node.current, 'keyup', i)),
							Hr('down', (a, l) => {
								this.startPress(a, l);
							});
					},
					r = ve(this.node.current, 'keydown', t),
					n = () => {
						this.isPressing && Hr('cancel', (s, i) => this.cancelPress(s, i));
					},
					o = ve(this.node.current, 'blur', n);
				this.removeAccessibleListeners = Se(r, o);
			});
	}
	startPress(t, r) {
		this.isPressing = !0;
		const { onTapStart: n, whileTap: o } = this.node.getProps();
		o && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
			n && K.update(() => n(t, r));
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap &&
				this.node.animationState &&
				this.node.animationState.setActive('whileTap', !1),
			!Ra()
		);
	}
	cancelPress(t, r) {
		if (!this.checkPressEnd()) return;
		const { onTapCancel: n } = this.node.getProps();
		n && K.update(() => n(t, r));
	}
	mount() {
		const t = this.node.getProps(),
			r = ye(this.node.current, 'pointerdown', this.startPointerPress, {
				passive: !(t.onTapStart || t.onPointerStart),
			}),
			n = ve(this.node.current, 'focus', this.startAccessiblePress);
		this.removeStartListeners = Se(r, n);
	}
	unmount() {
		this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
	}
}
const yn = new WeakMap(),
	Wr = new WeakMap(),
	bd = (e) => {
		const t = yn.get(e.target);
		t && t(e);
	},
	xd = (e) => {
		e.forEach(bd);
	};
function Pd({ root: e, ...t }) {
	const r = e || document;
	Wr.has(r) || Wr.set(r, {});
	const n = Wr.get(r),
		o = JSON.stringify(t);
	return n[o] || (n[o] = new IntersectionObserver(xd, { root: e, ...t })), n[o];
}
function Td(e, t, r) {
	const n = Pd(t);
	return (
		yn.set(e, r),
		n.observe(e),
		() => {
			yn.delete(e), n.unobserve(e);
		}
	);
}
const $d = { some: 0, all: 1 };
class wd extends ke {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
	}
	startObserver() {
		this.unmount();
		const { viewport: t = {} } = this.node.getProps(),
			{ root: r, margin: n, amount: o = 'some', once: s } = t,
			i = {
				root: r ? r.current : void 0,
				rootMargin: n,
				threshold: typeof o == 'number' ? o : $d[o],
			},
			a = (l) => {
				const { isIntersecting: u } = l;
				if (this.isInView === u || ((this.isInView = u), s && !u && this.hasEnteredView)) return;
				u && (this.hasEnteredView = !0),
					this.node.animationState && this.node.animationState.setActive('whileInView', u);
				const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
					p = u ? c : d;
				p && p(l);
			};
		return Td(this.node.current, i, a);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > 'u') return;
		const { props: t, prevProps: r } = this.node;
		['amount', 'margin', 'root'].some(Ed(t, r)) && this.startObserver();
	}
	unmount() {}
}
function Ed({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (r) => e[r] !== t[r];
}
const Sd = {
	inView: { Feature: wd },
	tap: { Feature: yd },
	focus: { Feature: vd },
	hover: { Feature: gd },
};
function Fa(e, t) {
	if (!Array.isArray(t)) return !1;
	const r = t.length;
	if (r !== e.length) return !1;
	for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
	return !0;
}
function Cd(e) {
	const t = {};
	return e.values.forEach((r, n) => (t[n] = r.get())), t;
}
function Ad(e) {
	const t = {};
	return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t;
}
function Mr(e, t, r) {
	const n = e.getProps();
	return to(n, t, r !== void 0 ? r : n.custom, Cd(e), Ad(e));
}
const Md = 'framerAppearId',
	Ld = 'data-' + Qn(Md);
let kd = z,
	ro = z;
const Ce = (e) => e * 1e3,
	be = (e) => e / 1e3,
	Vd = { current: !1 },
	Ia = (e) => Array.isArray(e) && typeof e[0] == 'number';
function Oa(e) {
	return !!(!e || (typeof e == 'string' && Na[e]) || Ia(e) || (Array.isArray(e) && e.every(Oa)));
}
const yt = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
	Na = {
		linear: 'linear',
		ease: 'ease',
		easeIn: 'ease-in',
		easeOut: 'ease-out',
		easeInOut: 'ease-in-out',
		circIn: yt([0, 0.65, 0.55, 1]),
		circOut: yt([0.55, 0, 1, 0.45]),
		backIn: yt([0.31, 0.01, 0.66, -0.59]),
		backOut: yt([0.33, 1.53, 0.69, 0.99]),
	};
function Ba(e) {
	if (e) return Ia(e) ? yt(e) : Array.isArray(e) ? e.map(Ba) : Na[e];
}
function Rd(
	e,
	t,
	r,
	{ delay: n = 0, duration: o, repeat: s = 0, repeatType: i = 'loop', ease: a, times: l } = {}
) {
	const u = { [t]: r };
	l && (u.offset = l);
	const c = Ba(a);
	return (
		Array.isArray(c) && (u.easing = c),
		e.animate(u, {
			delay: n,
			duration: o,
			easing: Array.isArray(c) ? 'linear' : c,
			fill: 'both',
			iterations: s + 1,
			direction: i === 'reverse' ? 'alternate' : 'normal',
		})
	);
}
function Dd(e, { repeat: t, repeatType: r = 'loop' }) {
	const n = t && r !== 'loop' && t % 2 === 1 ? 0 : e.length - 1;
	return e[n];
}
const ja = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
	Fd = 1e-7,
	Id = 12;
function Od(e, t, r, n, o) {
	let s,
		i,
		a = 0;
	do (i = t + (r - t) / 2), (s = ja(i, n, o) - e), s > 0 ? (r = i) : (t = i);
	while (Math.abs(s) > Fd && ++a < Id);
	return i;
}
function Vt(e, t, r, n) {
	if (e === t && r === n) return z;
	const o = (s) => Od(s, 0, 1, e, r);
	return (s) => (s === 0 || s === 1 ? s : ja(o(s), t, n));
}
const Nd = Vt(0.42, 0, 1, 1),
	Bd = Vt(0, 0, 0.58, 1),
	Ka = Vt(0.42, 0, 0.58, 1),
	jd = (e) => Array.isArray(e) && typeof e[0] != 'number',
	Ua = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
	Ha = (e) => (t) => 1 - e(1 - t),
	Wa = (e) => 1 - Math.sin(Math.acos(e)),
	no = Ha(Wa),
	Kd = Ua(no),
	za = Vt(0.33, 1.53, 0.69, 0.99),
	oo = Ha(za),
	Ud = Ua(oo),
	Hd = (e) => ((e *= 2) < 1 ? 0.5 * oo(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
	Wd = {
		linear: z,
		easeIn: Nd,
		easeInOut: Ka,
		easeOut: Bd,
		circIn: Wa,
		circInOut: Kd,
		circOut: no,
		backIn: oo,
		backInOut: Ud,
		backOut: za,
		anticipate: Hd,
	},
	si = (e) => {
		if (Array.isArray(e)) {
			ro(e.length === 4);
			const [t, r, n, o] = e;
			return Vt(t, r, n, o);
		} else if (typeof e == 'string') return Wd[e];
		return e;
	},
	io = (e, t) => (r) =>
		!!(
			(Lt(r) && Hf.test(r) && r.startsWith(e)) ||
			(t && Object.prototype.hasOwnProperty.call(r, t))
		),
	Ga = (e, t, r) => (n) => {
		if (!Lt(n)) return n;
		const [o, s, i, a] = n.match(Cr);
		return {
			[e]: parseFloat(o),
			[t]: parseFloat(s),
			[r]: parseFloat(i),
			alpha: a !== void 0 ? parseFloat(a) : 1,
		};
	},
	zd = (e) => Me(0, 255, e),
	zr = { ...ze, transform: (e) => Math.round(zd(e)) },
	je = {
		test: io('rgb', 'red'),
		parse: Ga('red', 'green', 'blue'),
		transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
			'rgba(' +
			zr.transform(e) +
			', ' +
			zr.transform(t) +
			', ' +
			zr.transform(r) +
			', ' +
			xt(bt.transform(n)) +
			')',
	};
function Gd(e) {
	let t = '',
		r = '',
		n = '',
		o = '';
	return (
		e.length > 5
			? ((t = e.substring(1, 3)),
			  (r = e.substring(3, 5)),
			  (n = e.substring(5, 7)),
			  (o = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (r = e.substring(2, 3)),
			  (n = e.substring(3, 4)),
			  (o = e.substring(4, 5)),
			  (t += t),
			  (r += r),
			  (n += n),
			  (o += o)),
		{
			red: parseInt(t, 16),
			green: parseInt(r, 16),
			blue: parseInt(n, 16),
			alpha: o ? parseInt(o, 16) / 255 : 1,
		}
	);
}
const bn = { test: io('#'), parse: Gd, transform: je.transform },
	rt = {
		test: io('hsl', 'hue'),
		parse: Ga('hue', 'saturation', 'lightness'),
		transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
			'hsla(' +
			Math.round(e) +
			', ' +
			fe.transform(xt(t)) +
			', ' +
			fe.transform(xt(r)) +
			', ' +
			xt(bt.transform(n)) +
			')',
	},
	ee = {
		test: (e) => je.test(e) || bn.test(e) || rt.test(e),
		parse: (e) => (je.test(e) ? je.parse(e) : rt.test(e) ? rt.parse(e) : bn.parse(e)),
		transform: (e) => (Lt(e) ? e : e.hasOwnProperty('red') ? je.transform(e) : rt.transform(e)),
	},
	W = (e, t, r) => -r * e + r * t + e;
function Gr(e, t, r) {
	return (
		r < 0 && (r += 1),
		r > 1 && (r -= 1),
		r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
	);
}
function _d({ hue: e, saturation: t, lightness: r, alpha: n }) {
	(e /= 360), (t /= 100), (r /= 100);
	let o = 0,
		s = 0,
		i = 0;
	if (!t) o = s = i = r;
	else {
		const a = r < 0.5 ? r * (1 + t) : r + t - r * t,
			l = 2 * r - a;
		(o = Gr(l, a, e + 1 / 3)), (s = Gr(l, a, e)), (i = Gr(l, a, e - 1 / 3));
	}
	return {
		red: Math.round(o * 255),
		green: Math.round(s * 255),
		blue: Math.round(i * 255),
		alpha: n,
	};
}
const _r = (e, t, r) => {
		const n = e * e;
		return Math.sqrt(Math.max(0, r * (t * t - n) + n));
	},
	Xd = [bn, je, rt],
	Yd = (e) => Xd.find((t) => t.test(e));
function ai(e) {
	const t = Yd(e);
	let r = t.parse(e);
	return t === rt && (r = _d(r)), r;
}
const _a = (e, t) => {
	const r = ai(e),
		n = ai(t),
		o = { ...r };
	return (s) => (
		(o.red = _r(r.red, n.red, s)),
		(o.green = _r(r.green, n.green, s)),
		(o.blue = _r(r.blue, n.blue, s)),
		(o.alpha = W(r.alpha, n.alpha, s)),
		je.transform(o)
	);
};
function qd(e) {
	var t, r;
	return (
		isNaN(e) &&
		Lt(e) &&
		(((t = e.match(Cr)) === null || t === void 0 ? void 0 : t.length) || 0) +
			(((r = e.match(ba)) === null || r === void 0 ? void 0 : r.length) || 0) >
			0
	);
}
const Xa = { regex: Kf, countKey: 'Vars', token: '${v}', parse: z },
	Ya = { regex: ba, countKey: 'Colors', token: '${c}', parse: ee.parse },
	qa = { regex: Cr, countKey: 'Numbers', token: '${n}', parse: ze.parse };
function Xr(e, { regex: t, countKey: r, token: n, parse: o }) {
	const s = e.tokenised.match(t);
	s &&
		((e['num' + r] = s.length),
		(e.tokenised = e.tokenised.replace(t, n)),
		e.values.push(...s.map(o)));
}
function pr(e) {
	const t = e.toString(),
		r = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
	return r.value.includes('var(--') && Xr(r, Xa), Xr(r, Ya), Xr(r, qa), r;
}
function Za(e) {
	return pr(e).values;
}
function Ja(e) {
	const { values: t, numColors: r, numVars: n, tokenised: o } = pr(e),
		s = t.length;
	return (i) => {
		let a = o;
		for (let l = 0; l < s; l++)
			l < n
				? (a = a.replace(Xa.token, i[l]))
				: l < n + r
				? (a = a.replace(Ya.token, ee.transform(i[l])))
				: (a = a.replace(qa.token, xt(i[l])));
		return a;
	};
}
const Zd = (e) => (typeof e == 'number' ? 0 : e);
function Jd(e) {
	const t = Za(e);
	return Ja(e)(t.map(Zd));
}
const Le = { test: qd, parse: Za, createTransformer: Ja, getAnimatableNone: Jd },
	Qa = (e, t) => (r) => `${r > 0 ? t : e}`;
function el(e, t) {
	return typeof e == 'number'
		? (r) => W(e, t, r)
		: ee.test(e)
		? _a(e, t)
		: e.startsWith('var(')
		? Qa(e, t)
		: rl(e, t);
}
const tl = (e, t) => {
		const r = [...e],
			n = r.length,
			o = e.map((s, i) => el(s, t[i]));
		return (s) => {
			for (let i = 0; i < n; i++) r[i] = o[i](s);
			return r;
		};
	},
	Qd = (e, t) => {
		const r = { ...e, ...t },
			n = {};
		for (const o in r) e[o] !== void 0 && t[o] !== void 0 && (n[o] = el(e[o], t[o]));
		return (o) => {
			for (const s in n) r[s] = n[s](o);
			return r;
		};
	},
	rl = (e, t) => {
		const r = Le.createTransformer(t),
			n = pr(e),
			o = pr(t);
		return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers
			? Se(tl(n.values, o.values), r)
			: Qa(e, t);
	},
	Ct = (e, t, r) => {
		const n = t - e;
		return n === 0 ? 1 : (r - e) / n;
	},
	li = (e, t) => (r) => W(e, t, r);
function ep(e) {
	return typeof e == 'number'
		? li
		: typeof e == 'string'
		? ee.test(e)
			? _a
			: rl
		: Array.isArray(e)
		? tl
		: typeof e == 'object'
		? Qd
		: li;
}
function tp(e, t, r) {
	const n = [],
		o = r || ep(e[0]),
		s = e.length - 1;
	for (let i = 0; i < s; i++) {
		let a = o(e[i], e[i + 1]);
		if (t) {
			const l = Array.isArray(t) ? t[i] || z : t;
			a = Se(l, a);
		}
		n.push(a);
	}
	return n;
}
function nl(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
	const s = e.length;
	if ((ro(s === t.length), s === 1)) return () => t[0];
	e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
	const i = tp(t, n, o),
		a = i.length,
		l = (u) => {
			let c = 0;
			if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
			const d = Ct(e[c], e[c + 1], u);
			return i[c](d);
		};
	return r ? (u) => l(Me(e[0], e[s - 1], u)) : l;
}
function rp(e, t) {
	const r = e[e.length - 1];
	for (let n = 1; n <= t; n++) {
		const o = Ct(0, t, n);
		e.push(W(r, 1, o));
	}
}
function np(e) {
	const t = [0];
	return rp(t, e.length - 1), t;
}
function op(e, t) {
	return e.map((r) => r * t);
}
function ip(e, t) {
	return e.map(() => t || Ka).splice(0, e.length - 1);
}
function hr({ duration: e = 300, keyframes: t, times: r, ease: n = 'easeInOut' }) {
	const o = jd(n) ? n.map(si) : si(n),
		s = { done: !1, value: t[0] },
		i = op(r && r.length === t.length ? r : np(t), e),
		a = nl(i, t, { ease: Array.isArray(o) ? o : ip(t, o) });
	return { calculatedDuration: e, next: (l) => ((s.value = a(l)), (s.done = l >= e), s) };
}
function ol(e, t) {
	return t ? e * (1e3 / t) : 0;
}
const sp = 5;
function il(e, t, r) {
	const n = Math.max(t - sp, 0);
	return ol(r - e(n), t - n);
}
const Yr = 0.001,
	ap = 0.01,
	ui = 10,
	lp = 0.05,
	up = 1;
function cp({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
	let o, s;
	kd(e <= Ce(ui));
	let i = 1 - t;
	(i = Me(lp, up, i)),
		(e = Me(ap, ui, be(e))),
		i < 1
			? ((o = (u) => {
					const c = u * i,
						d = c * e,
						p = c - r,
						h = xn(u, i),
						g = Math.exp(-d);
					return Yr - (p / h) * g;
			  }),
			  (s = (u) => {
					const d = u * i * e,
						p = d * r + r,
						h = Math.pow(i, 2) * Math.pow(u, 2) * e,
						g = Math.exp(-d),
						P = xn(Math.pow(u, 2), i);
					return ((-o(u) + Yr > 0 ? -1 : 1) * ((p - h) * g)) / P;
			  }))
			: ((o = (u) => {
					const c = Math.exp(-u * e),
						d = (u - r) * e + 1;
					return -Yr + c * d;
			  }),
			  (s = (u) => {
					const c = Math.exp(-u * e),
						d = (r - u) * (e * e);
					return c * d;
			  }));
	const a = 5 / e,
		l = dp(o, s, a);
	if (((e = Ce(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e };
	{
		const u = Math.pow(l, 2) * n;
		return { stiffness: u, damping: i * 2 * Math.sqrt(n * u), duration: e };
	}
}
const fp = 12;
function dp(e, t, r) {
	let n = r;
	for (let o = 1; o < fp; o++) n = n - e(n) / t(n);
	return n;
}
function xn(e, t) {
	return e * Math.sqrt(1 - t * t);
}
const pp = ['duration', 'bounce'],
	hp = ['stiffness', 'damping', 'mass'];
function ci(e, t) {
	return t.some((r) => e[r] !== void 0);
}
function mp(e) {
	let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
	if (!ci(e, hp) && ci(e, pp)) {
		const r = cp(e);
		(t = { ...t, ...r, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
	}
	return t;
}
function sl({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
	const o = e[0],
		s = e[e.length - 1],
		i = { done: !1, value: o },
		{
			stiffness: a,
			damping: l,
			mass: u,
			velocity: c,
			duration: d,
			isResolvedFromDuration: p,
		} = mp(n),
		h = c ? -be(c) : 0,
		g = l / (2 * Math.sqrt(a * u)),
		P = s - o,
		$ = be(Math.sqrt(a / u)),
		A = Math.abs(P) < 5;
	r || (r = A ? 0.01 : 2), t || (t = A ? 0.005 : 0.5);
	let x;
	if (g < 1) {
		const T = xn($, g);
		x = (C) => {
			const M = Math.exp(-g * $ * C);
			return s - M * (((h + g * $ * P) / T) * Math.sin(T * C) + P * Math.cos(T * C));
		};
	} else if (g === 1) x = (T) => s - Math.exp(-$ * T) * (P + (h + $ * P) * T);
	else {
		const T = $ * Math.sqrt(g * g - 1);
		x = (C) => {
			const M = Math.exp(-g * $ * C),
				L = Math.min(T * C, 300);
			return s - (M * ((h + g * $ * P) * Math.sinh(L) + T * P * Math.cosh(L))) / T;
		};
	}
	return {
		calculatedDuration: (p && d) || null,
		next: (T) => {
			const C = x(T);
			if (p) i.done = T >= d;
			else {
				let M = h;
				T !== 0 && (g < 1 ? (M = il(x, T, C)) : (M = 0));
				const L = Math.abs(M) <= r,
					k = Math.abs(s - C) <= t;
				i.done = L && k;
			}
			return (i.value = i.done ? s : C), i;
		},
	};
}
function fi({
	keyframes: e,
	velocity: t = 0,
	power: r = 0.8,
	timeConstant: n = 325,
	bounceDamping: o = 10,
	bounceStiffness: s = 500,
	modifyTarget: i,
	min: a,
	max: l,
	restDelta: u = 0.5,
	restSpeed: c,
}) {
	const d = e[0],
		p = { done: !1, value: d },
		h = (f) => (a !== void 0 && f < a) || (l !== void 0 && f > l),
		g = (f) => (a === void 0 ? l : l === void 0 || Math.abs(a - f) < Math.abs(l - f) ? a : l);
	let P = r * t;
	const $ = d + P,
		A = i === void 0 ? $ : i($);
	A !== $ && (P = A - d);
	const x = (f) => -P * Math.exp(-f / n),
		T = (f) => A + x(f),
		C = (f) => {
			const E = x(f),
				R = T(f);
			(p.done = Math.abs(E) <= u), (p.value = p.done ? A : R);
		};
	let M, L;
	const k = (f) => {
		h(p.value) &&
			((M = f),
			(L = sl({
				keyframes: [p.value, g(p.value)],
				velocity: il(T, f, p.value),
				damping: o,
				stiffness: s,
				restDelta: u,
				restSpeed: c,
			})));
	};
	return (
		k(0),
		{
			calculatedDuration: null,
			next: (f) => {
				let E = !1;
				return (
					!L && M === void 0 && ((E = !0), C(f), k(f)),
					M !== void 0 && f > M ? L.next(f - M) : (!E && C(f), p)
				);
			},
		}
	);
}
const gp = (e) => {
		const t = ({ timestamp: r }) => e(r);
		return {
			start: () => K.update(t, !0),
			stop: () => Pe(t),
			now: () => (q.isProcessing ? q.timestamp : performance.now()),
		};
	},
	di = 2e4;
function pi(e) {
	let t = 0;
	const r = 50;
	let n = e.next(t);
	for (; !n.done && t < di; ) (t += r), (n = e.next(t));
	return t >= di ? 1 / 0 : t;
}
const vp = { decay: fi, inertia: fi, tween: hr, keyframes: hr, spring: sl };
function mr({
	autoplay: e = !0,
	delay: t = 0,
	driver: r = gp,
	keyframes: n,
	type: o = 'keyframes',
	repeat: s = 0,
	repeatDelay: i = 0,
	repeatType: a = 'loop',
	onPlay: l,
	onStop: u,
	onComplete: c,
	onUpdate: d,
	...p
}) {
	let h = 1,
		g = !1,
		P,
		$;
	const A = () => {
		$ = new Promise((F) => {
			P = F;
		});
	};
	A();
	let x;
	const T = vp[o] || hr;
	let C;
	T !== hr && typeof n[0] != 'number' && ((C = nl([0, 100], n, { clamp: !1 })), (n = [0, 100]));
	const M = T({ ...p, keyframes: n });
	let L;
	a === 'mirror' && (L = T({ ...p, keyframes: [...n].reverse(), velocity: -(p.velocity || 0) }));
	let k = 'idle',
		f = null,
		E = null,
		R = null;
	M.calculatedDuration === null && s && (M.calculatedDuration = pi(M));
	const { calculatedDuration: y } = M;
	let w = 1 / 0,
		m = 1 / 0;
	y !== null && ((w = y + i), (m = w * (s + 1) - i));
	let v = 0;
	const S = (F) => {
			if (E === null) return;
			h > 0 && (E = Math.min(E, F)),
				h < 0 && (E = Math.min(F - m / h, E)),
				f !== null ? (v = f) : (v = Math.round(F - E) * h);
			const te = v - t * (h >= 0 ? 1 : -1),
				_ = h >= 0 ? te < 0 : te > m;
			(v = Math.max(te, 0)), k === 'finished' && f === null && (v = m);
			let lt = v,
				Rt = M;
			if (s) {
				const Lr = v / w;
				let Dt = Math.floor(Lr),
					Ve = Lr % 1;
				!Ve && Lr >= 1 && (Ve = 1), Ve === 1 && Dt--, (Dt = Math.min(Dt, s + 1));
				const po = !!(Dt % 2);
				po && (a === 'reverse' ? ((Ve = 1 - Ve), i && (Ve -= i / w)) : a === 'mirror' && (Rt = L));
				let ho = Me(0, 1, Ve);
				v > m && (ho = a === 'reverse' && po ? 1 : 0), (lt = ho * w);
			}
			const ut = _ ? { done: !1, value: n[0] } : Rt.next(lt);
			C && (ut.value = C(ut.value));
			let { done: fo } = ut;
			!_ && y !== null && (fo = h >= 0 ? v >= m : v <= 0);
			const Rl = f === null && (k === 'finished' || (k === 'running' && fo));
			return d && d(ut.value), Rl && N(), ut;
		},
		D = () => {
			x && x.stop(), (x = void 0);
		},
		O = () => {
			(k = 'idle'), D(), P(), A(), (E = R = null);
		},
		N = () => {
			(k = 'finished'), c && c(), D(), P();
		},
		j = () => {
			if (g) return;
			x || (x = r(S));
			const F = x.now();
			l && l(),
				f !== null ? (E = F - f) : (!E || k === 'finished') && (E = F),
				k === 'finished' && A(),
				(R = E),
				(f = null),
				(k = 'running'),
				x.start();
		};
	e && j();
	const oe = {
		then(F, te) {
			return $.then(F, te);
		},
		get time() {
			return be(v);
		},
		set time(F) {
			(F = Ce(F)), (v = F), f !== null || !x || h === 0 ? (f = F) : (E = x.now() - F / h);
		},
		get duration() {
			const F = M.calculatedDuration === null ? pi(M) : M.calculatedDuration;
			return be(F);
		},
		get speed() {
			return h;
		},
		set speed(F) {
			F === h || !x || ((h = F), (oe.time = be(v)));
		},
		get state() {
			return k;
		},
		play: j,
		pause: () => {
			(k = 'paused'), (f = v);
		},
		stop: () => {
			(g = !0), k !== 'idle' && ((k = 'idle'), u && u(), O());
		},
		cancel: () => {
			R !== null && S(R), O();
		},
		complete: () => {
			k = 'finished';
		},
		sample: (F) => ((E = 0), S(F)),
	};
	return oe;
}
function yp(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
const bp = yp(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
	xp = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
	_t = 10,
	Pp = 2e4,
	Tp = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !Oa(t.ease);
function $p(e, t, { onUpdate: r, onComplete: n, ...o }) {
	if (
		!(
			bp() &&
			xp.has(t) &&
			!o.repeatDelay &&
			o.repeatType !== 'mirror' &&
			o.damping !== 0 &&
			o.type !== 'inertia'
		)
	)
		return !1;
	let i = !1,
		a,
		l;
	const u = () => {
		l = new Promise((x) => {
			a = x;
		});
	};
	u();
	let { keyframes: c, duration: d = 300, ease: p, times: h } = o;
	if (Tp(t, o)) {
		const x = mr({ ...o, repeat: 0, delay: 0 });
		let T = { done: !1, value: c[0] };
		const C = [];
		let M = 0;
		for (; !T.done && M < Pp; ) (T = x.sample(M)), C.push(T.value), (M += _t);
		(h = void 0), (c = C), (d = M - _t), (p = 'linear');
	}
	const g = Rd(e.owner.current, t, c, { ...o, duration: d, ease: p, times: h });
	o.syncStart &&
		(g.startTime = q.isProcessing
			? q.timestamp
			: document.timeline
			? document.timeline.currentTime
			: performance.now());
	const P = () => g.cancel(),
		$ = () => {
			K.update(P), a(), u();
		};
	return (
		(g.onfinish = () => {
			e.set(Dd(c, o)), n && n(), $();
		}),
		{
			then(x, T) {
				return l.then(x, T);
			},
			attachTimeline(x) {
				return (g.timeline = x), (g.onfinish = null), z;
			},
			get time() {
				return be(g.currentTime || 0);
			},
			set time(x) {
				g.currentTime = Ce(x);
			},
			get speed() {
				return g.playbackRate;
			},
			set speed(x) {
				g.playbackRate = x;
			},
			get duration() {
				return be(d);
			},
			play: () => {
				i || (g.play(), Pe(P));
			},
			pause: () => g.pause(),
			stop: () => {
				if (((i = !0), g.playState === 'idle')) return;
				const { currentTime: x } = g;
				if (x) {
					const T = mr({ ...o, autoplay: !1 });
					e.setWithVelocity(T.sample(x - _t).value, T.sample(x).value, _t);
				}
				$();
			},
			complete: () => g.finish(),
			cancel: $,
		}
	);
}
function wp({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
	const o = () => (
		r && r(e[e.length - 1]),
		n && n(),
		{
			time: 0,
			speed: 1,
			duration: 0,
			play: z,
			pause: z,
			stop: z,
			then: (s) => (s(), Promise.resolve()),
			cancel: z,
			complete: z,
		}
	);
	return t ? mr({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o }) : o();
}
const Ep = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
	Sp = (e) => ({
		type: 'spring',
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	Cp = { type: 'keyframes', duration: 0.8 },
	Ap = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	Mp = (e, { keyframes: t }) =>
		t.length > 2 ? Cp : We.has(e) ? (e.startsWith('scale') ? Sp(t[1]) : Ep) : Ap,
	Pn = (e, t) =>
		e === 'zIndex'
			? !1
			: !!(
					typeof t == 'number' ||
					Array.isArray(t) ||
					(typeof t == 'string' && (Le.test(t) || t === '0') && !t.startsWith('url('))
			  ),
	Lp = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function kp(e) {
	const [t, r] = e.slice(0, -1).split('(');
	if (t === 'drop-shadow') return e;
	const [n] = r.match(Cr) || [];
	if (!n) return e;
	const o = r.replace(n, '');
	let s = Lp.has(t) ? 1 : 0;
	return n !== r && (s *= 100), t + '(' + s + o + ')';
}
const Vp = /([a-z-]*)\(.*?\)/g,
	Tn = {
		...Le,
		getAnimatableNone: (e) => {
			const t = e.match(Vp);
			return t ? t.map(kp).join(' ') : e;
		},
	},
	Rp = {
		...xa,
		color: ee,
		backgroundColor: ee,
		outlineColor: ee,
		fill: ee,
		stroke: ee,
		borderColor: ee,
		borderTopColor: ee,
		borderRightColor: ee,
		borderBottomColor: ee,
		borderLeftColor: ee,
		filter: Tn,
		WebkitFilter: Tn,
	},
	so = (e) => Rp[e];
function al(e, t) {
	let r = so(e);
	return r !== Tn && (r = Le), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const ll = (e) => /^0[^.\s]+$/.test(e);
function Dp(e) {
	if (typeof e == 'number') return e === 0;
	if (e !== null) return e === 'none' || e === '0' || ll(e);
}
function Fp(e, t, r, n) {
	const o = Pn(t, r);
	let s;
	Array.isArray(r) ? (s = [...r]) : (s = [null, r]);
	const i = n.from !== void 0 ? n.from : e.get();
	let a;
	const l = [];
	for (let u = 0; u < s.length; u++)
		s[u] === null && (s[u] = u === 0 ? i : s[u - 1]),
			Dp(s[u]) && l.push(u),
			typeof s[u] == 'string' && s[u] !== 'none' && s[u] !== '0' && (a = s[u]);
	if (o && l.length && a)
		for (let u = 0; u < l.length; u++) {
			const c = l[u];
			s[c] = al(t, a);
		}
	return s;
}
function Ip({
	when: e,
	delay: t,
	delayChildren: r,
	staggerChildren: n,
	staggerDirection: o,
	repeat: s,
	repeatType: i,
	repeatDelay: a,
	from: l,
	elapsed: u,
	...c
}) {
	return !!Object.keys(c).length;
}
function ul(e, t) {
	return e[t] || e.default || e;
}
const ao =
	(e, t, r, n = {}) =>
	(o) => {
		const s = ul(n, e) || {},
			i = s.delay || n.delay || 0;
		let { elapsed: a = 0 } = n;
		a = a - Ce(i);
		const l = Fp(t, e, r, s),
			u = l[0],
			c = l[l.length - 1],
			d = Pn(e, u),
			p = Pn(e, c);
		let h = {
			keyframes: l,
			velocity: t.getVelocity(),
			ease: 'easeOut',
			...s,
			delay: -a,
			onUpdate: (g) => {
				t.set(g), s.onUpdate && s.onUpdate(g);
			},
			onComplete: () => {
				o(), s.onComplete && s.onComplete();
			},
		};
		if (
			(Ip(s) || (h = { ...h, ...Mp(e, h) }),
			h.duration && (h.duration = Ce(h.duration)),
			h.repeatDelay && (h.repeatDelay = Ce(h.repeatDelay)),
			!d || !p || Vd.current || s.type === !1)
		)
			return wp(h);
		if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
			const g = $p(t, e, h);
			if (g) return g;
		}
		return mr(h);
	};
function gr(e) {
	return !!(re(e) && e.add);
}
const cl = (e) => /^\-?\d*\.?\d+$/.test(e);
function lo(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function uo(e, t) {
	const r = e.indexOf(t);
	r > -1 && e.splice(r, 1);
}
class co {
	constructor() {
		this.subscriptions = [];
	}
	add(t) {
		return lo(this.subscriptions, t), () => uo(this.subscriptions, t);
	}
	notify(t, r, n) {
		const o = this.subscriptions.length;
		if (o)
			if (o === 1) this.subscriptions[0](t, r, n);
			else
				for (let s = 0; s < o; s++) {
					const i = this.subscriptions[s];
					i && i(t, r, n);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const Op = (e) => !isNaN(parseFloat(e));
class Np {
	constructor(t, r = {}) {
		(this.version = '10.16.4'),
			(this.timeDelta = 0),
			(this.lastUpdated = 0),
			(this.canTrackVelocity = !1),
			(this.events = {}),
			(this.updateAndNotify = (n, o = !0) => {
				(this.prev = this.current), (this.current = n);
				const { delta: s, timestamp: i } = q;
				this.lastUpdated !== i &&
					((this.timeDelta = s), (this.lastUpdated = i), K.postRender(this.scheduleVelocityCheck)),
					this.prev !== this.current &&
						this.events.change &&
						this.events.change.notify(this.current),
					this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
					o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
			}),
			(this.scheduleVelocityCheck = () => K.postRender(this.velocityCheck)),
			(this.velocityCheck = ({ timestamp: n }) => {
				n !== this.lastUpdated &&
					((this.prev = this.current),
					this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
			}),
			(this.hasAnimated = !1),
			(this.prev = this.current = t),
			(this.canTrackVelocity = Op(this.current)),
			(this.owner = r.owner);
	}
	onChange(t) {
		return this.on('change', t);
	}
	on(t, r) {
		this.events[t] || (this.events[t] = new co());
		const n = this.events[t].add(r);
		return t === 'change'
			? () => {
					n(),
						K.read(() => {
							this.events.change.getSize() || this.stop();
						});
			  }
			: n;
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear();
	}
	attach(t, r) {
		(this.passiveEffect = t), (this.stopPassiveEffect = r);
	}
	set(t, r = !0) {
		!r || !this.passiveEffect
			? this.updateAndNotify(t, r)
			: this.passiveEffect(t, this.updateAndNotify);
	}
	setWithVelocity(t, r, n) {
		this.set(r), (this.prev = t), (this.timeDelta = n);
	}
	jump(t) {
		this.updateAndNotify(t),
			(this.prev = t),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
	get() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		return this.canTrackVelocity
			? ol(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
			: 0;
	}
	start(t) {
		return (
			this.stop(),
			new Promise((r) => {
				(this.hasAnimated = !0),
					(this.animation = t(r)),
					this.events.animationStart && this.events.animationStart.notify();
			}).then(() => {
				this.events.animationComplete && this.events.animationComplete.notify(),
					this.clearAnimation();
			})
		);
	}
	stop() {
		this.animation &&
			(this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
			this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
}
function st(e, t) {
	return new Np(e, t);
}
const fl = (e) => (t) => t.test(e),
	Bp = { test: (e) => e === 'auto', parse: (e) => e },
	dl = [ze, V, fe, $e, zf, Wf, Bp],
	ht = (e) => dl.find(fl(e)),
	jp = [...dl, ee, Le],
	Kp = (e) => jp.find(fl(e));
function Up(e, t, r) {
	e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, st(r));
}
function Hp(e, t) {
	const r = Mr(e, t);
	let { transitionEnd: n = {}, transition: o = {}, ...s } = r ? e.makeTargetAnimatable(r, !1) : {};
	s = { ...s, ...n };
	for (const i in s) {
		const a = id(s[i]);
		Up(e, i, a);
	}
}
function Wp(e, t, r) {
	var n, o;
	const s = Object.keys(t).filter((a) => !e.hasValue(a)),
		i = s.length;
	if (i)
		for (let a = 0; a < i; a++) {
			const l = s[a],
				u = t[l];
			let c = null;
			Array.isArray(u) && (c = u[0]),
				c === null &&
					(c =
						(o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0
							? o
							: t[l]),
				c != null &&
					(typeof c == 'string' && (cl(c) || ll(c))
						? (c = parseFloat(c))
						: !Kp(c) && Le.test(u) && (c = al(l, u)),
					e.addValue(l, st(c, { owner: e })),
					r[l] === void 0 && (r[l] = c),
					c !== null && e.setBaseTarget(l, c));
		}
}
function zp(e, t) {
	return t ? (t[e] || t.default || t).from : void 0;
}
function Gp(e, t, r) {
	const n = {};
	for (const o in e) {
		const s = zp(o, t);
		if (s !== void 0) n[o] = s;
		else {
			const i = r.getValue(o);
			i && (n[o] = i.get());
		}
	}
	return n;
}
function _p({ protectedKeys: e, needsAnimating: t }, r) {
	const n = e.hasOwnProperty(r) && t[r] !== !0;
	return (t[r] = !1), n;
}
function pl(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
	let {
		transition: s = e.getDefaultTransition(),
		transitionEnd: i,
		...a
	} = e.makeTargetAnimatable(t);
	const l = e.getValue('willChange');
	n && (s = n);
	const u = [],
		c = o && e.animationState && e.animationState.getState()[o];
	for (const d in a) {
		const p = e.getValue(d),
			h = a[d];
		if (!p || h === void 0 || (c && _p(c, d))) continue;
		const g = { delay: r, elapsed: 0, ...s };
		if (window.HandoffAppearAnimations && !p.hasAnimated) {
			const $ = e.getProps()[Ld];
			$ && ((g.elapsed = window.HandoffAppearAnimations($, d, p, K)), (g.syncStart = !0));
		}
		p.start(ao(d, p, h, e.shouldReduceMotion && We.has(d) ? { type: !1 } : g));
		const P = p.animation;
		gr(l) && (l.add(d), P.then(() => l.remove(d))), u.push(P);
	}
	return (
		i &&
			Promise.all(u).then(() => {
				i && Hp(e, i);
			}),
		u
	);
}
function $n(e, t, r = {}) {
	const n = Mr(e, t, r.custom);
	let { transition: o = e.getDefaultTransition() || {} } = n || {};
	r.transitionOverride && (o = r.transitionOverride);
	const s = n ? () => Promise.all(pl(e, n, r)) : () => Promise.resolve(),
		i =
			e.variantChildren && e.variantChildren.size
				? (l = 0) => {
						const { delayChildren: u = 0, staggerChildren: c, staggerDirection: d } = o;
						return Xp(e, t, u + l, c, d, r);
				  }
				: () => Promise.resolve(),
		{ when: a } = o;
	if (a) {
		const [l, u] = a === 'beforeChildren' ? [s, i] : [i, s];
		return l().then(() => u());
	} else return Promise.all([s(), i(r.delay)]);
}
function Xp(e, t, r = 0, n = 0, o = 1, s) {
	const i = [],
		a = (e.variantChildren.size - 1) * n,
		l = o === 1 ? (u = 0) => u * n : (u = 0) => a - u * n;
	return (
		Array.from(e.variantChildren)
			.sort(Yp)
			.forEach((u, c) => {
				u.notify('AnimationStart', t),
					i.push($n(u, t, { ...s, delay: r + l(c) }).then(() => u.notify('AnimationComplete', t)));
			}),
		Promise.all(i)
	);
}
function Yp(e, t) {
	return e.sortNodePosition(t);
}
function qp(e, t, r = {}) {
	e.notify('AnimationStart', t);
	let n;
	if (Array.isArray(t)) {
		const o = t.map((s) => $n(e, s, r));
		n = Promise.all(o);
	} else if (typeof t == 'string') n = $n(e, t, r);
	else {
		const o = typeof t == 'function' ? Mr(e, t, r.custom) : t;
		n = Promise.all(pl(e, o, r));
	}
	return n.then(() => e.notify('AnimationComplete', t));
}
const Zp = [...zn].reverse(),
	Jp = zn.length;
function Qp(e) {
	return (t) => Promise.all(t.map(({ animation: r, options: n }) => qp(e, r, n)));
}
function eh(e) {
	let t = Qp(e);
	const r = rh();
	let n = !0;
	const o = (l, u) => {
		const c = Mr(e, u);
		if (c) {
			const { transition: d, transitionEnd: p, ...h } = c;
			l = { ...l, ...h, ...p };
		}
		return l;
	};
	function s(l) {
		t = l(e);
	}
	function i(l, u) {
		const c = e.getProps(),
			d = e.getVariantContext(!0) || {},
			p = [],
			h = new Set();
		let g = {},
			P = 1 / 0;
		for (let A = 0; A < Jp; A++) {
			const x = Zp[A],
				T = r[x],
				C = c[x] !== void 0 ? c[x] : d[x],
				M = Et(C),
				L = x === u ? T.isActive : null;
			L === !1 && (P = A);
			let k = C === d[x] && C !== c[x] && M;
			if (
				(k && n && e.manuallyAnimateOnMount && (k = !1),
				(T.protectedKeys = { ...g }),
				(!T.isActive && L === null) || (!C && !T.prevProp) || Er(C) || typeof C == 'boolean')
			)
				continue;
			const f = th(T.prevProp, C);
			let E = f || (x === u && T.isActive && !k && M) || (A > P && M);
			const R = Array.isArray(C) ? C : [C];
			let y = R.reduce(o, {});
			L === !1 && (y = {});
			const { prevResolvedValues: w = {} } = T,
				m = { ...w, ...y },
				v = (S) => {
					(E = !0), h.delete(S), (T.needsAnimating[S] = !0);
				};
			for (const S in m) {
				const D = y[S],
					O = w[S];
				g.hasOwnProperty(S) ||
					(D !== O
						? dr(D) && dr(O)
							? !Fa(D, O) || f
								? v(S)
								: (T.protectedKeys[S] = !0)
							: D !== void 0
							? v(S)
							: h.add(S)
						: D !== void 0 && h.has(S)
						? v(S)
						: (T.protectedKeys[S] = !0));
			}
			(T.prevProp = C),
				(T.prevResolvedValues = y),
				T.isActive && (g = { ...g, ...y }),
				n && e.blockInitialAnimation && (E = !1),
				E && !k && p.push(...R.map((S) => ({ animation: S, options: { type: x, ...l } })));
		}
		if (h.size) {
			const A = {};
			h.forEach((x) => {
				const T = e.getBaseTarget(x);
				T !== void 0 && (A[x] = T);
			}),
				p.push({ animation: A });
		}
		let $ = !!p.length;
		return (
			n && c.initial === !1 && !e.manuallyAnimateOnMount && ($ = !1),
			(n = !1),
			$ ? t(p) : Promise.resolve()
		);
	}
	function a(l, u, c) {
		var d;
		if (r[l].isActive === u) return Promise.resolve();
		(d = e.variantChildren) === null ||
			d === void 0 ||
			d.forEach((h) => {
				var g;
				return (g = h.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
			}),
			(r[l].isActive = u);
		const p = i(c, l);
		for (const h in r) r[h].protectedKeys = {};
		return p;
	}
	return { animateChanges: i, setActive: a, setAnimateFunction: s, getState: () => r };
}
function th(e, t) {
	return typeof t == 'string' ? t !== e : Array.isArray(t) ? !Fa(t, e) : !1;
}
function De(e = !1) {
	return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function rh() {
	return {
		animate: De(!0),
		whileInView: De(),
		whileHover: De(),
		whileTap: De(),
		whileDrag: De(),
		whileFocus: De(),
		exit: De(),
	};
}
class nh extends ke {
	constructor(t) {
		super(t), t.animationState || (t.animationState = eh(t));
	}
	updateAnimationControlsSubscription() {
		const { animate: t } = this.node.getProps();
		this.unmount(), Er(t) && (this.unmount = t.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate: t } = this.node.getProps(),
			{ animate: r } = this.node.prevProps || {};
		t !== r && this.updateAnimationControlsSubscription();
	}
	unmount() {}
}
let oh = 0;
class ih extends ke {
	constructor() {
		super(...arguments), (this.id = oh++);
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext,
			{ isPresent: o } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === o) return;
		const s = this.node.animationState.setActive('exit', !t, {
			custom: n ?? this.node.getProps().custom,
		});
		r && !t && s.then(() => r(this.id));
	}
	mount() {
		const { register: t } = this.node.presenceContext || {};
		t && (this.unmount = t(this.id));
	}
	unmount() {}
}
const sh = { animation: { Feature: nh }, exit: { Feature: ih } },
	hi = (e, t) => Math.abs(e - t);
function ah(e, t) {
	const r = hi(e.x, t.x),
		n = hi(e.y, t.y);
	return Math.sqrt(r ** 2 + n ** 2);
}
class hl {
	constructor(t, r, { transformPagePoint: n } = {}) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const u = Zr(this.lastMoveEventInfo, this.history),
					c = this.startEvent !== null,
					d = ah(u.offset, { x: 0, y: 0 }) >= 3;
				if (!c && !d) return;
				const { point: p } = u,
					{ timestamp: h } = q;
				this.history.push({ ...p, timestamp: h });
				const { onStart: g, onMove: P } = this.handlers;
				c || (g && g(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)),
					P && P(this.lastMoveEvent, u);
			}),
			(this.handlePointerMove = (u, c) => {
				(this.lastMoveEvent = u),
					(this.lastMoveEventInfo = qr(c, this.transformPagePoint)),
					K.update(this.updatePoint, !0);
			}),
			(this.handlePointerUp = (u, c) => {
				if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
				const { onEnd: d, onSessionEnd: p } = this.handlers,
					h = Zr(
						u.type === 'pointercancel' ? this.lastMoveEventInfo : qr(c, this.transformPagePoint),
						this.history
					);
				this.startEvent && d && d(u, h), p && p(u, h);
			}),
			!La(t))
		)
			return;
		(this.handlers = r), (this.transformPagePoint = n);
		const o = Ar(t),
			s = qr(o, this.transformPagePoint),
			{ point: i } = s,
			{ timestamp: a } = q;
		this.history = [{ ...i, timestamp: a }];
		const { onSessionStart: l } = r;
		l && l(t, Zr(s, this.history)),
			(this.removeListeners = Se(
				ye(window, 'pointermove', this.handlePointerMove),
				ye(window, 'pointerup', this.handlePointerUp),
				ye(window, 'pointercancel', this.handlePointerUp)
			));
	}
	updateHandlers(t) {
		this.handlers = t;
	}
	end() {
		this.removeListeners && this.removeListeners(), Pe(this.updatePoint);
	}
}
function qr(e, t) {
	return t ? { point: t(e.point) } : e;
}
function mi(e, t) {
	return { x: e.x - t.x, y: e.y - t.y };
}
function Zr({ point: e }, t) {
	return { point: e, delta: mi(e, ml(t)), offset: mi(e, lh(t)), velocity: uh(t, 0.1) };
}
function lh(e) {
	return e[0];
}
function ml(e) {
	return e[e.length - 1];
}
function uh(e, t) {
	if (e.length < 2) return { x: 0, y: 0 };
	let r = e.length - 1,
		n = null;
	const o = ml(e);
	for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > Ce(t))); ) r--;
	if (!n) return { x: 0, y: 0 };
	const s = be(o.timestamp - n.timestamp);
	if (s === 0) return { x: 0, y: 0 };
	const i = { x: (o.x - n.x) / s, y: (o.y - n.y) / s };
	return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function ne(e) {
	return e.max - e.min;
}
function wn(e, t = 0, r = 0.01) {
	return Math.abs(e - t) <= r;
}
function gi(e, t, r, n = 0.5) {
	(e.origin = n),
		(e.originPoint = W(t.min, t.max, e.origin)),
		(e.scale = ne(r) / ne(t)),
		(wn(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
		(e.translate = W(r.min, r.max, e.origin) - e.originPoint),
		(wn(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Pt(e, t, r, n) {
	gi(e.x, t.x, r.x, n ? n.originX : void 0), gi(e.y, t.y, r.y, n ? n.originY : void 0);
}
function vi(e, t, r) {
	(e.min = r.min + t.min), (e.max = e.min + ne(t));
}
function ch(e, t, r) {
	vi(e.x, t.x, r.x), vi(e.y, t.y, r.y);
}
function yi(e, t, r) {
	(e.min = t.min - r.min), (e.max = e.min + ne(t));
}
function Tt(e, t, r) {
	yi(e.x, t.x, r.x), yi(e.y, t.y, r.y);
}
function fh(e, { min: t, max: r }, n) {
	return (
		t !== void 0 && e < t
			? (e = n ? W(t, e, n.min) : Math.max(e, t))
			: r !== void 0 && e > r && (e = n ? W(r, e, n.max) : Math.min(e, r)),
		e
	);
}
function bi(e, t, r) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
	};
}
function dh(e, { top: t, left: r, bottom: n, right: o }) {
	return { x: bi(e.x, r, o), y: bi(e.y, t, n) };
}
function xi(e, t) {
	let r = t.min - e.min,
		n = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function ph(e, t) {
	return { x: xi(e.x, t.x), y: xi(e.y, t.y) };
}
function hh(e, t) {
	let r = 0.5;
	const n = ne(e),
		o = ne(t);
	return (
		o > n ? (r = Ct(t.min, t.max - n, e.min)) : n > o && (r = Ct(e.min, e.max - o, t.min)),
		Me(0, 1, r)
	);
}
function mh(e, t) {
	const r = {};
	return (
		t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r
	);
}
const En = 0.35;
function gh(e = En) {
	return (
		e === !1 ? (e = 0) : e === !0 && (e = En),
		{ x: Pi(e, 'left', 'right'), y: Pi(e, 'top', 'bottom') }
	);
}
function Pi(e, t, r) {
	return { min: Ti(e, t), max: Ti(e, r) };
}
function Ti(e, t) {
	return typeof e == 'number' ? e : e[t] || 0;
}
const $i = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	nt = () => ({ x: $i(), y: $i() }),
	wi = () => ({ min: 0, max: 0 }),
	X = () => ({ x: wi(), y: wi() });
function ce(e) {
	return [e('x'), e('y')];
}
function gl({ top: e, left: t, right: r, bottom: n }) {
	return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function vh({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function yh(e, t) {
	if (!t) return e;
	const r = t({ x: e.left, y: e.top }),
		n = t({ x: e.right, y: e.bottom });
	return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function Jr(e) {
	return e === void 0 || e === 1;
}
function Sn({ scale: e, scaleX: t, scaleY: r }) {
	return !Jr(e) || !Jr(t) || !Jr(r);
}
function Fe(e) {
	return Sn(e) || vl(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function vl(e) {
	return Ei(e.x) || Ei(e.y);
}
function Ei(e) {
	return e && e !== '0%';
}
function vr(e, t, r) {
	const n = e - r,
		o = t * n;
	return r + o;
}
function Si(e, t, r, n, o) {
	return o !== void 0 && (e = vr(e, o, n)), vr(e, r, n) + t;
}
function Cn(e, t = 0, r = 1, n, o) {
	(e.min = Si(e.min, t, r, n, o)), (e.max = Si(e.max, t, r, n, o));
}
function yl(e, { x: t, y: r }) {
	Cn(e.x, t.translate, t.scale, t.originPoint), Cn(e.y, r.translate, r.scale, r.originPoint);
}
function bh(e, t, r, n = !1) {
	const o = r.length;
	if (!o) return;
	t.x = t.y = 1;
	let s, i;
	for (let a = 0; a < o; a++) {
		(s = r[a]), (i = s.projectionDelta);
		const l = s.instance;
		(l && l.style && l.style.display === 'contents') ||
			(n &&
				s.options.layoutScroll &&
				s.scroll &&
				s !== s.root &&
				ot(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
			i && ((t.x *= i.x.scale), (t.y *= i.y.scale), yl(e, i)),
			n && Fe(s.latestValues) && ot(e, s.latestValues));
	}
	(t.x = Ci(t.x)), (t.y = Ci(t.y));
}
function Ci(e) {
	return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function we(e, t) {
	(e.min = e.min + t), (e.max = e.max + t);
}
function Ai(e, t, [r, n, o]) {
	const s = t[o] !== void 0 ? t[o] : 0.5,
		i = W(e.min, e.max, s);
	Cn(e, t[r], t[n], i, t.scale);
}
const xh = ['x', 'scaleX', 'originX'],
	Ph = ['y', 'scaleY', 'originY'];
function ot(e, t) {
	Ai(e.x, t, xh), Ai(e.y, t, Ph);
}
function bl(e, t) {
	return gl(yh(e.getBoundingClientRect(), t));
}
function Th(e, t, r) {
	const n = bl(e, r),
		{ scroll: o } = t;
	return o && (we(n.x, o.offset.x), we(n.y, o.offset.y)), n;
}
const $h = new WeakMap();
class wh {
	constructor(t) {
		(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = X()),
			(this.visualElement = t);
	}
	start(t, { snapToCursor: r = !1 } = {}) {
		const { presenceContext: n } = this.visualElement;
		if (n && n.isPresent === !1) return;
		const o = (l) => {
				this.stopAnimation(), r && this.snapToCursor(Ar(l, 'page').point);
			},
			s = (l, u) => {
				const { drag: c, dragPropagation: d, onDragStart: p } = this.getProps();
				if (
					c &&
					!d &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = Va(c)),
					!this.openGlobalLock)
				)
					return;
				(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0),
						(this.visualElement.projection.target = void 0)),
					ce((g) => {
						let P = this.getAxisMotionValue(g).get() || 0;
						if (fe.test(P)) {
							const { projection: $ } = this.visualElement;
							if ($ && $.layout) {
								const A = $.layout.layoutBox[g];
								A && (P = ne(A) * (parseFloat(P) / 100));
							}
						}
						this.originPoint[g] = P;
					}),
					p && K.update(() => p(l, u), !1, !0);
				const { animationState: h } = this.visualElement;
				h && h.setActive('whileDrag', !0);
			},
			i = (l, u) => {
				const {
					dragPropagation: c,
					dragDirectionLock: d,
					onDirectionLock: p,
					onDrag: h,
				} = this.getProps();
				if (!c && !this.openGlobalLock) return;
				const { offset: g } = u;
				if (d && this.currentDirection === null) {
					(this.currentDirection = Eh(g)),
						this.currentDirection !== null && p && p(this.currentDirection);
					return;
				}
				this.updateAxis('x', u.point, g),
					this.updateAxis('y', u.point, g),
					this.visualElement.render(),
					h && h(l, u);
			},
			a = (l, u) => this.stop(l, u);
		this.panSession = new hl(
			t,
			{ onSessionStart: o, onStart: s, onMove: i, onSessionEnd: a },
			{ transformPagePoint: this.visualElement.getTransformPagePoint() }
		);
	}
	stop(t, r) {
		const n = this.isDragging;
		if ((this.cancel(), !n)) return;
		const { velocity: o } = r;
		this.startAnimation(o);
		const { onDragEnd: s } = this.getProps();
		s && K.update(() => s(t, r));
	}
	cancel() {
		this.isDragging = !1;
		const { projection: t, animationState: r } = this.visualElement;
		t && (t.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0);
		const { dragPropagation: n } = this.getProps();
		!n && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
			r && r.setActive('whileDrag', !1);
	}
	updateAxis(t, r, n) {
		const { drag: o } = this.getProps();
		if (!n || !Xt(t, o, this.currentDirection)) return;
		const s = this.getAxisMotionValue(t);
		let i = this.originPoint[t] + n[t];
		this.constraints && this.constraints[t] && (i = fh(i, this.constraints[t], this.elastic[t])),
			s.set(i);
	}
	resolveConstraints() {
		const { dragConstraints: t, dragElastic: r } = this.getProps(),
			{ layout: n } = this.visualElement.projection || {},
			o = this.constraints;
		t && tt(t)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: t && n
			? (this.constraints = dh(n.layoutBox, t))
			: (this.constraints = !1),
			(this.elastic = gh(r)),
			o !== this.constraints &&
				n &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				ce((s) => {
					this.getAxisMotionValue(s) &&
						(this.constraints[s] = mh(n.layoutBox[s], this.constraints[s]));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
		if (!t || !tt(t)) return !1;
		const n = t.current,
			{ projection: o } = this.visualElement;
		if (!o || !o.layout) return !1;
		const s = Th(n, o.root, this.visualElement.getTransformPagePoint());
		let i = ph(o.layout.layoutBox, s);
		if (r) {
			const a = r(vh(i));
			(this.hasMutatedConstraints = !!a), a && (i = gl(a));
		}
		return i;
	}
	startAnimation(t) {
		const {
				drag: r,
				dragMomentum: n,
				dragElastic: o,
				dragTransition: s,
				dragSnapToOrigin: i,
				onDragTransitionEnd: a,
			} = this.getProps(),
			l = this.constraints || {},
			u = ce((c) => {
				if (!Xt(c, r, this.currentDirection)) return;
				let d = (l && l[c]) || {};
				i && (d = { min: 0, max: 0 });
				const p = o ? 200 : 1e6,
					h = o ? 40 : 1e7,
					g = {
						type: 'inertia',
						velocity: n ? t[c] : 0,
						bounceStiffness: p,
						bounceDamping: h,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...s,
						...d,
					};
				return this.startAxisValueAnimation(c, g);
			});
		return Promise.all(u).then(a);
	}
	startAxisValueAnimation(t, r) {
		const n = this.getAxisMotionValue(t);
		return n.start(ao(t, n, 0, r));
	}
	stopAnimation() {
		ce((t) => this.getAxisMotionValue(t).stop());
	}
	getAxisMotionValue(t) {
		const r = '_drag' + t.toUpperCase(),
			n = this.visualElement.getProps(),
			o = n[r];
		return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
	}
	snapToCursor(t) {
		ce((r) => {
			const { drag: n } = this.getProps();
			if (!Xt(r, n, this.currentDirection)) return;
			const { projection: o } = this.visualElement,
				s = this.getAxisMotionValue(r);
			if (o && o.layout) {
				const { min: i, max: a } = o.layout.layoutBox[r];
				s.set(t[r] - W(i, a, 0.5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: t, dragConstraints: r } = this.getProps(),
			{ projection: n } = this.visualElement;
		if (!tt(r) || !n || !this.constraints) return;
		this.stopAnimation();
		const o = { x: 0, y: 0 };
		ce((i) => {
			const a = this.getAxisMotionValue(i);
			if (a) {
				const l = a.get();
				o[i] = hh({ min: l, max: l }, this.constraints[i]);
			}
		});
		const { transformTemplate: s } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = s ? s({}, '') : 'none'),
			n.root && n.root.updateScroll(),
			n.updateLayout(),
			this.resolveConstraints(),
			ce((i) => {
				if (!Xt(i, t, null)) return;
				const a = this.getAxisMotionValue(i),
					{ min: l, max: u } = this.constraints[i];
				a.set(W(l, u, o[i]));
			});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		$h.set(this.visualElement, this);
		const t = this.visualElement.current,
			r = ye(t, 'pointerdown', (l) => {
				const { drag: u, dragListener: c = !0 } = this.getProps();
				u && c && this.start(l);
			}),
			n = () => {
				const { dragConstraints: l } = this.getProps();
				tt(l) && (this.constraints = this.resolveRefConstraints());
			},
			{ projection: o } = this.visualElement,
			s = o.addEventListener('measure', n);
		o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
		const i = ve(window, 'resize', () => this.scalePositionWithinConstraints()),
			a = o.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
				this.isDragging &&
					u &&
					(ce((c) => {
						const d = this.getAxisMotionValue(c);
						d && ((this.originPoint[c] += l[c].translate), d.set(d.get() + l[c].translate));
					}),
					this.visualElement.render());
			});
		return () => {
			i(), r(), s(), a && a();
		};
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: r = !1,
				dragDirectionLock: n = !1,
				dragPropagation: o = !1,
				dragConstraints: s = !1,
				dragElastic: i = En,
				dragMomentum: a = !0,
			} = t;
		return {
			...t,
			drag: r,
			dragDirectionLock: n,
			dragPropagation: o,
			dragConstraints: s,
			dragElastic: i,
			dragMomentum: a,
		};
	}
}
function Xt(e, t, r) {
	return (t === !0 || t === e) && (r === null || r === e);
}
function Eh(e, t = 10) {
	let r = null;
	return Math.abs(e.y) > t ? (r = 'y') : Math.abs(e.x) > t && (r = 'x'), r;
}
class Sh extends ke {
	constructor(t) {
		super(t),
			(this.removeGroupControls = z),
			(this.removeListeners = z),
			(this.controls = new wh(t));
	}
	mount() {
		const { dragControls: t } = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || z);
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}
const Mi = (e) => (t, r) => {
	e && K.update(() => e(t, r));
};
class Ch extends ke {
	constructor() {
		super(...arguments), (this.removePointerDownListener = z);
	}
	onPointerDown(t) {
		this.session = new hl(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
		});
	}
	createPanHandlers() {
		const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
		return {
			onSessionStart: Mi(t),
			onStart: Mi(r),
			onMove: n,
			onEnd: (s, i) => {
				delete this.session, o && K.update(() => o(s, i));
			},
		};
	}
	mount() {
		this.removePointerDownListener = ye(this.node.current, 'pointerdown', (t) =>
			this.onPointerDown(t)
		);
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}
function Ah() {
	const e = b.useContext($r);
	if (e === null) return [!0, null];
	const { isPresent: t, onExitComplete: r, register: n } = e,
		o = b.useId();
	return b.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
const Qt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Li(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const mt = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == 'string')
				if (V.test(e)) e = parseFloat(e);
				else return e;
			const r = Li(e, t.target.x),
				n = Li(e, t.target.y);
			return `${r}% ${n}%`;
		},
	},
	Mh = {
		correct: (e, { treeScale: t, projectionDelta: r }) => {
			const n = e,
				o = Le.parse(e);
			if (o.length > 5) return n;
			const s = Le.createTransformer(e),
				i = typeof o[0] != 'number' ? 1 : 0,
				a = r.x.scale * t.x,
				l = r.y.scale * t.y;
			(o[0 + i] /= a), (o[1 + i] /= l);
			const u = W(a, l, 0.5);
			return (
				typeof o[2 + i] == 'number' && (o[2 + i] /= u),
				typeof o[3 + i] == 'number' && (o[3 + i] /= u),
				s(o)
			);
		},
	};
class Lh extends B.Component {
	componentDidMount() {
		const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props,
			{ projection: s } = t;
		Of(kh),
			s &&
				(r.group && r.group.add(s),
				n && n.register && o && n.register(s),
				s.root.didUpdate(),
				s.addEventListener('animationComplete', () => {
					this.safeToRemove();
				}),
				s.setOptions({ ...s.options, onExitComplete: () => this.safeToRemove() })),
			(Qt.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(t) {
		const { layoutDependency: r, visualElement: n, drag: o, isPresent: s } = this.props,
			i = n.projection;
		return (
			i &&
				((i.isPresent = s),
				o || t.layoutDependency !== r || r === void 0 ? i.willUpdate() : this.safeToRemove(),
				t.isPresent !== s &&
					(s
						? i.promote()
						: i.relegate() ||
						  K.postRender(() => {
								const a = i.getStack();
								(!a || !a.members.length) && this.safeToRemove();
						  }))),
			null
		);
	}
	componentDidUpdate() {
		const { projection: t } = this.props.visualElement;
		t &&
			(t.root.didUpdate(),
			queueMicrotask(() => {
				!t.currentAnimation && t.isLead() && this.safeToRemove();
			}));
	}
	componentWillUnmount() {
		const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props,
			{ projection: o } = t;
		o &&
			(o.scheduleCheckAfterUnmount(),
			r && r.group && r.group.remove(o),
			n && n.deregister && n.deregister(o));
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props;
		t && t();
	}
	render() {
		return null;
	}
}
function xl(e) {
	const [t, r] = Ah(),
		n = b.useContext(_n);
	return B.createElement(Lh, {
		...e,
		layoutGroup: n,
		switchLayoutGroup: b.useContext(ma),
		isPresent: t,
		safeToRemove: r,
	});
}
const kh = {
		borderRadius: {
			...mt,
			applyTo: [
				'borderTopLeftRadius',
				'borderTopRightRadius',
				'borderBottomLeftRadius',
				'borderBottomRightRadius',
			],
		},
		borderTopLeftRadius: mt,
		borderTopRightRadius: mt,
		borderBottomLeftRadius: mt,
		borderBottomRightRadius: mt,
		boxShadow: Mh,
	},
	Pl = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
	Vh = Pl.length,
	ki = (e) => (typeof e == 'string' ? parseFloat(e) : e),
	Vi = (e) => typeof e == 'number' || V.test(e);
function Rh(e, t, r, n, o, s) {
	o
		? ((e.opacity = W(0, r.opacity !== void 0 ? r.opacity : 1, Dh(n))),
		  (e.opacityExit = W(t.opacity !== void 0 ? t.opacity : 1, 0, Fh(n))))
		: s &&
		  (e.opacity = W(
				t.opacity !== void 0 ? t.opacity : 1,
				r.opacity !== void 0 ? r.opacity : 1,
				n
		  ));
	for (let i = 0; i < Vh; i++) {
		const a = `border${Pl[i]}Radius`;
		let l = Ri(t, a),
			u = Ri(r, a);
		if (l === void 0 && u === void 0) continue;
		l || (l = 0),
			u || (u = 0),
			l === 0 || u === 0 || Vi(l) === Vi(u)
				? ((e[a] = Math.max(W(ki(l), ki(u), n), 0)), (fe.test(u) || fe.test(l)) && (e[a] += '%'))
				: (e[a] = u);
	}
	(t.rotate || r.rotate) && (e.rotate = W(t.rotate || 0, r.rotate || 0, n));
}
function Ri(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Dh = Tl(0, 0.5, no),
	Fh = Tl(0.5, 0.95, z);
function Tl(e, t, r) {
	return (n) => (n < e ? 0 : n > t ? 1 : r(Ct(e, t, n)));
}
function Di(e, t) {
	(e.min = t.min), (e.max = t.max);
}
function ae(e, t) {
	Di(e.x, t.x), Di(e.y, t.y);
}
function Fi(e, t, r, n, o) {
	return (e -= t), (e = vr(e, 1 / r, n)), o !== void 0 && (e = vr(e, 1 / o, n)), e;
}
function Ih(e, t = 0, r = 1, n = 0.5, o, s = e, i = e) {
	if (
		(fe.test(t) && ((t = parseFloat(t)), (t = W(i.min, i.max, t / 100) - i.min)),
		typeof t != 'number')
	)
		return;
	let a = W(s.min, s.max, n);
	e === s && (a -= t), (e.min = Fi(e.min, t, r, a, o)), (e.max = Fi(e.max, t, r, a, o));
}
function Ii(e, t, [r, n, o], s, i) {
	Ih(e, t[r], t[n], t[o], t.scale, s, i);
}
const Oh = ['x', 'scaleX', 'originX'],
	Nh = ['y', 'scaleY', 'originY'];
function Oi(e, t, r, n) {
	Ii(e.x, t, Oh, r ? r.x : void 0, n ? n.x : void 0),
		Ii(e.y, t, Nh, r ? r.y : void 0, n ? n.y : void 0);
}
function Ni(e) {
	return e.translate === 0 && e.scale === 1;
}
function $l(e) {
	return Ni(e.x) && Ni(e.y);
}
function Bh(e, t) {
	return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function wl(e, t) {
	return (
		Math.round(e.x.min) === Math.round(t.x.min) &&
		Math.round(e.x.max) === Math.round(t.x.max) &&
		Math.round(e.y.min) === Math.round(t.y.min) &&
		Math.round(e.y.max) === Math.round(t.y.max)
	);
}
function Bi(e) {
	return ne(e.x) / ne(e.y);
}
class jh {
	constructor() {
		this.members = [];
	}
	add(t) {
		lo(this.members, t), t.scheduleRender();
	}
	remove(t) {
		if ((uo(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
			const r = this.members[this.members.length - 1];
			r && this.promote(r);
		}
	}
	relegate(t) {
		const r = this.members.findIndex((o) => t === o);
		if (r === 0) return !1;
		let n;
		for (let o = r; o >= 0; o--) {
			const s = this.members[o];
			if (s.isPresent !== !1) {
				n = s;
				break;
			}
		}
		return n ? (this.promote(n), !0) : !1;
	}
	promote(t, r) {
		const n = this.lead;
		if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
			n.instance && n.scheduleRender(),
				t.scheduleRender(),
				(t.resumeFrom = n),
				r && (t.resumeFrom.preserveOpacity = !0),
				n.snapshot &&
					((t.snapshot = n.snapshot),
					(t.snapshot.latestValues = n.animationValues || n.latestValues)),
				t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
			const { crossfade: o } = t.options;
			o === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((t) => {
			const { options: r, resumingFrom: n } = t;
			r.onExitComplete && r.onExitComplete(),
				n && n.options.onExitComplete && n.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((t) => {
			t.instance && t.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
}
function ji(e, t, r) {
	let n = '';
	const o = e.x.translate / t.x,
		s = e.y.translate / t.y;
	if (
		((o || s) && (n = `translate3d(${o}px, ${s}px, 0) `),
		(t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
		r)
	) {
		const { rotate: l, rotateX: u, rotateY: c } = r;
		l && (n += `rotate(${l}deg) `),
			u && (n += `rotateX(${u}deg) `),
			c && (n += `rotateY(${c}deg) `);
	}
	const i = e.x.scale * t.x,
		a = e.y.scale * t.y;
	return (i !== 1 || a !== 1) && (n += `scale(${i}, ${a})`), n || 'none';
}
const Kh = (e, t) => e.depth - t.depth;
class Uh {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(t) {
		lo(this.children, t), (this.isDirty = !0);
	}
	remove(t) {
		uo(this.children, t), (this.isDirty = !0);
	}
	forEach(t) {
		this.isDirty && this.children.sort(Kh), (this.isDirty = !1), this.children.forEach(t);
	}
}
function Hh(e, t) {
	const r = performance.now(),
		n = ({ timestamp: o }) => {
			const s = o - r;
			s >= t && (Pe(n), e(s - t));
		};
	return K.read(n, !0), () => Pe(n);
}
function Wh(e) {
	window.MotionDebug && window.MotionDebug.record(e);
}
function zh(e) {
	return e instanceof SVGElement && e.tagName !== 'svg';
}
function Gh(e, t, r) {
	const n = re(e) ? e : st(e);
	return n.start(ao('', n, t, r)), n.animation;
}
const Ki = ['', 'X', 'Y', 'Z'],
	Ui = 1e3;
let _h = 0;
const Ie = {
	type: 'projectionFrame',
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0,
};
function El({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: r,
	checkIsScrollRoot: n,
	resetTransform: o,
}) {
	return class {
		constructor(i = {}, a = t?.()) {
			(this.id = _h++),
				(this.animationId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isProjectionDirty = !1),
				(this.isSharedProjectionDirty = !1),
				(this.isTransformDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.hasTreeAnimated = !1),
				(this.updateScheduled = !1),
				(this.checkUpdateFailed = () => {
					this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
				}),
				(this.updateProjection = () => {
					(Ie.totalNodes = Ie.resolvedTargetDeltas = Ie.recalculatedProjection = 0),
						this.nodes.forEach(qh),
						this.nodes.forEach(tm),
						this.nodes.forEach(rm),
						this.nodes.forEach(Zh),
						Wh(Ie);
				}),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = i),
				(this.root = a ? a.root || a : this),
				(this.path = a ? [...a.path, a] : []),
				(this.parent = a),
				(this.depth = a ? a.depth + 1 : 0);
			for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Uh());
		}
		addEventListener(i, a) {
			return (
				this.eventHandlers.has(i) || this.eventHandlers.set(i, new co()),
				this.eventHandlers.get(i).add(a)
			);
		}
		notifyListeners(i, ...a) {
			const l = this.eventHandlers.get(i);
			l && l.notify(...a);
		}
		hasListeners(i) {
			return this.eventHandlers.has(i);
		}
		mount(i, a = this.root.hasTreeAnimated) {
			if (this.instance) return;
			(this.isSVG = zh(i)), (this.instance = i);
			const { layoutId: l, layout: u, visualElement: c } = this.options;
			if (
				(c && !c.current && c.mount(i),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				a && (u || l) && (this.isLayoutDirty = !0),
				e)
			) {
				let d;
				const p = () => (this.root.updateBlockedByResize = !1);
				e(i, () => {
					(this.root.updateBlockedByResize = !0),
						d && d(),
						(d = Hh(p, 250)),
						Qt.hasAnimatedSinceResize && ((Qt.hasAnimatedSinceResize = !1), this.nodes.forEach(Wi));
				});
			}
			l && this.root.registerSharedNode(l, this),
				this.options.animate !== !1 &&
					c &&
					(l || u) &&
					this.addEventListener(
						'didUpdate',
						({ delta: d, hasLayoutChanged: p, hasRelativeTargetChanged: h, layout: g }) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const P = this.options.transition || c.getDefaultTransition() || am,
								{ onLayoutAnimationStart: $, onLayoutAnimationComplete: A } = c.getProps(),
								x = !this.targetLayout || !wl(this.targetLayout, g) || h,
								T = !p && h;
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								T ||
								(p && (x || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(d, T);
								const C = { ...ul(P, 'layout'), onPlay: $, onComplete: A };
								(c.shouldReduceMotion || this.options.layoutRoot) && ((C.delay = 0), (C.type = !1)),
									this.startAnimation(C);
							} else
								p || Wi(this),
									this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
							this.targetLayout = g;
						}
					);
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const i = this.getStack();
			i && i.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				Pe(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() ||
				((this.isUpdating = !0), this.nodes && this.nodes.forEach(nm), this.animationId++);
		}
		getTransformTemplate() {
			const { visualElement: i } = this.options;
			return i && i.getProps().transformTemplate;
		}
		willUpdate(i = !0) {
			if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
			this.isLayoutDirty = !0;
			for (let c = 0; c < this.path.length; c++) {
				const d = this.path[c];
				(d.shouldResetTransform = !0),
					d.updateScroll('snapshot'),
					d.options.layoutRoot && d.willUpdate(!1);
			}
			const { layoutId: a, layout: l } = this.options;
			if (a === void 0 && !l) return;
			const u = this.getTransformTemplate();
			(this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
				this.updateSnapshot(),
				i && this.notifyListeners('willUpdate');
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Hi);
				return;
			}
			this.isUpdating || this.nodes.forEach(Qh),
				(this.isUpdating = !1),
				this.nodes.forEach(em),
				this.nodes.forEach(Xh),
				this.nodes.forEach(Yh),
				this.clearAllSnapshots();
			const a = performance.now();
			(q.delta = Me(0, 1e3 / 60, a - q.timestamp)),
				(q.timestamp = a),
				(q.isProcessing = !0),
				Ur.update.process(q),
				Ur.preRender.process(q),
				Ur.render.process(q),
				(q.isProcessing = !1);
		}
		didUpdate() {
			this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Jh), this.sharedNodes.forEach(om);
		}
		scheduleUpdateProjection() {
			K.preRender(this.updateProjection, !1, !0);
		}
		scheduleCheckAfterUnmount() {
			K.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure());
		}
		updateLayout() {
			if (
				!this.instance ||
				(this.updateScroll(),
				!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
			)
				return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
			const i = this.layout;
			(this.layout = this.measure(!1)),
				(this.layoutCorrected = X()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners('measure', this.layout.layoutBox);
			const { visualElement: a } = this.options;
			a && a.notify('LayoutMeasure', this.layout.layoutBox, i ? i.layoutBox : void 0);
		}
		updateScroll(i = 'measure') {
			let a = !!(this.options.layoutScroll && this.instance);
			this.scroll &&
				this.scroll.animationId === this.root.animationId &&
				this.scroll.phase === i &&
				(a = !1),
				a &&
					(this.scroll = {
						animationId: this.root.animationId,
						phase: i,
						isRoot: n(this.instance),
						offset: r(this.instance),
					});
		}
		resetTransform() {
			if (!o) return;
			const i = this.isLayoutDirty || this.shouldResetTransform,
				a = this.projectionDelta && !$l(this.projectionDelta),
				l = this.getTransformTemplate(),
				u = l ? l(this.latestValues, '') : void 0,
				c = u !== this.prevTransformTemplateValue;
			i &&
				(a || Fe(this.latestValues) || c) &&
				(o(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
		}
		measure(i = !0) {
			const a = this.measurePageBox();
			let l = this.removeElementScroll(a);
			return (
				i && (l = this.removeTransform(l)),
				lm(l),
				{
					animationId: this.root.animationId,
					measuredBox: a,
					layoutBox: l,
					latestValues: {},
					source: this.id,
				}
			);
		}
		measurePageBox() {
			const { visualElement: i } = this.options;
			if (!i) return X();
			const a = i.measureViewportBox(),
				{ scroll: l } = this.root;
			return l && (we(a.x, l.offset.x), we(a.y, l.offset.y)), a;
		}
		removeElementScroll(i) {
			const a = X();
			ae(a, i);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l],
					{ scroll: c, options: d } = u;
				if (u !== this.root && c && d.layoutScroll) {
					if (c.isRoot) {
						ae(a, i);
						const { scroll: p } = this.root;
						p && (we(a.x, -p.offset.x), we(a.y, -p.offset.y));
					}
					we(a.x, c.offset.x), we(a.y, c.offset.y);
				}
			}
			return a;
		}
		applyTransform(i, a = !1) {
			const l = X();
			ae(l, i);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				!a &&
					c.options.layoutScroll &&
					c.scroll &&
					c !== c.root &&
					ot(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
					Fe(c.latestValues) && ot(l, c.latestValues);
			}
			return Fe(this.latestValues) && ot(l, this.latestValues), l;
		}
		removeTransform(i) {
			const a = X();
			ae(a, i);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l];
				if (!u.instance || !Fe(u.latestValues)) continue;
				Sn(u.latestValues) && u.updateSnapshot();
				const c = X(),
					d = u.measurePageBox();
				ae(c, d), Oi(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
			}
			return Fe(this.latestValues) && Oi(a, this.latestValues), a;
		}
		setTargetDelta(i) {
			(this.targetDelta = i), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
		}
		setOptions(i) {
			this.options = {
				...this.options,
				...i,
				crossfade: i.crossfade !== void 0 ? i.crossfade : !0,
			};
		}
		clearMeasurements() {
			(this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1);
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent &&
				this.relativeParent.resolvedRelativeTargetAt !== q.timestamp &&
				this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(i = !1) {
			var a;
			const l = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
				this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
			const u = !!this.resumingFrom || this !== l;
			if (
				!(
					i ||
					(u && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					(!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget
				)
			)
				return;
			const { layout: d, layoutId: p } = this.options;
			if (!(!this.layout || !(d || p))) {
				if (
					((this.resolvedRelativeTargetAt = q.timestamp), !this.targetDelta && !this.relativeTarget)
				) {
					const h = this.getClosestProjectingParent();
					h && h.layout && this.animationProgress !== 1
						? ((this.relativeParent = h),
						  this.forceRelativeParentToResolveTarget(),
						  (this.relativeTarget = X()),
						  (this.relativeTargetOrigin = X()),
						  Tt(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
						  ae(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target || ((this.target = X()), (this.targetWithTransforms = X())),
						this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.relativeParent &&
						this.relativeParent.target
							? (this.forceRelativeParentToResolveTarget(),
							  ch(this.target, this.relativeTarget, this.relativeParent.target))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: ae(this.target, this.layout.layoutBox),
							  yl(this.target, this.targetDelta))
							: ae(this.target, this.layout.layoutBox),
						this.attemptToResolveRelativeTarget)
					) {
						this.attemptToResolveRelativeTarget = !1;
						const h = this.getClosestProjectingParent();
						h &&
						!!h.resumingFrom == !!this.resumingFrom &&
						!h.options.layoutScroll &&
						h.target &&
						this.animationProgress !== 1
							? ((this.relativeParent = h),
							  this.forceRelativeParentToResolveTarget(),
							  (this.relativeTarget = X()),
							  (this.relativeTargetOrigin = X()),
							  Tt(this.relativeTargetOrigin, this.target, h.target),
							  ae(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					Ie.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Sn(this.parent.latestValues) || vl(this.parent.latestValues)))
				return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!(
				(this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
				this.layout
			);
		}
		calcProjection() {
			var i;
			const a = this.getLead(),
				l = !!this.resumingFrom || this !== a;
			let u = !0;
			if (
				((this.isProjectionDirty ||
					(!((i = this.parent) === null || i === void 0) && i.isProjectionDirty)) &&
					(u = !1),
				l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
				this.resolvedRelativeTargetAt === q.timestamp && (u = !1),
				u)
			)
				return;
			const { layout: c, layoutId: d } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(c || d))
			)
				return;
			ae(this.layoutCorrected, this.layout.layoutBox);
			const p = this.treeScale.x,
				h = this.treeScale.y;
			bh(this.layoutCorrected, this.treeScale, this.path, l),
				a.layout &&
					!a.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					(a.target = a.layout.layoutBox);
			const { target: g } = a;
			if (!g) {
				this.projectionTransform &&
					((this.projectionDelta = nt()),
					(this.projectionTransform = 'none'),
					this.scheduleRender());
				return;
			}
			this.projectionDelta ||
				((this.projectionDelta = nt()), (this.projectionDeltaWithTransform = nt()));
			const P = this.projectionTransform;
			Pt(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
				(this.projectionTransform = ji(this.projectionDelta, this.treeScale)),
				(this.projectionTransform !== P || this.treeScale.x !== p || this.treeScale.y !== h) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners('projectionUpdate', g)),
				Ie.recalculatedProjection++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(i = !0) {
			if ((this.options.scheduleRender && this.options.scheduleRender(), i)) {
				const a = this.getStack();
				a && a.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		setAnimationOrigin(i, a = !1) {
			const l = this.snapshot,
				u = l ? l.latestValues : {},
				c = { ...this.latestValues },
				d = nt();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !a);
			const p = X(),
				h = l ? l.source : void 0,
				g = this.layout ? this.layout.source : void 0,
				P = h !== g,
				$ = this.getStack(),
				A = !$ || $.members.length <= 1,
				x = !!(P && !A && this.options.crossfade === !0 && !this.path.some(sm));
			this.animationProgress = 0;
			let T;
			(this.mixTargetDelta = (C) => {
				const M = C / 1e3;
				zi(d.x, i.x, M),
					zi(d.y, i.y, M),
					this.setTargetDelta(d),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(Tt(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						im(this.relativeTarget, this.relativeTargetOrigin, p, M),
						T && Bh(this.relativeTarget, T) && (this.isProjectionDirty = !1),
						T || (T = X()),
						ae(T, this.relativeTarget)),
					P && ((this.animationValues = c), Rh(c, u, this.latestValues, M, x, A)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = M);
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(i) {
			this.notifyListeners('animationStart'),
				this.currentAnimation && this.currentAnimation.stop(),
				this.resumingFrom &&
					this.resumingFrom.currentAnimation &&
					this.resumingFrom.currentAnimation.stop(),
				this.pendingAnimation && (Pe(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = K.update(() => {
					(Qt.hasAnimatedSinceResize = !0),
						(this.currentAnimation = Gh(0, Ui, {
							...i,
							onUpdate: (a) => {
								this.mixTargetDelta(a), i.onUpdate && i.onUpdate(a);
							},
							onComplete: () => {
								i.onComplete && i.onComplete(), this.completeAnimation();
							},
						})),
						this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
						(this.pendingAnimation = void 0);
				}));
		}
		completeAnimation() {
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0),
				(this.resumingFrom.preserveOpacity = void 0));
			const i = this.getStack();
			i && i.exitAnimationComplete(),
				(this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
				this.notifyListeners('animationComplete');
		}
		finishAnimation() {
			this.currentAnimation &&
				(this.mixTargetDelta && this.mixTargetDelta(Ui), this.currentAnimation.stop()),
				this.completeAnimation();
		}
		applyTransformsToTarget() {
			const i = this.getLead();
			let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = i;
			if (!(!a || !l || !u)) {
				if (
					this !== i &&
					this.layout &&
					u &&
					Sl(this.options.animationType, this.layout.layoutBox, u.layoutBox)
				) {
					l = this.target || X();
					const d = ne(this.layout.layoutBox.x);
					(l.x.min = i.target.x.min), (l.x.max = l.x.min + d);
					const p = ne(this.layout.layoutBox.y);
					(l.y.min = i.target.y.min), (l.y.max = l.y.min + p);
				}
				ae(a, l), ot(a, c), Pt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
			}
		}
		registerSharedNode(i, a) {
			this.sharedNodes.has(i) || this.sharedNodes.set(i, new jh()), this.sharedNodes.get(i).add(a);
			const u = a.options.initialPromotionConfig;
			a.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity:
					u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0,
			});
		}
		isLead() {
			const i = this.getStack();
			return i ? i.lead === this : !0;
		}
		getLead() {
			var i;
			const { layoutId: a } = this.options;
			return a ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
		}
		getPrevLead() {
			var i;
			const { layoutId: a } = this.options;
			return a ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead) : void 0;
		}
		getStack() {
			const { layoutId: i } = this.options;
			if (i) return this.root.sharedNodes.get(i);
		}
		promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
			const u = this.getStack();
			u && u.promote(this, l),
				i && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				a && this.setOptions({ transition: a });
		}
		relegate() {
			const i = this.getStack();
			return i ? i.relegate(this) : !1;
		}
		resetRotation() {
			const { visualElement: i } = this.options;
			if (!i) return;
			let a = !1;
			const { latestValues: l } = i;
			if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)) return;
			const u = {};
			for (let c = 0; c < Ki.length; c++) {
				const d = 'rotate' + Ki[c];
				l[d] && ((u[d] = l[d]), i.setStaticValue(d, 0));
			}
			i.render();
			for (const c in u) i.setStaticValue(c, u[c]);
			i.scheduleRender();
		}
		getProjectionStyles(i = {}) {
			var a, l;
			const u = {};
			if (!this.instance || this.isSVG) return u;
			if (this.isVisible) u.visibility = '';
			else return { visibility: 'hidden' };
			const c = this.getTransformTemplate();
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(u.opacity = ''),
					(u.pointerEvents = Jt(i.pointerEvents) || ''),
					(u.transform = c ? c(this.latestValues, '') : 'none'),
					u
				);
			const d = this.getLead();
			if (!this.projectionDelta || !this.layout || !d.target) {
				const P = {};
				return (
					this.options.layoutId &&
						((P.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
						(P.pointerEvents = Jt(i.pointerEvents) || '')),
					this.hasProjected &&
						!Fe(this.latestValues) &&
						((P.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
					P
				);
			}
			const p = d.animationValues || d.latestValues;
			this.applyTransformsToTarget(),
				(u.transform = ji(this.projectionDeltaWithTransform, this.treeScale, p)),
				c && (u.transform = c(p, u.transform));
			const { x: h, y: g } = this.projectionDelta;
			(u.transformOrigin = `${h.origin * 100}% ${g.origin * 100}% 0`),
				d.animationValues
					? (u.opacity =
							d === this
								? (l = (a = p.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !==
										null && l !== void 0
									? l
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: p.opacityExit)
					: (u.opacity =
							d === this
								? p.opacity !== void 0
									? p.opacity
									: ''
								: p.opacityExit !== void 0
								? p.opacityExit
								: 0);
			for (const P in cr) {
				if (p[P] === void 0) continue;
				const { correct: $, applyTo: A } = cr[P],
					x = u.transform === 'none' ? p[P] : $(p[P], d);
				if (A) {
					const T = A.length;
					for (let C = 0; C < T; C++) u[A[C]] = x;
				} else u[P] = x;
			}
			return (
				this.options.layoutId &&
					(u.pointerEvents = d === this ? Jt(i.pointerEvents) || '' : 'none'),
				u
			);
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((i) => {
				var a;
				return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
			}),
				this.root.nodes.forEach(Hi),
				this.root.sharedNodes.clear();
		}
	};
}
function Xh(e) {
	e.updateLayout();
}
function Yh(e) {
	var t;
	const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
	if (e.isLead() && e.layout && r && e.hasListeners('didUpdate')) {
		const { layoutBox: n, measuredBox: o } = e.layout,
			{ animationType: s } = e.options,
			i = r.source !== e.layout.source;
		s === 'size'
			? ce((d) => {
					const p = i ? r.measuredBox[d] : r.layoutBox[d],
						h = ne(p);
					(p.min = n[d].min), (p.max = p.min + h);
			  })
			: Sl(s, r.layoutBox, n) &&
			  ce((d) => {
					const p = i ? r.measuredBox[d] : r.layoutBox[d],
						h = ne(n[d]);
					(p.max = p.min + h),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0), (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
			  });
		const a = nt();
		Pt(a, n, r.layoutBox);
		const l = nt();
		i ? Pt(l, e.applyTransform(o, !0), r.measuredBox) : Pt(l, n, r.layoutBox);
		const u = !$l(a);
		let c = !1;
		if (!e.resumeFrom) {
			const d = e.getClosestProjectingParent();
			if (d && !d.resumeFrom) {
				const { snapshot: p, layout: h } = d;
				if (p && h) {
					const g = X();
					Tt(g, r.layoutBox, p.layoutBox);
					const P = X();
					Tt(P, n, h.layoutBox),
						wl(g, P) || (c = !0),
						d.options.layoutRoot &&
							((e.relativeTarget = P), (e.relativeTargetOrigin = g), (e.relativeParent = d));
				}
			}
		}
		e.notifyListeners('didUpdate', {
			layout: n,
			snapshot: r,
			delta: l,
			layoutDelta: a,
			hasLayoutChanged: u,
			hasRelativeTargetChanged: c,
		});
	} else if (e.isLead()) {
		const { onExitComplete: n } = e.options;
		n && n();
	}
	e.options.transition = void 0;
}
function qh(e) {
	Ie.totalNodes++,
		e.parent &&
			(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
			e.isSharedProjectionDirty ||
				(e.isSharedProjectionDirty = !!(
					e.isProjectionDirty ||
					e.parent.isProjectionDirty ||
					e.parent.isSharedProjectionDirty
				)),
			e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Zh(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Jh(e) {
	e.clearSnapshot();
}
function Hi(e) {
	e.clearMeasurements();
}
function Qh(e) {
	e.isLayoutDirty = !1;
}
function em(e) {
	const { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform();
}
function Wi(e) {
	e.finishAnimation(),
		(e.targetDelta = e.relativeTarget = e.target = void 0),
		(e.isProjectionDirty = !0);
}
function tm(e) {
	e.resolveTargetDelta();
}
function rm(e) {
	e.calcProjection();
}
function nm(e) {
	e.resetRotation();
}
function om(e) {
	e.removeLeadSnapshot();
}
function zi(e, t, r) {
	(e.translate = W(t.translate, 0, r)),
		(e.scale = W(t.scale, 1, r)),
		(e.origin = t.origin),
		(e.originPoint = t.originPoint);
}
function Gi(e, t, r, n) {
	(e.min = W(t.min, r.min, n)), (e.max = W(t.max, r.max, n));
}
function im(e, t, r, n) {
	Gi(e.x, t.x, r.x, n), Gi(e.y, t.y, r.y, n);
}
function sm(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const am = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	_i = (e) => typeof navigator < 'u' && navigator.userAgent.toLowerCase().includes(e),
	Xi = _i('applewebkit/') && !_i('chrome/') ? Math.round : z;
function Yi(e) {
	(e.min = Xi(e.min)), (e.max = Xi(e.max));
}
function lm(e) {
	Yi(e.x), Yi(e.y);
}
function Sl(e, t, r) {
	return e === 'position' || (e === 'preserve-aspect' && !wn(Bi(t), Bi(r), 0.2));
}
const um = El({
		attachResizeListener: (e, t) => ve(e, 'resize', t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	Qr = { current: void 0 },
	Cl = El({
		measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!Qr.current) {
				const e = new um({});
				e.mount(window), e.setOptions({ layoutScroll: !0 }), (Qr.current = e);
			}
			return Qr.current;
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : 'none';
		},
		checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
	}),
	cm = { pan: { Feature: Ch }, drag: { Feature: Sh, ProjectionNode: Cl, MeasureLayout: xl } },
	fm = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function dm(e) {
	const t = fm.exec(e);
	if (!t) return [,];
	const [, r, n] = t;
	return [r, n];
}
function An(e, t, r = 1) {
	const [n, o] = dm(e);
	if (!n) return;
	const s = window.getComputedStyle(t).getPropertyValue(n);
	if (s) {
		const i = s.trim();
		return cl(i) ? parseFloat(i) : i;
	} else return vn(o) ? An(o, t, r + 1) : o;
}
function pm(e, { ...t }, r) {
	const n = e.current;
	if (!(n instanceof Element)) return { target: t, transitionEnd: r };
	r && (r = { ...r }),
		e.values.forEach((o) => {
			const s = o.get();
			if (!vn(s)) return;
			const i = An(s, n);
			i && o.set(i);
		});
	for (const o in t) {
		const s = t[o];
		if (!vn(s)) continue;
		const i = An(s, n);
		i && ((t[o] = i), r || (r = {}), r[o] === void 0 && (r[o] = s));
	}
	return { target: t, transitionEnd: r };
}
const hm = new Set([
		'width',
		'height',
		'top',
		'left',
		'right',
		'bottom',
		'x',
		'y',
		'translateX',
		'translateY',
	]),
	Al = (e) => hm.has(e),
	mm = (e) => Object.keys(e).some(Al),
	qi = (e) => e === ze || e === V,
	Zi = (e, t) => parseFloat(e.split(', ')[t]),
	Ji =
		(e, t) =>
		(r, { transform: n }) => {
			if (n === 'none' || !n) return 0;
			const o = n.match(/^matrix3d\((.+)\)$/);
			if (o) return Zi(o[1], t);
			{
				const s = n.match(/^matrix\((.+)\)$/);
				return s ? Zi(s[1], e) : 0;
			}
		},
	gm = new Set(['x', 'y', 'z']),
	vm = Mt.filter((e) => !gm.has(e));
function ym(e) {
	const t = [];
	return (
		vm.forEach((r) => {
			const n = e.getValue(r);
			n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith('scale') ? 1 : 0));
		}),
		t.length && e.render(),
		t
	);
}
const at = {
	width: ({ x: e }, { paddingLeft: t = '0', paddingRight: r = '0' }) =>
		e.max - e.min - parseFloat(t) - parseFloat(r),
	height: ({ y: e }, { paddingTop: t = '0', paddingBottom: r = '0' }) =>
		e.max - e.min - parseFloat(t) - parseFloat(r),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: Ji(4, 13),
	y: Ji(5, 14),
};
at.translateX = at.x;
at.translateY = at.y;
const bm = (e, t, r) => {
		const n = t.measureViewportBox(),
			o = t.current,
			s = getComputedStyle(o),
			{ display: i } = s,
			a = {};
		i === 'none' && t.setStaticValue('display', e.display || 'block'),
			r.forEach((u) => {
				a[u] = at[u](n, s);
			}),
			t.render();
		const l = t.measureViewportBox();
		return (
			r.forEach((u) => {
				const c = t.getValue(u);
				c && c.jump(a[u]), (e[u] = at[u](l, s));
			}),
			e
		);
	},
	xm = (e, t, r = {}, n = {}) => {
		(t = { ...t }), (n = { ...n });
		const o = Object.keys(t).filter(Al);
		let s = [],
			i = !1;
		const a = [];
		if (
			(o.forEach((l) => {
				const u = e.getValue(l);
				if (!e.hasValue(l)) return;
				let c = r[l],
					d = ht(c);
				const p = t[l];
				let h;
				if (dr(p)) {
					const g = p.length,
						P = p[0] === null ? 1 : 0;
					(c = p[P]), (d = ht(c));
					for (let $ = P; $ < g && p[$] !== null; $++) h ? ro(ht(p[$]) === h) : (h = ht(p[$]));
				} else h = ht(p);
				if (d !== h)
					if (qi(d) && qi(h)) {
						const g = u.get();
						typeof g == 'string' && u.set(parseFloat(g)),
							typeof p == 'string'
								? (t[l] = parseFloat(p))
								: Array.isArray(p) && h === V && (t[l] = p.map(parseFloat));
					} else
						d?.transform && h?.transform && (c === 0 || p === 0)
							? c === 0
								? u.set(h.transform(c))
								: (t[l] = d.transform(p))
							: (i || ((s = ym(e)), (i = !0)),
							  a.push(l),
							  (n[l] = n[l] !== void 0 ? n[l] : t[l]),
							  u.jump(p));
			}),
			a.length)
		) {
			const l = a.indexOf('height') >= 0 ? window.pageYOffset : null,
				u = bm(t, e, a);
			return (
				s.length &&
					s.forEach(([c, d]) => {
						e.getValue(c).set(d);
					}),
				e.render(),
				wr && l !== null && window.scrollTo({ top: l }),
				{ target: u, transitionEnd: n }
			);
		} else return { target: t, transitionEnd: n };
	};
function Pm(e, t, r, n) {
	return mm(t) ? xm(e, t, r, n) : { target: t, transitionEnd: n };
}
const Tm = (e, t, r, n) => {
		const o = pm(e, t, n);
		return (t = o.target), (n = o.transitionEnd), Pm(e, t, r, n);
	},
	Mn = { current: null },
	Ml = { current: !1 };
function $m() {
	if (((Ml.current = !0), !!wr))
		if (window.matchMedia) {
			const e = window.matchMedia('(prefers-reduced-motion)'),
				t = () => (Mn.current = e.matches);
			e.addListener(t), t();
		} else Mn.current = !1;
}
function wm(e, t, r) {
	const { willChange: n } = t;
	for (const o in t) {
		const s = t[o],
			i = r[o];
		if (re(s)) e.addValue(o, s), gr(n) && n.add(o);
		else if (re(i)) e.addValue(o, st(s, { owner: e })), gr(n) && n.remove(o);
		else if (i !== s)
			if (e.hasValue(o)) {
				const a = e.getValue(o);
				!a.hasAnimated && a.set(s);
			} else {
				const a = e.getStaticValue(o);
				e.addValue(o, st(a !== void 0 ? a : s, { owner: e }));
			}
	}
	for (const o in r) t[o] === void 0 && e.removeValue(o);
	return t;
}
const Qi = new WeakMap(),
	Ll = Object.keys(St),
	Em = Ll.length,
	es = [
		'AnimationStart',
		'AnimationComplete',
		'Update',
		'BeforeLayoutMeasure',
		'LayoutMeasure',
		'LayoutAnimationStart',
		'LayoutAnimationComplete',
	],
	Sm = Gn.length;
class Cm {
	constructor(
		{ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: s },
		i = {}
	) {
		(this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.values = new Map()),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () => this.notify('Update', this.latestValues)),
			(this.render = () => {
				this.current &&
					(this.triggerBuild(),
					this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
			}),
			(this.scheduleRender = () => K.render(this.render, !1, !0));
		const { latestValues: a, renderState: l } = s;
		(this.latestValues = a),
			(this.baseTarget = { ...a }),
			(this.initialValues = r.initial ? { ...a } : {}),
			(this.renderState = l),
			(this.parent = t),
			(this.props = r),
			(this.presenceContext = n),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = o),
			(this.options = i),
			(this.isControllingVariants = Sr(r)),
			(this.isVariantNode = ha(r)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(t && t.current));
		const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
		for (const d in c) {
			const p = c[d];
			a[d] !== void 0 && re(p) && (p.set(a[d], !1), gr(u) && u.add(d));
		}
	}
	scrapeMotionValuesFromProps(t, r) {
		return {};
	}
	mount(t) {
		(this.current = t),
			Qi.set(t, this),
			this.projection && !this.projection.instance && this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
			Ml.current || $m(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === 'never'
					? !1
					: this.reducedMotionConfig === 'always'
					? !0
					: Mn.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext);
	}
	unmount() {
		Qi.delete(this.current),
			this.projection && this.projection.unmount(),
			Pe(this.notifyUpdate),
			Pe(this.render),
			this.valueSubscriptions.forEach((t) => t()),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this);
		for (const t in this.events) this.events[t].clear();
		for (const t in this.features) this.features[t].unmount();
		this.current = null;
	}
	bindToMotionValue(t, r) {
		const n = We.has(t),
			o = r.on('change', (i) => {
				(this.latestValues[t] = i),
					this.props.onUpdate && K.update(this.notifyUpdate, !1, !0),
					n && this.projection && (this.projection.isTransformDirty = !0);
			}),
			s = r.on('renderRequest', this.scheduleRender);
		this.valueSubscriptions.set(t, () => {
			o(), s();
		});
	}
	sortNodePosition(t) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current);
	}
	loadFeatures({ children: t, ...r }, n, o, s) {
		let i, a;
		for (let l = 0; l < Em; l++) {
			const u = Ll[l],
				{ isEnabled: c, Feature: d, ProjectionNode: p, MeasureLayout: h } = St[u];
			p && (i = p),
				c(r) && (!this.features[u] && d && (this.features[u] = new d(this)), h && (a = h));
		}
		if (!this.projection && i) {
			this.projection = new i(this.latestValues, this.parent && this.parent.projection);
			const {
				layoutId: l,
				layout: u,
				drag: c,
				dragConstraints: d,
				layoutScroll: p,
				layoutRoot: h,
			} = r;
			this.projection.setOptions({
				layoutId: l,
				layout: u,
				alwaysMeasureLayout: !!c || (d && tt(d)),
				visualElement: this,
				scheduleRender: () => this.scheduleRender(),
				animationType: typeof u == 'string' ? u : 'both',
				initialPromotionConfig: s,
				layoutScroll: p,
				layoutRoot: h,
			});
		}
		return a;
	}
	updateFeatures() {
		for (const t in this.features) {
			const r = this.features[t];
			r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.options, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : X();
	}
	getStaticValue(t) {
		return this.latestValues[t];
	}
	setStaticValue(t, r) {
		this.latestValues[t] = r;
	}
	makeTargetAnimatable(t, r = !0) {
		return this.makeTargetAnimatableFromInstance(t, this.props, r);
	}
	update(t, r) {
		(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = t),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = r);
		for (let n = 0; n < es.length; n++) {
			const o = es[n];
			this.propEventSubscriptions[o] &&
				(this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
			const s = t['on' + o];
			s && (this.propEventSubscriptions[o] = this.on(o, s));
		}
		(this.prevMotionValues = wm(
			this,
			this.scrapeMotionValuesFromProps(t, this.prevProps),
			this.prevMotionValues
		)),
			this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	getVariantContext(t = !1) {
		if (t) return this.parent ? this.parent.getVariantContext() : void 0;
		if (!this.isControllingVariants) {
			const n = this.parent ? this.parent.getVariantContext() || {} : {};
			return this.props.initial !== void 0 && (n.initial = this.props.initial), n;
		}
		const r = {};
		for (let n = 0; n < Sm; n++) {
			const o = Gn[n],
				s = this.props[o];
			(Et(s) || s === !1) && (r[o] = s);
		}
		return r;
	}
	addVariantChild(t) {
		const r = this.getClosestVariantNode();
		if (r) return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
	}
	addValue(t, r) {
		r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)),
			this.values.set(t, r),
			(this.latestValues[t] = r.get());
	}
	removeValue(t) {
		this.values.delete(t);
		const r = this.valueSubscriptions.get(t);
		r && (r(), this.valueSubscriptions.delete(t)),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState);
	}
	hasValue(t) {
		return this.values.has(t);
	}
	getValue(t, r) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let n = this.values.get(t);
		return n === void 0 && r !== void 0 && ((n = st(r, { owner: this })), this.addValue(t, n)), n;
	}
	readValue(t) {
		var r;
		return this.latestValues[t] !== void 0 || !this.current
			? this.latestValues[t]
			: (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0
			? r
			: this.readValueFromInstance(this.current, t, this.options);
	}
	setBaseTarget(t, r) {
		this.baseTarget[t] = r;
	}
	getBaseTarget(t) {
		var r;
		const { initial: n } = this.props,
			o =
				typeof n == 'string' || typeof n == 'object'
					? (r = to(this.props, n)) === null || r === void 0
						? void 0
						: r[t]
					: void 0;
		if (n && o !== void 0) return o;
		const s = this.getBaseTargetFromProps(this.props, t);
		return s !== void 0 && !re(s)
			? s
			: this.initialValues[t] !== void 0 && o === void 0
			? void 0
			: this.baseTarget[t];
	}
	on(t, r) {
		return this.events[t] || (this.events[t] = new co()), this.events[t].add(r);
	}
	notify(t, ...r) {
		this.events[t] && this.events[t].notify(...r);
	}
}
class kl extends Cm {
	sortInstanceNodePosition(t, r) {
		return t.compareDocumentPosition(r) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(t, r) {
		return t.style ? t.style[r] : void 0;
	}
	removeValueFromRenderState(t, { vars: r, style: n }) {
		delete r[t], delete n[t];
	}
	makeTargetAnimatableFromInstance(
		{ transition: t, transitionEnd: r, ...n },
		{ transformValues: o },
		s
	) {
		let i = Gp(n, t || {}, this);
		if ((o && (r && (r = o(r)), n && (n = o(n)), i && (i = o(i))), s)) {
			Wp(this, n, i);
			const a = Tm(this, n, i, r);
			(r = a.transitionEnd), (n = a.target);
		}
		return { transition: t, transitionEnd: r, ...n };
	}
}
function Am(e) {
	return window.getComputedStyle(e);
}
class Mm extends kl {
	readValueFromInstance(t, r) {
		if (We.has(r)) {
			const n = so(r);
			return (n && n.default) || 0;
		} else {
			const n = Am(t),
				o = (ya(r) ? n.getPropertyValue(r) : n[r]) || 0;
			return typeof o == 'string' ? o.trim() : o;
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: r }) {
		return bl(t, r);
	}
	build(t, r, n, o) {
		Yn(t, r, n, o.transformTemplate);
	}
	scrapeMotionValuesFromProps(t, r) {
		return eo(t, r);
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		const { children: t } = this.props;
		re(t) &&
			(this.childSubscription = t.on('change', (r) => {
				this.current && (this.current.textContent = `${r}`);
			}));
	}
	renderInstance(t, r, n, o) {
		wa(t, r, n, o);
	}
}
class Lm extends kl {
	constructor() {
		super(...arguments), (this.isSVGTag = !1);
	}
	getBaseTargetFromProps(t, r) {
		return t[r];
	}
	readValueFromInstance(t, r) {
		if (We.has(r)) {
			const n = so(r);
			return (n && n.default) || 0;
		}
		return (r = Ea.has(r) ? r : Qn(r)), t.getAttribute(r);
	}
	measureInstanceViewportBox() {
		return X();
	}
	scrapeMotionValuesFromProps(t, r) {
		return Ca(t, r);
	}
	build(t, r, n, o) {
		Zn(t, r, n, this.isSVGTag, o.transformTemplate);
	}
	renderInstance(t, r, n, o) {
		Sa(t, r, n, o);
	}
	mount(t) {
		(this.isSVGTag = Jn(t.tagName)), super.mount(t);
	}
}
const km = (e, t) =>
		Xn(e)
			? new Lm(t, { enableHardwareAcceleration: !1 })
			: new Mm(t, { enableHardwareAcceleration: !0 }),
	Vm = { layout: { ProjectionNode: Cl, MeasureLayout: xl } },
	Rm = { ...sh, ...Sd, ...cm, ...Vm },
	Pg = Ff((e, t) => pd(e, t, Rm, km));
function Vl() {
	const e = b.useRef(!1);
	return (
		Wn(
			() => (
				(e.current = !0),
				() => {
					e.current = !1;
				}
			),
			[]
		),
		e
	);
}
function Dm() {
	const e = Vl(),
		[t, r] = b.useState(0),
		n = b.useCallback(() => {
			e.current && r(t + 1);
		}, [t]);
	return [b.useCallback(() => K.postRender(n), [n]), t];
}
class Fm extends b.Component {
	getSnapshotBeforeUpdate(t) {
		const r = this.props.childRef.current;
		if (r && t.isPresent && !this.props.isPresent) {
			const n = this.props.sizeRef.current;
			(n.height = r.offsetHeight || 0),
				(n.width = r.offsetWidth || 0),
				(n.top = r.offsetTop),
				(n.left = r.offsetLeft);
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
}
function Im({ children: e, isPresent: t }) {
	const r = b.useId(),
		n = b.useRef(null),
		o = b.useRef({ width: 0, height: 0, top: 0, left: 0 });
	return (
		b.useInsertionEffect(() => {
			const { width: s, height: i, top: a, left: l } = o.current;
			if (t || !n.current || !s || !i) return;
			n.current.dataset.motionPopId = r;
			const u = document.createElement('style');
			return (
				document.head.appendChild(u),
				u.sheet &&
					u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
				() => {
					document.head.removeChild(u);
				}
			);
		}, [t]),
		b.createElement(Fm, { isPresent: t, childRef: n, sizeRef: o }, b.cloneElement(e, { ref: n }))
	);
}
const en = ({
	children: e,
	initial: t,
	isPresent: r,
	onExitComplete: n,
	custom: o,
	presenceAffectsLayout: s,
	mode: i,
}) => {
	const a = Aa(Om),
		l = b.useId(),
		u = b.useMemo(
			() => ({
				id: l,
				initial: t,
				isPresent: r,
				custom: o,
				onExitComplete: (c) => {
					a.set(c, !0);
					for (const d of a.values()) if (!d) return;
					n && n();
				},
				register: (c) => (a.set(c, !1), () => a.delete(c)),
			}),
			s ? void 0 : [r]
		);
	return (
		b.useMemo(() => {
			a.forEach((c, d) => a.set(d, !1));
		}, [r]),
		b.useEffect(() => {
			!r && !a.size && n && n();
		}, [r]),
		i === 'popLayout' && (e = b.createElement(Im, { isPresent: r }, e)),
		b.createElement($r.Provider, { value: u }, e)
	);
};
function Om() {
	return new Map();
}
function Nm(e) {
	return b.useEffect(() => () => e(), []);
}
const Je = (e) => e.key || '';
function Bm(e, t) {
	e.forEach((r) => {
		const n = Je(r);
		t.set(n, r);
	});
}
function jm(e) {
	const t = [];
	return (
		b.Children.forEach(e, (r) => {
			b.isValidElement(r) && t.push(r);
		}),
		t
	);
}
const Tg = ({
	children: e,
	custom: t,
	initial: r = !0,
	onExitComplete: n,
	exitBeforeEnter: o,
	presenceAffectsLayout: s = !0,
	mode: i = 'sync',
}) => {
	const a = b.useContext(_n).forceRender || Dm()[0],
		l = Vl(),
		u = jm(e);
	let c = u;
	const d = b.useRef(new Map()).current,
		p = b.useRef(c),
		h = b.useRef(new Map()).current,
		g = b.useRef(!0);
	if (
		(Wn(() => {
			(g.current = !1), Bm(u, h), (p.current = c);
		}),
		Nm(() => {
			(g.current = !0), h.clear(), d.clear();
		}),
		g.current)
	)
		return b.createElement(
			b.Fragment,
			null,
			c.map((x) =>
				b.createElement(
					en,
					{
						key: Je(x),
						isPresent: !0,
						initial: r ? void 0 : !1,
						presenceAffectsLayout: s,
						mode: i,
					},
					x
				)
			)
		);
	c = [...c];
	const P = p.current.map(Je),
		$ = u.map(Je),
		A = P.length;
	for (let x = 0; x < A; x++) {
		const T = P[x];
		$.indexOf(T) === -1 && !d.has(T) && d.set(T, void 0);
	}
	return (
		i === 'wait' && d.size && (c = []),
		d.forEach((x, T) => {
			if ($.indexOf(T) !== -1) return;
			const C = h.get(T);
			if (!C) return;
			const M = P.indexOf(T);
			let L = x;
			if (!L) {
				const k = () => {
					h.delete(T), d.delete(T);
					const f = p.current.findIndex((E) => E.key === T);
					if ((p.current.splice(f, 1), !d.size)) {
						if (((p.current = u), l.current === !1)) return;
						a(), n && n();
					}
				};
				(L = b.createElement(
					en,
					{
						key: Je(C),
						isPresent: !1,
						onExitComplete: k,
						custom: t,
						presenceAffectsLayout: s,
						mode: i,
					},
					C
				)),
					d.set(T, L);
			}
			c.splice(M, 0, L);
		}),
		(c = c.map((x) => {
			const T = x.key;
			return d.has(T)
				? x
				: b.createElement(en, { key: Je(x), isPresent: !0, presenceAffectsLayout: s, mode: i }, x);
		})),
		b.createElement(b.Fragment, null, d.size ? c : c.map((x) => b.cloneElement(x)))
	);
};
var qe = {
		ease: [0.36, 0.66, 0.4, 1],
		easeIn: [0.4, 0, 1, 1],
		easeOut: [0, 0, 0.2, 1],
		easeInOut: [0.4, 0, 0.2, 1],
		spring: [0.155, 1.105, 0.295, 1.12],
		springOut: [0.57, -0.15, 0.62, 0.07],
		softSpring: [0.16, 1.11, 0.3, 1.02],
	},
	$g = {
		scaleSpring: {
			enter: {
				transform: 'scale(1)',
				opacity: 1,
				transition: { type: 'spring', bounce: 0, duration: 0.3 },
			},
			exit: { transform: 'scale(0.6)', opacity: 0, transition: { type: 'easeOut', duration: 0.2 } },
		},
		scaleSpringOpacity: {
			initial: { opacity: 0, transform: 'scale(0.8)' },
			enter: {
				opacity: 1,
				transform: 'scale(1)',
				transition: { type: 'spring', bounce: 0, duration: 0.3 },
			},
			exit: {
				opacity: 0,
				transform: 'scale(0.7)',
				transition: { type: 'easeOut', bounce: 0, duration: 0.18 },
			},
		},
		scale: { enter: { scale: 1 }, exit: { scale: 0.95 } },
		scaleFadeIn: {
			enter: { transform: 'scale(1)', opacity: 1, transition: { duration: 0.25, ease: qe.easeIn } },
			exit: {
				transform: 'scale(0.95)',
				opacity: 0,
				transition: { duration: 0.2, ease: qe.easeOut },
			},
		},
		scaleInOut: {
			enter: { transform: 'scale(1)', opacity: 1, transition: { duration: 0.4, ease: qe.ease } },
			exit: { transform: 'scale(1.03)', opacity: 0, transition: { duration: 0.3, ease: qe.ease } },
		},
		fade: {
			enter: { opacity: 1, transition: { duration: 0.4, ease: qe.ease } },
			exit: { opacity: 0, transition: { duration: 0.3, ease: qe.ease } },
		},
		collapse: {
			enter: {
				opacity: 1,
				height: 'auto',
				transition: {
					height: { type: 'spring', bounce: 0, duration: 0.3 },
					opacity: { easings: 'ease', duration: 0.4 },
				},
			},
			exit: { opacity: 0, height: 0, transition: { easings: 'ease', duration: 0.3 } },
		},
	};
function wg(e, t) {
	let {
			elementType: r = 'button',
			isDisabled: n,
			onPress: o,
			onPressStart: s,
			onPressEnd: i,
			onPressChange: a,
			preventFocusOnPress: l,
			allowFocusWhenDisabled: u,
			onClick: c,
			href: d,
			target: p,
			rel: h,
			type: g = 'button',
			allowTextSelectionOnPress: P,
		} = e,
		$;
	r === 'button'
		? ($ = { type: g, disabled: n })
		: ($ = {
				role: 'button',
				tabIndex: n ? void 0 : 0,
				href: r === 'a' && n ? void 0 : d,
				target: r === 'a' ? p : void 0,
				type: r === 'input' ? g : void 0,
				disabled: r === 'input' ? n : void 0,
				'aria-disabled': !n || r === 'input' ? void 0 : n,
				rel: r === 'a' ? h : void 0,
		  });
	let { pressProps: A, isPressed: x } = Tf({
			onPressStart: s,
			onPressEnd: i,
			onPressChange: a,
			onPress: o,
			isDisabled: n,
			preventFocusOnPress: l,
			allowTextSelectionOnPress: P,
			ref: t,
		}),
		{ focusableProps: T } = vc(e, t);
	u && (T.tabIndex = n ? -1 : T.tabIndex);
	let C = de(T, A, cu(e, { labelable: !0 }));
	return {
		isPressed: x,
		buttonProps: de($, C, {
			'aria-haspopup': e['aria-haspopup'],
			'aria-expanded': e['aria-expanded'],
			'aria-controls': e['aria-controls'],
			'aria-pressed': e['aria-pressed'],
			onClick: (M) => {
				c?.(M);
			},
		}),
	};
}
export {
	bo as $,
	Tg as A,
	ng as B,
	wg as C,
	iu as D,
	tg as E,
	vg as F,
	fg as G,
	gg as H,
	Wm as I,
	Ln as J,
	Pu as K,
	vc as L,
	cu as M,
	Zm as N,
	Nn as O,
	ig as P,
	og as Q,
	sg as R,
	zm as S,
	lg as T,
	$g as U,
	ug as V,
	ag as W,
	Ru as X,
	br as Y,
	eg as Z,
	yc as _,
	Jm as a,
	Qm as a0,
	mu as a1,
	ps as a2,
	Tf as a3,
	bc as a4,
	Xm as a5,
	qe as a6,
	$u as a7,
	Fn as b,
	mg as c,
	pg as d,
	_m as e,
	Ym as f,
	hg as g,
	hs as h,
	Su as i,
	qm as j,
	de as k,
	Nu as l,
	rg as m,
	Ae as n,
	qu as o,
	Gm as p,
	Ke as q,
	Ee as r,
	ue as s,
	dg as t,
	Um as u,
	Hm as v,
	cg as w,
	yg as x,
	Pg as y,
	bg as z,
};
