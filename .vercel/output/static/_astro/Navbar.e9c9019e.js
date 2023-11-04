import { r as m, R as q, $ as el } from './index.d4f15412.js';
var $i = { exports: {} },
	fn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tl = m,
	nl = Symbol.for('react.element'),
	rl = Symbol.for('react.fragment'),
	ol = Object.prototype.hasOwnProperty,
	il = tl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	sl = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ai(e, t, n) {
	var r,
		o = {},
		s = null,
		i = null;
	n !== void 0 && (s = '' + n),
		t.key !== void 0 && (s = '' + t.key),
		t.ref !== void 0 && (i = t.ref);
	for (r in t) ol.call(t, r) && !sl.hasOwnProperty(r) && (o[r] = t[r]);
	if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
	return { $$typeof: nl, type: e, key: s, ref: i, props: o, _owner: il.current };
}
fn.Fragment = rl;
fn.jsx = Ai;
fn.jsxs = Ai;
$i.exports = fn;
var I = $i.exports;
const qt = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
	Mi = q.createContext(qt),
	al = q.createContext(!1);
let ll = !!(typeof window < 'u' && window.document && window.document.createElement),
	Pn = new WeakMap();
function ul(e = !1) {
	let t = m.useContext(Mi),
		n = m.useRef(null);
	if (n.current === null && !e) {
		var r, o;
		let s =
			(r = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
			r === void 0 ||
			(o = r.ReactCurrentOwner) === null ||
			o === void 0
				? void 0
				: o.current;
		if (s) {
			let i = Pn.get(s);
			i == null
				? Pn.set(s, { id: t.current, state: s.memoizedState })
				: s.memoizedState !== i.state && ((t.current = i.id), Pn.delete(s));
		}
		n.current = ++t.current;
	}
	return n.current;
}
function cl(e) {
	let t = m.useContext(Mi);
	t === qt &&
		!ll &&
		console.warn(
			'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
		);
	let n = ul(!!e),
		r = `react-aria${t.prefix}`;
	return e || `${r}-${n}`;
}
function fl(e) {
	let t = q.useId(),
		[n] = m.useState(ki()),
		r = n ? 'react-aria' : `react-aria${qt.prefix}`;
	return e || `${r}-${t}`;
}
q.useId;
function dl() {
	return !1;
}
function hl() {
	return !0;
}
function pl(e) {
	return () => {};
}
function ki() {
	return typeof q.useSyncExternalStore == 'function'
		? q.useSyncExternalStore(pl, dl, hl)
		: m.useContext(al);
}
function Vi(e, t, n) {
	let [r, o] = m.useState(e || t),
		s = m.useRef(e !== void 0),
		i = e !== void 0;
	m.useEffect(() => {
		let u = s.current;
		u !== i &&
			console.warn(
				`WARN: A component changed from ${u ? 'controlled' : 'uncontrolled'} to ${
					i ? 'controlled' : 'uncontrolled'
				}.`
			),
			(s.current = i);
	}, [i]);
	let a = i ? e : r,
		l = m.useCallback(
			(u, ...c) => {
				let f = (d, ...h) => {
					n && (Object.is(a, d) || n(d, ...h)), i || (a = d);
				};
				typeof u == 'function'
					? (console.warn(
							'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320'
					  ),
					  o((h, ...v) => {
							let y = u(i ? a : h, ...v);
							return f(y, ...c), i ? h : y;
					  }))
					: (i || o(u), f(u, ...c));
			},
			[i, a, n]
		);
	return [a, l];
}
function Ri(e) {
	var t,
		n,
		r = '';
	if (typeof e == 'string' || typeof e == 'number') r += e;
	else if (typeof e == 'object')
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++) e[t] && (n = Ri(e[t])) && (r && (r += ' '), (r += n));
		else for (t in e) e[t] && (r && (r += ' '), (r += t));
	return r;
}
function ml() {
	for (var e, t, n = 0, r = ''; n < arguments.length; )
		(e = arguments[n++]) && (t = Ri(e)) && (r && (r += ' '), (r += t));
	return r;
}
const pe = typeof document < 'u' ? q.useLayoutEffect : () => {};
function tt(e) {
	const t = m.useRef(null);
	return (
		pe(() => {
			t.current = e;
		}, [e]),
		m.useCallback((...n) => {
			const r = t.current;
			return r(...n);
		}, [])
	);
}
let Xr = new Map();
function gl(e, t) {
	if (e === t) return e;
	let n = Xr.get(e);
	if (n) return n(t), t;
	let r = Xr.get(t);
	return r ? (r(e), e) : t;
}
function Li(...e) {
	return (...t) => {
		for (let n of e) typeof n == 'function' && n(...t);
	};
}
function ue(...e) {
	let t = { ...e[0] };
	for (let n = 1; n < e.length; n++) {
		let r = e[n];
		for (let o in r) {
			let s = t[o],
				i = r[o];
			typeof s == 'function' &&
			typeof i == 'function' &&
			o[0] === 'o' &&
			o[1] === 'n' &&
			o.charCodeAt(2) >= 65 &&
			o.charCodeAt(2) <= 90
				? (t[o] = Li(s, i))
				: (o === 'className' || o === 'UNSAFE_className') &&
				  typeof s == 'string' &&
				  typeof i == 'string'
				? (t[o] = ml(s, i))
				: o === 'id' && s && i
				? (t.id = gl(s, i))
				: (t[o] = i !== void 0 ? i : s);
		}
	}
	return t;
}
const vl = new Set(['id']),
	yl = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
	bl = new Set(['href', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
	xl = /^(data-.*)$/;
function Di(e, t = {}) {
	let { labelable: n, isLink: r, propNames: o } = t,
		s = {};
	for (const i in e)
		Object.prototype.hasOwnProperty.call(e, i) &&
			(vl.has(i) || (n && yl.has(i)) || (r && bl.has(i)) || o?.has(i) || xl.test(i)) &&
			(s[i] = e[i]);
	return s;
}
function Ke(e) {
	if (wl()) e.focus({ preventScroll: !0 });
	else {
		let t = Pl(e);
		e.focus(), Tl(t);
	}
}
let Lt = null;
function wl() {
	if (Lt == null) {
		Lt = !1;
		try {
			var e = document.createElement('div');
			e.focus({
				get preventScroll() {
					return (Lt = !0), !0;
				},
			});
		} catch {}
	}
	return Lt;
}
function Pl(e) {
	for (
		var t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
		t instanceof HTMLElement && t !== r;

	)
		(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) &&
			n.push({ element: t, scrollTop: t.scrollTop, scrollLeft: t.scrollLeft }),
			(t = t.parentNode);
	return (
		r instanceof HTMLElement &&
			n.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft }),
		n
	);
}
function Tl(e) {
	for (let { element: t, scrollTop: n, scrollLeft: r } of e) (t.scrollTop = n), (t.scrollLeft = r);
}
function dn(e) {
	var t;
	return typeof window > 'u' || window.navigator == null
		? !1
		: ((t = window.navigator.userAgentData) === null || t === void 0
				? void 0
				: t.brands.some((n) => e.test(n.brand))) || e.test(window.navigator.userAgent);
}
function br(e) {
	var t;
	return typeof window < 'u' && window.navigator != null
		? e.test(
				((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) ||
					window.navigator.platform
		  )
		: !1;
}
function Ct() {
	return br(/^Mac/i);
}
function Sl() {
	return br(/^iPhone/i);
}
function Ni() {
	return br(/^iPad/i) || (Ct() && navigator.maxTouchPoints > 1);
}
function Fi() {
	return Sl() || Ni();
}
function Cl() {
	return dn(/AppleWebKit/i) && !El();
}
function El() {
	return dn(/Chrome/i);
}
function Oi() {
	return dn(/Android/i);
}
function $l() {
	return dn(/Firefox/i);
}
const Al = m.createContext({ isNative: !0, open: Rl });
function Ml() {
	return m.useContext(Al);
}
function kl(e, t) {
	let n = e.getAttribute('target');
	return (
		(!n || n === '_self') &&
		e.origin === location.origin &&
		!e.hasAttribute('download') &&
		!t.metaKey &&
		!t.ctrlKey &&
		!t.altKey &&
		!t.shiftKey
	);
}
function ut(e, t, n = !0) {
	var r, o;
	let { metaKey: s, ctrlKey: i, altKey: a, shiftKey: l } = t;
	$l() &&
		!((r = window.event) === null || r === void 0 || (o = r.type) === null || o === void 0) &&
		o.startsWith('key') &&
		e.target === '_blank' &&
		(Ct() ? (s = !0) : (i = !0));
	let u =
		Cl() && Ct() && !Ni()
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
	(ut.isOpening = n), Ke(e), e.dispatchEvent(u), (ut.isOpening = !1);
}
ut.isOpening = !1;
function Vl(e, t) {
	if (e instanceof HTMLAnchorElement) t(e);
	else if (e.hasAttribute('data-href')) {
		let n = document.createElement('a');
		(n.href = e.getAttribute('data-href')),
			e.hasAttribute('data-target') && (n.target = e.getAttribute('data-target')),
			e.hasAttribute('data-rel') && (n.rel = e.getAttribute('data-rel')),
			e.hasAttribute('data-download') && (n.download = e.getAttribute('data-download')),
			e.hasAttribute('data-ping') && (n.ping = e.getAttribute('data-ping')),
			e.hasAttribute('data-referrer-policy') &&
				(n.referrerPolicy = e.getAttribute('data-referrer-policy')),
			e.appendChild(n),
			t(n),
			e.removeChild(n);
	}
}
function Rl(e, t) {
	Vl(e, (n) => ut(n, t));
}
let nt = new Map(),
	zn = new Set();
function qr() {
	if (typeof window > 'u') return;
	let e = (n) => {
			let r = nt.get(n.target);
			r || ((r = new Set()), nt.set(n.target, r), n.target.addEventListener('transitioncancel', t)),
				r.add(n.propertyName);
		},
		t = (n) => {
			let r = nt.get(n.target);
			if (
				r &&
				(r.delete(n.propertyName),
				r.size === 0 && (n.target.removeEventListener('transitioncancel', t), nt.delete(n.target)),
				nt.size === 0)
			) {
				for (let o of zn) o();
				zn.clear();
			}
		};
	document.body.addEventListener('transitionrun', e),
		document.body.addEventListener('transitionend', t);
}
typeof document < 'u' &&
	(document.readyState !== 'loading' ? qr() : document.addEventListener('DOMContentLoaded', qr));
function Ii(e) {
	requestAnimationFrame(() => {
		nt.size === 0 ? e() : zn.add(e);
	});
}
function Ll() {
	let e = m.useRef(new Map()),
		t = m.useCallback((o, s, i, a) => {
			let l = a?.once
				? (...u) => {
						e.current.delete(i), i(...u);
				  }
				: i;
			e.current.set(i, { type: s, eventTarget: o, fn: l, options: a }), o.addEventListener(s, i, a);
		}, []),
		n = m.useCallback((o, s, i, a) => {
			var l;
			let u = ((l = e.current.get(i)) === null || l === void 0 ? void 0 : l.fn) || i;
			o.removeEventListener(s, u, a), e.current.delete(i);
		}, []),
		r = m.useCallback(() => {
			e.current.forEach((o, s) => {
				n(o.eventTarget, o.type, s, o.options);
			});
		}, [n]);
	return (
		m.useEffect(() => r, [r]),
		{ addGlobalListener: t, removeGlobalListener: n, removeAllGlobalListeners: r }
	);
}
function Dl() {
	return typeof window.ResizeObserver < 'u';
}
function Nl(e) {
	const { ref: t, onResize: n } = e;
	m.useEffect(() => {
		let r = t?.current;
		if (r)
			if (Dl()) {
				const o = new window.ResizeObserver((s) => {
					s.length && n();
				});
				return (
					o.observe(r),
					() => {
						r && o.unobserve(r);
					}
				);
			} else
				return (
					window.addEventListener('resize', n, !1),
					() => {
						window.removeEventListener('resize', n, !1);
					}
				);
	}, [n, t]);
}
function ji(e, t) {
	pe(() => {
		if (e && e.ref && t)
			return (
				(e.ref.current = t.current),
				() => {
					e.ref.current = null;
				}
			);
	});
}
function Un(e) {
	return e.mozInputSource === 0 && e.isTrusted
		? !0
		: Oi() && e.pointerType
		? e.type === 'click' && e.buttons === 1
		: e.detail === 0 && !e.pointerType;
}
function Fl(e) {
	return (
		(!Oi() && e.width === 0 && e.height === 0) ||
		(e.width === 1 &&
			e.height === 1 &&
			e.pressure === 0 &&
			e.detail === 0 &&
			e.pointerType === 'mouse')
	);
}
var ve = function () {
	return (
		(ve =
			Object.assign ||
			function (t) {
				for (var n, r = 1, o = arguments.length; r < o; r++) {
					n = arguments[r];
					for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
				}
				return t;
			}),
		ve.apply(this, arguments)
	);
};
function Bi(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
			t.indexOf(r[o]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
				(n[r[o]] = e[r[o]]);
	return n;
}
function Ol(e, t, n) {
	if (n || arguments.length === 2)
		for (var r = 0, o = t.length, s; r < o; r++)
			(s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
	return e.concat(s || Array.prototype.slice.call(t));
}
const _i = q.createContext(null);
_i.displayName = 'PressResponderContext';
function Il({ children: e }) {
	return q.createElement(_i.Provider, { value: void 0 }, e);
}
class jl {
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
	constructor(t, n) {
		(this.nativeEvent = n),
			(this.target = n.target),
			(this.currentTarget = n.currentTarget),
			(this.relatedTarget = n.relatedTarget),
			(this.bubbles = n.bubbles),
			(this.cancelable = n.cancelable),
			(this.defaultPrevented = n.defaultPrevented),
			(this.eventPhase = n.eventPhase),
			(this.isTrusted = n.isTrusted),
			(this.timeStamp = n.timeStamp),
			(this.type = t);
	}
}
function Wi(e) {
	let t = m.useRef({ isFocused: !1, observer: null });
	pe(() => {
		const r = t.current;
		return () => {
			r.observer && (r.observer.disconnect(), (r.observer = null));
		};
	}, []);
	let n = tt((r) => {
		e?.(r);
	});
	return m.useCallback(
		(r) => {
			if (
				r.target instanceof HTMLButtonElement ||
				r.target instanceof HTMLInputElement ||
				r.target instanceof HTMLTextAreaElement ||
				r.target instanceof HTMLSelectElement
			) {
				t.current.isFocused = !0;
				let o = r.target,
					s = (i) => {
						(t.current.isFocused = !1),
							o.disabled && n(new jl('blur', i)),
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
		[n]
	);
}
function Ki(e) {
	let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
	const s = m.useCallback(
			(l) => {
				if (l.target === l.currentTarget) return r && r(l), o && o(!1), !0;
			},
			[r, o]
		),
		i = Wi(s),
		a = m.useCallback(
			(l) => {
				l.target === l.currentTarget &&
					document.activeElement === l.target &&
					(n && n(l), o && o(!0), i(l));
			},
			[o, n, i]
		);
	return {
		focusProps: { onFocus: !t && (n || o || r) ? a : void 0, onBlur: !t && (r || o) ? s : void 0 },
	};
}
let dt = null,
	Hn = new Set(),
	Zr = !1,
	Ge = !1,
	Gn = !1;
const Bl = { Tab: !0, Escape: !0 };
function xr(e, t) {
	for (let n of Hn) n(e, t);
}
function _l(e) {
	return !(
		e.metaKey ||
		(!Ct() && e.altKey) ||
		e.ctrlKey ||
		e.key === 'Control' ||
		e.key === 'Shift' ||
		e.key === 'Meta'
	);
}
function Jr(e) {
	(Ge = !0), _l(e) && ((dt = 'keyboard'), xr('keyboard', e));
}
function Ze(e) {
	(dt = 'pointer'),
		(e.type === 'mousedown' || e.type === 'pointerdown') && ((Ge = !0), xr('pointer', e));
}
function Wl(e) {
	Un(e) && ((Ge = !0), (dt = 'virtual'));
}
function Kl(e) {
	e.target === window ||
		e.target === document ||
		(!Ge && !Gn && ((dt = 'virtual'), xr('virtual', e)), (Ge = !1), (Gn = !1));
}
function zl() {
	(Ge = !1), (Gn = !0);
}
function Yn() {
	if (typeof window > 'u' || Zr) return;
	let e = HTMLElement.prototype.focus;
	(HTMLElement.prototype.focus = function () {
		(Ge = !0), e.apply(this, arguments);
	}),
		document.addEventListener('keydown', Jr, !0),
		document.addEventListener('keyup', Jr, !0),
		document.addEventListener('click', Wl, !0),
		window.addEventListener('focus', Kl, !0),
		window.addEventListener('blur', zl, !1),
		typeof PointerEvent < 'u'
			? (document.addEventListener('pointerdown', Ze, !0),
			  document.addEventListener('pointermove', Ze, !0),
			  document.addEventListener('pointerup', Ze, !0))
			: (document.addEventListener('mousedown', Ze, !0),
			  document.addEventListener('mousemove', Ze, !0),
			  document.addEventListener('mouseup', Ze, !0)),
		(Zr = !0);
}
typeof document < 'u' &&
	(document.readyState !== 'loading' ? Yn() : document.addEventListener('DOMContentLoaded', Yn));
function zi() {
	return dt !== 'pointer';
}
function Ul() {
	return dt;
}
function Hl(e, t, n) {
	return !(e && t === 'keyboard' && n instanceof KeyboardEvent && !Bl[n.key]);
}
function Gl(e, t, n) {
	Yn(),
		m.useEffect(() => {
			let r = (o, s) => {
				Hl(n?.isTextInput, o, s) && e(zi());
			};
			return (
				Hn.add(r),
				() => {
					Hn.delete(r);
				}
			);
		}, t);
}
function Yl(e) {
	let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e,
		s = m.useRef({ isFocusWithin: !1 }),
		i = m.useCallback(
			(u) => {
				s.current.isFocusWithin &&
					!u.currentTarget.contains(u.relatedTarget) &&
					((s.current.isFocusWithin = !1), n && n(u), o && o(!1));
			},
			[n, o, s]
		),
		a = Wi(i),
		l = m.useCallback(
			(u) => {
				!s.current.isFocusWithin &&
					document.activeElement === u.target &&
					(r && r(u), o && o(!0), (s.current.isFocusWithin = !0), a(u));
			},
			[r, o, a]
		);
	return t
		? { focusWithinProps: { onFocus: null, onBlur: null } }
		: { focusWithinProps: { onFocus: l, onBlur: i } };
}
let Zt = !1,
	Tn = 0;
function Xn() {
	(Zt = !0),
		setTimeout(() => {
			Zt = !1;
		}, 50);
}
function Qr(e) {
	e.pointerType === 'touch' && Xn();
}
function Xl() {
	if (!(typeof document > 'u'))
		return (
			typeof PointerEvent < 'u'
				? document.addEventListener('pointerup', Qr)
				: document.addEventListener('touchend', Xn),
			Tn++,
			() => {
				Tn--,
					!(Tn > 0) &&
						(typeof PointerEvent < 'u'
							? document.removeEventListener('pointerup', Qr)
							: document.removeEventListener('touchend', Xn));
			}
		);
}
function ql(e) {
	let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e,
		[s, i] = m.useState(!1),
		a = m.useRef({
			isHovered: !1,
			ignoreEmulatedMouseEvents: !1,
			pointerType: '',
			target: null,
		}).current;
	m.useEffect(Xl, []);
	let { hoverProps: l, triggerHoverEnd: u } = m.useMemo(() => {
		let c = (h, v) => {
				if (
					((a.pointerType = v),
					o || v === 'touch' || a.isHovered || !h.currentTarget.contains(h.target))
				)
					return;
				a.isHovered = !0;
				let y = h.currentTarget;
				(a.target = y),
					t && t({ type: 'hoverstart', target: y, pointerType: v }),
					n && n(!0),
					i(!0);
			},
			f = (h, v) => {
				if (((a.pointerType = ''), (a.target = null), v === 'touch' || !a.isHovered)) return;
				a.isHovered = !1;
				let y = h.currentTarget;
				r && r({ type: 'hoverend', target: y, pointerType: v }), n && n(!1), i(!1);
			},
			d = {};
		return (
			typeof PointerEvent < 'u'
				? ((d.onPointerEnter = (h) => {
						(Zt && h.pointerType === 'mouse') || c(h, h.pointerType);
				  }),
				  (d.onPointerLeave = (h) => {
						!o && h.currentTarget.contains(h.target) && f(h, h.pointerType);
				  }))
				: ((d.onTouchStart = () => {
						a.ignoreEmulatedMouseEvents = !0;
				  }),
				  (d.onMouseEnter = (h) => {
						!a.ignoreEmulatedMouseEvents && !Zt && c(h, 'mouse'),
							(a.ignoreEmulatedMouseEvents = !1);
				  }),
				  (d.onMouseLeave = (h) => {
						!o && h.currentTarget.contains(h.target) && f(h, 'mouse');
				  })),
			{ hoverProps: d, triggerHoverEnd: f }
		);
	}, [t, n, r, o, a]);
	return (
		m.useEffect(() => {
			o && u({ currentTarget: a.target }, a.pointerType);
		}, [o]),
		{ hoverProps: l, isHovered: s }
	);
}
function eo(e) {
	if (!e) return;
	let t = !0;
	return (n) => {
		let r = {
			...n,
			preventDefault() {
				n.preventDefault();
			},
			isDefaultPrevented() {
				return n.isDefaultPrevented();
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
		e(r), t && n.stopPropagation();
	};
}
function Zl(e) {
	return {
		keyboardProps: e.isDisabled ? {} : { onKeyDown: eo(e.onKeyDown), onKeyUp: eo(e.onKeyUp) },
	};
}
function Ui(e) {
	if (Ul() === 'virtual') {
		let t = document.activeElement;
		Ii(() => {
			document.activeElement === t && document.contains(e) && Ke(e);
		});
	} else Ke(e);
}
function Jl(e) {
	if (!(e instanceof HTMLElement) && !(e instanceof SVGElement)) return !1;
	let { display: t, visibility: n } = e.style,
		r = t !== 'none' && n !== 'hidden' && n !== 'collapse';
	if (r) {
		const { getComputedStyle: o } = e.ownerDocument.defaultView;
		let { display: s, visibility: i } = o(e);
		r = s !== 'none' && i !== 'hidden' && i !== 'collapse';
	}
	return r;
}
function Ql(e, t) {
	return (
		!e.hasAttribute('hidden') &&
		(e.nodeName === 'DETAILS' && t && t.nodeName !== 'SUMMARY' ? e.hasAttribute('open') : !0)
	);
}
function Hi(e, t) {
	return (
		e.nodeName !== '#comment' && Jl(e) && Ql(e, t) && (!e.parentElement || Hi(e.parentElement, e))
	);
}
const to = q.createContext(null);
let X = null;
function eu(e) {
	let { children: t, contain: n, restoreFocus: r, autoFocus: o } = e,
		s = m.useRef(),
		i = m.useRef(),
		a = m.useRef([]),
		{ parentNode: l } = m.useContext(to) || {},
		u = m.useMemo(() => new Zn({ scopeRef: a }), [a]);
	pe(() => {
		let d = l || te.root;
		if (te.getTreeNode(d.scopeRef) && X && !Jt(X, d.scopeRef)) {
			let h = te.getTreeNode(X);
			h && (d = h);
		}
		d.addChild(u), te.addNode(u);
	}, [u, l]),
		pe(() => {
			let d = te.getTreeNode(a);
			d.contain = n;
		}, [n]),
		pe(() => {
			let d = s.current.nextSibling,
				h = [];
			for (; d && d !== i.current; ) h.push(d), (d = d.nextSibling);
			a.current = h;
		}, [t]),
		su(a, r, n),
		ou(a, n),
		lu(a, r, n),
		iu(a, o),
		m.useEffect(() => {
			if (a) {
				let d = document.activeElement,
					h = null;
				if (ie(d, a.current)) {
					for (let v of te.traverse()) ie(d, v.scopeRef.current) && (h = v);
					h === te.getTreeNode(a) && (X = h.scopeRef);
				}
				return () => {
					let v = te.getTreeNode(a).parent.scopeRef;
					(a === X || Jt(a, X)) && (!v || te.getTreeNode(v)) && (X = v), te.removeTreeNode(a);
				};
			}
		}, [a]);
	let c = m.useMemo(() => tu(a), []),
		f = m.useMemo(() => ({ focusManager: c, parentNode: u }), [u, c]);
	return q.createElement(
		to.Provider,
		{ value: f },
		q.createElement('span', { 'data-focus-scope-start': !0, hidden: !0, ref: s }),
		t,
		q.createElement('span', { 'data-focus-scope-end': !0, hidden: !0, ref: i })
	);
}
function tu(e) {
	return {
		focusNext(t = {}) {
			let n = e.current,
				{ from: r, tabbable: o, wrap: s, accept: i } = t,
				a = r || document.activeElement,
				l = n[0].previousElementSibling,
				u = Me(ze(n), { tabbable: o, accept: i }, n);
			u.currentNode = ie(a, n) ? a : l;
			let c = u.nextNode();
			return !c && s && ((u.currentNode = l), (c = u.nextNode())), c && xe(c, !0), c;
		},
		focusPrevious(t = {}) {
			let n = e.current,
				{ from: r, tabbable: o, wrap: s, accept: i } = t,
				a = r || document.activeElement,
				l = n[n.length - 1].nextElementSibling,
				u = Me(ze(n), { tabbable: o, accept: i }, n);
			u.currentNode = ie(a, n) ? a : l;
			let c = u.previousNode();
			return !c && s && ((u.currentNode = l), (c = u.previousNode())), c && xe(c, !0), c;
		},
		focusFirst(t = {}) {
			let n = e.current,
				{ tabbable: r, accept: o } = t,
				s = Me(ze(n), { tabbable: r, accept: o }, n);
			s.currentNode = n[0].previousElementSibling;
			let i = s.nextNode();
			return i && xe(i, !0), i;
		},
		focusLast(t = {}) {
			let n = e.current,
				{ tabbable: r, accept: o } = t,
				s = Me(ze(n), { tabbable: r, accept: o }, n);
			s.currentNode = n[n.length - 1].nextElementSibling;
			let i = s.previousNode();
			return i && xe(i, !0), i;
		},
	};
}
const wr = [
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
	nu = wr.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
wr.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const ru = wr.join(':not([hidden]):not([tabindex="-1"]),');
function ze(e) {
	return e[0].parentElement;
}
function bt(e) {
	let t = te.getTreeNode(X);
	for (; t && t.scopeRef !== e; ) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function ou(e, t) {
	let n = m.useRef(),
		r = m.useRef(null);
	pe(() => {
		let o = e.current;
		if (!t) {
			r.current && (cancelAnimationFrame(r.current), (r.current = null));
			return;
		}
		let s = (l) => {
				if (l.key !== 'Tab' || l.altKey || l.ctrlKey || l.metaKey || !bt(e)) return;
				let u = document.activeElement,
					c = e.current;
				if (!ie(u, c)) return;
				let f = Me(ze(c), { tabbable: !0 }, c);
				f.currentNode = u;
				let d = l.shiftKey ? f.previousNode() : f.nextNode();
				d ||
					((f.currentNode = l.shiftKey
						? c[c.length - 1].nextElementSibling
						: c[0].previousElementSibling),
					(d = l.shiftKey ? f.previousNode() : f.nextNode())),
					l.preventDefault(),
					d && xe(d, !0);
			},
			i = (l) => {
				(!X || Jt(X, e)) && ie(l.target, e.current)
					? ((X = e), (n.current = l.target))
					: bt(e) && !qn(l.target, e)
					? n.current
						? n.current.focus()
						: X && Qt(X.current)
					: bt(e) && (n.current = l.target);
			},
			a = (l) => {
				r.current && cancelAnimationFrame(r.current),
					(r.current = requestAnimationFrame(() => {
						bt(e) &&
							!qn(document.activeElement, e) &&
							((X = e),
							document.body.contains(l.target)
								? ((n.current = l.target), n.current.focus())
								: X && Qt(X.current));
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
		pe(
			() => () => {
				r.current && cancelAnimationFrame(r.current);
			},
			[r]
		);
}
function Gi(e) {
	return qn(e);
}
function ie(e, t) {
	return t.some((n) => n.contains(e));
}
function qn(e, t = null) {
	if (e instanceof Element && e.closest('[data-react-aria-top-layer]')) return !0;
	for (let { scopeRef: n } of te.traverse(te.getTreeNode(t))) if (ie(e, n.current)) return !0;
	return !1;
}
function Jt(e, t) {
	var n;
	let r = (n = te.getTreeNode(t)) === null || n === void 0 ? void 0 : n.parent;
	for (; r; ) {
		if (r.scopeRef === e) return !0;
		r = r.parent;
	}
	return !1;
}
function xe(e, t = !1) {
	if (e != null && !t)
		try {
			Ui(e);
		} catch {}
	else if (e != null)
		try {
			e.focus();
		} catch {}
}
function Qt(e, t = !0) {
	let n = e[0].previousElementSibling,
		r = Me(ze(e), { tabbable: t }, e);
	r.currentNode = n;
	let o = r.nextNode();
	t && !o && ((r = Me(ze(e), { tabbable: !1 }, e)), (r.currentNode = n), (o = r.nextNode())), xe(o);
}
function iu(e, t) {
	const n = q.useRef(t);
	m.useEffect(() => {
		n.current && ((X = e), ie(document.activeElement, X.current) || Qt(e.current)),
			(n.current = !1);
	}, [e]);
}
function su(e, t, n) {
	pe(() => {
		if (t || n) return;
		let r = e.current,
			o = (s) => {
				let i = s.target;
				ie(i, e.current) ? (X = e) : Gi(i) || (X = null);
			};
		return (
			document.addEventListener('focusin', o, !1),
			r.forEach((s) => s.addEventListener('focusin', o, !1)),
			() => {
				document.removeEventListener('focusin', o, !1),
					r.forEach((s) => s.removeEventListener('focusin', o, !1));
			}
		);
	}, [e, t, n]);
}
function au(e) {
	let t = te.getTreeNode(X);
	for (; t && t.scopeRef !== e; ) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function lu(e, t, n) {
	const r = m.useRef(typeof document < 'u' ? document.activeElement : null);
	pe(() => {
		let o = e.current;
		if (!t || n) return;
		let s = () => {
			(!X || Jt(X, e)) && ie(document.activeElement, e.current) && (X = e);
		};
		return (
			document.addEventListener('focusin', s, !1),
			o.forEach((i) => i.addEventListener('focusin', s, !1)),
			() => {
				document.removeEventListener('focusin', s, !1),
					o.forEach((i) => i.removeEventListener('focusin', s, !1));
			}
		);
	}, [e, n]),
		pe(() => {
			if (!t) return;
			let o = (s) => {
				if (s.key !== 'Tab' || s.altKey || s.ctrlKey || s.metaKey || !bt(e)) return;
				let i = document.activeElement;
				if (!ie(i, e.current)) return;
				let a = te.getTreeNode(e).nodeToRestore,
					l = Me(document.body, { tabbable: !0 });
				l.currentNode = i;
				let u = s.shiftKey ? l.previousNode() : l.nextNode();
				if (
					((!document.body.contains(a) || a === document.body) &&
						((a = null), (te.getTreeNode(e).nodeToRestore = null)),
					(!u || !ie(u, e.current)) && a)
				) {
					l.currentNode = a;
					do u = s.shiftKey ? l.previousNode() : l.nextNode();
					while (ie(u, e.current));
					s.preventDefault(), s.stopPropagation(), u ? xe(u, !0) : Gi(a) ? xe(a, !0) : i.blur();
				}
			};
			return (
				n || document.addEventListener('keydown', o, !0),
				() => {
					n || document.removeEventListener('keydown', o, !0);
				}
			);
		}, [e, t, n]),
		pe(() => {
			if (t)
				return (
					(te.getTreeNode(e).nodeToRestore = r.current),
					() => {
						let o = te.getTreeNode(e).nodeToRestore;
						if (
							t &&
							o &&
							(ie(document.activeElement, e.current) ||
								(document.activeElement === document.body && au(e)))
						) {
							let s = te.clone();
							requestAnimationFrame(() => {
								if (document.activeElement === document.body) {
									let i = s.getTreeNode(e);
									for (; i; ) {
										if (i.nodeToRestore && document.body.contains(i.nodeToRestore)) {
											xe(i.nodeToRestore);
											return;
										}
										i = i.parent;
									}
									for (i = s.getTreeNode(e); i; ) {
										if (i.scopeRef && te.getTreeNode(i.scopeRef)) {
											Qt(i.scopeRef.current, !0);
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
function Me(e, t, n) {
	let r = t?.tabbable ? ru : nu,
		o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode(s) {
				var i;
				return !(t == null || (i = t.from) === null || i === void 0) && i.contains(s)
					? NodeFilter.FILTER_REJECT
					: s.matches(r) && Hi(s) && (!n || ie(s, n)) && (!t?.accept || t.accept(s))
					? NodeFilter.FILTER_ACCEPT
					: NodeFilter.FILTER_SKIP;
			},
		});
	return t?.from && (o.currentNode = t.from), o;
}
class Pr {
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(t) {
		return this.fastMap.get(t);
	}
	addTreeNode(t, n, r) {
		let o = this.fastMap.get(n ?? null),
			s = new Zn({ scopeRef: t });
		o.addChild(s), (s.parent = o), this.fastMap.set(t, s), r && (s.nodeToRestore = r);
	}
	addNode(t) {
		this.fastMap.set(t.scopeRef, t);
	}
	removeTreeNode(t) {
		if (t === null) return;
		let n = this.fastMap.get(t),
			r = n.parent;
		for (let s of this.traverse())
			s !== n &&
				n.nodeToRestore &&
				s.nodeToRestore &&
				n.scopeRef.current &&
				ie(s.nodeToRestore, n.scopeRef.current) &&
				(s.nodeToRestore = n.nodeToRestore);
		let o = n.children;
		r.removeChild(n),
			o.size > 0 && o.forEach((s) => r.addChild(s)),
			this.fastMap.delete(n.scopeRef);
	}
	*traverse(t = this.root) {
		if ((t.scopeRef != null && (yield t), t.children.size > 0))
			for (let n of t.children) yield* this.traverse(n);
	}
	clone() {
		let t = new Pr();
		for (let n of this.traverse()) t.addTreeNode(n.scopeRef, n.parent.scopeRef, n.nodeToRestore);
		return t;
	}
	constructor() {
		(this.fastMap = new Map()),
			(this.root = new Zn({ scopeRef: null })),
			this.fastMap.set(null, this.root);
	}
}
class Zn {
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
let te = new Pr();
function Yi(e = {}) {
	let { autoFocus: t = !1, isTextInput: n, within: r } = e,
		o = m.useRef({ isFocused: !1, isFocusVisible: t || zi() }),
		[s, i] = m.useState(!1),
		[a, l] = m.useState(() => o.current.isFocused && o.current.isFocusVisible),
		u = m.useCallback(() => l(o.current.isFocused && o.current.isFocusVisible), []),
		c = m.useCallback(
			(h) => {
				(o.current.isFocused = h), i(h), u();
			},
			[u]
		);
	Gl(
		(h) => {
			(o.current.isFocusVisible = h), u();
		},
		[],
		{ isTextInput: n }
	);
	let { focusProps: f } = Ki({ isDisabled: r, onFocusChange: c }),
		{ focusWithinProps: d } = Yl({ isDisabled: !r, onFocusWithinChange: c });
	return { isFocused: s, isFocusVisible: a, focusProps: r ? d : f };
}
let uu = q.createContext(null);
function cu(e) {
	let t = m.useContext(uu) || {};
	ji(t, e);
	let { ref: n, ...r } = t;
	return r;
}
function Xi(e, t) {
	let { focusProps: n } = Ki(e),
		{ keyboardProps: r } = Zl(e),
		o = ue(n, r),
		s = cu(t),
		i = e.isDisabled ? {} : s,
		a = m.useRef(e.autoFocus);
	return (
		m.useEffect(() => {
			a.current && t.current && Ui(t.current), (a.current = !1);
		}, [t]),
		{
			focusableProps: ue(
				{ ...o, tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0 },
				i
			),
		}
	);
}
const fu = q.createContext(null);
function du(e) {
	let t = ki(),
		{ portalContainer: n = t ? null : document.body, isExiting: r } = e,
		[o, s] = m.useState(!1),
		i = m.useMemo(() => ({ contain: o, setContain: s }), [o, s]);
	if (!n) return null;
	let a = e.children;
	return (
		e.disableFocusManagement ||
			(a = q.createElement(eu, { restoreFocus: !0, contain: o && !r }, a)),
		(a = q.createElement(fu.Provider, { value: i }, q.createElement(Il, null, a))),
		el.createPortal(a, n)
	);
}
function De(e) {
	return m.forwardRef(e);
}
var qi = (e, t, n = !0) => {
		if (!t) return [e, {}];
		const r = t.reduce((o, s) => (s in e ? { ...o, [s]: e[s] } : o), {});
		return n
			? [
					Object.keys(e)
						.filter((s) => !t.includes(s))
						.reduce((s, i) => ({ ...s, [i]: e[i] }), {}),
					r,
			  ]
			: [e, r];
	},
	hu = [
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
	Sn = hu.map((e) => `unit-${e}`),
	no = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
	se = (e) => !e || typeof e != 'object' || Object.keys(e).length === 0,
	pu = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Zi(e, t) {
	e.forEach(function (n) {
		Array.isArray(n) ? Zi(n, t) : t.push(n);
	});
}
function Ji(e) {
	let t = [];
	return Zi(e, t), t;
}
var mu = (...e) => Ji(e).filter(Boolean),
	Tr = (e, t) => {
		let n = {},
			r = Object.keys(e),
			o = Object.keys(t);
		for (let s of r)
			if (o.includes(s)) {
				let i = e[s],
					a = t[s];
				typeof i == 'object' && typeof a == 'object' ? (n[s] = Tr(i, a)) : (n[s] = a + ' ' + i);
			} else n[s] = e[s];
		for (let s of o) r.includes(s) || (n[s] = t[s]);
		return n;
	},
	ro = (e) => (!e || typeof e != 'string' ? e : e.replace(/\s+/g, ' ').trim());
function gu() {
	for (var e = 0, t, n, r = ''; e < arguments.length; )
		(t = arguments[e++]) && (n = Qi(t)) && (r && (r += ' '), (r += n));
	return r;
}
function Qi(e) {
	if (typeof e == 'string') return e;
	for (var t, n = '', r = 0; r < e.length; r++)
		e[r] && (t = Qi(e[r])) && (n && (n += ' '), (n += t));
	return n;
}
var Sr = '-';
function vu(e) {
	var t = bu(e),
		n = e.conflictingClassGroups,
		r = e.conflictingClassGroupModifiers,
		o = r === void 0 ? {} : r;
	function s(a) {
		var l = a.split(Sr);
		return l[0] === '' && l.length !== 1 && l.shift(), es(l, t) || yu(a);
	}
	function i(a, l) {
		var u = n[a] || [];
		return l && o[a] ? [].concat(u, o[a]) : u;
	}
	return { getClassGroupId: s, getConflictingClassGroupIds: i };
}
function es(e, t) {
	if (e.length === 0) return t.classGroupId;
	var n = e[0],
		r = t.nextPart.get(n),
		o = r ? es(e.slice(1), r) : void 0;
	if (o) return o;
	if (t.validators.length !== 0) {
		var s = e.join(Sr);
		return t.validators.find(function (i) {
			var a = i.validator;
			return a(s);
		})?.classGroupId;
	}
}
var oo = /^\[(.+)\]$/;
function yu(e) {
	if (oo.test(e)) {
		var t = oo.exec(e)[1],
			n = t?.substring(0, t.indexOf(':'));
		if (n) return 'arbitrary..' + n;
	}
}
function bu(e) {
	var t = e.theme,
		n = e.prefix,
		r = { nextPart: new Map(), validators: [] },
		o = wu(Object.entries(e.classGroups), n);
	return (
		o.forEach(function (s) {
			var i = s[0],
				a = s[1];
			Jn(a, r, i, t);
		}),
		r
	);
}
function Jn(e, t, n, r) {
	e.forEach(function (o) {
		if (typeof o == 'string') {
			var s = o === '' ? t : io(t, o);
			s.classGroupId = n;
			return;
		}
		if (typeof o == 'function') {
			if (xu(o)) {
				Jn(o(r), t, n, r);
				return;
			}
			t.validators.push({ validator: o, classGroupId: n });
			return;
		}
		Object.entries(o).forEach(function (i) {
			var a = i[0],
				l = i[1];
			Jn(l, io(t, a), n, r);
		});
	});
}
function io(e, t) {
	var n = e;
	return (
		t.split(Sr).forEach(function (r) {
			n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
				(n = n.nextPart.get(r));
		}),
		n
	);
}
function xu(e) {
	return e.isThemeGetter;
}
function wu(e, t) {
	return t
		? e.map(function (n) {
				var r = n[0],
					o = n[1],
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
				return [r, s];
		  })
		: e;
}
function Pu(e) {
	if (e < 1) return { get: function () {}, set: function () {} };
	var t = 0,
		n = new Map(),
		r = new Map();
	function o(s, i) {
		n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
	}
	return {
		get: function (i) {
			var a = n.get(i);
			if (a !== void 0) return a;
			if ((a = r.get(i)) !== void 0) return o(i, a), a;
		},
		set: function (i, a) {
			n.has(i) ? n.set(i, a) : o(i, a);
		},
	};
}
var ts = '!';
function Tu(e) {
	var t = e.separator || ':',
		n = t.length === 1,
		r = t[0],
		o = t.length;
	return function (i) {
		for (var a = [], l = 0, u = 0, c, f = 0; f < i.length; f++) {
			var d = i[f];
			if (l === 0) {
				if (d === r && (n || i.slice(f, f + o) === t)) {
					a.push(i.slice(u, f)), (u = f + o);
					continue;
				}
				if (d === '/') {
					c = f;
					continue;
				}
			}
			d === '[' ? l++ : d === ']' && l--;
		}
		var h = a.length === 0 ? i : i.substring(u),
			v = h.startsWith(ts),
			y = v ? h.substring(1) : h,
			b = c && c > u ? c - u : void 0;
		return {
			modifiers: a,
			hasImportantModifier: v,
			baseClassName: y,
			maybePostfixModifierPosition: b,
		};
	};
}
function Su(e) {
	if (e.length <= 1) return e;
	var t = [],
		n = [];
	return (
		e.forEach(function (r) {
			var o = r[0] === '[';
			o ? (t.push.apply(t, n.sort().concat([r])), (n = [])) : n.push(r);
		}),
		t.push.apply(t, n.sort()),
		t
	);
}
function Cu(e) {
	return { cache: Pu(e.cacheSize), splitModifiers: Tu(e), ...vu(e) };
}
var Eu = /\s+/;
function $u(e, t) {
	var n = t.splitModifiers,
		r = t.getClassGroupId,
		o = t.getConflictingClassGroupIds,
		s = new Set();
	return e
		.trim()
		.split(Eu)
		.map(function (i) {
			var a = n(i),
				l = a.modifiers,
				u = a.hasImportantModifier,
				c = a.baseClassName,
				f = a.maybePostfixModifierPosition,
				d = r(f ? c.substring(0, f) : c),
				h = !!f;
			if (!d) {
				if (!f) return { isTailwindClass: !1, originalClassName: i };
				if (((d = r(c)), !d)) return { isTailwindClass: !1, originalClassName: i };
				h = !1;
			}
			var v = Su(l).join(':'),
				y = u ? v + ts : v;
			return {
				isTailwindClass: !0,
				modifierId: y,
				classGroupId: d,
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
				  o(l, u).forEach(function (f) {
						return s.add(a + f);
				  }),
				  !0);
		})
		.reverse()
		.map(function (i) {
			return i.originalClassName;
		})
		.join(' ');
}
function Qn() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	var r,
		o,
		s,
		i = a;
	function a(u) {
		var c = t[0],
			f = t.slice(1),
			d = f.reduce(function (h, v) {
				return v(h);
			}, c());
		return (r = Cu(d)), (o = r.cache.get), (s = r.cache.set), (i = l), l(u);
	}
	function l(u) {
		var c = o(u);
		if (c) return c;
		var f = $u(u, r);
		return s(u, f), f;
	}
	return function () {
		return i(gu.apply(null, arguments));
	};
}
function Y(e) {
	var t = function (r) {
		return r[e] || [];
	};
	return (t.isThemeGetter = !0), t;
}
var ns = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	Au = /^\d+\/\d+$/,
	Mu = new Set(['px', 'full', 'screen']),
	ku = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	Vu =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	Ru = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function me(e) {
	return Ue(e) || Mu.has(e) || Au.test(e) || er(e);
}
function er(e) {
	return Ye(e, 'length', Iu);
}
function Lu(e) {
	return Ye(e, 'size', rs);
}
function Du(e) {
	return Ye(e, 'position', rs);
}
function Nu(e) {
	return Ye(e, 'url', ju);
}
function Dt(e) {
	return Ye(e, 'number', Ue);
}
function Ue(e) {
	return !Number.isNaN(Number(e));
}
function Fu(e) {
	return e.endsWith('%') && Ue(e.slice(0, -1));
}
function pt(e) {
	return so(e) || Ye(e, 'number', so);
}
function B(e) {
	return ns.test(e);
}
function mt() {
	return !0;
}
function Ee(e) {
	return ku.test(e);
}
function Ou(e) {
	return Ye(e, '', Bu);
}
function Ye(e, t, n) {
	var r = ns.exec(e);
	return r ? (r[1] ? r[1] === t : n(r[2])) : !1;
}
function Iu(e) {
	return Vu.test(e);
}
function rs() {
	return !1;
}
function ju(e) {
	return e.startsWith('url(');
}
function so(e) {
	return Number.isInteger(Number(e));
}
function Bu(e) {
	return Ru.test(e);
}
function tr() {
	var e = Y('colors'),
		t = Y('spacing'),
		n = Y('blur'),
		r = Y('brightness'),
		o = Y('borderColor'),
		s = Y('borderRadius'),
		i = Y('borderSpacing'),
		a = Y('borderWidth'),
		l = Y('contrast'),
		u = Y('grayscale'),
		c = Y('hueRotate'),
		f = Y('invert'),
		d = Y('gap'),
		h = Y('gradientColorStops'),
		v = Y('gradientColorStopPositions'),
		y = Y('inset'),
		b = Y('margin'),
		C = Y('opacity'),
		S = Y('padding'),
		w = Y('saturate'),
		A = Y('scale'),
		M = Y('sepia'),
		N = Y('skew'),
		D = Y('space'),
		p = Y('translate'),
		k = function () {
			return ['auto', 'contain', 'none'];
		},
		_ = function () {
			return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
		},
		T = function () {
			return ['auto', B, t];
		},
		E = function () {
			return [B, t];
		},
		x = function () {
			return ['', me];
		},
		P = function () {
			return ['auto', Ue, B];
		},
		V = function () {
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
		R = function () {
			return ['solid', 'dashed', 'dotted', 'double', 'none'];
		},
		j = function () {
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
		O = function () {
			return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
		},
		W = function () {
			return ['', '0', B];
		},
		fe = function () {
			return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
		},
		g = function () {
			return [Ue, Dt];
		},
		$ = function () {
			return [Ue, B];
		};
	return {
		cacheSize: 500,
		theme: {
			colors: [mt],
			spacing: [me],
			blur: ['none', '', Ee, B],
			brightness: g(),
			borderColor: [e],
			borderRadius: ['none', '', 'full', Ee, B],
			borderSpacing: E(),
			borderWidth: x(),
			contrast: g(),
			grayscale: W(),
			hueRotate: $(),
			invert: W(),
			gap: E(),
			gradientColorStops: [e],
			gradientColorStopPositions: [Fu, er],
			inset: T(),
			margin: T(),
			opacity: g(),
			padding: E(),
			saturate: g(),
			scale: g(),
			sepia: W(),
			skew: $(),
			space: E(),
			translate: E(),
		},
		classGroups: {
			aspect: [{ aspect: ['auto', 'square', 'video', B] }],
			container: ['container'],
			columns: [{ columns: [Ee] }],
			'break-after': [{ 'break-after': fe() }],
			'break-before': [{ 'break-before': fe() }],
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
			'object-position': [{ object: [].concat(V(), [B]) }],
			overflow: [{ overflow: _() }],
			'overflow-x': [{ 'overflow-x': _() }],
			'overflow-y': [{ 'overflow-y': _() }],
			overscroll: [{ overscroll: k() }],
			'overscroll-x': [{ 'overscroll-x': k() }],
			'overscroll-y': [{ 'overscroll-y': k() }],
			position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
			inset: [{ inset: [y] }],
			'inset-x': [{ 'inset-x': [y] }],
			'inset-y': [{ 'inset-y': [y] }],
			start: [{ start: [y] }],
			end: [{ end: [y] }],
			top: [{ top: [y] }],
			right: [{ right: [y] }],
			bottom: [{ bottom: [y] }],
			left: [{ left: [y] }],
			visibility: ['visible', 'invisible', 'collapse'],
			z: [{ z: ['auto', pt] }],
			basis: [{ basis: T() }],
			'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
			'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
			flex: [{ flex: ['1', 'auto', 'initial', 'none', B] }],
			grow: [{ grow: W() }],
			shrink: [{ shrink: W() }],
			order: [{ order: ['first', 'last', 'none', pt] }],
			'grid-cols': [{ 'grid-cols': [mt] }],
			'col-start-end': [{ col: ['auto', { span: ['full', pt] }, B] }],
			'col-start': [{ 'col-start': P() }],
			'col-end': [{ 'col-end': P() }],
			'grid-rows': [{ 'grid-rows': [mt] }],
			'row-start-end': [{ row: ['auto', { span: [pt] }, B] }],
			'row-start': [{ 'row-start': P() }],
			'row-end': [{ 'row-end': P() }],
			'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
			'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', B] }],
			'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', B] }],
			gap: [{ gap: [d] }],
			'gap-x': [{ 'gap-x': [d] }],
			'gap-y': [{ 'gap-y': [d] }],
			'justify-content': [{ justify: ['normal'].concat(O()) }],
			'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
			'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			'align-content': [{ content: ['normal'].concat(O(), ['baseline']) }],
			'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
			'place-content': [{ 'place-content': [].concat(O(), ['baseline']) }],
			'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			p: [{ p: [S] }],
			px: [{ px: [S] }],
			py: [{ py: [S] }],
			ps: [{ ps: [S] }],
			pe: [{ pe: [S] }],
			pt: [{ pt: [S] }],
			pr: [{ pr: [S] }],
			pb: [{ pb: [S] }],
			pl: [{ pl: [S] }],
			m: [{ m: [b] }],
			mx: [{ mx: [b] }],
			my: [{ my: [b] }],
			ms: [{ ms: [b] }],
			me: [{ me: [b] }],
			mt: [{ mt: [b] }],
			mr: [{ mr: [b] }],
			mb: [{ mb: [b] }],
			ml: [{ ml: [b] }],
			'space-x': [{ 'space-x': [D] }],
			'space-x-reverse': ['space-x-reverse'],
			'space-y': [{ 'space-y': [D] }],
			'space-y-reverse': ['space-y-reverse'],
			w: [{ w: ['auto', 'min', 'max', 'fit', B, t] }],
			'min-w': [{ 'min-w': ['min', 'max', 'fit', B, me] }],
			'max-w': [
				{ 'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [Ee] }, Ee, B] },
			],
			h: [{ h: [B, t, 'auto', 'min', 'max', 'fit'] }],
			'min-h': [{ 'min-h': ['min', 'max', 'fit', B, me] }],
			'max-h': [{ 'max-h': [B, t, 'min', 'max', 'fit'] }],
			'font-size': [{ text: ['base', Ee, er] }],
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
						Dt,
					],
				},
			],
			'font-family': [{ font: [mt] }],
			'fvn-normal': ['normal-nums'],
			'fvn-ordinal': ['ordinal'],
			'fvn-slashed-zero': ['slashed-zero'],
			'fvn-figure': ['lining-nums', 'oldstyle-nums'],
			'fvn-spacing': ['proportional-nums', 'tabular-nums'],
			'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
			tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', B] }],
			'line-clamp': [{ 'line-clamp': ['none', Ue, Dt] }],
			leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', B, me] }],
			'list-image': [{ 'list-image': ['none', B] }],
			'list-style-type': [{ list: ['none', 'disc', 'decimal', B] }],
			'list-style-position': [{ list: ['inside', 'outside'] }],
			'placeholder-color': [{ placeholder: [e] }],
			'placeholder-opacity': [{ 'placeholder-opacity': [C] }],
			'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
			'text-color': [{ text: [e] }],
			'text-opacity': [{ 'text-opacity': [C] }],
			'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
			'text-decoration-style': [{ decoration: [].concat(R(), ['wavy']) }],
			'text-decoration-thickness': [{ decoration: ['auto', 'from-font', me] }],
			'underline-offset': [{ 'underline-offset': ['auto', B, me] }],
			'text-decoration-color': [{ decoration: [e] }],
			'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
			'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
			indent: [{ indent: E() }],
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
						B,
					],
				},
			],
			whitespace: [
				{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
			],
			break: [{ break: ['normal', 'words', 'all', 'keep'] }],
			hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
			content: [{ content: ['none', B] }],
			'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
			'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
			'bg-opacity': [{ 'bg-opacity': [C] }],
			'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
			'bg-position': [{ bg: [].concat(V(), [Du]) }],
			'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
			'bg-size': [{ bg: ['auto', 'cover', 'contain', Lu] }],
			'bg-image': [
				{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Nu] },
			],
			'bg-color': [{ bg: [e] }],
			'gradient-from-pos': [{ from: [v] }],
			'gradient-via-pos': [{ via: [v] }],
			'gradient-to-pos': [{ to: [v] }],
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
			'border-opacity': [{ 'border-opacity': [C] }],
			'border-style': [{ border: [].concat(R(), ['hidden']) }],
			'divide-x': [{ 'divide-x': [a] }],
			'divide-x-reverse': ['divide-x-reverse'],
			'divide-y': [{ 'divide-y': [a] }],
			'divide-y-reverse': ['divide-y-reverse'],
			'divide-opacity': [{ 'divide-opacity': [C] }],
			'divide-style': [{ divide: R() }],
			'border-color': [{ border: [o] }],
			'border-color-x': [{ 'border-x': [o] }],
			'border-color-y': [{ 'border-y': [o] }],
			'border-color-t': [{ 'border-t': [o] }],
			'border-color-r': [{ 'border-r': [o] }],
			'border-color-b': [{ 'border-b': [o] }],
			'border-color-l': [{ 'border-l': [o] }],
			'divide-color': [{ divide: [o] }],
			'outline-style': [{ outline: [''].concat(R()) }],
			'outline-offset': [{ 'outline-offset': [B, me] }],
			'outline-w': [{ outline: [me] }],
			'outline-color': [{ outline: [e] }],
			'ring-w': [{ ring: x() }],
			'ring-w-inset': ['ring-inset'],
			'ring-color': [{ ring: [e] }],
			'ring-opacity': [{ 'ring-opacity': [C] }],
			'ring-offset-w': [{ 'ring-offset': [me] }],
			'ring-offset-color': [{ 'ring-offset': [e] }],
			shadow: [{ shadow: ['', 'inner', 'none', Ee, Ou] }],
			'shadow-color': [{ shadow: [mt] }],
			opacity: [{ opacity: [C] }],
			'mix-blend': [{ 'mix-blend': j() }],
			'bg-blend': [{ 'bg-blend': j() }],
			filter: [{ filter: ['', 'none'] }],
			blur: [{ blur: [n] }],
			brightness: [{ brightness: [r] }],
			contrast: [{ contrast: [l] }],
			'drop-shadow': [{ 'drop-shadow': ['', 'none', Ee, B] }],
			grayscale: [{ grayscale: [u] }],
			'hue-rotate': [{ 'hue-rotate': [c] }],
			invert: [{ invert: [f] }],
			saturate: [{ saturate: [w] }],
			sepia: [{ sepia: [M] }],
			'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
			'backdrop-blur': [{ 'backdrop-blur': [n] }],
			'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
			'backdrop-contrast': [{ 'backdrop-contrast': [l] }],
			'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
			'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
			'backdrop-invert': [{ 'backdrop-invert': [f] }],
			'backdrop-opacity': [{ 'backdrop-opacity': [C] }],
			'backdrop-saturate': [{ 'backdrop-saturate': [w] }],
			'backdrop-sepia': [{ 'backdrop-sepia': [M] }],
			'border-collapse': [{ border: ['collapse', 'separate'] }],
			'border-spacing': [{ 'border-spacing': [i] }],
			'border-spacing-x': [{ 'border-spacing-x': [i] }],
			'border-spacing-y': [{ 'border-spacing-y': [i] }],
			'table-layout': [{ table: ['auto', 'fixed'] }],
			caption: [{ caption: ['top', 'bottom'] }],
			transition: [
				{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', B] },
			],
			duration: [{ duration: $() }],
			ease: [{ ease: ['linear', 'in', 'out', 'in-out', B] }],
			delay: [{ delay: $() }],
			animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', B] }],
			transform: [{ transform: ['', 'gpu', 'none'] }],
			scale: [{ scale: [A] }],
			'scale-x': [{ 'scale-x': [A] }],
			'scale-y': [{ 'scale-y': [A] }],
			rotate: [{ rotate: [pt, B] }],
			'translate-x': [{ 'translate-x': [p] }],
			'translate-y': [{ 'translate-y': [p] }],
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
						B,
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
						B,
					],
				},
			],
			'caret-color': [{ caret: [e] }],
			'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
			resize: [{ resize: ['none', 'y', 'x', ''] }],
			'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
			'scroll-m': [{ 'scroll-m': E() }],
			'scroll-mx': [{ 'scroll-mx': E() }],
			'scroll-my': [{ 'scroll-my': E() }],
			'scroll-ms': [{ 'scroll-ms': E() }],
			'scroll-me': [{ 'scroll-me': E() }],
			'scroll-mt': [{ 'scroll-mt': E() }],
			'scroll-mr': [{ 'scroll-mr': E() }],
			'scroll-mb': [{ 'scroll-mb': E() }],
			'scroll-ml': [{ 'scroll-ml': E() }],
			'scroll-p': [{ 'scroll-p': E() }],
			'scroll-px': [{ 'scroll-px': E() }],
			'scroll-py': [{ 'scroll-py': E() }],
			'scroll-ps': [{ 'scroll-ps': E() }],
			'scroll-pe': [{ 'scroll-pe': E() }],
			'scroll-pt': [{ 'scroll-pt': E() }],
			'scroll-pr': [{ 'scroll-pr': E() }],
			'scroll-pb': [{ 'scroll-pb': E() }],
			'scroll-pl': [{ 'scroll-pl': E() }],
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
			'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', B] }],
			fill: [{ fill: [e, 'none'] }],
			'stroke-w': [{ stroke: [me, Dt] }],
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
function _u(e, t) {
	for (var n in t) os(e, n, t[n]);
	return e;
}
var Wu = Object.prototype.hasOwnProperty,
	Ku = new Set(['string', 'number', 'boolean']);
function os(e, t, n) {
	if (!Wu.call(e, t) || Ku.has(typeof n) || n === null) {
		e[t] = n;
		return;
	}
	if (Array.isArray(n) && Array.isArray(e[t])) {
		e[t] = e[t].concat(n);
		return;
	}
	if (typeof n == 'object' && typeof e[t] == 'object') {
		if (e[t] === null) {
			e[t] = n;
			return;
		}
		for (var r in n) os(e[t], r, n[r]);
	}
}
function zu(e) {
	for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
		n[r - 1] = arguments[r];
	return typeof e == 'function'
		? Qn.apply(void 0, [tr, e].concat(n))
		: Qn.apply(
				void 0,
				[
					function () {
						return _u(tr(), e);
					},
				].concat(n)
		  );
}
var Uu = Qn(tr),
	Hu = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
	is = (e) => e || void 0,
	en = (...e) => is(Ji(e).filter(Boolean).join(' ')),
	Cn = null,
	tn = {},
	nr = !1,
	gt =
		(...e) =>
		(t) =>
			t.twMerge ? ((!Cn || nr) && ((nr = !1), (Cn = se(tn) ? Uu : zu(tn))), is(Cn(en(e)))) : en(e),
	ao = (e, t) => {
		for (let n in t) e.hasOwnProperty(n) ? (e[n] = en(e[n], t[n])) : (e[n] = t[n]);
		return e;
	},
	Gu = (e, t) => {
		let {
				extend: n = null,
				slots: r = {},
				variants: o = {},
				compoundVariants: s = [],
				compoundSlots: i = [],
				defaultVariants: a = {},
			} = e,
			l = { ...Hu, ...t },
			u = n != null && n.base ? en(n.base, e?.base) : e?.base,
			c = n != null && n.variants && !se(n.variants) ? Tr(o, n.variants) : o,
			f =
				n != null && n.defaultVariants && !se(n.defaultVariants)
					? { ...n.defaultVariants, ...a }
					: a;
		!se(l.twMergeConfig) && !pu(l.twMergeConfig, tn) && ((nr = !0), (tn = l.twMergeConfig));
		let d = se(r) ? {} : { base: e?.base, ...r },
			h = se(n?.slots) ? d : ao({ ...n?.slots }, se(d) ? { base: e?.base } : d),
			v = (b) => {
				if (se(c) && se(r) && se(n?.slots)) return gt(u, b?.class, b?.className)(l);
				if (s && !Array.isArray(s))
					throw new TypeError(
						`The "compoundVariants" prop must be an array. Received: ${typeof s}`
					);
				if (i && !Array.isArray(i))
					throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);
				let C = (T, E, x = [], P) => {
						let V = x;
						if (typeof E == 'string')
							V = V.concat(
								ro(E)
									.split(' ')
									.map((R) => `${T}:${R}`)
							);
						else if (Array.isArray(E)) V = V.concat(E.reduce((R, j) => R.concat(`${T}:${j}`), []));
						else if (typeof E == 'object' && typeof P == 'string') {
							for (let R in E)
								if (E.hasOwnProperty(R) && R === P) {
									let j = E[R];
									if (j && typeof j == 'string') {
										let O = ro(j);
										V[P]
											? (V[P] = V[P].concat(O.split(' ').map((W) => `${T}:${W}`)))
											: (V[P] = O.split(' ').map((W) => `${T}:${W}`));
									} else
										Array.isArray(j) &&
											j.length > 0 &&
											(V[P] = j.reduce((O, W) => O.concat(`${T}:${W}`), []));
								}
						}
						return V;
					},
					S = (T, E = c, x = null, P = null) => {
						var V;
						let R = E[T];
						if (!R || se(R)) return null;
						let j = (V = P?.[T]) != null ? V : b?.[T];
						if (j === null) return null;
						let O = no(j),
							W =
								(Array.isArray(l.responsiveVariants) && l.responsiveVariants.length > 0) ||
								l.responsiveVariants === !0,
							fe = f?.[T],
							g = [];
						if (typeof O == 'object' && W)
							for (let [L, K] of Object.entries(O)) {
								let z = R[K];
								if (L === 'initial') {
									fe = K;
									continue;
								}
								(Array.isArray(l.responsiveVariants) && !l.responsiveVariants.includes(L)) ||
									(g = C(L, z, g, x));
							}
						let $ = R[O] || R[no(fe)];
						return typeof g == 'object' && typeof x == 'string' && g[x]
							? ao(g, $)
							: g.length > 0
							? (g.push($), g)
							: $;
					},
					w = () => (c ? Object.keys(c).map((T) => S(T, c)) : null),
					A = (T, E) => {
						if (!c || typeof c != 'object') return null;
						let x = new Array();
						for (let P in c) {
							let V = S(P, c, T, E),
								R = T === 'base' && typeof V == 'string' ? V : V && V[T];
							R && (x[x.length] = R);
						}
						return x;
					},
					M = {};
				for (let T in b) b[T] !== void 0 && (M[T] = b[T]);
				let N = (T, E) => {
						var x;
						let P =
							typeof b?.[T] == 'object' ? { [T]: (x = b[T]) == null ? void 0 : x.initial } : {};
						return { ...f, ...M, ...P, ...E };
					},
					D = (T = [], E) => {
						let x = [];
						for (let { class: P, className: V, ...R } of T) {
							let j = !0;
							for (let [O, W] of Object.entries(R)) {
								let fe = N(O, E);
								if (Array.isArray(W)) {
									if (!W.includes(fe[O])) {
										j = !1;
										break;
									}
								} else if (fe[O] !== W) {
									j = !1;
									break;
								}
							}
							j && (P && x.push(P), V && x.push(V));
						}
						return x;
					},
					p = (T) => {
						let E = D(s, T),
							x = D(n?.compoundVariants, T);
						return mu(x, E);
					},
					k = (T) => {
						let E = p(T);
						if (!Array.isArray(E)) return E;
						let x = {};
						for (let P of E)
							if ((typeof P == 'string' && (x.base = gt(x.base, P)(l)), typeof P == 'object'))
								for (let [V, R] of Object.entries(P)) x[V] = gt(x[V], R)(l);
						return x;
					},
					_ = (T) => {
						if (i.length < 1) return null;
						let E = {};
						for (let { slots: x = [], class: P, className: V, ...R } of i) {
							if (!se(R)) {
								let j = !0;
								for (let O of Object.keys(R)) {
									let W = N(O, T)[O];
									if (W === void 0 || (Array.isArray(R[O]) ? !R[O].includes(W) : R[O] !== W)) {
										j = !1;
										break;
									}
								}
								if (!j) continue;
							}
							for (let j of x) (E[j] = E[j] || []), E[j].push([P, V]);
						}
						return E;
					};
				if (!se(r) || !se(n?.slots)) {
					let T = {};
					if (typeof h == 'object' && !se(h))
						for (let E of Object.keys(h))
							T[E] = (x) => {
								var P, V;
								return gt(
									h[E],
									A(E, x),
									((P = k(x)) != null ? P : [])[E],
									((V = _(x)) != null ? V : [])[E],
									x?.class,
									x?.className
								)(l);
							};
					return T;
				}
				return gt(u, w(), p(), b?.class, b?.className)(l);
			},
			y = () => {
				if (!(!c || typeof c != 'object')) return Object.keys(c);
			};
		return (
			(v.variantKeys = y()),
			(v.extend = n),
			(v.base = u),
			(v.slots = h),
			(v.variants = c),
			(v.defaultVariants = f),
			(v.compoundSlots = i),
			(v.compoundVariants = s),
			v
		);
	},
	Yu = (e) => (t, n) => Gu(t, n ? Tr(e, n) : e),
	Nt = ['small', 'medium', 'large'],
	ss = Yu({
		twMerge: !0,
		twMergeConfig: {
			theme: {
				opacity: ['disabled'],
				spacing: ['divider', 'unit', ...Sn],
				borderWidth: Nt,
				borderRadius: Nt,
			},
			classGroups: {
				shadow: [{ shadow: Nt }],
				'font-size': [{ text: ['tiny', ...Nt] }],
				'bg-image': ['bg-stripe-gradient'],
				'min-w': [{ 'min-w': ['unit', ...Sn] }],
				'min-h': [{ 'min-h': ['unit', ...Sn] }],
			},
		},
	}),
	as = [
		'outline-none',
		'data-[focus-visible=true]:z-10',
		'data-[focus-visible=true]:outline-2',
		'data-[focus-visible=true]:outline-focus',
		'data-[focus-visible=true]:outline-offset-2',
	],
	lo = ss({
		slots: {
			base: [
				'flex',
				'z-40',
				'w-full',
				'h-auto',
				'items-center',
				'justify-center',
				'data-[menu-open=true]:border-none',
			],
			wrapper: [
				'z-40',
				'flex',
				'px-6',
				'gap-4',
				'w-full',
				'flex-row',
				'relative',
				'flex-nowrap',
				'items-center',
				'justify-between',
				'h-[var(--navbar-height)]',
			],
			toggle: [
				'group',
				'flex',
				'items-center',
				'justify-center',
				'w-6',
				'h-full',
				'outline-none',
				'rounded-small',
				'tap-highlight-transparent',
				...as,
			],
			srOnly: ['sr-only'],
			toggleIcon: [
				'w-full',
				'h-full',
				'pointer-events-none',
				'flex',
				'flex-col',
				'items-center',
				'justify-center',
				'text-inherit',
				'group-data-[pressed=true]:opacity-70',
				'transition-opacity',
				"before:content-['']",
				'before:block',
				'before:h-px',
				'before:w-6',
				'before:bg-current',
				'before:transition-transform',
				'before:duration-150',
				'before:-translate-y-1',
				'before:rotate-0',
				'group-data-[open=true]:before:translate-y-px',
				'group-data-[open=true]:before:rotate-45',
				"after:content-['']",
				'after:block',
				'after:h-px',
				'after:w-6',
				'after:bg-current',
				'after:transition-transform',
				'after:duration-150',
				'after:translate-y-1',
				'after:rotate-0',
				'group-data-[open=true]:after:translate-y-0',
				'group-data-[open=true]:after:-rotate-45',
			],
			brand: [
				'flex',
				'basis-0',
				'flex-row',
				'flex-grow',
				'flex-nowrap',
				'justify-start',
				'bg-transparent',
				'items-center',
				'no-underline',
				'text-medium',
				'whitespace-nowrap',
				'box-border',
			],
			content: [
				'flex',
				'gap-4',
				'h-full',
				'flex-row',
				'flex-nowrap',
				'items-center',
				'data-[justify=start]:justify-start',
				'data-[justify=start]:flex-grow',
				'data-[justify=start]:basis-0',
				'data-[justify=center]:justify-center',
				'data-[justify=end]:justify-end',
				'data-[justify=end]:flex-grow',
				'data-[justify=end]:basis-0',
			],
			item: [
				'text-medium',
				'whitespace-nowrap',
				'box-border',
				'list-none',
				'data-[active=true]:font-semibold',
			],
			menu: [
				'z-30',
				'px-6',
				'pt-2',
				'fixed',
				'flex',
				'max-w-full',
				'top-[var(--navbar-height)]',
				'inset-x-0',
				'bottom-0',
				'w-screen',
				'flex-col',
				'gap-2',
				'overflow-y-auto',
			],
			menuItem: ['text-large', 'data-[active=true]:font-semibold'],
		},
		variants: {
			position: { static: { base: 'static' }, sticky: { base: 'sticky top-0 inset-x-0' } },
			maxWidth: {
				sm: { wrapper: 'max-w-[640px]' },
				md: { wrapper: 'max-w-[768px]' },
				lg: { wrapper: 'max-w-[1024px]' },
				xl: { wrapper: 'max-w-[1280px]' },
				'2xl': { wrapper: 'max-w-[1536px]' },
				full: { wrapper: 'max-w-full' },
			},
			hideOnScroll: { true: { base: ['sticky', 'top-0', 'inset-x-0'] } },
			isBordered: { true: { base: ['border-b', 'border-divider'] } },
			isBlurred: {
				false: { base: 'bg-background', menu: 'bg-background' },
				true: {
					base: [
						'backdrop-blur-lg',
						'data-[menu-open=true]:backdrop-blur-xl',
						'backdrop-saturate-150',
						'bg-background/70',
					],
					menu: ['backdrop-blur-xl', 'backdrop-saturate-150', 'bg-background/70'],
				},
			},
			disableAnimation: {
				true: {
					menu: [
						'hidden',
						'h-[calc(100dvh_-_var(--navbar-height)_-_1px)]',
						'data-[open=true]:flex',
					],
				},
			},
		},
		defaultVariants: { maxWidth: 'lg', position: 'sticky', isBlurred: !0 },
	}),
	uo = ss({
		base: ['relative inline-flex items-center outline-none tap-highlight-transparent', ...as],
		variants: {
			size: { sm: 'text-small', md: 'text-medium', lg: 'text-large' },
			color: {
				foreground: 'text-foreground',
				primary: 'text-primary',
				secondary: 'text-secondary',
				success: 'text-success',
				warning: 'text-warning',
				danger: 'text-danger',
			},
			underline: {
				none: 'no-underline',
				hover: 'hover:underline',
				always: 'underline',
				active: 'active:underline',
				focus: 'focus:underline',
			},
			isBlock: {
				true: [
					'px-2',
					'py-1',
					'hover:after:opacity-100',
					"after:content-['']",
					'after:inset-0',
					'after:opacity-0',
					'after:w-full',
					'after:h-full',
					'after:rounded-xl',
					'after:transition-background',
					'after:absolute',
				],
				false: 'hover:opacity-80 active:opacity-disabled transition-opacity',
			},
			isDisabled: { true: 'opacity-disabled cursor-default pointer-events-none' },
			disableAnimation: { true: 'after:transition-none transition-none' },
		},
		compoundVariants: [
			{ isBlock: !0, color: 'foreground', class: 'hover:after:bg-foreground/10' },
			{ isBlock: !0, color: 'primary', class: 'hover:after:bg-primary/20' },
			{ isBlock: !0, color: 'secondary', class: 'hover:after:bg-secondary/20' },
			{ isBlock: !0, color: 'success', class: 'hover:after:bg-success/20' },
			{ isBlock: !0, color: 'warning', class: 'hover:after:bg-warning/20' },
			{ isBlock: !0, color: 'danger', class: 'hover:after:bg-danger/20' },
			{ underline: ['hover', 'always', 'active', 'focus'], class: 'underline-offset-4' },
		],
		defaultVariants: {
			color: 'primary',
			size: 'md',
			isBlock: !1,
			underline: 'none',
			isDisabled: !1,
			disableAnimation: !1,
		},
	}),
	Xu = 'flex mx-1 text-current self-center';
function ls(e) {
	var t,
		n,
		r = '';
	if (typeof e == 'string' || typeof e == 'number') r += e;
	else if (typeof e == 'object')
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++) e[t] && (n = ls(e[t])) && (r && (r += ' '), (r += n));
		else for (t in e) e[t] && (r && (r += ' '), (r += t));
	return r;
}
function Pe(...e) {
	for (var t = 0, n, r, o = ''; t < e.length; )
		(n = e[t++]) && (r = ls(n)) && (o && (o += ' '), (o += r));
	return o;
}
var le = (e) => (e ? 'true' : void 0);
function qu(e = {}) {
	const {
			strict: t = !0,
			errorMessage:
				n = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
			name: r,
		} = e,
		o = m.createContext(void 0);
	o.displayName = r;
	function s() {
		var i;
		const a = m.useContext(o);
		if (!a && t) {
			const l = new Error(n);
			throw (
				((l.name = 'ContextError'), (i = Error.captureStackTrace) == null || i.call(Error, l, s), l)
			);
		}
		return a;
	}
	return [o.Provider, s, o];
}
function Ne(e) {
	const t = m.useRef(null);
	return m.useImperativeHandle(e, () => t.current), t;
}
var Zu = Object.create,
	us = Object.defineProperty,
	Ju = Object.getOwnPropertyDescriptor,
	cs = Object.getOwnPropertyNames,
	Qu = Object.getPrototypeOf,
	ec = Object.prototype.hasOwnProperty,
	fs = (e, t) =>
		function () {
			return t || (0, e[cs(e)[0]])((t = { exports: {} }).exports, t), t.exports;
		},
	tc = (e, t, n, r) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let o of cs(t))
				!ec.call(e, o) &&
					o !== n &&
					us(e, o, { get: () => t[o], enumerable: !(r = Ju(t, o)) || r.enumerable });
		return e;
	},
	nc = (e, t, n) => (
		(n = e != null ? Zu(Qu(e)) : {}),
		tc(t || !e || !e.__esModule ? us(n, 'default', { value: e, enumerable: !0 }) : n, e)
	),
	rc = fs({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js'(e) {
			var t = Symbol.for('react.element'),
				n = Symbol.for('react.portal'),
				r = Symbol.for('react.fragment'),
				o = Symbol.for('react.strict_mode'),
				s = Symbol.for('react.profiler'),
				i = Symbol.for('react.provider'),
				a = Symbol.for('react.context'),
				l = Symbol.for('react.forward_ref'),
				u = Symbol.for('react.suspense'),
				c = Symbol.for('react.memo'),
				f = Symbol.for('react.lazy'),
				d = Symbol.iterator;
			function h(g) {
				return g === null || typeof g != 'object'
					? null
					: ((g = (d && g[d]) || g['@@iterator']), typeof g == 'function' ? g : null);
			}
			var v = {
					isMounted: function () {
						return !1;
					},
					enqueueForceUpdate: function () {},
					enqueueReplaceState: function () {},
					enqueueSetState: function () {},
				},
				y = Object.assign,
				b = {};
			function C(g, $, L) {
				(this.props = g), (this.context = $), (this.refs = b), (this.updater = L || v);
			}
			(C.prototype.isReactComponent = {}),
				(C.prototype.setState = function (g, $) {
					if (typeof g != 'object' && typeof g != 'function' && g != null)
						throw Error(
							'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
						);
					this.updater.enqueueSetState(this, g, $, 'setState');
				}),
				(C.prototype.forceUpdate = function (g) {
					this.updater.enqueueForceUpdate(this, g, 'forceUpdate');
				});
			function S() {}
			S.prototype = C.prototype;
			function w(g, $, L) {
				(this.props = g), (this.context = $), (this.refs = b), (this.updater = L || v);
			}
			var A = (w.prototype = new S());
			(A.constructor = w), y(A, C.prototype), (A.isPureReactComponent = !0);
			var M = Array.isArray,
				N = Object.prototype.hasOwnProperty,
				D = { current: null },
				p = { key: !0, ref: !0, __self: !0, __source: !0 };
			function k(g, $, L) {
				var K,
					z = {},
					U = null,
					J = null;
				if ($ != null)
					for (K in ($.ref !== void 0 && (J = $.ref), $.key !== void 0 && (U = '' + $.key), $))
						N.call($, K) && !p.hasOwnProperty(K) && (z[K] = $[K]);
				var Q = arguments.length - 2;
				if (Q === 1) z.children = L;
				else if (1 < Q) {
					for (var G = Array(Q), oe = 0; oe < Q; oe++) G[oe] = arguments[oe + 2];
					z.children = G;
				}
				if (g && g.defaultProps)
					for (K in ((Q = g.defaultProps), Q)) z[K] === void 0 && (z[K] = Q[K]);
				return { $$typeof: t, type: g, key: U, ref: J, props: z, _owner: D.current };
			}
			function _(g, $) {
				return { $$typeof: t, type: g.type, key: $, ref: g.ref, props: g.props, _owner: g._owner };
			}
			function T(g) {
				return typeof g == 'object' && g !== null && g.$$typeof === t;
			}
			function E(g) {
				var $ = { '=': '=0', ':': '=2' };
				return (
					'$' +
					g.replace(/[=:]/g, function (L) {
						return $[L];
					})
				);
			}
			var x = /\/+/g;
			function P(g, $) {
				return typeof g == 'object' && g !== null && g.key != null ? E('' + g.key) : $.toString(36);
			}
			function V(g, $, L, K, z) {
				var U = typeof g;
				(U === 'undefined' || U === 'boolean') && (g = null);
				var J = !1;
				if (g === null) J = !0;
				else
					switch (U) {
						case 'string':
						case 'number':
							J = !0;
							break;
						case 'object':
							switch (g.$$typeof) {
								case t:
								case n:
									J = !0;
							}
					}
				if (J)
					return (
						(J = g),
						(z = z(J)),
						(g = K === '' ? '.' + P(J, 0) : K),
						M(z)
							? ((L = ''),
							  g != null && (L = g.replace(x, '$&/') + '/'),
							  V(z, $, L, '', function (oe) {
									return oe;
							  }))
							: z != null &&
							  (T(z) &&
									(z = _(
										z,
										L +
											(!z.key || (J && J.key === z.key)
												? ''
												: ('' + z.key).replace(x, '$&/') + '/') +
											g
									)),
							  $.push(z)),
						1
					);
				if (((J = 0), (K = K === '' ? '.' : K + ':'), M(g)))
					for (var Q = 0; Q < g.length; Q++) {
						U = g[Q];
						var G = K + P(U, Q);
						J += V(U, $, L, G, z);
					}
				else if (((G = h(g)), typeof G == 'function'))
					for (g = G.call(g), Q = 0; !(U = g.next()).done; )
						(U = U.value), (G = K + P(U, Q++)), (J += V(U, $, L, G, z));
				else if (U === 'object')
					throw (
						(($ = String(g)),
						Error(
							'Objects are not valid as a React child (found: ' +
								($ === '[object Object]'
									? 'object with keys {' + Object.keys(g).join(', ') + '}'
									: $) +
								'). If you meant to render a collection of children, use an array instead.'
						))
					);
				return J;
			}
			function R(g, $, L) {
				if (g == null) return g;
				var K = [],
					z = 0;
				return (
					V(g, K, '', '', function (U) {
						return $.call(L, U, z++);
					}),
					K
				);
			}
			function j(g) {
				if (g._status === -1) {
					var $ = g._result;
					($ = $()),
						$.then(
							function (L) {
								(g._status === 0 || g._status === -1) && ((g._status = 1), (g._result = L));
							},
							function (L) {
								(g._status === 0 || g._status === -1) && ((g._status = 2), (g._result = L));
							}
						),
						g._status === -1 && ((g._status = 0), (g._result = $));
				}
				if (g._status === 1) return g._result.default;
				throw g._result;
			}
			var O = { current: null },
				W = { transition: null },
				fe = { ReactCurrentDispatcher: O, ReactCurrentBatchConfig: W, ReactCurrentOwner: D };
			(e.Children = {
				map: R,
				forEach: function (g, $, L) {
					R(
						g,
						function () {
							$.apply(this, arguments);
						},
						L
					);
				},
				count: function (g) {
					var $ = 0;
					return (
						R(g, function () {
							$++;
						}),
						$
					);
				},
				toArray: function (g) {
					return (
						R(g, function ($) {
							return $;
						}) || []
					);
				},
				only: function (g) {
					if (!T(g))
						throw Error('React.Children.only expected to receive a single React element child.');
					return g;
				},
			}),
				(e.Component = C),
				(e.Fragment = r),
				(e.Profiler = s),
				(e.PureComponent = w),
				(e.StrictMode = o),
				(e.Suspense = u),
				(e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fe),
				(e.cloneElement = function (g, $, L) {
					if (g == null)
						throw Error(
							'React.cloneElement(...): The argument must be a React element, but you passed ' +
								g +
								'.'
						);
					var K = y({}, g.props),
						z = g.key,
						U = g.ref,
						J = g._owner;
					if ($ != null) {
						if (
							($.ref !== void 0 && ((U = $.ref), (J = D.current)),
							$.key !== void 0 && (z = '' + $.key),
							g.type && g.type.defaultProps)
						)
							var Q = g.type.defaultProps;
						for (G in $)
							N.call($, G) &&
								!p.hasOwnProperty(G) &&
								(K[G] = $[G] === void 0 && Q !== void 0 ? Q[G] : $[G]);
					}
					var G = arguments.length - 2;
					if (G === 1) K.children = L;
					else if (1 < G) {
						Q = Array(G);
						for (var oe = 0; oe < G; oe++) Q[oe] = arguments[oe + 2];
						K.children = Q;
					}
					return { $$typeof: t, type: g.type, key: z, ref: U, props: K, _owner: J };
				}),
				(e.createContext = function (g) {
					return (
						(g = {
							$$typeof: a,
							_currentValue: g,
							_currentValue2: g,
							_threadCount: 0,
							Provider: null,
							Consumer: null,
							_defaultValue: null,
							_globalName: null,
						}),
						(g.Provider = { $$typeof: i, _context: g }),
						(g.Consumer = g)
					);
				}),
				(e.createElement = k),
				(e.createFactory = function (g) {
					var $ = k.bind(null, g);
					return ($.type = g), $;
				}),
				(e.createRef = function () {
					return { current: null };
				}),
				(e.forwardRef = function (g) {
					return { $$typeof: l, render: g };
				}),
				(e.isValidElement = T),
				(e.lazy = function (g) {
					return { $$typeof: f, _payload: { _status: -1, _result: g }, _init: j };
				}),
				(e.memo = function (g, $) {
					return { $$typeof: c, type: g, compare: $ === void 0 ? null : $ };
				}),
				(e.startTransition = function (g) {
					var $ = W.transition;
					W.transition = {};
					try {
						g();
					} finally {
						W.transition = $;
					}
				}),
				(e.unstable_act = function () {
					throw Error('act(...) is not supported in production builds of React.');
				}),
				(e.useCallback = function (g, $) {
					return O.current.useCallback(g, $);
				}),
				(e.useContext = function (g) {
					return O.current.useContext(g);
				}),
				(e.useDebugValue = function () {}),
				(e.useDeferredValue = function (g) {
					return O.current.useDeferredValue(g);
				}),
				(e.useEffect = function (g, $) {
					return O.current.useEffect(g, $);
				}),
				(e.useId = function () {
					return O.current.useId();
				}),
				(e.useImperativeHandle = function (g, $, L) {
					return O.current.useImperativeHandle(g, $, L);
				}),
				(e.useInsertionEffect = function (g, $) {
					return O.current.useInsertionEffect(g, $);
				}),
				(e.useLayoutEffect = function (g, $) {
					return O.current.useLayoutEffect(g, $);
				}),
				(e.useMemo = function (g, $) {
					return O.current.useMemo(g, $);
				}),
				(e.useReducer = function (g, $, L) {
					return O.current.useReducer(g, $, L);
				}),
				(e.useRef = function (g) {
					return O.current.useRef(g);
				}),
				(e.useState = function (g) {
					return O.current.useState(g);
				}),
				(e.useSyncExternalStore = function (g, $, L) {
					return O.current.useSyncExternalStore(g, $, L);
				}),
				(e.useTransition = function () {
					return O.current.useTransition();
				}),
				(e.version = '18.2.0');
		},
	}),
	oc = fs({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'(e, t) {
			t.exports = rc();
		},
	});
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var co = nc(oc()),
	ic = (e, t) => {
		var n;
		let r = [];
		const o =
				(n = co.Children.map(e, (i) =>
					(0, co.isValidElement)(i) && i.type === t ? (r.push(i), null) : i
				)) == null
					? void 0
					: n.filter(Boolean),
			s = r.length >= 0 ? r : void 0;
		return [o, s];
	},
	ds = q.createContext(null);
ds.displayName = 'PressResponderContext';
var sc = Object.defineProperty,
	ac = (e, t, n) =>
		t in e ? sc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
	Ie = (e, t, n) => (ac(e, typeof t != 'symbol' ? t + '' : t, n), n),
	hs = (e, t, n) => {
		if (!t.has(e)) throw TypeError('Cannot ' + n);
	},
	lc = (e, t, n) => (hs(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
	uc = (e, t, n) => {
		if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
		t instanceof WeakSet ? t.add(e) : t.set(e, n);
	},
	cc = (e, t, n, r) => (hs(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n),
	zt,
	Ft = class {
		constructor(e, t, n) {
			Ie(this, 'type'),
				Ie(this, 'pointerType'),
				Ie(this, 'target'),
				Ie(this, 'shiftKey'),
				Ie(this, 'ctrlKey'),
				Ie(this, 'metaKey'),
				Ie(this, 'altKey'),
				uc(this, zt, !0),
				(this.type = e),
				(this.pointerType = t),
				(this.target = n.currentTarget),
				(this.shiftKey = n.shiftKey),
				(this.metaKey = n.metaKey),
				(this.ctrlKey = n.ctrlKey),
				(this.altKey = n.altKey);
		}
		continuePropagation() {
			cc(this, zt, !1);
		}
		get shouldStopPropagation() {
			return lc(this, zt);
		}
	};
zt = new WeakMap();
var We = (e) => {
		var t;
		return (t = e?.ownerDocument) != null ? t : document;
	},
	rr = (e) => {
		var t, n;
		return (n = (t = e?.ownerDocument) == null ? void 0 : t.defaultView) != null ? n : window;
	},
	ot = 'default',
	or = '',
	Ut = new WeakMap();
function fo(e) {
	if (Fi()) {
		if (ot === 'default') {
			const t = We(e);
			(or = t.documentElement.style.webkitUserSelect),
				(t.documentElement.style.webkitUserSelect = 'none');
		}
		ot = 'disabled';
	} else
		(e instanceof HTMLElement || e instanceof SVGElement) &&
			(Ut.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function Ot(e) {
	if (Fi()) {
		if (ot !== 'disabled') return;
		(ot = 'restoring'),
			setTimeout(() => {
				Ii(() => {
					if (ot === 'restoring') {
						const t = We(e);
						t.documentElement.style.webkitUserSelect === 'none' &&
							(t.documentElement.style.webkitUserSelect = or || ''),
							(or = ''),
							(ot = 'default');
					}
				});
			}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Ut.has(e)) {
		let t = Ut.get(e);
		e.style.userSelect === 'none' && t && (e.style.userSelect = t),
			e.getAttribute('style') === '' && e.removeAttribute('style'),
			Ut.delete(e);
	}
}
function fc(e) {
	let t = m.useContext(ds);
	if (t) {
		let { register: n, ...r } = t;
		(e = ue(r, e)), n();
	}
	return ji(t, e.ref), e;
}
var ho = Symbol('linkClicked');
function ps(e) {
	let {
			onPress: t,
			onPressChange: n,
			onPressStart: r,
			onPressEnd: o,
			onPressUp: s,
			isDisabled: i,
			isPressed: a,
			preventFocusOnPress: l,
			shouldCancelOnPointerExit: u,
			allowTextSelectionOnPress: c,
			ref: f,
			...d
		} = fc(e),
		[h, v] = m.useState(!1),
		y = m.useRef({
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
		{ addGlobalListener: b, removeAllGlobalListeners: C } = Ll(),
		S = tt((p, k) => {
			let _ = y.current;
			if (i || _.didFirePressStart) return;
			let T = !0;
			if (((_.isTriggeringEvent = !0), r)) {
				let E = new Ft('pressstart', k, p);
				r(E), (T = E.shouldStopPropagation);
			}
			return n && n(!0), (_.isTriggeringEvent = !1), (_.didFirePressStart = !0), v(!0), T;
		}),
		w = tt((p, k, _ = !0) => {
			let T = y.current;
			if (!T.didFirePressStart) return;
			(T.ignoreClickAfterPress = !0), (T.didFirePressStart = !1), (T.isTriggeringEvent = !0);
			let E = !0;
			if (o) {
				let x = new Ft('pressend', k, p);
				o(x), (E = x.shouldStopPropagation);
			}
			if ((n && n(!1), v(!1), t && _ && !i)) {
				let x = new Ft('press', k, p);
				t(x), E && (E = x.shouldStopPropagation);
			}
			return (T.isTriggeringEvent = !1), E;
		}),
		A = tt((p, k) => {
			let _ = y.current;
			if (!i) {
				if (s) {
					_.isTriggeringEvent = !0;
					let T = new Ft('pressup', k, p);
					return s(T), (_.isTriggeringEvent = !1), T.shouldStopPropagation;
				}
				return !0;
			}
		}),
		M = tt((p) => {
			let k = y.current;
			k.isPressed &&
				(k.isOverTarget && k.target && w(be(k.target, p), k.pointerType, !1),
				(k.isPressed = !1),
				(k.isOverTarget = !1),
				(k.activePointerId = null),
				(k.pointerType = null),
				C(),
				!c && k.target && Ot(k.target));
		}),
		N = tt((p) => {
			u && M(p);
		}),
		D = m.useMemo(() => {
			let p = y.current,
				k = {
					onKeyDown(T) {
						var E;
						if (En(T.nativeEvent, T.currentTarget) && T.currentTarget.contains(T.target)) {
							mo(T.target, T.key) && T.preventDefault();
							let x = !0;
							!p.isPressed &&
								!T.repeat &&
								((p.target = T.currentTarget),
								(p.isPressed = !0),
								(x = S(T, 'keyboard')),
								b(We(T.currentTarget), 'keyup', _, !1)),
								x && T.stopPropagation(),
								T.metaKey && Ct() && ((E = p.metaKeyEvents) == null || E.set(T.key, T.nativeEvent));
						} else T.key === 'Meta' && (p.metaKeyEvents = new Map());
					},
					onKeyUp(T) {
						p.target &&
							En(T.nativeEvent, T.currentTarget) &&
							!T.repeat &&
							T.currentTarget.contains(T.target) &&
							A(be(p.target, T), 'keyboard');
					},
					onClick(T) {
						if (
							!(T && !T.currentTarget.contains(T.target)) &&
							T &&
							T.button === 0 &&
							!p.isTriggeringEvent &&
							!ut.isOpening
						) {
							let E = !0;
							if (
								(i && T.preventDefault(),
								!p.ignoreClickAfterPress &&
									!p.ignoreEmulatedMouseEvents &&
									!p.isPressed &&
									(p.pointerType === 'virtual' || Un(T.nativeEvent)))
							) {
								!i && !l && Ke(T.currentTarget);
								let x = S(T, 'virtual'),
									P = A(T, 'virtual'),
									V = w(T, 'virtual');
								E = x && P && V;
							}
							(p.ignoreEmulatedMouseEvents = !1),
								(p.ignoreClickAfterPress = !1),
								E && T.stopPropagation();
						}
					},
				},
				_ = (T) => {
					var E, x;
					if (p.isPressed && p.target && En(T, p.target)) {
						mo(T.target, T.key) && T.preventDefault();
						let P = T.target,
							V = w(be(p.target, T), 'keyboard', p.target.contains(P));
						C(),
							V && T.stopPropagation(),
							T.key !== 'Enter' &&
								Cr(p.target) &&
								p.target.contains(P) &&
								!T[ho] &&
								((T[ho] = !0), ut(p.target, T, !1)),
							(p.isPressed = !1),
							(E = p.metaKeyEvents) == null || E.delete(T.key);
					} else if (T.key === 'Meta' && (x = p.metaKeyEvents) != null && x.size) {
						let P = p.metaKeyEvents;
						p.metaKeyEvents = null;
						for (let V of P.values())
							p.target && p.target.dispatchEvent(new KeyboardEvent('keyup', V));
					}
				};
			if (typeof PointerEvent < 'u') {
				(k.onPointerDown = (P) => {
					if (P.button !== 0 || !P.currentTarget.contains(P.target)) return;
					if (Fl(P.nativeEvent)) {
						p.pointerType = 'virtual';
						return;
					}
					$n(P.currentTarget) && P.preventDefault(), (p.pointerType = P.pointerType);
					let V = !0;
					p.isPressed ||
						((p.isPressed = !0),
						(p.isOverTarget = !0),
						(p.activePointerId = P.pointerId),
						(p.target = P.currentTarget),
						!i && !l && Ke(P.currentTarget),
						c || fo(p.target),
						(V = S(P, p.pointerType)),
						b(We(P.currentTarget), 'pointermove', T, !1),
						b(We(P.currentTarget), 'pointerup', E, !1),
						b(We(P.currentTarget), 'pointercancel', x, !1)),
						V && P.stopPropagation();
				}),
					(k.onMouseDown = (P) => {
						P.currentTarget.contains(P.target) &&
							P.button === 0 &&
							($n(P.currentTarget) && P.preventDefault(), P.stopPropagation());
					}),
					(k.onPointerUp = (P) => {
						!P.currentTarget.contains(P.target) ||
							p.pointerType === 'virtual' ||
							(P.button === 0 && Je(P, P.currentTarget) && A(P, p.pointerType || P.pointerType));
					});
				let T = (P) => {
						P.pointerId !== p.activePointerId ||
							!p.target ||
							(Je(P, p.target)
								? p.isOverTarget || ((p.isOverTarget = !0), S(be(p.target, P), p.pointerType))
								: p.isOverTarget &&
								  ((p.isOverTarget = !1), w(be(p.target, P), p.pointerType, !1), N(P)));
					},
					E = (P) => {
						P.pointerId === p.activePointerId &&
							p.isPressed &&
							P.button === 0 &&
							p.target &&
							((Je(P, p.target) || p.isOverTarget) && w(be(p.target, P), p.pointerType),
							(p.isPressed = !1),
							(p.isOverTarget = !1),
							(p.activePointerId = null),
							(p.pointerType = null),
							C(),
							c || Ot(p.target));
					},
					x = (P) => {
						M(P);
					};
				k.onDragStart = (P) => {
					P.currentTarget.contains(P.target) && M(P);
				};
			} else {
				(k.onMouseDown = (x) => {
					if (x.button !== 0 || !x.currentTarget.contains(x.target)) return;
					if (($n(x.currentTarget) && x.preventDefault(), p.ignoreEmulatedMouseEvents)) {
						x.stopPropagation();
						return;
					}
					(p.isPressed = !0),
						(p.isOverTarget = !0),
						(p.target = x.currentTarget),
						(p.pointerType = Un(x.nativeEvent) ? 'virtual' : 'mouse'),
						!i && !l && Ke(x.currentTarget),
						S(x, p.pointerType) && x.stopPropagation(),
						b(We(x.currentTarget), 'mouseup', T, !1);
				}),
					(k.onMouseEnter = (x) => {
						if (!x.currentTarget.contains(x.target)) return;
						let P = !0;
						p.isPressed &&
							!p.ignoreEmulatedMouseEvents &&
							((p.isOverTarget = !0), (P = S(x, p.pointerType))),
							P && x.stopPropagation();
					}),
					(k.onMouseLeave = (x) => {
						if (!x.currentTarget.contains(x.target)) return;
						let P = !0;
						p.isPressed &&
							!p.ignoreEmulatedMouseEvents &&
							((p.isOverTarget = !1), (P = w(x, p.pointerType, !1)), N(x)),
							P && x.stopPropagation();
					}),
					(k.onMouseUp = (x) => {
						x.currentTarget.contains(x.target) &&
							!p.ignoreEmulatedMouseEvents &&
							x.button === 0 &&
							A(x, p.pointerType || 'mouse');
					});
				let T = (x) => {
					if (x.button === 0) {
						if (((p.isPressed = !1), C(), p.ignoreEmulatedMouseEvents)) {
							p.ignoreEmulatedMouseEvents = !1;
							return;
						}
						p.target &&
							(Je(x, p.target)
								? w(be(p.target, x), p.pointerType)
								: p.isOverTarget && w(be(p.target, x), p.pointerType, !1),
							(p.isOverTarget = !1));
					}
				};
				(k.onTouchStart = (x) => {
					if (!x.currentTarget.contains(x.target)) return;
					let P = dc(x.nativeEvent);
					if (!P) return;
					(p.activePointerId = P.identifier),
						(p.ignoreEmulatedMouseEvents = !0),
						(p.isOverTarget = !0),
						(p.isPressed = !0),
						(p.target = x.currentTarget),
						(p.pointerType = 'touch'),
						!i && !l && Ke(x.currentTarget),
						c || fo(p.target),
						S(x, p.pointerType) && x.stopPropagation(),
						b(rr(x.currentTarget), 'scroll', E, !0);
				}),
					(k.onTouchMove = (x) => {
						if (!x.currentTarget.contains(x.target)) return;
						if (!p.isPressed) {
							x.stopPropagation();
							return;
						}
						let P = po(x.nativeEvent, p.activePointerId),
							V = !0;
						P && Je(P, x.currentTarget)
							? p.isOverTarget || ((p.isOverTarget = !0), (V = S(x, p.pointerType)))
							: p.isOverTarget && ((p.isOverTarget = !1), (V = w(x, p.pointerType, !1)), N(x)),
							V && x.stopPropagation();
					}),
					(k.onTouchEnd = (x) => {
						if (!x.currentTarget.contains(x.target)) return;
						if (!p.isPressed) {
							x.stopPropagation();
							return;
						}
						let P = po(x.nativeEvent, p.activePointerId),
							V = !0;
						P && Je(P, x.currentTarget)
							? (A(x, p.pointerType), (V = w(x, p.pointerType)))
							: p.isOverTarget && (V = w(x, p.pointerType, !1)),
							V && x.stopPropagation(),
							(p.isPressed = !1),
							(p.activePointerId = null),
							(p.isOverTarget = !1),
							(p.ignoreEmulatedMouseEvents = !0),
							!c && p.target && Ot(p.target),
							C();
					}),
					(k.onTouchCancel = (x) => {
						x.currentTarget.contains(x.target) && (x.stopPropagation(), p.isPressed && M(x));
					});
				let E = (x) => {
					p.isPressed &&
						x.target.contains(p.target) &&
						M({ currentTarget: p.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
				};
				k.onDragStart = (x) => {
					x.currentTarget.contains(x.target) && M(x);
				};
			}
			return k;
		}, [b, i, l, C, c, M, N, w, S, A]);
	return (
		m.useEffect(
			() => () => {
				!c && y.current.target && Ot(y.current.target);
			},
			[c]
		),
		{ isPressed: a || h, pressProps: ue(d, D) }
	);
}
function Cr(e) {
	return e.tagName === 'A' && e.hasAttribute('href');
}
function En(e, t) {
	const { key: n, code: r } = e,
		o = t,
		s = o.getAttribute('role');
	return (
		(n === 'Enter' || n === ' ' || n === 'Spacebar' || r === 'Space') &&
		!(
			(o instanceof rr(o).HTMLInputElement && !ms(o, n)) ||
			o instanceof rr(o).HTMLTextAreaElement ||
			o.isContentEditable
		) &&
		!((s === 'link' || (!s && Cr(o))) && n !== 'Enter')
	);
}
function dc(e) {
	const { targetTouches: t } = e;
	return t.length > 0 ? t[0] : null;
}
function po(e, t) {
	const n = e.changedTouches;
	for (let r = 0; r < n.length; r++) {
		const o = n[r];
		if (o.identifier === t) return o;
	}
	return null;
}
function be(e, t) {
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
	};
}
function hc(e) {
	let t = e.width ? e.width / 2 : e.radiusX || 0,
		n = e.height ? e.height / 2 : e.radiusY || 0;
	return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function pc(e, t) {
	return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Je(e, t) {
	let n = t.getBoundingClientRect(),
		r = hc(e);
	return pc(n, r);
}
function $n(e) {
	return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function mo(e, t) {
	return e instanceof HTMLInputElement
		? !ms(e, t)
		: e instanceof HTMLButtonElement
		? e.type !== 'submit' && e.type !== 'reset'
		: !Cr(e);
}
var mc = new Set([
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
function ms(e, t) {
	return e.type === 'checkbox' || e.type === 'radio' ? t === ' ' : mc.has(e.type);
}
var gc = (e) =>
	I.jsxs('svg', {
		'aria-hidden': 'true',
		fill: 'none',
		focusable: 'false',
		height: '1em',
		shapeRendering: 'geometricPrecision',
		stroke: 'currentColor',
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		strokeWidth: '1.5',
		viewBox: '0 0 24 24',
		width: '1em',
		...e,
		children: [
			I.jsx('path', { d: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' }),
			I.jsx('path', { d: 'M15 3h6v6' }),
			I.jsx('path', { d: 'M10 14L21 3' }),
		],
	});
const gs = m.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: 'never' }),
	hn = m.createContext({}),
	pn = m.createContext(null),
	mn = typeof document < 'u',
	Er = mn ? m.useLayoutEffect : m.useEffect,
	vs = m.createContext({ strict: !1 });
function vc(e, t, n, r) {
	const { visualElement: o } = m.useContext(hn),
		s = m.useContext(vs),
		i = m.useContext(pn),
		a = m.useContext(gs).reducedMotion,
		l = m.useRef();
	(r = r || s.renderer),
		!l.current &&
			r &&
			(l.current = r(e, {
				visualState: t,
				parent: o,
				props: n,
				presenceContext: i,
				blockInitialAnimation: i ? i.initial === !1 : !1,
				reducedMotionConfig: a,
			}));
	const u = l.current;
	m.useInsertionEffect(() => {
		u && u.update(n, i);
	});
	const c = m.useRef(!!window.HandoffAppearAnimations);
	return (
		Er(() => {
			u && (u.render(), c.current && u.animationState && u.animationState.animateChanges());
		}),
		m.useEffect(() => {
			u &&
				(u.updateFeatures(),
				!c.current && u.animationState && u.animationState.animateChanges(),
				(window.HandoffAppearAnimations = void 0),
				(c.current = !1));
		}),
		u
	);
}
function it(e) {
	return typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current');
}
function yc(e, t, n) {
	return m.useCallback(
		(r) => {
			r && e.mount && e.mount(r),
				t && (r ? t.mount(r) : t.unmount()),
				n && (typeof n == 'function' ? n(r) : it(n) && (n.current = r));
		},
		[t]
	);
}
function Et(e) {
	return typeof e == 'string' || Array.isArray(e);
}
function gn(e) {
	return typeof e == 'object' && typeof e.start == 'function';
}
const $r = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
	Ar = ['initial', ...$r];
function vn(e) {
	return gn(e.animate) || Ar.some((t) => Et(e[t]));
}
function ys(e) {
	return !!(vn(e) || e.variants);
}
function bc(e, t) {
	if (vn(e)) {
		const { initial: n, animate: r } = e;
		return { initial: n === !1 || Et(n) ? n : void 0, animate: Et(r) ? r : void 0 };
	}
	return e.inherit !== !1 ? t : {};
}
function xc(e) {
	const { initial: t, animate: n } = bc(e, m.useContext(hn));
	return m.useMemo(() => ({ initial: t, animate: n }), [go(t), go(n)]);
}
function go(e) {
	return Array.isArray(e) ? e.join(' ') : e;
}
const vo = {
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
	$t = {};
for (const e in vo) $t[e] = { isEnabled: (t) => vo[e].some((n) => !!t[n]) };
function wc(e) {
	for (const t in e) $t[t] = { ...$t[t], ...e[t] };
}
const Mr = m.createContext({}),
	bs = m.createContext({}),
	Pc = Symbol.for('motionComponentSymbol');
function Tc({
	preloadedFeatures: e,
	createVisualElement: t,
	useRender: n,
	useVisualState: r,
	Component: o,
}) {
	e && wc(e);
	function s(a, l) {
		let u;
		const c = { ...m.useContext(gs), ...a, layoutId: Sc(a) },
			{ isStatic: f } = c,
			d = xc(a),
			h = r(a, f);
		if (!f && mn) {
			d.visualElement = vc(o, h, c, t);
			const v = m.useContext(bs),
				y = m.useContext(vs).strict;
			d.visualElement && (u = d.visualElement.loadFeatures(c, y, e, v));
		}
		return m.createElement(
			hn.Provider,
			{ value: d },
			u && d.visualElement ? m.createElement(u, { visualElement: d.visualElement, ...c }) : null,
			n(o, a, yc(h, d.visualElement, l), h, f, d.visualElement)
		);
	}
	const i = m.forwardRef(s);
	return (i[Pc] = o), i;
}
function Sc({ layoutId: e }) {
	const t = m.useContext(Mr).id;
	return t && e !== void 0 ? t + '-' + e : e;
}
function Cc(e) {
	function t(r, o = {}) {
		return Tc(e(r, o));
	}
	if (typeof Proxy > 'u') return t;
	const n = new Map();
	return new Proxy(t, { get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)) });
}
const Ec = [
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
function kr(e) {
	return typeof e != 'string' || e.includes('-') ? !1 : !!(Ec.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const nn = {};
function $c(e) {
	Object.assign(nn, e);
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
	Xe = new Set(Mt);
function xs(e, { layout: t, layoutId: n }) {
	return (
		Xe.has(e) || e.startsWith('origin') || ((t || n !== void 0) && (!!nn[e] || e === 'opacity'))
	);
}
const ce = (e) => !!(e && e.getVelocity),
	Ac = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
	Mc = Mt.length;
function kc(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, o) {
	let s = '';
	for (let i = 0; i < Mc; i++) {
		const a = Mt[i];
		if (e[a] !== void 0) {
			const l = Ac[a] || a;
			s += `${l}(${e[a]}) `;
		}
	}
	return (
		t && !e.z && (s += 'translateZ(0)'),
		(s = s.trim()),
		o ? (s = o(e, r ? '' : s)) : n && r && (s = 'none'),
		s
	);
}
const ws = (e) => (t) => typeof t == 'string' && t.startsWith(e),
	Ps = ws('--'),
	ir = ws('var(--'),
	Vc = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
	Rc = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
	Re = (e, t, n) => Math.min(Math.max(n, e), t),
	qe = { test: (e) => typeof e == 'number', parse: parseFloat, transform: (e) => e },
	wt = { ...qe, transform: (e) => Re(0, 1, e) },
	It = { ...qe, default: 1 },
	Pt = (e) => Math.round(e * 1e5) / 1e5,
	yn = /(-)?([\d]*\.?[\d])+/g,
	Ts =
		/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
	Lc =
		/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function kt(e) {
	return typeof e == 'string';
}
const Vt = (e) => ({
		test: (t) => kt(t) && t.endsWith(e) && t.split(' ').length === 1,
		parse: parseFloat,
		transform: (t) => `${t}${e}`,
	}),
	$e = Vt('deg'),
	ye = Vt('%'),
	F = Vt('px'),
	Dc = Vt('vh'),
	Nc = Vt('vw'),
	yo = { ...ye, parse: (e) => ye.parse(e) / 100, transform: (e) => ye.transform(e * 100) },
	bo = { ...qe, transform: Math.round },
	Ss = {
		borderWidth: F,
		borderTopWidth: F,
		borderRightWidth: F,
		borderBottomWidth: F,
		borderLeftWidth: F,
		borderRadius: F,
		radius: F,
		borderTopLeftRadius: F,
		borderTopRightRadius: F,
		borderBottomRightRadius: F,
		borderBottomLeftRadius: F,
		width: F,
		maxWidth: F,
		height: F,
		maxHeight: F,
		size: F,
		top: F,
		right: F,
		bottom: F,
		left: F,
		padding: F,
		paddingTop: F,
		paddingRight: F,
		paddingBottom: F,
		paddingLeft: F,
		margin: F,
		marginTop: F,
		marginRight: F,
		marginBottom: F,
		marginLeft: F,
		rotate: $e,
		rotateX: $e,
		rotateY: $e,
		rotateZ: $e,
		scale: It,
		scaleX: It,
		scaleY: It,
		scaleZ: It,
		skew: $e,
		skewX: $e,
		skewY: $e,
		distance: F,
		translateX: F,
		translateY: F,
		translateZ: F,
		x: F,
		y: F,
		z: F,
		perspective: F,
		transformPerspective: F,
		opacity: wt,
		originX: yo,
		originY: yo,
		originZ: F,
		zIndex: bo,
		fillOpacity: wt,
		strokeOpacity: wt,
		numOctaves: bo,
	};
function Vr(e, t, n, r) {
	const { style: o, vars: s, transform: i, transformOrigin: a } = e;
	let l = !1,
		u = !1,
		c = !0;
	for (const f in t) {
		const d = t[f];
		if (Ps(f)) {
			s[f] = d;
			continue;
		}
		const h = Ss[f],
			v = Rc(d, h);
		if (Xe.has(f)) {
			if (((l = !0), (i[f] = v), !c)) continue;
			d !== (h.default || 0) && (c = !1);
		} else f.startsWith('origin') ? ((u = !0), (a[f] = v)) : (o[f] = v);
	}
	if (
		(t.transform ||
			(l || r ? (o.transform = kc(e.transform, n, c, r)) : o.transform && (o.transform = 'none')),
		u)
	) {
		const { originX: f = '50%', originY: d = '50%', originZ: h = 0 } = a;
		o.transformOrigin = `${f} ${d} ${h}`;
	}
}
const Rr = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Cs(e, t, n) {
	for (const r in t) !ce(t[r]) && !xs(r, n) && (e[r] = t[r]);
}
function Fc({ transformTemplate: e }, t, n) {
	return m.useMemo(() => {
		const r = Rr();
		return Vr(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
	}, [t]);
}
function Oc(e, t, n) {
	const r = e.style || {},
		o = {};
	return Cs(o, r, e), Object.assign(o, Fc(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function Ic(e, t, n) {
	const r = {},
		o = Oc(e, t, n);
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((r.draggable = !1),
			(o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
			(o.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
		e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
		(r.style = o),
		r
	);
}
const jc = new Set([
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
function rn(e) {
	return (
		e.startsWith('while') ||
		(e.startsWith('drag') && e !== 'draggable') ||
		e.startsWith('layout') ||
		e.startsWith('onTap') ||
		e.startsWith('onPan') ||
		jc.has(e)
	);
}
let Es = (e) => !rn(e);
function Bc(e) {
	e && (Es = (t) => (t.startsWith('on') ? !rn(t) : e(t)));
}
try {
	Bc(require('@emotion/is-prop-valid').default);
} catch {}
function _c(e, t, n) {
	const r = {};
	for (const o in e)
		(o === 'values' && typeof e.values == 'object') ||
			((Es(o) ||
				(n === !0 && rn(o)) ||
				(!t && !rn(o)) ||
				(e.draggable && o.startsWith('onDrag'))) &&
				(r[o] = e[o]));
	return r;
}
function xo(e, t, n) {
	return typeof e == 'string' ? e : F.transform(t + n * e);
}
function Wc(e, t, n) {
	const r = xo(t, e.x, e.width),
		o = xo(n, e.y, e.height);
	return `${r} ${o}`;
}
const Kc = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
	zc = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function Uc(e, t, n = 1, r = 0, o = !0) {
	e.pathLength = 1;
	const s = o ? Kc : zc;
	e[s.offset] = F.transform(-r);
	const i = F.transform(t),
		a = F.transform(n);
	e[s.array] = `${i} ${a}`;
}
function Lr(
	e,
	{
		attrX: t,
		attrY: n,
		attrScale: r,
		originX: o,
		originY: s,
		pathLength: i,
		pathSpacing: a = 1,
		pathOffset: l = 0,
		...u
	},
	c,
	f,
	d
) {
	if ((Vr(e, u, c, d), f)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	(e.attrs = e.style), (e.style = {});
	const { attrs: h, style: v, dimensions: y } = e;
	h.transform && (y && (v.transform = h.transform), delete h.transform),
		y &&
			(o !== void 0 || s !== void 0 || v.transform) &&
			(v.transformOrigin = Wc(y, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)),
		t !== void 0 && (h.x = t),
		n !== void 0 && (h.y = n),
		r !== void 0 && (h.scale = r),
		i !== void 0 && Uc(h, i, a, l, !1);
}
const $s = () => ({ ...Rr(), attrs: {} }),
	Dr = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function Hc(e, t, n, r) {
	const o = m.useMemo(() => {
		const s = $s();
		return (
			Lr(s, t, { enableHardwareAcceleration: !1 }, Dr(r), e.transformTemplate),
			{ ...s.attrs, style: { ...s.style } }
		);
	}, [t]);
	if (e.style) {
		const s = {};
		Cs(s, e.style, e), (o.style = { ...s, ...o.style });
	}
	return o;
}
function Gc(e = !1) {
	return (n, r, o, { latestValues: s }, i) => {
		const l = (kr(n) ? Hc : Ic)(r, s, i, n),
			c = { ..._c(r, typeof n == 'string', e), ...l, ref: o },
			{ children: f } = r,
			d = m.useMemo(() => (ce(f) ? f.get() : f), [f]);
		return m.createElement(n, { ...c, children: d });
	};
}
const Nr = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function As(e, { style: t, vars: n }, r, o) {
	Object.assign(e.style, t, o && o.getProjectionStyles(r));
	for (const s in n) e.style.setProperty(s, n[s]);
}
const Ms = new Set([
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
function ks(e, t, n, r) {
	As(e, t, void 0, r);
	for (const o in t.attrs) e.setAttribute(Ms.has(o) ? o : Nr(o), t.attrs[o]);
}
function Fr(e, t) {
	const { style: n } = e,
		r = {};
	for (const o in n) (ce(n[o]) || (t.style && ce(t.style[o])) || xs(o, e)) && (r[o] = n[o]);
	return r;
}
function Vs(e, t) {
	const n = Fr(e, t);
	for (const r in e)
		if (ce(e[r]) || ce(t[r])) {
			const o = Mt.indexOf(r) !== -1 ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1) : r;
			n[o] = e[r];
		}
	return n;
}
function Or(e, t, n, r = {}, o = {}) {
	return (
		typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, o)),
		typeof t == 'string' && (t = e.variants && e.variants[t]),
		typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, o)),
		t
	);
}
function Rs(e) {
	const t = m.useRef(null);
	return t.current === null && (t.current = e()), t.current;
}
const on = (e) => Array.isArray(e),
	Yc = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
	Xc = (e) => (on(e) ? e[e.length - 1] || 0 : e);
function Ht(e) {
	const t = ce(e) ? e.get() : e;
	return Yc(t) ? t.toValue() : t;
}
function qc({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, s) {
	const i = { latestValues: Zc(r, o, s, e), renderState: t() };
	return n && (i.mount = (a) => n(r, a, i)), i;
}
const Ls = (e) => (t, n) => {
	const r = m.useContext(hn),
		o = m.useContext(pn),
		s = () => qc(e, t, r, o);
	return n ? s() : Rs(s);
};
function Zc(e, t, n, r) {
	const o = {},
		s = r(e, {});
	for (const d in s) o[d] = Ht(s[d]);
	let { initial: i, animate: a } = e;
	const l = vn(e),
		u = ys(e);
	t &&
		u &&
		!l &&
		e.inherit !== !1 &&
		(i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
	let c = n ? n.initial === !1 : !1;
	c = c || i === !1;
	const f = c ? a : i;
	return (
		f &&
			typeof f != 'boolean' &&
			!gn(f) &&
			(Array.isArray(f) ? f : [f]).forEach((h) => {
				const v = Or(e, h);
				if (!v) return;
				const { transitionEnd: y, transition: b, ...C } = v;
				for (const S in C) {
					let w = C[S];
					if (Array.isArray(w)) {
						const A = c ? w.length - 1 : 0;
						w = w[A];
					}
					w !== null && (o[S] = w);
				}
				for (const S in y) o[S] = y[S];
			}),
		o
	);
}
const ee = (e) => e;
class wo {
	constructor() {
		(this.order = []), (this.scheduled = new Set());
	}
	add(t) {
		if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0;
	}
	remove(t) {
		const n = this.order.indexOf(t);
		n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
	}
	clear() {
		(this.order.length = 0), this.scheduled.clear();
	}
}
function Jc(e) {
	let t = new wo(),
		n = new wo(),
		r = 0,
		o = !1,
		s = !1;
	const i = new WeakSet(),
		a = {
			schedule: (l, u = !1, c = !1) => {
				const f = c && o,
					d = f ? t : n;
				return u && i.add(l), d.add(l) && f && o && (r = t.order.length), l;
			},
			cancel: (l) => {
				n.remove(l), i.delete(l);
			},
			process: (l) => {
				if (o) {
					s = !0;
					return;
				}
				if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
					for (let u = 0; u < r; u++) {
						const c = t.order[u];
						c(l), i.has(c) && (a.schedule(c), e());
					}
				(o = !1), s && ((s = !1), a.process(l));
			},
		};
	return a;
}
const jt = ['prepare', 'read', 'update', 'preRender', 'render', 'postRender'],
	Qc = 40;
function ef(e, t) {
	let n = !1,
		r = !0;
	const o = { delta: 0, timestamp: 0, isProcessing: !1 },
		s = jt.reduce((f, d) => ((f[d] = Jc(() => (n = !0))), f), {}),
		i = (f) => s[f].process(o),
		a = () => {
			const f = performance.now();
			(n = !1),
				(o.delta = r ? 1e3 / 60 : Math.max(Math.min(f - o.timestamp, Qc), 1)),
				(o.timestamp = f),
				(o.isProcessing = !0),
				jt.forEach(i),
				(o.isProcessing = !1),
				n && t && ((r = !1), e(a));
		},
		l = () => {
			(n = !0), (r = !0), o.isProcessing || e(a);
		};
	return {
		schedule: jt.reduce((f, d) => {
			const h = s[d];
			return (f[d] = (v, y = !1, b = !1) => (n || l(), h.schedule(v, y, b))), f;
		}, {}),
		cancel: (f) => jt.forEach((d) => s[d].cancel(f)),
		state: o,
		steps: s,
	};
}
const {
		schedule: H,
		cancel: Ce,
		state: re,
		steps: An,
	} = ef(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : ee, !0),
	tf = {
		useVisualState: Ls({
			scrapeMotionValuesFromProps: Vs,
			createRenderState: $s,
			onMount: (e, t, { renderState: n, latestValues: r }) => {
				H.read(() => {
					try {
						n.dimensions = typeof t.getBBox == 'function' ? t.getBBox() : t.getBoundingClientRect();
					} catch {
						n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
					}
				}),
					H.render(() => {
						Lr(n, r, { enableHardwareAcceleration: !1 }, Dr(t.tagName), e.transformTemplate),
							ks(t, n);
					});
			},
		}),
	},
	nf = { useVisualState: Ls({ scrapeMotionValuesFromProps: Fr, createRenderState: Rr }) };
function rf(e, { forwardMotionProps: t = !1 }, n, r) {
	return {
		...(kr(e) ? tf : nf),
		preloadedFeatures: n,
		useRender: Gc(t),
		createVisualElement: r,
		Component: e,
	};
}
function we(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Ds = (e) =>
	e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1;
function bn(e, t = 'page') {
	return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
}
const of = (e) => (t) => Ds(t) && e(t, bn(t));
function Te(e, t, n, r) {
	return we(e, t, of(n), r);
}
const sf = (e, t) => (n) => t(e(n)),
	ke = (...e) => e.reduce(sf);
function Ns(e) {
	let t = null;
	return () => {
		const n = () => {
			t = null;
		};
		return t === null ? ((t = e), n) : !1;
	};
}
const Po = Ns('dragHorizontal'),
	To = Ns('dragVertical');
function Fs(e) {
	let t = !1;
	if (e === 'y') t = To();
	else if (e === 'x') t = Po();
	else {
		const n = Po(),
			r = To();
		n && r
			? (t = () => {
					n(), r();
			  })
			: (n && n(), r && r());
	}
	return t;
}
function Os() {
	const e = Fs(!0);
	return e ? (e(), !1) : !0;
}
class Fe {
	constructor(t) {
		(this.isMounted = !1), (this.node = t);
	}
	update() {}
}
function So(e, t) {
	const n = 'pointer' + (t ? 'enter' : 'leave'),
		r = 'onHover' + (t ? 'Start' : 'End'),
		o = (s, i) => {
			if (s.type === 'touch' || Os()) return;
			const a = e.getProps();
			e.animationState && a.whileHover && e.animationState.setActive('whileHover', t),
				a[r] && H.update(() => a[r](s, i));
		};
	return Te(e.current, n, o, { passive: !e.getProps()[r] });
}
class af extends Fe {
	mount() {
		this.unmount = ke(So(this.node, !0), So(this.node, !1));
	}
	unmount() {}
}
class lf extends Fe {
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
		this.unmount = ke(
			we(this.node.current, 'focus', () => this.onFocus()),
			we(this.node.current, 'blur', () => this.onBlur())
		);
	}
	unmount() {}
}
const Is = (e, t) => (t ? (e === t ? !0 : Is(e, t.parentElement)) : !1);
function Mn(e, t) {
	if (!t) return;
	const n = new PointerEvent('pointer' + e);
	t(n, bn(n));
}
class uf extends Fe {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = ee),
			(this.removeEndListeners = ee),
			(this.removeAccessibleListeners = ee),
			(this.startPointerPress = (t, n) => {
				if ((this.removeEndListeners(), this.isPressing)) return;
				const r = this.node.getProps(),
					s = Te(
						window,
						'pointerup',
						(a, l) => {
							if (!this.checkPressEnd()) return;
							const { onTap: u, onTapCancel: c } = this.node.getProps();
							H.update(() => {
								Is(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
							});
						},
						{ passive: !(r.onTap || r.onPointerUp) }
					),
					i = Te(window, 'pointercancel', (a, l) => this.cancelPress(a, l), {
						passive: !(r.onTapCancel || r.onPointerCancel),
					});
				(this.removeEndListeners = ke(s, i)), this.startPress(t, n);
			}),
			(this.startAccessiblePress = () => {
				const t = (s) => {
						if (s.key !== 'Enter' || this.isPressing) return;
						const i = (a) => {
							a.key !== 'Enter' ||
								!this.checkPressEnd() ||
								Mn('up', (l, u) => {
									const { onTap: c } = this.node.getProps();
									c && H.update(() => c(l, u));
								});
						};
						this.removeEndListeners(),
							(this.removeEndListeners = we(this.node.current, 'keyup', i)),
							Mn('down', (a, l) => {
								this.startPress(a, l);
							});
					},
					n = we(this.node.current, 'keydown', t),
					r = () => {
						this.isPressing && Mn('cancel', (s, i) => this.cancelPress(s, i));
					},
					o = we(this.node.current, 'blur', r);
				this.removeAccessibleListeners = ke(n, o);
			});
	}
	startPress(t, n) {
		this.isPressing = !0;
		const { onTapStart: r, whileTap: o } = this.node.getProps();
		o && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
			r && H.update(() => r(t, n));
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap &&
				this.node.animationState &&
				this.node.animationState.setActive('whileTap', !1),
			!Os()
		);
	}
	cancelPress(t, n) {
		if (!this.checkPressEnd()) return;
		const { onTapCancel: r } = this.node.getProps();
		r && H.update(() => r(t, n));
	}
	mount() {
		const t = this.node.getProps(),
			n = Te(this.node.current, 'pointerdown', this.startPointerPress, {
				passive: !(t.onTapStart || t.onPointerStart),
			}),
			r = we(this.node.current, 'focus', this.startAccessiblePress);
		this.removeStartListeners = ke(n, r);
	}
	unmount() {
		this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
	}
}
const sr = new WeakMap(),
	kn = new WeakMap(),
	cf = (e) => {
		const t = sr.get(e.target);
		t && t(e);
	},
	ff = (e) => {
		e.forEach(cf);
	};
function df({ root: e, ...t }) {
	const n = e || document;
	kn.has(n) || kn.set(n, {});
	const r = kn.get(n),
		o = JSON.stringify(t);
	return r[o] || (r[o] = new IntersectionObserver(ff, { root: e, ...t })), r[o];
}
function hf(e, t, n) {
	const r = df(t);
	return (
		sr.set(e, n),
		r.observe(e),
		() => {
			sr.delete(e), r.unobserve(e);
		}
	);
}
const pf = { some: 0, all: 1 };
class mf extends Fe {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
	}
	startObserver() {
		this.unmount();
		const { viewport: t = {} } = this.node.getProps(),
			{ root: n, margin: r, amount: o = 'some', once: s } = t,
			i = {
				root: n ? n.current : void 0,
				rootMargin: r,
				threshold: typeof o == 'number' ? o : pf[o],
			},
			a = (l) => {
				const { isIntersecting: u } = l;
				if (this.isInView === u || ((this.isInView = u), s && !u && this.hasEnteredView)) return;
				u && (this.hasEnteredView = !0),
					this.node.animationState && this.node.animationState.setActive('whileInView', u);
				const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
					d = u ? c : f;
				d && d(l);
			};
		return hf(this.node.current, i, a);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > 'u') return;
		const { props: t, prevProps: n } = this.node;
		['amount', 'margin', 'root'].some(gf(t, n)) && this.startObserver();
	}
	unmount() {}
}
function gf({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
const vf = {
	inView: { Feature: mf },
	tap: { Feature: uf },
	focus: { Feature: lf },
	hover: { Feature: af },
};
function js(e, t) {
	if (!Array.isArray(t)) return !1;
	const n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
function yf(e) {
	const t = {};
	return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function bf(e) {
	const t = {};
	return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function xn(e, t, n) {
	const r = e.getProps();
	return Or(r, t, n !== void 0 ? n : r.custom, yf(e), bf(e));
}
const xf = 'framerAppearId',
	wf = 'data-' + Nr(xf);
let Pf = ee,
	Ir = ee;
const Ve = (e) => e * 1e3,
	Se = (e) => e / 1e3,
	Tf = { current: !1 },
	Bs = (e) => Array.isArray(e) && typeof e[0] == 'number';
function _s(e) {
	return !!(!e || (typeof e == 'string' && Ws[e]) || Bs(e) || (Array.isArray(e) && e.every(_s)));
}
const xt = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
	Ws = {
		linear: 'linear',
		ease: 'ease',
		easeIn: 'ease-in',
		easeOut: 'ease-out',
		easeInOut: 'ease-in-out',
		circIn: xt([0, 0.65, 0.55, 1]),
		circOut: xt([0.55, 0, 1, 0.45]),
		backIn: xt([0.31, 0.01, 0.66, -0.59]),
		backOut: xt([0.33, 1.53, 0.69, 0.99]),
	};
function Ks(e) {
	if (e) return Bs(e) ? xt(e) : Array.isArray(e) ? e.map(Ks) : Ws[e];
}
function Sf(
	e,
	t,
	n,
	{ delay: r = 0, duration: o, repeat: s = 0, repeatType: i = 'loop', ease: a, times: l } = {}
) {
	const u = { [t]: n };
	l && (u.offset = l);
	const c = Ks(a);
	return (
		Array.isArray(c) && (u.easing = c),
		e.animate(u, {
			delay: r,
			duration: o,
			easing: Array.isArray(c) ? 'linear' : c,
			fill: 'both',
			iterations: s + 1,
			direction: i === 'reverse' ? 'alternate' : 'normal',
		})
	);
}
function Cf(e, { repeat: t, repeatType: n = 'loop' }) {
	const r = t && n !== 'loop' && t % 2 === 1 ? 0 : e.length - 1;
	return e[r];
}
const zs = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	Ef = 1e-7,
	$f = 12;
function Af(e, t, n, r, o) {
	let s,
		i,
		a = 0;
	do (i = t + (n - t) / 2), (s = zs(i, r, o) - e), s > 0 ? (n = i) : (t = i);
	while (Math.abs(s) > Ef && ++a < $f);
	return i;
}
function Rt(e, t, n, r) {
	if (e === t && n === r) return ee;
	const o = (s) => Af(s, 0, 1, e, n);
	return (s) => (s === 0 || s === 1 ? s : zs(o(s), t, r));
}
const Mf = Rt(0.42, 0, 1, 1),
	kf = Rt(0, 0, 0.58, 1),
	Us = Rt(0.42, 0, 0.58, 1),
	Vf = (e) => Array.isArray(e) && typeof e[0] != 'number',
	Hs = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
	Gs = (e) => (t) => 1 - e(1 - t),
	Ys = (e) => 1 - Math.sin(Math.acos(e)),
	jr = Gs(Ys),
	Rf = Hs(jr),
	Xs = Rt(0.33, 1.53, 0.69, 0.99),
	Br = Gs(Xs),
	Lf = Hs(Br),
	Df = (e) => ((e *= 2) < 1 ? 0.5 * Br(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
	Nf = {
		linear: ee,
		easeIn: Mf,
		easeInOut: Us,
		easeOut: kf,
		circIn: Ys,
		circInOut: Rf,
		circOut: jr,
		backIn: Br,
		backInOut: Lf,
		backOut: Xs,
		anticipate: Df,
	},
	Co = (e) => {
		if (Array.isArray(e)) {
			Ir(e.length === 4);
			const [t, n, r, o] = e;
			return Rt(t, n, r, o);
		} else if (typeof e == 'string') return Nf[e];
		return e;
	},
	_r = (e, t) => (n) =>
		!!(
			(kt(n) && Lc.test(n) && n.startsWith(e)) ||
			(t && Object.prototype.hasOwnProperty.call(n, t))
		),
	qs = (e, t, n) => (r) => {
		if (!kt(r)) return r;
		const [o, s, i, a] = r.match(yn);
		return {
			[e]: parseFloat(o),
			[t]: parseFloat(s),
			[n]: parseFloat(i),
			alpha: a !== void 0 ? parseFloat(a) : 1,
		};
	},
	Ff = (e) => Re(0, 255, e),
	Vn = { ...qe, transform: (e) => Math.round(Ff(e)) },
	He = {
		test: _r('rgb', 'red'),
		parse: qs('red', 'green', 'blue'),
		transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
			'rgba(' +
			Vn.transform(e) +
			', ' +
			Vn.transform(t) +
			', ' +
			Vn.transform(n) +
			', ' +
			Pt(wt.transform(r)) +
			')',
	};
function Of(e) {
	let t = '',
		n = '',
		r = '',
		o = '';
	return (
		e.length > 5
			? ((t = e.substring(1, 3)),
			  (n = e.substring(3, 5)),
			  (r = e.substring(5, 7)),
			  (o = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (n = e.substring(2, 3)),
			  (r = e.substring(3, 4)),
			  (o = e.substring(4, 5)),
			  (t += t),
			  (n += n),
			  (r += r),
			  (o += o)),
		{
			red: parseInt(t, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: o ? parseInt(o, 16) / 255 : 1,
		}
	);
}
const ar = { test: _r('#'), parse: Of, transform: He.transform },
	st = {
		test: _r('hsl', 'hue'),
		parse: qs('hue', 'saturation', 'lightness'),
		transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
			'hsla(' +
			Math.round(e) +
			', ' +
			ye.transform(Pt(t)) +
			', ' +
			ye.transform(Pt(n)) +
			', ' +
			Pt(wt.transform(r)) +
			')',
	},
	ae = {
		test: (e) => He.test(e) || ar.test(e) || st.test(e),
		parse: (e) => (He.test(e) ? He.parse(e) : st.test(e) ? st.parse(e) : ar.parse(e)),
		transform: (e) => (kt(e) ? e : e.hasOwnProperty('red') ? He.transform(e) : st.transform(e)),
	},
	Z = (e, t, n) => -n * e + n * t + e;
function Rn(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
	);
}
function If({ hue: e, saturation: t, lightness: n, alpha: r }) {
	(e /= 360), (t /= 100), (n /= 100);
	let o = 0,
		s = 0,
		i = 0;
	if (!t) o = s = i = n;
	else {
		const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
			l = 2 * n - a;
		(o = Rn(l, a, e + 1 / 3)), (s = Rn(l, a, e)), (i = Rn(l, a, e - 1 / 3));
	}
	return {
		red: Math.round(o * 255),
		green: Math.round(s * 255),
		blue: Math.round(i * 255),
		alpha: r,
	};
}
const Ln = (e, t, n) => {
		const r = e * e;
		return Math.sqrt(Math.max(0, n * (t * t - r) + r));
	},
	jf = [ar, He, st],
	Bf = (e) => jf.find((t) => t.test(e));
function Eo(e) {
	const t = Bf(e);
	let n = t.parse(e);
	return t === st && (n = If(n)), n;
}
const Zs = (e, t) => {
	const n = Eo(e),
		r = Eo(t),
		o = { ...n };
	return (s) => (
		(o.red = Ln(n.red, r.red, s)),
		(o.green = Ln(n.green, r.green, s)),
		(o.blue = Ln(n.blue, r.blue, s)),
		(o.alpha = Z(n.alpha, r.alpha, s)),
		He.transform(o)
	);
};
function _f(e) {
	var t, n;
	return (
		isNaN(e) &&
		kt(e) &&
		(((t = e.match(yn)) === null || t === void 0 ? void 0 : t.length) || 0) +
			(((n = e.match(Ts)) === null || n === void 0 ? void 0 : n.length) || 0) >
			0
	);
}
const Js = { regex: Vc, countKey: 'Vars', token: '${v}', parse: ee },
	Qs = { regex: Ts, countKey: 'Colors', token: '${c}', parse: ae.parse },
	ea = { regex: yn, countKey: 'Numbers', token: '${n}', parse: qe.parse };
function Dn(e, { regex: t, countKey: n, token: r, parse: o }) {
	const s = e.tokenised.match(t);
	s &&
		((e['num' + n] = s.length),
		(e.tokenised = e.tokenised.replace(t, r)),
		e.values.push(...s.map(o)));
}
function sn(e) {
	const t = e.toString(),
		n = { value: t, tokenised: t, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
	return n.value.includes('var(--') && Dn(n, Js), Dn(n, Qs), Dn(n, ea), n;
}
function ta(e) {
	return sn(e).values;
}
function na(e) {
	const { values: t, numColors: n, numVars: r, tokenised: o } = sn(e),
		s = t.length;
	return (i) => {
		let a = o;
		for (let l = 0; l < s; l++)
			l < r
				? (a = a.replace(Js.token, i[l]))
				: l < r + n
				? (a = a.replace(Qs.token, ae.transform(i[l])))
				: (a = a.replace(ea.token, Pt(i[l])));
		return a;
	};
}
const Wf = (e) => (typeof e == 'number' ? 0 : e);
function Kf(e) {
	const t = ta(e);
	return na(e)(t.map(Wf));
}
const Le = { test: _f, parse: ta, createTransformer: na, getAnimatableNone: Kf },
	ra = (e, t) => (n) => `${n > 0 ? t : e}`;
function oa(e, t) {
	return typeof e == 'number'
		? (n) => Z(e, t, n)
		: ae.test(e)
		? Zs(e, t)
		: e.startsWith('var(')
		? ra(e, t)
		: sa(e, t);
}
const ia = (e, t) => {
		const n = [...e],
			r = n.length,
			o = e.map((s, i) => oa(s, t[i]));
		return (s) => {
			for (let i = 0; i < r; i++) n[i] = o[i](s);
			return n;
		};
	},
	zf = (e, t) => {
		const n = { ...e, ...t },
			r = {};
		for (const o in n) e[o] !== void 0 && t[o] !== void 0 && (r[o] = oa(e[o], t[o]));
		return (o) => {
			for (const s in r) n[s] = r[s](o);
			return n;
		};
	},
	sa = (e, t) => {
		const n = Le.createTransformer(t),
			r = sn(e),
			o = sn(t);
		return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers
			? ke(ia(r.values, o.values), n)
			: ra(e, t);
	},
	At = (e, t, n) => {
		const r = t - e;
		return r === 0 ? 1 : (n - e) / r;
	},
	$o = (e, t) => (n) => Z(e, t, n);
function Uf(e) {
	return typeof e == 'number'
		? $o
		: typeof e == 'string'
		? ae.test(e)
			? Zs
			: sa
		: Array.isArray(e)
		? ia
		: typeof e == 'object'
		? zf
		: $o;
}
function Hf(e, t, n) {
	const r = [],
		o = n || Uf(e[0]),
		s = e.length - 1;
	for (let i = 0; i < s; i++) {
		let a = o(e[i], e[i + 1]);
		if (t) {
			const l = Array.isArray(t) ? t[i] || ee : t;
			a = ke(l, a);
		}
		r.push(a);
	}
	return r;
}
function aa(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
	const s = e.length;
	if ((Ir(s === t.length), s === 1)) return () => t[0];
	e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
	const i = Hf(t, r, o),
		a = i.length,
		l = (u) => {
			let c = 0;
			if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
			const f = At(e[c], e[c + 1], u);
			return i[c](f);
		};
	return n ? (u) => l(Re(e[0], e[s - 1], u)) : l;
}
function Gf(e, t) {
	const n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		const o = At(0, t, r);
		e.push(Z(n, 1, o));
	}
}
function Yf(e) {
	const t = [0];
	return Gf(t, e.length - 1), t;
}
function Xf(e, t) {
	return e.map((n) => n * t);
}
function qf(e, t) {
	return e.map(() => t || Us).splice(0, e.length - 1);
}
function an({ duration: e = 300, keyframes: t, times: n, ease: r = 'easeInOut' }) {
	const o = Vf(r) ? r.map(Co) : Co(r),
		s = { done: !1, value: t[0] },
		i = Xf(n && n.length === t.length ? n : Yf(t), e),
		a = aa(i, t, { ease: Array.isArray(o) ? o : qf(t, o) });
	return { calculatedDuration: e, next: (l) => ((s.value = a(l)), (s.done = l >= e), s) };
}
function la(e, t) {
	return t ? e * (1e3 / t) : 0;
}
const Zf = 5;
function ua(e, t, n) {
	const r = Math.max(t - Zf, 0);
	return la(n - e(r), t - r);
}
const Nn = 0.001,
	Jf = 0.01,
	Ao = 10,
	Qf = 0.05,
	ed = 1;
function td({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
	let o, s;
	Pf(e <= Ve(Ao));
	let i = 1 - t;
	(i = Re(Qf, ed, i)),
		(e = Re(Jf, Ao, Se(e))),
		i < 1
			? ((o = (u) => {
					const c = u * i,
						f = c * e,
						d = c - n,
						h = lr(u, i),
						v = Math.exp(-f);
					return Nn - (d / h) * v;
			  }),
			  (s = (u) => {
					const f = u * i * e,
						d = f * n + n,
						h = Math.pow(i, 2) * Math.pow(u, 2) * e,
						v = Math.exp(-f),
						y = lr(Math.pow(u, 2), i);
					return ((-o(u) + Nn > 0 ? -1 : 1) * ((d - h) * v)) / y;
			  }))
			: ((o = (u) => {
					const c = Math.exp(-u * e),
						f = (u - n) * e + 1;
					return -Nn + c * f;
			  }),
			  (s = (u) => {
					const c = Math.exp(-u * e),
						f = (n - u) * (e * e);
					return c * f;
			  }));
	const a = 5 / e,
		l = rd(o, s, a);
	if (((e = Ve(e)), isNaN(l))) return { stiffness: 100, damping: 10, duration: e };
	{
		const u = Math.pow(l, 2) * r;
		return { stiffness: u, damping: i * 2 * Math.sqrt(r * u), duration: e };
	}
}
const nd = 12;
function rd(e, t, n) {
	let r = n;
	for (let o = 1; o < nd; o++) r = r - e(r) / t(r);
	return r;
}
function lr(e, t) {
	return e * Math.sqrt(1 - t * t);
}
const od = ['duration', 'bounce'],
	id = ['stiffness', 'damping', 'mass'];
function Mo(e, t) {
	return t.some((n) => e[n] !== void 0);
}
function sd(e) {
	let t = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...e };
	if (!Mo(e, id) && Mo(e, od)) {
		const n = td(e);
		(t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
	}
	return t;
}
function ca({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
	const o = e[0],
		s = e[e.length - 1],
		i = { done: !1, value: o },
		{
			stiffness: a,
			damping: l,
			mass: u,
			velocity: c,
			duration: f,
			isResolvedFromDuration: d,
		} = sd(r),
		h = c ? -Se(c) : 0,
		v = l / (2 * Math.sqrt(a * u)),
		y = s - o,
		b = Se(Math.sqrt(a / u)),
		C = Math.abs(y) < 5;
	n || (n = C ? 0.01 : 2), t || (t = C ? 0.005 : 0.5);
	let S;
	if (v < 1) {
		const w = lr(b, v);
		S = (A) => {
			const M = Math.exp(-v * b * A);
			return s - M * (((h + v * b * y) / w) * Math.sin(w * A) + y * Math.cos(w * A));
		};
	} else if (v === 1) S = (w) => s - Math.exp(-b * w) * (y + (h + b * y) * w);
	else {
		const w = b * Math.sqrt(v * v - 1);
		S = (A) => {
			const M = Math.exp(-v * b * A),
				N = Math.min(w * A, 300);
			return s - (M * ((h + v * b * y) * Math.sinh(N) + w * y * Math.cosh(N))) / w;
		};
	}
	return {
		calculatedDuration: (d && f) || null,
		next: (w) => {
			const A = S(w);
			if (d) i.done = w >= f;
			else {
				let M = h;
				w !== 0 && (v < 1 ? (M = ua(S, w, A)) : (M = 0));
				const N = Math.abs(M) <= n,
					D = Math.abs(s - A) <= t;
				i.done = N && D;
			}
			return (i.value = i.done ? s : A), i;
		},
	};
}
function ko({
	keyframes: e,
	velocity: t = 0,
	power: n = 0.8,
	timeConstant: r = 325,
	bounceDamping: o = 10,
	bounceStiffness: s = 500,
	modifyTarget: i,
	min: a,
	max: l,
	restDelta: u = 0.5,
	restSpeed: c,
}) {
	const f = e[0],
		d = { done: !1, value: f },
		h = (p) => (a !== void 0 && p < a) || (l !== void 0 && p > l),
		v = (p) => (a === void 0 ? l : l === void 0 || Math.abs(a - p) < Math.abs(l - p) ? a : l);
	let y = n * t;
	const b = f + y,
		C = i === void 0 ? b : i(b);
	C !== b && (y = C - f);
	const S = (p) => -y * Math.exp(-p / r),
		w = (p) => C + S(p),
		A = (p) => {
			const k = S(p),
				_ = w(p);
			(d.done = Math.abs(k) <= u), (d.value = d.done ? C : _);
		};
	let M, N;
	const D = (p) => {
		h(d.value) &&
			((M = p),
			(N = ca({
				keyframes: [d.value, v(d.value)],
				velocity: ua(w, p, d.value),
				damping: o,
				stiffness: s,
				restDelta: u,
				restSpeed: c,
			})));
	};
	return (
		D(0),
		{
			calculatedDuration: null,
			next: (p) => {
				let k = !1;
				return (
					!N && M === void 0 && ((k = !0), A(p), D(p)),
					M !== void 0 && p > M ? N.next(p - M) : (!k && A(p), d)
				);
			},
		}
	);
}
const ad = (e) => {
		const t = ({ timestamp: n }) => e(n);
		return {
			start: () => H.update(t, !0),
			stop: () => Ce(t),
			now: () => (re.isProcessing ? re.timestamp : performance.now()),
		};
	},
	Vo = 2e4;
function Ro(e) {
	let t = 0;
	const n = 50;
	let r = e.next(t);
	for (; !r.done && t < Vo; ) (t += n), (r = e.next(t));
	return t >= Vo ? 1 / 0 : t;
}
const ld = { decay: ko, inertia: ko, tween: an, keyframes: an, spring: ca };
function ln({
	autoplay: e = !0,
	delay: t = 0,
	driver: n = ad,
	keyframes: r,
	type: o = 'keyframes',
	repeat: s = 0,
	repeatDelay: i = 0,
	repeatType: a = 'loop',
	onPlay: l,
	onStop: u,
	onComplete: c,
	onUpdate: f,
	...d
}) {
	let h = 1,
		v = !1,
		y,
		b;
	const C = () => {
		b = new Promise((g) => {
			y = g;
		});
	};
	C();
	let S;
	const w = ld[o] || an;
	let A;
	w !== an && typeof r[0] != 'number' && ((A = aa([0, 100], r, { clamp: !1 })), (r = [0, 100]));
	const M = w({ ...d, keyframes: r });
	let N;
	a === 'mirror' && (N = w({ ...d, keyframes: [...r].reverse(), velocity: -(d.velocity || 0) }));
	let D = 'idle',
		p = null,
		k = null,
		_ = null;
	M.calculatedDuration === null && s && (M.calculatedDuration = Ro(M));
	const { calculatedDuration: T } = M;
	let E = 1 / 0,
		x = 1 / 0;
	T !== null && ((E = T + i), (x = E * (s + 1) - i));
	let P = 0;
	const V = (g) => {
			if (k === null) return;
			h > 0 && (k = Math.min(k, g)),
				h < 0 && (k = Math.min(g - x / h, k)),
				p !== null ? (P = p) : (P = Math.round(g - k) * h);
			const $ = P - t * (h >= 0 ? 1 : -1),
				L = h >= 0 ? $ < 0 : $ > x;
			(P = Math.max($, 0)), D === 'finished' && p === null && (P = x);
			let K = P,
				z = M;
			if (s) {
				const G = P / E;
				let oe = Math.floor(G),
					Oe = G % 1;
				!Oe && G >= 1 && (Oe = 1), Oe === 1 && oe--, (oe = Math.min(oe, s + 1));
				const Gr = !!(oe % 2);
				Gr && (a === 'reverse' ? ((Oe = 1 - Oe), i && (Oe -= i / E)) : a === 'mirror' && (z = N));
				let Yr = Re(0, 1, Oe);
				P > x && (Yr = a === 'reverse' && Gr ? 1 : 0), (K = Yr * E);
			}
			const U = L ? { done: !1, value: r[0] } : z.next(K);
			A && (U.value = A(U.value));
			let { done: J } = U;
			!L && T !== null && (J = h >= 0 ? P >= x : P <= 0);
			const Q = p === null && (D === 'finished' || (D === 'running' && J));
			return f && f(U.value), Q && O(), U;
		},
		R = () => {
			S && S.stop(), (S = void 0);
		},
		j = () => {
			(D = 'idle'), R(), y(), C(), (k = _ = null);
		},
		O = () => {
			(D = 'finished'), c && c(), R(), y();
		},
		W = () => {
			if (v) return;
			S || (S = n(V));
			const g = S.now();
			l && l(),
				p !== null ? (k = g - p) : (!k || D === 'finished') && (k = g),
				D === 'finished' && C(),
				(_ = k),
				(p = null),
				(D = 'running'),
				S.start();
		};
	e && W();
	const fe = {
		then(g, $) {
			return b.then(g, $);
		},
		get time() {
			return Se(P);
		},
		set time(g) {
			(g = Ve(g)), (P = g), p !== null || !S || h === 0 ? (p = g) : (k = S.now() - g / h);
		},
		get duration() {
			const g = M.calculatedDuration === null ? Ro(M) : M.calculatedDuration;
			return Se(g);
		},
		get speed() {
			return h;
		},
		set speed(g) {
			g === h || !S || ((h = g), (fe.time = Se(P)));
		},
		get state() {
			return D;
		},
		play: W,
		pause: () => {
			(D = 'paused'), (p = P);
		},
		stop: () => {
			(v = !0), D !== 'idle' && ((D = 'idle'), u && u(), j());
		},
		cancel: () => {
			_ !== null && V(_), j();
		},
		complete: () => {
			D = 'finished';
		},
		sample: (g) => ((k = 0), V(g)),
	};
	return fe;
}
function ud(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
const cd = ud(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
	fd = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
	Bt = 10,
	dd = 2e4,
	hd = (e, t) => t.type === 'spring' || e === 'backgroundColor' || !_s(t.ease);
function pd(e, t, { onUpdate: n, onComplete: r, ...o }) {
	if (
		!(
			cd() &&
			fd.has(t) &&
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
		l = new Promise((S) => {
			a = S;
		});
	};
	u();
	let { keyframes: c, duration: f = 300, ease: d, times: h } = o;
	if (hd(t, o)) {
		const S = ln({ ...o, repeat: 0, delay: 0 });
		let w = { done: !1, value: c[0] };
		const A = [];
		let M = 0;
		for (; !w.done && M < dd; ) (w = S.sample(M)), A.push(w.value), (M += Bt);
		(h = void 0), (c = A), (f = M - Bt), (d = 'linear');
	}
	const v = Sf(e.owner.current, t, c, { ...o, duration: f, ease: d, times: h });
	o.syncStart &&
		(v.startTime = re.isProcessing
			? re.timestamp
			: document.timeline
			? document.timeline.currentTime
			: performance.now());
	const y = () => v.cancel(),
		b = () => {
			H.update(y), a(), u();
		};
	return (
		(v.onfinish = () => {
			e.set(Cf(c, o)), r && r(), b();
		}),
		{
			then(S, w) {
				return l.then(S, w);
			},
			attachTimeline(S) {
				return (v.timeline = S), (v.onfinish = null), ee;
			},
			get time() {
				return Se(v.currentTime || 0);
			},
			set time(S) {
				v.currentTime = Ve(S);
			},
			get speed() {
				return v.playbackRate;
			},
			set speed(S) {
				v.playbackRate = S;
			},
			get duration() {
				return Se(f);
			},
			play: () => {
				i || (v.play(), Ce(y));
			},
			pause: () => v.pause(),
			stop: () => {
				if (((i = !0), v.playState === 'idle')) return;
				const { currentTime: S } = v;
				if (S) {
					const w = ln({ ...o, autoplay: !1 });
					e.setWithVelocity(w.sample(S - Bt).value, w.sample(S).value, Bt);
				}
				b();
			},
			complete: () => v.finish(),
			cancel: b,
		}
	);
}
function md({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
	const o = () => (
		n && n(e[e.length - 1]),
		r && r(),
		{
			time: 0,
			speed: 1,
			duration: 0,
			play: ee,
			pause: ee,
			stop: ee,
			then: (s) => (s(), Promise.resolve()),
			cancel: ee,
			complete: ee,
		}
	);
	return t ? ln({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o }) : o();
}
const gd = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
	vd = (e) => ({
		type: 'spring',
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	yd = { type: 'keyframes', duration: 0.8 },
	bd = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	xd = (e, { keyframes: t }) =>
		t.length > 2 ? yd : Xe.has(e) ? (e.startsWith('scale') ? vd(t[1]) : gd) : bd,
	ur = (e, t) =>
		e === 'zIndex'
			? !1
			: !!(
					typeof t == 'number' ||
					Array.isArray(t) ||
					(typeof t == 'string' && (Le.test(t) || t === '0') && !t.startsWith('url('))
			  ),
	wd = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function Pd(e) {
	const [t, n] = e.slice(0, -1).split('(');
	if (t === 'drop-shadow') return e;
	const [r] = n.match(yn) || [];
	if (!r) return e;
	const o = n.replace(r, '');
	let s = wd.has(t) ? 1 : 0;
	return r !== n && (s *= 100), t + '(' + s + o + ')';
}
const Td = /([a-z-]*)\(.*?\)/g,
	cr = {
		...Le,
		getAnimatableNone: (e) => {
			const t = e.match(Td);
			return t ? t.map(Pd).join(' ') : e;
		},
	},
	Sd = {
		...Ss,
		color: ae,
		backgroundColor: ae,
		outlineColor: ae,
		fill: ae,
		stroke: ae,
		borderColor: ae,
		borderTopColor: ae,
		borderRightColor: ae,
		borderBottomColor: ae,
		borderLeftColor: ae,
		filter: cr,
		WebkitFilter: cr,
	},
	Wr = (e) => Sd[e];
function fa(e, t) {
	let n = Wr(e);
	return n !== cr && (n = Le), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const da = (e) => /^0[^.\s]+$/.test(e);
function Cd(e) {
	if (typeof e == 'number') return e === 0;
	if (e !== null) return e === 'none' || e === '0' || da(e);
}
function Ed(e, t, n, r) {
	const o = ur(t, n);
	let s;
	Array.isArray(n) ? (s = [...n]) : (s = [null, n]);
	const i = r.from !== void 0 ? r.from : e.get();
	let a;
	const l = [];
	for (let u = 0; u < s.length; u++)
		s[u] === null && (s[u] = u === 0 ? i : s[u - 1]),
			Cd(s[u]) && l.push(u),
			typeof s[u] == 'string' && s[u] !== 'none' && s[u] !== '0' && (a = s[u]);
	if (o && l.length && a)
		for (let u = 0; u < l.length; u++) {
			const c = l[u];
			s[c] = fa(t, a);
		}
	return s;
}
function $d({
	when: e,
	delay: t,
	delayChildren: n,
	staggerChildren: r,
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
function ha(e, t) {
	return e[t] || e.default || e;
}
const Kr =
	(e, t, n, r = {}) =>
	(o) => {
		const s = ha(r, e) || {},
			i = s.delay || r.delay || 0;
		let { elapsed: a = 0 } = r;
		a = a - Ve(i);
		const l = Ed(t, e, n, s),
			u = l[0],
			c = l[l.length - 1],
			f = ur(e, u),
			d = ur(e, c);
		let h = {
			keyframes: l,
			velocity: t.getVelocity(),
			ease: 'easeOut',
			...s,
			delay: -a,
			onUpdate: (v) => {
				t.set(v), s.onUpdate && s.onUpdate(v);
			},
			onComplete: () => {
				o(), s.onComplete && s.onComplete();
			},
		};
		if (
			($d(s) || (h = { ...h, ...xd(e, h) }),
			h.duration && (h.duration = Ve(h.duration)),
			h.repeatDelay && (h.repeatDelay = Ve(h.repeatDelay)),
			!f || !d || Tf.current || s.type === !1)
		)
			return md(h);
		if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
			const v = pd(t, e, h);
			if (v) return v;
		}
		return ln(h);
	};
function un(e) {
	return !!(ce(e) && e.add);
}
const pa = (e) => /^\-?\d*\.?\d+$/.test(e);
function zr(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function Ur(e, t) {
	const n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
class Hr {
	constructor() {
		this.subscriptions = [];
	}
	add(t) {
		return zr(this.subscriptions, t), () => Ur(this.subscriptions, t);
	}
	notify(t, n, r) {
		const o = this.subscriptions.length;
		if (o)
			if (o === 1) this.subscriptions[0](t, n, r);
			else
				for (let s = 0; s < o; s++) {
					const i = this.subscriptions[s];
					i && i(t, n, r);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const Ad = (e) => !isNaN(parseFloat(e));
class Md {
	constructor(t, n = {}) {
		(this.version = '10.16.4'),
			(this.timeDelta = 0),
			(this.lastUpdated = 0),
			(this.canTrackVelocity = !1),
			(this.events = {}),
			(this.updateAndNotify = (r, o = !0) => {
				(this.prev = this.current), (this.current = r);
				const { delta: s, timestamp: i } = re;
				this.lastUpdated !== i &&
					((this.timeDelta = s), (this.lastUpdated = i), H.postRender(this.scheduleVelocityCheck)),
					this.prev !== this.current &&
						this.events.change &&
						this.events.change.notify(this.current),
					this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
					o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
			}),
			(this.scheduleVelocityCheck = () => H.postRender(this.velocityCheck)),
			(this.velocityCheck = ({ timestamp: r }) => {
				r !== this.lastUpdated &&
					((this.prev = this.current),
					this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
			}),
			(this.hasAnimated = !1),
			(this.prev = this.current = t),
			(this.canTrackVelocity = Ad(this.current)),
			(this.owner = n.owner);
	}
	onChange(t) {
		return this.on('change', t);
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new Hr());
		const r = this.events[t].add(n);
		return t === 'change'
			? () => {
					r(),
						H.read(() => {
							this.events.change.getSize() || this.stop();
						});
			  }
			: r;
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear();
	}
	attach(t, n) {
		(this.passiveEffect = t), (this.stopPassiveEffect = n);
	}
	set(t, n = !0) {
		!n || !this.passiveEffect
			? this.updateAndNotify(t, n)
			: this.passiveEffect(t, this.updateAndNotify);
	}
	setWithVelocity(t, n, r) {
		this.set(n), (this.prev = t), (this.timeDelta = r);
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
			? la(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
			: 0;
	}
	start(t) {
		return (
			this.stop(),
			new Promise((n) => {
				(this.hasAnimated = !0),
					(this.animation = t(n)),
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
function ct(e, t) {
	return new Md(e, t);
}
const ma = (e) => (t) => t.test(e),
	kd = { test: (e) => e === 'auto', parse: (e) => e },
	ga = [qe, F, ye, $e, Nc, Dc, kd],
	vt = (e) => ga.find(ma(e)),
	Vd = [...ga, ae, Le],
	Rd = (e) => Vd.find(ma(e));
function Ld(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ct(n));
}
function Dd(e, t) {
	const n = xn(e, t);
	let { transitionEnd: r = {}, transition: o = {}, ...s } = n ? e.makeTargetAnimatable(n, !1) : {};
	s = { ...s, ...r };
	for (const i in s) {
		const a = Xc(s[i]);
		Ld(e, i, a);
	}
}
function Nd(e, t, n) {
	var r, o;
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
						(o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0
							? o
							: t[l]),
				c != null &&
					(typeof c == 'string' && (pa(c) || da(c))
						? (c = parseFloat(c))
						: !Rd(c) && Le.test(u) && (c = fa(l, u)),
					e.addValue(l, ct(c, { owner: e })),
					n[l] === void 0 && (n[l] = c),
					c !== null && e.setBaseTarget(l, c));
		}
}
function Fd(e, t) {
	return t ? (t[e] || t.default || t).from : void 0;
}
function Od(e, t, n) {
	const r = {};
	for (const o in e) {
		const s = Fd(o, t);
		if (s !== void 0) r[o] = s;
		else {
			const i = n.getValue(o);
			i && (r[o] = i.get());
		}
	}
	return r;
}
function Id({ protectedKeys: e, needsAnimating: t }, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0;
	return (t[n] = !1), r;
}
function va(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
	let {
		transition: s = e.getDefaultTransition(),
		transitionEnd: i,
		...a
	} = e.makeTargetAnimatable(t);
	const l = e.getValue('willChange');
	r && (s = r);
	const u = [],
		c = o && e.animationState && e.animationState.getState()[o];
	for (const f in a) {
		const d = e.getValue(f),
			h = a[f];
		if (!d || h === void 0 || (c && Id(c, f))) continue;
		const v = { delay: n, elapsed: 0, ...s };
		if (window.HandoffAppearAnimations && !d.hasAnimated) {
			const b = e.getProps()[wf];
			b && ((v.elapsed = window.HandoffAppearAnimations(b, f, d, H)), (v.syncStart = !0));
		}
		d.start(Kr(f, d, h, e.shouldReduceMotion && Xe.has(f) ? { type: !1 } : v));
		const y = d.animation;
		un(l) && (l.add(f), y.then(() => l.remove(f))), u.push(y);
	}
	return (
		i &&
			Promise.all(u).then(() => {
				i && Dd(e, i);
			}),
		u
	);
}
function fr(e, t, n = {}) {
	const r = xn(e, t, n.custom);
	let { transition: o = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (o = n.transitionOverride);
	const s = r ? () => Promise.all(va(e, r, n)) : () => Promise.resolve(),
		i =
			e.variantChildren && e.variantChildren.size
				? (l = 0) => {
						const { delayChildren: u = 0, staggerChildren: c, staggerDirection: f } = o;
						return jd(e, t, u + l, c, f, n);
				  }
				: () => Promise.resolve(),
		{ when: a } = o;
	if (a) {
		const [l, u] = a === 'beforeChildren' ? [s, i] : [i, s];
		return l().then(() => u());
	} else return Promise.all([s(), i(n.delay)]);
}
function jd(e, t, n = 0, r = 0, o = 1, s) {
	const i = [],
		a = (e.variantChildren.size - 1) * r,
		l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
	return (
		Array.from(e.variantChildren)
			.sort(Bd)
			.forEach((u, c) => {
				u.notify('AnimationStart', t),
					i.push(fr(u, t, { ...s, delay: n + l(c) }).then(() => u.notify('AnimationComplete', t)));
			}),
		Promise.all(i)
	);
}
function Bd(e, t) {
	return e.sortNodePosition(t);
}
function _d(e, t, n = {}) {
	e.notify('AnimationStart', t);
	let r;
	if (Array.isArray(t)) {
		const o = t.map((s) => fr(e, s, n));
		r = Promise.all(o);
	} else if (typeof t == 'string') r = fr(e, t, n);
	else {
		const o = typeof t == 'function' ? xn(e, t, n.custom) : t;
		r = Promise.all(va(e, o, n));
	}
	return r.then(() => e.notify('AnimationComplete', t));
}
const Wd = [...$r].reverse(),
	Kd = $r.length;
function zd(e) {
	return (t) => Promise.all(t.map(({ animation: n, options: r }) => _d(e, n, r)));
}
function Ud(e) {
	let t = zd(e);
	const n = Gd();
	let r = !0;
	const o = (l, u) => {
		const c = xn(e, u);
		if (c) {
			const { transition: f, transitionEnd: d, ...h } = c;
			l = { ...l, ...h, ...d };
		}
		return l;
	};
	function s(l) {
		t = l(e);
	}
	function i(l, u) {
		const c = e.getProps(),
			f = e.getVariantContext(!0) || {},
			d = [],
			h = new Set();
		let v = {},
			y = 1 / 0;
		for (let C = 0; C < Kd; C++) {
			const S = Wd[C],
				w = n[S],
				A = c[S] !== void 0 ? c[S] : f[S],
				M = Et(A),
				N = S === u ? w.isActive : null;
			N === !1 && (y = C);
			let D = A === f[S] && A !== c[S] && M;
			if (
				(D && r && e.manuallyAnimateOnMount && (D = !1),
				(w.protectedKeys = { ...v }),
				(!w.isActive && N === null) || (!A && !w.prevProp) || gn(A) || typeof A == 'boolean')
			)
				continue;
			const p = Hd(w.prevProp, A);
			let k = p || (S === u && w.isActive && !D && M) || (C > y && M);
			const _ = Array.isArray(A) ? A : [A];
			let T = _.reduce(o, {});
			N === !1 && (T = {});
			const { prevResolvedValues: E = {} } = w,
				x = { ...E, ...T },
				P = (V) => {
					(k = !0), h.delete(V), (w.needsAnimating[V] = !0);
				};
			for (const V in x) {
				const R = T[V],
					j = E[V];
				v.hasOwnProperty(V) ||
					(R !== j
						? on(R) && on(j)
							? !js(R, j) || p
								? P(V)
								: (w.protectedKeys[V] = !0)
							: R !== void 0
							? P(V)
							: h.add(V)
						: R !== void 0 && h.has(V)
						? P(V)
						: (w.protectedKeys[V] = !0));
			}
			(w.prevProp = A),
				(w.prevResolvedValues = T),
				w.isActive && (v = { ...v, ...T }),
				r && e.blockInitialAnimation && (k = !1),
				k && !D && d.push(..._.map((V) => ({ animation: V, options: { type: S, ...l } })));
		}
		if (h.size) {
			const C = {};
			h.forEach((S) => {
				const w = e.getBaseTarget(S);
				w !== void 0 && (C[S] = w);
			}),
				d.push({ animation: C });
		}
		let b = !!d.length;
		return (
			r && c.initial === !1 && !e.manuallyAnimateOnMount && (b = !1),
			(r = !1),
			b ? t(d) : Promise.resolve()
		);
	}
	function a(l, u, c) {
		var f;
		if (n[l].isActive === u) return Promise.resolve();
		(f = e.variantChildren) === null ||
			f === void 0 ||
			f.forEach((h) => {
				var v;
				return (v = h.animationState) === null || v === void 0 ? void 0 : v.setActive(l, u);
			}),
			(n[l].isActive = u);
		const d = i(c, l);
		for (const h in n) n[h].protectedKeys = {};
		return d;
	}
	return { animateChanges: i, setActive: a, setAnimateFunction: s, getState: () => n };
}
function Hd(e, t) {
	return typeof t == 'string' ? t !== e : Array.isArray(t) ? !js(t, e) : !1;
}
function je(e = !1) {
	return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Gd() {
	return {
		animate: je(!0),
		whileInView: je(),
		whileHover: je(),
		whileTap: je(),
		whileDrag: je(),
		whileFocus: je(),
		exit: je(),
	};
}
class Yd extends Fe {
	constructor(t) {
		super(t), t.animationState || (t.animationState = Ud(t));
	}
	updateAnimationControlsSubscription() {
		const { animate: t } = this.node.getProps();
		this.unmount(), gn(t) && (this.unmount = t.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate: t } = this.node.getProps(),
			{ animate: n } = this.node.prevProps || {};
		t !== n && this.updateAnimationControlsSubscription();
	}
	unmount() {}
}
let Xd = 0;
class qd extends Fe {
	constructor() {
		super(...arguments), (this.id = Xd++);
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: t, onExitComplete: n, custom: r } = this.node.presenceContext,
			{ isPresent: o } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === o) return;
		const s = this.node.animationState.setActive('exit', !t, {
			custom: r ?? this.node.getProps().custom,
		});
		n && !t && s.then(() => n(this.id));
	}
	mount() {
		const { register: t } = this.node.presenceContext || {};
		t && (this.unmount = t(this.id));
	}
	unmount() {}
}
const Zd = { animation: { Feature: Yd }, exit: { Feature: qd } },
	Lo = (e, t) => Math.abs(e - t);
function Jd(e, t) {
	const n = Lo(e.x, t.x),
		r = Lo(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
class ya {
	constructor(t, n, { transformPagePoint: r } = {}) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const u = On(this.lastMoveEventInfo, this.history),
					c = this.startEvent !== null,
					f = Jd(u.offset, { x: 0, y: 0 }) >= 3;
				if (!c && !f) return;
				const { point: d } = u,
					{ timestamp: h } = re;
				this.history.push({ ...d, timestamp: h });
				const { onStart: v, onMove: y } = this.handlers;
				c || (v && v(this.lastMoveEvent, u), (this.startEvent = this.lastMoveEvent)),
					y && y(this.lastMoveEvent, u);
			}),
			(this.handlePointerMove = (u, c) => {
				(this.lastMoveEvent = u),
					(this.lastMoveEventInfo = Fn(c, this.transformPagePoint)),
					H.update(this.updatePoint, !0);
			}),
			(this.handlePointerUp = (u, c) => {
				if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
				const { onEnd: f, onSessionEnd: d } = this.handlers,
					h = On(
						u.type === 'pointercancel' ? this.lastMoveEventInfo : Fn(c, this.transformPagePoint),
						this.history
					);
				this.startEvent && f && f(u, h), d && d(u, h);
			}),
			!Ds(t))
		)
			return;
		(this.handlers = n), (this.transformPagePoint = r);
		const o = bn(t),
			s = Fn(o, this.transformPagePoint),
			{ point: i } = s,
			{ timestamp: a } = re;
		this.history = [{ ...i, timestamp: a }];
		const { onSessionStart: l } = n;
		l && l(t, On(s, this.history)),
			(this.removeListeners = ke(
				Te(window, 'pointermove', this.handlePointerMove),
				Te(window, 'pointerup', this.handlePointerUp),
				Te(window, 'pointercancel', this.handlePointerUp)
			));
	}
	updateHandlers(t) {
		this.handlers = t;
	}
	end() {
		this.removeListeners && this.removeListeners(), Ce(this.updatePoint);
	}
}
function Fn(e, t) {
	return t ? { point: t(e.point) } : e;
}
function Do(e, t) {
	return { x: e.x - t.x, y: e.y - t.y };
}
function On({ point: e }, t) {
	return { point: e, delta: Do(e, ba(t)), offset: Do(e, Qd(t)), velocity: eh(t, 0.1) };
}
function Qd(e) {
	return e[0];
}
function ba(e) {
	return e[e.length - 1];
}
function eh(e, t) {
	if (e.length < 2) return { x: 0, y: 0 };
	let n = e.length - 1,
		r = null;
	const o = ba(e);
	for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Ve(t))); ) n--;
	if (!r) return { x: 0, y: 0 };
	const s = Se(o.timestamp - r.timestamp);
	if (s === 0) return { x: 0, y: 0 };
	const i = { x: (o.x - r.x) / s, y: (o.y - r.y) / s };
	return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function de(e) {
	return e.max - e.min;
}
function dr(e, t = 0, n = 0.01) {
	return Math.abs(e - t) <= n;
}
function No(e, t, n, r = 0.5) {
	(e.origin = r),
		(e.originPoint = Z(t.min, t.max, e.origin)),
		(e.scale = de(n) / de(t)),
		(dr(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
		(e.translate = Z(n.min, n.max, e.origin) - e.originPoint),
		(dr(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Tt(e, t, n, r) {
	No(e.x, t.x, n.x, r ? r.originX : void 0), No(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Fo(e, t, n) {
	(e.min = n.min + t.min), (e.max = e.min + de(t));
}
function th(e, t, n) {
	Fo(e.x, t.x, n.x), Fo(e.y, t.y, n.y);
}
function Oo(e, t, n) {
	(e.min = t.min - n.min), (e.max = e.min + de(t));
}
function St(e, t, n) {
	Oo(e.x, t.x, n.x), Oo(e.y, t.y, n.y);
}
function nh(e, { min: t, max: n }, r) {
	return (
		t !== void 0 && e < t
			? (e = r ? Z(t, e, r.min) : Math.max(e, t))
			: n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)),
		e
	);
}
function Io(e, t, n) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
	};
}
function rh(e, { top: t, left: n, bottom: r, right: o }) {
	return { x: Io(e.x, n, o), y: Io(e.y, t, r) };
}
function jo(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function oh(e, t) {
	return { x: jo(e.x, t.x), y: jo(e.y, t.y) };
}
function ih(e, t) {
	let n = 0.5;
	const r = de(e),
		o = de(t);
	return (
		o > r ? (n = At(t.min, t.max - r, e.min)) : r > o && (n = At(e.min, e.max - o, t.min)),
		Re(0, 1, n)
	);
}
function sh(e, t) {
	const n = {};
	return (
		t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
	);
}
const hr = 0.35;
function ah(e = hr) {
	return (
		e === !1 ? (e = 0) : e === !0 && (e = hr),
		{ x: Bo(e, 'left', 'right'), y: Bo(e, 'top', 'bottom') }
	);
}
function Bo(e, t, n) {
	return { min: _o(e, t), max: _o(e, n) };
}
function _o(e, t) {
	return typeof e == 'number' ? e : e[t] || 0;
}
const Wo = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	at = () => ({ x: Wo(), y: Wo() }),
	Ko = () => ({ min: 0, max: 0 }),
	ne = () => ({ x: Ko(), y: Ko() });
function ge(e) {
	return [e('x'), e('y')];
}
function xa({ top: e, left: t, right: n, bottom: r }) {
	return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function lh({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function uh(e, t) {
	if (!t) return e;
	const n = t({ x: e.left, y: e.top }),
		r = t({ x: e.right, y: e.bottom });
	return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function In(e) {
	return e === void 0 || e === 1;
}
function pr({ scale: e, scaleX: t, scaleY: n }) {
	return !In(e) || !In(t) || !In(n);
}
function Be(e) {
	return pr(e) || wa(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function wa(e) {
	return zo(e.x) || zo(e.y);
}
function zo(e) {
	return e && e !== '0%';
}
function cn(e, t, n) {
	const r = e - n,
		o = t * r;
	return n + o;
}
function Uo(e, t, n, r, o) {
	return o !== void 0 && (e = cn(e, o, r)), cn(e, n, r) + t;
}
function mr(e, t = 0, n = 1, r, o) {
	(e.min = Uo(e.min, t, n, r, o)), (e.max = Uo(e.max, t, n, r, o));
}
function Pa(e, { x: t, y: n }) {
	mr(e.x, t.translate, t.scale, t.originPoint), mr(e.y, n.translate, n.scale, n.originPoint);
}
function ch(e, t, n, r = !1) {
	const o = n.length;
	if (!o) return;
	t.x = t.y = 1;
	let s, i;
	for (let a = 0; a < o; a++) {
		(s = n[a]), (i = s.projectionDelta);
		const l = s.instance;
		(l && l.style && l.style.display === 'contents') ||
			(r &&
				s.options.layoutScroll &&
				s.scroll &&
				s !== s.root &&
				lt(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
			i && ((t.x *= i.x.scale), (t.y *= i.y.scale), Pa(e, i)),
			r && Be(s.latestValues) && lt(e, s.latestValues));
	}
	(t.x = Ho(t.x)), (t.y = Ho(t.y));
}
function Ho(e) {
	return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Ae(e, t) {
	(e.min = e.min + t), (e.max = e.max + t);
}
function Go(e, t, [n, r, o]) {
	const s = t[o] !== void 0 ? t[o] : 0.5,
		i = Z(e.min, e.max, s);
	mr(e, t[n], t[r], i, t.scale);
}
const fh = ['x', 'scaleX', 'originX'],
	dh = ['y', 'scaleY', 'originY'];
function lt(e, t) {
	Go(e.x, t, fh), Go(e.y, t, dh);
}
function Ta(e, t) {
	return xa(uh(e.getBoundingClientRect(), t));
}
function hh(e, t, n) {
	const r = Ta(e, n),
		{ scroll: o } = t;
	return o && (Ae(r.x, o.offset.x), Ae(r.y, o.offset.y)), r;
}
const ph = new WeakMap();
class mh {
	constructor(t) {
		(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = ne()),
			(this.visualElement = t);
	}
	start(t, { snapToCursor: n = !1 } = {}) {
		const { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		const o = (l) => {
				this.stopAnimation(), n && this.snapToCursor(bn(l, 'page').point);
			},
			s = (l, u) => {
				const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
				if (
					c &&
					!f &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = Fs(c)),
					!this.openGlobalLock)
				)
					return;
				(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0),
						(this.visualElement.projection.target = void 0)),
					ge((v) => {
						let y = this.getAxisMotionValue(v).get() || 0;
						if (ye.test(y)) {
							const { projection: b } = this.visualElement;
							if (b && b.layout) {
								const C = b.layout.layoutBox[v];
								C && (y = de(C) * (parseFloat(y) / 100));
							}
						}
						this.originPoint[v] = y;
					}),
					d && H.update(() => d(l, u), !1, !0);
				const { animationState: h } = this.visualElement;
				h && h.setActive('whileDrag', !0);
			},
			i = (l, u) => {
				const {
					dragPropagation: c,
					dragDirectionLock: f,
					onDirectionLock: d,
					onDrag: h,
				} = this.getProps();
				if (!c && !this.openGlobalLock) return;
				const { offset: v } = u;
				if (f && this.currentDirection === null) {
					(this.currentDirection = gh(v)),
						this.currentDirection !== null && d && d(this.currentDirection);
					return;
				}
				this.updateAxis('x', u.point, v),
					this.updateAxis('y', u.point, v),
					this.visualElement.render(),
					h && h(l, u);
			},
			a = (l, u) => this.stop(l, u);
		this.panSession = new ya(
			t,
			{ onSessionStart: o, onStart: s, onMove: i, onSessionEnd: a },
			{ transformPagePoint: this.visualElement.getTransformPagePoint() }
		);
	}
	stop(t, n) {
		const r = this.isDragging;
		if ((this.cancel(), !r)) return;
		const { velocity: o } = n;
		this.startAnimation(o);
		const { onDragEnd: s } = this.getProps();
		s && H.update(() => s(t, n));
	}
	cancel() {
		this.isDragging = !1;
		const { projection: t, animationState: n } = this.visualElement;
		t && (t.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0);
		const { dragPropagation: r } = this.getProps();
		!r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
			n && n.setActive('whileDrag', !1);
	}
	updateAxis(t, n, r) {
		const { drag: o } = this.getProps();
		if (!r || !_t(t, o, this.currentDirection)) return;
		const s = this.getAxisMotionValue(t);
		let i = this.originPoint[t] + r[t];
		this.constraints && this.constraints[t] && (i = nh(i, this.constraints[t], this.elastic[t])),
			s.set(i);
	}
	resolveConstraints() {
		const { dragConstraints: t, dragElastic: n } = this.getProps(),
			{ layout: r } = this.visualElement.projection || {},
			o = this.constraints;
		t && it(t)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: t && r
			? (this.constraints = rh(r.layoutBox, t))
			: (this.constraints = !1),
			(this.elastic = ah(n)),
			o !== this.constraints &&
				r &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				ge((s) => {
					this.getAxisMotionValue(s) &&
						(this.constraints[s] = sh(r.layoutBox[s], this.constraints[s]));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
		if (!t || !it(t)) return !1;
		const r = t.current,
			{ projection: o } = this.visualElement;
		if (!o || !o.layout) return !1;
		const s = hh(r, o.root, this.visualElement.getTransformPagePoint());
		let i = oh(o.layout.layoutBox, s);
		if (n) {
			const a = n(lh(i));
			(this.hasMutatedConstraints = !!a), a && (i = xa(a));
		}
		return i;
	}
	startAnimation(t) {
		const {
				drag: n,
				dragMomentum: r,
				dragElastic: o,
				dragTransition: s,
				dragSnapToOrigin: i,
				onDragTransitionEnd: a,
			} = this.getProps(),
			l = this.constraints || {},
			u = ge((c) => {
				if (!_t(c, n, this.currentDirection)) return;
				let f = (l && l[c]) || {};
				i && (f = { min: 0, max: 0 });
				const d = o ? 200 : 1e6,
					h = o ? 40 : 1e7,
					v = {
						type: 'inertia',
						velocity: r ? t[c] : 0,
						bounceStiffness: d,
						bounceDamping: h,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...s,
						...f,
					};
				return this.startAxisValueAnimation(c, v);
			});
		return Promise.all(u).then(a);
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t);
		return r.start(Kr(t, r, 0, n));
	}
	stopAnimation() {
		ge((t) => this.getAxisMotionValue(t).stop());
	}
	getAxisMotionValue(t) {
		const n = '_drag' + t.toUpperCase(),
			r = this.visualElement.getProps(),
			o = r[n];
		return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
	}
	snapToCursor(t) {
		ge((n) => {
			const { drag: r } = this.getProps();
			if (!_t(n, r, this.currentDirection)) return;
			const { projection: o } = this.visualElement,
				s = this.getAxisMotionValue(n);
			if (o && o.layout) {
				const { min: i, max: a } = o.layout.layoutBox[n];
				s.set(t[n] - Z(i, a, 0.5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: t, dragConstraints: n } = this.getProps(),
			{ projection: r } = this.visualElement;
		if (!it(n) || !r || !this.constraints) return;
		this.stopAnimation();
		const o = { x: 0, y: 0 };
		ge((i) => {
			const a = this.getAxisMotionValue(i);
			if (a) {
				const l = a.get();
				o[i] = ih({ min: l, max: l }, this.constraints[i]);
			}
		});
		const { transformTemplate: s } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = s ? s({}, '') : 'none'),
			r.root && r.root.updateScroll(),
			r.updateLayout(),
			this.resolveConstraints(),
			ge((i) => {
				if (!_t(i, t, null)) return;
				const a = this.getAxisMotionValue(i),
					{ min: l, max: u } = this.constraints[i];
				a.set(Z(l, u, o[i]));
			});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		ph.set(this.visualElement, this);
		const t = this.visualElement.current,
			n = Te(t, 'pointerdown', (l) => {
				const { drag: u, dragListener: c = !0 } = this.getProps();
				u && c && this.start(l);
			}),
			r = () => {
				const { dragConstraints: l } = this.getProps();
				it(l) && (this.constraints = this.resolveRefConstraints());
			},
			{ projection: o } = this.visualElement,
			s = o.addEventListener('measure', r);
		o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
		const i = we(window, 'resize', () => this.scalePositionWithinConstraints()),
			a = o.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: u }) => {
				this.isDragging &&
					u &&
					(ge((c) => {
						const f = this.getAxisMotionValue(c);
						f && ((this.originPoint[c] += l[c].translate), f.set(f.get() + l[c].translate));
					}),
					this.visualElement.render());
			});
		return () => {
			i(), n(), s(), a && a();
		};
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: o = !1,
				dragConstraints: s = !1,
				dragElastic: i = hr,
				dragMomentum: a = !0,
			} = t;
		return {
			...t,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: o,
			dragConstraints: s,
			dragElastic: i,
			dragMomentum: a,
		};
	}
}
function _t(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function gh(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
class vh extends Fe {
	constructor(t) {
		super(t),
			(this.removeGroupControls = ee),
			(this.removeListeners = ee),
			(this.controls = new mh(t));
	}
	mount() {
		const { dragControls: t } = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || ee);
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}
const Yo = (e) => (t, n) => {
	e && H.update(() => e(t, n));
};
class yh extends Fe {
	constructor() {
		super(...arguments), (this.removePointerDownListener = ee);
	}
	onPointerDown(t) {
		this.session = new ya(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
		});
	}
	createPanHandlers() {
		const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
		return {
			onSessionStart: Yo(t),
			onStart: Yo(n),
			onMove: r,
			onEnd: (s, i) => {
				delete this.session, o && H.update(() => o(s, i));
			},
		};
	}
	mount() {
		this.removePointerDownListener = Te(this.node.current, 'pointerdown', (t) =>
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
function bh() {
	const e = m.useContext(pn);
	if (e === null) return [!0, null];
	const { isPresent: t, onExitComplete: n, register: r } = e,
		o = m.useId();
	return m.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
const Gt = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Xo(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const yt = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == 'string')
				if (F.test(e)) e = parseFloat(e);
				else return e;
			const n = Xo(e, t.target.x),
				r = Xo(e, t.target.y);
			return `${n}% ${r}%`;
		},
	},
	xh = {
		correct: (e, { treeScale: t, projectionDelta: n }) => {
			const r = e,
				o = Le.parse(e);
			if (o.length > 5) return r;
			const s = Le.createTransformer(e),
				i = typeof o[0] != 'number' ? 1 : 0,
				a = n.x.scale * t.x,
				l = n.y.scale * t.y;
			(o[0 + i] /= a), (o[1 + i] /= l);
			const u = Z(a, l, 0.5);
			return (
				typeof o[2 + i] == 'number' && (o[2 + i] /= u),
				typeof o[3 + i] == 'number' && (o[3 + i] /= u),
				s(o)
			);
		},
	};
class wh extends q.Component {
	componentDidMount() {
		const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props,
			{ projection: s } = t;
		$c(Ph),
			s &&
				(n.group && n.group.add(s),
				r && r.register && o && r.register(s),
				s.root.didUpdate(),
				s.addEventListener('animationComplete', () => {
					this.safeToRemove();
				}),
				s.setOptions({ ...s.options, onExitComplete: () => this.safeToRemove() })),
			(Gt.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(t) {
		const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props,
			i = r.projection;
		return (
			i &&
				((i.isPresent = s),
				o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(),
				t.isPresent !== s &&
					(s
						? i.promote()
						: i.relegate() ||
						  H.postRender(() => {
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
		const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
			{ projection: o } = t;
		o &&
			(o.scheduleCheckAfterUnmount(),
			n && n.group && n.group.remove(o),
			r && r.deregister && r.deregister(o));
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props;
		t && t();
	}
	render() {
		return null;
	}
}
function Sa(e) {
	const [t, n] = bh(),
		r = m.useContext(Mr);
	return q.createElement(wh, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: m.useContext(bs),
		isPresent: t,
		safeToRemove: n,
	});
}
const Ph = {
		borderRadius: {
			...yt,
			applyTo: [
				'borderTopLeftRadius',
				'borderTopRightRadius',
				'borderBottomLeftRadius',
				'borderBottomRightRadius',
			],
		},
		borderTopLeftRadius: yt,
		borderTopRightRadius: yt,
		borderBottomLeftRadius: yt,
		borderBottomRightRadius: yt,
		boxShadow: xh,
	},
	Ca = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
	Th = Ca.length,
	qo = (e) => (typeof e == 'string' ? parseFloat(e) : e),
	Zo = (e) => typeof e == 'number' || F.test(e);
function Sh(e, t, n, r, o, s) {
	o
		? ((e.opacity = Z(0, n.opacity !== void 0 ? n.opacity : 1, Ch(r))),
		  (e.opacityExit = Z(t.opacity !== void 0 ? t.opacity : 1, 0, Eh(r))))
		: s &&
		  (e.opacity = Z(
				t.opacity !== void 0 ? t.opacity : 1,
				n.opacity !== void 0 ? n.opacity : 1,
				r
		  ));
	for (let i = 0; i < Th; i++) {
		const a = `border${Ca[i]}Radius`;
		let l = Jo(t, a),
			u = Jo(n, a);
		if (l === void 0 && u === void 0) continue;
		l || (l = 0),
			u || (u = 0),
			l === 0 || u === 0 || Zo(l) === Zo(u)
				? ((e[a] = Math.max(Z(qo(l), qo(u), r), 0)), (ye.test(u) || ye.test(l)) && (e[a] += '%'))
				: (e[a] = u);
	}
	(t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r));
}
function Jo(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Ch = Ea(0, 0.5, jr),
	Eh = Ea(0.5, 0.95, ee);
function Ea(e, t, n) {
	return (r) => (r < e ? 0 : r > t ? 1 : n(At(e, t, r)));
}
function Qo(e, t) {
	(e.min = t.min), (e.max = t.max);
}
function he(e, t) {
	Qo(e.x, t.x), Qo(e.y, t.y);
}
function ei(e, t, n, r, o) {
	return (e -= t), (e = cn(e, 1 / n, r)), o !== void 0 && (e = cn(e, 1 / o, r)), e;
}
function $h(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
	if (
		(ye.test(t) && ((t = parseFloat(t)), (t = Z(i.min, i.max, t / 100) - i.min)),
		typeof t != 'number')
	)
		return;
	let a = Z(s.min, s.max, r);
	e === s && (a -= t), (e.min = ei(e.min, t, n, a, o)), (e.max = ei(e.max, t, n, a, o));
}
function ti(e, t, [n, r, o], s, i) {
	$h(e, t[n], t[r], t[o], t.scale, s, i);
}
const Ah = ['x', 'scaleX', 'originX'],
	Mh = ['y', 'scaleY', 'originY'];
function ni(e, t, n, r) {
	ti(e.x, t, Ah, n ? n.x : void 0, r ? r.x : void 0),
		ti(e.y, t, Mh, n ? n.y : void 0, r ? r.y : void 0);
}
function ri(e) {
	return e.translate === 0 && e.scale === 1;
}
function $a(e) {
	return ri(e.x) && ri(e.y);
}
function kh(e, t) {
	return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Aa(e, t) {
	return (
		Math.round(e.x.min) === Math.round(t.x.min) &&
		Math.round(e.x.max) === Math.round(t.x.max) &&
		Math.round(e.y.min) === Math.round(t.y.min) &&
		Math.round(e.y.max) === Math.round(t.y.max)
	);
}
function oi(e) {
	return de(e.x) / de(e.y);
}
class Vh {
	constructor() {
		this.members = [];
	}
	add(t) {
		zr(this.members, t), t.scheduleRender();
	}
	remove(t) {
		if ((Ur(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n);
		}
	}
	relegate(t) {
		const n = this.members.findIndex((o) => t === o);
		if (n === 0) return !1;
		let r;
		for (let o = n; o >= 0; o--) {
			const s = this.members[o];
			if (s.isPresent !== !1) {
				r = s;
				break;
			}
		}
		return r ? (this.promote(r), !0) : !1;
	}
	promote(t, n) {
		const r = this.lead;
		if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
			r.instance && r.scheduleRender(),
				t.scheduleRender(),
				(t.resumeFrom = r),
				n && (t.resumeFrom.preserveOpacity = !0),
				r.snapshot &&
					((t.snapshot = r.snapshot),
					(t.snapshot.latestValues = r.animationValues || r.latestValues)),
				t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
			const { crossfade: o } = t.options;
			o === !1 && r.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((t) => {
			const { options: n, resumingFrom: r } = t;
			n.onExitComplete && n.onExitComplete(),
				r && r.options.onExitComplete && r.options.onExitComplete();
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
function ii(e, t, n) {
	let r = '';
	const o = e.x.translate / t.x,
		s = e.y.translate / t.y;
	if (
		((o || s) && (r = `translate3d(${o}px, ${s}px, 0) `),
		(t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
		n)
	) {
		const { rotate: l, rotateX: u, rotateY: c } = n;
		l && (r += `rotate(${l}deg) `),
			u && (r += `rotateX(${u}deg) `),
			c && (r += `rotateY(${c}deg) `);
	}
	const i = e.x.scale * t.x,
		a = e.y.scale * t.y;
	return (i !== 1 || a !== 1) && (r += `scale(${i}, ${a})`), r || 'none';
}
const Rh = (e, t) => e.depth - t.depth;
class Lh {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(t) {
		zr(this.children, t), (this.isDirty = !0);
	}
	remove(t) {
		Ur(this.children, t), (this.isDirty = !0);
	}
	forEach(t) {
		this.isDirty && this.children.sort(Rh), (this.isDirty = !1), this.children.forEach(t);
	}
}
function Dh(e, t) {
	const n = performance.now(),
		r = ({ timestamp: o }) => {
			const s = o - n;
			s >= t && (Ce(r), e(s - t));
		};
	return H.read(r, !0), () => Ce(r);
}
function Nh(e) {
	window.MotionDebug && window.MotionDebug.record(e);
}
function Fh(e) {
	return e instanceof SVGElement && e.tagName !== 'svg';
}
function Oh(e, t, n) {
	const r = ce(e) ? e : ct(e);
	return r.start(Kr('', r, t, n)), r.animation;
}
const si = ['', 'X', 'Y', 'Z'],
	ai = 1e3;
let Ih = 0;
const _e = {
	type: 'projectionFrame',
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0,
};
function Ma({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: o,
}) {
	return class {
		constructor(i = {}, a = t?.()) {
			(this.id = Ih++),
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
					(_e.totalNodes = _e.resolvedTargetDeltas = _e.recalculatedProjection = 0),
						this.nodes.forEach(_h),
						this.nodes.forEach(Hh),
						this.nodes.forEach(Gh),
						this.nodes.forEach(Wh),
						Nh(_e);
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
			this.root === this && (this.nodes = new Lh());
		}
		addEventListener(i, a) {
			return (
				this.eventHandlers.has(i) || this.eventHandlers.set(i, new Hr()),
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
			(this.isSVG = Fh(i)), (this.instance = i);
			const { layoutId: l, layout: u, visualElement: c } = this.options;
			if (
				(c && !c.current && c.mount(i),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				a && (u || l) && (this.isLayoutDirty = !0),
				e)
			) {
				let f;
				const d = () => (this.root.updateBlockedByResize = !1);
				e(i, () => {
					(this.root.updateBlockedByResize = !0),
						f && f(),
						(f = Dh(d, 250)),
						Gt.hasAnimatedSinceResize && ((Gt.hasAnimatedSinceResize = !1), this.nodes.forEach(ui));
				});
			}
			l && this.root.registerSharedNode(l, this),
				this.options.animate !== !1 &&
					c &&
					(l || u) &&
					this.addEventListener(
						'didUpdate',
						({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: h, layout: v }) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const y = this.options.transition || c.getDefaultTransition() || Jh,
								{ onLayoutAnimationStart: b, onLayoutAnimationComplete: C } = c.getProps(),
								S = !this.targetLayout || !Aa(this.targetLayout, v) || h,
								w = !d && h;
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								w ||
								(d && (S || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(f, w);
								const A = { ...ha(y, 'layout'), onPlay: b, onComplete: C };
								(c.shouldReduceMotion || this.options.layoutRoot) && ((A.delay = 0), (A.type = !1)),
									this.startAnimation(A);
							} else
								d || ui(this),
									this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
							this.targetLayout = v;
						}
					);
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const i = this.getStack();
			i && i.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				Ce(this.updateProjection);
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
				((this.isUpdating = !0), this.nodes && this.nodes.forEach(Yh), this.animationId++);
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
				const f = this.path[c];
				(f.shouldResetTransform = !0),
					f.updateScroll('snapshot'),
					f.options.layoutRoot && f.willUpdate(!1);
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
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(li);
				return;
			}
			this.isUpdating || this.nodes.forEach(zh),
				(this.isUpdating = !1),
				this.nodes.forEach(Uh),
				this.nodes.forEach(jh),
				this.nodes.forEach(Bh),
				this.clearAllSnapshots();
			const a = performance.now();
			(re.delta = Re(0, 1e3 / 60, a - re.timestamp)),
				(re.timestamp = a),
				(re.isProcessing = !0),
				An.update.process(re),
				An.preRender.process(re),
				An.render.process(re),
				(re.isProcessing = !1);
		}
		didUpdate() {
			this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Kh), this.sharedNodes.forEach(Xh);
		}
		scheduleUpdateProjection() {
			H.preRender(this.updateProjection, !1, !0);
		}
		scheduleCheckAfterUnmount() {
			H.postRender(() => {
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
				(this.layoutCorrected = ne()),
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
						isRoot: r(this.instance),
						offset: n(this.instance),
					});
		}
		resetTransform() {
			if (!o) return;
			const i = this.isLayoutDirty || this.shouldResetTransform,
				a = this.projectionDelta && !$a(this.projectionDelta),
				l = this.getTransformTemplate(),
				u = l ? l(this.latestValues, '') : void 0,
				c = u !== this.prevTransformTemplateValue;
			i &&
				(a || Be(this.latestValues) || c) &&
				(o(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
		}
		measure(i = !0) {
			const a = this.measurePageBox();
			let l = this.removeElementScroll(a);
			return (
				i && (l = this.removeTransform(l)),
				Qh(l),
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
			if (!i) return ne();
			const a = i.measureViewportBox(),
				{ scroll: l } = this.root;
			return l && (Ae(a.x, l.offset.x), Ae(a.y, l.offset.y)), a;
		}
		removeElementScroll(i) {
			const a = ne();
			he(a, i);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l],
					{ scroll: c, options: f } = u;
				if (u !== this.root && c && f.layoutScroll) {
					if (c.isRoot) {
						he(a, i);
						const { scroll: d } = this.root;
						d && (Ae(a.x, -d.offset.x), Ae(a.y, -d.offset.y));
					}
					Ae(a.x, c.offset.x), Ae(a.y, c.offset.y);
				}
			}
			return a;
		}
		applyTransform(i, a = !1) {
			const l = ne();
			he(l, i);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				!a &&
					c.options.layoutScroll &&
					c.scroll &&
					c !== c.root &&
					lt(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
					Be(c.latestValues) && lt(l, c.latestValues);
			}
			return Be(this.latestValues) && lt(l, this.latestValues), l;
		}
		removeTransform(i) {
			const a = ne();
			he(a, i);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l];
				if (!u.instance || !Be(u.latestValues)) continue;
				pr(u.latestValues) && u.updateSnapshot();
				const c = ne(),
					f = u.measurePageBox();
				he(c, f), ni(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
			}
			return Be(this.latestValues) && ni(a, this.latestValues), a;
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
				this.relativeParent.resolvedRelativeTargetAt !== re.timestamp &&
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
			const { layout: f, layoutId: d } = this.options;
			if (!(!this.layout || !(f || d))) {
				if (
					((this.resolvedRelativeTargetAt = re.timestamp),
					!this.targetDelta && !this.relativeTarget)
				) {
					const h = this.getClosestProjectingParent();
					h && h.layout && this.animationProgress !== 1
						? ((this.relativeParent = h),
						  this.forceRelativeParentToResolveTarget(),
						  (this.relativeTarget = ne()),
						  (this.relativeTargetOrigin = ne()),
						  St(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
						  he(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target || ((this.target = ne()), (this.targetWithTransforms = ne())),
						this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.relativeParent &&
						this.relativeParent.target
							? (this.forceRelativeParentToResolveTarget(),
							  th(this.target, this.relativeTarget, this.relativeParent.target))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: he(this.target, this.layout.layoutBox),
							  Pa(this.target, this.targetDelta))
							: he(this.target, this.layout.layoutBox),
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
							  (this.relativeTarget = ne()),
							  (this.relativeTargetOrigin = ne()),
							  St(this.relativeTargetOrigin, this.target, h.target),
							  he(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					_e.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || pr(this.parent.latestValues) || wa(this.parent.latestValues)))
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
				this.resolvedRelativeTargetAt === re.timestamp && (u = !1),
				u)
			)
				return;
			const { layout: c, layoutId: f } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(c || f))
			)
				return;
			he(this.layoutCorrected, this.layout.layoutBox);
			const d = this.treeScale.x,
				h = this.treeScale.y;
			ch(this.layoutCorrected, this.treeScale, this.path, l),
				a.layout &&
					!a.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					(a.target = a.layout.layoutBox);
			const { target: v } = a;
			if (!v) {
				this.projectionTransform &&
					((this.projectionDelta = at()),
					(this.projectionTransform = 'none'),
					this.scheduleRender());
				return;
			}
			this.projectionDelta ||
				((this.projectionDelta = at()), (this.projectionDeltaWithTransform = at()));
			const y = this.projectionTransform;
			Tt(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
				(this.projectionTransform = ii(this.projectionDelta, this.treeScale)),
				(this.projectionTransform !== y || this.treeScale.x !== d || this.treeScale.y !== h) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners('projectionUpdate', v)),
				_e.recalculatedProjection++;
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
				f = at();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !a);
			const d = ne(),
				h = l ? l.source : void 0,
				v = this.layout ? this.layout.source : void 0,
				y = h !== v,
				b = this.getStack(),
				C = !b || b.members.length <= 1,
				S = !!(y && !C && this.options.crossfade === !0 && !this.path.some(Zh));
			this.animationProgress = 0;
			let w;
			(this.mixTargetDelta = (A) => {
				const M = A / 1e3;
				ci(f.x, i.x, M),
					ci(f.y, i.y, M),
					this.setTargetDelta(f),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(St(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						qh(this.relativeTarget, this.relativeTargetOrigin, d, M),
						w && kh(this.relativeTarget, w) && (this.isProjectionDirty = !1),
						w || (w = ne()),
						he(w, this.relativeTarget)),
					y && ((this.animationValues = c), Sh(c, u, this.latestValues, M, S, C)),
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
				this.pendingAnimation && (Ce(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = H.update(() => {
					(Gt.hasAnimatedSinceResize = !0),
						(this.currentAnimation = Oh(0, ai, {
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
				(this.mixTargetDelta && this.mixTargetDelta(ai), this.currentAnimation.stop()),
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
					ka(this.options.animationType, this.layout.layoutBox, u.layoutBox)
				) {
					l = this.target || ne();
					const f = de(this.layout.layoutBox.x);
					(l.x.min = i.target.x.min), (l.x.max = l.x.min + f);
					const d = de(this.layout.layoutBox.y);
					(l.y.min = i.target.y.min), (l.y.max = l.y.min + d);
				}
				he(a, l), lt(a, c), Tt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
			}
		}
		registerSharedNode(i, a) {
			this.sharedNodes.has(i) || this.sharedNodes.set(i, new Vh()), this.sharedNodes.get(i).add(a);
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
			for (let c = 0; c < si.length; c++) {
				const f = 'rotate' + si[c];
				l[f] && ((u[f] = l[f]), i.setStaticValue(f, 0));
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
					(u.pointerEvents = Ht(i.pointerEvents) || ''),
					(u.transform = c ? c(this.latestValues, '') : 'none'),
					u
				);
			const f = this.getLead();
			if (!this.projectionDelta || !this.layout || !f.target) {
				const y = {};
				return (
					this.options.layoutId &&
						((y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
						(y.pointerEvents = Ht(i.pointerEvents) || '')),
					this.hasProjected &&
						!Be(this.latestValues) &&
						((y.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
					y
				);
			}
			const d = f.animationValues || f.latestValues;
			this.applyTransformsToTarget(),
				(u.transform = ii(this.projectionDeltaWithTransform, this.treeScale, d)),
				c && (u.transform = c(d, u.transform));
			const { x: h, y: v } = this.projectionDelta;
			(u.transformOrigin = `${h.origin * 100}% ${v.origin * 100}% 0`),
				f.animationValues
					? (u.opacity =
							f === this
								? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !==
										null && l !== void 0
									? l
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: d.opacityExit)
					: (u.opacity =
							f === this
								? d.opacity !== void 0
									? d.opacity
									: ''
								: d.opacityExit !== void 0
								? d.opacityExit
								: 0);
			for (const y in nn) {
				if (d[y] === void 0) continue;
				const { correct: b, applyTo: C } = nn[y],
					S = u.transform === 'none' ? d[y] : b(d[y], f);
				if (C) {
					const w = C.length;
					for (let A = 0; A < w; A++) u[C[A]] = S;
				} else u[y] = S;
			}
			return (
				this.options.layoutId &&
					(u.pointerEvents = f === this ? Ht(i.pointerEvents) || '' : 'none'),
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
				this.root.nodes.forEach(li),
				this.root.sharedNodes.clear();
		}
	};
}
function jh(e) {
	e.updateLayout();
}
function Bh(e) {
	var t;
	const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
	if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
		const { layoutBox: r, measuredBox: o } = e.layout,
			{ animationType: s } = e.options,
			i = n.source !== e.layout.source;
		s === 'size'
			? ge((f) => {
					const d = i ? n.measuredBox[f] : n.layoutBox[f],
						h = de(d);
					(d.min = r[f].min), (d.max = d.min + h);
			  })
			: ka(s, n.layoutBox, r) &&
			  ge((f) => {
					const d = i ? n.measuredBox[f] : n.layoutBox[f],
						h = de(r[f]);
					(d.max = d.min + h),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0), (e.relativeTarget[f].max = e.relativeTarget[f].min + h));
			  });
		const a = at();
		Tt(a, r, n.layoutBox);
		const l = at();
		i ? Tt(l, e.applyTransform(o, !0), n.measuredBox) : Tt(l, r, n.layoutBox);
		const u = !$a(a);
		let c = !1;
		if (!e.resumeFrom) {
			const f = e.getClosestProjectingParent();
			if (f && !f.resumeFrom) {
				const { snapshot: d, layout: h } = f;
				if (d && h) {
					const v = ne();
					St(v, n.layoutBox, d.layoutBox);
					const y = ne();
					St(y, r, h.layoutBox),
						Aa(v, y) || (c = !0),
						f.options.layoutRoot &&
							((e.relativeTarget = y), (e.relativeTargetOrigin = v), (e.relativeParent = f));
				}
			}
		}
		e.notifyListeners('didUpdate', {
			layout: r,
			snapshot: n,
			delta: l,
			layoutDelta: a,
			hasLayoutChanged: u,
			hasRelativeTargetChanged: c,
		});
	} else if (e.isLead()) {
		const { onExitComplete: r } = e.options;
		r && r();
	}
	e.options.transition = void 0;
}
function _h(e) {
	_e.totalNodes++,
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
function Wh(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Kh(e) {
	e.clearSnapshot();
}
function li(e) {
	e.clearMeasurements();
}
function zh(e) {
	e.isLayoutDirty = !1;
}
function Uh(e) {
	const { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'), e.resetTransform();
}
function ui(e) {
	e.finishAnimation(),
		(e.targetDelta = e.relativeTarget = e.target = void 0),
		(e.isProjectionDirty = !0);
}
function Hh(e) {
	e.resolveTargetDelta();
}
function Gh(e) {
	e.calcProjection();
}
function Yh(e) {
	e.resetRotation();
}
function Xh(e) {
	e.removeLeadSnapshot();
}
function ci(e, t, n) {
	(e.translate = Z(t.translate, 0, n)),
		(e.scale = Z(t.scale, 1, n)),
		(e.origin = t.origin),
		(e.originPoint = t.originPoint);
}
function fi(e, t, n, r) {
	(e.min = Z(t.min, n.min, r)), (e.max = Z(t.max, n.max, r));
}
function qh(e, t, n, r) {
	fi(e.x, t.x, n.x, r), fi(e.y, t.y, n.y, r);
}
function Zh(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Jh = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	di = (e) => typeof navigator < 'u' && navigator.userAgent.toLowerCase().includes(e),
	hi = di('applewebkit/') && !di('chrome/') ? Math.round : ee;
function pi(e) {
	(e.min = hi(e.min)), (e.max = hi(e.max));
}
function Qh(e) {
	pi(e.x), pi(e.y);
}
function ka(e, t, n) {
	return e === 'position' || (e === 'preserve-aspect' && !dr(oi(t), oi(n), 0.2));
}
const ep = Ma({
		attachResizeListener: (e, t) => we(e, 'resize', t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	jn = { current: void 0 },
	Va = Ma({
		measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!jn.current) {
				const e = new ep({});
				e.mount(window), e.setOptions({ layoutScroll: !0 }), (jn.current = e);
			}
			return jn.current;
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : 'none';
		},
		checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
	}),
	tp = { pan: { Feature: yh }, drag: { Feature: vh, ProjectionNode: Va, MeasureLayout: Sa } },
	np = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function rp(e) {
	const t = np.exec(e);
	if (!t) return [,];
	const [, n, r] = t;
	return [n, r];
}
function gr(e, t, n = 1) {
	const [r, o] = rp(e);
	if (!r) return;
	const s = window.getComputedStyle(t).getPropertyValue(r);
	if (s) {
		const i = s.trim();
		return pa(i) ? parseFloat(i) : i;
	} else return ir(o) ? gr(o, t, n + 1) : o;
}
function op(e, { ...t }, n) {
	const r = e.current;
	if (!(r instanceof Element)) return { target: t, transitionEnd: n };
	n && (n = { ...n }),
		e.values.forEach((o) => {
			const s = o.get();
			if (!ir(s)) return;
			const i = gr(s, r);
			i && o.set(i);
		});
	for (const o in t) {
		const s = t[o];
		if (!ir(s)) continue;
		const i = gr(s, r);
		i && ((t[o] = i), n || (n = {}), n[o] === void 0 && (n[o] = s));
	}
	return { target: t, transitionEnd: n };
}
const ip = new Set([
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
	Ra = (e) => ip.has(e),
	sp = (e) => Object.keys(e).some(Ra),
	mi = (e) => e === qe || e === F,
	gi = (e, t) => parseFloat(e.split(', ')[t]),
	vi =
		(e, t) =>
		(n, { transform: r }) => {
			if (r === 'none' || !r) return 0;
			const o = r.match(/^matrix3d\((.+)\)$/);
			if (o) return gi(o[1], t);
			{
				const s = r.match(/^matrix\((.+)\)$/);
				return s ? gi(s[1], e) : 0;
			}
		},
	ap = new Set(['x', 'y', 'z']),
	lp = Mt.filter((e) => !ap.has(e));
function up(e) {
	const t = [];
	return (
		lp.forEach((n) => {
			const r = e.getValue(n);
			r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
		}),
		t.length && e.render(),
		t
	);
}
const ft = {
	width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
		e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
		e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: vi(4, 13),
	y: vi(5, 14),
};
ft.translateX = ft.x;
ft.translateY = ft.y;
const cp = (e, t, n) => {
		const r = t.measureViewportBox(),
			o = t.current,
			s = getComputedStyle(o),
			{ display: i } = s,
			a = {};
		i === 'none' && t.setStaticValue('display', e.display || 'block'),
			n.forEach((u) => {
				a[u] = ft[u](r, s);
			}),
			t.render();
		const l = t.measureViewportBox();
		return (
			n.forEach((u) => {
				const c = t.getValue(u);
				c && c.jump(a[u]), (e[u] = ft[u](l, s));
			}),
			e
		);
	},
	fp = (e, t, n = {}, r = {}) => {
		(t = { ...t }), (r = { ...r });
		const o = Object.keys(t).filter(Ra);
		let s = [],
			i = !1;
		const a = [];
		if (
			(o.forEach((l) => {
				const u = e.getValue(l);
				if (!e.hasValue(l)) return;
				let c = n[l],
					f = vt(c);
				const d = t[l];
				let h;
				if (on(d)) {
					const v = d.length,
						y = d[0] === null ? 1 : 0;
					(c = d[y]), (f = vt(c));
					for (let b = y; b < v && d[b] !== null; b++) h ? Ir(vt(d[b]) === h) : (h = vt(d[b]));
				} else h = vt(d);
				if (f !== h)
					if (mi(f) && mi(h)) {
						const v = u.get();
						typeof v == 'string' && u.set(parseFloat(v)),
							typeof d == 'string'
								? (t[l] = parseFloat(d))
								: Array.isArray(d) && h === F && (t[l] = d.map(parseFloat));
					} else
						f?.transform && h?.transform && (c === 0 || d === 0)
							? c === 0
								? u.set(h.transform(c))
								: (t[l] = f.transform(d))
							: (i || ((s = up(e)), (i = !0)),
							  a.push(l),
							  (r[l] = r[l] !== void 0 ? r[l] : t[l]),
							  u.jump(d));
			}),
			a.length)
		) {
			const l = a.indexOf('height') >= 0 ? window.pageYOffset : null,
				u = cp(t, e, a);
			return (
				s.length &&
					s.forEach(([c, f]) => {
						e.getValue(c).set(f);
					}),
				e.render(),
				mn && l !== null && window.scrollTo({ top: l }),
				{ target: u, transitionEnd: r }
			);
		} else return { target: t, transitionEnd: r };
	};
function dp(e, t, n, r) {
	return sp(t) ? fp(e, t, n, r) : { target: t, transitionEnd: r };
}
const hp = (e, t, n, r) => {
		const o = op(e, t, r);
		return (t = o.target), (r = o.transitionEnd), dp(e, t, n, r);
	},
	vr = { current: null },
	La = { current: !1 };
function pp() {
	if (((La.current = !0), !!mn))
		if (window.matchMedia) {
			const e = window.matchMedia('(prefers-reduced-motion)'),
				t = () => (vr.current = e.matches);
			e.addListener(t), t();
		} else vr.current = !1;
}
function mp(e, t, n) {
	const { willChange: r } = t;
	for (const o in t) {
		const s = t[o],
			i = n[o];
		if (ce(s)) e.addValue(o, s), un(r) && r.add(o);
		else if (ce(i)) e.addValue(o, ct(s, { owner: e })), un(r) && r.remove(o);
		else if (i !== s)
			if (e.hasValue(o)) {
				const a = e.getValue(o);
				!a.hasAnimated && a.set(s);
			} else {
				const a = e.getStaticValue(o);
				e.addValue(o, ct(a !== void 0 ? a : s, { owner: e }));
			}
	}
	for (const o in n) t[o] === void 0 && e.removeValue(o);
	return t;
}
const yi = new WeakMap(),
	Da = Object.keys($t),
	gp = Da.length,
	bi = [
		'AnimationStart',
		'AnimationComplete',
		'Update',
		'BeforeLayoutMeasure',
		'LayoutMeasure',
		'LayoutAnimationStart',
		'LayoutAnimationComplete',
	],
	vp = Ar.length;
class yp {
	constructor(
		{ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, visualState: s },
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
			(this.scheduleRender = () => H.render(this.render, !1, !0));
		const { latestValues: a, renderState: l } = s;
		(this.latestValues = a),
			(this.baseTarget = { ...a }),
			(this.initialValues = n.initial ? { ...a } : {}),
			(this.renderState = l),
			(this.parent = t),
			(this.props = n),
			(this.presenceContext = r),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = o),
			(this.options = i),
			(this.isControllingVariants = vn(n)),
			(this.isVariantNode = ys(n)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(t && t.current));
		const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
		for (const f in c) {
			const d = c[f];
			a[f] !== void 0 && ce(d) && (d.set(a[f], !1), un(u) && u.add(f));
		}
	}
	scrapeMotionValuesFromProps(t, n) {
		return {};
	}
	mount(t) {
		(this.current = t),
			yi.set(t, this),
			this.projection && !this.projection.instance && this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
			La.current || pp(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === 'never'
					? !1
					: this.reducedMotionConfig === 'always'
					? !0
					: vr.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext);
	}
	unmount() {
		yi.delete(this.current),
			this.projection && this.projection.unmount(),
			Ce(this.notifyUpdate),
			Ce(this.render),
			this.valueSubscriptions.forEach((t) => t()),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this);
		for (const t in this.events) this.events[t].clear();
		for (const t in this.features) this.features[t].unmount();
		this.current = null;
	}
	bindToMotionValue(t, n) {
		const r = Xe.has(t),
			o = n.on('change', (i) => {
				(this.latestValues[t] = i),
					this.props.onUpdate && H.update(this.notifyUpdate, !1, !0),
					r && this.projection && (this.projection.isTransformDirty = !0);
			}),
			s = n.on('renderRequest', this.scheduleRender);
		this.valueSubscriptions.set(t, () => {
			o(), s();
		});
	}
	sortNodePosition(t) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current);
	}
	loadFeatures({ children: t, ...n }, r, o, s) {
		let i, a;
		for (let l = 0; l < gp; l++) {
			const u = Da[l],
				{ isEnabled: c, Feature: f, ProjectionNode: d, MeasureLayout: h } = $t[u];
			d && (i = d),
				c(n) && (!this.features[u] && f && (this.features[u] = new f(this)), h && (a = h));
		}
		if (!this.projection && i) {
			this.projection = new i(this.latestValues, this.parent && this.parent.projection);
			const {
				layoutId: l,
				layout: u,
				drag: c,
				dragConstraints: f,
				layoutScroll: d,
				layoutRoot: h,
			} = n;
			this.projection.setOptions({
				layoutId: l,
				layout: u,
				alwaysMeasureLayout: !!c || (f && it(f)),
				visualElement: this,
				scheduleRender: () => this.scheduleRender(),
				animationType: typeof u == 'string' ? u : 'both',
				initialPromotionConfig: s,
				layoutScroll: d,
				layoutRoot: h,
			});
		}
		return a;
	}
	updateFeatures() {
		for (const t in this.features) {
			const n = this.features[t];
			n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.options, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ne();
	}
	getStaticValue(t) {
		return this.latestValues[t];
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n;
	}
	makeTargetAnimatable(t, n = !0) {
		return this.makeTargetAnimatableFromInstance(t, this.props, n);
	}
	update(t, n) {
		(t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = t),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = n);
		for (let r = 0; r < bi.length; r++) {
			const o = bi[r];
			this.propEventSubscriptions[o] &&
				(this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
			const s = t['on' + o];
			s && (this.propEventSubscriptions[o] = this.on(o, s));
		}
		(this.prevMotionValues = mp(
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
			const r = this.parent ? this.parent.getVariantContext() || {} : {};
			return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
		}
		const n = {};
		for (let r = 0; r < vp; r++) {
			const o = Ar[r],
				s = this.props[o];
			(Et(s) || s === !1) && (n[o] = s);
		}
		return n;
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode();
		if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
	}
	addValue(t, n) {
		n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)),
			this.values.set(t, n),
			(this.latestValues[t] = n.get());
	}
	removeValue(t) {
		this.values.delete(t);
		const n = this.valueSubscriptions.get(t);
		n && (n(), this.valueSubscriptions.delete(t)),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState);
	}
	hasValue(t) {
		return this.values.has(t);
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let r = this.values.get(t);
		return r === void 0 && n !== void 0 && ((r = ct(n, { owner: this })), this.addValue(t, r)), r;
	}
	readValue(t) {
		var n;
		return this.latestValues[t] !== void 0 || !this.current
			? this.latestValues[t]
			: (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0
			? n
			: this.readValueFromInstance(this.current, t, this.options);
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n;
	}
	getBaseTarget(t) {
		var n;
		const { initial: r } = this.props,
			o =
				typeof r == 'string' || typeof r == 'object'
					? (n = Or(this.props, r)) === null || n === void 0
						? void 0
						: n[t]
					: void 0;
		if (r && o !== void 0) return o;
		const s = this.getBaseTargetFromProps(this.props, t);
		return s !== void 0 && !ce(s)
			? s
			: this.initialValues[t] !== void 0 && o === void 0
			? void 0
			: this.baseTarget[t];
	}
	on(t, n) {
		return this.events[t] || (this.events[t] = new Hr()), this.events[t].add(n);
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n);
	}
}
class Na extends yp {
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(t, n) {
		return t.style ? t.style[n] : void 0;
	}
	removeValueFromRenderState(t, { vars: n, style: r }) {
		delete n[t], delete r[t];
	}
	makeTargetAnimatableFromInstance(
		{ transition: t, transitionEnd: n, ...r },
		{ transformValues: o },
		s
	) {
		let i = Od(r, t || {}, this);
		if ((o && (n && (n = o(n)), r && (r = o(r)), i && (i = o(i))), s)) {
			Nd(this, r, i);
			const a = hp(this, r, i, n);
			(n = a.transitionEnd), (r = a.target);
		}
		return { transition: t, transitionEnd: n, ...r };
	}
}
function bp(e) {
	return window.getComputedStyle(e);
}
class xp extends Na {
	readValueFromInstance(t, n) {
		if (Xe.has(n)) {
			const r = Wr(n);
			return (r && r.default) || 0;
		} else {
			const r = bp(t),
				o = (Ps(n) ? r.getPropertyValue(n) : r[n]) || 0;
			return typeof o == 'string' ? o.trim() : o;
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: n }) {
		return Ta(t, n);
	}
	build(t, n, r, o) {
		Vr(t, n, r, o.transformTemplate);
	}
	scrapeMotionValuesFromProps(t, n) {
		return Fr(t, n);
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		const { children: t } = this.props;
		ce(t) &&
			(this.childSubscription = t.on('change', (n) => {
				this.current && (this.current.textContent = `${n}`);
			}));
	}
	renderInstance(t, n, r, o) {
		As(t, n, r, o);
	}
}
class wp extends Na {
	constructor() {
		super(...arguments), (this.isSVGTag = !1);
	}
	getBaseTargetFromProps(t, n) {
		return t[n];
	}
	readValueFromInstance(t, n) {
		if (Xe.has(n)) {
			const r = Wr(n);
			return (r && r.default) || 0;
		}
		return (n = Ms.has(n) ? n : Nr(n)), t.getAttribute(n);
	}
	measureInstanceViewportBox() {
		return ne();
	}
	scrapeMotionValuesFromProps(t, n) {
		return Vs(t, n);
	}
	build(t, n, r, o) {
		Lr(t, n, r, this.isSVGTag, o.transformTemplate);
	}
	renderInstance(t, n, r, o) {
		ks(t, n, r, o);
	}
	mount(t) {
		(this.isSVGTag = Dr(t.tagName)), super.mount(t);
	}
}
const Pp = (e, t) =>
		kr(e)
			? new wp(t, { enableHardwareAcceleration: !1 })
			: new xp(t, { enableHardwareAcceleration: !0 }),
	Tp = { layout: { ProjectionNode: Va, MeasureLayout: Sa } },
	Sp = { ...Zd, ...vf, ...tp, ...Tp },
	Fa = Cc((e, t) => rf(e, t, Sp, Pp));
function Oa() {
	const e = m.useRef(!1);
	return (
		Er(
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
function Cp() {
	const e = Oa(),
		[t, n] = m.useState(0),
		r = m.useCallback(() => {
			e.current && n(t + 1);
		}, [t]);
	return [m.useCallback(() => H.postRender(r), [r]), t];
}
class Ep extends m.Component {
	getSnapshotBeforeUpdate(t) {
		const n = this.props.childRef.current;
		if (n && t.isPresent && !this.props.isPresent) {
			const r = this.props.sizeRef.current;
			(r.height = n.offsetHeight || 0),
				(r.width = n.offsetWidth || 0),
				(r.top = n.offsetTop),
				(r.left = n.offsetLeft);
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
}
function $p({ children: e, isPresent: t }) {
	const n = m.useId(),
		r = m.useRef(null),
		o = m.useRef({ width: 0, height: 0, top: 0, left: 0 });
	return (
		m.useInsertionEffect(() => {
			const { width: s, height: i, top: a, left: l } = o.current;
			if (t || !r.current || !s || !i) return;
			r.current.dataset.motionPopId = n;
			const u = document.createElement('style');
			return (
				document.head.appendChild(u),
				u.sheet &&
					u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
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
		m.createElement(Ep, { isPresent: t, childRef: r, sizeRef: o }, m.cloneElement(e, { ref: r }))
	);
}
const Bn = ({
	children: e,
	initial: t,
	isPresent: n,
	onExitComplete: r,
	custom: o,
	presenceAffectsLayout: s,
	mode: i,
}) => {
	const a = Rs(Ap),
		l = m.useId(),
		u = m.useMemo(
			() => ({
				id: l,
				initial: t,
				isPresent: n,
				custom: o,
				onExitComplete: (c) => {
					a.set(c, !0);
					for (const f of a.values()) if (!f) return;
					r && r();
				},
				register: (c) => (a.set(c, !1), () => a.delete(c)),
			}),
			s ? void 0 : [n]
		);
	return (
		m.useMemo(() => {
			a.forEach((c, f) => a.set(f, !1));
		}, [n]),
		m.useEffect(() => {
			!n && !a.size && r && r();
		}, [n]),
		i === 'popLayout' && (e = m.createElement($p, { isPresent: n }, e)),
		m.createElement(pn.Provider, { value: u }, e)
	);
};
function Ap() {
	return new Map();
}
function Mp(e) {
	return m.useEffect(() => () => e(), []);
}
const rt = (e) => e.key || '';
function kp(e, t) {
	e.forEach((n) => {
		const r = rt(n);
		t.set(r, n);
	});
}
function Vp(e) {
	const t = [];
	return (
		m.Children.forEach(e, (n) => {
			m.isValidElement(n) && t.push(n);
		}),
		t
	);
}
const Rp = ({
	children: e,
	custom: t,
	initial: n = !0,
	onExitComplete: r,
	exitBeforeEnter: o,
	presenceAffectsLayout: s = !0,
	mode: i = 'sync',
}) => {
	const a = m.useContext(Mr).forceRender || Cp()[0],
		l = Oa(),
		u = Vp(e);
	let c = u;
	const f = m.useRef(new Map()).current,
		d = m.useRef(c),
		h = m.useRef(new Map()).current,
		v = m.useRef(!0);
	if (
		(Er(() => {
			(v.current = !1), kp(u, h), (d.current = c);
		}),
		Mp(() => {
			(v.current = !0), h.clear(), f.clear();
		}),
		v.current)
	)
		return m.createElement(
			m.Fragment,
			null,
			c.map((S) =>
				m.createElement(
					Bn,
					{
						key: rt(S),
						isPresent: !0,
						initial: n ? void 0 : !1,
						presenceAffectsLayout: s,
						mode: i,
					},
					S
				)
			)
		);
	c = [...c];
	const y = d.current.map(rt),
		b = u.map(rt),
		C = y.length;
	for (let S = 0; S < C; S++) {
		const w = y[S];
		b.indexOf(w) === -1 && !f.has(w) && f.set(w, void 0);
	}
	return (
		i === 'wait' && f.size && (c = []),
		f.forEach((S, w) => {
			if (b.indexOf(w) !== -1) return;
			const A = h.get(w);
			if (!A) return;
			const M = y.indexOf(w);
			let N = S;
			if (!N) {
				const D = () => {
					h.delete(w), f.delete(w);
					const p = d.current.findIndex((k) => k.key === w);
					if ((d.current.splice(p, 1), !f.size)) {
						if (((d.current = u), l.current === !1)) return;
						a(), r && r();
					}
				};
				(N = m.createElement(
					Bn,
					{
						key: rt(A),
						isPresent: !1,
						onExitComplete: D,
						custom: t,
						presenceAffectsLayout: s,
						mode: i,
					},
					A
				)),
					f.set(w, N);
			}
			c.splice(M, 0, N);
		}),
		(c = c.map((S) => {
			const w = S.key;
			return f.has(w)
				? S
				: m.createElement(Bn, { key: rt(S), isPresent: !0, presenceAffectsLayout: s, mode: i }, S);
		})),
		m.createElement(m.Fragment, null, f.size ? c : c.map((S) => m.cloneElement(S)))
	);
};
var xi = {
	ease: [0.36, 0.66, 0.4, 1],
	easeIn: [0.4, 0, 1, 1],
	easeOut: [0, 0, 0.2, 1],
	easeInOut: [0.4, 0, 0.2, 1],
	spring: [0.155, 1.105, 0.295, 1.12],
	springOut: [0.57, -0.15, 0.62, 0.07],
	softSpring: [0.16, 1.11, 0.3, 1.02],
};
function Lp(e, t) {
	let {
			elementType: n = 'button',
			isDisabled: r,
			onPress: o,
			onPressStart: s,
			onPressEnd: i,
			onPressChange: a,
			preventFocusOnPress: l,
			allowFocusWhenDisabled: u,
			onClick: c,
			href: f,
			target: d,
			rel: h,
			type: v = 'button',
			allowTextSelectionOnPress: y,
		} = e,
		b;
	n === 'button'
		? (b = { type: v, disabled: r })
		: (b = {
				role: 'button',
				tabIndex: r ? void 0 : 0,
				href: n === 'a' && r ? void 0 : f,
				target: n === 'a' ? d : void 0,
				type: n === 'input' ? v : void 0,
				disabled: n === 'input' ? r : void 0,
				'aria-disabled': !r || n === 'input' ? void 0 : r,
				rel: n === 'a' ? h : void 0,
		  });
	let { pressProps: C, isPressed: S } = ps({
			onPressStart: s,
			onPressEnd: i,
			onPressChange: a,
			onPress: o,
			isDisabled: r,
			preventFocusOnPress: l,
			allowTextSelectionOnPress: y,
			ref: t,
		}),
		{ focusableProps: w } = Xi(e, t);
	u && (w.tabIndex = r ? -1 : w.tabIndex);
	let A = ue(w, C, Di(e, { labelable: !0 }));
	return {
		isPressed: S,
		buttonProps: ue(b, A, {
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
function Dp(e = {}) {
	let { isReadOnly: t } = e,
		[n, r] = Vi(e.isSelected, e.defaultSelected || !1, e.onChange);
	function o(i) {
		t || r(i);
	}
	function s() {
		t || r(!n);
	}
	return { isSelected: n, setSelected: o, toggle: s };
}
function Np(e, t) {
	let {
			elementType: n = 'a',
			onPress: r,
			onPressStart: o,
			onPressEnd: s,
			onClick: i,
			isDisabled: a,
			...l
		} = e,
		u = {};
	n !== 'a' && (u = { role: 'link', tabIndex: a ? void 0 : 0 });
	let { focusableProps: c } = Xi(e, t),
		{ pressProps: f, isPressed: d } = ps({
			onPress: r,
			onPressStart: o,
			onPressEnd: s,
			isDisabled: a,
			ref: t,
		}),
		h = Di(l, { labelable: !0, isLink: n === 'a' }),
		v = ue(c, f),
		y = Ml();
	return {
		isPressed: d,
		linkProps: ue(h, {
			...v,
			...u,
			'aria-disabled': a || void 0,
			'aria-current': e['aria-current'],
			onClick: (b) => {
				var C;
				(C = f.onClick) == null || C.call(f, b),
					i && i(b),
					!y.isNative &&
						b.currentTarget instanceof HTMLAnchorElement &&
						b.currentTarget.href &&
						!b.isDefaultPrevented() &&
						kl(b.currentTarget, b) &&
						(b.preventDefault(), y.open(b.currentTarget, b));
			},
		}),
	};
}
function Fp(e) {
	var t, n;
	const [r, o] = qi(e, uo.variantKeys),
		{
			ref: s,
			as: i,
			children: a,
			anchorIcon: l,
			isExternal: u = !1,
			showAnchorIcon: c = !1,
			autoFocus: f = !1,
			className: d,
			onPress: h,
			onPressStart: v,
			onPressEnd: y,
			onClick: b,
			...C
		} = r,
		S = i || 'a',
		w = Ne(s),
		{ linkProps: A } = Np(
			{
				...C,
				onPress: h,
				onPressStart: v,
				onPressEnd: y,
				onClick: b,
				isDisabled: e.isDisabled,
				elementType: `${i}`,
			},
			w
		),
		{ isFocused: M, isFocusVisible: N, focusProps: D } = Yi({ autoFocus: f });
	u &&
		((C.rel = (t = C.rel) != null ? t : 'noopener noreferrer'),
		(C.target = (n = C.target) != null ? n : '_blank'));
	const p = m.useMemo(() => uo({ ...o, className: d }), [...Object.values(o), d]),
		k = m.useCallback(
			() => ({
				ref: w,
				className: p,
				'data-focus': le(M),
				'data-disabled': le(e.isDisabled),
				'data-focus-visible': le(N),
				...ue(D, A, C),
			}),
			[p, M, N, D, A, C]
		);
	return { Component: S, children: a, anchorIcon: l, showAnchorIcon: c, getLinkProps: k };
}
var Ia = De((e, t) => {
	const {
		Component: n,
		children: r,
		showAnchorIcon: o,
		anchorIcon: s = I.jsx(gc, { className: Xu }),
		getLinkProps: i,
	} = Fp({ ref: t, ...e });
	return I.jsx(n, { ...i(), children: I.jsxs(I.Fragment, { children: [r, o && s] }) });
});
Ia.displayName = 'NextUI.Link';
var _n = Ia,
	Yt = 'right-scroll-bar-position',
	Xt = 'width-before-scroll-bar',
	Op = 'with-scroll-bars-hidden',
	Ip = '--removed-body-scroll-bar-size';
function jp(e, t) {
	return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function Bp(e, t) {
	var n = m.useState(function () {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(r) {
					var o = n.value;
					o !== r && ((n.value = r), n.callback(r, o));
				},
			},
		};
	})[0];
	return (n.callback = t), n.facade;
}
function _p(e, t) {
	return Bp(t || null, function (n) {
		return e.forEach(function (r) {
			return jp(r, n);
		});
	});
}
function Wp(e) {
	return e;
}
function Kp(e, t) {
	t === void 0 && (t = Wp);
	var n = [],
		r = !1,
		o = {
			read: function () {
				if (r)
					throw new Error(
						'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
					);
				return n.length ? n[n.length - 1] : e;
			},
			useMedium: function (s) {
				var i = t(s, r);
				return (
					n.push(i),
					function () {
						n = n.filter(function (a) {
							return a !== i;
						});
					}
				);
			},
			assignSyncMedium: function (s) {
				for (r = !0; n.length; ) {
					var i = n;
					(n = []), i.forEach(s);
				}
				n = {
					push: function (a) {
						return s(a);
					},
					filter: function () {
						return n;
					},
				};
			},
			assignMedium: function (s) {
				r = !0;
				var i = [];
				if (n.length) {
					var a = n;
					(n = []), a.forEach(s), (i = n);
				}
				var l = function () {
						var c = i;
						(i = []), c.forEach(s);
					},
					u = function () {
						return Promise.resolve().then(l);
					};
				u(),
					(n = {
						push: function (c) {
							i.push(c), u();
						},
						filter: function (c) {
							return (i = i.filter(c)), n;
						},
					});
			},
		};
	return o;
}
function zp(e) {
	e === void 0 && (e = {});
	var t = Kp(null);
	return (t.options = ve({ async: !0, ssr: !1 }, e)), t;
}
var ja = function (e) {
	var t = e.sideCar,
		n = Bi(e, ['sideCar']);
	if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
	var r = t.read();
	if (!r) throw new Error('Sidecar medium not found');
	return m.createElement(r, ve({}, n));
};
ja.isSideCarExport = !0;
function Up(e, t) {
	return e.useMedium(t), ja;
}
var Ba = zp(),
	Wn = function () {},
	wn = m.forwardRef(function (e, t) {
		var n = m.useRef(null),
			r = m.useState({ onScrollCapture: Wn, onWheelCapture: Wn, onTouchMoveCapture: Wn }),
			o = r[0],
			s = r[1],
			i = e.forwardProps,
			a = e.children,
			l = e.className,
			u = e.removeScrollBar,
			c = e.enabled,
			f = e.shards,
			d = e.sideCar,
			h = e.noIsolation,
			v = e.inert,
			y = e.allowPinchZoom,
			b = e.as,
			C = b === void 0 ? 'div' : b,
			S = e.gapMode,
			w = Bi(e, [
				'forwardProps',
				'children',
				'className',
				'removeScrollBar',
				'enabled',
				'shards',
				'sideCar',
				'noIsolation',
				'inert',
				'allowPinchZoom',
				'as',
				'gapMode',
			]),
			A = d,
			M = _p([n, t]),
			N = ve(ve({}, w), o);
		return m.createElement(
			m.Fragment,
			null,
			c &&
				m.createElement(A, {
					sideCar: Ba,
					removeScrollBar: u,
					shards: f,
					noIsolation: h,
					inert: v,
					setCallbacks: s,
					allowPinchZoom: !!y,
					lockRef: n,
					gapMode: S,
				}),
			i
				? m.cloneElement(m.Children.only(a), ve(ve({}, N), { ref: M }))
				: m.createElement(C, ve({}, N, { className: l, ref: M }), a)
		);
	});
wn.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
wn.classNames = { fullWidth: Xt, zeroRight: Yt };
var wi,
	Hp = function () {
		if (wi) return wi;
		if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
	};
function Gp() {
	if (!document) return null;
	var e = document.createElement('style');
	e.type = 'text/css';
	var t = Hp();
	return t && e.setAttribute('nonce', t), e;
}
function Yp(e, t) {
	e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function Xp(e) {
	var t = document.head || document.getElementsByTagName('head')[0];
	t.appendChild(e);
}
var qp = function () {
		var e = 0,
			t = null;
		return {
			add: function (n) {
				e == 0 && (t = Gp()) && (Yp(t, n), Xp(t)), e++;
			},
			remove: function () {
				e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
			},
		};
	},
	Zp = function () {
		var e = qp();
		return function (t, n) {
			m.useEffect(
				function () {
					return (
						e.add(t),
						function () {
							e.remove();
						}
					);
				},
				[t && n]
			);
		};
	},
	_a = function () {
		var e = Zp(),
			t = function (n) {
				var r = n.styles,
					o = n.dynamic;
				return e(r, o), null;
			};
		return t;
	},
	Jp = { left: 0, top: 0, right: 0, gap: 0 },
	Kn = function (e) {
		return parseInt(e || '', 10) || 0;
	},
	Qp = function (e) {
		var t = window.getComputedStyle(document.body),
			n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
			r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
			o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
		return [Kn(n), Kn(r), Kn(o)];
	},
	em = function (e) {
		if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return Jp;
		var t = Qp(e),
			n = document.documentElement.clientWidth,
			r = window.innerWidth;
		return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
	},
	tm = _a(),
	nm = function (e, t, n, r) {
		var o = e.left,
			s = e.top,
			i = e.right,
			a = e.gap;
		return (
			n === void 0 && (n = 'margin'),
			`
  .`
				.concat(
					Op,
					` {
   overflow: hidden `
				)
				.concat(
					r,
					`;
   padding-right: `
				)
				.concat(a, 'px ')
				.concat(
					r,
					`;
  }
  body {
    overflow: hidden `
				)
				.concat(
					r,
					`;
    overscroll-behavior: contain;
    `
				)
				.concat(
					[
						t && 'position: relative '.concat(r, ';'),
						n === 'margin' &&
							`
    padding-left: `
								.concat(
									o,
									`px;
    padding-top: `
								)
								.concat(
									s,
									`px;
    padding-right: `
								)
								.concat(
									i,
									`px;
    margin-left:0;
    margin-top:0;
    margin-right: `
								)
								.concat(a, 'px ')
								.concat(
									r,
									`;
    `
								),
						n === 'padding' && 'padding-right: '.concat(a, 'px ').concat(r, ';'),
					]
						.filter(Boolean)
						.join(''),
					`
  }
  
  .`
				)
				.concat(
					Yt,
					` {
    right: `
				)
				.concat(a, 'px ')
				.concat(
					r,
					`;
  }
  
  .`
				)
				.concat(
					Xt,
					` {
    margin-right: `
				)
				.concat(a, 'px ')
				.concat(
					r,
					`;
  }
  
  .`
				)
				.concat(Yt, ' .')
				.concat(
					Yt,
					` {
    right: 0 `
				)
				.concat(
					r,
					`;
  }
  
  .`
				)
				.concat(Xt, ' .')
				.concat(
					Xt,
					` {
    margin-right: 0 `
				)
				.concat(
					r,
					`;
  }
  
  body {
    `
				)
				.concat(Ip, ': ')
				.concat(
					a,
					`px;
  }
`
				)
		);
	},
	rm = function (e) {
		var t = e.noRelative,
			n = e.noImportant,
			r = e.gapMode,
			o = r === void 0 ? 'margin' : r,
			s = m.useMemo(
				function () {
					return em(o);
				},
				[o]
			);
		return m.createElement(tm, { styles: nm(s, !t, o, n ? '' : '!important') });
	},
	yr = !1;
if (typeof window < 'u')
	try {
		var Wt = Object.defineProperty({}, 'passive', {
			get: function () {
				return (yr = !0), !0;
			},
		});
		window.addEventListener('test', Wt, Wt), window.removeEventListener('test', Wt, Wt);
	} catch {
		yr = !1;
	}
var Qe = yr ? { passive: !1 } : !1,
	om = function (e) {
		return e.tagName === 'TEXTAREA';
	},
	Wa = function (e, t) {
		var n = window.getComputedStyle(e);
		return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !om(e) && n[t] === 'visible');
	},
	im = function (e) {
		return Wa(e, 'overflowY');
	},
	sm = function (e) {
		return Wa(e, 'overflowX');
	},
	Pi = function (e, t) {
		var n = t.ownerDocument,
			r = t;
		do {
			typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
			var o = Ka(e, r);
			if (o) {
				var s = za(e, r),
					i = s[1],
					a = s[2];
				if (i > a) return !0;
			}
			r = r.parentNode;
		} while (r && r !== n.body);
		return !1;
	},
	am = function (e) {
		var t = e.scrollTop,
			n = e.scrollHeight,
			r = e.clientHeight;
		return [t, n, r];
	},
	lm = function (e) {
		var t = e.scrollLeft,
			n = e.scrollWidth,
			r = e.clientWidth;
		return [t, n, r];
	},
	Ka = function (e, t) {
		return e === 'v' ? im(t) : sm(t);
	},
	za = function (e, t) {
		return e === 'v' ? am(t) : lm(t);
	},
	um = function (e, t) {
		return e === 'h' && t === 'rtl' ? -1 : 1;
	},
	cm = function (e, t, n, r, o) {
		var s = um(e, window.getComputedStyle(t).direction),
			i = s * r,
			a = n.target,
			l = t.contains(a),
			u = !1,
			c = i > 0,
			f = 0,
			d = 0;
		do {
			var h = za(e, a),
				v = h[0],
				y = h[1],
				b = h[2],
				C = y - b - s * v;
			(v || C) && Ka(e, a) && ((f += C), (d += v)),
				a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
		} while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
		return (
			((c && ((o && Math.abs(f) < 1) || (!o && i > f))) ||
				(!c && ((o && Math.abs(d) < 1) || (!o && -i > d)))) &&
				(u = !0),
			u
		);
	},
	Kt = function (e) {
		return 'changedTouches' in e
			? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
			: [0, 0];
	},
	Ti = function (e) {
		return [e.deltaX, e.deltaY];
	},
	Si = function (e) {
		return e && 'current' in e ? e.current : e;
	},
	fm = function (e, t) {
		return e[0] === t[0] && e[1] === t[1];
	},
	dm = function (e) {
		return `
  .block-interactivity-`
			.concat(
				e,
				` {pointer-events: none;}
  .allow-interactivity-`
			)
			.concat(
				e,
				` {pointer-events: all;}
`
			);
	},
	hm = 0,
	et = [];
function pm(e) {
	var t = m.useRef([]),
		n = m.useRef([0, 0]),
		r = m.useRef(),
		o = m.useState(hm++)[0],
		s = m.useState(_a)[0],
		i = m.useRef(e);
	m.useEffect(
		function () {
			i.current = e;
		},
		[e]
	),
		m.useEffect(
			function () {
				if (e.inert) {
					document.body.classList.add('block-interactivity-'.concat(o));
					var y = Ol([e.lockRef.current], (e.shards || []).map(Si), !0).filter(Boolean);
					return (
						y.forEach(function (b) {
							return b.classList.add('allow-interactivity-'.concat(o));
						}),
						function () {
							document.body.classList.remove('block-interactivity-'.concat(o)),
								y.forEach(function (b) {
									return b.classList.remove('allow-interactivity-'.concat(o));
								});
						}
					);
				}
			},
			[e.inert, e.lockRef.current, e.shards]
		);
	var a = m.useCallback(function (y, b) {
			if ('touches' in y && y.touches.length === 2) return !i.current.allowPinchZoom;
			var C = Kt(y),
				S = n.current,
				w = 'deltaX' in y ? y.deltaX : S[0] - C[0],
				A = 'deltaY' in y ? y.deltaY : S[1] - C[1],
				M,
				N = y.target,
				D = Math.abs(w) > Math.abs(A) ? 'h' : 'v';
			if ('touches' in y && D === 'h' && N.type === 'range') return !1;
			var p = Pi(D, N);
			if (!p) return !0;
			if ((p ? (M = D) : ((M = D === 'v' ? 'h' : 'v'), (p = Pi(D, N))), !p)) return !1;
			if ((!r.current && 'changedTouches' in y && (w || A) && (r.current = M), !M)) return !0;
			var k = r.current || M;
			return cm(k, b, y, k === 'h' ? w : A, !0);
		}, []),
		l = m.useCallback(function (y) {
			var b = y;
			if (!(!et.length || et[et.length - 1] !== s)) {
				var C = 'deltaY' in b ? Ti(b) : Kt(b),
					S = t.current.filter(function (M) {
						return (
							M.name === b.type &&
							(M.target === b.target || b.target === M.shadowParent) &&
							fm(M.delta, C)
						);
					})[0];
				if (S && S.should) {
					b.cancelable && b.preventDefault();
					return;
				}
				if (!S) {
					var w = (i.current.shards || [])
							.map(Si)
							.filter(Boolean)
							.filter(function (M) {
								return M.contains(b.target);
							}),
						A = w.length > 0 ? a(b, w[0]) : !i.current.noIsolation;
					A && b.cancelable && b.preventDefault();
				}
			}
		}, []),
		u = m.useCallback(function (y, b, C, S) {
			var w = { name: y, delta: b, target: C, should: S, shadowParent: mm(C) };
			t.current.push(w),
				setTimeout(function () {
					t.current = t.current.filter(function (A) {
						return A !== w;
					});
				}, 1);
		}, []),
		c = m.useCallback(function (y) {
			(n.current = Kt(y)), (r.current = void 0);
		}, []),
		f = m.useCallback(function (y) {
			u(y.type, Ti(y), y.target, a(y, e.lockRef.current));
		}, []),
		d = m.useCallback(function (y) {
			u(y.type, Kt(y), y.target, a(y, e.lockRef.current));
		}, []);
	m.useEffect(function () {
		return (
			et.push(s),
			e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: d }),
			document.addEventListener('wheel', l, Qe),
			document.addEventListener('touchmove', l, Qe),
			document.addEventListener('touchstart', c, Qe),
			function () {
				(et = et.filter(function (y) {
					return y !== s;
				})),
					document.removeEventListener('wheel', l, Qe),
					document.removeEventListener('touchmove', l, Qe),
					document.removeEventListener('touchstart', c, Qe);
			}
		);
	}, []);
	var h = e.removeScrollBar,
		v = e.inert;
	return m.createElement(
		m.Fragment,
		null,
		v ? m.createElement(s, { styles: dm(o) }) : null,
		h ? m.createElement(rm, { gapMode: e.gapMode }) : null
	);
}
function mm(e) {
	for (var t = null; e !== null; )
		e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
	return t;
}
const gm = Up(Ba, pm);
var Ua = m.forwardRef(function (e, t) {
	return m.createElement(wn, ve({}, e, { ref: t, sideCar: gm }));
});
Ua.classNames = wn.classNames;
const vm = Ua;
var [ym, ht] = qu({
		name: 'NavbarContext',
		strict: !0,
		errorMessage:
			'useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />',
	}),
	bm = {
		enter: {
			height: 'calc(100vh - var(--navbar-height) - 1px)',
			transition: { duration: 0.3, easings: 'easeOut' },
		},
		exit: { height: 0, transition: { duration: 0.25, easings: 'easeIn' } },
	},
	Ha = De((e, t) => {
		var n, r;
		const { className: o, children: s, portalContainer: i, motionProps: a, style: l, ...u } = e,
			c = Ne(t),
			{ slots: f, isMenuOpen: d, height: h, disableAnimation: v, classNames: y } = ht(),
			b = Pe(y?.menu, o),
			C = m.useCallback(
				({ children: w }) =>
					I.jsx(vm, { forwardProps: !0, enabled: d, removeScrollBar: !1, children: w }),
				[d]
			),
			S = v
				? I.jsx(C, {
						children: I.jsx('ul', {
							ref: c,
							className: (n = f.menu) == null ? void 0 : n.call(f, { class: b }),
							'data-open': le(d),
							style: { '--navbar-height': h },
							...u,
							children: s,
						}),
				  })
				: I.jsx(Rp, {
						mode: 'wait',
						children: d
							? I.jsx(C, {
									children: I.jsx(Fa.ul, {
										ref: c,
										layoutScroll: !0,
										animate: 'enter',
										className: (r = f.menu) == null ? void 0 : r.call(f, { class: b }),
										'data-open': le(d),
										exit: 'exit',
										initial: 'exit',
										style: { '--navbar-height': h, ...l },
										variants: bm,
										...ue(a, u),
										children: s,
									}),
							  })
							: null,
				  });
		return I.jsx(du, { portalContainer: i, children: S });
	});
Ha.displayName = 'NextUI.NavbarMenu';
var Ga = Ha,
	xm = {
		visible: { y: 0, transition: { ease: xi.easeOut } },
		hidden: { y: '-100%', transition: { ease: xi.easeIn } },
	},
	wm = typeof window < 'u';
function Ci(e) {
	return wm
		? e
			? { x: e.scrollLeft, y: e.scrollTop }
			: { x: window.scrollX, y: window.scrollY }
		: { x: 0, y: 0 };
}
var Pm = (e) => {
	const { elementRef: t, delay: n = 30, callback: r, isEnabled: o } = e,
		s = m.useRef(o ? Ci(t?.current) : { x: 0, y: 0 });
	let i = null;
	const a = () => {
		const l = Ci(t?.current);
		typeof r == 'function' && r({ prevPos: s.current, currPos: l }), (s.current = l), (i = null);
	};
	return (
		m.useEffect(() => {
			if (!o) return;
			const l = () => {
					n ? i === null && (i = setTimeout(a, n)) : a();
				},
				u = t?.current || window;
			return u.addEventListener('scroll', l), () => u.removeEventListener('scroll', l);
		}, [t?.current, n, o]),
		s.current
	);
};
function Tm(e) {
	var t;
	const [n, r] = qi(e, lo.variantKeys),
		{
			ref: o,
			as: s,
			parentRef: i,
			height: a = '4rem',
			shouldHideOnScroll: l = !1,
			disableScrollHandler: u = !1,
			onScrollPositionChange: c,
			isMenuOpen: f,
			isMenuDefaultOpen: d,
			onMenuOpenChange: h = () => {},
			motionProps: v,
			className: y,
			classNames: b,
			...C
		} = n,
		S = s || 'nav',
		w = Ne(o),
		A = m.useRef(0),
		M = m.useRef(0),
		[N, D] = m.useState(!1),
		p = m.useCallback(
			(R) => {
				h(R || !1);
			},
			[h]
		),
		[k, _] = Vi(f, d, p),
		T = () => {
			if (w.current) {
				const R = w.current.offsetWidth;
				R !== A.current && (A.current = R);
			}
		};
	Nl({
		ref: w,
		onResize: () => {
			var R;
			((R = w.current) == null ? void 0 : R.offsetWidth) !== A.current && (T(), _(!1));
		},
	}),
		m.useEffect(() => {
			var R;
			T(), (M.current = ((R = w.current) == null ? void 0 : R.offsetHeight) || 0);
		}, []);
	const E = m.useMemo(() => lo({ ...r, hideOnScroll: l }), [...Object.values(r), l]),
		x = Pe(b?.base, y);
	Pm({
		elementRef: i,
		isEnabled: l || !u,
		callback: ({ prevPos: R, currPos: j }) => {
			c?.(j.y),
				l &&
					D((O) => {
						const W = j.y > R.y && j.y > M.current;
						return W !== O ? W : O;
					});
		},
	});
	const P = (R = {}) => ({
			...ue(C, R),
			'data-hidden': le(N),
			'data-menu-open': le(k),
			ref: w,
			className: E.base({ class: Pe(x, R?.className) }),
			style: { '--navbar-height': a, ...R?.style },
		}),
		V = (R = {}) => ({
			...R,
			'data-menu-open': le(k),
			className: E.wrapper({ class: Pe(b?.wrapper, R?.className) }),
		});
	return {
		Component: S,
		slots: E,
		domRef: w,
		height: a,
		isHidden: N,
		disableAnimation: (t = e.disableAnimation) != null ? t : !1,
		shouldHideOnScroll: l,
		isMenuOpen: k,
		classNames: b,
		setIsMenuOpen: _,
		motionProps: v,
		getBaseProps: P,
		getWrapperProps: V,
	};
}
var Ya = De((e, t) => {
	const { children: n, ...r } = e,
		o = Tm({ ...r, ref: t }),
		s = o.Component,
		[i, a] = ic(n, Ga),
		l = I.jsxs(I.Fragment, {
			children: [I.jsx('header', { ...o.getWrapperProps(), children: i }), a],
		});
	return I.jsx(ym, {
		value: o,
		children: o.shouldHideOnScroll
			? I.jsx(Fa.nav, {
					animate: o.isHidden ? 'hidden' : 'visible',
					initial: !1,
					variants: xm,
					...ue(o.getBaseProps(), o.motionProps),
					children: l,
			  })
			: I.jsx(s, { ...o.getBaseProps(), children: l }),
	});
});
Ya.displayName = 'NextUI.Navbar';
var Sm = Ya,
	Xa = De((e, t) => {
		var n;
		const { as: r, className: o, children: s, ...i } = e,
			a = r || 'div',
			l = Ne(t),
			{ slots: u, classNames: c } = ht(),
			f = Pe(c?.brand, o);
		return I.jsx(a, {
			ref: l,
			className: (n = u.brand) == null ? void 0 : n.call(u, { class: f }),
			...i,
			children: s,
		});
	});
Xa.displayName = 'NextUI.NavbarBrand';
var Cm = Xa,
	qa = De((e, t) => {
		var n;
		const { as: r, className: o, children: s, justify: i = 'start', ...a } = e,
			l = r || 'ul',
			u = Ne(t),
			{ slots: c, classNames: f } = ht(),
			d = Pe(f?.content, o);
		return I.jsx(l, {
			ref: u,
			className: (n = c.content) == null ? void 0 : n.call(c, { class: d }),
			'data-justify': i,
			...a,
			children: s,
		});
	});
qa.displayName = 'NextUI.NavbarContent';
var Em = qa,
	Za = De((e, t) => {
		var n;
		const { as: r, className: o, children: s, isActive: i, ...a } = e,
			l = r || 'li',
			u = Ne(t),
			{ slots: c, classNames: f } = ht(),
			d = Pe(f?.item, o);
		return I.jsx(l, {
			ref: u,
			className: (n = c.item) == null ? void 0 : n.call(c, { class: d }),
			'data-active': le(i),
			...a,
			children: s,
		});
	});
Za.displayName = 'NextUI.NavbarItem';
var $m = Za,
	Ja = De((e, t) => {
		var n;
		const { className: r, children: o, isActive: s, ...i } = e,
			a = Ne(t),
			{ slots: l, isMenuOpen: u, classNames: c } = ht(),
			f = Pe(c?.menuItem, r);
		return I.jsx('li', {
			ref: a,
			className: (n = l.menuItem) == null ? void 0 : n.call(l, { class: f }),
			'data-active': le(s),
			'data-open': le(u),
			...i,
			children: o,
		});
	});
Ja.displayName = 'NextUI.NavbarMenuItem';
var Am = Ja;
function Mm(e, t, n) {
	const { isSelected: r } = t,
		{ isPressed: o, buttonProps: s } = Lp({ ...e, onPress: Li(t.toggle, e.onPress) }, n);
	return { isPressed: o, buttonProps: ue(s, { 'aria-pressed': r }) };
}
var Qa = De((e, t) => {
	var n;
	const { as: r, icon: o, className: s, onChange: i, autoFocus: a, srOnlyText: l, ...u } = e,
		c = r || 'button',
		f = Ne(t),
		{ slots: d, classNames: h, isMenuOpen: v, setIsMenuOpen: y } = ht(),
		C = Dp({
			...u,
			isSelected: v,
			onChange: (T) => {
				i?.(T), y(T);
			},
		}),
		{ buttonProps: S, isPressed: w } = Mm(e, C, f),
		{ isFocusVisible: A, focusProps: M } = Yi({ autoFocus: a }),
		{ isHovered: N, hoverProps: D } = ql({}),
		p = Pe(h?.toggle, s),
		k = m.useMemo(
			() =>
				typeof o == 'function'
					? o(v ?? !1)
					: o || I.jsx('span', { className: d.toggleIcon({ class: h?.toggleIcon }) }),
			[o, v, d.toggleIcon, h?.toggleIcon]
		),
		_ = m.useMemo(
			() => l || (C.isSelected ? 'close navigation menu' : 'open navigation menu'),
			[l, v]
		);
	return I.jsxs(c, {
		ref: f,
		className: (n = d.toggle) == null ? void 0 : n.call(d, { class: p }),
		'data-focus-visible': le(A),
		'data-hover': le(N),
		'data-open': le(v),
		'data-pressed': le(w),
		...ue(S, M, D, u),
		children: [I.jsx('span', { className: d.srOnly(), children: _ }), k],
	});
});
Qa.displayName = 'NextUI.NavbarMenuToggle';
var km = Qa;
const Ei = '/div-software-logo.svg';
function Lm() {
	const [e, t] = q.useState(!1),
		n = [
			{ title: 'Home', href: '#banner' },
			{ title: 'About', href: '#about' },
			{ title: 'Services', href: '#services' },
			{ title: 'Contact', href: '#contact' },
		],
		r = (o) => {
			const s = document.querySelector(o);
			s &&
				(window.scrollTo({
					behavior: 'smooth',
					top: s.getBoundingClientRect().top + window.scrollY,
				}),
				setTimeout(() => t(!1), 1e3));
		};
	return I.jsxs(Sm, {
		onMenuOpenChange: t,
		isMenuOpen: e,
		maxWidth: '2xl',
		className: 'fixed bg-primary-50',
		children: [
			I.jsx(Cm, {
				children: I.jsxs(_n, {
					href: '/',
					className: 'flex gap-1 xs:gap-2',
					children: [
						I.jsx('img', { src: Ei, alt: 'Div Software', className: 'h-4 xs:h-5 md:h-6' }),
						I.jsxs('div', {
							'aria-label': 'logo name',
							className: 'flex flex-row gap-3',
							children: [
								I.jsx('p', {
									className: 'text-xl font-bold text-foreground-200 xs:text-2xl md:text-3xl',
									children: 'Div',
								}),
								I.jsx('p', {
									className: 'text-xl font-bold text-primary-200 xs:text-2xl md:text-3xl',
									children: 'Software',
								}),
							],
						}),
						I.jsx('img', {
							src: Ei,
							alt: 'Div Software',
							className: 'h-4 rotate-180 xs:h-5 md:h-6',
						}),
					],
				}),
			}),
			I.jsx(km, { 'aria-label': e ? 'Close menu' : 'Open menu', className: 'sm:hidden' }),
			I.jsx(Em, {
				className: 'hidden sm:flex sm:gap-8 md:gap-16 lg:gap-32',
				justify: 'center',
				children: n.map((o, s) =>
					I.jsx(
						$m,
						{
							style: { cursor: 'pointer' },
							children: I.jsx(_n, {
								color: 'foreground',
								className: 'w-full',
								size: 'lg',
								onClick: () => r(o.href),
								children: o.title,
							}),
						},
						`${o.title}-${s}`
					)
				),
			}),
			I.jsx(Ga, {
				children: n.map((o, s) =>
					I.jsx(
						Am,
						{
							children: I.jsx(_n, {
								color: 'foreground',
								className: 'w-full',
								size: 'lg',
								onClick: () => r(o.href),
								children: o.title,
							}),
						},
						`${o.title}-${s}`
					)
				),
			}),
		],
	});
}
export { Lm as NavbarHome };
