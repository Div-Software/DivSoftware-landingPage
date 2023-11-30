import {
	t as _e,
	d as Ce,
	u as h,
	v as ke,
	L as Ze,
	a3 as Qe,
	M as Ke,
	k as F,
	e as Je,
	a5 as et,
	G as Ne,
	z as U,
	B as Pe,
	F as L,
	w as Y,
	x as tt,
	H as z,
	A as rt,
	y as je,
	V as nt,
	a6 as de,
	a7 as at,
	C as ot,
	D as lt,
	E as st,
} from './index.d26a153f.js';
import { r as d, R as it } from './index.d4f15412.js';
var V = function () {
	return (
		(V =
			Object.assign ||
			function (t) {
				for (var n, a = 1, o = arguments.length; a < o; a++) {
					n = arguments[a];
					for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
				}
				return t;
			}),
		V.apply(this, arguments)
	);
};
function Ee(e, t) {
	var n = {};
	for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
	if (e != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
			t.indexOf(a[o]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
				(n[a[o]] = e[a[o]]);
	return n;
}
function ct(e, t, n) {
	if (n || arguments.length === 2)
		for (var a = 0, o = t.length, s; a < o; a++)
			(s || !(a in t)) && (s || (s = Array.prototype.slice.call(t, 0, a)), (s[a] = t[a]));
	return e.concat(s || Array.prototype.slice.call(t));
}
var ve = _e({
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
				...Ce,
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
	he = _e({
		base: ['relative inline-flex items-center outline-none tap-highlight-transparent', ...Ce],
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
	ut = 'flex mx-1 text-current self-center',
	ft = Object.create,
	Re = Object.defineProperty,
	dt = Object.getOwnPropertyDescriptor,
	Oe = Object.getOwnPropertyNames,
	vt = Object.getPrototypeOf,
	ht = Object.prototype.hasOwnProperty,
	$e = (e, t) =>
		function () {
			return t || (0, e[Oe(e)[0]])((t = { exports: {} }).exports, t), t.exports;
		},
	mt = (e, t, n, a) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let o of Oe(t))
				!ht.call(e, o) &&
					o !== n &&
					Re(e, o, { get: () => t[o], enumerable: !(a = dt(t, o)) || a.enumerable });
		return e;
	},
	pt = (e, t, n) => (
		(n = e != null ? ft(vt(e)) : {}),
		mt(t || !e || !e.__esModule ? Re(n, 'default', { value: e, enumerable: !0 }) : n, e)
	),
	gt = $e({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js'(e) {
			var t = Symbol.for('react.element'),
				n = Symbol.for('react.portal'),
				a = Symbol.for('react.fragment'),
				o = Symbol.for('react.strict_mode'),
				s = Symbol.for('react.profiler'),
				i = Symbol.for('react.provider'),
				c = Symbol.for('react.context'),
				v = Symbol.for('react.forward_ref'),
				p = Symbol.for('react.suspense'),
				m = Symbol.for('react.memo'),
				b = Symbol.for('react.lazy'),
				y = Symbol.iterator;
			function _(r) {
				return r === null || typeof r != 'object'
					? null
					: ((r = (y && r[y]) || r['@@iterator']), typeof r == 'function' ? r : null);
			}
			var N = {
					isMounted: function () {
						return !1;
					},
					enqueueForceUpdate: function () {},
					enqueueReplaceState: function () {},
					enqueueSetState: function () {},
				},
				u = Object.assign,
				f = {};
			function g(r, l, w) {
				(this.props = r), (this.context = l), (this.refs = f), (this.updater = w || N);
			}
			(g.prototype.isReactComponent = {}),
				(g.prototype.setState = function (r, l) {
					if (typeof r != 'object' && typeof r != 'function' && r != null)
						throw Error(
							'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
						);
					this.updater.enqueueSetState(this, r, l, 'setState');
				}),
				(g.prototype.forceUpdate = function (r) {
					this.updater.enqueueForceUpdate(this, r, 'forceUpdate');
				});
			function E() {}
			E.prototype = g.prototype;
			function x(r, l, w) {
				(this.props = r), (this.context = l), (this.refs = f), (this.updater = w || N);
			}
			var j = (x.prototype = new E());
			(j.constructor = x), u(j, g.prototype), (j.isPureReactComponent = !0);
			var C = Array.isArray,
				T = Object.prototype.hasOwnProperty,
				B = { current: null },
				A = { key: !0, ref: !0, __self: !0, __source: !0 };
			function D(r, l, w) {
				var P,
					k = {},
					O = null,
					I = null;
				if (l != null)
					for (P in (l.ref !== void 0 && (I = l.ref), l.key !== void 0 && (O = '' + l.key), l))
						T.call(l, P) && !A.hasOwnProperty(P) && (k[P] = l[P]);
				var $ = arguments.length - 2;
				if ($ === 1) k.children = w;
				else if (1 < $) {
					for (var R = Array($), W = 0; W < $; W++) R[W] = arguments[W + 2];
					k.children = R;
				}
				if (r && r.defaultProps)
					for (P in (($ = r.defaultProps), $)) k[P] === void 0 && (k[P] = $[P]);
				return { $$typeof: t, type: r, key: O, ref: I, props: k, _owner: B.current };
			}
			function q(r, l) {
				return { $$typeof: t, type: r.type, key: l, ref: r.ref, props: r.props, _owner: r._owner };
			}
			function H(r) {
				return typeof r == 'object' && r !== null && r.$$typeof === t;
			}
			function ee(r) {
				var l = { '=': '=0', ':': '=2' };
				return (
					'$' +
					r.replace(/[=:]/g, function (w) {
						return l[w];
					})
				);
			}
			var re = /\/+/g;
			function te(r, l) {
				return typeof r == 'object' && r !== null && r.key != null
					? ee('' + r.key)
					: l.toString(36);
			}
			function G(r, l, w, P, k) {
				var O = typeof r;
				(O === 'undefined' || O === 'boolean') && (r = null);
				var I = !1;
				if (r === null) I = !0;
				else
					switch (O) {
						case 'string':
						case 'number':
							I = !0;
							break;
						case 'object':
							switch (r.$$typeof) {
								case t:
								case n:
									I = !0;
							}
					}
				if (I)
					return (
						(I = r),
						(k = k(I)),
						(r = P === '' ? '.' + te(I, 0) : P),
						C(k)
							? ((w = ''),
							  r != null && (w = r.replace(re, '$&/') + '/'),
							  G(k, l, w, '', function (W) {
									return W;
							  }))
							: k != null &&
							  (H(k) &&
									(k = q(
										k,
										w +
											(!k.key || (I && I.key === k.key)
												? ''
												: ('' + k.key).replace(re, '$&/') + '/') +
											r
									)),
							  l.push(k)),
						1
					);
				if (((I = 0), (P = P === '' ? '.' : P + ':'), C(r)))
					for (var $ = 0; $ < r.length; $++) {
						O = r[$];
						var R = P + te(O, $);
						I += G(O, l, w, R, k);
					}
				else if (((R = _(r)), typeof R == 'function'))
					for (r = R.call(r), $ = 0; !(O = r.next()).done; )
						(O = O.value), (R = P + te(O, $++)), (I += G(O, l, w, R, k));
				else if (O === 'object')
					throw (
						((l = String(r)),
						Error(
							'Objects are not valid as a React child (found: ' +
								(l === '[object Object]'
									? 'object with keys {' + Object.keys(r).join(', ') + '}'
									: l) +
								'). If you meant to render a collection of children, use an array instead.'
						))
					);
				return I;
			}
			function S(r, l, w) {
				if (r == null) return r;
				var P = [],
					k = 0;
				return (
					G(r, P, '', '', function (O) {
						return l.call(w, O, k++);
					}),
					P
				);
			}
			function Z(r) {
				if (r._status === -1) {
					var l = r._result;
					(l = l()),
						l.then(
							function (w) {
								(r._status === 0 || r._status === -1) && ((r._status = 1), (r._result = w));
							},
							function (w) {
								(r._status === 0 || r._status === -1) && ((r._status = 2), (r._result = w));
							}
						),
						r._status === -1 && ((r._status = 0), (r._result = l));
				}
				if (r._status === 1) return r._result.default;
				throw r._result;
			}
			var M = { current: null },
				X = { transition: null },
				Ge = { ReactCurrentDispatcher: M, ReactCurrentBatchConfig: X, ReactCurrentOwner: B };
			(e.Children = {
				map: S,
				forEach: function (r, l, w) {
					S(
						r,
						function () {
							l.apply(this, arguments);
						},
						w
					);
				},
				count: function (r) {
					var l = 0;
					return (
						S(r, function () {
							l++;
						}),
						l
					);
				},
				toArray: function (r) {
					return (
						S(r, function (l) {
							return l;
						}) || []
					);
				},
				only: function (r) {
					if (!H(r))
						throw Error('React.Children.only expected to receive a single React element child.');
					return r;
				},
			}),
				(e.Component = g),
				(e.Fragment = a),
				(e.Profiler = s),
				(e.PureComponent = x),
				(e.StrictMode = o),
				(e.Suspense = p),
				(e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ge),
				(e.cloneElement = function (r, l, w) {
					if (r == null)
						throw Error(
							'React.cloneElement(...): The argument must be a React element, but you passed ' +
								r +
								'.'
						);
					var P = u({}, r.props),
						k = r.key,
						O = r.ref,
						I = r._owner;
					if (l != null) {
						if (
							(l.ref !== void 0 && ((O = l.ref), (I = B.current)),
							l.key !== void 0 && (k = '' + l.key),
							r.type && r.type.defaultProps)
						)
							var $ = r.type.defaultProps;
						for (R in l)
							T.call(l, R) &&
								!A.hasOwnProperty(R) &&
								(P[R] = l[R] === void 0 && $ !== void 0 ? $[R] : l[R]);
					}
					var R = arguments.length - 2;
					if (R === 1) P.children = w;
					else if (1 < R) {
						$ = Array(R);
						for (var W = 0; W < R; W++) $[W] = arguments[W + 2];
						P.children = $;
					}
					return { $$typeof: t, type: r.type, key: k, ref: O, props: P, _owner: I };
				}),
				(e.createContext = function (r) {
					return (
						(r = {
							$$typeof: c,
							_currentValue: r,
							_currentValue2: r,
							_threadCount: 0,
							Provider: null,
							Consumer: null,
							_defaultValue: null,
							_globalName: null,
						}),
						(r.Provider = { $$typeof: i, _context: r }),
						(r.Consumer = r)
					);
				}),
				(e.createElement = D),
				(e.createFactory = function (r) {
					var l = D.bind(null, r);
					return (l.type = r), l;
				}),
				(e.createRef = function () {
					return { current: null };
				}),
				(e.forwardRef = function (r) {
					return { $$typeof: v, render: r };
				}),
				(e.isValidElement = H),
				(e.lazy = function (r) {
					return { $$typeof: b, _payload: { _status: -1, _result: r }, _init: Z };
				}),
				(e.memo = function (r, l) {
					return { $$typeof: m, type: r, compare: l === void 0 ? null : l };
				}),
				(e.startTransition = function (r) {
					var l = X.transition;
					X.transition = {};
					try {
						r();
					} finally {
						X.transition = l;
					}
				}),
				(e.unstable_act = function () {
					throw Error('act(...) is not supported in production builds of React.');
				}),
				(e.useCallback = function (r, l) {
					return M.current.useCallback(r, l);
				}),
				(e.useContext = function (r) {
					return M.current.useContext(r);
				}),
				(e.useDebugValue = function () {}),
				(e.useDeferredValue = function (r) {
					return M.current.useDeferredValue(r);
				}),
				(e.useEffect = function (r, l) {
					return M.current.useEffect(r, l);
				}),
				(e.useId = function () {
					return M.current.useId();
				}),
				(e.useImperativeHandle = function (r, l, w) {
					return M.current.useImperativeHandle(r, l, w);
				}),
				(e.useInsertionEffect = function (r, l) {
					return M.current.useInsertionEffect(r, l);
				}),
				(e.useLayoutEffect = function (r, l) {
					return M.current.useLayoutEffect(r, l);
				}),
				(e.useMemo = function (r, l) {
					return M.current.useMemo(r, l);
				}),
				(e.useReducer = function (r, l, w) {
					return M.current.useReducer(r, l, w);
				}),
				(e.useRef = function (r) {
					return M.current.useRef(r);
				}),
				(e.useState = function (r) {
					return M.current.useState(r);
				}),
				(e.useSyncExternalStore = function (r, l, w) {
					return M.current.useSyncExternalStore(r, l, w);
				}),
				(e.useTransition = function () {
					return M.current.useTransition();
				}),
				(e.version = '18.2.0');
		},
	}),
	bt = $e({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'(e, t) {
			t.exports = gt();
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
 */ var me = pt(bt()),
	yt = (e, t) => {
		var n;
		let a = [];
		const o =
				(n = me.Children.map(e, (i) =>
					(0, me.isValidElement)(i) && i.type === t ? (a.push(i), null) : i
				)) == null
					? void 0
					: n.filter(Boolean),
			s = a.length >= 0 ? a : void 0;
		return [o, s];
	},
	xt = (e) =>
		h.jsxs('svg', {
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
				h.jsx('path', { d: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' }),
				h.jsx('path', { d: 'M15 3h6v6' }),
				h.jsx('path', { d: 'M10 14L21 3' }),
			],
		});
function wt(e = {}) {
	let { isReadOnly: t } = e,
		[n, a] = ke(e.isSelected, e.defaultSelected || !1, e.onChange);
	function o(i) {
		t || a(i);
	}
	function s() {
		t || a(!n);
	}
	return { isSelected: n, setSelected: o, toggle: s };
}
function St(e, t) {
	let {
			elementType: n = 'a',
			onPress: a,
			onPressStart: o,
			onPressEnd: s,
			onClick: i,
			isDisabled: c,
			...v
		} = e,
		p = {};
	n !== 'a' && (p = { role: 'link', tabIndex: c ? void 0 : 0 });
	let { focusableProps: m } = Ze(e, t),
		{ pressProps: b, isPressed: y } = Qe({
			onPress: a,
			onPressStart: o,
			onPressEnd: s,
			isDisabled: c,
			ref: t,
		}),
		_ = Ke(v, { labelable: !0, isLink: n === 'a' }),
		N = F(m, b),
		u = Je();
	return {
		isPressed: y,
		linkProps: F(_, {
			...N,
			...p,
			'aria-disabled': c || void 0,
			'aria-current': e['aria-current'],
			onClick: (f) => {
				var g;
				(g = b.onClick) == null || g.call(b, f),
					i && i(f),
					!u.isNative &&
						f.currentTarget instanceof HTMLAnchorElement &&
						f.currentTarget.href &&
						!f.isDefaultPrevented() &&
						et(f.currentTarget, f) &&
						(f.preventDefault(), u.open(f.currentTarget, f));
			},
		}),
	};
}
function _t(e) {
	var t, n;
	const [a, o] = Ne(e, he.variantKeys),
		{
			ref: s,
			as: i,
			children: c,
			anchorIcon: v,
			isExternal: p = !1,
			showAnchorIcon: m = !1,
			autoFocus: b = !1,
			className: y,
			onPress: _,
			onPressStart: N,
			onPressEnd: u,
			onClick: f,
			...g
		} = a,
		E = i || 'a',
		x = U(s),
		{ linkProps: j } = St(
			{
				...g,
				onPress: _,
				onPressStart: N,
				onPressEnd: u,
				onClick: f,
				isDisabled: e.isDisabled,
				elementType: `${i}`,
			},
			x
		),
		{ isFocused: C, isFocusVisible: T, focusProps: B } = Pe({ autoFocus: b });
	p &&
		((g.rel = (t = g.rel) != null ? t : 'noopener noreferrer'),
		(g.target = (n = g.target) != null ? n : '_blank'));
	const A = d.useMemo(() => he({ ...o, className: y }), [...Object.values(o), y]),
		D = d.useCallback(
			() => ({
				ref: x,
				className: A,
				'data-focus': L(C),
				'data-disabled': L(e.isDisabled),
				'data-focus-visible': L(T),
				...F(B, j, g),
			}),
			[A, C, T, B, j, g]
		);
	return { Component: E, children: c, anchorIcon: v, showAnchorIcon: m, getLinkProps: D };
}
var Ie = Y((e, t) => {
	const {
		Component: n,
		children: a,
		showAnchorIcon: o,
		anchorIcon: s = h.jsx(xt, { className: ut }),
		getLinkProps: i,
	} = _t({ ref: t, ...e });
	return h.jsx(n, { ...i(), children: h.jsxs(h.Fragment, { children: [a, o && s] }) });
});
Ie.displayName = 'NextUI.Link';
var ue = Ie,
	oe = 'right-scroll-bar-position',
	le = 'width-before-scroll-bar',
	Ct = 'with-scroll-bars-hidden',
	kt = '--removed-body-scroll-bar-size';
function Nt(e, t) {
	return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function Pt(e, t) {
	var n = d.useState(function () {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(a) {
					var o = n.value;
					o !== a && ((n.value = a), n.callback(a, o));
				},
			},
		};
	})[0];
	return (n.callback = t), n.facade;
}
function jt(e, t) {
	return Pt(t || null, function (n) {
		return e.forEach(function (a) {
			return Nt(a, n);
		});
	});
}
function Et(e) {
	return e;
}
function Rt(e, t) {
	t === void 0 && (t = Et);
	var n = [],
		a = !1,
		o = {
			read: function () {
				if (a)
					throw new Error(
						'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
					);
				return n.length ? n[n.length - 1] : e;
			},
			useMedium: function (s) {
				var i = t(s, a);
				return (
					n.push(i),
					function () {
						n = n.filter(function (c) {
							return c !== i;
						});
					}
				);
			},
			assignSyncMedium: function (s) {
				for (a = !0; n.length; ) {
					var i = n;
					(n = []), i.forEach(s);
				}
				n = {
					push: function (c) {
						return s(c);
					},
					filter: function () {
						return n;
					},
				};
			},
			assignMedium: function (s) {
				a = !0;
				var i = [];
				if (n.length) {
					var c = n;
					(n = []), c.forEach(s), (i = n);
				}
				var v = function () {
						var m = i;
						(i = []), m.forEach(s);
					},
					p = function () {
						return Promise.resolve().then(v);
					};
				p(),
					(n = {
						push: function (m) {
							i.push(m), p();
						},
						filter: function (m) {
							return (i = i.filter(m)), n;
						},
					});
			},
		};
	return o;
}
function Ot(e) {
	e === void 0 && (e = {});
	var t = Rt(null);
	return (t.options = V({ async: !0, ssr: !1 }, e)), t;
}
var Me = function (e) {
	var t = e.sideCar,
		n = Ee(e, ['sideCar']);
	if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
	var a = t.read();
	if (!a) throw new Error('Sidecar medium not found');
	return d.createElement(a, V({}, n));
};
Me.isSideCarExport = !0;
function $t(e, t) {
	return e.useMedium(t), Me;
}
var Te = Ot(),
	ie = function () {},
	se = d.forwardRef(function (e, t) {
		var n = d.useRef(null),
			a = d.useState({ onScrollCapture: ie, onWheelCapture: ie, onTouchMoveCapture: ie }),
			o = a[0],
			s = a[1],
			i = e.forwardProps,
			c = e.children,
			v = e.className,
			p = e.removeScrollBar,
			m = e.enabled,
			b = e.shards,
			y = e.sideCar,
			_ = e.noIsolation,
			N = e.inert,
			u = e.allowPinchZoom,
			f = e.as,
			g = f === void 0 ? 'div' : f,
			E = e.gapMode,
			x = Ee(e, [
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
			j = y,
			C = jt([n, t]),
			T = V(V({}, x), o);
		return d.createElement(
			d.Fragment,
			null,
			m &&
				d.createElement(j, {
					sideCar: Te,
					removeScrollBar: p,
					shards: b,
					noIsolation: _,
					inert: N,
					setCallbacks: s,
					allowPinchZoom: !!u,
					lockRef: n,
					gapMode: E,
				}),
			i
				? d.cloneElement(d.Children.only(c), V(V({}, T), { ref: C }))
				: d.createElement(g, V({}, T, { className: v, ref: C }), c)
		);
	});
se.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
se.classNames = { fullWidth: le, zeroRight: oe };
var pe,
	It = function () {
		if (pe) return pe;
		if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
	};
function Mt() {
	if (!document) return null;
	var e = document.createElement('style');
	e.type = 'text/css';
	var t = It();
	return t && e.setAttribute('nonce', t), e;
}
function Tt(e, t) {
	e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function Bt(e) {
	var t = document.head || document.getElementsByTagName('head')[0];
	t.appendChild(e);
}
var Lt = function () {
		var e = 0,
			t = null;
		return {
			add: function (n) {
				e == 0 && (t = Mt()) && (Tt(t, n), Bt(t)), e++;
			},
			remove: function () {
				e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
			},
		};
	},
	At = function () {
		var e = Lt();
		return function (t, n) {
			d.useEffect(
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
	Be = function () {
		var e = At(),
			t = function (n) {
				var a = n.styles,
					o = n.dynamic;
				return e(a, o), null;
			};
		return t;
	},
	Dt = { left: 0, top: 0, right: 0, gap: 0 },
	ce = function (e) {
		return parseInt(e || '', 10) || 0;
	},
	Wt = function (e) {
		var t = window.getComputedStyle(document.body),
			n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
			a = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
			o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
		return [ce(n), ce(a), ce(o)];
	},
	Vt = function (e) {
		if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return Dt;
		var t = Wt(e),
			n = document.documentElement.clientWidth,
			a = window.innerWidth;
		return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, a - n + t[2] - t[0]) };
	},
	Ht = Be(),
	zt = function (e, t, n, a) {
		var o = e.left,
			s = e.top,
			i = e.right,
			c = e.gap;
		return (
			n === void 0 && (n = 'margin'),
			`
  .`
				.concat(
					Ct,
					` {
   overflow: hidden `
				)
				.concat(
					a,
					`;
   padding-right: `
				)
				.concat(c, 'px ')
				.concat(
					a,
					`;
  }
  body {
    overflow: hidden `
				)
				.concat(
					a,
					`;
    overscroll-behavior: contain;
    `
				)
				.concat(
					[
						t && 'position: relative '.concat(a, ';'),
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
								.concat(c, 'px ')
								.concat(
									a,
									`;
    `
								),
						n === 'padding' && 'padding-right: '.concat(c, 'px ').concat(a, ';'),
					]
						.filter(Boolean)
						.join(''),
					`
  }
  
  .`
				)
				.concat(
					oe,
					` {
    right: `
				)
				.concat(c, 'px ')
				.concat(
					a,
					`;
  }
  
  .`
				)
				.concat(
					le,
					` {
    margin-right: `
				)
				.concat(c, 'px ')
				.concat(
					a,
					`;
  }
  
  .`
				)
				.concat(oe, ' .')
				.concat(
					oe,
					` {
    right: 0 `
				)
				.concat(
					a,
					`;
  }
  
  .`
				)
				.concat(le, ' .')
				.concat(
					le,
					` {
    margin-right: 0 `
				)
				.concat(
					a,
					`;
  }
  
  body {
    `
				)
				.concat(kt, ': ')
				.concat(
					c,
					`px;
  }
`
				)
		);
	},
	Ft = function (e) {
		var t = e.noRelative,
			n = e.noImportant,
			a = e.gapMode,
			o = a === void 0 ? 'margin' : a,
			s = d.useMemo(
				function () {
					return Vt(o);
				},
				[o]
			);
		return d.createElement(Ht, { styles: zt(s, !t, o, n ? '' : '!important') });
	},
	fe = !1;
if (typeof window < 'u')
	try {
		var ne = Object.defineProperty({}, 'passive', {
			get: function () {
				return (fe = !0), !0;
			},
		});
		window.addEventListener('test', ne, ne), window.removeEventListener('test', ne, ne);
	} catch {
		fe = !1;
	}
var Q = fe ? { passive: !1 } : !1,
	Ut = function (e) {
		return e.tagName === 'TEXTAREA';
	},
	Le = function (e, t) {
		var n = window.getComputedStyle(e);
		return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !Ut(e) && n[t] === 'visible');
	},
	Yt = function (e) {
		return Le(e, 'overflowY');
	},
	Xt = function (e) {
		return Le(e, 'overflowX');
	},
	ge = function (e, t) {
		var n = t.ownerDocument,
			a = t;
		do {
			typeof ShadowRoot < 'u' && a instanceof ShadowRoot && (a = a.host);
			var o = Ae(e, a);
			if (o) {
				var s = De(e, a),
					i = s[1],
					c = s[2];
				if (i > c) return !0;
			}
			a = a.parentNode;
		} while (a && a !== n.body);
		return !1;
	},
	qt = function (e) {
		var t = e.scrollTop,
			n = e.scrollHeight,
			a = e.clientHeight;
		return [t, n, a];
	},
	Gt = function (e) {
		var t = e.scrollLeft,
			n = e.scrollWidth,
			a = e.clientWidth;
		return [t, n, a];
	},
	Ae = function (e, t) {
		return e === 'v' ? Yt(t) : Xt(t);
	},
	De = function (e, t) {
		return e === 'v' ? qt(t) : Gt(t);
	},
	Zt = function (e, t) {
		return e === 'h' && t === 'rtl' ? -1 : 1;
	},
	Qt = function (e, t, n, a, o) {
		var s = Zt(e, window.getComputedStyle(t).direction),
			i = s * a,
			c = n.target,
			v = t.contains(c),
			p = !1,
			m = i > 0,
			b = 0,
			y = 0;
		do {
			var _ = De(e, c),
				N = _[0],
				u = _[1],
				f = _[2],
				g = u - f - s * N;
			(N || g) && Ae(e, c) && ((b += g), (y += N)),
				c instanceof ShadowRoot ? (c = c.host) : (c = c.parentNode);
		} while ((!v && c !== document.body) || (v && (t.contains(c) || t === c)));
		return (
			((m && ((o && Math.abs(b) < 1) || (!o && i > b))) ||
				(!m && ((o && Math.abs(y) < 1) || (!o && -i > y)))) &&
				(p = !0),
			p
		);
	},
	ae = function (e) {
		return 'changedTouches' in e
			? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
			: [0, 0];
	},
	be = function (e) {
		return [e.deltaX, e.deltaY];
	},
	ye = function (e) {
		return e && 'current' in e ? e.current : e;
	},
	Kt = function (e, t) {
		return e[0] === t[0] && e[1] === t[1];
	},
	Jt = function (e) {
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
	er = 0,
	K = [];
function tr(e) {
	var t = d.useRef([]),
		n = d.useRef([0, 0]),
		a = d.useRef(),
		o = d.useState(er++)[0],
		s = d.useState(Be)[0],
		i = d.useRef(e);
	d.useEffect(
		function () {
			i.current = e;
		},
		[e]
	),
		d.useEffect(
			function () {
				if (e.inert) {
					document.body.classList.add('block-interactivity-'.concat(o));
					var u = ct([e.lockRef.current], (e.shards || []).map(ye), !0).filter(Boolean);
					return (
						u.forEach(function (f) {
							return f.classList.add('allow-interactivity-'.concat(o));
						}),
						function () {
							document.body.classList.remove('block-interactivity-'.concat(o)),
								u.forEach(function (f) {
									return f.classList.remove('allow-interactivity-'.concat(o));
								});
						}
					);
				}
			},
			[e.inert, e.lockRef.current, e.shards]
		);
	var c = d.useCallback(function (u, f) {
			if ('touches' in u && u.touches.length === 2) return !i.current.allowPinchZoom;
			var g = ae(u),
				E = n.current,
				x = 'deltaX' in u ? u.deltaX : E[0] - g[0],
				j = 'deltaY' in u ? u.deltaY : E[1] - g[1],
				C,
				T = u.target,
				B = Math.abs(x) > Math.abs(j) ? 'h' : 'v';
			if ('touches' in u && B === 'h' && T.type === 'range') return !1;
			var A = ge(B, T);
			if (!A) return !0;
			if ((A ? (C = B) : ((C = B === 'v' ? 'h' : 'v'), (A = ge(B, T))), !A)) return !1;
			if ((!a.current && 'changedTouches' in u && (x || j) && (a.current = C), !C)) return !0;
			var D = a.current || C;
			return Qt(D, f, u, D === 'h' ? x : j, !0);
		}, []),
		v = d.useCallback(function (u) {
			var f = u;
			if (!(!K.length || K[K.length - 1] !== s)) {
				var g = 'deltaY' in f ? be(f) : ae(f),
					E = t.current.filter(function (C) {
						return (
							C.name === f.type &&
							(C.target === f.target || f.target === C.shadowParent) &&
							Kt(C.delta, g)
						);
					})[0];
				if (E && E.should) {
					f.cancelable && f.preventDefault();
					return;
				}
				if (!E) {
					var x = (i.current.shards || [])
							.map(ye)
							.filter(Boolean)
							.filter(function (C) {
								return C.contains(f.target);
							}),
						j = x.length > 0 ? c(f, x[0]) : !i.current.noIsolation;
					j && f.cancelable && f.preventDefault();
				}
			}
		}, []),
		p = d.useCallback(function (u, f, g, E) {
			var x = { name: u, delta: f, target: g, should: E, shadowParent: rr(g) };
			t.current.push(x),
				setTimeout(function () {
					t.current = t.current.filter(function (j) {
						return j !== x;
					});
				}, 1);
		}, []),
		m = d.useCallback(function (u) {
			(n.current = ae(u)), (a.current = void 0);
		}, []),
		b = d.useCallback(function (u) {
			p(u.type, be(u), u.target, c(u, e.lockRef.current));
		}, []),
		y = d.useCallback(function (u) {
			p(u.type, ae(u), u.target, c(u, e.lockRef.current));
		}, []);
	d.useEffect(function () {
		return (
			K.push(s),
			e.setCallbacks({ onScrollCapture: b, onWheelCapture: b, onTouchMoveCapture: y }),
			document.addEventListener('wheel', v, Q),
			document.addEventListener('touchmove', v, Q),
			document.addEventListener('touchstart', m, Q),
			function () {
				(K = K.filter(function (u) {
					return u !== s;
				})),
					document.removeEventListener('wheel', v, Q),
					document.removeEventListener('touchmove', v, Q),
					document.removeEventListener('touchstart', m, Q);
			}
		);
	}, []);
	var _ = e.removeScrollBar,
		N = e.inert;
	return d.createElement(
		d.Fragment,
		null,
		N ? d.createElement(s, { styles: Jt(o) }) : null,
		_ ? d.createElement(Ft, { gapMode: e.gapMode }) : null
	);
}
function rr(e) {
	for (var t = null; e !== null; )
		e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
	return t;
}
const nr = $t(Te, tr);
var We = d.forwardRef(function (e, t) {
	return d.createElement(se, V({}, e, { ref: t, sideCar: nr }));
});
We.classNames = se.classNames;
const ar = We;
var [or, J] = tt({
		name: 'NavbarContext',
		strict: !0,
		errorMessage:
			'useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />',
	}),
	lr = {
		enter: {
			height: 'calc(100vh - var(--navbar-height) - 1px)',
			transition: { duration: 0.3, easings: 'easeOut' },
		},
		exit: { height: 0, transition: { duration: 0.25, easings: 'easeIn' } },
	},
	Ve = Y((e, t) => {
		var n, a;
		const { className: o, children: s, portalContainer: i, motionProps: c, style: v, ...p } = e,
			m = U(t),
			{ slots: b, isMenuOpen: y, height: _, disableAnimation: N, classNames: u } = J(),
			f = z(u?.menu, o),
			g = d.useCallback(
				({ children: x }) =>
					h.jsx(ar, { forwardProps: !0, enabled: y, removeScrollBar: !1, children: x }),
				[y]
			),
			E = N
				? h.jsx(g, {
						children: h.jsx('ul', {
							ref: m,
							className: (n = b.menu) == null ? void 0 : n.call(b, { class: f }),
							'data-open': L(y),
							style: { '--navbar-height': _ },
							...p,
							children: s,
						}),
				  })
				: h.jsx(rt, {
						mode: 'wait',
						children: y
							? h.jsx(g, {
									children: h.jsx(je.ul, {
										ref: m,
										layoutScroll: !0,
										animate: 'enter',
										className: (a = b.menu) == null ? void 0 : a.call(b, { class: f }),
										'data-open': L(y),
										exit: 'exit',
										initial: 'exit',
										style: { '--navbar-height': _, ...v },
										variants: lr,
										...F(c, p),
										children: s,
									}),
							  })
							: null,
				  });
		return h.jsx(nt, { portalContainer: i, children: E });
	});
Ve.displayName = 'NextUI.NavbarMenu';
var He = Ve,
	sr = {
		visible: { y: 0, transition: { ease: de.easeOut } },
		hidden: { y: '-100%', transition: { ease: de.easeIn } },
	},
	ir = typeof window < 'u';
function xe(e) {
	return ir
		? e
			? { x: e.scrollLeft, y: e.scrollTop }
			: { x: window.scrollX, y: window.scrollY }
		: { x: 0, y: 0 };
}
var cr = (e) => {
	const { elementRef: t, delay: n = 30, callback: a, isEnabled: o } = e,
		s = d.useRef(o ? xe(t?.current) : { x: 0, y: 0 });
	let i = null;
	const c = () => {
		const v = xe(t?.current);
		typeof a == 'function' && a({ prevPos: s.current, currPos: v }), (s.current = v), (i = null);
	};
	return (
		d.useEffect(() => {
			if (!o) return;
			const v = () => {
					n ? i === null && (i = setTimeout(c, n)) : c();
				},
				p = t?.current || window;
			return p.addEventListener('scroll', v), () => p.removeEventListener('scroll', v);
		}, [t?.current, n, o]),
		s.current
	);
};
function ur(e) {
	var t;
	const [n, a] = Ne(e, ve.variantKeys),
		{
			ref: o,
			as: s,
			parentRef: i,
			height: c = '4rem',
			shouldHideOnScroll: v = !1,
			disableScrollHandler: p = !1,
			onScrollPositionChange: m,
			isMenuOpen: b,
			isMenuDefaultOpen: y,
			onMenuOpenChange: _ = () => {},
			motionProps: N,
			className: u,
			classNames: f,
			...g
		} = n,
		E = s || 'nav',
		x = U(o),
		j = d.useRef(0),
		C = d.useRef(0),
		[T, B] = d.useState(!1),
		A = d.useCallback(
			(S) => {
				_(S || !1);
			},
			[_]
		),
		[D, q] = ke(b, y, A),
		H = () => {
			if (x.current) {
				const S = x.current.offsetWidth;
				S !== j.current && (j.current = S);
			}
		};
	at({
		ref: x,
		onResize: () => {
			var S;
			((S = x.current) == null ? void 0 : S.offsetWidth) !== j.current && (H(), q(!1));
		},
	}),
		d.useEffect(() => {
			var S;
			H(), (C.current = ((S = x.current) == null ? void 0 : S.offsetHeight) || 0);
		}, []);
	const ee = d.useMemo(() => ve({ ...a, hideOnScroll: v }), [...Object.values(a), v]),
		re = z(f?.base, u);
	cr({
		elementRef: i,
		isEnabled: v || !p,
		callback: ({ prevPos: S, currPos: Z }) => {
			m?.(Z.y),
				v &&
					B((M) => {
						const X = Z.y > S.y && Z.y > C.current;
						return X !== M ? X : M;
					});
		},
	});
	const te = (S = {}) => ({
			...F(g, S),
			'data-hidden': L(T),
			'data-menu-open': L(D),
			ref: x,
			className: ee.base({ class: z(re, S?.className) }),
			style: { '--navbar-height': c, ...S?.style },
		}),
		G = (S = {}) => ({
			...S,
			'data-menu-open': L(D),
			className: ee.wrapper({ class: z(f?.wrapper, S?.className) }),
		});
	return {
		Component: E,
		slots: ee,
		domRef: x,
		height: c,
		isHidden: T,
		disableAnimation: (t = e.disableAnimation) != null ? t : !1,
		shouldHideOnScroll: v,
		isMenuOpen: D,
		classNames: f,
		setIsMenuOpen: q,
		motionProps: N,
		getBaseProps: te,
		getWrapperProps: G,
	};
}
var ze = Y((e, t) => {
	const { children: n, ...a } = e,
		o = ur({ ...a, ref: t }),
		s = o.Component,
		[i, c] = yt(n, He),
		v = h.jsxs(h.Fragment, {
			children: [h.jsx('header', { ...o.getWrapperProps(), children: i }), c],
		});
	return h.jsx(or, {
		value: o,
		children: o.shouldHideOnScroll
			? h.jsx(je.nav, {
					animate: o.isHidden ? 'hidden' : 'visible',
					initial: !1,
					variants: sr,
					...F(o.getBaseProps(), o.motionProps),
					children: v,
			  })
			: h.jsx(s, { ...o.getBaseProps(), children: v }),
	});
});
ze.displayName = 'NextUI.Navbar';
var fr = ze,
	Fe = Y((e, t) => {
		var n;
		const { as: a, className: o, children: s, ...i } = e,
			c = a || 'div',
			v = U(t),
			{ slots: p, classNames: m } = J(),
			b = z(m?.brand, o);
		return h.jsx(c, {
			ref: v,
			className: (n = p.brand) == null ? void 0 : n.call(p, { class: b }),
			...i,
			children: s,
		});
	});
Fe.displayName = 'NextUI.NavbarBrand';
var dr = Fe,
	Ue = Y((e, t) => {
		var n;
		const { as: a, className: o, children: s, justify: i = 'start', ...c } = e,
			v = a || 'ul',
			p = U(t),
			{ slots: m, classNames: b } = J(),
			y = z(b?.content, o);
		return h.jsx(v, {
			ref: p,
			className: (n = m.content) == null ? void 0 : n.call(m, { class: y }),
			'data-justify': i,
			...c,
			children: s,
		});
	});
Ue.displayName = 'NextUI.NavbarContent';
var vr = Ue,
	Ye = Y((e, t) => {
		var n;
		const { as: a, className: o, children: s, isActive: i, ...c } = e,
			v = a || 'li',
			p = U(t),
			{ slots: m, classNames: b } = J(),
			y = z(b?.item, o);
		return h.jsx(v, {
			ref: p,
			className: (n = m.item) == null ? void 0 : n.call(m, { class: y }),
			'data-active': L(i),
			...c,
			children: s,
		});
	});
Ye.displayName = 'NextUI.NavbarItem';
var hr = Ye,
	Xe = Y((e, t) => {
		var n;
		const { className: a, children: o, isActive: s, ...i } = e,
			c = U(t),
			{ slots: v, isMenuOpen: p, classNames: m } = J(),
			b = z(m?.menuItem, a);
		return h.jsx('li', {
			ref: c,
			className: (n = v.menuItem) == null ? void 0 : n.call(v, { class: b }),
			'data-active': L(s),
			'data-open': L(p),
			...i,
			children: o,
		});
	});
Xe.displayName = 'NextUI.NavbarMenuItem';
var mr = Xe;
function pr(e, t, n) {
	const { isSelected: a } = t,
		{ isPressed: o, buttonProps: s } = ot({ ...e, onPress: lt(t.toggle, e.onPress) }, n);
	return { isPressed: o, buttonProps: F(s, { 'aria-pressed': a }) };
}
var qe = Y((e, t) => {
	var n;
	const { as: a, icon: o, className: s, onChange: i, autoFocus: c, srOnlyText: v, ...p } = e,
		m = a || 'button',
		b = U(t),
		{ slots: y, classNames: _, isMenuOpen: N, setIsMenuOpen: u } = J(),
		g = wt({
			...p,
			isSelected: N,
			onChange: (H) => {
				i?.(H), u(H);
			},
		}),
		{ buttonProps: E, isPressed: x } = pr(e, g, b),
		{ isFocusVisible: j, focusProps: C } = Pe({ autoFocus: c }),
		{ isHovered: T, hoverProps: B } = st({}),
		A = z(_?.toggle, s),
		D = d.useMemo(
			() =>
				typeof o == 'function'
					? o(N ?? !1)
					: o || h.jsx('span', { className: y.toggleIcon({ class: _?.toggleIcon }) }),
			[o, N, y.toggleIcon, _?.toggleIcon]
		),
		q = d.useMemo(
			() => v || (g.isSelected ? 'close navigation menu' : 'open navigation menu'),
			[v, N]
		);
	return h.jsxs(m, {
		ref: b,
		className: (n = y.toggle) == null ? void 0 : n.call(y, { class: A }),
		'data-focus-visible': L(j),
		'data-hover': L(T),
		'data-open': L(N),
		'data-pressed': L(x),
		...F(E, C, B, p),
		children: [h.jsx('span', { className: y.srOnly(), children: q }), D],
	});
});
qe.displayName = 'NextUI.NavbarMenuToggle';
var gr = qe;
const we = (e, t) => {
		const n = document.querySelector(e);
		n &&
			(window.scrollTo({ behavior: 'smooth', top: n.getBoundingClientRect().top + window.scrollY }),
			t && setTimeout(t, 1e3));
	},
	Se = '/div-software-logo.svg';
function br({ size: e }) {
	const t = {
			small: 'h-4 lg:h-5 xl:h-6',
			medium: 'h-6 lg:h-7 xl:h-8',
			large: 'h-7 lg:h-8 xl:h-10',
		},
		n = {
			small: 'font-semibold text-xl lg:text-2xl xl:text-3xl',
			medium: 'font-bold text-2xl lg:text-3xl xl:text-4xl',
			large: 'font-bold text-3xl lg:text-4xl xl:text-5xl',
		};
	return h.jsxs(ue, {
		href: '/',
		className: 'flex gap-1 xs:gap-2',
		children: [
			h.jsx('img', {
				src: Se,
				alt: 'Div Software',
				width: '100%',
				height: 16,
				loading: 'lazy',
				className: t[e],
			}),
			h.jsxs('div', {
				'aria-label': 'logo name',
				className: 'flex flex-row gap-3',
				children: [
					h.jsx('p', { className: `text-foreground-200 ${n[e]}`, children: 'Div' }),
					h.jsx('p', { className: `text-primary-500 ${n[e]}`, children: 'Software' }),
				],
			}),
			h.jsx('img', {
				src: Se,
				alt: 'Div Software',
				width: '100%',
				height: 16,
				loading: 'lazy',
				className: `${t[e]} rotate-180`,
			}),
		],
	});
}
function wr() {
	const [e, t] = it.useState(!1),
		n = [
			{ title: 'Home', href: '#banner' },
			{ title: 'About', href: '#about' },
			{ title: 'Services', href: '#services' },
			{ title: 'Contact', href: '#contact' },
		];
	return h.jsxs(fr, {
		onMenuOpenChange: t,
		isMenuOpen: e,
		maxWidth: '2xl',
		className: 'fixed bg-primary-50',
		children: [
			h.jsx(dr, { children: h.jsx(br, { size: 'small' }) }),
			h.jsx(gr, { 'aria-label': e ? 'Close menu' : 'Open menu', className: 'sm:hidden' }),
			h.jsx(vr, {
				className: 'hidden sm:flex sm:gap-8 md:gap-16 lg:gap-32',
				justify: 'center',
				children: n.map((a, o) =>
					h.jsx(
						hr,
						{
							style: { cursor: 'pointer' },
							children: h.jsx(ue, {
								className: 'w-full',
								size: 'lg',
								onClick: () => we(a.href, () => t(!1)),
								children: h.jsx('p', {
									className: 'font-bold text-foreground-50',
									children: a.title,
								}),
							}),
						},
						`${a.title}-${o}`
					)
				),
			}),
			h.jsx(He, {
				children: n.map((a, o) =>
					h.jsx(
						mr,
						{
							children: h.jsx(ue, {
								color: 'foreground',
								className: 'w-full',
								size: 'lg',
								onClick: () => we(a.href, () => t(!1)),
								children: a.title,
							}),
						},
						`${a.title}-${o}`
					)
				),
			}),
		],
	});
}
export { wr as NavbarHome };
