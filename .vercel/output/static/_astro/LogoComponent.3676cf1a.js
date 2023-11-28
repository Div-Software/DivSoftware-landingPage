import { r as h, R as Y } from './index.6460afdd.js';
var Mt = { exports: {} },
	Fe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var or = h,
	ar = Symbol.for('react.element'),
	ir = Symbol.for('react.fragment'),
	sr = Object.prototype.hasOwnProperty,
	lr = or.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	ur = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nt(e, t, r) {
	var n,
		o = {},
		i = null,
		a = null;
	r !== void 0 && (i = '' + r),
		t.key !== void 0 && (i = '' + t.key),
		t.ref !== void 0 && (a = t.ref);
	for (n in t) sr.call(t, n) && !ur.hasOwnProperty(n) && (o[n] = t[n]);
	if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
	return { $$typeof: ar, type: e, key: i, ref: a, props: o, _owner: lr.current };
}
Fe.Fragment = ir;
Fe.jsx = Nt;
Fe.jsxs = Nt;
Mt.exports = Fe;
var H = Mt.exports;
function At(e) {
	var t,
		r,
		n = '';
	if (typeof e == 'string' || typeof e == 'number') n += e;
	else if (typeof e == 'object')
		if (Array.isArray(e))
			for (t = 0; t < e.length; t++) e[t] && (r = At(e[t])) && (n && (n += ' '), (n += r));
		else for (t in e) e[t] && (n && (n += ' '), (n += t));
	return n;
}
function cr() {
	for (var e, t, r = 0, n = ''; r < arguments.length; )
		(e = arguments[r++]) && (t = At(e)) && (n && (n += ' '), (n += t));
	return n;
}
const V = typeof document < 'u' ? Y.useLayoutEffect : () => {};
function de(e) {
	const t = h.useRef(null);
	return (
		V(() => {
			t.current = e;
		}, [e]),
		h.useCallback((...r) => {
			const n = t.current;
			return n(...r);
		}, [])
	);
}
let ct = new Map();
function dr(e, t) {
	if (e === t) return e;
	let r = ct.get(e);
	if (r) return r(t), t;
	let n = ct.get(t);
	return n ? (n(e), e) : t;
}
function fr(...e) {
	return (...t) => {
		for (let r of e) typeof r == 'function' && r(...t);
	};
}
function ie(...e) {
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
				? (t[o] = fr(i, a))
				: (o === 'className' || o === 'UNSAFE_className') &&
				  typeof i == 'string' &&
				  typeof a == 'string'
				? (t[o] = cr(i, a))
				: o === 'id' && i && a
				? (t.id = dr(i, a))
				: (t[o] = a !== void 0 ? a : i);
		}
	}
	return t;
}
const pr = new Set(['id']),
	br = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']),
	vr = new Set(['href', 'target', 'rel', 'download', 'ping', 'referrerPolicy']),
	gr = /^(data-.*)$/;
