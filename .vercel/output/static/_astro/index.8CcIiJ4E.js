import { r as h, $ as D } from './index.J00EDW8g.js';
import { $ as Un } from './index.0PBxFPxt.js';
var kr = { exports: {} },
	nt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jn = h,
	_n = Symbol.for('react.element'),
	Vn = Symbol.for('react.fragment'),
	Bn = Object.prototype.hasOwnProperty,
	Xn = jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	Yn = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ar(e, t, r) {
	var n,
		o = {},
		i = null,
		a = null;
	r !== void 0 && (i = '' + r),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (a = t.ref);
	for (n in t) Bn.call(t, n) && !Yn.hasOwnProperty(n) && (o[n] = t[n]);
	if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
	return { $$typeof: _n, type: e, key: i, ref: a, props: o, _owner: Xn.current };
}
nt.Fragment = Vn;
nt.jsx = Ar;
nt.jsxs = Ar;
kr.exports = nt;
var Di = kr.exports;
const Be = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
	Ir = D.createContext(Be),
	qn = D.createContext(!1);
let Jn = !!(typeof window < 'u' && window.document && window.document.createElement),
	st = new WeakMap();
function Zn(e = !1) {
	let t = h.useContext(Ir),
		r = h.useRef(null);
	if (r.current === null && !e) {
		var n, o;
		let i =
			(n = D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
			n === void 0 ||
			(o = n.ReactCurrentOwner) === null ||
			o === void 0
				? void 0
				: o.current;
		if (i) {
			let a = st.get(i);
			a == null
				? st.set(i, { id: t.current, state: i.memoizedState })
				: i.memoizedState !== a.state && ((t.current = a.id), st.delete(i));
		}
		r.current = ++t.current;
	}
	return r.current;
}
function Qn(e) {
	let t = h.useContext(Ir);
	t === Be &&
		!Jn &&
		console.warn(
			'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
		);
	let r = Zn(!!e),
		n = `react-aria${t.prefix}`;
	return e || `${n}-${r}`;
}
function eo(e) {
	let t = D.useId(),
		[r] = h.useState(ot()),
		n = r ? 'react-aria' : `react-aria${Be.prefix}`;
	return e || `${n}-${t}`;
}
const to = typeof D.useId == 'function' ? eo : Qn;
function ro() {
	return !1;
}
function no() {
	return !0;
}
function oo(e) {
	return () => {};
}
function ot() {
	return typeof D.useSyncExternalStore == 'function'
		? D.useSyncExternalStore(oo, ro, no)
		: h.useContext(qn);
}
class ao {
	getStringForLocale(t, r) {
		let n = this.strings[r];
		n || ((n = io(r, this.strings, this.defaultLocale)), (this.strings[r] = n));
		let o = n[t];
		if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
		return o;
	}
	constructor(t, r = 'en-US') {
		(this.strings = { ...t }), (this.defaultLocale = r);
	}
}
function io(e, t, r = 'en-US') {
	if (t[e]) return t[e];
	let n = so(e);
	if (t[n]) return t[n];
	for (let o in t) if (o.startsWith(n + '-')) return t[o];
	return t[r];
}
function so(e) {
	return Intl.Locale ? new Intl.Locale(e).language : e.split('-')[0];
}
const Xt = new Map(),
	Yt = new Map();
class lo {
	format(t, r) {
		let n = this.strings.getStringForLocale(t, this.locale);
		return typeof n == 'function' ? n(r, this) : n;
	}
	plural(t, r, n = 'cardinal') {
		let o = r['=' + t];
		if (o) return typeof o == 'function' ? o() : o;
		let i = this.locale + ':' + n,
			a = Xt.get(i);
		a || ((a = new Intl.PluralRules(this.locale, { type: n })), Xt.set(i, a));
		let l = a.select(t);
		return (o = r[l] || r.other), typeof o == 'function' ? o() : o;
	}
	number(t) {
		let r = Yt.get(this.locale);
		return r || ((r = new Intl.NumberFormat(this.locale)), Yt.set(this.locale, r)), r.format(t);
	}
	select(t, r) {
		let n = t[r] || t.other;
		return typeof n == 'function' ? n() : n;
	}
	constructor(t, r) {
		(this.locale = t), (this.strings = r);
	}
}
function uo(e, t) {
	if (t.has(e))
		throw new TypeError('Cannot initialize the same private elements twice on an object');
}
function co(e, t, r) {
	uo(e, t), t.set(e, r);
}
function Hi(e, t, r) {
	let [n, o] = h.useState(e || t),
		i = h.useRef(e !== void 0),
		a = e !== void 0;
	h.useEffect(() => {
		let p = i.current;
		p !== a &&
			console.warn(
				`WARN: A component changed from ${p ? 'controlled' : 'uncontrolled'} to ${
					a ? 'controlled' : 'uncontrolled'
				}.`
			),
			(i.current = a);
	}, [a]);
	let l = a ? e : n,
		c = h.useCallback(
			(p, ...v) => {
				let y = (g, ...m) => {
					r && (Object.is(l, g) || r(g, ...m)), a || (l = g);
				};
				typeof p == 'function'
					? (console.warn(
							'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320'
					  ),
					  o((m, ...$) => {
							let P = p(a ? l : m, ...$);
							return y(P, ...v), a ? m : P;
					  }))
					: (a || o(p), y(p, ...v));
			},
			[a, l, r]
		);
	return [l, c];
}
function ht(e, t = -1 / 0, r = 1 / 0) {
	return Math.min(Math.max(e, t), r);
}
function Nr(e) {
	var t,
		r,
		n = '';
	if (typeof e == 'string' || typeof e == 'number') n += e;
	else if (typeof e == 'object')
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++) e[t] && (r = Nr(e[t])) && (n && (n += ' '), (n += r));
		else for (t in e) e[t] && (n && (n += ' '), (n += t));
	return n;
}
function fo() {
	for (var e, t, r = 0, n = ''; r < arguments.length; )
		(e = arguments[r++]) && (t = Nr(e)) && (n && (n += ' '), (n += t));
	return n;
}
const G = typeof document < 'u' ? D.useLayoutEffect : () => {};
function j(e) {
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
function po(e) {
	let [t, r] = h.useState(e),
		n = h.useRef(null),
		o = j(() => {
			let a = n.current.next();
			if (a.done) {
				n.current = null;
				return;
			}
			t === a.value ? o() : r(a.value);
		});
	G(() => {
		n.current && o();
	});
	let i = j((a) => {
		(n.current = a(t)), o();
	});
	return [t, i];
}
let Xe = new Map();
function Nt(e) {
	let [t, r] = h.useState(e),
		n = h.useRef(null),
		o = to(t),
		i = h.useCallback((a) => {
			n.current = a;
		}, []);
	return (
		Xe.set(o, i),
		G(() => {
			let a = o;
			return () => {
				Xe.delete(a);
			};
		}, [o]),
		h.useEffect(() => {
			let a = n.current;
			a && ((n.current = null), r(a));
		}),
		o
	);
}
function vo(e, t) {
	if (e === t) return e;
	let r = Xe.get(e);
	if (r) return r(t), t;
	let n = Xe.get(t);
	return n ? (n(e), e) : t;
}
function Wi(e = []) {
	let t = Nt(),
		[r, n] = po(t),
		o = h.useCallback(() => {
			n(function* () {
				yield t, yield document.getElementById(t) ? t : void 0;
			});
		}, [t, n]);
	return G(o, [t, o, ...e]), r;
}
function go(...e) {
	return (...t) => {
		for (let r of e) typeof r == 'function' && r(...t);
	};
}
function Z(...e) {
	let t = { ...e[0] };
	for (let r = 1; r < e.length; r++) {
		let n = e[r];
		for (let o in n) {
			let i = t[o],
				a = n[o];
			typeof i == 'function' &&
			typeof a == 'function' &&
			o[0] === 'o' &&
			o[1] === 'n' &&
			o.charCodeAt(2) >= 65 &&
			o.charCodeAt(2) <= 90
				? (t[o] = go(i, a))
				: (o === 'className' || o === 'UNSAFE_className') &&
				  typeof i == 'string' &&
				  typeof a == 'string'
				? (t[o] = fo(i, a))
				: o === 'id' && i && a
				? (t.id = vo(i, a))
				: (t[o] = a !== void 0 ? a : i);
		}
	}
	return t;
}
function zi(...e) {
	return e.length === 1
		? e[0]
		: (t) => {
				for (let r of e) typeof r == 'function' ? r(t) : r != null && (r.current = t);
		  };
}
const bo = new Set(['id']),
	mo = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
	ho = new Set(['href', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
	$o = /^(data-.*)$/;
function yo(e, t = {}) {
	let { labelable: r, isLink: n, propNames: o } = t,
		i = {};
	for (const a in e)
		Object.prototype.hasOwnProperty.call(e, a) &&
			(bo.has(a) || (r && mo.has(a)) || (n && ho.has(a)) || o?.has(a) || $o.test(a)) &&
			(i[a] = e[a]);
	return i;
}
function J(e) {
	if (wo()) e.focus({ preventScroll: !0 });
	else {
		let t = To(e);
		e.focus(), Eo(t);
	}
}
let Oe = null;
function wo() {
	if (Oe == null) {
		Oe = !1;
		try {
			var e = document.createElement('div');
			e.focus({
				get preventScroll() {
					return (Oe = !0), !0;
				},
			});
		} catch {}
	}
	return Oe;
}
function To(e) {
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
function Eo(e) {
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
function Ot(e) {
	var t;
	return typeof window < 'u' && window.navigator != null
		? e.test(
				((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) ||
					window.navigator.platform
		  )
		: !1;
}
function pe() {
	return Ot(/^Mac/i);
}
function Po() {
	return Ot(/^iPhone/i);
}
function Or() {
	return Ot(/^iPad/i) || (pe() && navigator.maxTouchPoints > 1);
}
function Ne() {
	return Po() || Or();
}
function Gi() {
	return pe() || Ne();
}
function xo() {
	return at(/AppleWebKit/i) && !So();
}
function So() {
	return at(/Chrome/i);
}
function Fr() {
	return at(/Android/i);
}
function Co() {
	return at(/Firefox/i);
}
const Lo = h.createContext({ isNative: !0, open: ko });
function Ui() {
	return h.useContext(Lo);
}
function le(e, t, r = !0) {
	var n, o;
	let { metaKey: i, ctrlKey: a, altKey: l, shiftKey: c } = t;
	Co() &&
		!((n = window.event) === null || n === void 0 || (o = n.type) === null || o === void 0) &&
		o.startsWith('key') &&
		e.target === '_blank' &&
		(pe() ? (i = !0) : (a = !0));
	let p =
		xo() && pe() && !Or()
			? new KeyboardEvent('keydown', {
					keyIdentifier: 'Enter',
					metaKey: i,
					ctrlKey: a,
					altKey: l,
					shiftKey: c,
			  })
			: new MouseEvent('click', {
					metaKey: i,
					ctrlKey: a,
					altKey: l,
					shiftKey: c,
					bubbles: !0,
					cancelable: !0,
			  });
	(le.isOpening = r), J(e), e.dispatchEvent(p), (le.isOpening = !1);
}
le.isOpening = !1;
function Mo(e, t) {
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
function ko(e, t) {
	Mo(e, (r) => le(r, t));
}
let we = new Map(),
	$t = new Set();
function qt() {
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
				for (let o of $t) o();
				$t.clear();
			}
		};
	document.body.addEventListener('transitionrun', e),
		document.body.addEventListener('transitionend', t);
}
typeof document < 'u' &&
	(document.readyState !== 'loading' ? qt() : document.addEventListener('DOMContentLoaded', qt));
function Ft(e) {
	requestAnimationFrame(() => {
		we.size === 0 ? e() : $t.add(e);
	});
}
function Rt() {
	let e = h.useRef(new Map()),
		t = h.useCallback((o, i, a, l) => {
			let c = l?.once
				? (...p) => {
						e.current.delete(a), a(...p);
				  }
				: a;
			e.current.set(a, { type: i, eventTarget: o, fn: c, options: l }), o.addEventListener(i, a, l);
		}, []),
		r = h.useCallback((o, i, a, l) => {
			var c;
			let p = ((c = e.current.get(a)) === null || c === void 0 ? void 0 : c.fn) || a;
			o.removeEventListener(i, p, l), e.current.delete(a);
		}, []),
		n = h.useCallback(() => {
			e.current.forEach((o, i) => {
				r(o.eventTarget, o.type, i, o.options);
			});
		}, [r]);
	return (
		h.useEffect(() => n, [n]),
		{ addGlobalListener: t, removeGlobalListener: r, removeAllGlobalListeners: n }
	);
}
function Ao(e, t) {
	let { id: r, 'aria-label': n, 'aria-labelledby': o } = e;
	return (
		(r = Nt(r)),
		o && n
			? (o = [...new Set([r, ...o.trim().split(/\s+/)])].join(' '))
			: o && (o = o.trim().split(/\s+/).join(' ')),
		!n && !o && t && (n = t),
		{ id: r, 'aria-label': n, 'aria-labelledby': o }
	);
}
function Io() {
	return typeof window.ResizeObserver < 'u';
}
function No(e) {
	const { ref: t, onResize: r } = e;
	h.useEffect(() => {
		let n = t?.current;
		if (n)
			if (Io()) {
				const o = new window.ResizeObserver((i) => {
					i.length && r();
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
function Kt(e, t) {
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
function Jt(e) {
	for (Zt(e) && (e = e.parentElement); e && !Zt(e); ) e = e.parentElement;
	return e || document.scrollingElement || document.documentElement;
}
function Zt(e) {
	let t = window.getComputedStyle(e);
	return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
let Oo = 0;
const lt = new Map();
function Fo(e) {
	let [t, r] = h.useState(void 0);
	return (
		G(() => {
			if (!e) return;
			let n = lt.get(e);
			if (n) r(n.element.id);
			else {
				let o = `react-aria-description-${Oo++}`;
				r(o);
				let i = document.createElement('div');
				(i.id = o),
					(i.style.display = 'none'),
					(i.textContent = e),
					document.body.appendChild(i),
					(n = { refCount: 0, element: i }),
					lt.set(e, n);
			}
			return (
				n.refCount++,
				() => {
					--n.refCount === 0 && (n.element.remove(), lt.delete(e));
				}
			);
		}, [e]),
		{ 'aria-describedby': e ? t : void 0 }
	);
}
function ji(e, t, r, n) {
	let o = j(r),
		i = r == null;
	h.useEffect(() => {
		if (i) return;
		let a = e.current;
		return (
			a.addEventListener(t, o, n),
			() => {
				a.removeEventListener(t, o, n);
			}
		);
	}, [e, t, n, i, o]);
}
function Ro(e, t) {
	let r = Qt(e, t, 'left'),
		n = Qt(e, t, 'top'),
		o = t.offsetWidth,
		i = t.offsetHeight,
		a = e.scrollLeft,
		l = e.scrollTop,
		{ borderTopWidth: c, borderLeftWidth: p } = getComputedStyle(e),
		v = e.scrollLeft + parseInt(p, 10),
		y = e.scrollTop + parseInt(c, 10),
		g = v + e.clientWidth,
		m = y + e.clientHeight;
	r <= a ? (a = r - parseInt(p, 10)) : r + o > g && (a += r + o - g),
		n <= y ? (l = n - parseInt(c, 10)) : n + i > m && (l += n + i - m),
		(e.scrollLeft = a),
		(e.scrollTop = l);
}
function Qt(e, t, r) {
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
function _i(e, t) {
	if (document.contains(e)) {
		let a = document.scrollingElement || document.documentElement;
		if (window.getComputedStyle(a).overflow === 'hidden') {
			let c = Jt(e);
			for (; e && c && e !== a && c !== a; ) Ro(c, e), (e = c), (c = Jt(e));
		} else {
			var r;
			let { left: c, top: p } = e.getBoundingClientRect();
			e == null ||
				(r = e.scrollIntoView) === null ||
				r === void 0 ||
				r.call(e, { block: 'nearest' });
			let { left: v, top: y } = e.getBoundingClientRect();
			if (Math.abs(c - v) > 1 || Math.abs(p - y) > 1) {
				var n, o, i;
				t == null ||
					(n = t.containingElement) === null ||
					n === void 0 ||
					(o = n.scrollIntoView) === null ||
					o === void 0 ||
					o.call(n, { block: 'center', inline: 'center' }),
					(i = e.scrollIntoView) === null || i === void 0 || i.call(e, { block: 'nearest' });
			}
		}
	}
}
function Ae(e) {
	return e.mozInputSource === 0 && e.isTrusted
		? !0
		: Fr() && e.pointerType
		? e.type === 'click' && e.buttons === 1
		: e.detail === 0 && !e.pointerType;
}
function Rr(e) {
	return (
		(!Fr() && e.width === 0 && e.height === 0) ||
		(e.width === 1 &&
			e.height === 1 &&
			e.pressure === 0 &&
			e.detail === 0 &&
			e.pointerType === 'mouse')
	);
}
function Vi(e, t, r) {
	let n = h.useRef(t),
		o = j(() => {
			r && r(n.current);
		});
	h.useEffect(() => {
		var i;
		let a = e == null || (i = e.current) === null || i === void 0 ? void 0 : i.form;
		return (
			a?.addEventListener('reset', o),
			() => {
				a?.removeEventListener('reset', o);
			}
		);
	}, [e, o]);
}
const Ko = new Set([
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
	Do = new Set([
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
function Ho(e) {
	if (Intl.Locale) {
		let r = new Intl.Locale(e).maximize().script;
		return Ko.has(r);
	}
	let t = e.split('-')[0];
	return Do.has(t);
}
function Kr() {
	let e = (typeof navigator < 'u' && (navigator.language || navigator.userLanguage)) || 'en-US';
	try {
		Intl.DateTimeFormat.supportedLocalesOf([e]);
	} catch {
		e = 'en-US';
	}
	return { locale: e, direction: Ho(e) ? 'rtl' : 'ltr' };
}
let yt = Kr(),
	Me = new Set();
function er() {
	yt = Kr();
	for (let e of Me) e(yt);
}
function Wo() {
	let e = ot(),
		[t, r] = h.useState(yt);
	return (
		h.useEffect(
			() => (
				Me.size === 0 && window.addEventListener('languagechange', er),
				Me.add(r),
				() => {
					Me.delete(r), Me.size === 0 && window.removeEventListener('languagechange', er);
				}
			),
			[]
		),
		e ? { locale: 'en-US', direction: 'ltr' } : t
	);
}
const zo = D.createContext(null);
function Dt() {
	let e = Wo();
	return h.useContext(zo) || e;
}
const tr = new WeakMap();
function Go(e) {
	let t = tr.get(e);
	return t || ((t = new ao(e)), tr.set(e, t)), t;
}
function Uo(e) {
	let { locale: t } = Dt(),
		r = h.useMemo(() => Go(e), [e]);
	return h.useMemo(() => new lo(t, r), [t, r]);
}
let ut = new Map();
function Bi(e) {
	let { locale: t } = Dt(),
		r =
			t +
			(e
				? Object.entries(e)
						.sort((o, i) => (o[0] < i[0] ? -1 : 1))
						.join()
				: '');
	if (ut.has(r)) return ut.get(r);
	let n = new Intl.Collator(t, e);
	return ut.set(r, n), n;
}
function jo(e, t) {
	return t.get ? t.get.call(e) : t.value;
}
function Dr(e, t, r) {
	if (!t.has(e)) throw new TypeError('attempted to ' + r + ' private field on non-instance');
	return t.get(e);
}
function _o(e, t) {
	var r = Dr(e, t, 'get');
	return jo(e, r);
}
function Vo(e, t, r) {
	if (t.set) t.set.call(e, r);
	else {
		if (!t.writable) throw new TypeError('attempted to set read only private field');
		t.value = r;
	}
}
function rr(e, t, r) {
	var n = Dr(e, t, 'set');
	return Vo(e, n, r), r;
}
let Te = 'default',
	wt = '',
	je = new WeakMap();
function nr(e) {
	Ne()
		? (Te === 'default' &&
				((wt = document.documentElement.style.webkitUserSelect),
				(document.documentElement.style.webkitUserSelect = 'none')),
		  (Te = 'disabled'))
		: (e instanceof HTMLElement || e instanceof SVGElement) &&
		  (je.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function Fe(e) {
	if (Ne()) {
		if (Te !== 'disabled') return;
		(Te = 'restoring'),
			setTimeout(() => {
				Ft(() => {
					Te === 'restoring' &&
						(document.documentElement.style.webkitUserSelect === 'none' &&
							(document.documentElement.style.webkitUserSelect = wt || ''),
						(wt = ''),
						(Te = 'default'));
				});
			}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && je.has(e)) {
		let t = je.get(e);
		e.style.userSelect === 'none' && (e.style.userSelect = t),
			e.getAttribute('style') === '' && e.removeAttribute('style'),
			je.delete(e);
	}
}
const Ht = D.createContext(null);
Ht.displayName = 'PressResponderContext';
function Bo(e) {
	let t = h.useContext(Ht);
	if (t) {
		let { register: r, ...n } = t;
		(e = Z(n, e)), r();
	}
	return Kt(t, e.ref), e;
}
var Re = new WeakMap();
class Ke {
	continuePropagation() {
		rr(this, Re, !1);
	}
	get shouldStopPropagation() {
		return _o(this, Re);
	}
	constructor(t, r, n) {
		co(this, Re, { writable: !0, value: void 0 }),
			rr(this, Re, !0),
			(this.type = t),
			(this.pointerType = r),
			(this.target = n.currentTarget),
			(this.shiftKey = n.shiftKey),
			(this.metaKey = n.metaKey),
			(this.ctrlKey = n.ctrlKey),
			(this.altKey = n.altKey);
	}
}
const or = Symbol('linkClicked');
function Xo(e) {
	let {
			onPress: t,
			onPressChange: r,
			onPressStart: n,
			onPressEnd: o,
			onPressUp: i,
			isDisabled: a,
			isPressed: l,
			preventFocusOnPress: c,
			shouldCancelOnPointerExit: p,
			allowTextSelectionOnPress: v,
			ref: y,
			...g
		} = Bo(e),
		[m, $] = h.useState(!1),
		P = h.useRef({
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
		{ addGlobalListener: T, removeAllGlobalListeners: C } = Rt(),
		x = j((s, w) => {
			let M = P.current;
			if (a || M.didFirePressStart) return;
			let d = !0;
			if (((M.isTriggeringEvent = !0), n)) {
				let b = new Ke('pressstart', w, s);
				n(b), (d = b.shouldStopPropagation);
			}
			return r && r(!0), (M.isTriggeringEvent = !1), (M.didFirePressStart = !0), $(!0), d;
		}),
		S = j((s, w, M = !0) => {
			let d = P.current;
			if (!d.didFirePressStart) return;
			(d.ignoreClickAfterPress = !0), (d.didFirePressStart = !1), (d.isTriggeringEvent = !0);
			let b = !0;
			if (o) {
				let u = new Ke('pressend', w, s);
				o(u), (b = u.shouldStopPropagation);
			}
			if ((r && r(!1), $(!1), t && M && !a)) {
				let u = new Ke('press', w, s);
				t(u), b && (b = u.shouldStopPropagation);
			}
			return (d.isTriggeringEvent = !1), b;
		}),
		A = j((s, w) => {
			let M = P.current;
			if (!a) {
				if (i) {
					M.isTriggeringEvent = !0;
					let d = new Ke('pressup', w, s);
					return i(d), (M.isTriggeringEvent = !1), d.shouldStopPropagation;
				}
				return !0;
			}
		}),
		I = j((s) => {
			let w = P.current;
			w.isPressed &&
				(w.isOverTarget && S(ee(w.target, s), w.pointerType, !1),
				(w.isPressed = !1),
				(w.isOverTarget = !1),
				(w.activePointerId = null),
				(w.pointerType = null),
				C(),
				v || Fe(w.target));
		}),
		N = j((s) => {
			p && I(s);
		}),
		H = h.useMemo(() => {
			let s = P.current,
				w = {
					onKeyDown(d) {
						if (ct(d.nativeEvent, d.currentTarget) && d.currentTarget.contains(d.target)) {
							ir(d.target, d.key) && d.preventDefault();
							let b = !0;
							!s.isPressed &&
								!d.repeat &&
								((s.target = d.currentTarget),
								(s.isPressed = !0),
								(b = x(d, 'keyboard')),
								T(document, 'keyup', M, !1)),
								b && d.stopPropagation(),
								d.metaKey && pe() && s.metaKeyEvents.set(d.key, d.nativeEvent);
						} else d.key === 'Meta' && (s.metaKeyEvents = new Map());
					},
					onKeyUp(d) {
						ct(d.nativeEvent, d.currentTarget) &&
							!d.repeat &&
							d.currentTarget.contains(d.target) &&
							A(ee(s.target, d), 'keyboard');
					},
					onClick(d) {
						if (
							!(d && !d.currentTarget.contains(d.target)) &&
							d &&
							d.button === 0 &&
							!s.isTriggeringEvent &&
							!le.isOpening
						) {
							let b = !0;
							if (
								(a && d.preventDefault(),
								!s.ignoreClickAfterPress &&
									!s.ignoreEmulatedMouseEvents &&
									!s.isPressed &&
									(s.pointerType === 'virtual' || Ae(d.nativeEvent)))
							) {
								!a && !c && J(d.currentTarget);
								let u = x(d, 'virtual'),
									f = A(d, 'virtual'),
									E = S(d, 'virtual');
								b = u && f && E;
							}
							(s.ignoreEmulatedMouseEvents = !1),
								(s.ignoreClickAfterPress = !1),
								b && d.stopPropagation();
						}
					},
				},
				M = (d) => {
					var b;
					if (s.isPressed && ct(d, s.target)) {
						var u;
						ir(d.target, d.key) && d.preventDefault();
						let f = d.target,
							E = S(ee(s.target, d), 'keyboard', s.target.contains(f));
						C(),
							E && d.stopPropagation(),
							d.key !== 'Enter' &&
								Wt(s.target) &&
								s.target.contains(f) &&
								!d[or] &&
								((d[or] = !0), le(s.target, d, !1)),
							(s.isPressed = !1),
							(u = s.metaKeyEvents) === null || u === void 0 || u.delete(d.key);
					} else if (
						d.key === 'Meta' &&
						!((b = s.metaKeyEvents) === null || b === void 0) &&
						b.size
					) {
						let f = s.metaKeyEvents;
						s.metaKeyEvents = null;
						for (let E of f.values()) s.target.dispatchEvent(new KeyboardEvent('keyup', E));
					}
				};
			if (typeof PointerEvent < 'u') {
				(w.onPointerDown = (f) => {
					if (f.button !== 0 || !f.currentTarget.contains(f.target)) return;
					if (Rr(f.nativeEvent)) {
						s.pointerType = 'virtual';
						return;
					}
					dt(f.currentTarget) && f.preventDefault(), (s.pointerType = f.pointerType);
					let E = !0;
					s.isPressed ||
						((s.isPressed = !0),
						(s.isOverTarget = !0),
						(s.activePointerId = f.pointerId),
						(s.target = f.currentTarget),
						!a && !c && J(f.currentTarget),
						v || nr(s.target),
						(E = x(f, s.pointerType)),
						T(document, 'pointermove', d, !1),
						T(document, 'pointerup', b, !1),
						T(document, 'pointercancel', u, !1)),
						E && f.stopPropagation();
				}),
					(w.onMouseDown = (f) => {
						f.currentTarget.contains(f.target) &&
							f.button === 0 &&
							(dt(f.currentTarget) && f.preventDefault(), f.stopPropagation());
					}),
					(w.onPointerUp = (f) => {
						!f.currentTarget.contains(f.target) ||
							s.pointerType === 'virtual' ||
							(f.button === 0 && be(f, f.currentTarget) && A(f, s.pointerType || f.pointerType));
					});
				let d = (f) => {
						f.pointerId === s.activePointerId &&
							(be(f, s.target)
								? s.isOverTarget || ((s.isOverTarget = !0), x(ee(s.target, f), s.pointerType))
								: s.isOverTarget &&
								  ((s.isOverTarget = !1), S(ee(s.target, f), s.pointerType, !1), N(f)));
					},
					b = (f) => {
						f.pointerId === s.activePointerId &&
							s.isPressed &&
							f.button === 0 &&
							(be(f, s.target)
								? S(ee(s.target, f), s.pointerType)
								: s.isOverTarget && S(ee(s.target, f), s.pointerType, !1),
							(s.isPressed = !1),
							(s.isOverTarget = !1),
							(s.activePointerId = null),
							(s.pointerType = null),
							C(),
							v || Fe(s.target));
					},
					u = (f) => {
						I(f);
					};
				w.onDragStart = (f) => {
					f.currentTarget.contains(f.target) && I(f);
				};
			} else {
				(w.onMouseDown = (u) => {
					if (u.button !== 0 || !u.currentTarget.contains(u.target)) return;
					if ((dt(u.currentTarget) && u.preventDefault(), s.ignoreEmulatedMouseEvents)) {
						u.stopPropagation();
						return;
					}
					(s.isPressed = !0),
						(s.isOverTarget = !0),
						(s.target = u.currentTarget),
						(s.pointerType = Ae(u.nativeEvent) ? 'virtual' : 'mouse'),
						!a && !c && J(u.currentTarget),
						x(u, s.pointerType) && u.stopPropagation(),
						T(document, 'mouseup', d, !1);
				}),
					(w.onMouseEnter = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						let f = !0;
						s.isPressed &&
							!s.ignoreEmulatedMouseEvents &&
							((s.isOverTarget = !0), (f = x(u, s.pointerType))),
							f && u.stopPropagation();
					}),
					(w.onMouseLeave = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						let f = !0;
						s.isPressed &&
							!s.ignoreEmulatedMouseEvents &&
							((s.isOverTarget = !1), (f = S(u, s.pointerType, !1)), N(u)),
							f && u.stopPropagation();
					}),
					(w.onMouseUp = (u) => {
						u.currentTarget.contains(u.target) &&
							!s.ignoreEmulatedMouseEvents &&
							u.button === 0 &&
							A(u, s.pointerType || 'mouse');
					});
				let d = (u) => {
					if (u.button === 0) {
						if (((s.isPressed = !1), C(), s.ignoreEmulatedMouseEvents)) {
							s.ignoreEmulatedMouseEvents = !1;
							return;
						}
						be(u, s.target)
							? S(ee(s.target, u), s.pointerType)
							: s.isOverTarget && S(ee(s.target, u), s.pointerType, !1),
							(s.isOverTarget = !1);
					}
				};
				(w.onTouchStart = (u) => {
					if (!u.currentTarget.contains(u.target)) return;
					let f = Yo(u.nativeEvent);
					if (!f) return;
					(s.activePointerId = f.identifier),
						(s.ignoreEmulatedMouseEvents = !0),
						(s.isOverTarget = !0),
						(s.isPressed = !0),
						(s.target = u.currentTarget),
						(s.pointerType = 'touch'),
						!a && !c && J(u.currentTarget),
						v || nr(s.target),
						x(u, s.pointerType) && u.stopPropagation(),
						T(window, 'scroll', b, !0);
				}),
					(w.onTouchMove = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						if (!s.isPressed) {
							u.stopPropagation();
							return;
						}
						let f = ar(u.nativeEvent, s.activePointerId),
							E = !0;
						f && be(f, u.currentTarget)
							? s.isOverTarget || ((s.isOverTarget = !0), (E = x(u, s.pointerType)))
							: s.isOverTarget && ((s.isOverTarget = !1), (E = S(u, s.pointerType, !1)), N(u)),
							E && u.stopPropagation();
					}),
					(w.onTouchEnd = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						if (!s.isPressed) {
							u.stopPropagation();
							return;
						}
						let f = ar(u.nativeEvent, s.activePointerId),
							E = !0;
						f && be(f, u.currentTarget)
							? (A(u, s.pointerType), (E = S(u, s.pointerType)))
							: s.isOverTarget && (E = S(u, s.pointerType, !1)),
							E && u.stopPropagation(),
							(s.isPressed = !1),
							(s.activePointerId = null),
							(s.isOverTarget = !1),
							(s.ignoreEmulatedMouseEvents = !0),
							v || Fe(s.target),
							C();
					}),
					(w.onTouchCancel = (u) => {
						u.currentTarget.contains(u.target) && (u.stopPropagation(), s.isPressed && I(u));
					});
				let b = (u) => {
					s.isPressed &&
						u.target.contains(s.target) &&
						I({ currentTarget: s.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
				};
				w.onDragStart = (u) => {
					u.currentTarget.contains(u.target) && I(u);
				};
			}
			return w;
		}, [T, a, c, C, v, I, N, S, x, A]);
	return (
		h.useEffect(
			() => () => {
				v || Fe(P.current.target);
			},
			[v]
		),
		{ isPressed: l || m, pressProps: Z(g, H) }
	);
}
function Wt(e) {
	return e.tagName === 'A' && e.hasAttribute('href');
}
function ct(e, t) {
	const { key: r, code: n } = e,
		o = t,
		i = o.getAttribute('role');
	return (
		(r === 'Enter' || r === ' ' || r === 'Spacebar' || n === 'Space') &&
		!(
			(o instanceof HTMLInputElement && !Hr(o, r)) ||
			o instanceof HTMLTextAreaElement ||
			o.isContentEditable
		) &&
		!((i === 'link' || (!i && Wt(o))) && r !== 'Enter')
	);
}
function Yo(e) {
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
function qo(e) {
	let t = e.width / 2 || e.radiusX || 0,
		r = e.height / 2 || e.radiusY || 0;
	return { top: e.clientY - r, right: e.clientX + t, bottom: e.clientY + r, left: e.clientX - t };
}
function Jo(e, t) {
	return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function be(e, t) {
	let r = t.getBoundingClientRect(),
		n = qo(e);
	return Jo(r, n);
}
function dt(e) {
	return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function ir(e, t) {
	return e instanceof HTMLInputElement
		? !Hr(e, t)
		: e instanceof HTMLButtonElement
		? e.type !== 'submit' && e.type !== 'reset'
		: !Wt(e);
}
const Zo = new Set([
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
function Hr(e, t) {
	return e.type === 'checkbox' || e.type === 'radio' ? t === ' ' : Zo.has(e.type);
}
function Qo({ children: e }) {
	return D.createElement(Ht.Provider, { value: void 0 }, e);
}
class ea {
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
function Wr(e) {
	let t = h.useRef({ isFocused: !1, observer: null });
	G(() => {
		const n = t.current;
		return () => {
			n.observer && (n.observer.disconnect(), (n.observer = null));
		};
	}, []);
	let r = j((n) => {
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
					i = (a) => {
						(t.current.isFocused = !1),
							o.disabled && r(new ea('blur', a)),
							t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
					};
				o.addEventListener('focusout', i, { once: !0 }),
					(t.current.observer = new MutationObserver(() => {
						if (t.current.isFocused && o.disabled) {
							t.current.observer.disconnect();
							let a = o === document.activeElement ? null : document.activeElement;
							o.dispatchEvent(new FocusEvent('blur', { relatedTarget: a })),
								o.dispatchEvent(new FocusEvent('focusout', { bubbles: !0, relatedTarget: a }));
						}
					})),
					t.current.observer.observe(o, { attributes: !0, attributeFilter: ['disabled'] });
			}
		},
		[r]
	);
}
function zr(e) {
	let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
	const i = h.useCallback(
			(c) => {
				if (c.target === c.currentTarget) return n && n(c), o && o(!1), !0;
			},
			[n, o]
		),
		a = Wr(i),
		l = h.useCallback(
			(c) => {
				c.target === c.currentTarget &&
					document.activeElement === c.target &&
					(r && r(c), o && o(!0), a(c));
			},
			[o, r, a]
		);
	return {
		focusProps: { onFocus: !t && (r || o || n) ? l : void 0, onBlur: !t && (n || o) ? i : void 0 },
	};
}
let oe = null,
	Ie = new Set(),
	sr = !1,
	ve = !1,
	Tt = !1;
const ta = { Tab: !0, Escape: !0 };
function it(e, t) {
	for (let r of Ie) r(e, t);
}
function ra(e) {
	return !(
		e.metaKey ||
		(!pe() && e.altKey) ||
		e.ctrlKey ||
		e.key === 'Control' ||
		e.key === 'Shift' ||
		e.key === 'Meta'
	);
}
function lr(e) {
	(ve = !0), ra(e) && ((oe = 'keyboard'), it('keyboard', e));
}
function me(e) {
	(oe = 'pointer'),
		(e.type === 'mousedown' || e.type === 'pointerdown') && ((ve = !0), it('pointer', e));
}
function na(e) {
	Ae(e) && ((ve = !0), (oe = 'virtual'));
}
function oa(e) {
	e.target === window ||
		e.target === document ||
		(!ve && !Tt && ((oe = 'virtual'), it('virtual', e)), (ve = !1), (Tt = !1));
}
function aa() {
	(ve = !1), (Tt = !0);
}
function Ye() {
	if (typeof window > 'u' || sr) return;
	let e = HTMLElement.prototype.focus;
	(HTMLElement.prototype.focus = function () {
		(ve = !0), e.apply(this, arguments);
	}),
		document.addEventListener('keydown', lr, !0),
		document.addEventListener('keyup', lr, !0),
		document.addEventListener('click', na, !0),
		window.addEventListener('focus', oa, !0),
		window.addEventListener('blur', aa, !1),
		typeof PointerEvent < 'u'
			? (document.addEventListener('pointerdown', me, !0),
			  document.addEventListener('pointermove', me, !0),
			  document.addEventListener('pointerup', me, !0))
			: (document.addEventListener('mousedown', me, !0),
			  document.addEventListener('mousemove', me, !0),
			  document.addEventListener('mouseup', me, !0)),
		(sr = !0);
}
typeof document < 'u' &&
	(document.readyState !== 'loading' ? Ye() : document.addEventListener('DOMContentLoaded', Ye));
function Gr() {
	return oe !== 'pointer';
}
function ia() {
	return oe;
}
function Xi(e) {
	(oe = e), it(e, null);
}
function Yi() {
	Ye();
	let [e, t] = h.useState(oe);
	return (
		h.useEffect(() => {
			let r = () => {
				t(oe);
			};
			return (
				Ie.add(r),
				() => {
					Ie.delete(r);
				}
			);
		}, []),
		ot() ? null : e
	);
}
function sa(e, t, r) {
	return !(e && t === 'keyboard' && r instanceof KeyboardEvent && !ta[r.key]);
}
function la(e, t, r) {
	Ye(),
		h.useEffect(() => {
			let n = (o, i) => {
				sa(r?.isTextInput, o, i) && e(Gr());
			};
			return (
				Ie.add(n),
				() => {
					Ie.delete(n);
				}
			);
		}, t);
}
function zt(e) {
	let { isDisabled: t, onBlurWithin: r, onFocusWithin: n, onFocusWithinChange: o } = e,
		i = h.useRef({ isFocusWithin: !1 }),
		a = h.useCallback(
			(p) => {
				i.current.isFocusWithin &&
					!p.currentTarget.contains(p.relatedTarget) &&
					((i.current.isFocusWithin = !1), r && r(p), o && o(!1));
			},
			[r, o, i]
		),
		l = Wr(a),
		c = h.useCallback(
			(p) => {
				!i.current.isFocusWithin &&
					document.activeElement === p.target &&
					(n && n(p), o && o(!0), (i.current.isFocusWithin = !0), l(p));
			},
			[n, o, l]
		);
	return t
		? { focusWithinProps: { onFocus: null, onBlur: null } }
		: { focusWithinProps: { onFocus: c, onBlur: a } };
}
let qe = !1,
	ft = 0;
function Et() {
	(qe = !0),
		setTimeout(() => {
			qe = !1;
		}, 50);
}
function ur(e) {
	e.pointerType === 'touch' && Et();
}
function ua() {
	if (!(typeof document > 'u'))
		return (
			typeof PointerEvent < 'u'
				? document.addEventListener('pointerup', ur)
				: document.addEventListener('touchend', Et),
			ft++,
			() => {
				ft--,
					!(ft > 0) &&
						(typeof PointerEvent < 'u'
							? document.removeEventListener('pointerup', ur)
							: document.removeEventListener('touchend', Et));
			}
		);
}
function qi(e) {
	let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e,
		[i, a] = h.useState(!1),
		l = h.useRef({
			isHovered: !1,
			ignoreEmulatedMouseEvents: !1,
			pointerType: '',
			target: null,
		}).current;
	h.useEffect(ua, []);
	let { hoverProps: c, triggerHoverEnd: p } = h.useMemo(() => {
		let v = (m, $) => {
				if (
					((l.pointerType = $),
					o || $ === 'touch' || l.isHovered || !m.currentTarget.contains(m.target))
				)
					return;
				l.isHovered = !0;
				let P = m.currentTarget;
				(l.target = P),
					t && t({ type: 'hoverstart', target: P, pointerType: $ }),
					r && r(!0),
					a(!0);
			},
			y = (m, $) => {
				if (((l.pointerType = ''), (l.target = null), $ === 'touch' || !l.isHovered)) return;
				l.isHovered = !1;
				let P = m.currentTarget;
				n && n({ type: 'hoverend', target: P, pointerType: $ }), r && r(!1), a(!1);
			},
			g = {};
		return (
			typeof PointerEvent < 'u'
				? ((g.onPointerEnter = (m) => {
						(qe && m.pointerType === 'mouse') || v(m, m.pointerType);
				  }),
				  (g.onPointerLeave = (m) => {
						!o && m.currentTarget.contains(m.target) && y(m, m.pointerType);
				  }))
				: ((g.onTouchStart = () => {
						l.ignoreEmulatedMouseEvents = !0;
				  }),
				  (g.onMouseEnter = (m) => {
						!l.ignoreEmulatedMouseEvents && !qe && v(m, 'mouse'),
							(l.ignoreEmulatedMouseEvents = !1);
				  }),
				  (g.onMouseLeave = (m) => {
						!o && m.currentTarget.contains(m.target) && y(m, 'mouse');
				  })),
			{ hoverProps: g, triggerHoverEnd: y }
		);
	}, [t, r, n, o, l]);
	return (
		h.useEffect(() => {
			o && p({ currentTarget: l.target }, l.pointerType);
		}, [o]),
		{ hoverProps: c, isHovered: i }
	);
}
function ca(e) {
	let { ref: t, onInteractOutside: r, isDisabled: n, onInteractOutsideStart: o } = e,
		i = h.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
		a = j((c) => {
			r && De(c, t) && (o && o(c), (i.current.isPointerDown = !0));
		}),
		l = j((c) => {
			r && r(c);
		});
	h.useEffect(() => {
		let c = i.current;
		if (!n)
			if (typeof PointerEvent < 'u') {
				let p = (v) => {
					c.isPointerDown && De(v, t) && l(v), (c.isPointerDown = !1);
				};
				return (
					document.addEventListener('pointerdown', a, !0),
					document.addEventListener('pointerup', p, !0),
					() => {
						document.removeEventListener('pointerdown', a, !0),
							document.removeEventListener('pointerup', p, !0);
					}
				);
			} else {
				let p = (y) => {
						c.ignoreEmulatedMouseEvents
							? (c.ignoreEmulatedMouseEvents = !1)
							: c.isPointerDown && De(y, t) && l(y),
							(c.isPointerDown = !1);
					},
					v = (y) => {
						(c.ignoreEmulatedMouseEvents = !0),
							c.isPointerDown && De(y, t) && l(y),
							(c.isPointerDown = !1);
					};
				return (
					document.addEventListener('mousedown', a, !0),
					document.addEventListener('mouseup', p, !0),
					document.addEventListener('touchstart', a, !0),
					document.addEventListener('touchend', v, !0),
					() => {
						document.removeEventListener('mousedown', a, !0),
							document.removeEventListener('mouseup', p, !0),
							document.removeEventListener('touchstart', a, !0),
							document.removeEventListener('touchend', v, !0);
					}
				);
			}
	}, [t, n, a, l]);
}
function De(e, t) {
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
function cr(e) {
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
function da(e) {
	return {
		keyboardProps: e.isDisabled ? {} : { onKeyDown: cr(e.onKeyDown), onKeyUp: cr(e.onKeyUp) },
	};
}
const fa = 500;
function Ji(e) {
	let {
		isDisabled: t,
		onLongPressStart: r,
		onLongPressEnd: n,
		onLongPress: o,
		threshold: i = fa,
		accessibilityDescription: a,
	} = e;
	const l = h.useRef(null);
	let { addGlobalListener: c, removeGlobalListener: p } = Rt(),
		{ pressProps: v } = Xo({
			isDisabled: t,
			onPressStart(g) {
				if (
					(g.continuePropagation(),
					(g.pointerType === 'mouse' || g.pointerType === 'touch') &&
						(r && r({ ...g, type: 'longpressstart' }),
						(l.current = setTimeout(() => {
							g.target.dispatchEvent(new PointerEvent('pointercancel', { bubbles: !0 })),
								o && o({ ...g, type: 'longpress' }),
								(l.current = null);
						}, i)),
						g.pointerType === 'touch'))
				) {
					let m = ($) => {
						$.preventDefault();
					};
					c(g.target, 'contextmenu', m, { once: !0 }),
						c(
							window,
							'pointerup',
							() => {
								setTimeout(() => {
									p(g.target, 'contextmenu', m);
								}, 30);
							},
							{ once: !0 }
						);
				}
			},
			onPressEnd(g) {
				l.current && clearTimeout(l.current),
					n &&
						(g.pointerType === 'mouse' || g.pointerType === 'touch') &&
						n({ ...g, type: 'longpressend' });
			},
		}),
		y = Fo(o && !t ? a : null);
	return { longPressProps: Z(v, y) };
}
function Ur(e) {
	if (ia() === 'virtual') {
		let t = document.activeElement;
		Ft(() => {
			document.activeElement === t && document.contains(e) && J(e);
		});
	} else J(e);
}
function pa(e) {
	if (!(e instanceof HTMLElement) && !(e instanceof SVGElement)) return !1;
	let { display: t, visibility: r } = e.style,
		n = t !== 'none' && r !== 'hidden' && r !== 'collapse';
	if (n) {
		const { getComputedStyle: o } = e.ownerDocument.defaultView;
		let { display: i, visibility: a } = o(e);
		n = i !== 'none' && a !== 'hidden' && a !== 'collapse';
	}
	return n;
}
function va(e, t) {
	return (
		!e.hasAttribute('hidden') &&
		(e.nodeName === 'DETAILS' && t && t.nodeName !== 'SUMMARY' ? e.hasAttribute('open') : !0)
	);
}
function jr(e, t) {
	return (
		e.nodeName !== '#comment' && pa(e) && va(e, t) && (!e.parentElement || jr(e.parentElement, e))
	);
}
const dr = D.createContext(null);
let K = null;
function ga(e) {
	let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e,
		i = h.useRef(),
		a = h.useRef(),
		l = h.useRef([]),
		{ parentNode: c } = h.useContext(dr) || {},
		p = h.useMemo(() => new Pt({ scopeRef: l }), [l]);
	G(() => {
		let g = c || z.root;
		if (z.getTreeNode(g.scopeRef) && K && !Ze(K, g.scopeRef)) {
			let m = z.getTreeNode(K);
			m && (g = m);
		}
		g.addChild(p), z.addNode(p);
	}, [p, c]),
		G(() => {
			let g = z.getTreeNode(l);
			g.contain = r;
		}, [r]),
		G(() => {
			let g = i.current.nextSibling,
				m = [];
			for (; g && g !== a.current; ) m.push(g), (g = g.nextSibling);
			l.current = m;
		}, [t]),
		Ta(l, n, r),
		$a(l, r),
		Pa(l, n, r),
		wa(l, o),
		h.useEffect(() => {
			if (l) {
				let g = document.activeElement,
					m = null;
				if (_(g, l.current)) {
					for (let $ of z.traverse()) _(g, $.scopeRef.current) && (m = $);
					m === z.getTreeNode(l) && (K = m.scopeRef);
				}
				return () => {
					let $ = z.getTreeNode(l).parent.scopeRef;
					(l === K || Ze(l, K)) && (!$ || z.getTreeNode($)) && (K = $), z.removeTreeNode(l);
				};
			}
		}, [l]);
	let v = h.useMemo(() => ba(l), []),
		y = h.useMemo(() => ({ focusManager: v, parentNode: p }), [p, v]);
	return D.createElement(
		dr.Provider,
		{ value: y },
		D.createElement('span', { 'data-focus-scope-start': !0, hidden: !0, ref: i }),
		t,
		D.createElement('span', { 'data-focus-scope-end': !0, hidden: !0, ref: a })
	);
}
function ba(e) {
	return {
		focusNext(t = {}) {
			let r = e.current,
				{ from: n, tabbable: o, wrap: i, accept: a } = t,
				l = n || document.activeElement,
				c = r[0].previousElementSibling,
				p = se(de(r), { tabbable: o, accept: a }, r);
			p.currentNode = _(l, r) ? l : c;
			let v = p.nextNode();
			return !v && i && ((p.currentNode = c), (v = p.nextNode())), v && ne(v, !0), v;
		},
		focusPrevious(t = {}) {
			let r = e.current,
				{ from: n, tabbable: o, wrap: i, accept: a } = t,
				l = n || document.activeElement,
				c = r[r.length - 1].nextElementSibling,
				p = se(de(r), { tabbable: o, accept: a }, r);
			p.currentNode = _(l, r) ? l : c;
			let v = p.previousNode();
			return !v && i && ((p.currentNode = c), (v = p.previousNode())), v && ne(v, !0), v;
		},
		focusFirst(t = {}) {
			let r = e.current,
				{ tabbable: n, accept: o } = t,
				i = se(de(r), { tabbable: n, accept: o }, r);
			i.currentNode = r[0].previousElementSibling;
			let a = i.nextNode();
			return a && ne(a, !0), a;
		},
		focusLast(t = {}) {
			let r = e.current,
				{ tabbable: n, accept: o } = t,
				i = se(de(r), { tabbable: n, accept: o }, r);
			i.currentNode = r[r.length - 1].nextElementSibling;
			let a = i.previousNode();
			return a && ne(a, !0), a;
		},
	};
}
const Gt = [
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
	ma = Gt.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
Gt.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const ha = Gt.join(':not([hidden]):not([tabindex="-1"]),');
function de(e) {
	return e[0].parentElement;
}
function ke(e) {
	let t = z.getTreeNode(K);
	for (; t && t.scopeRef !== e; ) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function $a(e, t) {
	let r = h.useRef(),
		n = h.useRef(null);
	G(() => {
		let o = e.current;
		if (!t) {
			n.current && (cancelAnimationFrame(n.current), (n.current = null));
			return;
		}
		let i = (c) => {
				if (c.key !== 'Tab' || c.altKey || c.ctrlKey || c.metaKey || !ke(e)) return;
				let p = document.activeElement,
					v = e.current;
				if (!_(p, v)) return;
				let y = se(de(v), { tabbable: !0 }, v);
				y.currentNode = p;
				let g = c.shiftKey ? y.previousNode() : y.nextNode();
				g ||
					((y.currentNode = c.shiftKey
						? v[v.length - 1].nextElementSibling
						: v[0].previousElementSibling),
					(g = c.shiftKey ? y.previousNode() : y.nextNode())),
					c.preventDefault(),
					g && ne(g, !0);
			},
			a = (c) => {
				(!K || Ze(K, e)) && _(c.target, e.current)
					? ((K = e), (r.current = c.target))
					: ke(e) && !Je(c.target, e)
					? r.current
						? r.current.focus()
						: K && Qe(K.current)
					: ke(e) && (r.current = c.target);
			},
			l = (c) => {
				n.current && cancelAnimationFrame(n.current),
					(n.current = requestAnimationFrame(() => {
						ke(e) &&
							!Je(document.activeElement, e) &&
							((K = e),
							document.body.contains(c.target)
								? ((r.current = c.target), r.current.focus())
								: K && Qe(K.current));
					}));
			};
		return (
			document.addEventListener('keydown', i, !1),
			document.addEventListener('focusin', a, !1),
			o.forEach((c) => c.addEventListener('focusin', a, !1)),
			o.forEach((c) => c.addEventListener('focusout', l, !1)),
			() => {
				document.removeEventListener('keydown', i, !1),
					document.removeEventListener('focusin', a, !1),
					o.forEach((c) => c.removeEventListener('focusin', a, !1)),
					o.forEach((c) => c.removeEventListener('focusout', l, !1));
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
function _r(e) {
	return Je(e);
}
function _(e, t) {
	return t.some((r) => r.contains(e));
}
function Je(e, t = null) {
	if (e instanceof Element && e.closest('[data-react-aria-top-layer]')) return !0;
	for (let { scopeRef: r } of z.traverse(z.getTreeNode(t))) if (_(e, r.current)) return !0;
	return !1;
}
function ya(e) {
	return Je(e, K);
}
function Ze(e, t) {
	var r;
	let n = (r = z.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
	for (; n; ) {
		if (n.scopeRef === e) return !0;
		n = n.parent;
	}
	return !1;
}
function ne(e, t = !1) {
	if (e != null && !t)
		try {
			Ur(e);
		} catch {}
	else if (e != null)
		try {
			e.focus();
		} catch {}
}
function Qe(e, t = !0) {
	let r = e[0].previousElementSibling,
		n = se(de(e), { tabbable: t }, e);
	n.currentNode = r;
	let o = n.nextNode();
	t && !o && ((n = se(de(e), { tabbable: !1 }, e)), (n.currentNode = r), (o = n.nextNode())), ne(o);
}
function wa(e, t) {
	const r = D.useRef(t);
	h.useEffect(() => {
		r.current && ((K = e), _(document.activeElement, K.current) || Qe(e.current)), (r.current = !1);
	}, [e]);
}
function Ta(e, t, r) {
	G(() => {
		if (t || r) return;
		let n = e.current,
			o = (i) => {
				let a = i.target;
				_(a, e.current) ? (K = e) : _r(a) || (K = null);
			};
		return (
			document.addEventListener('focusin', o, !1),
			n.forEach((i) => i.addEventListener('focusin', o, !1)),
			() => {
				document.removeEventListener('focusin', o, !1),
					n.forEach((i) => i.removeEventListener('focusin', o, !1));
			}
		);
	}, [e, t, r]);
}
function Ea(e) {
	let t = z.getTreeNode(K);
	for (; t && t.scopeRef !== e; ) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function Pa(e, t, r) {
	const n = h.useRef(typeof document < 'u' ? document.activeElement : null);
	G(() => {
		let o = e.current;
		if (!t || r) return;
		let i = () => {
			(!K || Ze(K, e)) && _(document.activeElement, e.current) && (K = e);
		};
		return (
			document.addEventListener('focusin', i, !1),
			o.forEach((a) => a.addEventListener('focusin', i, !1)),
			() => {
				document.removeEventListener('focusin', i, !1),
					o.forEach((a) => a.removeEventListener('focusin', i, !1));
			}
		);
	}, [e, r]),
		G(() => {
			if (!t) return;
			let o = (i) => {
				if (i.key !== 'Tab' || i.altKey || i.ctrlKey || i.metaKey || !ke(e)) return;
				let a = document.activeElement;
				if (!_(a, e.current)) return;
				let l = z.getTreeNode(e).nodeToRestore,
					c = se(document.body, { tabbable: !0 });
				c.currentNode = a;
				let p = i.shiftKey ? c.previousNode() : c.nextNode();
				if (
					((!document.body.contains(l) || l === document.body) &&
						((l = null), (z.getTreeNode(e).nodeToRestore = null)),
					(!p || !_(p, e.current)) && l)
				) {
					c.currentNode = l;
					do p = i.shiftKey ? c.previousNode() : c.nextNode();
					while (_(p, e.current));
					i.preventDefault(), i.stopPropagation(), p ? ne(p, !0) : _r(l) ? ne(l, !0) : a.blur();
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
			if (t)
				return (
					(z.getTreeNode(e).nodeToRestore = n.current),
					() => {
						let o = z.getTreeNode(e).nodeToRestore;
						if (
							t &&
							o &&
							(_(document.activeElement, e.current) ||
								(document.activeElement === document.body && Ea(e)))
						) {
							let i = z.clone();
							requestAnimationFrame(() => {
								if (document.activeElement === document.body) {
									let a = i.getTreeNode(e);
									for (; a; ) {
										if (a.nodeToRestore && document.body.contains(a.nodeToRestore)) {
											ne(a.nodeToRestore);
											return;
										}
										a = a.parent;
									}
									for (a = i.getTreeNode(e); a; ) {
										if (a.scopeRef && z.getTreeNode(a.scopeRef)) {
											Qe(a.scopeRef.current, !0);
											return;
										}
										a = a.parent;
									}
								}
							});
						}
					}
				);
		}, [e, t]);
}
function se(e, t, r) {
	let n = t?.tabbable ? ha : ma,
		o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode(i) {
				var a;
				return !(t == null || (a = t.from) === null || a === void 0) && a.contains(i)
					? NodeFilter.FILTER_REJECT
					: i.matches(n) && jr(i) && (!r || _(i, r)) && (!t?.accept || t.accept(i))
					? NodeFilter.FILTER_ACCEPT
					: NodeFilter.FILTER_SKIP;
			},
		});
	return t?.from && (o.currentNode = t.from), o;
}
class Ut {
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(t) {
		return this.fastMap.get(t);
	}
	addTreeNode(t, r, n) {
		let o = this.fastMap.get(r ?? null),
			i = new Pt({ scopeRef: t });
		o.addChild(i), (i.parent = o), this.fastMap.set(t, i), n && (i.nodeToRestore = n);
	}
	addNode(t) {
		this.fastMap.set(t.scopeRef, t);
	}
	removeTreeNode(t) {
		if (t === null) return;
		let r = this.fastMap.get(t),
			n = r.parent;
		for (let i of this.traverse())
			i !== r &&
				r.nodeToRestore &&
				i.nodeToRestore &&
				r.scopeRef.current &&
				_(i.nodeToRestore, r.scopeRef.current) &&
				(i.nodeToRestore = r.nodeToRestore);
		let o = r.children;
		n.removeChild(r),
			o.size > 0 && o.forEach((i) => n.addChild(i)),
			this.fastMap.delete(r.scopeRef);
	}
	*traverse(t = this.root) {
		if ((t.scopeRef != null && (yield t), t.children.size > 0))
			for (let r of t.children) yield* this.traverse(r);
	}
	clone() {
		let t = new Ut();
		for (let r of this.traverse()) t.addTreeNode(r.scopeRef, r.parent.scopeRef, r.nodeToRestore);
		return t;
	}
	constructor() {
		(this.fastMap = new Map()),
			(this.root = new Pt({ scopeRef: null })),
			this.fastMap.set(null, this.root);
	}
}
class Pt {
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
let z = new Ut();
function Zi(e = {}) {
	let { autoFocus: t = !1, isTextInput: r, within: n } = e,
		o = h.useRef({ isFocused: !1, isFocusVisible: t || Gr() }),
		[i, a] = h.useState(!1),
		[l, c] = h.useState(() => o.current.isFocused && o.current.isFocusVisible),
		p = h.useCallback(() => c(o.current.isFocused && o.current.isFocusVisible), []),
		v = h.useCallback(
			(m) => {
				(o.current.isFocused = m), a(m), p();
			},
			[p]
		);
	la(
		(m) => {
			(o.current.isFocusVisible = m), p();
		},
		[],
		{ isTextInput: r }
	);
	let { focusProps: y } = zr({ isDisabled: n, onFocusChange: v }),
		{ focusWithinProps: g } = zt({ isDisabled: !n, onFocusWithinChange: v });
	return { isFocused: i, isFocusVisible: l, focusProps: n ? g : y };
}
let xa = D.createContext(null);
function Sa(e) {
	let t = h.useContext(xa) || {};
	Kt(t, e);
	let { ref: r, ...n } = t;
	return n;
}
function Ca(e, t) {
	let { focusProps: r } = zr(e),
		{ keyboardProps: n } = da(e),
		o = Z(r, n),
		i = Sa(t),
		a = e.isDisabled ? {} : i,
		l = h.useRef(e.autoFocus);
	return (
		h.useEffect(() => {
			l.current && t.current && Ur(t.current), (l.current = !1);
		}, [t]),
		{
			focusableProps: Z(
				{ ...o, tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0 },
				a
			),
		}
	);
}
const fr = {
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
function La(e = {}) {
	let { style: t, isFocusable: r } = e,
		[n, o] = h.useState(!1),
		{ focusWithinProps: i } = zt({ isDisabled: !r, onFocusWithinChange: (l) => o(l) }),
		a = h.useMemo(() => (n ? t : t ? { ...fr, ...t } : fr), [n]);
	return { visuallyHiddenProps: { ...i, style: a } };
}
function Ma(e) {
	let { children: t, elementType: r = 'div', isFocusable: n, style: o, ...i } = e,
		{ visuallyHiddenProps: a } = La(e);
	return D.createElement(r, Z(i, a), t);
}
function ka(e) {
	return e && e.__esModule ? e.default : e;
}
const pr = { top: 'top', bottom: 'top', left: 'left', right: 'left' },
	et = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' },
	Aa = { top: 'left', left: 'top' },
	xt = { top: 'height', left: 'width' },
	Ia = { width: 'totalWidth', height: 'totalHeight' },
	He = {};
let he = typeof document < 'u' && window.visualViewport;
function vr(e) {
	let t = 0,
		r = 0,
		n = 0,
		o = 0,
		i = 0,
		a = 0,
		l = {};
	if (e.tagName === 'BODY') {
		let v = document.documentElement;
		(n = v.clientWidth), (o = v.clientHeight);
		var c;
		t = (c = he?.width) !== null && c !== void 0 ? c : n;
		var p;
		(r = (p = he?.height) !== null && p !== void 0 ? p : o),
			(l.top = v.scrollTop || e.scrollTop),
			(l.left = v.scrollLeft || e.scrollLeft);
	} else
		({ width: t, height: r, top: i, left: a } = Pe(e)),
			(l.top = e.scrollTop),
			(l.left = e.scrollLeft),
			(n = t),
			(o = r);
	return { width: t, height: r, totalWidth: n, totalHeight: o, scroll: l, top: i, left: a };
}
function Na(e) {
	return { top: e.scrollTop, left: e.scrollLeft, width: e.scrollWidth, height: e.scrollHeight };
}
function gr(e, t, r, n, o, i) {
	let a = o.scroll[e],
		l = n[xt[e]],
		c = t - i - a,
		p = t + i - a + r;
	return c < 0 ? -c : p > l ? Math.max(l - p, -c) : 0;
}
function Oa(e) {
	let t = window.getComputedStyle(e);
	return {
		top: parseInt(t.marginTop, 10) || 0,
		bottom: parseInt(t.marginBottom, 10) || 0,
		left: parseInt(t.marginLeft, 10) || 0,
		right: parseInt(t.marginRight, 10) || 0,
	};
}
function br(e) {
	if (He[e]) return He[e];
	let [t, r] = e.split(' '),
		n = pr[t] || 'right',
		o = Aa[n];
	pr[r] || (r = 'center');
	let i = xt[n],
		a = xt[o];
	return (
		(He[e] = { placement: t, crossPlacement: r, axis: n, crossAxis: o, size: i, crossSize: a }),
		He[e]
	);
}
function pt(e, t, r, n, o, i, a, l, c, p) {
	let { placement: v, crossPlacement: y, axis: g, crossAxis: m, size: $, crossSize: P } = n,
		T = {};
	(T[m] = e[m]),
		y === 'center' ? (T[m] += (e[P] - r[P]) / 2) : y !== m && (T[m] += e[P] - r[P]),
		(T[m] += i);
	const C = e[m] - r[P] + c + p,
		x = e[m] + e[P] - c - p;
	if (((T[m] = ht(T[m], C, x)), v === g)) {
		const S = l ? a[$] : t[Ia[$]];
		T[et[g]] = Math.floor(S - e[g] + o);
	} else T[g] = Math.floor(e[g] + e[$] + o);
	return T;
}
function Fa(e, t, r, n, o, i) {
	return e.top != null
		? Math.max(0, t.height + t.top + t.scroll.top - (r.top + e.top) - (o.top + o.bottom + i))
		: Math.max(0, n.top + r.top - (t.top + t.scroll.top) - (o.top + o.bottom + i));
}
function mr(e, t, r, n, o, i) {
	let { placement: a, axis: l, size: c } = i;
	return a === l
		? Math.max(0, r[l] - e[l] - e.scroll[l] + t[l] - n[l] - n[et[l]] - o)
		: Math.max(0, e[c] + e[l] + e.scroll[l] - t[l] - r[l] - r[c] - n[l] - n[et[l]] - o);
}
function Ra(e, t, r, n, o, i, a, l, c, p, v, y, g, m, $, P) {
	let T = br(e),
		{ size: C, crossAxis: x, crossSize: S, placement: A, crossPlacement: I } = T,
		N = pt(t, l, r, T, v, y, p, g, $, P),
		H = v,
		s = mr(l, p, t, o, i + v, T);
	if (a && n[C] > s) {
		let F = br(`${et[A]} ${I}`),
			W = pt(t, l, r, F, v, y, p, g, $, P);
		mr(l, p, t, o, i + v, F) > s && ((T = F), (N = W), (H = v));
	}
	let w = gr(x, N[x], r[S], l, c, i);
	N[x] += w;
	let M = Fa(N, l, p, t, o, i);
	m && m < M && (M = m),
		(r.height = Math.min(r.height, M)),
		(N = pt(t, l, r, T, H, y, p, g, $, P)),
		(w = gr(x, N[x], r[S], l, c, i)),
		(N[x] += w);
	let d = {},
		b = t[x] + 0.5 * t[S] - r[x];
	const u = $ / 2 + P,
		f = r[S] - $ / 2 - P,
		E = t[x] - r[x] + $ / 2,
		k = t[x] + t[S] - r[x] - $ / 2,
		O = ht(b, E, k);
	return (
		(d[x] = ht(O, u, f)),
		{
			position: N,
			maxHeight: M,
			arrowOffsetLeft: d.left,
			arrowOffsetTop: d.top,
			placement: T.placement,
		}
	);
}
function Ka(e) {
	let {
			placement: t,
			targetNode: r,
			overlayNode: n,
			scrollNode: o,
			padding: i,
			shouldFlip: a,
			boundaryElement: l,
			offset: c,
			crossOffset: p,
			maxHeight: v,
			arrowSize: y = 0,
			arrowBoundaryOffset: g = 0,
		} = e,
		m = n instanceof HTMLElement ? Da(n) : document.documentElement,
		$ = m === document.documentElement;
	const P = window.getComputedStyle(m).position;
	let T = !!P && P !== 'static',
		C = $ ? Pe(r) : hr(r, m);
	if (!$) {
		let { marginTop: s, marginLeft: w } = window.getComputedStyle(r);
		(C.top += parseInt(s, 10) || 0), (C.left += parseInt(w, 10) || 0);
	}
	let x = Pe(n),
		S = Oa(n);
	(x.width += S.left + S.right), (x.height += S.top + S.bottom);
	let A = Na(o),
		I = vr(l),
		N = vr(m),
		H = l.tagName === 'BODY' ? Pe(m) : hr(m, l);
	return Ra(t, C, x, A, S, i, a, I, N, H, c, p, T, v, y, g);
}
function Pe(e) {
	let { top: t, left: r, width: n, height: o } = e.getBoundingClientRect(),
		{ scrollTop: i, scrollLeft: a, clientTop: l, clientLeft: c } = document.documentElement;
	return { top: t + i - l, left: r + a - c, width: n, height: o };
}
function hr(e, t) {
	let r = window.getComputedStyle(e),
		n;
	if (r.position === 'fixed') {
		let { top: o, left: i, width: a, height: l } = e.getBoundingClientRect();
		n = { top: o, left: i, width: a, height: l };
	} else {
		n = Pe(e);
		let o = Pe(t),
			i = window.getComputedStyle(t);
		(o.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop),
			(o.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft),
			(n.top -= o.top),
			(n.left -= o.left);
	}
	return (n.top -= parseInt(r.marginTop, 10) || 0), (n.left -= parseInt(r.marginLeft, 10) || 0), n;
}
function Da(e) {
	let t = e.offsetParent;
	if (
		(t &&
			t === document.body &&
			window.getComputedStyle(t).position === 'static' &&
			!$r(t) &&
			(t = document.documentElement),
		t == null)
	)
		for (t = e.parentElement; t && !$r(t); ) t = t.parentElement;
	return t || document.documentElement;
}
function $r(e) {
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
function Ha(e) {
	let { triggerRef: t, isOpen: r, onClose: n } = e;
	h.useEffect(() => {
		if (!r || n === null) return;
		let o = (i) => {
			let a = i.target;
			if (!t.current || (a instanceof Node && !a.contains(t.current))) return;
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
function Qi(e) {
	let { direction: t } = Dt(),
		{
			arrowSize: r = 0,
			targetRef: n,
			overlayRef: o,
			scrollRef: i = o,
			placement: a = 'bottom',
			containerPadding: l = 12,
			shouldFlip: c = !0,
			boundaryElement: p = typeof document < 'u' ? document.body : null,
			offset: v = 0,
			crossOffset: y = 0,
			shouldUpdatePosition: g = !0,
			isOpen: m = !0,
			onClose: $,
			maxHeight: P,
			arrowBoundaryOffset: T = 0,
		} = e,
		[C, x] = h.useState({
			position: {},
			arrowOffsetLeft: void 0,
			arrowOffsetTop: void 0,
			maxHeight: void 0,
			placement: void 0,
		}),
		S = [g, a, o.current, n.current, i.current, l, c, p, v, y, m, t, P, T, r],
		A = h.useCallback(() => {
			if (g === !1 || !m || !o.current || !n.current || !i.current || !p) return;
			let H = Ka({
				placement: za(a, t),
				overlayNode: o.current,
				targetNode: n.current,
				scrollNode: i.current,
				padding: l,
				shouldFlip: c,
				boundaryElement: p,
				offset: v,
				crossOffset: y,
				maxHeight: P,
				arrowSize: r,
				arrowBoundaryOffset: T,
			});
			Object.keys(H.position).forEach((s) => (o.current.style[s] = H.position[s] + 'px')),
				(o.current.style.maxHeight = H.maxHeight != null ? H.maxHeight + 'px' : void 0),
				x(H);
		}, S);
	G(A, S), Wa(A), No({ ref: o, onResize: A });
	let I = h.useRef(!1);
	G(() => {
		let H,
			s = () => {
				(I.current = !0),
					clearTimeout(H),
					(H = setTimeout(() => {
						I.current = !1;
					}, 500)),
					A();
			};
		return (
			X?.addEventListener('resize', s),
			X?.addEventListener('scroll', s),
			() => {
				X?.removeEventListener('resize', s), X?.removeEventListener('scroll', s);
			}
		);
	}, [A]);
	let N = h.useCallback(() => {
		I.current || $();
	}, [$, I]);
	return (
		Ha({ triggerRef: n, isOpen: m, onClose: $ && N }),
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
function Wa(e) {
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
function za(e, t) {
	return t === 'rtl'
		? e.replace('start', 'right').replace('end', 'left')
		: e.replace('start', 'left').replace('end', 'right');
}
const te = [];
function es(e, t) {
	let {
		onClose: r,
		shouldCloseOnBlur: n,
		isOpen: o,
		isDismissable: i = !1,
		isKeyboardDismissDisabled: a = !1,
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
			$.key === 'Escape' && !a && ($.stopPropagation(), $.preventDefault(), c());
		};
	ca({ ref: t, onInteractOutside: i ? v : null, onInteractOutsideStart: p });
	let { focusWithinProps: g } = zt({
			isDisabled: !n,
			onBlurWithin: ($) => {
				!$.relatedTarget || ya($.relatedTarget) || ((!l || l($.relatedTarget)) && r());
			},
		}),
		m = ($) => {
			$.target === $.currentTarget && $.preventDefault();
		};
	return { overlayProps: { onKeyDown: y, ...g }, underlayProps: { onPointerDown: m } };
}
function ts(e, t, r) {
	let { type: n } = e,
		{ isOpen: o } = t;
	h.useEffect(() => {
		r && r.current && Vr.set(r.current, t.close);
	});
	let i;
	n === 'menu' ? (i = !0) : n === 'listbox' && (i = 'listbox');
	let a = Nt();
	return {
		triggerProps: {
			'aria-haspopup': i,
			'aria-expanded': o,
			'aria-controls': o ? a : null,
			onPress: t.toggle,
		},
		overlayProps: { id: a },
	};
}
var Br = {},
	Xr = {};
Xr = { dismiss: 'تجاهل' };
var Yr = {};
Yr = { dismiss: 'Отхвърляне' };
var qr = {};
qr = { dismiss: 'Odstranit' };
var Jr = {};
Jr = { dismiss: 'Luk' };
var Zr = {};
Zr = { dismiss: 'Schließen' };
var Qr = {};
Qr = { dismiss: 'Απόρριψη' };
var en = {};
en = { dismiss: 'Dismiss' };
var tn = {};
tn = { dismiss: 'Descartar' };
var rn = {};
rn = { dismiss: 'Lõpeta' };
var nn = {};
nn = { dismiss: 'Hylkää' };
var on = {};
on = { dismiss: 'Rejeter' };
var an = {};
an = { dismiss: 'התעלם' };
var sn = {};
sn = { dismiss: 'Odbaci' };
var ln = {};
ln = { dismiss: 'Elutasítás' };
var un = {};
un = { dismiss: 'Ignora' };
var cn = {};
cn = { dismiss: '閉じる' };
var dn = {};
dn = { dismiss: '무시' };
var fn = {};
fn = { dismiss: 'Atmesti' };
var pn = {};
pn = { dismiss: 'Nerādīt' };
var vn = {};
vn = { dismiss: 'Lukk' };
var gn = {};
gn = { dismiss: 'Negeren' };
var bn = {};
bn = { dismiss: 'Zignoruj' };
var mn = {};
mn = { dismiss: 'Descartar' };
var hn = {};
hn = { dismiss: 'Dispensar' };
var $n = {};
$n = { dismiss: 'Revocare' };
var yn = {};
yn = { dismiss: 'Пропустить' };
var wn = {};
wn = { dismiss: 'Zrušiť' };
var Tn = {};
Tn = { dismiss: 'Opusti' };
var En = {};
En = { dismiss: 'Odbaci' };
var Pn = {};
Pn = { dismiss: 'Avvisa' };
var xn = {};
xn = { dismiss: 'Kapat' };
var Sn = {};
Sn = { dismiss: 'Скасувати' };
var Cn = {};
Cn = { dismiss: '取消' };
var Ln = {};
Ln = { dismiss: '關閉' };
Br = {
	'ar-AE': Xr,
	'bg-BG': Yr,
	'cs-CZ': qr,
	'da-DK': Jr,
	'de-DE': Zr,
	'el-GR': Qr,
	'en-US': en,
	'es-ES': tn,
	'et-EE': rn,
	'fi-FI': nn,
	'fr-FR': on,
	'he-IL': an,
	'hr-HR': sn,
	'hu-HU': ln,
	'it-IT': un,
	'ja-JP': cn,
	'ko-KR': dn,
	'lt-LT': fn,
	'lv-LV': pn,
	'nb-NO': vn,
	'nl-NL': gn,
	'pl-PL': bn,
	'pt-BR': mn,
	'pt-PT': hn,
	'ro-RO': $n,
	'ru-RU': yn,
	'sk-SK': wn,
	'sl-SI': Tn,
	'sr-SP': En,
	'sv-SE': Pn,
	'tr-TR': xn,
	'uk-UA': Sn,
	'zh-CN': Cn,
	'zh-TW': Ln,
};
function rs(e) {
	let { onDismiss: t, ...r } = e,
		n = Uo(ka(Br)),
		o = Ao(r, n.format('dismiss')),
		i = () => {
			t && t();
		};
	return D.createElement(Ma, null, D.createElement('button', { ...o, tabIndex: -1, onClick: i }));
}
let xe = new WeakMap(),
	Y = [];
function ns(e, t = document.body) {
	let r = new Set(e),
		n = new Set(),
		o = (c) => {
			for (let g of c.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))
				r.add(g);
			let p = (g) => {
					if (
						r.has(g) ||
						(n.has(g.parentElement) && g.parentElement.getAttribute('role') !== 'row')
					)
						return NodeFilter.FILTER_REJECT;
					for (let m of r) if (g.contains(m)) return NodeFilter.FILTER_SKIP;
					return NodeFilter.FILTER_ACCEPT;
				},
				v = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT, { acceptNode: p }),
				y = p(c);
			if ((y === NodeFilter.FILTER_ACCEPT && i(c), y !== NodeFilter.FILTER_REJECT)) {
				let g = v.nextNode();
				for (; g != null; ) i(g), (g = v.nextNode());
			}
		},
		i = (c) => {
			var p;
			let v = (p = xe.get(c)) !== null && p !== void 0 ? p : 0;
			(c.getAttribute('aria-hidden') === 'true' && v === 0) ||
				(v === 0 && c.setAttribute('aria-hidden', 'true'), n.add(c), xe.set(c, v + 1));
		};
	Y.length && Y[Y.length - 1].disconnect(), o(t);
	let a = new MutationObserver((c) => {
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
	a.observe(t, { childList: !0, subtree: !0 });
	let l = {
		observe() {
			a.observe(t, { childList: !0, subtree: !0 });
		},
		disconnect() {
			a.disconnect();
		},
	};
	return (
		Y.push(l),
		() => {
			a.disconnect();
			for (let c of n) {
				let p = xe.get(c);
				p === 1 ? (c.removeAttribute('aria-hidden'), xe.delete(c)) : xe.set(c, p - 1);
			}
			l === Y[Y.length - 1]
				? (Y.pop(), Y.length && Y[Y.length - 1].observe())
				: Y.splice(Y.indexOf(l), 1);
		}
	);
}
const Ga = D.createContext(null);
function os(e) {
	let t = ot(),
		{ portalContainer: r = t ? null : document.body, isExiting: n } = e,
		[o, i] = h.useState(!1),
		a = h.useMemo(() => ({ contain: o, setContain: i }), [o, i]);
	if (!r) return null;
	let l = e.children;
	return (
		e.disableFocusManagement ||
			(l = D.createElement(ga, { restoreFocus: !0, contain: o && !n }, l)),
		(l = D.createElement(Ga.Provider, { value: a }, D.createElement(Qo, null, l))),
		Un.createPortal(l, r)
	);
}
function as(e) {
	return h.forwardRef(e);
}
var is = (e, t, r = !0) => {
		if (!t) return [e, {}];
		const n = t.reduce((o, i) => (i in e ? { ...o, [i]: e[i] } : o), {});
		return r
			? [
					Object.keys(e)
						.filter((i) => !t.includes(i))
						.reduce((i, a) => ({ ...i, [a]: e[a] }), {}),
					n,
			  ]
			: [e, n];
	},
	Ua = [
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
	vt = Ua.map((e) => `unit-${e}`),
	yr = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
	V = (e) => !e || typeof e != 'object' || Object.keys(e).length === 0,
	ja = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Mn(e, t) {
	e.forEach(function (r) {
		Array.isArray(r) ? Mn(r, t) : t.push(r);
	});
}
function kn(e) {
	let t = [];
	return Mn(e, t), t;
}
var _a = (...e) => kn(e).filter(Boolean),
	jt = (e, t) => {
		let r = {},
			n = Object.keys(e),
			o = Object.keys(t);
		for (let i of n)
			if (o.includes(i)) {
				let a = e[i],
					l = t[i];
				typeof a == 'object' && typeof l == 'object' ? (r[i] = jt(a, l)) : (r[i] = l + ' ' + a);
			} else r[i] = e[i];
		for (let i of o) n.includes(i) || (r[i] = t[i]);
		return r;
	},
	wr = (e) => (!e || typeof e != 'string' ? e : e.replace(/\s+/g, ' ').trim());
function Va() {
	for (var e = 0, t, r, n = ''; e < arguments.length; )
		(t = arguments[e++]) && (r = An(t)) && (n && (n += ' '), (n += r));
	return n;
}
function An(e) {
	if (typeof e == 'string') return e;
	for (var t, r = '', n = 0; n < e.length; n++)
		e[n] && (t = An(e[n])) && (r && (r += ' '), (r += t));
	return r;
}
var _t = '-';
function Ba(e) {
	var t = Ya(e),
		r = e.conflictingClassGroups,
		n = e.conflictingClassGroupModifiers,
		o = n === void 0 ? {} : n;
	function i(l) {
		var c = l.split(_t);
		return c[0] === '' && c.length !== 1 && c.shift(), In(c, t) || Xa(l);
	}
	function a(l, c) {
		var p = r[l] || [];
		return c && o[l] ? [].concat(p, o[l]) : p;
	}
	return { getClassGroupId: i, getConflictingClassGroupIds: a };
}
function In(e, t) {
	if (e.length === 0) return t.classGroupId;
	var r = e[0],
		n = t.nextPart.get(r),
		o = n ? In(e.slice(1), n) : void 0;
	if (o) return o;
	if (t.validators.length !== 0) {
		var i = e.join(_t);
		return t.validators.find(function (a) {
			var l = a.validator;
			return l(i);
		})?.classGroupId;
	}
}
var Tr = /^\[(.+)\]$/;
function Xa(e) {
	if (Tr.test(e)) {
		var t = Tr.exec(e)[1],
			r = t?.substring(0, t.indexOf(':'));
		if (r) return 'arbitrary..' + r;
	}
}
function Ya(e) {
	var t = e.theme,
		r = e.prefix,
		n = { nextPart: new Map(), validators: [] },
		o = Ja(Object.entries(e.classGroups), r);
	return (
		o.forEach(function (i) {
			var a = i[0],
				l = i[1];
			St(l, n, a, t);
		}),
		n
	);
}
function St(e, t, r, n) {
	e.forEach(function (o) {
		if (typeof o == 'string') {
			var i = o === '' ? t : Er(t, o);
			i.classGroupId = r;
			return;
		}
		if (typeof o == 'function') {
			if (qa(o)) {
				St(o(n), t, r, n);
				return;
			}
			t.validators.push({ validator: o, classGroupId: r });
			return;
		}
		Object.entries(o).forEach(function (a) {
			var l = a[0],
				c = a[1];
			St(c, Er(t, l), r, n);
		});
	});
}
function Er(e, t) {
	var r = e;
	return (
		t.split(_t).forEach(function (n) {
			r.nextPart.has(n) || r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
				(r = r.nextPart.get(n));
		}),
		r
	);
}
function qa(e) {
	return e.isThemeGetter;
}
function Ja(e, t) {
	return t
		? e.map(function (r) {
				var n = r[0],
					o = r[1],
					i = o.map(function (a) {
						return typeof a == 'string'
							? t + a
							: typeof a == 'object'
							? Object.fromEntries(
									Object.entries(a).map(function (l) {
										var c = l[0],
											p = l[1];
										return [t + c, p];
									})
							  )
							: a;
					});
				return [n, i];
		  })
		: e;
}
function Za(e) {
	if (e < 1) return { get: function () {}, set: function () {} };
	var t = 0,
		r = new Map(),
		n = new Map();
	function o(i, a) {
		r.set(i, a), t++, t > e && ((t = 0), (n = r), (r = new Map()));
	}
	return {
		get: function (a) {
			var l = r.get(a);
			if (l !== void 0) return l;
			if ((l = n.get(a)) !== void 0) return o(a, l), l;
		},
		set: function (a, l) {
			r.has(a) ? r.set(a, l) : o(a, l);
		},
	};
}
var Nn = '!';
function Qa(e) {
	var t = e.separator || ':',
		r = t.length === 1,
		n = t[0],
		o = t.length;
	return function (a) {
		for (var l = [], c = 0, p = 0, v, y = 0; y < a.length; y++) {
			var g = a[y];
			if (c === 0) {
				if (g === n && (r || a.slice(y, y + o) === t)) {
					l.push(a.slice(p, y)), (p = y + o);
					continue;
				}
				if (g === '/') {
					v = y;
					continue;
				}
			}
			g === '[' ? c++ : g === ']' && c--;
		}
		var m = l.length === 0 ? a : a.substring(p),
			$ = m.startsWith(Nn),
			P = $ ? m.substring(1) : m,
			T = v && v > p ? v - p : void 0;
		return {
			modifiers: l,
			hasImportantModifier: $,
			baseClassName: P,
			maybePostfixModifierPosition: T,
		};
	};
}
function ei(e) {
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
function ti(e) {
	return { cache: Za(e.cacheSize), splitModifiers: Qa(e), ...Ba(e) };
}
var ri = /\s+/;
function ni(e, t) {
	var r = t.splitModifiers,
		n = t.getClassGroupId,
		o = t.getConflictingClassGroupIds,
		i = new Set();
	return e
		.trim()
		.split(ri)
		.map(function (a) {
			var l = r(a),
				c = l.modifiers,
				p = l.hasImportantModifier,
				v = l.baseClassName,
				y = l.maybePostfixModifierPosition,
				g = n(y ? v.substring(0, y) : v),
				m = !!y;
			if (!g) {
				if (!y) return { isTailwindClass: !1, originalClassName: a };
				if (((g = n(v)), !g)) return { isTailwindClass: !1, originalClassName: a };
				m = !1;
			}
			var $ = ei(c).join(':'),
				P = p ? $ + Nn : $;
			return {
				isTailwindClass: !0,
				modifierId: P,
				classGroupId: g,
				originalClassName: a,
				hasPostfixModifier: m,
			};
		})
		.reverse()
		.filter(function (a) {
			if (!a.isTailwindClass) return !0;
			var l = a.modifierId,
				c = a.classGroupId,
				p = a.hasPostfixModifier,
				v = l + c;
			return i.has(v)
				? !1
				: (i.add(v),
				  o(c, p).forEach(function (y) {
						return i.add(l + y);
				  }),
				  !0);
		})
		.reverse()
		.map(function (a) {
			return a.originalClassName;
		})
		.join(' ');
}
function Ct() {
	for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
	var n,
		o,
		i,
		a = l;
	function l(p) {
		var v = t[0],
			y = t.slice(1),
			g = y.reduce(function (m, $) {
				return $(m);
			}, v());
		return (n = ti(g)), (o = n.cache.get), (i = n.cache.set), (a = c), c(p);
	}
	function c(p) {
		var v = o(p);
		if (v) return v;
		var y = ni(p, n);
		return i(p, y), y;
	}
	return function () {
		return a(Va.apply(null, arguments));
	};
}
function R(e) {
	var t = function (n) {
		return n[e] || [];
	};
	return (t.isThemeGetter = !0), t;
}
var On = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	oi = /^\d+\/\d+$/,
	ai = new Set(['px', 'full', 'screen']),
	ii = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	si =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	li = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function q(e) {
	return fe(e) || ai.has(e) || oi.test(e) || Lt(e);
}
function Lt(e) {
	return ge(e, 'length', vi);
}
function ui(e) {
	return ge(e, 'size', Fn);
}
function ci(e) {
	return ge(e, 'position', Fn);
}
function di(e) {
	return ge(e, 'url', gi);
}
function We(e) {
	return ge(e, 'number', fe);
}
function fe(e) {
	return !Number.isNaN(Number(e));
}
function fi(e) {
	return e.endsWith('%') && fe(e.slice(0, -1));
}
function Se(e) {
	return Pr(e) || ge(e, 'number', Pr);
}
function L(e) {
	return On.test(e);
}
function Ce() {
	return !0;
}
function ie(e) {
	return ii.test(e);
}
function pi(e) {
	return ge(e, '', bi);
}
function ge(e, t, r) {
	var n = On.exec(e);
	return n ? (n[1] ? n[1] === t : r(n[2])) : !1;
}
function vi(e) {
	return si.test(e);
}
function Fn() {
	return !1;
}
function gi(e) {
	return e.startsWith('url(');
}
function Pr(e) {
	return Number.isInteger(Number(e));
}
function bi(e) {
	return li.test(e);
}
function Mt() {
	var e = R('colors'),
		t = R('spacing'),
		r = R('blur'),
		n = R('brightness'),
		o = R('borderColor'),
		i = R('borderRadius'),
		a = R('borderSpacing'),
		l = R('borderWidth'),
		c = R('contrast'),
		p = R('grayscale'),
		v = R('hueRotate'),
		y = R('invert'),
		g = R('gap'),
		m = R('gradientColorStops'),
		$ = R('gradientColorStopPositions'),
		P = R('inset'),
		T = R('margin'),
		C = R('opacity'),
		x = R('padding'),
		S = R('saturate'),
		A = R('scale'),
		I = R('sepia'),
		N = R('skew'),
		H = R('space'),
		s = R('translate'),
		w = function () {
			return ['auto', 'contain', 'none'];
		},
		M = function () {
			return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
		},
		d = function () {
			return ['auto', L, t];
		},
		b = function () {
			return [L, t];
		},
		u = function () {
			return ['', q];
		},
		f = function () {
			return ['auto', fe, L];
		},
		E = function () {
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
		k = function () {
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
		F = function () {
			return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
		},
		W = function () {
			return ['', '0', L];
		},
		Q = function () {
			return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
		},
		B = function () {
			return [fe, We];
		},
		ae = function () {
			return [fe, L];
		};
	return {
		cacheSize: 500,
		theme: {
			colors: [Ce],
			spacing: [q],
			blur: ['none', '', ie, L],
			brightness: B(),
			borderColor: [e],
			borderRadius: ['none', '', 'full', ie, L],
			borderSpacing: b(),
			borderWidth: u(),
			contrast: B(),
			grayscale: W(),
			hueRotate: ae(),
			invert: W(),
			gap: b(),
			gradientColorStops: [e],
			gradientColorStopPositions: [fi, Lt],
			inset: d(),
			margin: d(),
			opacity: B(),
			padding: b(),
			saturate: B(),
			scale: B(),
			sepia: W(),
			skew: ae(),
			space: b(),
			translate: b(),
		},
		classGroups: {
			aspect: [{ aspect: ['auto', 'square', 'video', L] }],
			container: ['container'],
			columns: [{ columns: [ie] }],
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
			'object-position': [{ object: [].concat(E(), [L]) }],
			overflow: [{ overflow: M() }],
			'overflow-x': [{ 'overflow-x': M() }],
			'overflow-y': [{ 'overflow-y': M() }],
			overscroll: [{ overscroll: w() }],
			'overscroll-x': [{ 'overscroll-x': w() }],
			'overscroll-y': [{ 'overscroll-y': w() }],
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
			z: [{ z: ['auto', Se] }],
			basis: [{ basis: d() }],
			'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
			'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
			flex: [{ flex: ['1', 'auto', 'initial', 'none', L] }],
			grow: [{ grow: W() }],
			shrink: [{ shrink: W() }],
			order: [{ order: ['first', 'last', 'none', Se] }],
			'grid-cols': [{ 'grid-cols': [Ce] }],
			'col-start-end': [{ col: ['auto', { span: ['full', Se] }, L] }],
			'col-start': [{ 'col-start': f() }],
			'col-end': [{ 'col-end': f() }],
			'grid-rows': [{ 'grid-rows': [Ce] }],
			'row-start-end': [{ row: ['auto', { span: [Se] }, L] }],
			'row-start': [{ 'row-start': f() }],
			'row-end': [{ 'row-end': f() }],
			'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
			'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', L] }],
			'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', L] }],
			gap: [{ gap: [g] }],
			'gap-x': [{ 'gap-x': [g] }],
			'gap-y': [{ 'gap-y': [g] }],
			'justify-content': [{ justify: ['normal'].concat(F()) }],
			'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
			'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			'align-content': [{ content: ['normal'].concat(F(), ['baseline']) }],
			'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
			'place-content': [{ 'place-content': [].concat(F(), ['baseline']) }],
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
			m: [{ m: [T] }],
			mx: [{ mx: [T] }],
			my: [{ my: [T] }],
			ms: [{ ms: [T] }],
			me: [{ me: [T] }],
			mt: [{ mt: [T] }],
			mr: [{ mr: [T] }],
			mb: [{ mb: [T] }],
			ml: [{ ml: [T] }],
			'space-x': [{ 'space-x': [H] }],
			'space-x-reverse': ['space-x-reverse'],
			'space-y': [{ 'space-y': [H] }],
			'space-y-reverse': ['space-y-reverse'],
			w: [{ w: ['auto', 'min', 'max', 'fit', L, t] }],
			'min-w': [{ 'min-w': ['min', 'max', 'fit', L, q] }],
			'max-w': [
				{ 'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [ie] }, ie, L] },
			],
			h: [{ h: [L, t, 'auto', 'min', 'max', 'fit'] }],
			'min-h': [{ 'min-h': ['min', 'max', 'fit', L, q] }],
			'max-h': [{ 'max-h': [L, t, 'min', 'max', 'fit'] }],
			'font-size': [{ text: ['base', ie, Lt] }],
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
						We,
					],
				},
			],
			'font-family': [{ font: [Ce] }],
			'fvn-normal': ['normal-nums'],
			'fvn-ordinal': ['ordinal'],
			'fvn-slashed-zero': ['slashed-zero'],
			'fvn-figure': ['lining-nums', 'oldstyle-nums'],
			'fvn-spacing': ['proportional-nums', 'tabular-nums'],
			'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
			tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', L] }],
			'line-clamp': [{ 'line-clamp': ['none', fe, We] }],
			leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', L, q] }],
			'list-image': [{ 'list-image': ['none', L] }],
			'list-style-type': [{ list: ['none', 'disc', 'decimal', L] }],
			'list-style-position': [{ list: ['inside', 'outside'] }],
			'placeholder-color': [{ placeholder: [e] }],
			'placeholder-opacity': [{ 'placeholder-opacity': [C] }],
			'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
			'text-color': [{ text: [e] }],
			'text-opacity': [{ 'text-opacity': [C] }],
			'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
			'text-decoration-style': [{ decoration: [].concat(k(), ['wavy']) }],
			'text-decoration-thickness': [{ decoration: ['auto', 'from-font', q] }],
			'underline-offset': [{ 'underline-offset': ['auto', L, q] }],
			'text-decoration-color': [{ decoration: [e] }],
			'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
			'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
			indent: [{ indent: b() }],
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
						L,
					],
				},
			],
			whitespace: [
				{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
			],
			break: [{ break: ['normal', 'words', 'all', 'keep'] }],
			hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
			content: [{ content: ['none', L] }],
			'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
			'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
			'bg-opacity': [{ 'bg-opacity': [C] }],
			'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
			'bg-position': [{ bg: [].concat(E(), [ci]) }],
			'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
			'bg-size': [{ bg: ['auto', 'cover', 'contain', ui] }],
			'bg-image': [
				{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, di] },
			],
			'bg-color': [{ bg: [e] }],
			'gradient-from-pos': [{ from: [$] }],
			'gradient-via-pos': [{ via: [$] }],
			'gradient-to-pos': [{ to: [$] }],
			'gradient-from': [{ from: [m] }],
			'gradient-via': [{ via: [m] }],
			'gradient-to': [{ to: [m] }],
			rounded: [{ rounded: [i] }],
			'rounded-s': [{ 'rounded-s': [i] }],
			'rounded-e': [{ 'rounded-e': [i] }],
			'rounded-t': [{ 'rounded-t': [i] }],
			'rounded-r': [{ 'rounded-r': [i] }],
			'rounded-b': [{ 'rounded-b': [i] }],
			'rounded-l': [{ 'rounded-l': [i] }],
			'rounded-ss': [{ 'rounded-ss': [i] }],
			'rounded-se': [{ 'rounded-se': [i] }],
			'rounded-ee': [{ 'rounded-ee': [i] }],
			'rounded-es': [{ 'rounded-es': [i] }],
			'rounded-tl': [{ 'rounded-tl': [i] }],
			'rounded-tr': [{ 'rounded-tr': [i] }],
			'rounded-br': [{ 'rounded-br': [i] }],
			'rounded-bl': [{ 'rounded-bl': [i] }],
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
			'border-style': [{ border: [].concat(k(), ['hidden']) }],
			'divide-x': [{ 'divide-x': [l] }],
			'divide-x-reverse': ['divide-x-reverse'],
			'divide-y': [{ 'divide-y': [l] }],
			'divide-y-reverse': ['divide-y-reverse'],
			'divide-opacity': [{ 'divide-opacity': [C] }],
			'divide-style': [{ divide: k() }],
			'border-color': [{ border: [o] }],
			'border-color-x': [{ 'border-x': [o] }],
			'border-color-y': [{ 'border-y': [o] }],
			'border-color-t': [{ 'border-t': [o] }],
			'border-color-r': [{ 'border-r': [o] }],
			'border-color-b': [{ 'border-b': [o] }],
			'border-color-l': [{ 'border-l': [o] }],
			'divide-color': [{ divide: [o] }],
			'outline-style': [{ outline: [''].concat(k()) }],
			'outline-offset': [{ 'outline-offset': [L, q] }],
			'outline-w': [{ outline: [q] }],
			'outline-color': [{ outline: [e] }],
			'ring-w': [{ ring: u() }],
			'ring-w-inset': ['ring-inset'],
			'ring-color': [{ ring: [e] }],
			'ring-opacity': [{ 'ring-opacity': [C] }],
			'ring-offset-w': [{ 'ring-offset': [q] }],
			'ring-offset-color': [{ 'ring-offset': [e] }],
			shadow: [{ shadow: ['', 'inner', 'none', ie, pi] }],
			'shadow-color': [{ shadow: [Ce] }],
			opacity: [{ opacity: [C] }],
			'mix-blend': [{ 'mix-blend': O() }],
			'bg-blend': [{ 'bg-blend': O() }],
			filter: [{ filter: ['', 'none'] }],
			blur: [{ blur: [r] }],
			brightness: [{ brightness: [n] }],
			contrast: [{ contrast: [c] }],
			'drop-shadow': [{ 'drop-shadow': ['', 'none', ie, L] }],
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
			'border-spacing': [{ 'border-spacing': [a] }],
			'border-spacing-x': [{ 'border-spacing-x': [a] }],
			'border-spacing-y': [{ 'border-spacing-y': [a] }],
			'table-layout': [{ table: ['auto', 'fixed'] }],
			caption: [{ caption: ['top', 'bottom'] }],
			transition: [
				{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', L] },
			],
			duration: [{ duration: ae() }],
			ease: [{ ease: ['linear', 'in', 'out', 'in-out', L] }],
			delay: [{ delay: ae() }],
			animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', L] }],
			transform: [{ transform: ['', 'gpu', 'none'] }],
			scale: [{ scale: [A] }],
			'scale-x': [{ 'scale-x': [A] }],
			'scale-y': [{ 'scale-y': [A] }],
			rotate: [{ rotate: [Se, L] }],
			'translate-x': [{ 'translate-x': [s] }],
			'translate-y': [{ 'translate-y': [s] }],
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
						L,
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
						L,
					],
				},
			],
			'caret-color': [{ caret: [e] }],
			'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
			resize: [{ resize: ['none', 'y', 'x', ''] }],
			'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
			'scroll-m': [{ 'scroll-m': b() }],
			'scroll-mx': [{ 'scroll-mx': b() }],
			'scroll-my': [{ 'scroll-my': b() }],
			'scroll-ms': [{ 'scroll-ms': b() }],
			'scroll-me': [{ 'scroll-me': b() }],
			'scroll-mt': [{ 'scroll-mt': b() }],
			'scroll-mr': [{ 'scroll-mr': b() }],
			'scroll-mb': [{ 'scroll-mb': b() }],
			'scroll-ml': [{ 'scroll-ml': b() }],
			'scroll-p': [{ 'scroll-p': b() }],
			'scroll-px': [{ 'scroll-px': b() }],
			'scroll-py': [{ 'scroll-py': b() }],
			'scroll-ps': [{ 'scroll-ps': b() }],
			'scroll-pe': [{ 'scroll-pe': b() }],
			'scroll-pt': [{ 'scroll-pt': b() }],
			'scroll-pr': [{ 'scroll-pr': b() }],
			'scroll-pb': [{ 'scroll-pb': b() }],
			'scroll-pl': [{ 'scroll-pl': b() }],
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
			'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', L] }],
			fill: [{ fill: [e, 'none'] }],
			'stroke-w': [{ stroke: [q, We] }],
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
function mi(e, t) {
	for (var r in t) Rn(e, r, t[r]);
	return e;
}
var hi = Object.prototype.hasOwnProperty,
	$i = new Set(['string', 'number', 'boolean']);
function Rn(e, t, r) {
	if (!hi.call(e, t) || $i.has(typeof r) || r === null) {
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
		for (var n in r) Rn(e[t], n, r[n]);
	}
}
function yi(e) {
	for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
		r[n - 1] = arguments[n];
	return typeof e == 'function'
		? Ct.apply(void 0, [Mt, e].concat(r))
		: Ct.apply(
				void 0,
				[
					function () {
						return mi(Mt(), e);
					},
				].concat(r)
		  );
}
var wi = Ct(Mt),
	Ti = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
	Kn = (e) => e || void 0,
	tt = (...e) => Kn(kn(e).filter(Boolean).join(' ')),
	gt = null,
	rt = {},
	kt = !1,
	Le =
		(...e) =>
		(t) =>
			t.twMerge ? ((!gt || kt) && ((kt = !1), (gt = V(rt) ? wi : yi(rt))), Kn(gt(tt(e)))) : tt(e),
	xr = (e, t) => {
		for (let r in t) e.hasOwnProperty(r) ? (e[r] = tt(e[r], t[r])) : (e[r] = t[r]);
		return e;
	},
	Ei = (e, t) => {
		let {
				extend: r = null,
				slots: n = {},
				variants: o = {},
				compoundVariants: i = [],
				compoundSlots: a = [],
				defaultVariants: l = {},
			} = e,
			c = { ...Ti, ...t },
			p = r != null && r.base ? tt(r.base, e?.base) : e?.base,
			v = r != null && r.variants && !V(r.variants) ? jt(o, r.variants) : o,
			y =
				r != null && r.defaultVariants && !V(r.defaultVariants)
					? { ...r.defaultVariants, ...l }
					: l;
		!V(c.twMergeConfig) && !ja(c.twMergeConfig, rt) && ((kt = !0), (rt = c.twMergeConfig));
		let g = V(n) ? {} : { base: e?.base, ...n },
			m = V(r?.slots) ? g : xr({ ...r?.slots }, V(g) ? { base: e?.base } : g),
			$ = (T) => {
				if (V(v) && V(n) && V(r?.slots)) return Le(p, T?.class, T?.className)(c);
				if (i && !Array.isArray(i))
					throw new TypeError(
						`The "compoundVariants" prop must be an array. Received: ${typeof i}`
					);
				if (a && !Array.isArray(a))
					throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);
				let C = (d, b, u = [], f) => {
						let E = u;
						if (typeof b == 'string')
							E = E.concat(
								wr(b)
									.split(' ')
									.map((k) => `${d}:${k}`)
							);
						else if (Array.isArray(b)) E = E.concat(b.reduce((k, O) => k.concat(`${d}:${O}`), []));
						else if (typeof b == 'object' && typeof f == 'string') {
							for (let k in b)
								if (b.hasOwnProperty(k) && k === f) {
									let O = b[k];
									if (O && typeof O == 'string') {
										let F = wr(O);
										E[f]
											? (E[f] = E[f].concat(F.split(' ').map((W) => `${d}:${W}`)))
											: (E[f] = F.split(' ').map((W) => `${d}:${W}`));
									} else
										Array.isArray(O) &&
											O.length > 0 &&
											(E[f] = O.reduce((F, W) => F.concat(`${d}:${W}`), []));
								}
						}
						return E;
					},
					x = (d, b = v, u = null, f = null) => {
						var E;
						let k = b[d];
						if (!k || V(k)) return null;
						let O = (E = f?.[d]) != null ? E : T?.[d];
						if (O === null) return null;
						let F = yr(O),
							W =
								(Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0) ||
								c.responsiveVariants === !0,
							Q = y?.[d],
							B = [];
						if (typeof F == 'object' && W)
							for (let [U, Bt] of Object.entries(F)) {
								let Gn = k[Bt];
								if (U === 'initial') {
									Q = Bt;
									continue;
								}
								(Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(U)) ||
									(B = C(U, Gn, B, u));
							}
						let ae = k[F] || k[yr(Q)];
						return typeof B == 'object' && typeof u == 'string' && B[u]
							? xr(B, ae)
							: B.length > 0
							? (B.push(ae), B)
							: ae;
					},
					S = () => (v ? Object.keys(v).map((d) => x(d, v)) : null),
					A = (d, b) => {
						if (!v || typeof v != 'object') return null;
						let u = new Array();
						for (let f in v) {
							let E = x(f, v, d, b),
								k = d === 'base' && typeof E == 'string' ? E : E && E[d];
							k && (u[u.length] = k);
						}
						return u;
					},
					I = {};
				for (let d in T) T[d] !== void 0 && (I[d] = T[d]);
				let N = (d, b) => {
						var u;
						let f =
							typeof T?.[d] == 'object' ? { [d]: (u = T[d]) == null ? void 0 : u.initial } : {};
						return { ...y, ...I, ...f, ...b };
					},
					H = (d = [], b) => {
						let u = [];
						for (let { class: f, className: E, ...k } of d) {
							let O = !0;
							for (let [F, W] of Object.entries(k)) {
								let Q = N(F, b);
								if (Array.isArray(W)) {
									if (!W.includes(Q[F])) {
										O = !1;
										break;
									}
								} else if (Q[F] !== W) {
									O = !1;
									break;
								}
							}
							O && (f && u.push(f), E && u.push(E));
						}
						return u;
					},
					s = (d) => {
						let b = H(i, d),
							u = H(r?.compoundVariants, d);
						return _a(u, b);
					},
					w = (d) => {
						let b = s(d);
						if (!Array.isArray(b)) return b;
						let u = {};
						for (let f of b)
							if ((typeof f == 'string' && (u.base = Le(u.base, f)(c)), typeof f == 'object'))
								for (let [E, k] of Object.entries(f)) u[E] = Le(u[E], k)(c);
						return u;
					},
					M = (d) => {
						if (a.length < 1) return null;
						let b = {};
						for (let { slots: u = [], class: f, className: E, ...k } of a) {
							if (!V(k)) {
								let O = !0;
								for (let F of Object.keys(k)) {
									let W = N(F, d)[F];
									if (W === void 0 || (Array.isArray(k[F]) ? !k[F].includes(W) : k[F] !== W)) {
										O = !1;
										break;
									}
								}
								if (!O) continue;
							}
							for (let O of u) (b[O] = b[O] || []), b[O].push([f, E]);
						}
						return b;
					};
				if (!V(n) || !V(r?.slots)) {
					let d = {};
					if (typeof m == 'object' && !V(m))
						for (let b of Object.keys(m))
							d[b] = (u) => {
								var f, E;
								return Le(
									m[b],
									A(b, u),
									((f = w(u)) != null ? f : [])[b],
									((E = M(u)) != null ? E : [])[b],
									u?.class,
									u?.className
								)(c);
							};
					return d;
				}
				return Le(p, S(), s(), T?.class, T?.className)(c);
			},
			P = () => {
				if (!(!v || typeof v != 'object')) return Object.keys(v);
			};
		return (
			($.variantKeys = P()),
			($.extend = r),
			($.base = p),
			($.slots = m),
			($.variants = v),
			($.defaultVariants = y),
			($.compoundSlots = a),
			($.compoundVariants = i),
			$
		);
	},
	Pi = (e) => (t, r) => Ei(t, r ? jt(e, r) : e),
	ze = ['small', 'medium', 'large'],
	ss = Pi({
		twMerge: !0,
		twMergeConfig: {
			theme: {
				opacity: ['disabled'],
				spacing: ['divider', 'unit', ...vt],
				borderWidth: ze,
				borderRadius: ze,
			},
			classGroups: {
				shadow: [{ shadow: ze }],
				'font-size': [{ text: ['tiny', ...ze] }],
				'bg-image': ['bg-stripe-gradient'],
				'min-w': [{ 'min-w': ['unit', ...vt] }],
				'min-h': [{ 'min-h': ['unit', ...vt] }],
			},
		},
	}),
	ls = [
		'outline-none',
		'data-[focus-visible=true]:z-10',
		'data-[focus-visible=true]:outline-2',
		'data-[focus-visible=true]:outline-focus',
		'data-[focus-visible=true]:outline-offset-2',
	],
	us = [
		'outline-none',
		'group-data-[focus-visible=true]:z-10',
		'group-data-[focus-visible=true]:ring-2',
		'group-data-[focus-visible=true]:ring-focus',
		'group-data-[focus-visible=true]:ring-offset-2',
		'group-data-[focus-visible=true]:ring-offset-background',
	],
	cs = {
		default: ['[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		primary: ['[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		secondary: ['[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		success: ['[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		warning: ['[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]'],
		danger: ['[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]'],
	};
function Dn(e) {
	var t,
		r,
		n = '';
	if (typeof e == 'string' || typeof e == 'number') n += e;
	else if (typeof e == 'object')
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++) e[t] && (r = Dn(e[t])) && (n && (n += ' '), (n += r));
		else for (t in e) e[t] && (n && (n += ' '), (n += t));
	return n;
}
function ds(...e) {
	for (var t = 0, r, n, o = ''; t < e.length; )
		(r = e[t++]) && (n = Dn(r)) && (o && (o += ' '), (o += n));
	return o;
}
var fs = (e) => (e ? 'true' : void 0);
function ps(e = {}) {
	const {
			strict: t = !0,
			errorMessage:
				r = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
			name: n,
		} = e,
		o = h.createContext(void 0);
	o.displayName = n;
	function i() {
		var a;
		const l = h.useContext(o);
		if (!l && t) {
			const c = new Error(r);
			throw (
				((c.name = 'ContextError'), (a = Error.captureStackTrace) == null || a.call(Error, c, i), c)
			);
		}
		return l;
	}
	return [o.Provider, i, o];
}
function vs(e) {
	const t = h.useRef(null);
	return h.useImperativeHandle(e, () => t.current), t;
}
var Hn = D.createContext(null);
Hn.displayName = 'PressResponderContext';
var xi = Object.defineProperty,
	Si = (e, t, r) =>
		t in e ? xi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
	ue = (e, t, r) => (Si(e, typeof t != 'symbol' ? t + '' : t, r), r),
	Wn = (e, t, r) => {
		if (!t.has(e)) throw TypeError('Cannot ' + r);
	},
	Ci = (e, t, r) => (Wn(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
	Li = (e, t, r) => {
		if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
		t instanceof WeakSet ? t.add(e) : t.set(e, r);
	},
	Mi = (e, t, r, n) => (Wn(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
	_e,
	Ge = class {
		constructor(e, t, r) {
			ue(this, 'type'),
				ue(this, 'pointerType'),
				ue(this, 'target'),
				ue(this, 'shiftKey'),
				ue(this, 'ctrlKey'),
				ue(this, 'metaKey'),
				ue(this, 'altKey'),
				Li(this, _e, !0),
				(this.type = e),
				(this.pointerType = t),
				(this.target = r.currentTarget),
				(this.shiftKey = r.shiftKey),
				(this.metaKey = r.metaKey),
				(this.ctrlKey = r.ctrlKey),
				(this.altKey = r.altKey);
		}
		continuePropagation() {
			Mi(this, _e, !1);
		}
		get shouldStopPropagation() {
			return Ci(this, _e);
		}
	};
_e = new WeakMap();
var ce = (e) => {
		var t;
		return (t = e?.ownerDocument) != null ? t : document;
	},
	At = (e) => {
		var t, r;
		return (r = (t = e?.ownerDocument) == null ? void 0 : t.defaultView) != null ? r : window;
	},
	Ee = 'default',
	It = '',
	Ve = new WeakMap();
function Sr(e) {
	if (Ne()) {
		if (Ee === 'default') {
			const t = ce(e);
			(It = t.documentElement.style.webkitUserSelect),
				(t.documentElement.style.webkitUserSelect = 'none');
		}
		Ee = 'disabled';
	} else
		(e instanceof HTMLElement || e instanceof SVGElement) &&
			(Ve.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function Ue(e) {
	if (Ne()) {
		if (Ee !== 'disabled') return;
		(Ee = 'restoring'),
			setTimeout(() => {
				Ft(() => {
					if (Ee === 'restoring') {
						const t = ce(e);
						t.documentElement.style.webkitUserSelect === 'none' &&
							(t.documentElement.style.webkitUserSelect = It || ''),
							(It = ''),
							(Ee = 'default');
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
function ki(e) {
	let t = h.useContext(Hn);
	if (t) {
		let { register: r, ...n } = t;
		(e = Z(n, e)), r();
	}
	return Kt(t, e.ref), e;
}
var Cr = Symbol('linkClicked');
function Ai(e) {
	let {
			onPress: t,
			onPressChange: r,
			onPressStart: n,
			onPressEnd: o,
			onPressUp: i,
			isDisabled: a,
			isPressed: l,
			preventFocusOnPress: c,
			shouldCancelOnPointerExit: p,
			allowTextSelectionOnPress: v,
			ref: y,
			...g
		} = ki(e),
		[m, $] = h.useState(!1),
		P = h.useRef({
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
		{ addGlobalListener: T, removeAllGlobalListeners: C } = Rt(),
		x = j((s, w) => {
			let M = P.current;
			if (a || M.didFirePressStart) return;
			let d = !0;
			if (((M.isTriggeringEvent = !0), n)) {
				let b = new Ge('pressstart', w, s);
				n(b), (d = b.shouldStopPropagation);
			}
			return r && r(!0), (M.isTriggeringEvent = !1), (M.didFirePressStart = !0), $(!0), d;
		}),
		S = j((s, w, M = !0) => {
			let d = P.current;
			if (!d.didFirePressStart) return;
			(d.ignoreClickAfterPress = !0), (d.didFirePressStart = !1), (d.isTriggeringEvent = !0);
			let b = !0;
			if (o) {
				let u = new Ge('pressend', w, s);
				o(u), (b = u.shouldStopPropagation);
			}
			if ((r && r(!1), $(!1), t && M && !a)) {
				let u = new Ge('press', w, s);
				t(u), b && (b = u.shouldStopPropagation);
			}
			return (d.isTriggeringEvent = !1), b;
		}),
		A = j((s, w) => {
			let M = P.current;
			if (!a) {
				if (i) {
					M.isTriggeringEvent = !0;
					let d = new Ge('pressup', w, s);
					return i(d), (M.isTriggeringEvent = !1), d.shouldStopPropagation;
				}
				return !0;
			}
		}),
		I = j((s) => {
			let w = P.current;
			w.isPressed &&
				(w.isOverTarget && w.target && S(re(w.target, s), w.pointerType, !1),
				(w.isPressed = !1),
				(w.isOverTarget = !1),
				(w.activePointerId = null),
				(w.pointerType = null),
				C(),
				!v && w.target && Ue(w.target));
		}),
		N = j((s) => {
			p && I(s);
		}),
		H = h.useMemo(() => {
			let s = P.current,
				w = {
					onKeyDown(d) {
						var b;
						if (bt(d.nativeEvent, d.currentTarget) && d.currentTarget.contains(d.target)) {
							Mr(d.target, d.key) && d.preventDefault();
							let u = !0;
							!s.isPressed &&
								!d.repeat &&
								((s.target = d.currentTarget),
								(s.isPressed = !0),
								(u = x(d, 'keyboard')),
								T(ce(d.currentTarget), 'keyup', M, !1)),
								u && d.stopPropagation(),
								d.metaKey && pe() && ((b = s.metaKeyEvents) == null || b.set(d.key, d.nativeEvent));
						} else d.key === 'Meta' && (s.metaKeyEvents = new Map());
					},
					onKeyUp(d) {
						s.target &&
							bt(d.nativeEvent, d.currentTarget) &&
							!d.repeat &&
							d.currentTarget.contains(d.target) &&
							A(re(s.target, d), 'keyboard');
					},
					onClick(d) {
						if (
							!(d && !d.currentTarget.contains(d.target)) &&
							d &&
							d.button === 0 &&
							!s.isTriggeringEvent &&
							!le.isOpening
						) {
							let b = !0;
							if (
								(a && d.preventDefault(),
								!s.ignoreClickAfterPress &&
									!s.ignoreEmulatedMouseEvents &&
									!s.isPressed &&
									(s.pointerType === 'virtual' || Ae(d.nativeEvent)))
							) {
								!a && !c && J(d.currentTarget);
								let u = x(d, 'virtual'),
									f = A(d, 'virtual'),
									E = S(d, 'virtual');
								b = u && f && E;
							}
							(s.ignoreEmulatedMouseEvents = !1),
								(s.ignoreClickAfterPress = !1),
								b && d.stopPropagation();
						}
					},
				},
				M = (d) => {
					var b, u;
					if (s.isPressed && s.target && bt(d, s.target)) {
						Mr(d.target, d.key) && d.preventDefault();
						let f = d.target,
							E = S(re(s.target, d), 'keyboard', s.target.contains(f));
						C(),
							E && d.stopPropagation(),
							d.key !== 'Enter' &&
								Vt(s.target) &&
								s.target.contains(f) &&
								!d[Cr] &&
								((d[Cr] = !0), le(s.target, d, !1)),
							(s.isPressed = !1),
							(b = s.metaKeyEvents) == null || b.delete(d.key);
					} else if (d.key === 'Meta' && (u = s.metaKeyEvents) != null && u.size) {
						let f = s.metaKeyEvents;
						s.metaKeyEvents = null;
						for (let E of f.values())
							s.target && s.target.dispatchEvent(new KeyboardEvent('keyup', E));
					}
				};
			if (typeof PointerEvent < 'u') {
				(w.onPointerDown = (f) => {
					if (f.button !== 0 || !f.currentTarget.contains(f.target)) return;
					if (Rr(f.nativeEvent)) {
						s.pointerType = 'virtual';
						return;
					}
					mt(f.currentTarget) && f.preventDefault(), (s.pointerType = f.pointerType);
					let E = !0;
					s.isPressed ||
						((s.isPressed = !0),
						(s.isOverTarget = !0),
						(s.activePointerId = f.pointerId),
						(s.target = f.currentTarget),
						!a && !c && J(f.currentTarget),
						v || Sr(s.target),
						(E = x(f, s.pointerType)),
						T(ce(f.currentTarget), 'pointermove', d, !1),
						T(ce(f.currentTarget), 'pointerup', b, !1),
						T(ce(f.currentTarget), 'pointercancel', u, !1)),
						E && f.stopPropagation();
				}),
					(w.onMouseDown = (f) => {
						f.currentTarget.contains(f.target) &&
							f.button === 0 &&
							(mt(f.currentTarget) && f.preventDefault(), f.stopPropagation());
					}),
					(w.onPointerUp = (f) => {
						!f.currentTarget.contains(f.target) ||
							s.pointerType === 'virtual' ||
							(f.button === 0 && $e(f, f.currentTarget) && A(f, s.pointerType || f.pointerType));
					});
				let d = (f) => {
						f.pointerId !== s.activePointerId ||
							!s.target ||
							($e(f, s.target)
								? s.isOverTarget || ((s.isOverTarget = !0), x(re(s.target, f), s.pointerType))
								: s.isOverTarget &&
								  ((s.isOverTarget = !1), S(re(s.target, f), s.pointerType, !1), N(f)));
					},
					b = (f) => {
						f.pointerId === s.activePointerId &&
							s.isPressed &&
							f.button === 0 &&
							s.target &&
							(($e(f, s.target) || s.isOverTarget) && S(re(s.target, f), s.pointerType),
							(s.isPressed = !1),
							(s.isOverTarget = !1),
							(s.activePointerId = null),
							(s.pointerType = null),
							C(),
							v || Ue(s.target));
					},
					u = (f) => {
						I(f);
					};
				w.onDragStart = (f) => {
					f.currentTarget.contains(f.target) && I(f);
				};
			} else {
				(w.onMouseDown = (u) => {
					if (u.button !== 0 || !u.currentTarget.contains(u.target)) return;
					if ((mt(u.currentTarget) && u.preventDefault(), s.ignoreEmulatedMouseEvents)) {
						u.stopPropagation();
						return;
					}
					(s.isPressed = !0),
						(s.isOverTarget = !0),
						(s.target = u.currentTarget),
						(s.pointerType = Ae(u.nativeEvent) ? 'virtual' : 'mouse'),
						!a && !c && J(u.currentTarget),
						x(u, s.pointerType) && u.stopPropagation(),
						T(ce(u.currentTarget), 'mouseup', d, !1);
				}),
					(w.onMouseEnter = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						let f = !0;
						s.isPressed &&
							!s.ignoreEmulatedMouseEvents &&
							((s.isOverTarget = !0), (f = x(u, s.pointerType))),
							f && u.stopPropagation();
					}),
					(w.onMouseLeave = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						let f = !0;
						s.isPressed &&
							!s.ignoreEmulatedMouseEvents &&
							((s.isOverTarget = !1), (f = S(u, s.pointerType, !1)), N(u)),
							f && u.stopPropagation();
					}),
					(w.onMouseUp = (u) => {
						u.currentTarget.contains(u.target) &&
							!s.ignoreEmulatedMouseEvents &&
							u.button === 0 &&
							A(u, s.pointerType || 'mouse');
					});
				let d = (u) => {
					if (u.button === 0) {
						if (((s.isPressed = !1), C(), s.ignoreEmulatedMouseEvents)) {
							s.ignoreEmulatedMouseEvents = !1;
							return;
						}
						s.target &&
							($e(u, s.target)
								? S(re(s.target, u), s.pointerType)
								: s.isOverTarget && S(re(s.target, u), s.pointerType, !1),
							(s.isOverTarget = !1));
					}
				};
				(w.onTouchStart = (u) => {
					if (!u.currentTarget.contains(u.target)) return;
					let f = Ii(u.nativeEvent);
					if (!f) return;
					(s.activePointerId = f.identifier),
						(s.ignoreEmulatedMouseEvents = !0),
						(s.isOverTarget = !0),
						(s.isPressed = !0),
						(s.target = u.currentTarget),
						(s.pointerType = 'touch'),
						!a && !c && J(u.currentTarget),
						v || Sr(s.target),
						x(u, s.pointerType) && u.stopPropagation(),
						T(At(u.currentTarget), 'scroll', b, !0);
				}),
					(w.onTouchMove = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						if (!s.isPressed) {
							u.stopPropagation();
							return;
						}
						let f = Lr(u.nativeEvent, s.activePointerId),
							E = !0;
						f && $e(f, u.currentTarget)
							? s.isOverTarget || ((s.isOverTarget = !0), (E = x(u, s.pointerType)))
							: s.isOverTarget && ((s.isOverTarget = !1), (E = S(u, s.pointerType, !1)), N(u)),
							E && u.stopPropagation();
					}),
					(w.onTouchEnd = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						if (!s.isPressed) {
							u.stopPropagation();
							return;
						}
						let f = Lr(u.nativeEvent, s.activePointerId),
							E = !0;
						f && $e(f, u.currentTarget)
							? (A(u, s.pointerType), (E = S(u, s.pointerType)))
							: s.isOverTarget && (E = S(u, s.pointerType, !1)),
							E && u.stopPropagation(),
							(s.isPressed = !1),
							(s.activePointerId = null),
							(s.isOverTarget = !1),
							(s.ignoreEmulatedMouseEvents = !0),
							!v && s.target && Ue(s.target),
							C();
					}),
					(w.onTouchCancel = (u) => {
						u.currentTarget.contains(u.target) && (u.stopPropagation(), s.isPressed && I(u));
					});
				let b = (u) => {
					s.isPressed &&
						u.target.contains(s.target) &&
						I({ currentTarget: s.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
				};
				w.onDragStart = (u) => {
					u.currentTarget.contains(u.target) && I(u);
				};
			}
			return w;
		}, [T, a, c, C, v, I, N, S, x, A]);
	return (
		h.useEffect(
			() => () => {
				!v && P.current.target && Ue(P.current.target);
			},
			[v]
		),
		{ isPressed: l || m, pressProps: Z(g, H) }
	);
}
function Vt(e) {
	return e.tagName === 'A' && e.hasAttribute('href');
}
function bt(e, t) {
	const { key: r, code: n } = e,
		o = t,
		i = o.getAttribute('role');
	return (
		(r === 'Enter' || r === ' ' || r === 'Spacebar' || n === 'Space') &&
		!(
			(o instanceof At(o).HTMLInputElement && !zn(o, r)) ||
			o instanceof At(o).HTMLTextAreaElement ||
			o.isContentEditable
		) &&
		!((i === 'link' || (!i && Vt(o))) && r !== 'Enter')
	);
}
function Ii(e) {
	const { targetTouches: t } = e;
	return t.length > 0 ? t[0] : null;
}
function Lr(e, t) {
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
function Ni(e) {
	let t = e.width ? e.width / 2 : e.radiusX || 0,
		r = e.height ? e.height / 2 : e.radiusY || 0;
	return { top: e.clientY - r, right: e.clientX + t, bottom: e.clientY + r, left: e.clientX - t };
}
function Oi(e, t) {
	return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function $e(e, t) {
	let r = t.getBoundingClientRect(),
		n = Ni(e);
	return Oi(r, n);
}
function mt(e) {
	return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function Mr(e, t) {
	return e instanceof HTMLInputElement
		? !zn(e, t)
		: e instanceof HTMLButtonElement
		? e.type !== 'submit' && e.type !== 'reset'
		: !Vt(e);
}
var Fi = new Set([
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
function zn(e, t) {
	return e.type === 'checkbox' || e.type === 'radio' ? t === ' ' : Fi.has(e.type);
}
var ye = {
		ease: [0.36, 0.66, 0.4, 1],
		easeIn: [0.4, 0, 1, 1],
		easeOut: [0, 0, 0.2, 1],
		easeInOut: [0.4, 0, 0.2, 1],
		spring: [0.155, 1.105, 0.295, 1.12],
		springOut: [0.57, -0.15, 0.62, 0.07],
		softSpring: [0.16, 1.11, 0.3, 1.02],
	},
	gs = {
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
			enter: { transform: 'scale(1)', opacity: 1, transition: { duration: 0.25, ease: ye.easeIn } },
			exit: {
				transform: 'scale(0.95)',
				opacity: 0,
				transition: { duration: 0.2, ease: ye.easeOut },
			},
		},
		scaleInOut: {
			enter: { transform: 'scale(1)', opacity: 1, transition: { duration: 0.4, ease: ye.ease } },
			exit: { transform: 'scale(1.03)', opacity: 0, transition: { duration: 0.3, ease: ye.ease } },
		},
		fade: {
			enter: { opacity: 1, transition: { duration: 0.4, ease: ye.ease } },
			exit: { opacity: 0, transition: { duration: 0.3, ease: ye.ease } },
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
function bs(e, t) {
	let {
			elementType: r = 'button',
			isDisabled: n,
			onPress: o,
			onPressStart: i,
			onPressEnd: a,
			onPressChange: l,
			preventFocusOnPress: c,
			allowFocusWhenDisabled: p,
			onClick: v,
			href: y,
			target: g,
			rel: m,
			type: $ = 'button',
			allowTextSelectionOnPress: P,
		} = e,
		T;
	r === 'button'
		? (T = { type: $, disabled: n })
		: (T = {
				role: 'button',
				tabIndex: n ? void 0 : 0,
				href: r === 'a' && n ? void 0 : y,
				target: r === 'a' ? g : void 0,
				type: r === 'input' ? $ : void 0,
				disabled: r === 'input' ? n : void 0,
				'aria-disabled': !n || r === 'input' ? void 0 : n,
				rel: r === 'a' ? m : void 0,
		  });
	let { pressProps: C, isPressed: x } = Ai({
			onPressStart: i,
			onPressEnd: a,
			onPressChange: l,
			onPress: o,
			isDisabled: n,
			preventFocusOnPress: c,
			allowTextSelectionOnPress: P,
			ref: t,
		}),
		{ focusableProps: S } = Ca(e, t);
	p && (S.tabIndex = n ? -1 : S.tabIndex);
	let A = Z(S, C, yo(e, { labelable: !0 }));
	return {
		isPressed: x,
		buttonProps: Z(T, A, {
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
	Zt as $,
	bs as A,
	go as B,
	qi as C,
	fs as D,
	is as E,
	ds as F,
	Wi as G,
	Nt as H,
	Ao as I,
	Ca as J,
	yo as K,
	Vi as L,
	zt as M,
	es as N,
	Qi as O,
	ts as P,
	zi as Q,
	ns as R,
	os as S,
	gs as T,
	rs as U,
	Uo as V,
	ot as W,
	Yi as X,
	La as Y,
	Xi as Z,
	xo as _,
	Bi as a,
	Gr as a0,
	Ai as a1,
	Ma as a2,
	ye as a3,
	No as a4,
	Dt as b,
	cs as c,
	ls as d,
	Ui as e,
	ji as f,
	us as g,
	Ur as h,
	Ro as i,
	_i as j,
	Z as k,
	Xo as l,
	Ji as m,
	le as n,
	ia as o,
	Gi as p,
	pe as q,
	se as r,
	J as s,
	ss as t,
	Di as u,
	Hi as v,
	as as w,
	ps as x,
	vs as y,
	Zi as z,
};
