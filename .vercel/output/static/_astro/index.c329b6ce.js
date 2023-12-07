import { r as h, $ as D } from './index.9eb79d8f.js';
import { $ as jn } from './index.414e2829.js';
var Ar = { exports: {} },
	ot = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bn = h,
	Vn = Symbol.for('react.element'),
	Xn = Symbol.for('react.fragment'),
	Yn = Object.prototype.hasOwnProperty,
	qn = Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Jn = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ir(e, t, r) {
	var n,
		o = {},
		a = null,
		s = null;
	r !== void 0 && (a = '' + r),
		t.key !== void 0 && (a = '' + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (n in t) Yn.call(t, n) && !Jn.hasOwnProperty(n) && (o[n] = t[n]);
	if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
	return { $$typeof: Vn, type: e, key: a, ref: s, props: o, _owner: qn.current };
}
ot.Fragment = Xn;
ot.jsx = Ir;
ot.jsxs = Ir;
Ar.exports = ot;
var za = Ar.exports;
const Xe = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
	Nr = D.createContext(Xe),
	Zn = D.createContext(!1);
let Qn = !!(typeof window < 'u' && window.document && window.document.createElement),
	lt = new WeakMap();
function eo(e = !1) {
	let t = h.useContext(Nr),
		r = h.useRef(null);
	if (r.current === null && !e) {
		var n, o;
		let a =
			(o = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
			o === void 0 ||
			(n = o.ReactCurrentOwner) === null ||
			n === void 0
				? void 0
				: n.current;
		if (a) {
			let s = lt.get(a);
			s == null
				? lt.set(a, { id: t.current, state: a.memoizedState })
				: a.memoizedState !== s.state && ((t.current = s.id), lt.delete(a));
		}
		r.current = ++t.current;
	}
	return r.current;
}
function to(e) {
	let t = h.useContext(Nr);
	t === Xe &&
		!Qn &&
		console.warn(
			'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
		);
	let r = eo(!!e),
		n = `react-aria${t.prefix}`;
	return e || `${n}-${r}`;
}
function ro(e) {
	let t = D.useId(),
		[r] = h.useState(it()),
		n = r ? 'react-aria' : `react-aria${Xe.prefix}`;
	return e || `${n}-${t}`;
}
const no = typeof D.useId == 'function' ? ro : to;
function oo() {
	return !1;
}
function io() {
	return !0;
}
function ao(e) {
	return () => {};
}
function it() {
	return typeof D.useSyncExternalStore == 'function'
		? D.useSyncExternalStore(ao, oo, io)
		: h.useContext(Zn);
}
class so {
	getStringForLocale(t, r) {
		let n = this.strings[r];
		n || ((n = lo(r, this.strings, this.defaultLocale)), (this.strings[r] = n));
		let o = n[t];
		if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
		return o;
	}
	constructor(t, r = 'en-US') {
		(this.strings = { ...t }), (this.defaultLocale = r);
	}
}
function lo(e, t, r = 'en-US') {
	if (t[e]) return t[e];
	let n = uo(e);
	if (t[n]) return t[n];
	for (let o in t) if (o.startsWith(n + '-')) return t[o];
	return t[r];
}
function uo(e) {
	return Intl.Locale ? new Intl.Locale(e).language : e.split('-')[0];
}
const Yt = new Map(),
	qt = new Map();
class co {
	format(t, r) {
		let n = this.strings.getStringForLocale(t, this.locale);
		return typeof n == 'function' ? n(r, this) : n;
	}
	plural(t, r, n = 'cardinal') {
		let o = r['=' + t];
		if (o) return typeof o == 'function' ? o() : o;
		let a = this.locale + ':' + n,
			s = Yt.get(a);
		s || ((s = new Intl.PluralRules(this.locale, { type: n })), Yt.set(a, s));
		let l = s.select(t);
		return (o = r[l] || r.other), typeof o == 'function' ? o() : o;
	}
	number(t) {
		let r = qt.get(this.locale);
		return r || ((r = new Intl.NumberFormat(this.locale)), qt.set(this.locale, r)), r.format(t);
	}
	select(t, r) {
		let n = t[r] || t.other;
		return typeof n == 'function' ? n() : n;
	}
	constructor(t, r) {
		(this.locale = t), (this.strings = r);
	}
}
function fo(e, t) {
	if (t.has(e))
		throw new TypeError('Cannot initialize the same private elements twice on an object');
}
function po(e, t, r) {
	fo(e, t), t.set(e, r);
}
function Ga(e, t, r) {
	let [n, o] = h.useState(e || t),
		a = h.useRef(e !== void 0),
		s = e !== void 0;
	h.useEffect(() => {
		let p = a.current;
		p !== s &&
			console.warn(
				`WARN: A component changed from ${p ? 'controlled' : 'uncontrolled'} to ${
					s ? 'controlled' : 'uncontrolled'
				}.`
			),
			(a.current = s);
	}, [s]);
	let l = s ? e : n,
		c = h.useCallback(
			(p, ...v) => {
				let y = (b, ...g) => {
					r && (Object.is(l, b) || r(b, ...g)), s || (l = b);
				};
				typeof p == 'function'
					? (console.warn(
							'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320'
					  ),
					  o((g, ...$) => {
							let x = p(s ? l : g, ...$);
							return y(x, ...v), s ? g : x;
					  }))
					: (s || o(p), y(p, ...v));
			},
			[s, l, r]
		);
	return [l, c];
}
function $t(e, t = -1 / 0, r = 1 / 0) {
	return Math.min(Math.max(e, t), r);
}
function Or(e) {
	var t,
		r,
		n = '';
	if (typeof e == 'string' || typeof e == 'number') n += e;
	else if (typeof e == 'object')
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++) e[t] && (r = Or(e[t])) && (n && (n += ' '), (n += r));
		else for (t in e) e[t] && (n && (n += ' '), (n += t));
	return n;
}
function vo() {
	for (var e, t, r = 0, n = ''; r < arguments.length; )
		(e = arguments[r++]) && (t = Or(e)) && (n && (n += ' '), (n += t));
	return n;
}
const G = typeof document < 'u' ? D.useLayoutEffect : () => {};
function U(e) {
	const t = h.useRef(null);
	return (
		G(() => {
			t.current = e;
		}, [e]),
		h.useCallback((...r) => {
			const n = t.current;
			return n(...r);
		}, [])
	);
}
function go(e) {
	let [t, r] = h.useState(e),
		n = h.useRef(null),
		o = U(() => {
			let s = n.current.next();
			if (s.done) {
				n.current = null;
				return;
			}
			t === s.value ? o() : r(s.value);
		});
	G(() => {
		n.current && o();
	});
	let a = U((s) => {
		(n.current = s(t)), o();
	});
	return [t, a];
}
let bo = !!(typeof window < 'u' && window.document && window.document.createElement),
	Ye = new Map();
function Rt(e) {
	let [t, r] = h.useState(e),
		n = h.useRef(null),
		o = no(t),
		a = h.useCallback((s) => {
			n.current = s;
		}, []);
	return (
		bo && Ye.set(o, a),
		G(() => {
			let s = o;
			return () => {
				Ye.delete(s);
			};
		}, [o]),
		h.useEffect(() => {
			let s = n.current;
			s && ((n.current = null), r(s));
		}),
		o
	);
}
function mo(e, t) {
	if (e === t) return e;
	let r = Ye.get(e);
	if (r) return r(t), t;
	let n = Ye.get(t);
	return n ? (n(e), e) : t;
}
function _a(e = []) {
	let t = Rt(),
		[r, n] = go(t),
		o = h.useCallback(() => {
			n(function* () {
				yield t, yield document.getElementById(t) ? t : void 0;
			});
		}, [t, n]);
	return G(o, [t, o, ...e]), r;
}
function ho(...e) {
	return (...t) => {
		for (let r of e) typeof r == 'function' && r(...t);
	};
}
const ne = (e) => {
		var t;
		return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document;
	},
	yt = (e) => (e && 'window' in e && e.window === e ? e : ne(e).defaultView || window);
function Z(...e) {
	let t = { ...e[0] };
	for (let r = 1; r < e.length; r++) {
		let n = e[r];
		for (let o in n) {
			let a = t[o],
				s = n[o];
			typeof a == 'function' &&
			typeof s == 'function' &&
			o[0] === 'o' &&
			o[1] === 'n' &&
			o.charCodeAt(2) >= 65 &&
			o.charCodeAt(2) <= 90
				? (t[o] = ho(a, s))
				: (o === 'className' || o === 'UNSAFE_className') &&
				    typeof a == 'string' &&
				    typeof s == 'string'
				  ? (t[o] = vo(a, s))
				  : o === 'id' && a && s
				    ? (t.id = mo(a, s))
				    : (t[o] = s !== void 0 ? s : a);
		}
	}
	return t;
}
function Ua(...e) {
	return e.length === 1
		? e[0]
		: (t) => {
				for (let r of e) typeof r == 'function' ? r(t) : r != null && (r.current = t);
		  };
}
const $o = new Set(['id']),
	yo = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
	To = new Set(['href', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
	wo = /^(data-.*)$/;
function Eo(e, t = {}) {
	let { labelable: r, isLink: n, propNames: o } = t,
		a = {};
	for (const s in e)
		Object.prototype.hasOwnProperty.call(e, s) &&
			($o.has(s) || (r && yo.has(s)) || (n && To.has(s)) || o?.has(s) || wo.test(s)) &&
			(a[s] = e[s]);
	return a;
}
function J(e) {
	if (xo()) e.focus({ preventScroll: !0 });
	else {
		let t = Po(e);
		e.focus(), So(t);
	}
}
let Re = null;
function xo() {
	if (Re == null) {
		Re = !1;
		try {
			var e = document.createElement('div');
			e.focus({
				get preventScroll() {
					return (Re = !0), !0;
				},
			});
		} catch {}
	}
	return Re;
}
function Po(e) {
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
function So(e) {
	for (let { element: t, scrollTop: r, scrollLeft: n } of e) (t.scrollTop = r), (t.scrollLeft = n);
}
function at(e) {
	var t;
	return typeof window > 'u' || window.navigator == null
		? !1
		: ((t = window.navigator.userAgentData) === null || t === void 0
				? void 0
				: t.brands.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent);
}
function Ft(e) {
	var t;
	return typeof window < 'u' && window.navigator != null
		? e.test(
				((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) ||
					window.navigator.platform
		  )
		: !1;
}
function ve() {
	return Ft(/^Mac/i);
}
function Co() {
	return Ft(/^iPhone/i);
}
function Rr() {
	return Ft(/^iPad/i) || (ve() && navigator.maxTouchPoints > 1);
}
function Oe() {
	return Co() || Rr();
}
function ja() {
	return ve() || Oe();
}
function Lo() {
	return at(/AppleWebKit/i) && !Mo();
}
function Mo() {
	return at(/Chrome/i);
}
function Fr() {
	return at(/Android/i);
}
function ko() {
	return at(/Firefox/i);
}
const Ao = h.createContext({ isNative: !0, open: No });
function Ba() {
	return h.useContext(Ao);
}
function ue(e, t, r = !0) {
	var n, o;
	let { metaKey: a, ctrlKey: s, altKey: l, shiftKey: c } = t;
	ko() &&
		!((o = window.event) === null || o === void 0 || (n = o.type) === null || n === void 0) &&
		n.startsWith('key') &&
		e.target === '_blank' &&
		(ve() ? (a = !0) : (s = !0));
	let p =
		Lo() && ve() && !Rr()
			? new KeyboardEvent('keydown', {
					keyIdentifier: 'Enter',
					metaKey: a,
					ctrlKey: s,
					altKey: l,
					shiftKey: c,
			  })
			: new MouseEvent('click', {
					metaKey: a,
					ctrlKey: s,
					altKey: l,
					shiftKey: c,
					bubbles: !0,
					cancelable: !0,
			  });
	(ue.isOpening = r), J(e), e.dispatchEvent(p), (ue.isOpening = !1);
}
ue.isOpening = !1;
function Io(e, t) {
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
function No(e, t) {
	Io(e, (r) => ue(r, t));
}
let we = new Map(),
	Tt = new Set();
function Jt() {
	if (typeof window > 'u') return;
	let e = (r) => {
			let n = we.get(r.target);
			n || ((n = new Set()), we.set(r.target, n), r.target.addEventListener('transitioncancel', t)),
				n.add(r.propertyName);
		},
		t = (r) => {
			let n = we.get(r.target);
			if (
				n &&
				(n.delete(r.propertyName),
				n.size === 0 && (r.target.removeEventListener('transitioncancel', t), we.delete(r.target)),
				we.size === 0)
			) {
				for (let o of Tt) o();
				Tt.clear();
			}
		};
	document.body.addEventListener('transitionrun', e),
		document.body.addEventListener('transitionend', t);
}
typeof document < 'u' &&
	(document.readyState !== 'loading' ? Jt() : document.addEventListener('DOMContentLoaded', Jt));
function Kt(e) {
	requestAnimationFrame(() => {
		we.size === 0 ? e() : Tt.add(e);
	});
}
function Dt() {
	let e = h.useRef(new Map()),
		t = h.useCallback((o, a, s, l) => {
			let c = l?.once
				? (...p) => {
						e.current.delete(s), s(...p);
				  }
				: s;
			e.current.set(s, { type: a, eventTarget: o, fn: c, options: l }), o.addEventListener(a, s, l);
		}, []),
		r = h.useCallback((o, a, s, l) => {
			var c;
			let p = ((c = e.current.get(s)) === null || c === void 0 ? void 0 : c.fn) || s;
			o.removeEventListener(a, p, l), e.current.delete(s);
		}, []),
		n = h.useCallback(() => {
			e.current.forEach((o, a) => {
				r(o.eventTarget, o.type, a, o.options);
			});
		}, [r]);
	return (
		h.useEffect(() => n, [n]),
		{ addGlobalListener: t, removeGlobalListener: r, removeAllGlobalListeners: n }
	);
}
function Oo(e, t) {
	let { id: r, 'aria-label': n, 'aria-labelledby': o } = e;
	return (
		(r = Rt(r)),
		o && n
			? (o = [...new Set([r, ...o.trim().split(/\s+/)])].join(' '))
			: o && (o = o.trim().split(/\s+/).join(' ')),
		!n && !o && t && (n = t),
		{ id: r, 'aria-label': n, 'aria-labelledby': o }
	);
}
function Ro() {
	return typeof window.ResizeObserver < 'u';
}
function Fo(e) {
	const { ref: t, onResize: r } = e;
	h.useEffect(() => {
		let n = t?.current;
		if (n)
			if (Ro()) {
				const o = new window.ResizeObserver((a) => {
					a.length && r();
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
function Ht(e, t) {
	G(() => {
		if (e && e.ref && t)
			return (
				(e.ref.current = t.current),
				() => {
					e.ref.current = null;
				}
			);
	});
}
function Zt(e) {
	for (Qt(e) && (e = e.parentElement); e && !Qt(e); ) e = e.parentElement;
	return e || document.scrollingElement || document.documentElement;
}
function Qt(e) {
	let t = window.getComputedStyle(e);
	return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
let Ko = 0;
const ut = new Map();
function Do(e) {
	let [t, r] = h.useState(void 0);
	return (
		G(() => {
			if (!e) return;
			let n = ut.get(e);
			if (n) r(n.element.id);
			else {
				let o = `react-aria-description-${Ko++}`;
				r(o);
				let a = document.createElement('div');
				(a.id = o),
					(a.style.display = 'none'),
					(a.textContent = e),
					document.body.appendChild(a),
					(n = { refCount: 0, element: a }),
					ut.set(e, n);
			}
			return (
				n.refCount++,
				() => {
					--n.refCount === 0 && (n.element.remove(), ut.delete(e));
				}
			);
		}, [e]),
		{ 'aria-describedby': e ? t : void 0 }
	);
}
function Va(e, t, r, n) {
	let o = U(r),
		a = r == null;
	h.useEffect(() => {
		if (a) return;
		let s = e.current;
		return (
			s.addEventListener(t, o, n),
			() => {
				s.removeEventListener(t, o, n);
			}
		);
	}, [e, t, n, a, o]);
}
function Ho(e, t) {
	let r = er(e, t, 'left'),
		n = er(e, t, 'top'),
		o = t.offsetWidth,
		a = t.offsetHeight,
		s = e.scrollLeft,
		l = e.scrollTop,
		{ borderTopWidth: c, borderLeftWidth: p } = getComputedStyle(e),
		v = e.scrollLeft + parseInt(p, 10),
		y = e.scrollTop + parseInt(c, 10),
		b = v + e.clientWidth,
		g = y + e.clientHeight;
	r <= s ? (s = r - parseInt(p, 10)) : r + o > b && (s += r + o - b),
		n <= y ? (l = n - parseInt(c, 10)) : n + a > g && (l += n + a - g),
		(e.scrollLeft = s),
		(e.scrollTop = l);
}
function er(e, t, r) {
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
function Xa(e, t) {
	if (document.contains(e)) {
		let s = document.scrollingElement || document.documentElement;
		if (window.getComputedStyle(s).overflow === 'hidden') {
			let c = Zt(e);
			for (; e && c && e !== s && c !== s; ) Ho(c, e), (e = c), (c = Zt(e));
		} else {
			var r;
			let { left: c, top: p } = e.getBoundingClientRect();
			e == null ||
				(r = e.scrollIntoView) === null ||
				r === void 0 ||
				r.call(e, { block: 'nearest' });
			let { left: v, top: y } = e.getBoundingClientRect();
			if (Math.abs(c - v) > 1 || Math.abs(p - y) > 1) {
				var n, o, a;
				t == null ||
					(o = t.containingElement) === null ||
					o === void 0 ||
					(n = o.scrollIntoView) === null ||
					n === void 0 ||
					n.call(o, { block: 'center', inline: 'center' }),
					(a = e.scrollIntoView) === null || a === void 0 || a.call(e, { block: 'nearest' });
			}
		}
	}
}
function Ie(e) {
	return e.mozInputSource === 0 && e.isTrusted
		? !0
		: Fr() && e.pointerType
		  ? e.type === 'click' && e.buttons === 1
		  : e.detail === 0 && !e.pointerType;
}
function Kr(e) {
	return (
		(!Fr() && e.width === 0 && e.height === 0) ||
		(e.width === 1 &&
			e.height === 1 &&
			e.pressure === 0 &&
			e.detail === 0 &&
			e.pointerType === 'mouse')
	);
}
function Ya(e, t, r) {
	let n = h.useRef(t),
		o = U(() => {
			r && r(n.current);
		});
	h.useEffect(() => {
		var a;
		let s = e == null || (a = e.current) === null || a === void 0 ? void 0 : a.form;
		return (
			s?.addEventListener('reset', o),
			() => {
				s?.removeEventListener('reset', o);
			}
		);
	}, [e, o]);
}
const Wo = new Set([
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
	zo = new Set([
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
function Go(e) {
	if (Intl.Locale) {
		let r = new Intl.Locale(e).maximize().script;
		return r ? Wo.has(r) : !1;
	}
	let t = e.split('-')[0];
	return zo.has(t);
}
function Dr() {
	let e = (typeof navigator < 'u' && (navigator.language || navigator.userLanguage)) || 'en-US';
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = 'en-US';
	}
	return { locale: e, direction: Go(e) ? 'rtl' : 'ltr' };
}
let wt = Dr(),
	ke = new Set();
function tr() {
	wt = Dr();
	for (let e of ke) e(wt);
}
function _o() {
	let e = it(),
		[t, r] = h.useState(wt);
	return (
		h.useEffect(
			() => (
				ke.size === 0 && window.addEventListener('languagechange', tr),
				ke.add(r),
				() => {
					ke.delete(r), ke.size === 0 && window.removeEventListener('languagechange', tr);
				}
			),
			[]
		),
		e ? { locale: 'en-US', direction: 'ltr' } : t
	);
}
const Uo = D.createContext(null);
function Wt() {
	let e = _o();
	return h.useContext(Uo) || e;
}
const rr = new WeakMap();
function jo(e) {
	let t = rr.get(e);
	return t || ((t = new so(e)), rr.set(e, t)), t;
}
function Bo(e) {
	let { locale: t } = Wt(),
		r = h.useMemo(() => jo(e), [e]);
	return h.useMemo(() => new co(t, r), [t, r]);
}
let ct = new Map();
function qa(e) {
	let { locale: t } = Wt(),
		r =
			t +
			(e
				? Object.entries(e)
						.sort((o, a) => (o[0] < a[0] ? -1 : 1))
						.join()
				: '');
	if (ct.has(r)) return ct.get(r);
	let n = new Intl.Collator(t, e);
	return ct.set(r, n), n;
}
function Vo(e, t) {
	return t.get ? t.get.call(e) : t.value;
}
function Hr(e, t, r) {
	if (!t.has(e)) throw new TypeError('attempted to ' + r + ' private field on non-instance');
	return t.get(e);
}
function Xo(e, t) {
	var r = Hr(e, t, 'get');
	return Vo(e, r);
}
function Yo(e, t, r) {
	if (t.set) t.set.call(e, r);
	else {
		if (!t.writable) throw new TypeError('attempted to set read only private field');
		t.value = r;
	}
}
function nr(e, t, r) {
	var n = Hr(e, t, 'set');
	return Yo(e, n, r), r;
}
let Ee = 'default',
	Et = '',
	je = new WeakMap();
function or(e) {
	if (Oe()) {
		if (Ee === 'default') {
			const t = ne(e);
			(Et = t.documentElement.style.webkitUserSelect),
				(t.documentElement.style.webkitUserSelect = 'none');
		}
		Ee = 'disabled';
	} else
		(e instanceof HTMLElement || e instanceof SVGElement) &&
			(je.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function Fe(e) {
	if (Oe()) {
		if (Ee !== 'disabled') return;
		(Ee = 'restoring'),
			setTimeout(() => {
				Kt(() => {
					if (Ee === 'restoring') {
						const t = ne(e);
						t.documentElement.style.webkitUserSelect === 'none' &&
							(t.documentElement.style.webkitUserSelect = Et || ''),
							(Et = ''),
							(Ee = 'default');
					}
				});
			}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && je.has(e)) {
		let t = je.get(e);
		e.style.userSelect === 'none' && t && (e.style.userSelect = t),
			e.getAttribute('style') === '' && e.removeAttribute('style'),
			je.delete(e);
	}
}
const zt = D.createContext({ register: () => {} });
zt.displayName = 'PressResponderContext';
function qo(e) {
	let t = h.useContext(zt);
	if (t) {
		let { register: r, ...n } = t;
		(e = Z(n, e)), r();
	}
	return Ht(t, e.ref), e;
}
var Ke = new WeakMap();
class De {
	continuePropagation() {
		nr(this, Ke, !1);
	}
	get shouldStopPropagation() {
		return Xo(this, Ke);
	}
	constructor(t, r, n) {
		po(this, Ke, { writable: !0, value: void 0 }),
			nr(this, Ke, !0),
			(this.type = t),
			(this.pointerType = r),
			(this.target = n.currentTarget),
			(this.shiftKey = n.shiftKey),
			(this.metaKey = n.metaKey),
			(this.ctrlKey = n.ctrlKey),
			(this.altKey = n.altKey);
	}
}
const ir = Symbol('linkClicked');
function Jo(e) {
	let {
			onPress: t,
			onPressChange: r,
			onPressStart: n,
			onPressEnd: o,
			onPressUp: a,
			isDisabled: s,
			isPressed: l,
			preventFocusOnPress: c,
			shouldCancelOnPointerExit: p,
			allowTextSelectionOnPress: v,
			ref: y,
			...b
		} = qo(e),
		[g, $] = h.useState(!1),
		x = h.useRef({
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
		{ addGlobalListener: E, removeAllGlobalListeners: C } = Dt(),
		P = U((i, T) => {
			let k = x.current;
			if (s || k.didFirePressStart) return !1;
			let d = !0;
			if (((k.isTriggeringEvent = !0), n)) {
				let m = new De('pressstart', T, i);
				n(m), (d = m.shouldStopPropagation);
			}
			return r && r(!0), (k.isTriggeringEvent = !1), (k.didFirePressStart = !0), $(!0), d;
		}),
		S = U((i, T, k = !0) => {
			let d = x.current;
			if (!d.didFirePressStart) return !1;
			(d.ignoreClickAfterPress = !0), (d.didFirePressStart = !1), (d.isTriggeringEvent = !0);
			let m = !0;
			if (o) {
				let u = new De('pressend', T, i);
				o(u), (m = u.shouldStopPropagation);
			}
			if ((r && r(!1), $(!1), t && k && !s)) {
				let u = new De('press', T, i);
				t(u), m && (m = u.shouldStopPropagation);
			}
			return (d.isTriggeringEvent = !1), m;
		}),
		A = U((i, T) => {
			let k = x.current;
			if (s) return !1;
			if (a) {
				k.isTriggeringEvent = !0;
				let d = new De('pressup', T, i);
				return a(d), (k.isTriggeringEvent = !1), d.shouldStopPropagation;
			}
			return !0;
		}),
		I = U((i) => {
			let T = x.current;
			T.isPressed &&
				T.target &&
				(T.isOverTarget && T.pointerType != null && S(ee(T.target, i), T.pointerType, !1),
				(T.isPressed = !1),
				(T.isOverTarget = !1),
				(T.activePointerId = null),
				(T.pointerType = null),
				C(),
				v || Fe(T.target));
		}),
		N = U((i) => {
			p && I(i);
		}),
		H = h.useMemo(() => {
			let i = x.current,
				T = {
					onKeyDown(d) {
						if (dt(d.nativeEvent, d.currentTarget) && d.currentTarget.contains(d.target)) {
							var m;
							sr(d.target, d.key) && d.preventDefault();
							let u = !0;
							!i.isPressed &&
								!d.repeat &&
								((i.target = d.currentTarget),
								(i.isPressed = !0),
								(u = P(d, 'keyboard')),
								E(ne(d.currentTarget), 'keyup', k, !1)),
								u && d.stopPropagation(),
								d.metaKey &&
									ve() &&
									((m = i.metaKeyEvents) === null || m === void 0 || m.set(d.key, d.nativeEvent));
						} else d.key === 'Meta' && (i.metaKeyEvents = new Map());
					},
					onKeyUp(d) {
						dt(d.nativeEvent, d.currentTarget) &&
							!d.repeat &&
							d.currentTarget.contains(d.target) &&
							i.target &&
							A(ee(i.target, d), 'keyboard');
					},
					onClick(d) {
						if (
							!(d && !d.currentTarget.contains(d.target)) &&
							d &&
							d.button === 0 &&
							!i.isTriggeringEvent &&
							!ue.isOpening
						) {
							let m = !0;
							if (
								(s && d.preventDefault(),
								!i.ignoreClickAfterPress &&
									!i.ignoreEmulatedMouseEvents &&
									!i.isPressed &&
									(i.pointerType === 'virtual' || Ie(d.nativeEvent)))
							) {
								!s && !c && J(d.currentTarget);
								let u = P(d, 'virtual'),
									f = A(d, 'virtual'),
									w = S(d, 'virtual');
								m = u && f && w;
							}
							(i.ignoreEmulatedMouseEvents = !1),
								(i.ignoreClickAfterPress = !1),
								m && d.stopPropagation();
						}
					},
				},
				k = (d) => {
					var m;
					if (i.isPressed && i.target && dt(d, i.target)) {
						var u;
						sr(d.target, d.key) && d.preventDefault();
						let w = d.target,
							L = S(ee(i.target, d), 'keyboard', i.target.contains(w));
						C(),
							L && d.stopPropagation(),
							d.key !== 'Enter' &&
								Gt(i.target) &&
								i.target.contains(w) &&
								!d[ir] &&
								((d[ir] = !0), ue(i.target, d, !1)),
							(i.isPressed = !1),
							(u = i.metaKeyEvents) === null || u === void 0 || u.delete(d.key);
					} else if (
						d.key === 'Meta' &&
						!((m = i.metaKeyEvents) === null || m === void 0) &&
						m.size
					) {
						var f;
						let w = i.metaKeyEvents;
						i.metaKeyEvents = void 0;
						for (let L of w.values())
							(f = i.target) === null ||
								f === void 0 ||
								f.dispatchEvent(new KeyboardEvent('keyup', L));
					}
				};
			if (typeof PointerEvent < 'u') {
				(T.onPointerDown = (f) => {
					if (f.button !== 0 || !f.currentTarget.contains(f.target)) return;
					if (Kr(f.nativeEvent)) {
						i.pointerType = 'virtual';
						return;
					}
					ft(f.currentTarget) && f.preventDefault(), (i.pointerType = f.pointerType);
					let w = !0;
					i.isPressed ||
						((i.isPressed = !0),
						(i.isOverTarget = !0),
						(i.activePointerId = f.pointerId),
						(i.target = f.currentTarget),
						!s && !c && J(f.currentTarget),
						v || or(i.target),
						(w = P(f, i.pointerType)),
						E(ne(f.currentTarget), 'pointermove', d, !1),
						E(ne(f.currentTarget), 'pointerup', m, !1),
						E(ne(f.currentTarget), 'pointercancel', u, !1)),
						w && f.stopPropagation();
				}),
					(T.onMouseDown = (f) => {
						f.currentTarget.contains(f.target) &&
							f.button === 0 &&
							(ft(f.currentTarget) && f.preventDefault(), f.stopPropagation());
					}),
					(T.onPointerUp = (f) => {
						!f.currentTarget.contains(f.target) ||
							i.pointerType === 'virtual' ||
							(f.button === 0 && me(f, f.currentTarget) && A(f, i.pointerType || f.pointerType));
					});
				let d = (f) => {
						f.pointerId === i.activePointerId &&
							(i.target && me(f, i.target)
								? !i.isOverTarget &&
								  i.pointerType != null &&
								  ((i.isOverTarget = !0), P(ee(i.target, f), i.pointerType))
								: i.target &&
								  i.isOverTarget &&
								  i.pointerType != null &&
								  ((i.isOverTarget = !1), S(ee(i.target, f), i.pointerType, !1), N(f)));
					},
					m = (f) => {
						f.pointerId === i.activePointerId &&
							i.isPressed &&
							f.button === 0 &&
							i.target &&
							(me(f, i.target) && i.pointerType != null
								? S(ee(i.target, f), i.pointerType)
								: i.isOverTarget && i.pointerType != null && S(ee(i.target, f), i.pointerType, !1),
							(i.isPressed = !1),
							(i.isOverTarget = !1),
							(i.activePointerId = null),
							(i.pointerType = null),
							C(),
							v || Fe(i.target));
					},
					u = (f) => {
						I(f);
					};
				T.onDragStart = (f) => {
					f.currentTarget.contains(f.target) && I(f);
				};
			} else {
				(T.onMouseDown = (u) => {
					if (u.button !== 0 || !u.currentTarget.contains(u.target)) return;
					if ((ft(u.currentTarget) && u.preventDefault(), i.ignoreEmulatedMouseEvents)) {
						u.stopPropagation();
						return;
					}
					(i.isPressed = !0),
						(i.isOverTarget = !0),
						(i.target = u.currentTarget),
						(i.pointerType = Ie(u.nativeEvent) ? 'virtual' : 'mouse'),
						!s && !c && J(u.currentTarget),
						P(u, i.pointerType) && u.stopPropagation(),
						E(ne(u.currentTarget), 'mouseup', d, !1);
				}),
					(T.onMouseEnter = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						let f = !0;
						i.isPressed &&
							!i.ignoreEmulatedMouseEvents &&
							i.pointerType != null &&
							((i.isOverTarget = !0), (f = P(u, i.pointerType))),
							f && u.stopPropagation();
					}),
					(T.onMouseLeave = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						let f = !0;
						i.isPressed &&
							!i.ignoreEmulatedMouseEvents &&
							i.pointerType != null &&
							((i.isOverTarget = !1), (f = S(u, i.pointerType, !1)), N(u)),
							f && u.stopPropagation();
					}),
					(T.onMouseUp = (u) => {
						u.currentTarget.contains(u.target) &&
							!i.ignoreEmulatedMouseEvents &&
							u.button === 0 &&
							A(u, i.pointerType || 'mouse');
					});
				let d = (u) => {
					if (u.button === 0) {
						if (((i.isPressed = !1), C(), i.ignoreEmulatedMouseEvents)) {
							i.ignoreEmulatedMouseEvents = !1;
							return;
						}
						i.target && me(u, i.target) && i.pointerType != null
							? S(ee(i.target, u), i.pointerType)
							: i.target &&
							  i.isOverTarget &&
							  i.pointerType != null &&
							  S(ee(i.target, u), i.pointerType, !1),
							(i.isOverTarget = !1);
					}
				};
				(T.onTouchStart = (u) => {
					if (!u.currentTarget.contains(u.target)) return;
					let f = Zo(u.nativeEvent);
					if (!f) return;
					(i.activePointerId = f.identifier),
						(i.ignoreEmulatedMouseEvents = !0),
						(i.isOverTarget = !0),
						(i.isPressed = !0),
						(i.target = u.currentTarget),
						(i.pointerType = 'touch'),
						!s && !c && J(u.currentTarget),
						v || or(i.target),
						P(u, i.pointerType) && u.stopPropagation(),
						E(yt(u.currentTarget), 'scroll', m, !0);
				}),
					(T.onTouchMove = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						if (!i.isPressed) {
							u.stopPropagation();
							return;
						}
						let f = ar(u.nativeEvent, i.activePointerId),
							w = !0;
						f && me(f, u.currentTarget)
							? !i.isOverTarget &&
							  i.pointerType != null &&
							  ((i.isOverTarget = !0), (w = P(u, i.pointerType)))
							: i.isOverTarget &&
							  i.pointerType != null &&
							  ((i.isOverTarget = !1), (w = S(u, i.pointerType, !1)), N(u)),
							w && u.stopPropagation();
					}),
					(T.onTouchEnd = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						if (!i.isPressed) {
							u.stopPropagation();
							return;
						}
						let f = ar(u.nativeEvent, i.activePointerId),
							w = !0;
						f && me(f, u.currentTarget) && i.pointerType != null
							? (A(u, i.pointerType), (w = S(u, i.pointerType)))
							: i.isOverTarget && i.pointerType != null && (w = S(u, i.pointerType, !1)),
							w && u.stopPropagation(),
							(i.isPressed = !1),
							(i.activePointerId = null),
							(i.isOverTarget = !1),
							(i.ignoreEmulatedMouseEvents = !0),
							i.target && !v && Fe(i.target),
							C();
					}),
					(T.onTouchCancel = (u) => {
						u.currentTarget.contains(u.target) && (u.stopPropagation(), i.isPressed && I(u));
					});
				let m = (u) => {
					i.isPressed &&
						u.target.contains(i.target) &&
						I({ currentTarget: i.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
				};
				T.onDragStart = (u) => {
					u.currentTarget.contains(u.target) && I(u);
				};
			}
			return T;
		}, [E, s, c, C, v, I, N, S, P, A]);
	return (
		h.useEffect(
			() => () => {
				var i;
				v || Fe((i = x.current.target) !== null && i !== void 0 ? i : void 0);
			},
			[v]
		),
		{ isPressed: l || g, pressProps: Z(b, H) }
	);
}
function Gt(e) {
	return e.tagName === 'A' && e.hasAttribute('href');
}
function dt(e, t) {
	const { key: r, code: n } = e,
		o = t,
		a = o.getAttribute('role');
	return (
		(r === 'Enter' || r === ' ' || r === 'Spacebar' || n === 'Space') &&
		!(
			(o instanceof yt(o).HTMLInputElement && !Wr(o, r)) ||
			o instanceof yt(o).HTMLTextAreaElement ||
			o.isContentEditable
		) &&
		!((a === 'link' || (!a && Gt(o))) && r !== 'Enter')
	);
}
function Zo(e) {
	const { targetTouches: t } = e;
	return t.length > 0 ? t[0] : null;
}
function ar(e, t) {
	const r = e.changedTouches;
	for (let n = 0; n < r.length; n++) {
		const o = r[n];
		if (o.identifier === t) return o;
	}
	return null;
}
function ee(e, t) {
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
	};
}
function Qo(e) {
	let t = 0,
		r = 0;
	return (
		e.width !== void 0 ? (t = e.width / 2) : e.radiusX !== void 0 && (t = e.radiusX),
		e.height !== void 0 ? (r = e.height / 2) : e.radiusY !== void 0 && (r = e.radiusY),
		{ top: e.clientY - r, right: e.clientX + t, bottom: e.clientY + r, left: e.clientX - t }
	);
}
function ei(e, t) {
	return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function me(e, t) {
	let r = t.getBoundingClientRect(),
		n = Qo(e);
	return ei(r, n);
}
function ft(e) {
	return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function sr(e, t) {
	return e instanceof HTMLInputElement
		? !Wr(e, t)
		: e instanceof HTMLButtonElement
		  ? e.type !== 'submit' && e.type !== 'reset'
		  : !Gt(e);
}
const ti = new Set([
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
function Wr(e, t) {
	return e.type === 'checkbox' || e.type === 'radio' ? t === ' ' : ti.has(e.type);
}
function ri({ children: e }) {
	let t = h.useMemo(() => ({ register: () => {} }), []);
	return D.createElement(zt.Provider, { value: t }, e);
}
class ni {
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
function zr(e) {
	let t = h.useRef({ isFocused: !1, observer: null });
	G(() => {
		const n = t.current;
		return () => {
			n.observer && (n.observer.disconnect(), (n.observer = null));
		};
	}, []);
	let r = U((n) => {
		e?.(n);
	});
	return h.useCallback(
		(n) => {
			if (
				n.target instanceof HTMLButtonElement ||
				n.target instanceof HTMLInputElement ||
				n.target instanceof HTMLTextAreaElement ||
				n.target instanceof HTMLSelectElement
			) {
				t.current.isFocused = !0;
				let o = n.target,
					a = (s) => {
						(t.current.isFocused = !1),
							o.disabled && r(new ni('blur', s)),
							t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
					};
				o.addEventListener('focusout', a, { once: !0 }),
					(t.current.observer = new MutationObserver(() => {
						if (t.current.isFocused && o.disabled) {
							var s;
							(s = t.current.observer) === null || s === void 0 || s.disconnect();
							let l = o === document.activeElement ? null : document.activeElement;
							o.dispatchEvent(new FocusEvent('blur', { relatedTarget: l })),
								o.dispatchEvent(new FocusEvent('focusout', { bubbles: !0, relatedTarget: l }));
						}
					})),
					t.current.observer.observe(o, { attributes: !0, attributeFilter: ['disabled'] });
			}
		},
		[r]
	);
}
function Gr(e) {
	let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
	const a = h.useCallback(
			(c) => {
				if (c.target === c.currentTarget) return n && n(c), o && o(!1), !0;
			},
			[n, o]
		),
		s = zr(a),
		l = h.useCallback(
			(c) => {
				c.target === c.currentTarget &&
					document.activeElement === c.target &&
					(r && r(c), o && o(!0), s(c));
			},
			[o, r, s]
		);
	return {
		focusProps: { onFocus: !t && (r || o || n) ? l : void 0, onBlur: !t && (n || o) ? a : void 0 },
	};
}
let ie = null,
	Ne = new Set(),
	lr = !1,
	ge = !1,
	xt = !1;
const oi = { Tab: !0, Escape: !0 };
function st(e, t) {
	for (let r of Ne) r(e, t);
}
function ii(e) {
	return !(
		e.metaKey ||
		(!ve() && e.altKey) ||
		e.ctrlKey ||
		e.key === 'Control' ||
		e.key === 'Shift' ||
		e.key === 'Meta'
	);
}
function ur(e) {
	(ge = !0), ii(e) && ((ie = 'keyboard'), st('keyboard', e));
}
function he(e) {
	(ie = 'pointer'),
		(e.type === 'mousedown' || e.type === 'pointerdown') && ((ge = !0), st('pointer', e));
}
function ai(e) {
	Ie(e) && ((ge = !0), (ie = 'virtual'));
}
function si(e) {
	e.target === window ||
		e.target === document ||
		(!ge && !xt && ((ie = 'virtual'), st('virtual', e)), (ge = !1), (xt = !1));
}
function li() {
	(ge = !1), (xt = !0);
}
function qe() {
	if (typeof window > 'u' || lr) return;
	let e = HTMLElement.prototype.focus;
	(HTMLElement.prototype.focus = function () {
		(ge = !0), e.apply(this, arguments);
	}),
		document.addEventListener('keydown', ur, !0),
		document.addEventListener('keyup', ur, !0),
		document.addEventListener('click', ai, !0),
		window.addEventListener('focus', si, !0),
		window.addEventListener('blur', li, !1),
		typeof PointerEvent < 'u'
			? (document.addEventListener('pointerdown', he, !0),
			  document.addEventListener('pointermove', he, !0),
			  document.addEventListener('pointerup', he, !0))
			: (document.addEventListener('mousedown', he, !0),
			  document.addEventListener('mousemove', he, !0),
			  document.addEventListener('mouseup', he, !0)),
		(lr = !0);
}
typeof document < 'u' &&
	(document.readyState !== 'loading' ? qe() : document.addEventListener('DOMContentLoaded', qe));
function _r() {
	return ie !== 'pointer';
}
function ui() {
	return ie;
}
function Ja(e) {
	(ie = e), st(e, null);
}
function Za() {
	qe();
	let [e, t] = h.useState(ie);
	return (
		h.useEffect(() => {
			let r = () => {
				t(ie);
			};
			return (
				Ne.add(r),
				() => {
					Ne.delete(r);
				}
			);
		}, []),
		it() ? null : e
	);
}
const ci = new Set([
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
function di(e, t, r) {
	var n;
	return (
		(e =
			e ||
			(r?.target instanceof HTMLInputElement &&
				!ci.has(r == null || (n = r.target) === null || n === void 0 ? void 0 : n.type)) ||
			r?.target instanceof HTMLTextAreaElement ||
			(r?.target instanceof HTMLElement && r?.target.isContentEditable)),
		!(e && t === 'keyboard' && r instanceof KeyboardEvent && !oi[r.key])
	);
}
function fi(e, t, r) {
	qe(),
		h.useEffect(() => {
			let n = (o, a) => {
				di(!!r?.isTextInput, o, a) && e(_r());
			};
			return (
				Ne.add(n),
				() => {
					Ne.delete(n);
				}
			);
		}, t);
}
function _t(e) {
	let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e,
		a = h.useRef({ isFocusWithin: !1 }),
		s = h.useCallback(
			(p) => {
				a.current.isFocusWithin &&
					!p.currentTarget.contains(p.relatedTarget) &&
					((a.current.isFocusWithin = !1), r && r(p), o && o(!1));
			},
			[r, o, a]
		),
		l = zr(s),
		c = h.useCallback(
			(p) => {
				!a.current.isFocusWithin &&
					document.activeElement === p.target &&
					(n && n(p), o && o(!0), (a.current.isFocusWithin = !0), l(p));
			},
			[n, o, l]
		);
	return t
		? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
		: { focusWithinProps: { onFocus: c, onBlur: s } };
}
let Je = !1,
	pt = 0;
function Pt() {
	(Je = !0),
		setTimeout(() => {
			Je = !1;
		}, 50);
}
function cr(e) {
	e.pointerType === 'touch' && Pt();
}
function pi() {
	if (!(typeof document > 'u'))
		return (
			typeof PointerEvent < 'u'
				? document.addEventListener('pointerup', cr)
				: document.addEventListener('touchend', Pt),
			pt++,
			() => {
				pt--,
					!(pt > 0) &&
						(typeof PointerEvent < 'u'
							? document.removeEventListener('pointerup', cr)
							: document.removeEventListener('touchend', Pt));
			}
		);
}
function Qa(e) {
	let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e,
		[a, s] = h.useState(!1),
		l = h.useRef({
			isHovered: !1,
			ignoreEmulatedMouseEvents: !1,
			pointerType: '',
			target: null,
		}).current;
	h.useEffect(pi, []);
	let { hoverProps: c, triggerHoverEnd: p } = h.useMemo(() => {
		let v = (g, $) => {
				if (
					((l.pointerType = $),
					o || $ === 'touch' || l.isHovered || !g.currentTarget.contains(g.target))
				)
					return;
				l.isHovered = !0;
				let x = g.currentTarget;
				(l.target = x),
					t && t({ type: 'hoverstart', target: x, pointerType: $ }),
					r && r(!0),
					s(!0);
			},
			y = (g, $) => {
				if (((l.pointerType = ''), (l.target = null), $ === 'touch' || !l.isHovered)) return;
				l.isHovered = !1;
				let x = g.currentTarget;
				n && n({ type: 'hoverend', target: x, pointerType: $ }), r && r(!1), s(!1);
			},
			b = {};
		return (
			typeof PointerEvent < 'u'
				? ((b.onPointerEnter = (g) => {
						(Je && g.pointerType === 'mouse') || v(g, g.pointerType);
				  }),
				  (b.onPointerLeave = (g) => {
						!o && g.currentTarget.contains(g.target) && y(g, g.pointerType);
				  }))
				: ((b.onTouchStart = () => {
						l.ignoreEmulatedMouseEvents = !0;
				  }),
				  (b.onMouseEnter = (g) => {
						!l.ignoreEmulatedMouseEvents && !Je && v(g, 'mouse'),
							(l.ignoreEmulatedMouseEvents = !1);
				  }),
				  (b.onMouseLeave = (g) => {
						!o && g.currentTarget.contains(g.target) && y(g, 'mouse');
				  })),
			{ hoverProps: b, triggerHoverEnd: y }
		);
	}, [t, r, n, o, l]);
	return (
		h.useEffect(() => {
			o && p({ currentTarget: l.target }, l.pointerType);
		}, [o]),
		{ hoverProps: c, isHovered: a }
	);
}
function vi(e) {
	let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e,
		a = h.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
		s = U((c) => {
			r && He(c, t) && (o && o(c), (a.current.isPointerDown = !0));
		}),
		l = U((c) => {
			r && r(c);
		});
	h.useEffect(() => {
		let c = a.current;
		if (n) return;
		const p = t.current,
			v = ne(p);
		if (typeof PointerEvent < 'u') {
			let y = (b) => {
				c.isPointerDown && He(b, t) && l(b), (c.isPointerDown = !1);
			};
			return (
				v.addEventListener('pointerdown', s, !0),
				v.addEventListener('pointerup', y, !0),
				() => {
					v.removeEventListener('pointerdown', s, !0), v.removeEventListener('pointerup', y, !0);
				}
			);
		} else {
			let y = (g) => {
					c.ignoreEmulatedMouseEvents
						? (c.ignoreEmulatedMouseEvents = !1)
						: c.isPointerDown && He(g, t) && l(g),
						(c.isPointerDown = !1);
				},
				b = (g) => {
					(c.ignoreEmulatedMouseEvents = !0),
						c.isPointerDown && He(g, t) && l(g),
						(c.isPointerDown = !1);
				};
			return (
				v.addEventListener('mousedown', s, !0),
				v.addEventListener('mouseup', y, !0),
				v.addEventListener('touchstart', s, !0),
				v.addEventListener('touchend', b, !0),
				() => {
					v.removeEventListener('mousedown', s, !0),
						v.removeEventListener('mouseup', y, !0),
						v.removeEventListener('touchstart', s, !0),
						v.removeEventListener('touchend', b, !0);
				}
			);
		}
	}, [t, n, s, l]);
}
function He(e, t) {
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
function dr(e) {
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
function gi(e) {
	return {
		keyboardProps: e.isDisabled ? {} : { onKeyDown: dr(e.onKeyDown), onKeyUp: dr(e.onKeyUp) },
	};
}
const bi = 500;
function es(e) {
	let {
		isDisabled: t,
		onLongPressStart: r,
		onLongPressEnd: n,
		onLongPress: o,
		threshold: a = bi,
		accessibilityDescription: s,
	} = e;
	const l = h.useRef();
	let { addGlobalListener: c, removeGlobalListener: p } = Dt(),
		{ pressProps: v } = Jo({
			isDisabled: t,
			onPressStart(b) {
				if (
					(b.continuePropagation(),
					(b.pointerType === 'mouse' || b.pointerType === 'touch') &&
						(r && r({ ...b, type: 'longpressstart' }),
						(l.current = setTimeout(() => {
							b.target.dispatchEvent(new PointerEvent('pointercancel', { bubbles: !0 })),
								o && o({ ...b, type: 'longpress' }),
								(l.current = void 0);
						}, a)),
						b.pointerType === 'touch'))
				) {
					let g = ($) => {
						$.preventDefault();
					};
					c(b.target, 'contextmenu', g, { once: !0 }),
						c(
							window,
							'pointerup',
							() => {
								setTimeout(() => {
									p(b.target, 'contextmenu', g);
								}, 30);
							},
							{ once: !0 }
						);
				}
			},
			onPressEnd(b) {
				l.current && clearTimeout(l.current),
					n &&
						(b.pointerType === 'mouse' || b.pointerType === 'touch') &&
						n({ ...b, type: 'longpressend' });
			},
		}),
		y = Do(o && !t ? s : void 0);
	return { longPressProps: Z(v, y) };
}
function Ur(e) {
	if (ui() === 'virtual') {
		let t = document.activeElement;
		Kt(() => {
			document.activeElement === t && document.contains(e) && J(e);
		});
	} else J(e);
}
function mi(e) {
	if (!(e instanceof HTMLElement) && !(e instanceof SVGElement)) return !1;
	let { display: t, visibility: r } = e.style,
		n = t !== 'none' && r !== 'hidden' && r !== 'collapse';
	if (n) {
		const { getComputedStyle: o } = e.ownerDocument.defaultView;
		let { display: a, visibility: s } = o(e);
		n = a !== 'none' && s !== 'hidden' && s !== 'collapse';
	}
	return n;
}
function hi(e, t) {
	return (
		!e.hasAttribute('hidden') &&
		(e.nodeName === 'DETAILS' && t && t.nodeName !== 'SUMMARY' ? e.hasAttribute('open') : !0)
	);
}
function jr(e, t) {
	return (
		e.nodeName !== '#comment' && mi(e) && hi(e, t) && (!e.parentElement || jr(e.parentElement, e))
	);
}
const fr = D.createContext(null);
let F = null;
function $i(e) {
	let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e,
		a = h.useRef(null),
		s = h.useRef(null),
		l = h.useRef([]),
		{ parentNode: c } = h.useContext(fr) || {},
		p = h.useMemo(() => new St({ scopeRef: l }), [l]);
	G(() => {
		let b = c || z.root;
		if (z.getTreeNode(b.scopeRef) && F && !Qe(F, b.scopeRef)) {
			let g = z.getTreeNode(F);
			g && (b = g);
		}
		b.addChild(p), z.addNode(p);
	}, [p, c]),
		G(() => {
			let b = z.getTreeNode(l);
			b && (b.contain = !!r);
		}, [r]),
		G(() => {
			var b;
			let g = (b = a.current) === null || b === void 0 ? void 0 : b.nextSibling,
				$ = [];
			for (; g && g !== s.current; ) $.push(g), (g = g.nextSibling);
			l.current = $;
		}, [t]),
		Si(l, n, r),
		Ei(l, r),
		Li(l, n, r),
		Pi(l, o),
		h.useEffect(() => {
			let b = document.activeElement,
				g = null;
			if (j(b, l.current)) {
				for (let $ of z.traverse()) $.scopeRef && j(b, $.scopeRef.current) && (g = $);
				g === z.getTreeNode(l) && (F = g.scopeRef);
			}
		}, [l]),
		G(
			() => () => {
				var b, g, $;
				let x =
					($ =
						(g = z.getTreeNode(l)) === null ||
						g === void 0 ||
						(b = g.parent) === null ||
						b === void 0
							? void 0
							: b.scopeRef) !== null && $ !== void 0
						? $
						: null;
				(l === F || Qe(l, F)) && (!x || z.getTreeNode(x)) && (F = x), z.removeTreeNode(l);
			},
			[l]
		);
	let v = h.useMemo(() => yi(l), []),
		y = h.useMemo(() => ({ focusManager: v, parentNode: p }), [p, v]);
	return D.createElement(
		fr.Provider,
		{ value: y },
		D.createElement('span', { 'data-focus-scope-start': !0, hidden: !0, ref: a }),
		t,
		D.createElement('span', { 'data-focus-scope-end': !0, hidden: !0, ref: s })
	);
}
function yi(e) {
	return {
		focusNext(t = {}) {
			let r = e.current,
				{ from: n, tabbable: o, wrap: a, accept: s } = t,
				l = n || document.activeElement,
				c = r[0].previousElementSibling,
				p = fe(r),
				v = le(p, { tabbable: o, accept: s }, r);
			v.currentNode = j(l, r) ? l : c;
			let y = v.nextNode();
			return !y && a && ((v.currentNode = c), (y = v.nextNode())), y && oe(y, !0), y;
		},
		focusPrevious(t = {}) {
			let r = e.current,
				{ from: n, tabbable: o, wrap: a, accept: s } = t,
				l = n || document.activeElement,
				c = r[r.length - 1].nextElementSibling,
				p = fe(r),
				v = le(p, { tabbable: o, accept: s }, r);
			v.currentNode = j(l, r) ? l : c;
			let y = v.previousNode();
			return !y && a && ((v.currentNode = c), (y = v.previousNode())), y && oe(y, !0), y;
		},
		focusFirst(t = {}) {
			let r = e.current,
				{ tabbable: n, accept: o } = t,
				a = fe(r),
				s = le(a, { tabbable: n, accept: o }, r);
			s.currentNode = r[0].previousElementSibling;
			let l = s.nextNode();
			return l && oe(l, !0), l;
		},
		focusLast(t = {}) {
			let r = e.current,
				{ tabbable: n, accept: o } = t,
				a = fe(r),
				s = le(a, { tabbable: n, accept: o }, r);
			s.currentNode = r[r.length - 1].nextElementSibling;
			let l = s.previousNode();
			return l && oe(l, !0), l;
		},
	};
}
const Ut = [
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
	Ti = Ut.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
Ut.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const wi = Ut.join(':not([hidden]):not([tabindex="-1"]),');
function fe(e) {
	return e[0].parentElement;
}
function Ae(e) {
	let t = z.getTreeNode(F);
	for (; t && t.scopeRef !== e; ) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function Ei(e, t) {
	let r = h.useRef(),
		n = h.useRef();
	G(() => {
		let o = e.current;
		if (!t) {
			n.current && (cancelAnimationFrame(n.current), (n.current = void 0));
			return;
		}
		let a = (c) => {
				if (c.key !== 'Tab' || c.altKey || c.ctrlKey || c.metaKey || !Ae(e)) return;
				let p = document.activeElement,
					v = e.current;
				if (!v || !j(p, v)) return;
				let y = fe(v),
					b = le(y, { tabbable: !0 }, v);
				if (!p) return;
				b.currentNode = p;
				let g = c.shiftKey ? b.previousNode() : b.nextNode();
				g ||
					((b.currentNode = c.shiftKey
						? v[v.length - 1].nextElementSibling
						: v[0].previousElementSibling),
					(g = c.shiftKey ? b.previousNode() : b.nextNode())),
					c.preventDefault(),
					g && oe(g, !0);
			},
			s = (c) => {
				(!F || Qe(F, e)) && j(c.target, e.current)
					? ((F = e), (r.current = c.target))
					: Ae(e) && !Ze(c.target, e)
					  ? r.current
							? r.current.focus()
							: F && F.current && et(F.current)
					  : Ae(e) && (r.current = c.target);
			},
			l = (c) => {
				n.current && cancelAnimationFrame(n.current),
					(n.current = requestAnimationFrame(() => {
						if (document.activeElement && Ae(e) && !Ze(document.activeElement, e))
							if (((F = e), document.body.contains(c.target))) {
								var p;
								(r.current = c.target), (p = r.current) === null || p === void 0 || p.focus();
							} else F.current && et(F.current);
					}));
			};
		return (
			document.addEventListener('keydown', a, !1),
			document.addEventListener('focusin', s, !1),
			o?.forEach((c) => c.addEventListener('focusin', s, !1)),
			o?.forEach((c) => c.addEventListener('focusout', l, !1)),
			() => {
				document.removeEventListener('keydown', a, !1),
					document.removeEventListener('focusin', s, !1),
					o?.forEach((c) => c.removeEventListener('focusin', s, !1)),
					o?.forEach((c) => c.removeEventListener('focusout', l, !1));
			}
		);
	}, [e, t]),
		G(
			() => () => {
				n.current && cancelAnimationFrame(n.current);
			},
			[n]
		);
}
function Br(e) {
	return Ze(e);
}
function j(e, t) {
	return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function Ze(e, t = null) {
	if (e instanceof Element && e.closest('[data-react-aria-top-layer]')) return !0;
	for (let { scopeRef: r } of z.traverse(z.getTreeNode(t))) if (r && j(e, r.current)) return !0;
	return !1;
}
function xi(e) {
	return Ze(e, F);
}
function Qe(e, t) {
	var r;
	let n = (r = z.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
	for (; n; ) {
		if (n.scopeRef === e) return !0;
		n = n.parent;
	}
	return !1;
}
function oe(e, t = !1) {
	if (e != null && !t)
		try {
			Ur(e);
		} catch {}
	else if (e != null)
		try {
			e.focus();
		} catch {}
}
function et(e, t = !0) {
	let r = e[0].previousElementSibling,
		n = fe(e),
		o = le(n, { tabbable: t }, e);
	o.currentNode = r;
	let a = o.nextNode();
	t &&
		!a &&
		((n = fe(e)), (o = le(n, { tabbable: !1 }, e)), (o.currentNode = r), (a = o.nextNode())),
		oe(a);
}
function Pi(e, t) {
	const r = D.useRef(t);
	h.useEffect(() => {
		r.current && ((F = e), !j(document.activeElement, F.current) && e.current && et(e.current)),
			(r.current = !1);
	}, [e]);
}
function Si(e, t, r) {
	G(() => {
		if (t || r) return;
		let n = e.current,
			o = (a) => {
				let s = a.target;
				j(s, e.current) ? (F = e) : Br(s) || (F = null);
			};
		return (
			document.addEventListener('focusin', o, !1),
			n?.forEach((a) => a.addEventListener('focusin', o, !1)),
			() => {
				document.removeEventListener('focusin', o, !1),
					n?.forEach((a) => a.removeEventListener('focusin', o, !1));
			}
		);
	}, [e, t, r]);
}
function Ci(e) {
	let t = z.getTreeNode(F);
	for (; t && t.scopeRef !== e; ) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function Li(e, t, r) {
	const n = h.useRef(typeof document < 'u' ? document.activeElement : null);
	G(() => {
		let o = e.current;
		if (!t || r) return;
		let a = () => {
			(!F || Qe(F, e)) && j(document.activeElement, e.current) && (F = e);
		};
		return (
			document.addEventListener('focusin', a, !1),
			o?.forEach((s) => s.addEventListener('focusin', a, !1)),
			() => {
				document.removeEventListener('focusin', a, !1),
					o?.forEach((s) => s.removeEventListener('focusin', a, !1));
			}
		);
	}, [e, r]),
		G(() => {
			if (!t) return;
			let o = (a) => {
				if (a.key !== 'Tab' || a.altKey || a.ctrlKey || a.metaKey || !Ae(e)) return;
				let s = document.activeElement;
				if (!j(s, e.current)) return;
				let l = z.getTreeNode(e);
				if (!l) return;
				let c = l.nodeToRestore,
					p = le(document.body, { tabbable: !0 });
				p.currentNode = s;
				let v = a.shiftKey ? p.previousNode() : p.nextNode();
				if (
					((!c || !document.body.contains(c) || c === document.body) &&
						((c = void 0), (l.nodeToRestore = void 0)),
					(!v || !j(v, e.current)) && c)
				) {
					p.currentNode = c;
					do v = a.shiftKey ? p.previousNode() : p.nextNode();
					while (j(v, e.current));
					a.preventDefault(), a.stopPropagation(), v ? oe(v, !0) : Br(c) ? oe(c, !0) : s.blur();
				}
			};
			return (
				r || document.addEventListener('keydown', o, !0),
				() => {
					r || document.removeEventListener('keydown', o, !0);
				}
			);
		}, [e, t, r]),
		G(() => {
			if (!t) return;
			let o = z.getTreeNode(e);
			if (o) {
				var a;
				return (
					(o.nodeToRestore = (a = n.current) !== null && a !== void 0 ? a : void 0),
					() => {
						let s = z.getTreeNode(e);
						if (!s) return;
						let l = s.nodeToRestore;
						if (
							t &&
							l &&
							(j(document.activeElement, e.current) ||
								(document.activeElement === document.body && Ci(e)))
						) {
							let c = z.clone();
							requestAnimationFrame(() => {
								if (document.activeElement === document.body) {
									let p = c.getTreeNode(e);
									for (; p; ) {
										if (p.nodeToRestore && document.body.contains(p.nodeToRestore)) {
											oe(p.nodeToRestore);
											return;
										}
										p = p.parent;
									}
									for (p = c.getTreeNode(e); p; ) {
										if (p.scopeRef && p.scopeRef.current && z.getTreeNode(p.scopeRef)) {
											et(p.scopeRef.current, !0);
											return;
										}
										p = p.parent;
									}
								}
							});
						}
					}
				);
			}
		}, [e, t]);
}
function le(e, t, r) {
	let n = t?.tabbable ? wi : Ti,
		o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode(a) {
				var s;
				return !(t == null || (s = t.from) === null || s === void 0) && s.contains(a)
					? NodeFilter.FILTER_REJECT
					: a.matches(n) && jr(a) && (!r || j(a, r)) && (!t?.accept || t.accept(a))
					  ? NodeFilter.FILTER_ACCEPT
					  : NodeFilter.FILTER_SKIP;
			},
		});
	return t?.from && (o.currentNode = t.from), o;
}
class jt {
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(t) {
		return this.fastMap.get(t);
	}
	addTreeNode(t, r, n) {
		let o = this.fastMap.get(r ?? null);
		if (!o) return;
		let a = new St({ scopeRef: t });
		o.addChild(a), (a.parent = o), this.fastMap.set(t, a), n && (a.nodeToRestore = n);
	}
	addNode(t) {
		this.fastMap.set(t.scopeRef, t);
	}
	removeTreeNode(t) {
		if (t === null) return;
		let r = this.fastMap.get(t);
		if (!r) return;
		let n = r.parent;
		for (let a of this.traverse())
			a !== r &&
				r.nodeToRestore &&
				a.nodeToRestore &&
				r.scopeRef &&
				r.scopeRef.current &&
				j(a.nodeToRestore, r.scopeRef.current) &&
				(a.nodeToRestore = r.nodeToRestore);
		let o = r.children;
		n && (n.removeChild(r), o.size > 0 && o.forEach((a) => n && n.addChild(a))),
			this.fastMap.delete(r.scopeRef);
	}
	*traverse(t = this.root) {
		if ((t.scopeRef != null && (yield t), t.children.size > 0))
			for (let r of t.children) yield* this.traverse(r);
	}
	clone() {
		var t;
		let r = new jt();
		var n;
		for (let o of this.traverse())
			r.addTreeNode(
				o.scopeRef,
				(n = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !== null && n !== void 0
					? n
					: null,
				o.nodeToRestore
			);
		return r;
	}
	constructor() {
		(this.fastMap = new Map()),
			(this.root = new St({ scopeRef: null })),
			this.fastMap.set(null, this.root);
	}
}
class St {
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
let z = new jt();
function ts(e = {}) {
	let { autoFocus: t = !1, isTextInput: r, within: n } = e,
		o = h.useRef({ isFocused: !1, isFocusVisible: t || _r() }),
		[a, s] = h.useState(!1),
		[l, c] = h.useState(() => o.current.isFocused && o.current.isFocusVisible),
		p = h.useCallback(() => c(o.current.isFocused && o.current.isFocusVisible), []),
		v = h.useCallback(
			(g) => {
				(o.current.isFocused = g), s(g), p();
			},
			[p]
		);
	fi(
		(g) => {
			(o.current.isFocusVisible = g), p();
		},
		[],
		{ isTextInput: r }
	);
	let { focusProps: y } = Gr({ isDisabled: n, onFocusChange: v }),
		{ focusWithinProps: b } = _t({ isDisabled: !n, onFocusWithinChange: v });
	return { isFocused: a, isFocusVisible: l, focusProps: n ? b : y };
}
let Mi = D.createContext(null);
function ki(e) {
	let t = h.useContext(Mi) || {};
	Ht(t, e);
	let { ref: r, ...n } = t;
	return n;
}
function Ai(e, t) {
	let { focusProps: r } = Gr(e),
		{ keyboardProps: n } = gi(e),
		o = Z(r, n),
		a = ki(t),
		s = e.isDisabled ? {} : a,
		l = h.useRef(e.autoFocus);
	return (
		h.useEffect(() => {
			l.current && t.current && Ur(t.current), (l.current = !1);
		}, [t]),
		{
			focusableProps: Z(
				{ ...o, tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0 },
				s
			),
		}
	);
}
const pr = {
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
function Ii(e = {}) {
	let { style: t, isFocusable: r } = e,
		[n, o] = h.useState(!1),
		{ focusWithinProps: a } = _t({ isDisabled: !r, onFocusWithinChange: (l) => o(l) }),
		s = h.useMemo(() => (n ? t : t ? { ...pr, ...t } : pr), [n]);
	return { visuallyHiddenProps: { ...a, style: s } };
}
function Ni(e) {
	let { children: t, elementType: r = 'div', isFocusable: n, style: o, ...a } = e,
		{ visuallyHiddenProps: s } = Ii(e);
	return D.createElement(r, Z(a, s), t);
}
function Oi(e) {
	return e && e.__esModule ? e.default : e;
}
const vr = { top: 'top', bottom: 'top', left: 'left', right: 'left' },
	tt = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' },
	Ri = { top: 'left', left: 'top' },
	Ct = { top: 'height', left: 'width' },
	Fi = { width: 'totalWidth', height: 'totalHeight' },
	We = {};
let $e = typeof document < 'u' && window.visualViewport;
function gr(e) {
	let t = 0,
		r = 0,
		n = 0,
		o = 0,
		a = 0,
		s = 0,
		l = {};
	if (e.tagName === 'BODY') {
		let v = document.documentElement;
		(n = v.clientWidth), (o = v.clientHeight);
		var c;
		t = (c = $e?.width) !== null && c !== void 0 ? c : n;
		var p;
		(r = (p = $e?.height) !== null && p !== void 0 ? p : o),
			(l.top = v.scrollTop || e.scrollTop),
			(l.left = v.scrollLeft || e.scrollLeft);
	} else
		({ width: t, height: r, top: a, left: s } = Pe(e)),
			(l.top = e.scrollTop),
			(l.left = e.scrollLeft),
			(n = t),
			(o = r);
	return { width: t, height: r, totalWidth: n, totalHeight: o, scroll: l, top: a, left: s };
}
function Ki(e) {
	return { top: e.scrollTop, left: e.scrollLeft, width: e.scrollWidth, height: e.scrollHeight };
}
function br(e, t, r, n, o, a) {
	let s = o.scroll[e],
		l = n[Ct[e]],
		c = t - a - s,
		p = t + a - s + r;
	return c < 0 ? -c : p > l ? Math.max(l - p, -c) : 0;
}
function Di(e) {
	let t = window.getComputedStyle(e);
	return {
		top: parseInt(t.marginTop, 10) || 0,
		bottom: parseInt(t.marginBottom, 10) || 0,
		left: parseInt(t.marginLeft, 10) || 0,
		right: parseInt(t.marginRight, 10) || 0,
	};
}
function mr(e) {
	if (We[e]) return We[e];
	let [t, r] = e.split(' '),
		n = vr[t] || 'right',
		o = Ri[n];
	vr[r] || (r = 'center');
	let a = Ct[n],
		s = Ct[o];
	return (
		(We[e] = { placement: t, crossPlacement: r, axis: n, crossAxis: o, size: a, crossSize: s }),
		We[e]
	);
}
function vt(e, t, r, n, o, a, s, l, c, p) {
	let { placement: v, crossPlacement: y, axis: b, crossAxis: g, size: $, crossSize: x } = n,
		E = {};
	(E[g] = e[g]),
		y === 'center' ? (E[g] += (e[x] - r[x]) / 2) : y !== g && (E[g] += e[x] - r[x]),
		(E[g] += a);
	const C = e[g] - r[x] + c + p,
		P = e[g] + e[x] - c - p;
	if (((E[g] = $t(E[g], C, P)), v === b)) {
		const S = l ? s[$] : t[Fi[$]];
		E[tt[b]] = Math.floor(S - e[b] + o);
	} else E[b] = Math.floor(e[b] + e[$] + o);
	return E;
}
function Hi(e, t, r, n, o, a) {
	return e.top != null
		? Math.max(0, t.height + t.top + t.scroll.top - (r.top + e.top) - (o.top + o.bottom + a))
		: Math.max(0, n.top + r.top - (t.top + t.scroll.top) - (o.top + o.bottom + a));
}
function hr(e, t, r, n, o, a) {
	let { placement: s, axis: l, size: c } = a;
	return s === l
		? Math.max(0, r[l] - e[l] - e.scroll[l] + t[l] - n[l] - n[tt[l]] - o)
		: Math.max(0, e[c] + e[l] + e.scroll[l] - t[l] - r[l] - r[c] - n[l] - n[tt[l]] - o);
}
function Wi(e, t, r, n, o, a, s, l, c, p, v, y, b, g, $, x) {
	let E = mr(e),
		{ size: C, crossAxis: P, crossSize: S, placement: A, crossPlacement: I } = E,
		N = vt(t, l, r, E, v, y, p, b, $, x),
		H = v,
		i = hr(l, p, t, o, a + v, E);
	if (s && n[C] > i) {
		let R = mr(`${tt[A]} ${I}`),
			W = vt(t, l, r, R, v, y, p, b, $, x);
		hr(l, p, t, o, a + v, R) > i && ((E = R), (N = W), (H = v));
	}
	let T = br(P, N[P], r[S], l, c, a);
	N[P] += T;
	let k = Hi(N, l, p, t, o, a);
	g && g < k && (k = g),
		(r.height = Math.min(r.height, k)),
		(N = vt(t, l, r, E, H, y, p, b, $, x)),
		(T = br(P, N[P], r[S], l, c, a)),
		(N[P] += T);
	let d = {},
		m = t[P] + 0.5 * t[S] - r[P];
	const u = $ / 2 + x,
		f = r[S] - $ / 2 - x,
		w = t[P] - r[P] + $ / 2,
		L = t[P] + t[S] - r[P] - $ / 2,
		O = $t(m, w, L);
	return (
		(d[P] = $t(O, u, f)),
		{
			position: N,
			maxHeight: k,
			arrowOffsetLeft: d.left,
			arrowOffsetTop: d.top,
			placement: E.placement,
		}
	);
}
function zi(e) {
	let {
			placement: t,
			targetNode: r,
			overlayNode: n,
			scrollNode: o,
			padding: a,
			shouldFlip: s,
			boundaryElement: l,
			offset: c,
			crossOffset: p,
			maxHeight: v,
			arrowSize: y = 0,
			arrowBoundaryOffset: b = 0,
		} = e,
		g = n instanceof HTMLElement ? Gi(n) : document.documentElement,
		$ = g === document.documentElement;
	const x = window.getComputedStyle(g).position;
	let E = !!x && x !== 'static',
		C = $ ? Pe(r) : $r(r, g);
	if (!$) {
		let { marginTop: i, marginLeft: T } = window.getComputedStyle(r);
		(C.top += parseInt(i, 10) || 0), (C.left += parseInt(T, 10) || 0);
	}
	let P = Pe(n),
		S = Di(n);
	(P.width += S.left + S.right), (P.height += S.top + S.bottom);
	let A = Ki(o),
		I = gr(l),
		N = gr(g),
		H = l.tagName === 'BODY' ? Pe(g) : $r(g, l);
	return Wi(t, C, P, A, S, a, s, I, N, H, c, p, E, v, y, b);
}
function Pe(e) {
	let { top: t, left: r, width: n, height: o } = e.getBoundingClientRect(),
		{ scrollTop: a, scrollLeft: s, clientTop: l, clientLeft: c } = document.documentElement;
	return { top: t + a - l, left: r + s - c, width: n, height: o };
}
function $r(e, t) {
	let r = window.getComputedStyle(e),
		n;
	if (r.position === 'fixed') {
		let { top: o, left: a, width: s, height: l } = e.getBoundingClientRect();
		n = { top: o, left: a, width: s, height: l };
	} else {
		n = Pe(e);
		let o = Pe(t),
			a = window.getComputedStyle(t);
		(o.top += (parseInt(a.borderTopWidth, 10) || 0) - t.scrollTop),
			(o.left += (parseInt(a.borderLeftWidth, 10) || 0) - t.scrollLeft),
			(n.top -= o.top),
			(n.left -= o.left);
	}
	return (n.top -= parseInt(r.marginTop, 10) || 0), (n.left -= parseInt(r.marginLeft, 10) || 0), n;
}
function Gi(e) {
	let t = e.offsetParent;
	if (
		(t &&
			t === document.body &&
			window.getComputedStyle(t).position === 'static' &&
			!yr(t) &&
			(t = document.documentElement),
		t == null)
	)
		for (t = e.parentElement; t && !yr(t); ) t = t.parentElement;
	return t || document.documentElement;
}
function yr(e) {
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
const Vr = new WeakMap();
function _i(e) {
	let { triggerRef: t, isOpen: r, onClose: n } = e;
	h.useEffect(() => {
		if (!r || n === null) return;
		let o = (a) => {
			let s = a.target;
			if (!t.current || (s instanceof Node && !s.contains(t.current))) return;
			let l = n || Vr.get(t.current);
			l && l();
		};
		return (
			window.addEventListener('scroll', o, !0),
			() => {
				window.removeEventListener('scroll', o, !0);
			}
		);
	}, [r, n, t]);
}
let X = typeof document < 'u' && window.visualViewport;
function rs(e) {
	let { direction: t } = Wt(),
		{
			arrowSize: r = 0,
			targetRef: n,
			overlayRef: o,
			scrollRef: a = o,
			placement: s = 'bottom',
			containerPadding: l = 12,
			shouldFlip: c = !0,
			boundaryElement: p = typeof document < 'u' ? document.body : null,
			offset: v = 0,
			crossOffset: y = 0,
			shouldUpdatePosition: b = !0,
			isOpen: g = !0,
			onClose: $,
			maxHeight: x,
			arrowBoundaryOffset: E = 0,
		} = e,
		[C, P] = h.useState({
			position: {},
			arrowOffsetLeft: void 0,
			arrowOffsetTop: void 0,
			maxHeight: void 0,
			placement: void 0,
		}),
		S = [b, s, o.current, n.current, a.current, l, c, p, v, y, g, t, x, E, r],
		A = h.useCallback(() => {
			if (b === !1 || !g || !o.current || !n.current || !a.current || !p) return;
			let H = zi({
				placement: ji(s, t),
				overlayNode: o.current,
				targetNode: n.current,
				scrollNode: a.current,
				padding: l,
				shouldFlip: c,
				boundaryElement: p,
				offset: v,
				crossOffset: y,
				maxHeight: x,
				arrowSize: r,
				arrowBoundaryOffset: E,
			});
			Object.keys(H.position).forEach((i) => (o.current.style[i] = H.position[i] + 'px')),
				(o.current.style.maxHeight = H.maxHeight != null ? H.maxHeight + 'px' : void 0),
				P(H);
		}, S);
	G(A, S), Ui(A), Fo({ ref: o, onResize: A });
	let I = h.useRef(!1);
	G(() => {
		let H,
			i = () => {
				(I.current = !0),
					clearTimeout(H),
					(H = setTimeout(() => {
						I.current = !1;
					}, 500)),
					A();
			};
		return (
			X?.addEventListener('resize', i),
			X?.addEventListener('scroll', i),
			() => {
				X?.removeEventListener('resize', i), X?.removeEventListener('scroll', i);
			}
		);
	}, [A]);
	let N = h.useCallback(() => {
		I.current || $();
	}, [$, I]);
	return (
		_i({ triggerRef: n, isOpen: g, onClose: $ && N }),
		{
			overlayProps: {
				style: { position: 'absolute', zIndex: 1e5, ...C.position, maxHeight: C.maxHeight },
			},
			placement: C.placement,
			arrowProps: {
				'aria-hidden': 'true',
				role: 'presentation',
				style: { left: C.arrowOffsetLeft, top: C.arrowOffsetTop },
			},
			updatePosition: A,
		}
	);
}
function Ui(e) {
	G(
		() => (
			window.addEventListener('resize', e, !1),
			() => {
				window.removeEventListener('resize', e, !1);
			}
		),
		[e]
	);
}
function ji(e, t) {
	return t === 'rtl'
		? e.replace('start', 'right').replace('end', 'left')
		: e.replace('start', 'left').replace('end', 'right');
}
const te = [];
function ns(e, t) {
	let {
		onClose: r,
		shouldCloseOnBlur: n,
		isOpen: o,
		isDismissable: a = !1,
		isKeyboardDismissDisabled: s = !1,
		shouldCloseOnInteractOutside: l,
	} = e;
	h.useEffect(
		() => (
			o && te.push(t),
			() => {
				let $ = te.indexOf(t);
				$ >= 0 && te.splice($, 1);
			}
		),
		[o, t]
	);
	let c = () => {
			te[te.length - 1] === t && r && r();
		},
		p = ($) => {
			(!l || l($.target)) && te[te.length - 1] === t && ($.stopPropagation(), $.preventDefault());
		},
		v = ($) => {
			(!l || l($.target)) &&
				(te[te.length - 1] === t && ($.stopPropagation(), $.preventDefault()), c());
		},
		y = ($) => {
			$.key === 'Escape' && !s && ($.stopPropagation(), $.preventDefault(), c());
		};
	vi({ ref: t, onInteractOutside: a && o ? v : null, onInteractOutsideStart: p });
	let { focusWithinProps: b } = _t({
			isDisabled: !n,
			onBlurWithin: ($) => {
				!$.relatedTarget || xi($.relatedTarget) || ((!l || l($.relatedTarget)) && r());
			},
		}),
		g = ($) => {
			$.target === $.currentTarget && $.preventDefault();
		};
	return { overlayProps: { onKeyDown: y, ...b }, underlayProps: { onPointerDown: g } };
}
function os(e, t, r) {
	let { type: n } = e,
		{ isOpen: o } = t;
	h.useEffect(() => {
		r && r.current && Vr.set(r.current, t.close);
	});
	let a;
	n === 'menu' ? (a = !0) : n === 'listbox' && (a = 'listbox');
	let s = Rt();
	return {
		triggerProps: {
			'aria-haspopup': a,
			'aria-expanded': o,
			'aria-controls': o ? s : null,
			onPress: t.toggle,
		},
		overlayProps: { id: s },
	};
}
var Xr = {},
	Yr = {};
Yr = { dismiss: 'تجاهل' };
var qr = {};
qr = { dismiss: 'Отхвърляне' };
var Jr = {};
Jr = { dismiss: 'Odstranit' };
var Zr = {};
Zr = { dismiss: 'Luk' };
var Qr = {};
Qr = { dismiss: 'Schließen' };
var en = {};
en = { dismiss: 'Απόρριψη' };
var tn = {};
tn = { dismiss: 'Dismiss' };
var rn = {};
rn = { dismiss: 'Descartar' };
var nn = {};
nn = { dismiss: 'Lõpeta' };
var on = {};
on = { dismiss: 'Hylkää' };
var an = {};
an = { dismiss: 'Rejeter' };
var sn = {};
sn = { dismiss: 'התעלם' };
var ln = {};
ln = { dismiss: 'Odbaci' };
var un = {};
un = { dismiss: 'Elutasítás' };
var cn = {};
cn = { dismiss: 'Ignora' };
var dn = {};
dn = { dismiss: '閉じる' };
var fn = {};
fn = { dismiss: '무시' };
var pn = {};
pn = { dismiss: 'Atmesti' };
var vn = {};
vn = { dismiss: 'Nerādīt' };
var gn = {};
gn = { dismiss: 'Lukk' };
var bn = {};
bn = { dismiss: 'Negeren' };
var mn = {};
mn = { dismiss: 'Zignoruj' };
var hn = {};
hn = { dismiss: 'Descartar' };
var $n = {};
$n = { dismiss: 'Dispensar' };
var yn = {};
yn = { dismiss: 'Revocare' };
var Tn = {};
Tn = { dismiss: 'Пропустить' };
var wn = {};
wn = { dismiss: 'Zrušiť' };
var En = {};
En = { dismiss: 'Opusti' };
var xn = {};
xn = { dismiss: 'Odbaci' };
var Pn = {};
Pn = { dismiss: 'Avvisa' };
var Sn = {};
Sn = { dismiss: 'Kapat' };
var Cn = {};
Cn = { dismiss: 'Скасувати' };
var Ln = {};
Ln = { dismiss: '取消' };
var Mn = {};
Mn = { dismiss: '關閉' };
Xr = {
	'ar-AE': Yr,
	'bg-BG': qr,
	'cs-CZ': Jr,
	'da-DK': Zr,
	'de-DE': Qr,
	'el-GR': en,
	'en-US': tn,
	'es-ES': rn,
	'et-EE': nn,
	'fi-FI': on,
	'fr-FR': an,
	'he-IL': sn,
	'hr-HR': ln,
	'hu-HU': un,
	'it-IT': cn,
	'ja-JP': dn,
	'ko-KR': fn,
	'lt-LT': pn,
	'lv-LV': vn,
	'nb-NO': gn,
	'nl-NL': bn,
	'pl-PL': mn,
	'pt-BR': hn,
	'pt-PT': $n,
	'ro-RO': yn,
	'ru-RU': Tn,
	'sk-SK': wn,
	'sl-SI': En,
	'sr-SP': xn,
	'sv-SE': Pn,
	'tr-TR': Sn,
	'uk-UA': Cn,
	'zh-CN': Ln,
	'zh-TW': Mn,
};
function is(e) {
	let { onDismiss: t, ...r } = e,
		n = Bo(Oi(Xr)),
		o = Oo(r, n.format('dismiss')),
		a = () => {
			t && t();
		};
	return D.createElement(Ni, null, D.createElement('button', { ...o, tabIndex: -1, onClick: a }));
}
let Se = new WeakMap(),
	Y = [];
function as(e, t = document.body) {
	let r = new Set(e),
		n = new Set(),
		o = (c) => {
			for (let b of c.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))
				r.add(b);
			let p = (b) => {
					if (
						r.has(b) ||
						(n.has(b.parentElement) && b.parentElement.getAttribute('role') !== 'row')
					)
						return NodeFilter.FILTER_REJECT;
					for (let g of r) if (b.contains(g)) return NodeFilter.FILTER_SKIP;
					return NodeFilter.FILTER_ACCEPT;
				},
				v = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT, { acceptNode: p }),
				y = p(c);
			if ((y === NodeFilter.FILTER_ACCEPT && a(c), y !== NodeFilter.FILTER_REJECT)) {
				let b = v.nextNode();
				for (; b != null; ) a(b), (b = v.nextNode());
			}
		},
		a = (c) => {
			var p;
			let v = (p = Se.get(c)) !== null && p !== void 0 ? p : 0;
			(c.getAttribute('aria-hidden') === 'true' && v === 0) ||
				(v === 0 && c.setAttribute('aria-hidden', 'true'), n.add(c), Se.set(c, v + 1));
		};
	Y.length && Y[Y.length - 1].disconnect(), o(t);
	let s = new MutationObserver((c) => {
		for (let p of c)
			if (
				!(p.type !== 'childList' || p.addedNodes.length === 0) &&
				![...r, ...n].some((v) => v.contains(p.target))
			) {
				for (let v of p.removedNodes) v instanceof Element && (r.delete(v), n.delete(v));
				for (let v of p.addedNodes)
					(v instanceof HTMLElement || v instanceof SVGElement) &&
					(v.dataset.liveAnnouncer === 'true' || v.dataset.reactAriaTopLayer === 'true')
						? r.add(v)
						: v instanceof Element && o(v);
			}
	});
	s.observe(t, { childList: !0, subtree: !0 });
	let l = {
		observe() {
			s.observe(t, { childList: !0, subtree: !0 });
		},
		disconnect() {
			s.disconnect();
		},
	};
	return (
		Y.push(l),
		() => {
			s.disconnect();
			for (let c of n) {
				let p = Se.get(c);
				p === 1 ? (c.removeAttribute('aria-hidden'), Se.delete(c)) : Se.set(c, p - 1);
			}
			l === Y[Y.length - 1]
				? (Y.pop(), Y.length && Y[Y.length - 1].observe())
				: Y.splice(Y.indexOf(l), 1);
		}
	);
}
const Bi = D.createContext(null);
function ss(e) {
	let t = it(),
		{ portalContainer: r = t ? null : document.body, isExiting: n } = e,
		[o, a] = h.useState(!1),
		s = h.useMemo(() => ({ contain: o, setContain: a }), [o, a]);
	if (!r) return null;
	let l = e.children;
	return (
		e.disableFocusManagement ||
			(l = D.createElement($i, { restoreFocus: !0, contain: o && !n }, l)),
		(l = D.createElement(Bi.Provider, { value: s }, D.createElement(ri, null, l))),
		jn.createPortal(l, r)
	);
}
function ls(e) {
	return h.forwardRef(e);
}
var us = (e, t, r = !0) => {
		if (!t) return [e, {}];
		const n = t.reduce((o, a) => (a in e ? { ...o, [a]: e[a] } : o), {});
		return r
			? [
					Object.keys(e)
						.filter((a) => !t.includes(a))
						.reduce((a, s) => ({ ...a, [s]: e[s] }), {}),
					n,
			  ]
			: [e, n];
	},
	Vi = [
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
	gt = Vi.map((e) => `unit-${e}`),
	Tr = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
	B = (e) => !e || typeof e != 'object' || Object.keys(e).length === 0,
	Xi = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function kn(e, t) {
	e.forEach(function (r) {
		Array.isArray(r) ? kn(r, t) : t.push(r);
	});
}
function An(e) {
	let t = [];
	return kn(e, t), t;
}
var Yi = (...e) => An(e).filter(Boolean),
	In = (e, t) => {
		let r = {},
			n = Object.keys(e),
			o = Object.keys(t);
		for (let a of n)
			if (o.includes(a)) {
				let s = e[a],
					l = t[a];
				typeof s == 'object' && typeof l == 'object' ? (r[a] = In(s, l)) : (r[a] = l + ' ' + s);
			} else r[a] = e[a];
		for (let a of o) n.includes(a) || (r[a] = t[a]);
		return r;
	},
	wr = (e) => (!e || typeof e != 'string' ? e : e.replace(/\s+/g, ' ').trim());
function qi() {
	for (var e = 0, t, r, n = ''; e < arguments.length; )
		(t = arguments[e++]) && (r = Nn(t)) && (n && (n += ' '), (n += r));
	return n;
}
function Nn(e) {
	if (typeof e == 'string') return e;
	for (var t, r = '', n = 0; n < e.length; n++)
		e[n] && (t = Nn(e[n])) && (r && (r += ' '), (r += t));
	return r;
}
var Bt = '-';
function Ji(e) {
	var t = Qi(e),
		r = e.conflictingClassGroups,
		n = e.conflictingClassGroupModifiers,
		o = n === void 0 ? {} : n;
	function a(l) {
		var c = l.split(Bt);
		return c[0] === '' && c.length !== 1 && c.shift(), On(c, t) || Zi(l);
	}
	function s(l, c) {
		var p = r[l] || [];
		return c && o[l] ? [].concat(p, o[l]) : p;
	}
	return { getClassGroupId: a, getConflictingClassGroupIds: s };
}
function On(e, t) {
	if (e.length === 0) return t.classGroupId;
	var r = e[0],
		n = t.nextPart.get(r),
		o = n ? On(e.slice(1), n) : void 0;
	if (o) return o;
	if (t.validators.length !== 0) {
		var a = e.join(Bt);
		return t.validators.find(function (s) {
			var l = s.validator;
			return l(a);
		})?.classGroupId;
	}
}
var Er = /^\[(.+)\]$/;
function Zi(e) {
	if (Er.test(e)) {
		var t = Er.exec(e)[1],
			r = t?.substring(0, t.indexOf(':'));
		if (r) return 'arbitrary..' + r;
	}
}
function Qi(e) {
	var t = e.theme,
		r = e.prefix,
		n = { nextPart: new Map(), validators: [] },
		o = ta(Object.entries(e.classGroups), r);
	return (
		o.forEach(function (a) {
			var s = a[0],
				l = a[1];
			Lt(l, n, s, t);
		}),
		n
	);
}
function Lt(e, t, r, n) {
	e.forEach(function (o) {
		if (typeof o == 'string') {
			var a = o === '' ? t : xr(t, o);
			a.classGroupId = r;
			return;
		}
		if (typeof o == 'function') {
			if (ea(o)) {
				Lt(o(n), t, r, n);
				return;
			}
			t.validators.push({ validator: o, classGroupId: r });
			return;
		}
		Object.entries(o).forEach(function (s) {
			var l = s[0],
				c = s[1];
			Lt(c, xr(t, l), r, n);
		});
	});
}
function xr(e, t) {
	var r = e;
	return (
		t.split(Bt).forEach(function (n) {
			r.nextPart.has(n) || r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
				(r = r.nextPart.get(n));
		}),
		r
	);
}
function ea(e) {
	return e.isThemeGetter;
}
function ta(e, t) {
	return t
		? e.map(function (r) {
				var n = r[0],
					o = r[1],
					a = o.map(function (s) {
						return typeof s == 'string'
							? t + s
							: typeof s == 'object'
							  ? Object.fromEntries(
										Object.entries(s).map(function (l) {
											var c = l[0],
												p = l[1];
											return [t + c, p];
										})
							    )
							  : s;
					});
				return [n, a];
		  })
		: e;
}
function ra(e) {
	if (e < 1) return { get: function () {}, set: function () {} };
	var t = 0,
		r = new Map(),
		n = new Map();
	function o(a, s) {
		r.set(a, s), t++, t > e && ((t = 0), (n = r), (r = new Map()));
	}
	return {
		get: function (s) {
			var l = r.get(s);
			if (l !== void 0) return l;
			if ((l = n.get(s)) !== void 0) return o(s, l), l;
		},
		set: function (s, l) {
			r.has(s) ? r.set(s, l) : o(s, l);
		},
	};
}
var Rn = '!';
function na(e) {
	var t = e.separator || ':',
		r = t.length === 1,
		n = t[0],
		o = t.length;
	return function (s) {
		for (var l = [], c = 0, p = 0, v, y = 0; y < s.length; y++) {
			var b = s[y];
			if (c === 0) {
				if (b === n && (r || s.slice(y, y + o) === t)) {
					l.push(s.slice(p, y)), (p = y + o);
					continue;
				}
				if (b === '/') {
					v = y;
					continue;
				}
			}
			b === '[' ? c++ : b === ']' && c--;
		}
		var g = l.length === 0 ? s : s.substring(p),
			$ = g.startsWith(Rn),
			x = $ ? g.substring(1) : g,
			E = v && v > p ? v - p : void 0;
		return {
			modifiers: l,
			hasImportantModifier: $,
			baseClassName: x,
			maybePostfixModifierPosition: E,
		};
	};
}
function oa(e) {
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
function ia(e) {
	return { cache: ra(e.cacheSize), splitModifiers: na(e), ...Ji(e) };
}
var aa = /\s+/;
function sa(e, t) {
	var r = t.splitModifiers,
		n = t.getClassGroupId,
		o = t.getConflictingClassGroupIds,
		a = new Set();
	return e
		.trim()
		.split(aa)
		.map(function (s) {
			var l = r(s),
				c = l.modifiers,
				p = l.hasImportantModifier,
				v = l.baseClassName,
				y = l.maybePostfixModifierPosition,
				b = n(y ? v.substring(0, y) : v),
				g = !!y;
			if (!b) {
				if (!y) return { isTailwindClass: !1, originalClassName: s };
				if (((b = n(v)), !b)) return { isTailwindClass: !1, originalClassName: s };
				g = !1;
			}
			var $ = oa(c).join(':'),
				x = p ? $ + Rn : $;
			return {
				isTailwindClass: !0,
				modifierId: x,
				classGroupId: b,
				originalClassName: s,
				hasPostfixModifier: g,
			};
		})
		.reverse()
		.filter(function (s) {
			if (!s.isTailwindClass) return !0;
			var l = s.modifierId,
				c = s.classGroupId,
				p = s.hasPostfixModifier,
				v = l + c;
			return a.has(v)
				? !1
				: (a.add(v),
				  o(c, p).forEach(function (y) {
						return a.add(l + y);
				  }),
				  !0);
		})
		.reverse()
		.map(function (s) {
			return s.originalClassName;
		})
		.join(' ');
}
function Mt() {
	for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
	var n,
		o,
		a,
		s = l;
	function l(p) {
		var v = t[0],
			y = t.slice(1),
			b = y.reduce(function (g, $) {
				return $(g);
			}, v());
		return (n = ia(b)), (o = n.cache.get), (a = n.cache.set), (s = c), c(p);
	}
	function c(p) {
		var v = o(p);
		if (v) return v;
		var y = sa(p, n);
		return a(p, y), y;
	}
	return function () {
		return s(qi.apply(null, arguments));
	};
}
function K(e) {
	var t = function (n) {
		return n[e] || [];
	};
	return (t.isThemeGetter = !0), t;
}
var Fn = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	la = /^\d+\/\d+$/,
	ua = new Set(['px', 'full', 'screen']),
	ca = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	da =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	fa = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function q(e) {
	return pe(e) || ua.has(e) || la.test(e) || kt(e);
}
function kt(e) {
	return be(e, 'length', ha);
}
function pa(e) {
	return be(e, 'size', Kn);
}
function va(e) {
	return be(e, 'position', Kn);
}
function ga(e) {
	return be(e, 'url', $a);
}
function ze(e) {
	return be(e, 'number', pe);
}
function pe(e) {
	return !Number.isNaN(Number(e));
}
function ba(e) {
	return e.endsWith('%') && pe(e.slice(0, -1));
}
function Ce(e) {
	return Pr(e) || be(e, 'number', Pr);
}
function M(e) {
	return Fn.test(e);
}
function Le() {
	return !0;
}
function se(e) {
	return ca.test(e);
}
function ma(e) {
	return be(e, '', ya);
}
function be(e, t, r) {
	var n = Fn.exec(e);
	return n ? (n[1] ? n[1] === t : r(n[2])) : !1;
}
function ha(e) {
	return da.test(e);
}
function Kn() {
	return !1;
}
function $a(e) {
	return e.startsWith('url(');
}
function Pr(e) {
	return Number.isInteger(Number(e));
}
function ya(e) {
	return fa.test(e);
}
function At() {
	var e = K('colors'),
		t = K('spacing'),
		r = K('blur'),
		n = K('brightness'),
		o = K('borderColor'),
		a = K('borderRadius'),
		s = K('borderSpacing'),
		l = K('borderWidth'),
		c = K('contrast'),
		p = K('grayscale'),
		v = K('hueRotate'),
		y = K('invert'),
		b = K('gap'),
		g = K('gradientColorStops'),
		$ = K('gradientColorStopPositions'),
		x = K('inset'),
		E = K('margin'),
		C = K('opacity'),
		P = K('padding'),
		S = K('saturate'),
		A = K('scale'),
		I = K('sepia'),
		N = K('skew'),
		H = K('space'),
		i = K('translate'),
		T = function () {
			return ['auto', 'contain', 'none'];
		},
		k = function () {
			return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
		},
		d = function () {
			return ['auto', M, t];
		},
		m = function () {
			return [M, t];
		},
		u = function () {
			return ['', q];
		},
		f = function () {
			return ['auto', pe, M];
		},
		w = function () {
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
		L = function () {
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
		R = function () {
			return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
		},
		W = function () {
			return ['', '0', M];
		},
		Q = function () {
			return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
		},
		V = function () {
			return [pe, ze];
		},
		ae = function () {
			return [pe, M];
		};
	return {
		cacheSize: 500,
		theme: {
			colors: [Le],
			spacing: [q],
			blur: ['none', '', se, M],
			brightness: V(),
			borderColor: [e],
			borderRadius: ['none', '', 'full', se, M],
			borderSpacing: m(),
			borderWidth: u(),
			contrast: V(),
			grayscale: W(),
			hueRotate: ae(),
			invert: W(),
			gap: m(),
			gradientColorStops: [e],
			gradientColorStopPositions: [ba, kt],
			inset: d(),
			margin: d(),
			opacity: V(),
			padding: m(),
			saturate: V(),
			scale: V(),
			sepia: W(),
			skew: ae(),
			space: m(),
			translate: m(),
		},
		classGroups: {
			aspect: [{ aspect: ['auto', 'square', 'video', M] }],
			container: ['container'],
			columns: [{ columns: [se] }],
			'break-after': [{ 'break-after': Q() }],
			'break-before': [{ 'break-before': Q() }],
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
			'object-position': [{ object: [].concat(w(), [M]) }],
			overflow: [{ overflow: k() }],
			'overflow-x': [{ 'overflow-x': k() }],
			'overflow-y': [{ 'overflow-y': k() }],
			overscroll: [{ overscroll: T() }],
			'overscroll-x': [{ 'overscroll-x': T() }],
			'overscroll-y': [{ 'overscroll-y': T() }],
			position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
			inset: [{ inset: [x] }],
			'inset-x': [{ 'inset-x': [x] }],
			'inset-y': [{ 'inset-y': [x] }],
			start: [{ start: [x] }],
			end: [{ end: [x] }],
			top: [{ top: [x] }],
			right: [{ right: [x] }],
			bottom: [{ bottom: [x] }],
			left: [{ left: [x] }],
			visibility: ['visible', 'invisible', 'collapse'],
			z: [{ z: ['auto', Ce] }],
			basis: [{ basis: d() }],
			'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
			'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
			flex: [{ flex: ['1', 'auto', 'initial', 'none', M] }],
			grow: [{ grow: W() }],
			shrink: [{ shrink: W() }],
			order: [{ order: ['first', 'last', 'none', Ce] }],
			'grid-cols': [{ 'grid-cols': [Le] }],
			'col-start-end': [{ col: ['auto', { span: ['full', Ce] }, M] }],
			'col-start': [{ 'col-start': f() }],
			'col-end': [{ 'col-end': f() }],
			'grid-rows': [{ 'grid-rows': [Le] }],
			'row-start-end': [{ row: ['auto', { span: [Ce] }, M] }],
			'row-start': [{ 'row-start': f() }],
			'row-end': [{ 'row-end': f() }],
			'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
			'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', M] }],
			'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', M] }],
			gap: [{ gap: [b] }],
			'gap-x': [{ 'gap-x': [b] }],
			'gap-y': [{ 'gap-y': [b] }],
			'justify-content': [{ justify: ['normal'].concat(R()) }],
			'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
			'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			'align-content': [{ content: ['normal'].concat(R(), ['baseline']) }],
			'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
			'place-content': [{ 'place-content': [].concat(R(), ['baseline']) }],
			'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			p: [{ p: [P] }],
			px: [{ px: [P] }],
			py: [{ py: [P] }],
			ps: [{ ps: [P] }],
			pe: [{ pe: [P] }],
			pt: [{ pt: [P] }],
			pr: [{ pr: [P] }],
			pb: [{ pb: [P] }],
			pl: [{ pl: [P] }],
			m: [{ m: [E] }],
			mx: [{ mx: [E] }],
			my: [{ my: [E] }],
			ms: [{ ms: [E] }],
			me: [{ me: [E] }],
			mt: [{ mt: [E] }],
			mr: [{ mr: [E] }],
			mb: [{ mb: [E] }],
			ml: [{ ml: [E] }],
			'space-x': [{ 'space-x': [H] }],
			'space-x-reverse': ['space-x-reverse'],
			'space-y': [{ 'space-y': [H] }],
			'space-y-reverse': ['space-y-reverse'],
			w: [{ w: ['auto', 'min', 'max', 'fit', M, t] }],
			'min-w': [{ 'min-w': ['min', 'max', 'fit', M, q] }],
			'max-w': [
				{ 'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [se] }, se, M] },
			],
			h: [{ h: [M, t, 'auto', 'min', 'max', 'fit'] }],
			'min-h': [{ 'min-h': ['min', 'max', 'fit', M, q] }],
			'max-h': [{ 'max-h': [M, t, 'min', 'max', 'fit'] }],
			'font-size': [{ text: ['base', se, kt] }],
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
						ze,
					],
				},
			],
			'font-family': [{ font: [Le] }],
			'fvn-normal': ['normal-nums'],
			'fvn-ordinal': ['ordinal'],
			'fvn-slashed-zero': ['slashed-zero'],
			'fvn-figure': ['lining-nums', 'oldstyle-nums'],
			'fvn-spacing': ['proportional-nums', 'tabular-nums'],
			'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
			tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', M] }],
			'line-clamp': [{ 'line-clamp': ['none', pe, ze] }],
			leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', M, q] }],
			'list-image': [{ 'list-image': ['none', M] }],
			'list-style-type': [{ list: ['none', 'disc', 'decimal', M] }],
			'list-style-position': [{ list: ['inside', 'outside'] }],
			'placeholder-color': [{ placeholder: [e] }],
			'placeholder-opacity': [{ 'placeholder-opacity': [C] }],
			'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
			'text-color': [{ text: [e] }],
			'text-opacity': [{ 'text-opacity': [C] }],
			'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
			'text-decoration-style': [{ decoration: [].concat(L(), ['wavy']) }],
			'text-decoration-thickness': [{ decoration: ['auto', 'from-font', q] }],
			'underline-offset': [{ 'underline-offset': ['auto', M, q] }],
			'text-decoration-color': [{ decoration: [e] }],
			'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
			'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
			indent: [{ indent: m() }],
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
						M,
					],
				},
			],
			whitespace: [
				{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
			],
			break: [{ break: ['normal', 'words', 'all', 'keep'] }],
			hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
			content: [{ content: ['none', M] }],
			'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
			'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
			'bg-opacity': [{ 'bg-opacity': [C] }],
			'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
			'bg-position': [{ bg: [].concat(w(), [va]) }],
			'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
			'bg-size': [{ bg: ['auto', 'cover', 'contain', pa] }],
			'bg-image': [
				{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, ga] },
			],
			'bg-color': [{ bg: [e] }],
			'gradient-from-pos': [{ from: [$] }],
			'gradient-via-pos': [{ via: [$] }],
			'gradient-to-pos': [{ to: [$] }],
			'gradient-from': [{ from: [g] }],
			'gradient-via': [{ via: [g] }],
			'gradient-to': [{ to: [g] }],
			rounded: [{ rounded: [a] }],
			'rounded-s': [{ 'rounded-s': [a] }],
			'rounded-e': [{ 'rounded-e': [a] }],
			'rounded-t': [{ 'rounded-t': [a] }],
			'rounded-r': [{ 'rounded-r': [a] }],
			'rounded-b': [{ 'rounded-b': [a] }],
			'rounded-l': [{ 'rounded-l': [a] }],
			'rounded-ss': [{ 'rounded-ss': [a] }],
			'rounded-se': [{ 'rounded-se': [a] }],
			'rounded-ee': [{ 'rounded-ee': [a] }],
			'rounded-es': [{ 'rounded-es': [a] }],
			'rounded-tl': [{ 'rounded-tl': [a] }],
			'rounded-tr': [{ 'rounded-tr': [a] }],
			'rounded-br': [{ 'rounded-br': [a] }],
			'rounded-bl': [{ 'rounded-bl': [a] }],
			'border-w': [{ border: [l] }],
			'border-w-x': [{ 'border-x': [l] }],
			'border-w-y': [{ 'border-y': [l] }],
			'border-w-s': [{ 'border-s': [l] }],
			'border-w-e': [{ 'border-e': [l] }],
			'border-w-t': [{ 'border-t': [l] }],
			'border-w-r': [{ 'border-r': [l] }],
			'border-w-b': [{ 'border-b': [l] }],
			'border-w-l': [{ 'border-l': [l] }],
			'border-opacity': [{ 'border-opacity': [C] }],
			'border-style': [{ border: [].concat(L(), ['hidden']) }],
			'divide-x': [{ 'divide-x': [l] }],
			'divide-x-reverse': ['divide-x-reverse'],
			'divide-y': [{ 'divide-y': [l] }],
			'divide-y-reverse': ['divide-y-reverse'],
			'divide-opacity': [{ 'divide-opacity': [C] }],
			'divide-style': [{ divide: L() }],
			'border-color': [{ border: [o] }],
			'border-color-x': [{ 'border-x': [o] }],
			'border-color-y': [{ 'border-y': [o] }],
			'border-color-t': [{ 'border-t': [o] }],
			'border-color-r': [{ 'border-r': [o] }],
			'border-color-b': [{ 'border-b': [o] }],
			'border-color-l': [{ 'border-l': [o] }],
			'divide-color': [{ divide: [o] }],
			'outline-style': [{ outline: [''].concat(L()) }],
			'outline-offset': [{ 'outline-offset': [M, q] }],
			'outline-w': [{ outline: [q] }],
			'outline-color': [{ outline: [e] }],
			'ring-w': [{ ring: u() }],
			'ring-w-inset': ['ring-inset'],
			'ring-color': [{ ring: [e] }],
			'ring-opacity': [{ 'ring-opacity': [C] }],
			'ring-offset-w': [{ 'ring-offset': [q] }],
			'ring-offset-color': [{ 'ring-offset': [e] }],
			shadow: [{ shadow: ['', 'inner', 'none', se, ma] }],
			'shadow-color': [{ shadow: [Le] }],
			opacity: [{ opacity: [C] }],
			'mix-blend': [{ 'mix-blend': O() }],
			'bg-blend': [{ 'bg-blend': O() }],
			filter: [{ filter: ['', 'none'] }],
			blur: [{ blur: [r] }],
			brightness: [{ brightness: [n] }],
			contrast: [{ contrast: [c] }],
			'drop-shadow': [{ 'drop-shadow': ['', 'none', se, M] }],
			grayscale: [{ grayscale: [p] }],
			'hue-rotate': [{ 'hue-rotate': [v] }],
			invert: [{ invert: [y] }],
			saturate: [{ saturate: [S] }],
			sepia: [{ sepia: [I] }],
			'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
			'backdrop-blur': [{ 'backdrop-blur': [r] }],
			'backdrop-brightness': [{ 'backdrop-brightness': [n] }],
			'backdrop-contrast': [{ 'backdrop-contrast': [c] }],
			'backdrop-grayscale': [{ 'backdrop-grayscale': [p] }],
			'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [v] }],
			'backdrop-invert': [{ 'backdrop-invert': [y] }],
			'backdrop-opacity': [{ 'backdrop-opacity': [C] }],
			'backdrop-saturate': [{ 'backdrop-saturate': [S] }],
			'backdrop-sepia': [{ 'backdrop-sepia': [I] }],
			'border-collapse': [{ border: ['collapse', 'separate'] }],
			'border-spacing': [{ 'border-spacing': [s] }],
			'border-spacing-x': [{ 'border-spacing-x': [s] }],
			'border-spacing-y': [{ 'border-spacing-y': [s] }],
			'table-layout': [{ table: ['auto', 'fixed'] }],
			caption: [{ caption: ['top', 'bottom'] }],
			transition: [
				{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', M] },
			],
			duration: [{ duration: ae() }],
			ease: [{ ease: ['linear', 'in', 'out', 'in-out', M] }],
			delay: [{ delay: ae() }],
			animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', M] }],
			transform: [{ transform: ['', 'gpu', 'none'] }],
			scale: [{ scale: [A] }],
			'scale-x': [{ 'scale-x': [A] }],
			'scale-y': [{ 'scale-y': [A] }],
			rotate: [{ rotate: [Ce, M] }],
			'translate-x': [{ 'translate-x': [i] }],
			'translate-y': [{ 'translate-y': [i] }],
			'skew-x': [{ 'skew-x': [N] }],
			'skew-y': [{ 'skew-y': [N] }],
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
						M,
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
						M,
					],
				},
			],
			'caret-color': [{ caret: [e] }],
			'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
			resize: [{ resize: ['none', 'y', 'x', ''] }],
			'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
			'scroll-m': [{ 'scroll-m': m() }],
			'scroll-mx': [{ 'scroll-mx': m() }],
			'scroll-my': [{ 'scroll-my': m() }],
			'scroll-ms': [{ 'scroll-ms': m() }],
			'scroll-me': [{ 'scroll-me': m() }],
			'scroll-mt': [{ 'scroll-mt': m() }],
			'scroll-mr': [{ 'scroll-mr': m() }],
			'scroll-mb': [{ 'scroll-mb': m() }],
			'scroll-ml': [{ 'scroll-ml': m() }],
			'scroll-p': [{ 'scroll-p': m() }],
			'scroll-px': [{ 'scroll-px': m() }],
			'scroll-py': [{ 'scroll-py': m() }],
			'scroll-ps': [{ 'scroll-ps': m() }],
			'scroll-pe': [{ 'scroll-pe': m() }],
			'scroll-pt': [{ 'scroll-pt': m() }],
			'scroll-pr': [{ 'scroll-pr': m() }],
			'scroll-pb': [{ 'scroll-pb': m() }],
			'scroll-pl': [{ 'scroll-pl': m() }],
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
			'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', M] }],
			fill: [{ fill: [e, 'none'] }],
			'stroke-w': [{ stroke: [q, ze] }],
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
function Ta(e, t) {
	for (var r in t) Dn(e, r, t[r]);
	return e;
}
var wa = Object.prototype.hasOwnProperty,
	Ea = new Set(['string', 'number', 'boolean']);
function Dn(e, t, r) {
	if (!wa.call(e, t) || Ea.has(typeof r) || r === null) {
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
		for (var n in r) Dn(e[t], n, r[n]);
	}
}
function xa(e) {
	for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
		r[n - 1] = arguments[n];
	return typeof e == 'function'
		? Mt.apply(void 0, [At, e].concat(r))
		: Mt.apply(
				void 0,
				[
					function () {
						return Ta(At(), e);
					},
				].concat(r)
		  );
}
var Pa = Mt(At),
	Sa = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
	Hn = (e) => e || void 0,
	rt = (...e) => Hn(An(e).filter(Boolean).join(' ')),
	bt = null,
	nt = {},
	It = !1,
	Me =
		(...e) =>
		(t) =>
			t.twMerge ? ((!bt || It) && ((It = !1), (bt = B(nt) ? Pa : xa(nt))), Hn(bt(rt(e)))) : rt(e),
	Sr = (e, t) => {
		for (let r in t) e.hasOwnProperty(r) ? (e[r] = rt(e[r], t[r])) : (e[r] = t[r]);
		return e;
	},
	Ca = (e, t) => {
		let {
				extend: r = null,
				slots: n = {},
				variants: o = {},
				compoundVariants: a = [],
				compoundSlots: s = [],
				defaultVariants: l = {},
			} = e,
			c = { ...Sa, ...t },
			p = r != null && r.base ? rt(r.base, e?.base) : e?.base,
			v = r != null && r.variants && !B(r.variants) ? In(o, r.variants) : o,
			y =
				r != null && r.defaultVariants && !B(r.defaultVariants)
					? { ...r.defaultVariants, ...l }
					: l;
		!B(c.twMergeConfig) && !Xi(c.twMergeConfig, nt) && ((It = !0), (nt = c.twMergeConfig));
		let b = B(n) ? {} : { base: e?.base, ...n },
			g = B(r?.slots) ? b : Sr({ ...r?.slots }, B(b) ? { base: e?.base } : b),
			$ = (E) => {
				if (B(v) && B(n) && B(r?.slots)) return Me(p, E?.class, E?.className)(c);
				if (a && !Array.isArray(a))
					throw new TypeError(
						`The "compoundVariants" prop must be an array. Received: ${typeof a}`
					);
				if (s && !Array.isArray(s))
					throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
				let C = (d, m, u = [], f) => {
						let w = u;
						if (typeof m == 'string')
							w = w.concat(
								wr(m)
									.split(' ')
									.map((L) => `${d}:${L}`)
							);
						else if (Array.isArray(m)) w = w.concat(m.reduce((L, O) => L.concat(`${d}:${O}`), []));
						else if (typeof m == 'object' && typeof f == 'string') {
							for (let L in m)
								if (m.hasOwnProperty(L) && L === f) {
									let O = m[L];
									if (O && typeof O == 'string') {
										let R = wr(O);
										w[f]
											? (w[f] = w[f].concat(R.split(' ').map((W) => `${d}:${W}`)))
											: (w[f] = R.split(' ').map((W) => `${d}:${W}`));
									} else
										Array.isArray(O) &&
											O.length > 0 &&
											(w[f] = O.reduce((R, W) => R.concat(`${d}:${W}`), []));
								}
						}
						return w;
					},
					P = (d, m = v, u = null, f = null) => {
						var w;
						let L = m[d];
						if (!L || B(L)) return null;
						let O = (w = f?.[d]) != null ? w : E?.[d];
						if (O === null) return null;
						let R = Tr(O),
							W =
								(Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0) ||
								c.responsiveVariants === !0,
							Q = y?.[d],
							V = [];
						if (typeof R == 'object' && W)
							for (let [_, Xt] of Object.entries(R)) {
								let Un = L[Xt];
								if (_ === 'initial') {
									Q = Xt;
									continue;
								}
								(Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(_)) ||
									(V = C(_, Un, V, u));
							}
						let ae = L[R] || L[Tr(Q)];
						return typeof V == 'object' && typeof u == 'string' && V[u]
							? Sr(V, ae)
							: V.length > 0
							  ? (V.push(ae), V)
							  : ae;
					},
					S = () => (v ? Object.keys(v).map((d) => P(d, v)) : null),
					A = (d, m) => {
						if (!v || typeof v != 'object') return null;
						let u = new Array();
						for (let f in v) {
							let w = P(f, v, d, m),
								L = d === 'base' && typeof w == 'string' ? w : w && w[d];
							L && (u[u.length] = L);
						}
						return u;
					},
					I = {};
				for (let d in E) E[d] !== void 0 && (I[d] = E[d]);
				let N = (d, m) => {
						var u;
						let f =
							typeof E?.[d] == 'object' ? { [d]: (u = E[d]) == null ? void 0 : u.initial } : {};
						return { ...y, ...I, ...f, ...m };
					},
					H = (d = [], m) => {
						let u = [];
						for (let { class: f, className: w, ...L } of d) {
							let O = !0;
							for (let [R, W] of Object.entries(L)) {
								let Q = N(R, m);
								if (Array.isArray(W)) {
									if (!W.includes(Q[R])) {
										O = !1;
										break;
									}
								} else if (Q[R] !== W) {
									O = !1;
									break;
								}
							}
							O && (f && u.push(f), w && u.push(w));
						}
						return u;
					},
					i = (d) => {
						let m = H(a, d),
							u = H(r?.compoundVariants, d);
						return Yi(u, m);
					},
					T = (d) => {
						let m = i(d);
						if (!Array.isArray(m)) return m;
						let u = {};
						for (let f of m)
							if ((typeof f == 'string' && (u.base = Me(u.base, f)(c)), typeof f == 'object'))
								for (let [w, L] of Object.entries(f)) u[w] = Me(u[w], L)(c);
						return u;
					},
					k = (d) => {
						if (s.length < 1) return null;
						let m = {};
						for (let { slots: u = [], class: f, className: w, ...L } of s) {
							if (!B(L)) {
								let O = !0;
								for (let R of Object.keys(L)) {
									let W = N(R, d)[R];
									if (W === void 0 || (Array.isArray(L[R]) ? !L[R].includes(W) : L[R] !== W)) {
										O = !1;
										break;
									}
								}
								if (!O) continue;
							}
							for (let O of u) (m[O] = m[O] || []), m[O].push([f, w]);
						}
						return m;
					};
				if (!B(n) || !B(r?.slots)) {
					let d = {};
					if (typeof g == 'object' && !B(g))
						for (let m of Object.keys(g))
							d[m] = (u) => {
								var f, w;
								return Me(
									g[m],
									A(m, u),
									((f = T(u)) != null ? f : [])[m],
									((w = k(u)) != null ? w : [])[m],
									u?.class,
									u?.className
								)(c);
							};
					return d;
				}
				return Me(p, S(), i(), E?.class, E?.className)(c);
			},
			x = () => {
				if (!(!v || typeof v != 'object')) return Object.keys(v);
			};
		return (
			($.variantKeys = x()),
			($.extend = r),
			($.base = p),
			($.slots = g),
			($.variants = v),
			($.defaultVariants = y),
			($.compoundSlots = s),
			($.compoundVariants = a),
			$
		);
	},
	Ge = ['small', 'medium', 'large'],
	cs = (e, t) => {
		var r, n, o;
		return Ca(e, {
			...t,
			twMerge: (r = t?.twMerge) != null ? r : !0,
			twMergeConfig: {
				...t?.twMergeConfig,
				theme: {
					...((n = t?.twMergeConfig) == null ? void 0 : n.theme),
					opacity: ['disabled'],
					spacing: ['divider', 'unit', ...gt],
					borderWidth: Ge,
					borderRadius: Ge,
				},
				classGroups: {
					...((o = t?.twMergeConfig) == null ? void 0 : o.classGroups),
					shadow: [{ shadow: Ge }],
					'font-size': [{ text: ['tiny', ...Ge] }],
					'bg-image': ['bg-stripe-gradient'],
					'min-w': [{ 'min-w': ['unit', ...gt] }],
					'min-h': [{ 'min-h': ['unit', ...gt] }],
				},
			},
		});
	},
	ds = [
		'outline-none',
		'data-[focus-visible=true]:z-10',
		'data-[focus-visible=true]:outline-2',
		'data-[focus-visible=true]:outline-focus',
		'data-[focus-visible=true]:outline-offset-2',
	],
	fs = [
		'outline-none',
		'group-data-[focus-visible=true]:z-10',
		'group-data-[focus-visible=true]:ring-2',
		'group-data-[focus-visible=true]:ring-focus',
		'group-data-[focus-visible=true]:ring-offset-2',
		'group-data-[focus-visible=true]:ring-offset-background',
	],
	ps = {
		default: ['[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		primary: ['[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		secondary: ['[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		success: ['[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		warning: ['[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		danger: ['[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]'],
	};
function Wn(e) {
	var t,
		r,
		n = '';
	if (typeof e == 'string' || typeof e == 'number') n += e;
	else if (typeof e == 'object')
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++) e[t] && (r = Wn(e[t])) && (n && (n += ' '), (n += r));
		else for (t in e) e[t] && (n && (n += ' '), (n += t));
	return n;
}
function vs(...e) {
	for (var t = 0, r, n, o = ''; t < e.length; )
		(r = e[t++]) && (n = Wn(r)) && (o && (o += ' '), (o += n));
	return o;
}
var gs = (e) => (e ? 'true' : void 0);
function bs(e = {}) {
	const {
			strict: t = !0,
			errorMessage:
				r = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
			name: n,
		} = e,
		o = h.createContext(void 0);
	o.displayName = n;
	function a() {
		var s;
		const l = h.useContext(o);
		if (!l && t) {
			const c = new Error(r);
			throw (
				((c.name = 'ContextError'), (s = Error.captureStackTrace) == null || s.call(Error, c, a), c)
			);
		}
		return l;
	}
	return [o.Provider, a, o];
}
function ms(e) {
	const t = h.useRef(null);
	return h.useImperativeHandle(e, () => t.current), t;
}
var zn = D.createContext(null);
zn.displayName = 'PressResponderContext';
var La = Object.defineProperty,
	Ma = (e, t, r) =>
		t in e ? La(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
	ce = (e, t, r) => (Ma(e, typeof t != 'symbol' ? t + '' : t, r), r),
	Gn = (e, t, r) => {
		if (!t.has(e)) throw TypeError('Cannot ' + r);
	},
	ka = (e, t, r) => (Gn(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
	Aa = (e, t, r) => {
		if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
		t instanceof WeakSet ? t.add(e) : t.set(e, r);
	},
	Ia = (e, t, r, n) => (Gn(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
	Be,
	_e = class {
		constructor(e, t, r) {
			ce(this, 'type'),
				ce(this, 'pointerType'),
				ce(this, 'target'),
				ce(this, 'shiftKey'),
				ce(this, 'ctrlKey'),
				ce(this, 'metaKey'),
				ce(this, 'altKey'),
				Aa(this, Be, !0),
				(this.type = e),
				(this.pointerType = t),
				(this.target = r.currentTarget),
				(this.shiftKey = r.shiftKey),
				(this.metaKey = r.metaKey),
				(this.ctrlKey = r.ctrlKey),
				(this.altKey = r.altKey);
		}
		continuePropagation() {
			Ia(this, Be, !1);
		}
		get shouldStopPropagation() {
			return ka(this, Be);
		}
	};
Be = new WeakMap();
var de = (e) => {
		var t;
		return (t = e?.ownerDocument) != null ? t : document;
	},
	Nt = (e) => {
		var t, r;
		return (r = (t = e?.ownerDocument) == null ? void 0 : t.defaultView) != null ? r : window;
	},
	xe = 'default',
	Ot = '',
	Ve = new WeakMap();
function Cr(e) {
	if (Oe()) {
		if (xe === 'default') {
			const t = de(e);
			(Ot = t.documentElement.style.webkitUserSelect),
				(t.documentElement.style.webkitUserSelect = 'none');
		}
		xe = 'disabled';
	} else
		(e instanceof HTMLElement || e instanceof SVGElement) &&
			(Ve.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function Ue(e) {
	if (Oe()) {
		if (xe !== 'disabled') return;
		(xe = 'restoring'),
			setTimeout(() => {
				Kt(() => {
					if (xe === 'restoring') {
						const t = de(e);
						t.documentElement.style.webkitUserSelect === 'none' &&
							(t.documentElement.style.webkitUserSelect = Ot || ''),
							(Ot = ''),
							(xe = 'default');
					}
				});
			}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Ve.has(e)) {
		let t = Ve.get(e);
		e.style.userSelect === 'none' && t && (e.style.userSelect = t),
			e.getAttribute('style') === '' && e.removeAttribute('style'),
			Ve.delete(e);
	}
}
function Na(e) {
	let t = h.useContext(zn);
	if (t) {
		let { register: r, ...n } = t;
		(e = Z(n, e)), r();
	}
	return Ht(t, e.ref), e;
}
var Lr = Symbol('linkClicked');
function Oa(e) {
	let {
			onPress: t,
			onPressChange: r,
			onPressStart: n,
			onPressEnd: o,
			onPressUp: a,
			isDisabled: s,
			isPressed: l,
			preventFocusOnPress: c,
			shouldCancelOnPointerExit: p,
			allowTextSelectionOnPress: v,
			ref: y,
			...b
		} = Na(e),
		[g, $] = h.useState(!1),
		x = h.useRef({
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
		{ addGlobalListener: E, removeAllGlobalListeners: C } = Dt(),
		P = U((i, T) => {
			let k = x.current;
			if (s || k.didFirePressStart) return;
			let d = !0;
			if (((k.isTriggeringEvent = !0), n)) {
				let m = new _e('pressstart', T, i);
				n(m), (d = m.shouldStopPropagation);
			}
			return r && r(!0), (k.isTriggeringEvent = !1), (k.didFirePressStart = !0), $(!0), d;
		}),
		S = U((i, T, k = !0) => {
			let d = x.current;
			if (!d.didFirePressStart) return;
			(d.ignoreClickAfterPress = !0), (d.didFirePressStart = !1), (d.isTriggeringEvent = !0);
			let m = !0;
			if (o) {
				let u = new _e('pressend', T, i);
				o(u), (m = u.shouldStopPropagation);
			}
			if ((r && r(!1), $(!1), t && k && !s)) {
				let u = new _e('press', T, i);
				t(u), m && (m = u.shouldStopPropagation);
			}
			return (d.isTriggeringEvent = !1), m;
		}),
		A = U((i, T) => {
			let k = x.current;
			if (!s) {
				if (a) {
					k.isTriggeringEvent = !0;
					let d = new _e('pressup', T, i);
					return a(d), (k.isTriggeringEvent = !1), d.shouldStopPropagation;
				}
				return !0;
			}
		}),
		I = U((i) => {
			let T = x.current;
			T.isPressed &&
				(T.isOverTarget && T.target && S(re(T.target, i), T.pointerType, !1),
				(T.isPressed = !1),
				(T.isOverTarget = !1),
				(T.activePointerId = null),
				(T.pointerType = null),
				C(),
				!v && T.target && Ue(T.target));
		}),
		N = U((i) => {
			p && I(i);
		}),
		H = h.useMemo(() => {
			let i = x.current,
				T = {
					onKeyDown(d) {
						var m;
						if (mt(d.nativeEvent, d.currentTarget) && d.currentTarget.contains(d.target)) {
							kr(d.target, d.key) && d.preventDefault();
							let u = !0;
							!i.isPressed &&
								!d.repeat &&
								((i.target = d.currentTarget),
								(i.isPressed = !0),
								(u = P(d, 'keyboard')),
								E(de(d.currentTarget), 'keyup', k, !1)),
								u && d.stopPropagation(),
								d.metaKey && ve() && ((m = i.metaKeyEvents) == null || m.set(d.key, d.nativeEvent));
						} else d.key === 'Meta' && (i.metaKeyEvents = new Map());
					},
					onKeyUp(d) {
						i.target &&
							mt(d.nativeEvent, d.currentTarget) &&
							!d.repeat &&
							d.currentTarget.contains(d.target) &&
							A(re(i.target, d), 'keyboard');
					},
					onClick(d) {
						if (
							!(d && !d.currentTarget.contains(d.target)) &&
							d &&
							d.button === 0 &&
							!i.isTriggeringEvent &&
							!ue.isOpening
						) {
							let m = !0;
							if (
								(s && d.preventDefault(),
								!i.ignoreClickAfterPress &&
									!i.ignoreEmulatedMouseEvents &&
									!i.isPressed &&
									(i.pointerType === 'virtual' || Ie(d.nativeEvent)))
							) {
								!s && !c && J(d.currentTarget);
								let u = P(d, 'virtual'),
									f = A(d, 'virtual'),
									w = S(d, 'virtual');
								m = u && f && w;
							}
							(i.ignoreEmulatedMouseEvents = !1),
								(i.ignoreClickAfterPress = !1),
								m && d.stopPropagation();
						}
					},
				},
				k = (d) => {
					var m, u;
					if (i.isPressed && i.target && mt(d, i.target)) {
						kr(d.target, d.key) && d.preventDefault();
						let f = d.target,
							w = S(re(i.target, d), 'keyboard', i.target.contains(f));
						C(),
							w && d.stopPropagation(),
							d.key !== 'Enter' &&
								Vt(i.target) &&
								i.target.contains(f) &&
								!d[Lr] &&
								((d[Lr] = !0), ue(i.target, d, !1)),
							(i.isPressed = !1),
							(m = i.metaKeyEvents) == null || m.delete(d.key);
					} else if (d.key === 'Meta' && (u = i.metaKeyEvents) != null && u.size) {
						let f = i.metaKeyEvents;
						i.metaKeyEvents = null;
						for (let w of f.values())
							i.target && i.target.dispatchEvent(new KeyboardEvent('keyup', w));
					}
				};
			if (typeof PointerEvent < 'u') {
				(T.onPointerDown = (f) => {
					if (f.button !== 0 || !f.currentTarget.contains(f.target)) return;
					if (Kr(f.nativeEvent)) {
						i.pointerType = 'virtual';
						return;
					}
					ht(f.currentTarget) && f.preventDefault(), (i.pointerType = f.pointerType);
					let w = !0;
					i.isPressed ||
						((i.isPressed = !0),
						(i.isOverTarget = !0),
						(i.activePointerId = f.pointerId),
						(i.target = f.currentTarget),
						!s && !c && J(f.currentTarget),
						v || Cr(i.target),
						(w = P(f, i.pointerType)),
						E(de(f.currentTarget), 'pointermove', d, !1),
						E(de(f.currentTarget), 'pointerup', m, !1),
						E(de(f.currentTarget), 'pointercancel', u, !1)),
						w && f.stopPropagation();
				}),
					(T.onMouseDown = (f) => {
						f.currentTarget.contains(f.target) &&
							f.button === 0 &&
							(ht(f.currentTarget) && f.preventDefault(), f.stopPropagation());
					}),
					(T.onPointerUp = (f) => {
						!f.currentTarget.contains(f.target) ||
							i.pointerType === 'virtual' ||
							(f.button === 0 && ye(f, f.currentTarget) && A(f, i.pointerType || f.pointerType));
					});
				let d = (f) => {
						f.pointerId !== i.activePointerId ||
							!i.target ||
							(ye(f, i.target)
								? i.isOverTarget || ((i.isOverTarget = !0), P(re(i.target, f), i.pointerType))
								: i.isOverTarget &&
								  ((i.isOverTarget = !1), S(re(i.target, f), i.pointerType, !1), N(f)));
					},
					m = (f) => {
						f.pointerId === i.activePointerId &&
							i.isPressed &&
							f.button === 0 &&
							i.target &&
							((ye(f, i.target) || i.isOverTarget) && S(re(i.target, f), i.pointerType),
							(i.isPressed = !1),
							(i.isOverTarget = !1),
							(i.activePointerId = null),
							(i.pointerType = null),
							C(),
							v || Ue(i.target));
					},
					u = (f) => {
						I(f);
					};
				T.onDragStart = (f) => {
					f.currentTarget.contains(f.target) && I(f);
				};
			} else {
				(T.onMouseDown = (u) => {
					if (u.button !== 0 || !u.currentTarget.contains(u.target)) return;
					if ((ht(u.currentTarget) && u.preventDefault(), i.ignoreEmulatedMouseEvents)) {
						u.stopPropagation();
						return;
					}
					(i.isPressed = !0),
						(i.isOverTarget = !0),
						(i.target = u.currentTarget),
						(i.pointerType = Ie(u.nativeEvent) ? 'virtual' : 'mouse'),
						!s && !c && J(u.currentTarget),
						P(u, i.pointerType) && u.stopPropagation(),
						E(de(u.currentTarget), 'mouseup', d, !1);
				}),
					(T.onMouseEnter = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						let f = !0;
						i.isPressed &&
							!i.ignoreEmulatedMouseEvents &&
							((i.isOverTarget = !0), (f = P(u, i.pointerType))),
							f && u.stopPropagation();
					}),
					(T.onMouseLeave = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						let f = !0;
						i.isPressed &&
							!i.ignoreEmulatedMouseEvents &&
							((i.isOverTarget = !1), (f = S(u, i.pointerType, !1)), N(u)),
							f && u.stopPropagation();
					}),
					(T.onMouseUp = (u) => {
						u.currentTarget.contains(u.target) &&
							!i.ignoreEmulatedMouseEvents &&
							u.button === 0 &&
							A(u, i.pointerType || 'mouse');
					});
				let d = (u) => {
					if (u.button === 0) {
						if (((i.isPressed = !1), C(), i.ignoreEmulatedMouseEvents)) {
							i.ignoreEmulatedMouseEvents = !1;
							return;
						}
						i.target &&
							(ye(u, i.target)
								? S(re(i.target, u), i.pointerType)
								: i.isOverTarget && S(re(i.target, u), i.pointerType, !1),
							(i.isOverTarget = !1));
					}
				};
				(T.onTouchStart = (u) => {
					if (!u.currentTarget.contains(u.target)) return;
					let f = Ra(u.nativeEvent);
					if (!f) return;
					(i.activePointerId = f.identifier),
						(i.ignoreEmulatedMouseEvents = !0),
						(i.isOverTarget = !0),
						(i.isPressed = !0),
						(i.target = u.currentTarget),
						(i.pointerType = 'touch'),
						!s && !c && J(u.currentTarget),
						v || Cr(i.target),
						P(u, i.pointerType) && u.stopPropagation(),
						E(Nt(u.currentTarget), 'scroll', m, !0);
				}),
					(T.onTouchMove = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						if (!i.isPressed) {
							u.stopPropagation();
							return;
						}
						let f = Mr(u.nativeEvent, i.activePointerId),
							w = !0;
						f && ye(f, u.currentTarget)
							? i.isOverTarget || ((i.isOverTarget = !0), (w = P(u, i.pointerType)))
							: i.isOverTarget && ((i.isOverTarget = !1), (w = S(u, i.pointerType, !1)), N(u)),
							w && u.stopPropagation();
					}),
					(T.onTouchEnd = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						if (!i.isPressed) {
							u.stopPropagation();
							return;
						}
						let f = Mr(u.nativeEvent, i.activePointerId),
							w = !0;
						f && ye(f, u.currentTarget)
							? (A(u, i.pointerType), (w = S(u, i.pointerType)))
							: i.isOverTarget && (w = S(u, i.pointerType, !1)),
							w && u.stopPropagation(),
							(i.isPressed = !1),
							(i.activePointerId = null),
							(i.isOverTarget = !1),
							(i.ignoreEmulatedMouseEvents = !0),
							!v && i.target && Ue(i.target),
							C();
					}),
					(T.onTouchCancel = (u) => {
						u.currentTarget.contains(u.target) && (u.stopPropagation(), i.isPressed && I(u));
					});
				let m = (u) => {
					i.isPressed &&
						u.target.contains(i.target) &&
						I({ currentTarget: i.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
				};
				T.onDragStart = (u) => {
					u.currentTarget.contains(u.target) && I(u);
				};
			}
			return T;
		}, [E, s, c, C, v, I, N, S, P, A]);
	return (
		h.useEffect(
			() => () => {
				!v && x.current.target && Ue(x.current.target);
			},
			[v]
		),
		{ isPressed: l || g, pressProps: Z(b, H) }
	);
}
function Vt(e) {
	return e.tagName === 'A' && e.hasAttribute('href');
}
function mt(e, t) {
	const { key: r, code: n } = e,
		o = t,
		a = o.getAttribute('role');
	return (
		(r === 'Enter' || r === ' ' || r === 'Spacebar' || n === 'Space') &&
		!(
			(o instanceof Nt(o).HTMLInputElement && !_n(o, r)) ||
			o instanceof Nt(o).HTMLTextAreaElement ||
			o.isContentEditable
		) &&
		!((a === 'link' || (!a && Vt(o))) && r !== 'Enter')
	);
}
function Ra(e) {
	const { targetTouches: t } = e;
	return t.length > 0 ? t[0] : null;
}
function Mr(e, t) {
	const r = e.changedTouches;
	for (let n = 0; n < r.length; n++) {
		const o = r[n];
		if (o.identifier === t) return o;
	}
	return null;
}
function re(e, t) {
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
	};
}
function Fa(e) {
	let t = e.width ? e.width / 2 : e.radiusX || 0,
		r = e.height ? e.height / 2 : e.radiusY || 0;
	return { top: e.clientY - r, right: e.clientX + t, bottom: e.clientY + r, left: e.clientX - t };
}
function Ka(e, t) {
	return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function ye(e, t) {
	let r = t.getBoundingClientRect(),
		n = Fa(e);
	return Ka(r, n);
}
function ht(e) {
	return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function kr(e, t) {
	return e instanceof HTMLInputElement
		? !_n(e, t)
		: e instanceof HTMLButtonElement
		  ? e.type !== 'submit' && e.type !== 'reset'
		  : !Vt(e);
}
var Da = new Set([
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
function _n(e, t) {
	return e.type === 'checkbox' || e.type === 'radio' ? t === ' ' : Da.has(e.type);
}
var Te = {
		ease: [0.36, 0.66, 0.4, 1],
		easeIn: [0.4, 0, 1, 1],
		easeOut: [0, 0, 0.2, 1],
		easeInOut: [0.4, 0, 0.2, 1],
		spring: [0.155, 1.105, 0.295, 1.12],
		springOut: [0.57, -0.15, 0.62, 0.07],
		softSpring: [0.16, 1.11, 0.3, 1.02],
	},
	hs = {
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
			enter: { transform: 'scale(1)', opacity: 1, transition: { duration: 0.25, ease: Te.easeIn } },
			exit: {
				transform: 'scale(0.95)',
				opacity: 0,
				transition: { duration: 0.2, ease: Te.easeOut },
			},
		},
		scaleInOut: {
			enter: { transform: 'scale(1)', opacity: 1, transition: { duration: 0.4, ease: Te.ease } },
			exit: { transform: 'scale(1.03)', opacity: 0, transition: { duration: 0.3, ease: Te.ease } },
		},
		fade: {
			enter: { opacity: 1, transition: { duration: 0.4, ease: Te.ease } },
			exit: { opacity: 0, transition: { duration: 0.3, ease: Te.ease } },
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
function $s(e, t) {
	let {
			elementType: r = 'button',
			isDisabled: n,
			onPress: o,
			onPressStart: a,
			onPressEnd: s,
			onPressChange: l,
			preventFocusOnPress: c,
			allowFocusWhenDisabled: p,
			onClick: v,
			href: y,
			target: b,
			rel: g,
			type: $ = 'button',
			allowTextSelectionOnPress: x,
		} = e,
		E;
	r === 'button'
		? (E = { type: $, disabled: n })
		: (E = {
				role: 'button',
				tabIndex: n ? void 0 : 0,
				href: r === 'a' && n ? void 0 : y,
				target: r === 'a' ? b : void 0,
				type: r === 'input' ? $ : void 0,
				disabled: r === 'input' ? n : void 0,
				'aria-disabled': !n || r === 'input' ? void 0 : n,
				rel: r === 'a' ? g : void 0,
		  });
	let { pressProps: C, isPressed: P } = Oa({
			onPressStart: a,
			onPressEnd: s,
			onPressChange: l,
			onPress: o,
			isDisabled: n,
			preventFocusOnPress: c,
			allowTextSelectionOnPress: x,
			ref: t,
		}),
		{ focusableProps: S } = Ai(e, t);
	p && (S.tabIndex = n ? -1 : S.tabIndex);
	let A = Z(S, C, Eo(e, { labelable: !0 }));
	return {
		isPressed: P,
		buttonProps: Z(E, A, {
			'aria-haspopup': e['aria-haspopup'],
			'aria-expanded': e['aria-expanded'],
			'aria-controls': e['aria-controls'],
			'aria-pressed': e['aria-pressed'],
			onClick: (I) => {
				v?.(I);
			},
		}),
	};
}
export {
	Qt as $,
	$s as A,
	ho as B,
	Qa as C,
	gs as D,
	us as E,
	vs as F,
	G,
	U as H,
	Ja as I,
	_a as J,
	Rt as K,
	Oo as L,
	Ai as M,
	Eo as N,
	Ya as O,
	yt as P,
	_t as Q,
	ns as R,
	rs as S,
	os as T,
	Ua as U,
	as as V,
	hs as W,
	ss as X,
	is as Y,
	Bo as Z,
	it as _,
	qa as a,
	Za as a0,
	Ii as a1,
	Lo as a2,
	_r as a3,
	Oa as a4,
	Ni as a5,
	Te as a6,
	Fo as a7,
	Wt as b,
	ps as c,
	ds as d,
	Ba as e,
	Va as f,
	fs as g,
	Ur as h,
	Ho as i,
	Xa as j,
	Z as k,
	Jo as l,
	es as m,
	ue as n,
	ui as o,
	ja as p,
	ve as q,
	le as r,
	J as s,
	cs as t,
	za as u,
	Ga as v,
	ls as w,
	bs as x,
	ms as y,
	ts as z,
};