function mr(e, t = {}) {
	let { labelable: r, isLink: n, propNames: o } = t,
		i = {};
	for (const a in e)
		Object.prototype.hasOwnProperty.call(e, a) &&
			(pr.has(a) || (r && br.has(a)) || (n && vr.has(a)) || o?.has(a) || gr.test(a)) &&
			(i[a] = e[a]);
	return i;
}
function ne(e) {
	if (hr()) e.focus({ preventScroll: !0 });
	else {
		let t = yr(e);
		e.focus(), wr(t);
	}
}
let $e = null;
function hr() {
	if ($e == null) {
		$e = !1;
		try {
			var e = document.createElement('div');
			e.focus({
				get preventScroll() {
					return ($e = !0), !0;
				},
			});
		} catch {}
	}
	return $e;
}
function yr(e) {
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
function wr(e) {
	for (let { element: t, scrollTop: r, scrollLeft: n } of e) (t.scrollTop = r), (t.scrollLeft = n);
}
function Ie(e) {
	var t;
	return typeof window > 'u' || window.navigator == null
		? !1
		: ((t = window.navigator.userAgentData) === null || t === void 0
				? void 0
				: t.brands.some((r) => e.test(r.brand))) || e.test(window.navigator.userAgent);
}
function rt(e) {
	var t;
	return typeof window < 'u' && window.navigator != null
		? e.test(
				((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) ||
					window.navigator.platform
		  )
		: !1;
}
function we() {
	return rt(/^Mac/i);
}
function $r() {
	return rt(/^iPhone/i);
}
function Lt() {
	return rt(/^iPad/i) || (we() && navigator.maxTouchPoints > 1);
}
function Ft() {
	return $r() || Lt();
}
function xr() {
	return Ie(/AppleWebKit/i) && !Er();
}
function Er() {
	return Ie(/Chrome/i);
}
function It() {
	return Ie(/Android/i);
}
function Tr() {
	return Ie(/Firefox/i);
}
const Pr = h.createContext({ isNative: !0, open: Mr });
function Sr() {
	return h.useContext(Pr);
}
function kr(e, t) {
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
function be(e, t, r = !0) {
	var n, o;
	let { metaKey: i, ctrlKey: a, altKey: l, shiftKey: c } = t;
	Tr() &&
		!((n = window.event) === null || n === void 0 || (o = n.type) === null || o === void 0) &&
		o.startsWith('key') &&
		e.target === '_blank' &&
		(we() ? (i = !0) : (a = !0));
	let p =
		xr() && we() && !Lt()
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
	(be.isOpening = r), ne(e), e.dispatchEvent(p), (be.isOpening = !1);
}
be.isOpening = !1;
function Cr(e, t) {
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
function Mr(e, t) {
	Cr(e, (r) => be(r, t));
}
let fe = new Map(),
	Ge = new Set();
function dt() {
	if (typeof window > 'u') return;
	let e = (r) => {
			let n = fe.get(r.target);
			n || ((n = new Set()), fe.set(r.target, n), r.target.addEventListener('transitioncancel', t)),
				n.add(r.propertyName);
		},
		t = (r) => {
			let n = fe.get(r.target);
			if (
				n &&
				(n.delete(r.propertyName),
				n.size === 0 && (r.target.removeEventListener('transitioncancel', t), fe.delete(r.target)),
				fe.size === 0)
			) {
				for (let o of Ge) o();
				Ge.clear();
			}
		};
	document.body.addEventListener('transitionrun', e),
		document.body.addEventListener('transitionend', t);
}
typeof document < 'u' &&
	(document.readyState !== 'loading' ? dt() : document.addEventListener('DOMContentLoaded', dt));
function Rt(e) {
	requestAnimationFrame(() => {
		fe.size === 0 ? e() : Ge.add(e);
	});
}
function Nr() {
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
function Ar() {
	return typeof window.ResizeObserver < 'u';
}
function co(e) {
	const { ref: t, onResize: r } = e;
	h.useEffect(() => {
		let n = t?.current;
		if (n)
			if (Ar()) {
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
function Ot(e, t) {
	V(() => {
		if (e && e.ref && t)
			return (
				(e.ref.current = t.current),
				() => {
					e.ref.current = null;
				}
			);
	});
}
function je(e) {
	return e.mozInputSource === 0 && e.isTrusted
		? !0
		: It() && e.pointerType
		? e.type === 'click' && e.buttons === 1
		: e.detail === 0 && !e.pointerType;
}
function Lr(e) {
	return (
		(!It() && e.width === 0 && e.height === 0) ||
		(e.width === 1 &&
			e.height === 1 &&
			e.pressure === 0 &&
			e.detail === 0 &&
			e.pointerType === 'mouse')
	);
}
const Kt = Y.createContext(null);
Kt.displayName = 'PressResponderContext';
function fo({ children: e }) {
	return Y.createElement(Kt.Provider, { value: void 0 }, e);
}
class Fr {
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
function _t(e) {
	let t = h.useRef({ isFocused: !1, observer: null });
	V(() => {
		const n = t.current;
		return () => {
			n.observer && (n.observer.disconnect(), (n.observer = null));
		};
	}, []);
	let r = de((n) => {
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
							o.disabled && r(new Fr('blur', a)),
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
function zt(e) {
	let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e;
	const i = h.useCallback(
			(c) => {
				if (c.target === c.currentTarget) return n && n(c), o && o(!1), !0;
			},
			[n, o]
		),
		a = _t(i),
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
let ve = null,
	He = new Set(),
	ft = !1,
	se = !1,
	We = !1;
const Ir = { Tab: !0, Escape: !0 };
function nt(e, t) {
	for (let r of He) r(e, t);
}
function Rr(e) {
	return !(
		e.metaKey ||
		(!we() && e.altKey) ||
		e.ctrlKey ||
		e.key === 'Control' ||
		e.key === 'Shift' ||
		e.key === 'Meta'
	);
}
function pt(e) {
	(se = !0), Rr(e) && ((ve = 'keyboard'), nt('keyboard', e));
}
function ue(e) {
	(ve = 'pointer'),
		(e.type === 'mousedown' || e.type === 'pointerdown') && ((se = !0), nt('pointer', e));
}
function Or(e) {
	je(e) && ((se = !0), (ve = 'virtual'));
}
function Kr(e) {
	e.target === window ||
		e.target === document ||
		(!se && !We && ((ve = 'virtual'), nt('virtual', e)), (se = !1), (We = !1));
}
function _r() {
	(se = !1), (We = !0);
}
function Ve() {
	if (typeof window > 'u' || ft) return;
	let e = HTMLElement.prototype.focus;
	(HTMLElement.prototype.focus = function () {
		(se = !0), e.apply(this, arguments);
	}),
		document.addEventListener('keydown', pt, !0),
		document.addEventListener('keyup', pt, !0),
		document.addEventListener('click', Or, !0),
		window.addEventListener('focus', Kr, !0),
		window.addEventListener('blur', _r, !1),
		typeof PointerEvent < 'u'
			? (document.addEventListener('pointerdown', ue, !0),
			  document.addEventListener('pointermove', ue, !0),
			  document.addEventListener('pointerup', ue, !0))
			: (document.addEventListener('mousedown', ue, !0),
			  document.addEventListener('mousemove', ue, !0),
			  document.addEventListener('mouseup', ue, !0)),
		(ft = !0);
}
typeof document < 'u' &&
	(document.readyState !== 'loading' ? Ve() : document.addEventListener('DOMContentLoaded', Ve));
function Dt() {
	return ve !== 'pointer';
}
function zr() {
	return ve;
}
function Dr(e, t, r) {
	return !(e && t === 'keyboard' && r instanceof KeyboardEvent && !Ir[r.key]);
}
function Gr(e, t, r) {
	Ve(),
		h.useEffect(() => {
			let n = (o, i) => {
				Dr(r?.isTextInput, o, i) && e(Dt());
			};
			return (
				He.add(n),
				() => {
					He.delete(n);
				}
			);
		}, t);
}
function jr(e) {
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
		l = _t(a),
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
let Ce = !1,
	Re = 0;
function Be() {
	(Ce = !0),
		setTimeout(() => {
			Ce = !1;
		}, 50);
}
function bt(e) {
	e.pointerType === 'touch' && Be();
}
function Hr() {
	if (!(typeof document > 'u'))
		return (
			typeof PointerEvent < 'u'
				? document.addEventListener('pointerup', bt)
				: document.addEventListener('touchend', Be),
			Re++,
			() => {
				Re--,
					!(Re > 0) &&
						(typeof PointerEvent < 'u'
							? document.removeEventListener('pointerup', bt)
							: document.removeEventListener('touchend', Be));
			}
		);
}
function po(e) {
	let { onHoverStart: t, onHoverChange: r, onHoverEnd: n, isDisabled: o } = e,
		[i, a] = h.useState(!1),
		l = h.useRef({
			isHovered: !1,
			ignoreEmulatedMouseEvents: !1,
			pointerType: '',
			target: null,
		}).current;
	h.useEffect(Hr, []);
	let { hoverProps: c, triggerHoverEnd: p } = h.useMemo(() => {
		let v = (g, x) => {
				if (
					((l.pointerType = x),
					o || x === 'touch' || l.isHovered || !g.currentTarget.contains(g.target))
				)
					return;
				l.isHovered = !0;
				let P = g.currentTarget;
				(l.target = P),
					t && t({ type: 'hoverstart', target: P, pointerType: x }),
					r && r(!0),
					a(!0);
			},
			y = (g, x) => {
				if (((l.pointerType = ''), (l.target = null), x === 'touch' || !l.isHovered)) return;
				l.isHovered = !1;
				let P = g.currentTarget;
				n && n({ type: 'hoverend', target: P, pointerType: x }), r && r(!1), a(!1);
			},
			m = {};
		return (
			typeof PointerEvent < 'u'
				? ((m.onPointerEnter = (g) => {
						(Ce && g.pointerType === 'mouse') || v(g, g.pointerType);
				  }),
				  (m.onPointerLeave = (g) => {
						!o && g.currentTarget.contains(g.target) && y(g, g.pointerType);
				  }))
				: ((m.onTouchStart = () => {
						l.ignoreEmulatedMouseEvents = !0;
				  }),
				  (m.onMouseEnter = (g) => {
						!l.ignoreEmulatedMouseEvents && !Ce && v(g, 'mouse'),
							(l.ignoreEmulatedMouseEvents = !1);
				  }),
				  (m.onMouseLeave = (g) => {
						!o && g.currentTarget.contains(g.target) && y(g, 'mouse');
				  })),
			{ hoverProps: m, triggerHoverEnd: y }
		);
	}, [t, r, n, o, l]);
	return (
		h.useEffect(() => {
			o && p({ currentTarget: l.target }, l.pointerType);
		}, [o]),
		{ hoverProps: c, isHovered: i }
	);
}
function vt(e) {
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
function Wr(e) {
	return {
		keyboardProps: e.isDisabled ? {} : { onKeyDown: vt(e.onKeyDown), onKeyUp: vt(e.onKeyUp) },
	};
}
function Gt(e) {
	if (zr() === 'virtual') {
		let t = document.activeElement;
		Rt(() => {
			document.activeElement === t && document.contains(e) && ne(e);
		});
	} else ne(e);
}
function Vr(e) {
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
function Br(e, t) {
	return (
		!e.hasAttribute('hidden') &&
		(e.nodeName === 'DETAILS' && t && t.nodeName !== 'SUMMARY' ? e.hasAttribute('open') : !0)
	);
}
function jt(e, t) {
	return (
		e.nodeName !== '#comment' && Vr(e) && Br(e, t) && (!e.parentElement || jt(e.parentElement, e))
	);
}
const gt = Y.createContext(null);
let A = null;
function bo(e) {
	let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e,
		i = h.useRef(),
		a = h.useRef(),
		l = h.useRef([]),
		{ parentNode: c } = h.useContext(gt) || {},
		p = h.useMemo(() => new Ye({ scopeRef: l }), [l]);
	V(() => {
		let m = c || R.root;
		if (R.getTreeNode(m.scopeRef) && A && !Me(A, m.scopeRef)) {
			let g = R.getTreeNode(A);
			g && (m = g);
		}
		m.addChild(p), R.addNode(p);
	}, [p, c]),
		V(() => {
			let m = R.getTreeNode(l);
			m.contain = r;
		}, [r]),
		V(() => {
			let m = i.current.nextSibling,
				g = [];
			for (; m && m !== a.current; ) g.push(m), (m = m.nextSibling);
			l.current = g;
		}, [t]),
		Zr(l, n, r),
		Jr(l, r),
		en(l, n, r),
		Xr(l, o),
		h.useEffect(() => {
			if (l) {
				let m = document.activeElement,
					g = null;
				if (z(m, l.current)) {
					for (let x of R.traverse()) z(m, x.scopeRef.current) && (g = x);
					g === R.getTreeNode(l) && (A = g.scopeRef);
				}
				return () => {
					let x = R.getTreeNode(l).parent.scopeRef;
					(l === A || Me(l, A)) && (!x || R.getTreeNode(x)) && (A = x), R.removeTreeNode(l);
				};
			}
		}, [l]);
	let v = h.useMemo(() => Ur(l), []),
		y = h.useMemo(() => ({ focusManager: v, parentNode: p }), [p, v]);
	return Y.createElement(
		gt.Provider,
		{ value: y },
		Y.createElement('span', { 'data-focus-scope-start': !0, hidden: !0, ref: i }),
		t,
		Y.createElement('span', { 'data-focus-scope-end': !0, hidden: !0, ref: a })
	);
}
function Ur(e) {
	return {
		focusNext(t = {}) {
			let r = e.current,
				{ from: n, tabbable: o, wrap: i, accept: a } = t,
				l = n || document.activeElement,
				c = r[0].previousElementSibling,
				p = ee(oe(r), { tabbable: o, accept: a }, r);
			p.currentNode = z(l, r) ? l : c;
			let v = p.nextNode();
			return !v && i && ((p.currentNode = c), (v = p.nextNode())), v && J(v, !0), v;
		},
		focusPrevious(t = {}) {
			let r = e.current,
				{ from: n, tabbable: o, wrap: i, accept: a } = t,
				l = n || document.activeElement,
				c = r[r.length - 1].nextElementSibling,
				p = ee(oe(r), { tabbable: o, accept: a }, r);
			p.currentNode = z(l, r) ? l : c;
			let v = p.previousNode();
			return !v && i && ((p.currentNode = c), (v = p.previousNode())), v && J(v, !0), v;
		},
		focusFirst(t = {}) {
			let r = e.current,
				{ tabbable: n, accept: o } = t,
				i = ee(oe(r), { tabbable: n, accept: o }, r);
			i.currentNode = r[0].previousElementSibling;
			let a = i.nextNode();
			return a && J(a, !0), a;
		},
		focusLast(t = {}) {
			let r = e.current,
				{ tabbable: n, accept: o } = t,
				i = ee(oe(r), { tabbable: n, accept: o }, r);
			i.currentNode = r[r.length - 1].nextElementSibling;
			let a = i.previousNode();
			return a && J(a, !0), a;
		},
	};
}
const ot = [
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
	Yr = ot.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
ot.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const qr = ot.join(':not([hidden]):not([tabindex="-1"]),');
function oe(e) {
	return e[0].parentElement;
}
function ye(e) {
	let t = R.getTreeNode(A);
	for (; t && t.scopeRef !== e; ) {
		if (t.contain) return !1;
		t = t.parent;
	}
	return !0;
}
function Jr(e, t) {
	let r = h.useRef(),
		n = h.useRef(null);
	V(() => {
		let o = e.current;
		if (!t) {
			n.current && (cancelAnimationFrame(n.current), (n.current = null));
			return;
		}
		let i = (c) => {
				if (c.key !== 'Tab' || c.altKey || c.ctrlKey || c.metaKey || !ye(e)) return;
				let p = document.activeElement,
					v = e.current;
				if (!z(p, v)) return;
				let y = ee(oe(v), { tabbable: !0 }, v);
				y.currentNode = p;
				let m = c.shiftKey ? y.previousNode() : y.nextNode();
				m ||
					((y.currentNode = c.shiftKey
						? v[v.length - 1].nextElementSibling
						: v[0].previousElementSibling),
					(m = c.shiftKey ? y.previousNode() : y.nextNode())),
					c.preventDefault(),
					m && J(m, !0);
			},
			a = (c) => {
				(!A || Me(A, e)) && z(c.target, e.current)
					? ((A = e), (r.current = c.target))
					: ye(e) && !Ue(c.target, e)
					? r.current
						? r.current.focus()
						: A && Ne(A.current)
					: ye(e) && (r.current = c.target);
			},
			l = (c) => {
				n.current && cancelAnimationFrame(n.current),
					(n.current = requestAnimationFrame(() => {
						ye(e) &&
							!Ue(document.activeElement, e) &&
							((A = e),
							document.body.contains(c.target)
								? ((r.current = c.target), r.current.focus())
								: A && Ne(A.current));
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
		V(
			() => () => {
				n.current && cancelAnimationFrame(n.current);
			},
			[n]
		);
}
function Ht(e) {
	return Ue(e);
}
function z(e, t) {
	return t.some((r) => r.contains(e));
}
function Ue(e, t = null) {
	if (e instanceof Element && e.closest('[data-react-aria-top-layer]')) return !0;
	for (let { scopeRef: r } of R.traverse(R.getTreeNode(t))) if (z(e, r.current)) return !0;
	return !1;
}
function Me(e, t) {
	var r;
	let n = (r = R.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
	for (; n; ) {
		if (n.scopeRef === e) return !0;
		n = n.parent;
	}
	return !1;
}
function J(e, t = !1) {
	if (e != null && !t)
		try {
			Gt(e);
		} catch {}
	else if (e != null)
		try {
			e.focus();
		} catch {}
}
function Ne(e, t = !0) {
	let r = e[0].previousElementSibling,
		n = ee(oe(e), { tabbable: t }, e);
	n.currentNode = r;
	let o = n.nextNode();
	t && !o && ((n = ee(oe(e), { tabbable: !1 }, e)), (n.currentNode = r), (o = n.nextNode())), J(o);
}
function Xr(e, t) {
	const r = Y.useRef(t);
	h.useEffect(() => {
		r.current && ((A = e), z(document.activeElement, A.current) || Ne(e.current)), (r.current = !1);
	}, [e]);
}
function Zr(e, t, r) {
	V(() => {
		if (t || r) return;
		let n = e.current,
			o = (i) => {
				let a = i.target;
				z(a, e.current) ? (A = e) : Ht(a) || (A = null);
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
function Qr(e) {
	let t = R.getTreeNode(A);
	for (; t && t.scopeRef !== e; ) {
		if (t.nodeToRestore) return !1;
		t = t.parent;
	}
	return t?.scopeRef === e;
}
function en(e, t, r) {
	const n = h.useRef(typeof document < 'u' ? document.activeElement : null);
	V(() => {
		let o = e.current;
		if (!t || r) return;
		let i = () => {
			(!A || Me(A, e)) && z(document.activeElement, e.current) && (A = e);
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
		V(() => {
			if (!t) return;
			let o = (i) => {
				if (i.key !== 'Tab' || i.altKey || i.ctrlKey || i.metaKey || !ye(e)) return;
				let a = document.activeElement;
				if (!z(a, e.current)) return;
				let l = R.getTreeNode(e).nodeToRestore,
					c = ee(document.body, { tabbable: !0 });
				c.currentNode = a;
				let p = i.shiftKey ? c.previousNode() : c.nextNode();
				if (
					((!document.body.contains(l) || l === document.body) &&
						((l = null), (R.getTreeNode(e).nodeToRestore = null)),
					(!p || !z(p, e.current)) && l)
				) {
					c.currentNode = l;
					do p = i.shiftKey ? c.previousNode() : c.nextNode();
					while (z(p, e.current));
					i.preventDefault(), i.stopPropagation(), p ? J(p, !0) : Ht(l) ? J(l, !0) : a.blur();
				}
			};
			return (
				r || document.addEventListener('keydown', o, !0),
				() => {
					r || document.removeEventListener('keydown', o, !0);
				}
			);
		}, [e, t, r]),
		V(() => {
			if (t)
				return (
					(R.getTreeNode(e).nodeToRestore = n.current),
					() => {
						let o = R.getTreeNode(e).nodeToRestore;
						if (
							t &&
							o &&
							(z(document.activeElement, e.current) ||
								(document.activeElement === document.body && Qr(e)))
						) {
							let i = R.clone();
							requestAnimationFrame(() => {
								if (document.activeElement === document.body) {
									let a = i.getTreeNode(e);
									for (; a; ) {
										if (a.nodeToRestore && document.body.contains(a.nodeToRestore)) {
											J(a.nodeToRestore);
											return;
										}
										a = a.parent;
									}
									for (a = i.getTreeNode(e); a; ) {
										if (a.scopeRef && R.getTreeNode(a.scopeRef)) {
											Ne(a.scopeRef.current, !0);
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
function ee(e, t, r) {
	let n = t?.tabbable ? qr : Yr,
		o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
			acceptNode(i) {
				var a;
				return !(t == null || (a = t.from) === null || a === void 0) && a.contains(i)
					? NodeFilter.FILTER_REJECT
					: i.matches(n) && jt(i) && (!r || z(i, r)) && (!t?.accept || t.accept(i))
					? NodeFilter.FILTER_ACCEPT
					: NodeFilter.FILTER_SKIP;
			},
		});
	return t?.from && (o.currentNode = t.from), o;
}
class at {
	get size() {
		return this.fastMap.size;
	}
	getTreeNode(t) {
		return this.fastMap.get(t);
	}
	addTreeNode(t, r, n) {
		let o = this.fastMap.get(r ?? null),
			i = new Ye({ scopeRef: t });
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
				z(i.nodeToRestore, r.scopeRef.current) &&
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
		let t = new at();
		for (let r of this.traverse()) t.addTreeNode(r.scopeRef, r.parent.scopeRef, r.nodeToRestore);
		return t;
	}
	constructor() {
		(this.fastMap = new Map()),
			(this.root = new Ye({ scopeRef: null })),
			this.fastMap.set(null, this.root);
	}
}
class Ye {
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
let R = new at();
function tn(e = {}) {
	let { autoFocus: t = !1, isTextInput: r, within: n } = e,
		o = h.useRef({ isFocused: !1, isFocusVisible: t || Dt() }),
		[i, a] = h.useState(!1),
		[l, c] = h.useState(() => o.current.isFocused && o.current.isFocusVisible),
		p = h.useCallback(() => c(o.current.isFocused && o.current.isFocusVisible), []),
		v = h.useCallback(
			(g) => {
				(o.current.isFocused = g), a(g), p();
			},
			[p]
		);
	Gr(
		(g) => {
			(o.current.isFocusVisible = g), p();
		},
		[],
		{ isTextInput: r }
	);
	let { focusProps: y } = zt({ isDisabled: n, onFocusChange: v }),
		{ focusWithinProps: m } = jr({ isDisabled: !n, onFocusWithinChange: v });
	return { isFocused: i, isFocusVisible: l, focusProps: n ? m : y };
}
let rn = Y.createContext(null);
function nn(e) {
	let t = h.useContext(rn) || {};
	Ot(t, e);
	let { ref: r, ...n } = t;
	return n;
}
function on(e, t) {
	let { focusProps: r } = zt(e),
		{ keyboardProps: n } = Wr(e),
		o = ie(r, n),
		i = nn(t),
		a = e.isDisabled ? {} : i,
		l = h.useRef(e.autoFocus);
	return (
		h.useEffect(() => {
			l.current && t.current && Gt(t.current), (l.current = !1);
		}, [t]),
		{
			focusableProps: ie(
				{ ...o, tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0 },
				a
			),
		}
	);
}
function an(e) {
	return h.forwardRef(e);
}
var sn = (e, t, r = !0) => {
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
	ln = [
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
	Oe = ln.map((e) => `unit-${e}`),
	mt = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
	G = (e) => !e || typeof e != 'object' || Object.keys(e).length === 0,
	un = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Wt(e, t) {
	e.forEach(function (r) {
		Array.isArray(r) ? Wt(r, t) : t.push(r);
	});
}
function Vt(e) {
	let t = [];
	return Wt(e, t), t;
}
var cn = (...e) => Vt(e).filter(Boolean),
	it = (e, t) => {
		let r = {},
			n = Object.keys(e),
			o = Object.keys(t);
		for (let i of n)
			if (o.includes(i)) {
				let a = e[i],
					l = t[i];
				typeof a == 'object' && typeof l == 'object' ? (r[i] = it(a, l)) : (r[i] = l + ' ' + a);
			} else r[i] = e[i];
		for (let i of o) n.includes(i) || (r[i] = t[i]);
		return r;
	},
	ht = (e) => (!e || typeof e != 'string' ? e : e.replace(/\s+/g, ' ').trim());
function dn() {
	for (var e = 0, t, r, n = ''; e < arguments.length; )
		(t = arguments[e++]) && (r = Bt(t)) && (n && (n += ' '), (n += r));
	return n;
}
function Bt(e) {
	if (typeof e == 'string') return e;
	for (var t, r = '', n = 0; n < e.length; n++)
		e[n] && (t = Bt(e[n])) && (r && (r += ' '), (r += t));
	return r;
}
var st = '-';
function fn(e) {
	var t = bn(e),
		r = e.conflictingClassGroups,
		n = e.conflictingClassGroupModifiers,
		o = n === void 0 ? {} : n;
	function i(l) {
		var c = l.split(st);
		return c[0] === '' && c.length !== 1 && c.shift(), Ut(c, t) || pn(l);
	}
	function a(l, c) {
		var p = r[l] || [];
		return c && o[l] ? [].concat(p, o[l]) : p;
	}
	return { getClassGroupId: i, getConflictingClassGroupIds: a };
}
function Ut(e, t) {
	if (e.length === 0) return t.classGroupId;
	var r = e[0],
		n = t.nextPart.get(r),
		o = n ? Ut(e.slice(1), n) : void 0;
	if (o) return o;
	if (t.validators.length !== 0) {
		var i = e.join(st);
		return t.validators.find(function (a) {
			var l = a.validator;
			return l(i);
		})?.classGroupId;
	}
}
var yt = /^\[(.+)\]$/;
function pn(e) {
	if (yt.test(e)) {
		var t = yt.exec(e)[1],
			r = t?.substring(0, t.indexOf(':'));
		if (r) return 'arbitrary..' + r;
	}
}
function bn(e) {
	var t = e.theme,
		r = e.prefix,
		n = { nextPart: new Map(), validators: [] },
		o = gn(Object.entries(e.classGroups), r);
	return (
		o.forEach(function (i) {
			var a = i[0],
				l = i[1];
			qe(l, n, a, t);
		}),
		n
	);
}
function qe(e, t, r, n) {
	e.forEach(function (o) {
		if (typeof o == 'string') {
			var i = o === '' ? t : wt(t, o);
			i.classGroupId = r;
			return;
		}
		if (typeof o == 'function') {
			if (vn(o)) {
				qe(o(n), t, r, n);
				return;
			}
			t.validators.push({ validator: o, classGroupId: r });
			return;
		}
		Object.entries(o).forEach(function (a) {
			var l = a[0],
				c = a[1];
			qe(c, wt(t, l), r, n);
		});
	});
}
function wt(e, t) {
	var r = e;
	return (
		t.split(st).forEach(function (n) {
			r.nextPart.has(n) || r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
				(r = r.nextPart.get(n));
		}),
		r
	);
}
function vn(e) {
	return e.isThemeGetter;
}
function gn(e, t) {
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
function mn(e) {
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
var Yt = '!';
function hn(e) {
	var t = e.separator || ':',
		r = t.length === 1,
		n = t[0],
		o = t.length;
	return function (a) {
		for (var l = [], c = 0, p = 0, v, y = 0; y < a.length; y++) {
			var m = a[y];
			if (c === 0) {
				if (m === n && (r || a.slice(y, y + o) === t)) {
					l.push(a.slice(p, y)), (p = y + o);
					continue;
				}
				if (m === '/') {
					v = y;
					continue;
				}
			}
			m === '[' ? c++ : m === ']' && c--;
		}
		var g = l.length === 0 ? a : a.substring(p),
			x = g.startsWith(Yt),
			P = x ? g.substring(1) : g,
			$ = v && v > p ? v - p : void 0;
		return {
			modifiers: l,
			hasImportantModifier: x,
			baseClassName: P,
			maybePostfixModifierPosition: $,
		};
	};
}
function yn(e) {
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
function wn(e) {
	return { cache: mn(e.cacheSize), splitModifiers: hn(e), ...fn(e) };
}
var $n = /\s+/;
function xn(e, t) {
	var r = t.splitModifiers,
		n = t.getClassGroupId,
		o = t.getConflictingClassGroupIds,
		i = new Set();
	return e
		.trim()
		.split($n)
		.map(function (a) {
			var l = r(a),
				c = l.modifiers,
				p = l.hasImportantModifier,
				v = l.baseClassName,
				y = l.maybePostfixModifierPosition,
				m = n(y ? v.substring(0, y) : v),
				g = !!y;
			if (!m) {
				if (!y) return { isTailwindClass: !1, originalClassName: a };
				if (((m = n(v)), !m)) return { isTailwindClass: !1, originalClassName: a };
				g = !1;
			}
			var x = yn(c).join(':'),
				P = p ? x + Yt : x;
			return {
				isTailwindClass: !0,
				modifierId: P,
				classGroupId: m,
				originalClassName: a,
				hasPostfixModifier: g,
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
function Je() {
	for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
	var n,
		o,
		i,
		a = l;
	function l(p) {
		var v = t[0],
			y = t.slice(1),
			m = y.reduce(function (g, x) {
				return x(g);
			}, v());
		return (n = wn(m)), (o = n.cache.get), (i = n.cache.set), (a = c), c(p);
	}
	function c(p) {
		var v = o(p);
		if (v) return v;
		var y = xn(p, n);
		return i(p, y), y;
	}
	return function () {
		return a(dn.apply(null, arguments));
	};
}
function M(e) {
	var t = function (n) {
		return n[e] || [];
	};
	return (t.isThemeGetter = !0), t;
}
var qt = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	En = /^\d+\/\d+$/,
	Tn = new Set(['px', 'full', 'screen']),
	Pn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	Sn =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	kn = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function B(e) {
	return ae(e) || Tn.has(e) || En.test(e) || Xe(e);
}
function Xe(e) {
	return le(e, 'length', Fn);
}
function Cn(e) {
	return le(e, 'size', Jt);
}
function Mn(e) {
	return le(e, 'position', Jt);
}
function Nn(e) {
	return le(e, 'url', In);
}
function xe(e) {
	return le(e, 'number', ae);
}
function ae(e) {
	return !Number.isNaN(Number(e));
}
function An(e) {
	return e.endsWith('%') && ae(e.slice(0, -1));
}
function ge(e) {
	return $t(e) || le(e, 'number', $t);
}
function T(e) {
	return qt.test(e);
}
function me() {
	return !0;
}
function Q(e) {
	return Pn.test(e);
}
function Ln(e) {
	return le(e, '', Rn);
}
function le(e, t, r) {
	var n = qt.exec(e);
	return n ? (n[1] ? n[1] === t : r(n[2])) : !1;
}
function Fn(e) {
	return Sn.test(e);
}
function Jt() {
	return !1;
}
function In(e) {
	return e.startsWith('url(');
}
function $t(e) {
	return Number.isInteger(Number(e));
}
function Rn(e) {
	return kn.test(e);
}
function Ze() {
	var e = M('colors'),
		t = M('spacing'),
		r = M('blur'),
		n = M('brightness'),
		o = M('borderColor'),
		i = M('borderRadius'),
		a = M('borderSpacing'),
		l = M('borderWidth'),
		c = M('contrast'),
		p = M('grayscale'),
		v = M('hueRotate'),
		y = M('invert'),
		m = M('gap'),
		g = M('gradientColorStops'),
		x = M('gradientColorStopPositions'),
		P = M('inset'),
		$ = M('margin'),
		k = M('opacity'),
		N = M('padding'),
		F = M('saturate'),
		D = M('scale'),
		_ = M('sepia'),
		W = M('skew'),
		U = M('space'),
		s = M('translate'),
		E = function () {
			return ['auto', 'contain', 'none'];
		},
		O = function () {
			return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
		},
		d = function () {
			return ['auto', T, t];
		},
		b = function () {
			return [T, t];
		},
		u = function () {
			return ['', B];
		},
		f = function () {
			return ['auto', ae, T];
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
		S = function () {
			return ['solid', 'dashed', 'dotted', 'double', 'none'];
		},
		C = function () {
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
		L = function () {
			return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
		},
		I = function () {
			return ['', '0', T];
		},
		X = function () {
			return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
		},
		j = function () {
			return [ae, xe];
		},
		Z = function () {
			return [ae, T];
		};
	return {
		cacheSize: 500,
		theme: {
			colors: [me],
			spacing: [B],
			blur: ['none', '', Q, T],
			brightness: j(),
			borderColor: [e],
			borderRadius: ['none', '', 'full', Q, T],
			borderSpacing: b(),
			borderWidth: u(),
			contrast: j(),
			grayscale: I(),
			hueRotate: Z(),
			invert: I(),
			gap: b(),
			gradientColorStops: [e],
			gradientColorStopPositions: [An, Xe],
			inset: d(),
			margin: d(),
			opacity: j(),
			padding: b(),
			saturate: j(),
			scale: j(),
			sepia: I(),
			skew: Z(),
			space: b(),
			translate: b(),
		},
		classGroups: {
			aspect: [{ aspect: ['auto', 'square', 'video', T] }],
			container: ['container'],
			columns: [{ columns: [Q] }],
			'break-after': [{ 'break-after': X() }],
			'break-before': [{ 'break-before': X() }],
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
			'object-position': [{ object: [].concat(w(), [T]) }],
			overflow: [{ overflow: O() }],
			'overflow-x': [{ 'overflow-x': O() }],
			'overflow-y': [{ 'overflow-y': O() }],
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
			z: [{ z: ['auto', ge] }],
			basis: [{ basis: d() }],
			'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
			'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
			flex: [{ flex: ['1', 'auto', 'initial', 'none', T] }],
			grow: [{ grow: I() }],
			shrink: [{ shrink: I() }],
			order: [{ order: ['first', 'last', 'none', ge] }],
			'grid-cols': [{ 'grid-cols': [me] }],
			'col-start-end': [{ col: ['auto', { span: ['full', ge] }, T] }],
			'col-start': [{ 'col-start': f() }],
			'col-end': [{ 'col-end': f() }],
			'grid-rows': [{ 'grid-rows': [me] }],
			'row-start-end': [{ row: ['auto', { span: [ge] }, T] }],
			'row-start': [{ 'row-start': f() }],
			'row-end': [{ 'row-end': f() }],
			'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
			'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', T] }],
			'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', T] }],
			gap: [{ gap: [m] }],
			'gap-x': [{ 'gap-x': [m] }],
			'gap-y': [{ 'gap-y': [m] }],
			'justify-content': [{ justify: ['normal'].concat(L()) }],
			'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
			'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			'align-content': [{ content: ['normal'].concat(L(), ['baseline']) }],
			'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
			'place-content': [{ 'place-content': [].concat(L(), ['baseline']) }],
			'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
			'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
			p: [{ p: [N] }],
			px: [{ px: [N] }],
			py: [{ py: [N] }],
			ps: [{ ps: [N] }],
			pe: [{ pe: [N] }],
			pt: [{ pt: [N] }],
			pr: [{ pr: [N] }],
			pb: [{ pb: [N] }],
			pl: [{ pl: [N] }],
			m: [{ m: [$] }],
			mx: [{ mx: [$] }],
			my: [{ my: [$] }],
			ms: [{ ms: [$] }],
			me: [{ me: [$] }],
			mt: [{ mt: [$] }],
			mr: [{ mr: [$] }],
			mb: [{ mb: [$] }],
			ml: [{ ml: [$] }],
			'space-x': [{ 'space-x': [U] }],
			'space-x-reverse': ['space-x-reverse'],
			'space-y': [{ 'space-y': [U] }],
			'space-y-reverse': ['space-y-reverse'],
			w: [{ w: ['auto', 'min', 'max', 'fit', T, t] }],
			'min-w': [{ 'min-w': ['min', 'max', 'fit', T, B] }],
			'max-w': [
				{ 'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [Q] }, Q, T] },
			],
			h: [{ h: [T, t, 'auto', 'min', 'max', 'fit'] }],
			'min-h': [{ 'min-h': ['min', 'max', 'fit', T, B] }],
			'max-h': [{ 'max-h': [T, t, 'min', 'max', 'fit'] }],
			'font-size': [{ text: ['base', Q, Xe] }],
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
						xe,
					],
				},
			],
			'font-family': [{ font: [me] }],
			'fvn-normal': ['normal-nums'],
			'fvn-ordinal': ['ordinal'],
			'fvn-slashed-zero': ['slashed-zero'],
			'fvn-figure': ['lining-nums', 'oldstyle-nums'],
			'fvn-spacing': ['proportional-nums', 'tabular-nums'],
			'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
			tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', T] }],
			'line-clamp': [{ 'line-clamp': ['none', ae, xe] }],
			leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', T, B] }],
			'list-image': [{ 'list-image': ['none', T] }],
			'list-style-type': [{ list: ['none', 'disc', 'decimal', T] }],
			'list-style-position': [{ list: ['inside', 'outside'] }],
			'placeholder-color': [{ placeholder: [e] }],
			'placeholder-opacity': [{ 'placeholder-opacity': [k] }],
			'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
			'text-color': [{ text: [e] }],
			'text-opacity': [{ 'text-opacity': [k] }],
			'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
			'text-decoration-style': [{ decoration: [].concat(S(), ['wavy']) }],
			'text-decoration-thickness': [{ decoration: ['auto', 'from-font', B] }],
			'underline-offset': [{ 'underline-offset': ['auto', T, B] }],
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
						T,
					],
				},
			],
			whitespace: [
				{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
			],
			break: [{ break: ['normal', 'words', 'all', 'keep'] }],
			hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
			content: [{ content: ['none', T] }],
			'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
			'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
			'bg-opacity': [{ 'bg-opacity': [k] }],
			'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
			'bg-position': [{ bg: [].concat(w(), [Mn]) }],
			'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
			'bg-size': [{ bg: ['auto', 'cover', 'contain', Cn] }],
			'bg-image': [
				{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, Nn] },
			],
			'bg-color': [{ bg: [e] }],
			'gradient-from-pos': [{ from: [x] }],
			'gradient-via-pos': [{ via: [x] }],
			'gradient-to-pos': [{ to: [x] }],
			'gradient-from': [{ from: [g] }],
			'gradient-via': [{ via: [g] }],
			'gradient-to': [{ to: [g] }],
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
			'border-opacity': [{ 'border-opacity': [k] }],
			'border-style': [{ border: [].concat(S(), ['hidden']) }],
			'divide-x': [{ 'divide-x': [l] }],
			'divide-x-reverse': ['divide-x-reverse'],
			'divide-y': [{ 'divide-y': [l] }],
			'divide-y-reverse': ['divide-y-reverse'],
			'divide-opacity': [{ 'divide-opacity': [k] }],
			'divide-style': [{ divide: S() }],
			'border-color': [{ border: [o] }],
			'border-color-x': [{ 'border-x': [o] }],
			'border-color-y': [{ 'border-y': [o] }],
			'border-color-t': [{ 'border-t': [o] }],
			'border-color-r': [{ 'border-r': [o] }],
			'border-color-b': [{ 'border-b': [o] }],
			'border-color-l': [{ 'border-l': [o] }],
			'divide-color': [{ divide: [o] }],
			'outline-style': [{ outline: [''].concat(S()) }],
			'outline-offset': [{ 'outline-offset': [T, B] }],
			'outline-w': [{ outline: [B] }],
			'outline-color': [{ outline: [e] }],
			'ring-w': [{ ring: u() }],
			'ring-w-inset': ['ring-inset'],
			'ring-color': [{ ring: [e] }],
			'ring-opacity': [{ 'ring-opacity': [k] }],
			'ring-offset-w': [{ 'ring-offset': [B] }],
			'ring-offset-color': [{ 'ring-offset': [e] }],
			shadow: [{ shadow: ['', 'inner', 'none', Q, Ln] }],
			'shadow-color': [{ shadow: [me] }],
			opacity: [{ opacity: [k] }],
			'mix-blend': [{ 'mix-blend': C() }],
			'bg-blend': [{ 'bg-blend': C() }],
			filter: [{ filter: ['', 'none'] }],
			blur: [{ blur: [r] }],
			brightness: [{ brightness: [n] }],
			contrast: [{ contrast: [c] }],
			'drop-shadow': [{ 'drop-shadow': ['', 'none', Q, T] }],
			grayscale: [{ grayscale: [p] }],
			'hue-rotate': [{ 'hue-rotate': [v] }],
			invert: [{ invert: [y] }],
			saturate: [{ saturate: [F] }],
			sepia: [{ sepia: [_] }],
			'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
			'backdrop-blur': [{ 'backdrop-blur': [r] }],
			'backdrop-brightness': [{ 'backdrop-brightness': [n] }],
			'backdrop-contrast': [{ 'backdrop-contrast': [c] }],
			'backdrop-grayscale': [{ 'backdrop-grayscale': [p] }],
			'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [v] }],
			'backdrop-invert': [{ 'backdrop-invert': [y] }],
			'backdrop-opacity': [{ 'backdrop-opacity': [k] }],
			'backdrop-saturate': [{ 'backdrop-saturate': [F] }],
			'backdrop-sepia': [{ 'backdrop-sepia': [_] }],
			'border-collapse': [{ border: ['collapse', 'separate'] }],
			'border-spacing': [{ 'border-spacing': [a] }],
			'border-spacing-x': [{ 'border-spacing-x': [a] }],
			'border-spacing-y': [{ 'border-spacing-y': [a] }],
			'table-layout': [{ table: ['auto', 'fixed'] }],
			caption: [{ caption: ['top', 'bottom'] }],
			transition: [
				{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', T] },
			],
			duration: [{ duration: Z() }],
			ease: [{ ease: ['linear', 'in', 'out', 'in-out', T] }],
			delay: [{ delay: Z() }],
			animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', T] }],
			transform: [{ transform: ['', 'gpu', 'none'] }],
			scale: [{ scale: [D] }],
			'scale-x': [{ 'scale-x': [D] }],
			'scale-y': [{ 'scale-y': [D] }],
			rotate: [{ rotate: [ge, T] }],
			'translate-x': [{ 'translate-x': [s] }],
			'translate-y': [{ 'translate-y': [s] }],
			'skew-x': [{ 'skew-x': [W] }],
			'skew-y': [{ 'skew-y': [W] }],
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
						T,
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
						T,
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
			'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', T] }],
			fill: [{ fill: [e, 'none'] }],
			'stroke-w': [{ stroke: [B, xe] }],
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
function On(e, t) {
	for (var r in t) Xt(e, r, t[r]);
	return e;
}
var Kn = Object.prototype.hasOwnProperty,
	_n = new Set(['string', 'number', 'boolean']);
function Xt(e, t, r) {
	if (!Kn.call(e, t) || _n.has(typeof r) || r === null) {
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
		for (var n in r) Xt(e[t], n, r[n]);
	}
}
function zn(e) {
	for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
		r[n - 1] = arguments[n];
	return typeof e == 'function'
		? Je.apply(void 0, [Ze, e].concat(r))
		: Je.apply(
				void 0,
				[
					function () {
						return On(Ze(), e);
					},
				].concat(r)
		  );
}
var Dn = Je(Ze),
	Gn = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
	Zt = (e) => e || void 0,
	Ae = (...e) => Zt(Vt(e).filter(Boolean).join(' ')),
	Ke = null,
	Le = {},
	Qe = !1,
	he =
		(...e) =>
		(t) =>
			t.twMerge ? ((!Ke || Qe) && ((Qe = !1), (Ke = G(Le) ? Dn : zn(Le))), Zt(Ke(Ae(e)))) : Ae(e),
	xt = (e, t) => {
		for (let r in t) e.hasOwnProperty(r) ? (e[r] = Ae(e[r], t[r])) : (e[r] = t[r]);
		return e;
	},
	jn = (e, t) => {
		let {
				extend: r = null,
				slots: n = {},
				variants: o = {},
				compoundVariants: i = [],
				compoundSlots: a = [],
				defaultVariants: l = {},
			} = e,
			c = { ...Gn, ...t },
			p = r != null && r.base ? Ae(r.base, e?.base) : e?.base,
			v = r != null && r.variants && !G(r.variants) ? it(o, r.variants) : o,
			y =
				r != null && r.defaultVariants && !G(r.defaultVariants)
					? { ...r.defaultVariants, ...l }
					: l;
		!G(c.twMergeConfig) && !un(c.twMergeConfig, Le) && ((Qe = !0), (Le = c.twMergeConfig));
		let m = G(n) ? {} : { base: e?.base, ...n },
			g = G(r?.slots) ? m : xt({ ...r?.slots }, G(m) ? { base: e?.base } : m),
			x = ($) => {
				if (G(v) && G(n) && G(r?.slots)) return he(p, $?.class, $?.className)(c);
				if (i && !Array.isArray(i))
					throw new TypeError(
						`The "compoundVariants" prop must be an array. Received: ${typeof i}`
					);
				if (a && !Array.isArray(a))
					throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);
				let k = (d, b, u = [], f) => {
						let w = u;
						if (typeof b == 'string')
							w = w.concat(
								ht(b)
									.split(' ')
									.map((S) => `${d}:${S}`)
							);
						else if (Array.isArray(b)) w = w.concat(b.reduce((S, C) => S.concat(`${d}:${C}`), []));
						else if (typeof b == 'object' && typeof f == 'string') {
							for (let S in b)
								if (b.hasOwnProperty(S) && S === f) {
									let C = b[S];
									if (C && typeof C == 'string') {
										let L = ht(C);
										w[f]
											? (w[f] = w[f].concat(L.split(' ').map((I) => `${d}:${I}`)))
											: (w[f] = L.split(' ').map((I) => `${d}:${I}`));
									} else
										Array.isArray(C) &&
											C.length > 0 &&
											(w[f] = C.reduce((L, I) => L.concat(`${d}:${I}`), []));
								}
						}
						return w;
					},
					N = (d, b = v, u = null, f = null) => {
						var w;
						let S = b[d];
						if (!S || G(S)) return null;
						let C = (w = f?.[d]) != null ? w : $?.[d];
						if (C === null) return null;
						let L = mt(C),
							I =
								(Array.isArray(c.responsiveVariants) && c.responsiveVariants.length > 0) ||
								c.responsiveVariants === !0,
							X = y?.[d],
							j = [];
						if (typeof L == 'object' && I)
							for (let [K, ut] of Object.entries(L)) {
								let nr = S[ut];
								if (K === 'initial') {
									X = ut;
									continue;
								}
								(Array.isArray(c.responsiveVariants) && !c.responsiveVariants.includes(K)) ||
									(j = k(K, nr, j, u));
							}
						let Z = S[L] || S[mt(X)];
						return typeof j == 'object' && typeof u == 'string' && j[u]
							? xt(j, Z)
							: j.length > 0
							? (j.push(Z), j)
							: Z;
					},
					F = () => (v ? Object.keys(v).map((d) => N(d, v)) : null),
					D = (d, b) => {
						if (!v || typeof v != 'object') return null;
						let u = new Array();
						for (let f in v) {
							let w = N(f, v, d, b),
								S = d === 'base' && typeof w == 'string' ? w : w && w[d];
							S && (u[u.length] = S);
						}
						return u;
					},
					_ = {};
				for (let d in $) $[d] !== void 0 && (_[d] = $[d]);
				let W = (d, b) => {
						var u;
						let f =
							typeof $?.[d] == 'object' ? { [d]: (u = $[d]) == null ? void 0 : u.initial } : {};
						return { ...y, ..._, ...f, ...b };
					},
					U = (d = [], b) => {
						let u = [];
						for (let { class: f, className: w, ...S } of d) {
							let C = !0;
							for (let [L, I] of Object.entries(S)) {
								let X = W(L, b);
								if (Array.isArray(I)) {
									if (!I.includes(X[L])) {
										C = !1;
										break;
									}
								} else if (X[L] !== I) {
									C = !1;
									break;
								}
							}
							C && (f && u.push(f), w && u.push(w));
						}
						return u;
					},
					s = (d) => {
						let b = U(i, d),
							u = U(r?.compoundVariants, d);
						return cn(u, b);
					},
					E = (d) => {
						let b = s(d);
						if (!Array.isArray(b)) return b;
						let u = {};
						for (let f of b)
							if ((typeof f == 'string' && (u.base = he(u.base, f)(c)), typeof f == 'object'))
								for (let [w, S] of Object.entries(f)) u[w] = he(u[w], S)(c);
						return u;
					},
					O = (d) => {
						if (a.length < 1) return null;
						let b = {};
						for (let { slots: u = [], class: f, className: w, ...S } of a) {
							if (!G(S)) {
								let C = !0;
								for (let L of Object.keys(S)) {
									let I = W(L, d)[L];
									if (I === void 0 || (Array.isArray(S[L]) ? !S[L].includes(I) : S[L] !== I)) {
										C = !1;
										break;
									}
								}
								if (!C) continue;
							}
							for (let C of u) (b[C] = b[C] || []), b[C].push([f, w]);
						}
						return b;
					};
				if (!G(n) || !G(r?.slots)) {
					let d = {};
					if (typeof g == 'object' && !G(g))
						for (let b of Object.keys(g))
							d[b] = (u) => {
								var f, w;
								return he(
									g[b],
									D(b, u),
									((f = E(u)) != null ? f : [])[b],
									((w = O(u)) != null ? w : [])[b],
									u?.class,
									u?.className
								)(c);
							};
					return d;
				}
				return he(p, F(), s(), $?.class, $?.className)(c);
			},
			P = () => {
				if (!(!v || typeof v != 'object')) return Object.keys(v);
			};
		return (
			(x.variantKeys = P()),
			(x.extend = r),
			(x.base = p),
			(x.slots = g),
			(x.variants = v),
			(x.defaultVariants = y),
			(x.compoundSlots = a),
			(x.compoundVariants = i),
			x
		);
	},
	Hn = (e) => (t, r) => jn(t, r ? it(e, r) : e),
	Ee = ['small', 'medium', 'large'],
	Wn = Hn({
		twMerge: !0,
		twMergeConfig: {
			theme: {
				opacity: ['disabled'],
				spacing: ['divider', 'unit', ...Oe],
				borderWidth: Ee,
				borderRadius: Ee,
			},
			classGroups: {
				shadow: [{ shadow: Ee }],
				'font-size': [{ text: ['tiny', ...Ee] }],
				'bg-image': ['bg-stripe-gradient'],
				'min-w': [{ 'min-w': ['unit', ...Oe] }],
				'min-h': [{ 'min-h': ['unit', ...Oe] }],
			},
		},
	}),
	Vn = [
		'outline-none',
		'data-[focus-visible=true]:z-10',
		'data-[focus-visible=true]:outline-2',
		'data-[focus-visible=true]:outline-focus',
		'data-[focus-visible=true]:outline-offset-2',
	],
	Et = Wn({
		base: ['relative inline-flex items-center outline-none tap-highlight-transparent', ...Vn],
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
	Bn = 'flex mx-1 text-current self-center',
	_e = (e) => (e ? 'true' : void 0);
function Un(e) {
	const t = h.useRef(null);
	return h.useImperativeHandle(e, () => t.current), t;
}
var Qt = Y.createContext(null);
Qt.displayName = 'PressResponderContext';
var Yn = Object.defineProperty,
	qn = (e, t, r) =>
		t in e ? Yn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
	te = (e, t, r) => (qn(e, typeof t != 'symbol' ? t + '' : t, r), r),
	er = (e, t, r) => {
		if (!t.has(e)) throw TypeError('Cannot ' + r);
	},
	Jn = (e, t, r) => (er(e, t, 'read from private field'), r ? r.call(e) : t.get(e)),
	Xn = (e, t, r) => {
		if (t.has(e)) throw TypeError('Cannot add the same private member more than once');
		t instanceof WeakSet ? t.add(e) : t.set(e, r);
	},
	Zn = (e, t, r, n) => (er(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r),
	Se,
	Te = class {
		constructor(e, t, r) {
			te(this, 'type'),
				te(this, 'pointerType'),
				te(this, 'target'),
				te(this, 'shiftKey'),
				te(this, 'ctrlKey'),
				te(this, 'metaKey'),
				te(this, 'altKey'),
				Xn(this, Se, !0),
				(this.type = e),
				(this.pointerType = t),
				(this.target = r.currentTarget),
				(this.shiftKey = r.shiftKey),
				(this.metaKey = r.metaKey),
				(this.ctrlKey = r.ctrlKey),
				(this.altKey = r.altKey);
		}
		continuePropagation() {
			Zn(this, Se, !1);
		}
		get shouldStopPropagation() {
			return Jn(this, Se);
		}
	};
Se = new WeakMap();
var re = (e) => {
		var t;
		return (t = e?.ownerDocument) != null ? t : document;
	},
	et = (e) => {
		var t, r;
		return (r = (t = e?.ownerDocument) == null ? void 0 : t.defaultView) != null ? r : window;
	},
	pe = 'default',
	tt = '',
	ke = new WeakMap();
function Tt(e) {
	if (Ft()) {
		if (pe === 'default') {
			const t = re(e);
			(tt = t.documentElement.style.webkitUserSelect),
				(t.documentElement.style.webkitUserSelect = 'none');
		}
		pe = 'disabled';
	} else
		(e instanceof HTMLElement || e instanceof SVGElement) &&
			(ke.set(e, e.style.userSelect), (e.style.userSelect = 'none'));
}
function Pe(e) {
	if (Ft()) {
		if (pe !== 'disabled') return;
		(pe = 'restoring'),
			setTimeout(() => {
				Rt(() => {
					if (pe === 'restoring') {
						const t = re(e);
						t.documentElement.style.webkitUserSelect === 'none' &&
							(t.documentElement.style.webkitUserSelect = tt || ''),
							(tt = ''),
							(pe = 'default');
					}
				});
			}, 300);
	} else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ke.has(e)) {
		let t = ke.get(e);
		e.style.userSelect === 'none' && t && (e.style.userSelect = t),
			e.getAttribute('style') === '' && e.removeAttribute('style'),
			ke.delete(e);
	}
}
function Qn(e) {
	let t = h.useContext(Qt);
	if (t) {
		let { register: r, ...n } = t;
		(e = ie(n, e)), r();
	}
	return Ot(t, e.ref), e;
}
var Pt = Symbol('linkClicked');
function eo(e) {
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
			...m
		} = Qn(e),
		[g, x] = h.useState(!1),
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
		{ addGlobalListener: $, removeAllGlobalListeners: k } = Nr(),
		N = de((s, E) => {
			let O = P.current;
			if (a || O.didFirePressStart) return;
			let d = !0;
			if (((O.isTriggeringEvent = !0), n)) {
				let b = new Te('pressstart', E, s);
				n(b), (d = b.shouldStopPropagation);
			}
			return r && r(!0), (O.isTriggeringEvent = !1), (O.didFirePressStart = !0), x(!0), d;
		}),
		F = de((s, E, O = !0) => {
			let d = P.current;
			if (!d.didFirePressStart) return;
			(d.ignoreClickAfterPress = !0), (d.didFirePressStart = !1), (d.isTriggeringEvent = !0);
			let b = !0;
			if (o) {
				let u = new Te('pressend', E, s);
				o(u), (b = u.shouldStopPropagation);
			}
			if ((r && r(!1), x(!1), t && O && !a)) {
				let u = new Te('press', E, s);
				t(u), b && (b = u.shouldStopPropagation);
			}
			return (d.isTriggeringEvent = !1), b;
		}),
		D = de((s, E) => {
			let O = P.current;
			if (!a) {
				if (i) {
					O.isTriggeringEvent = !0;
					let d = new Te('pressup', E, s);
					return i(d), (O.isTriggeringEvent = !1), d.shouldStopPropagation;
				}
				return !0;
			}
		}),
		_ = de((s) => {
			let E = P.current;
			E.isPressed &&
				(E.isOverTarget && E.target && F(q(E.target, s), E.pointerType, !1),
				(E.isPressed = !1),
				(E.isOverTarget = !1),
				(E.activePointerId = null),
				(E.pointerType = null),
				k(),
				!v && E.target && Pe(E.target));
		}),
		W = de((s) => {
			p && _(s);
		}),
		U = h.useMemo(() => {
			let s = P.current,
				E = {
					onKeyDown(d) {
						var b;
						if (ze(d.nativeEvent, d.currentTarget) && d.currentTarget.contains(d.target)) {
							kt(d.target, d.key) && d.preventDefault();
							let u = !0;
							!s.isPressed &&
								!d.repeat &&
								((s.target = d.currentTarget),
								(s.isPressed = !0),
								(u = N(d, 'keyboard')),
								$(re(d.currentTarget), 'keyup', O, !1)),
								u && d.stopPropagation(),
								d.metaKey && we() && ((b = s.metaKeyEvents) == null || b.set(d.key, d.nativeEvent));
						} else d.key === 'Meta' && (s.metaKeyEvents = new Map());
					},
					onKeyUp(d) {
						s.target &&
							ze(d.nativeEvent, d.currentTarget) &&
							!d.repeat &&
							d.currentTarget.contains(d.target) &&
							D(q(s.target, d), 'keyboard');
					},
					onClick(d) {
						if (
							!(d && !d.currentTarget.contains(d.target)) &&
							d &&
							d.button === 0 &&
							!s.isTriggeringEvent &&
							!be.isOpening
						) {
							let b = !0;
							if (
								(a && d.preventDefault(),
								!s.ignoreClickAfterPress &&
									!s.ignoreEmulatedMouseEvents &&
									!s.isPressed &&
									(s.pointerType === 'virtual' || je(d.nativeEvent)))
							) {
								!a && !c && ne(d.currentTarget);
								let u = N(d, 'virtual'),
									f = D(d, 'virtual'),
									w = F(d, 'virtual');
								b = u && f && w;
							}
							(s.ignoreEmulatedMouseEvents = !1),
								(s.ignoreClickAfterPress = !1),
								b && d.stopPropagation();
						}
					},
				},
				O = (d) => {
					var b, u;
					if (s.isPressed && s.target && ze(d, s.target)) {
						kt(d.target, d.key) && d.preventDefault();
						let f = d.target,
							w = F(q(s.target, d), 'keyboard', s.target.contains(f));
						k(),
							w && d.stopPropagation(),
							d.key !== 'Enter' &&
								lt(s.target) &&
								s.target.contains(f) &&
								!d[Pt] &&
								((d[Pt] = !0), be(s.target, d, !1)),
							(s.isPressed = !1),
							(b = s.metaKeyEvents) == null || b.delete(d.key);
					} else if (d.key === 'Meta' && (u = s.metaKeyEvents) != null && u.size) {
						let f = s.metaKeyEvents;
						s.metaKeyEvents = null;
						for (let w of f.values())
							s.target && s.target.dispatchEvent(new KeyboardEvent('keyup', w));
					}
				};
			if (typeof PointerEvent < 'u') {
				(E.onPointerDown = (f) => {
					if (f.button !== 0 || !f.currentTarget.contains(f.target)) return;
					if (Lr(f.nativeEvent)) {
						s.pointerType = 'virtual';
						return;
					}
					De(f.currentTarget) && f.preventDefault(), (s.pointerType = f.pointerType);
					let w = !0;
					s.isPressed ||
						((s.isPressed = !0),
						(s.isOverTarget = !0),
						(s.activePointerId = f.pointerId),
						(s.target = f.currentTarget),
						!a && !c && ne(f.currentTarget),
						v || Tt(s.target),
						(w = N(f, s.pointerType)),
						$(re(f.currentTarget), 'pointermove', d, !1),
						$(re(f.currentTarget), 'pointerup', b, !1),
						$(re(f.currentTarget), 'pointercancel', u, !1)),
						w && f.stopPropagation();
				}),
					(E.onMouseDown = (f) => {
						f.currentTarget.contains(f.target) &&
							f.button === 0 &&
							(De(f.currentTarget) && f.preventDefault(), f.stopPropagation());
					}),
					(E.onPointerUp = (f) => {
						!f.currentTarget.contains(f.target) ||
							s.pointerType === 'virtual' ||
							(f.button === 0 && ce(f, f.currentTarget) && D(f, s.pointerType || f.pointerType));
					});
				let d = (f) => {
						f.pointerId !== s.activePointerId ||
							!s.target ||
							(ce(f, s.target)
								? s.isOverTarget || ((s.isOverTarget = !0), N(q(s.target, f), s.pointerType))
								: s.isOverTarget &&
								  ((s.isOverTarget = !1), F(q(s.target, f), s.pointerType, !1), W(f)));
					},
					b = (f) => {
						f.pointerId === s.activePointerId &&
							s.isPressed &&
							f.button === 0 &&
							s.target &&
							((ce(f, s.target) || s.isOverTarget) && F(q(s.target, f), s.pointerType),
							(s.isPressed = !1),
							(s.isOverTarget = !1),
							(s.activePointerId = null),
							(s.pointerType = null),
							k(),
							v || Pe(s.target));
					},
					u = (f) => {
						_(f);
					};
				E.onDragStart = (f) => {
					f.currentTarget.contains(f.target) && _(f);
				};
			} else {
				(E.onMouseDown = (u) => {
					if (u.button !== 0 || !u.currentTarget.contains(u.target)) return;
					if ((De(u.currentTarget) && u.preventDefault(), s.ignoreEmulatedMouseEvents)) {
						u.stopPropagation();
						return;
					}
					(s.isPressed = !0),
						(s.isOverTarget = !0),
						(s.target = u.currentTarget),
						(s.pointerType = je(u.nativeEvent) ? 'virtual' : 'mouse'),
						!a && !c && ne(u.currentTarget),
						N(u, s.pointerType) && u.stopPropagation(),
						$(re(u.currentTarget), 'mouseup', d, !1);
				}),
					(E.onMouseEnter = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						let f = !0;
						s.isPressed &&
							!s.ignoreEmulatedMouseEvents &&
							((s.isOverTarget = !0), (f = N(u, s.pointerType))),
							f && u.stopPropagation();
					}),
					(E.onMouseLeave = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						let f = !0;
						s.isPressed &&
							!s.ignoreEmulatedMouseEvents &&
							((s.isOverTarget = !1), (f = F(u, s.pointerType, !1)), W(u)),
							f && u.stopPropagation();
					}),
					(E.onMouseUp = (u) => {
						u.currentTarget.contains(u.target) &&
							!s.ignoreEmulatedMouseEvents &&
							u.button === 0 &&
							D(u, s.pointerType || 'mouse');
					});
				let d = (u) => {
					if (u.button === 0) {
						if (((s.isPressed = !1), k(), s.ignoreEmulatedMouseEvents)) {
							s.ignoreEmulatedMouseEvents = !1;
							return;
						}
						s.target &&
							(ce(u, s.target)
								? F(q(s.target, u), s.pointerType)
								: s.isOverTarget && F(q(s.target, u), s.pointerType, !1),
							(s.isOverTarget = !1));
					}
				};
				(E.onTouchStart = (u) => {
					if (!u.currentTarget.contains(u.target)) return;
					let f = to(u.nativeEvent);
					if (!f) return;
					(s.activePointerId = f.identifier),
						(s.ignoreEmulatedMouseEvents = !0),
						(s.isOverTarget = !0),
						(s.isPressed = !0),
						(s.target = u.currentTarget),
						(s.pointerType = 'touch'),
						!a && !c && ne(u.currentTarget),
						v || Tt(s.target),
						N(u, s.pointerType) && u.stopPropagation(),
						$(et(u.currentTarget), 'scroll', b, !0);
				}),
					(E.onTouchMove = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						if (!s.isPressed) {
							u.stopPropagation();
							return;
						}
						let f = St(u.nativeEvent, s.activePointerId),
							w = !0;
						f && ce(f, u.currentTarget)
							? s.isOverTarget || ((s.isOverTarget = !0), (w = N(u, s.pointerType)))
							: s.isOverTarget && ((s.isOverTarget = !1), (w = F(u, s.pointerType, !1)), W(u)),
							w && u.stopPropagation();
					}),
					(E.onTouchEnd = (u) => {
						if (!u.currentTarget.contains(u.target)) return;
						if (!s.isPressed) {
							u.stopPropagation();
							return;
						}
						let f = St(u.nativeEvent, s.activePointerId),
							w = !0;
						f && ce(f, u.currentTarget)
							? (D(u, s.pointerType), (w = F(u, s.pointerType)))
							: s.isOverTarget && (w = F(u, s.pointerType, !1)),
							w && u.stopPropagation(),
							(s.isPressed = !1),
							(s.activePointerId = null),
							(s.isOverTarget = !1),
							(s.ignoreEmulatedMouseEvents = !0),
							!v && s.target && Pe(s.target),
							k();
					}),
					(E.onTouchCancel = (u) => {
						u.currentTarget.contains(u.target) && (u.stopPropagation(), s.isPressed && _(u));
					});
				let b = (u) => {
					s.isPressed &&
						u.target.contains(s.target) &&
						_({ currentTarget: s.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
				};
				E.onDragStart = (u) => {
					u.currentTarget.contains(u.target) && _(u);
				};
			}
			return E;
		}, [$, a, c, k, v, _, W, F, N, D]);
	return (
		h.useEffect(
			() => () => {
				!v && P.current.target && Pe(P.current.target);
			},
			[v]
		),
		{ isPressed: l || g, pressProps: ie(m, U) }
	);
}
function lt(e) {
	return e.tagName === 'A' && e.hasAttribute('href');
}
function ze(e, t) {
	const { key: r, code: n } = e,
		o = t,
		i = o.getAttribute('role');
	return (
		(r === 'Enter' || r === ' ' || r === 'Spacebar' || n === 'Space') &&
		!(
			(o instanceof et(o).HTMLInputElement && !tr(o, r)) ||
			o instanceof et(o).HTMLTextAreaElement ||
			o.isContentEditable
		) &&
		!((i === 'link' || (!i && lt(o))) && r !== 'Enter')
	);
}
function to(e) {
	const { targetTouches: t } = e;
	return t.length > 0 ? t[0] : null;
}
function St(e, t) {
	const r = e.changedTouches;
	for (let n = 0; n < r.length; n++) {
		const o = r[n];
		if (o.identifier === t) return o;
	}
	return null;
}
function q(e, t) {
	return {
		currentTarget: e,
		shiftKey: t.shiftKey,
		ctrlKey: t.ctrlKey,
		metaKey: t.metaKey,
		altKey: t.altKey,
	};
}
function ro(e) {
	let t = e.width ? e.width / 2 : e.radiusX || 0,
		r = e.height ? e.height / 2 : e.radiusY || 0;
	return { top: e.clientY - r, right: e.clientX + t, bottom: e.clientY + r, left: e.clientX - t };
}
function no(e, t) {
	return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function ce(e, t) {
	let r = t.getBoundingClientRect(),
		n = ro(e);
	return no(r, n);
}
function De(e) {
	return !(e instanceof HTMLElement) || !e.hasAttribute('draggable');
}
function kt(e, t) {
	return e instanceof HTMLInputElement
		? !tr(e, t)
		: e instanceof HTMLButtonElement
		? e.type !== 'submit' && e.type !== 'reset'
		: !lt(e);
}
var oo = new Set([
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
function tr(e, t) {
	return e.type === 'checkbox' || e.type === 'radio' ? t === ' ' : oo.has(e.type);
}
var ao = (e) =>
	H.jsxs('svg', {
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
			H.jsx('path', { d: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' }),
			H.jsx('path', { d: 'M15 3h6v6' }),
			H.jsx('path', { d: 'M10 14L21 3' }),
		],
	});
function io(e, t) {
	let {
			elementType: r = 'a',
			onPress: n,
			onPressStart: o,
			onPressEnd: i,
			onClick: a,
			isDisabled: l,
			...c
		} = e,
		p = {};
	r !== 'a' && (p = { role: 'link', tabIndex: l ? void 0 : 0 });
	let { focusableProps: v } = on(e, t),
		{ pressProps: y, isPressed: m } = eo({
			onPress: n,
			onPressStart: o,
			onPressEnd: i,
			isDisabled: l,
			ref: t,
		}),
		g = mr(c, { labelable: !0, isLink: r === 'a' }),
		x = ie(v, y),
		P = Sr();
	return {
		isPressed: m,
		linkProps: ie(g, {
			...x,
			...p,
			'aria-disabled': l || void 0,
			'aria-current': e['aria-current'],
			onClick: ($) => {
				var k;
				(k = y.onClick) == null || k.call(y, $),
					a && a($),
					!P.isNative &&
						$.currentTarget instanceof HTMLAnchorElement &&
						$.currentTarget.href &&
						!$.isDefaultPrevented() &&
						kr($.currentTarget, $) &&
						($.preventDefault(), P.open($.currentTarget, $));
			},
		}),
	};
}
function so(e) {
	var t, r;
	const [n, o] = sn(e, Et.variantKeys),
		{
			ref: i,
			as: a,
			children: l,
			anchorIcon: c,
			isExternal: p = !1,
			showAnchorIcon: v = !1,
			autoFocus: y = !1,
			className: m,
			onPress: g,
			onPressStart: x,
			onPressEnd: P,
			onClick: $,
			...k
		} = n,
		N = a || 'a',
		F = Un(i),
		{ linkProps: D } = io(
			{
				...k,
				onPress: g,
				onPressStart: x,
				onPressEnd: P,
				onClick: $,
				isDisabled: e.isDisabled,
				elementType: `${a}`,
			},
			F
		),
		{ isFocused: _, isFocusVisible: W, focusProps: U } = tn({ autoFocus: y });
	p &&
		((k.rel = (t = k.rel) != null ? t : 'noopener noreferrer'),
		(k.target = (r = k.target) != null ? r : '_blank'));
	const s = h.useMemo(() => Et({ ...o, className: m }), [...Object.values(o), m]),
		E = h.useCallback(
			() => ({
				ref: F,
				className: s,
				'data-focus': _e(_),
				'data-disabled': _e(e.isDisabled),
				'data-focus-visible': _e(W),
				...ie(U, D, k),
			}),
			[s, _, W, U, D, k]
		);
	return { Component: N, children: l, anchorIcon: c, showAnchorIcon: v, getLinkProps: E };
}
var rr = an((e, t) => {
	const {
		Component: r,
		children: n,
		showAnchorIcon: o,
		anchorIcon: i = H.jsx(ao, { className: Bn }),
		getLinkProps: a,
	} = so({ ref: t, ...e });
	return H.jsx(r, { ...a(), children: H.jsxs(H.Fragment, { children: [n, o && i] }) });
});
rr.displayName = 'NextUI.Link';
var lo = rr;
const vo = (e, t) => {
		const r = document.querySelector(e);
		r &&
			(window.scrollTo({ behavior: 'smooth', top: r.getBoundingClientRect().top + window.scrollY }),
			t && setTimeout(t, 1e3));
	},
	Ct = '/div-software-logo.svg';
function go({ size: e }) {
	const t = {
			small: 'h-4 lg:h-5 xl:h-6',
			medium: 'h-6 lg:h-7 xl:h-8',
			large: 'h-7 lg:h-8 xl:h-10',
		},
		r = {
			small: 'font-semibold text-xl lg:text-2xl xl:text-3xl',
			medium: 'font-bold text-2xl lg:text-3xl xl:text-4xl',
			large: 'font-bold text-3xl lg:text-4xl xl:text-5xl',
		};
	return H.jsxs(lo, {
		href: '/',
		className: 'flex gap-1 xs:gap-2',
		children: [
			H.jsx('img', {
				src: Ct,
				alt: 'Div Software',
				width: '100%',
				height: 16,
				loading: 'lazy',
				className: t[e],
			}),
			H.jsxs('div', {
				'aria-label': 'logo name',
				className: 'flex flex-row gap-3',
				children: [
					H.jsx('p', { className: `text-foreground-200 ${r[e]}`, children: 'Div' }),
					H.jsx('p', { className: `text-primary-500 ${r[e]}`, children: 'Software' }),
				],
			}),
			H.jsx('img', {
				src: Ct,
				alt: 'Div Software',
				width: '100%',
				height: 16,
				loading: 'lazy',
				className: `${t[e]} rotate-180`,
			}),
		],
	});
}
export {
	fo as $,
	go as L,
	bo as a,
	on as b,
	ie as c,
	Vn as d,
	mr as e,
	an as f,
	Un as g,
	_e as h,
	co as i,
	H as j,
	fr as k,
	tn as l,
	sn as m,
	po as n,
	lo as o,
	vo as s,
	Wn as t,
	eo as u,
};
