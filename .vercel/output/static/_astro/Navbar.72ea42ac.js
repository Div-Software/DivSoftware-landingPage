import {
	t as Ye,
	d as qe,
	v as je,
	x as Ze,
	w as X,
	y as Y,
	F as U,
	u as m,
	D as A,
	k as ne,
	S as Ge,
	a3 as me,
	E as Qe,
	a4 as Je,
	A as Ke,
	B as et,
	z as tt,
	C as rt,
} from './index.2644096b.js';
import { t as oe } from './i18next.a4b2730f.js';
import { r as u } from './index.9eb79d8f.js';
import { aj as nt, g as pe } from './index.e17a3e1d.js';
import './index.414e2829.js';
import './_commonjsHelpers.725317a4.js';
var H = function () {
	return (
		(H =
			Object.assign ||
			function (t) {
				for (var n, a = 1, o = arguments.length; a < o; a++) {
					n = arguments[a];
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
				}
				return t;
			}),
		H.apply(this, arguments)
	);
};
function $e(e, t) {
	var n = {};
	for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
	if (e != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
			t.indexOf(a[o]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
				(n[a[o]] = e[a[o]]);
	return n;
}
function at(e, t, n) {
	if (n || arguments.length === 2)
		for (var a = 0, o = t.length, i; a < o; a++)
			(i || !(a in t)) && (i || (i = Array.prototype.slice.call(t, 0, a)), (i[a] = t[a]));
	return e.concat(i || Array.prototype.slice.call(t));
}
var ge = Ye({
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
				...qe,
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
	ot = Object.create,
	Pe = Object.defineProperty,
	st = Object.getOwnPropertyDescriptor,
	ke = Object.getOwnPropertyNames,
	it = Object.getPrototypeOf,
	lt = Object.prototype.hasOwnProperty,
	Ee = (e, t) =>
		function () {
			return t || (0, e[ke(e)[0]])((t = { exports: {} }).exports, t), t.exports;
		},
	ct = (e, t, n, a) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let o of ke(t))
				!lt.call(e, o) &&
					o !== n &&
					Pe(e, o, { get: () => t[o], enumerable: !(a = st(t, o)) || a.enumerable });
		return e;
	},
	ut = (e, t, n) => (
		(n = e != null ? ot(it(e)) : {}),
		ct(t || !e || !e.__esModule ? Pe(n, 'default', { value: e, enumerable: !0 }) : n, e)
	),
	ft = Ee({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js'(e) {
			var t = Symbol.for('react.element'),
				n = Symbol.for('react.portal'),
				a = Symbol.for('react.fragment'),
				o = Symbol.for('react.strict_mode'),
				i = Symbol.for('react.profiler'),
				l = Symbol.for('react.provider'),
				c = Symbol.for('react.context'),
				d = Symbol.for('react.forward_ref'),
				p = Symbol.for('react.suspense'),
				h = Symbol.for('react.memo'),
				g = Symbol.for('react.lazy'),
				b = Symbol.iterator;
			function $(r) {
				return r === null || typeof r != 'object'
					? null
					: ((r = (b && r[b]) || r['@@iterator']), typeof r == 'function' ? r : null);
			}
			var P = {
					isMounted: function () {
						return !1;
					},
					enqueueForceUpdate: function () {},
					enqueueReplaceState: function () {},
					enqueueSetState: function () {},
				},
				f = Object.assign,
				v = {};
			function w(r, s, y) {
				(this.props = r), (this.context = s), (this.refs = v), (this.updater = y || P);
			}
			(w.prototype.isReactComponent = {}),
				(w.prototype.setState = function (r, s) {
					if (typeof r != 'object' && typeof r != 'function' && r != null)
						throw Error(
							'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
						);
					this.updater.enqueueSetState(this, r, s, 'setState');
				}),
				(w.prototype.forceUpdate = function (r) {
					this.updater.enqueueForceUpdate(this, r, 'forceUpdate');
				});
			function O() {}
			O.prototype = w.prototype;
			function S(r, s, y) {
				(this.props = r), (this.context = s), (this.refs = v), (this.updater = y || P);
			}
			var I = (S.prototype = new O());
			(I.constructor = S), f(I, w.prototype), (I.isPureReactComponent = !0);
			var j = Array.isArray,
				B = Object.prototype.hasOwnProperty,
				L = { current: null },
				W = { key: !0, ref: !0, __self: !0, __source: !0 };
			function D(r, s, y) {
				var N,
					C = {},
					E = null,
					M = null;
				if (s != null)
					for (N in (s.ref !== void 0 && (M = s.ref), s.key !== void 0 && (E = '' + s.key), s))
						B.call(s, N) && !W.hasOwnProperty(N) && (C[N] = s[N]);
				var R = arguments.length - 2;
				if (R === 1) C.children = y;
				else if (1 < R) {
					for (var k = Array(R), V = 0; V < R; V++) k[V] = arguments[V + 2];
					C.children = k;
				}
				if (r && r.defaultProps)
					for (N in ((R = r.defaultProps), R)) C[N] === void 0 && (C[N] = R[N]);
				return { $$typeof: t, type: r, key: E, ref: M, props: C, _owner: L.current };
			}
			function q(r, s) {
				return { $$typeof: t, type: r.type, key: s, ref: r.ref, props: r.props, _owner: r._owner };
			}
			function F(r) {
				return typeof r == 'object' && r !== null && r.$$typeof === t;
			}
			function ee(r) {
				var s = { '=': '=0', ':': '=2' };
				return (
					'$' +
					r.replace(/[=:]/g, function (y) {
						return s[y];
					})
				);
			}
			var ae = /\/+/g;
			function te(r, s) {
				return typeof r == 'object' && r !== null && r.key != null
					? ee('' + r.key)
					: s.toString(36);
			}
			function Z(r, s, y, N, C) {
				var E = typeof r;
				(E === 'undefined' || E === 'boolean') && (r = null);
				var M = !1;
				if (r === null) M = !0;
				else
					switch (E) {
						case 'string':
						case 'number':
							M = !0;
							break;
						case 'object':
							switch (r.$$typeof) {
								case t:
								case n:
									M = !0;
							}
					}
				if (M)
					return (
						(M = r),
						(C = C(M)),
						(r = N === '' ? '.' + te(M, 0) : N),
						j(C)
							? ((y = ''),
							  r != null && (y = r.replace(ae, '$&/') + '/'),
							  Z(C, s, y, '', function (V) {
									return V;
							  }))
							: C != null &&
							  (F(C) &&
									(C = q(
										C,
										y +
											(!C.key || (M && M.key === C.key)
												? ''
												: ('' + C.key).replace(ae, '$&/') + '/') +
											r
									)),
							  s.push(C)),
						1
					);
				if (((M = 0), (N = N === '' ? '.' : N + ':'), j(r)))
					for (var R = 0; R < r.length; R++) {
						E = r[R];
						var k = N + te(E, R);
						M += Z(E, s, y, k, C);
					}
				else if (((k = $(r)), typeof k == 'function'))
					for (r = k.call(r), R = 0; !(E = r.next()).done; )
						(E = E.value), (k = N + te(E, R++)), (M += Z(E, s, y, k, C));
				else if (E === 'object')
					throw (
						((s = String(r)),
						Error(
							'Objects are not valid as a React child (found: ' +
								(s === '[object Object]'
									? 'object with keys {' + Object.keys(r).join(', ') + '}'
									: s) +
								'). If you meant to render a collection of children, use an array instead.'
						))
					);
				return M;
			}
			function x(r, s, y) {
				if (r == null) return r;
				var N = [],
					C = 0;
				return (
					Z(r, N, '', '', function (E) {
						return s.call(y, E, C++);
					}),
					N
				);
			}
			function G(r) {
				if (r._status === -1) {
					var s = r._result;
					(s = s()),
						s.then(
							function (y) {
								(r._status === 0 || r._status === -1) && ((r._status = 1), (r._result = y));
							},
							function (y) {
								(r._status === 0 || r._status === -1) && ((r._status = 2), (r._result = y));
							}
						),
						r._status === -1 && ((r._status = 0), (r._result = s));
				}
				if (r._status === 1) return r._result.default;
				throw r._result;
			}
			var T = { current: null },
				z = { transition: null },
				Xe = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: z, ReactCurrentOwner: L };
			(e.Children = {
				map: x,
				forEach: function (r, s, y) {
					x(
						r,
						function () {
							s.apply(this, arguments);
						},
						y
					);
				},
				count: function (r) {
					var s = 0;
					return (
						x(r, function () {
							s++;
						}),
						s
					);
				},
				toArray: function (r) {
					return (
						x(r, function (s) {
							return s;
						}) || []
					);
				},
				only: function (r) {
					if (!F(r))
						throw Error('React.Children.only expected to receive a single React element child.');
					return r;
				},
			}),
				(e.Component = w),
				(e.Fragment = a),
				(e.Profiler = i),
				(e.PureComponent = S),
				(e.StrictMode = o),
				(e.Suspense = p),
				(e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xe),
				(e.cloneElement = function (r, s, y) {
					if (r == null)
						throw Error(
							'React.cloneElement(...): The argument must be a React element, but you passed ' +
								r +
								'.'
						);
					var N = f({}, r.props),
						C = r.key,
						E = r.ref,
						M = r._owner;
					if (s != null) {
						if (
							(s.ref !== void 0 && ((E = s.ref), (M = L.current)),
							s.key !== void 0 && (C = '' + s.key),
							r.type && r.type.defaultProps)
						)
							var R = r.type.defaultProps;
						for (k in s)
							B.call(s, k) &&
								!W.hasOwnProperty(k) &&
								(N[k] = s[k] === void 0 && R !== void 0 ? R[k] : s[k]);
					}
					var k = arguments.length - 2;
					if (k === 1) N.children = y;
					else if (1 < k) {
						R = Array(k);
						for (var V = 0; V < k; V++) R[V] = arguments[V + 2];
						N.children = R;
					}
					return { $$typeof: t, type: r.type, key: C, ref: E, props: N, _owner: M };
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
						(r.Provider = { $$typeof: l, _context: r }),
						(r.Consumer = r)
					);
				}),
				(e.createElement = D),
				(e.createFactory = function (r) {
					var s = D.bind(null, r);
					return (s.type = r), s;
				}),
				(e.createRef = function () {
					return { current: null };
				}),
				(e.forwardRef = function (r) {
					return { $$typeof: d, render: r };
				}),
				(e.isValidElement = F),
				(e.lazy = function (r) {
					return { $$typeof: g, _payload: { _status: -1, _result: r }, _init: G };
				}),
				(e.memo = function (r, s) {
					return { $$typeof: h, type: r, compare: s === void 0 ? null : s };
				}),
				(e.startTransition = function (r) {
					var s = z.transition;
					z.transition = {};
					try {
						r();
					} finally {
						z.transition = s;
					}
				}),
				(e.unstable_act = function () {
					throw Error('act(...) is not supported in production builds of React.');
				}),
				(e.useCallback = function (r, s) {
					return T.current.useCallback(r, s);
				}),
				(e.useContext = function (r) {
					return T.current.useContext(r);
				}),
				(e.useDebugValue = function () {}),
				(e.useDeferredValue = function (r) {
					return T.current.useDeferredValue(r);
				}),
				(e.useEffect = function (r, s) {
					return T.current.useEffect(r, s);
				}),
				(e.useId = function () {
					return T.current.useId();
				}),
				(e.useImperativeHandle = function (r, s, y) {
					return T.current.useImperativeHandle(r, s, y);
				}),
				(e.useInsertionEffect = function (r, s) {
					return T.current.useInsertionEffect(r, s);
				}),
				(e.useLayoutEffect = function (r, s) {
					return T.current.useLayoutEffect(r, s);
				}),
				(e.useMemo = function (r, s) {
					return T.current.useMemo(r, s);
				}),
				(e.useReducer = function (r, s, y) {
					return T.current.useReducer(r, s, y);
				}),
				(e.useRef = function (r) {
					return T.current.useRef(r);
				}),
				(e.useState = function (r) {
					return T.current.useState(r);
				}),
				(e.useSyncExternalStore = function (r, s, y) {
					return T.current.useSyncExternalStore(r, s, y);
				}),
				(e.useTransition = function () {
					return T.current.useTransition();
				}),
				(e.version = '18.2.0');
		},
	}),
	dt = Ee({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'(e, t) {
			t.exports = ft();
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
 */ var ye = ut(dt()),
	vt = (e, t) => {
		var n;
		let a = [];
		const o =
				(n = ye.Children.map(e, (l) =>
					(0, ye.isValidElement)(l) && l.type === t ? (a.push(l), null) : l
				)) == null
					? void 0
					: n.filter(Boolean),
			i = a.length >= 0 ? a : void 0;
		return [o, i];
	};
function ht(e = {}) {
	let { isReadOnly: t } = e,
		[n, a] = je(e.isSelected, e.defaultSelected || !1, e.onChange);
	function o(l) {
		t || a(l);
	}
	function i() {
		t || a(!n);
	}
	return { isSelected: n, setSelected: o, toggle: i };
}
var ce = 'right-scroll-bar-position',
	ue = 'width-before-scroll-bar',
	pt = 'with-scroll-bars-hidden',
	mt = '--removed-body-scroll-bar-size';
function gt(e, t) {
	return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function yt(e, t) {
	var n = u.useState(function () {
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
function bt(e, t) {
	return yt(t || null, function (n) {
		return e.forEach(function (a) {
			return gt(a, n);
		});
	});
}
function wt(e) {
	return e;
}
function St(e, t) {
	t === void 0 && (t = wt);
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
			useMedium: function (i) {
				var l = t(i, a);
				return (
					n.push(l),
					function () {
						n = n.filter(function (c) {
							return c !== l;
						});
					}
				);
			},
			assignSyncMedium: function (i) {
				for (a = !0; n.length; ) {
					var l = n;
					(n = []), l.forEach(i);
				}
				n = {
					push: function (c) {
						return i(c);
					},
					filter: function () {
						return n;
					},
				};
			},
			assignMedium: function (i) {
				a = !0;
				var l = [];
				if (n.length) {
					var c = n;
					(n = []), c.forEach(i), (l = n);
				}
				var d = function () {
						var h = l;
						(l = []), h.forEach(i);
					},
					p = function () {
						return Promise.resolve().then(d);
					};
				p(),
					(n = {
						push: function (h) {
							l.push(h), p();
						},
						filter: function (h) {
							return (l = l.filter(h)), n;
						},
					});
			},
		};
	return o;
}
function xt(e) {
	e === void 0 && (e = {});
	var t = St(null);
	return (t.options = H({ async: !0, ssr: !1 }, e)), t;
}
var Re = function (e) {
	var t = e.sideCar,
		n = $e(e, ['sideCar']);
	if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
	var a = t.read();
	if (!a) throw new Error('Sidecar medium not found');
	return u.createElement(a, H({}, n));
};
Re.isSideCarExport = !0;
function _t(e, t) {
	return e.useMedium(t), Re;
}
var Oe = xt(),
	de = function () {},
	fe = u.forwardRef(function (e, t) {
		var n = u.useRef(null),
			a = u.useState({ onScrollCapture: de, onWheelCapture: de, onTouchMoveCapture: de }),
			o = a[0],
			i = a[1],
			l = e.forwardProps,
			c = e.children,
			d = e.className,
			p = e.removeScrollBar,
			h = e.enabled,
			g = e.shards,
			b = e.sideCar,
			$ = e.noIsolation,
			P = e.inert,
			f = e.allowPinchZoom,
			v = e.as,
			w = v === void 0 ? 'div' : v,
			O = e.gapMode,
			S = $e(e, [
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
			I = b,
			j = bt([n, t]),
			B = H(H({}, S), o);
		return u.createElement(
			u.Fragment,
			null,
			h &&
				u.createElement(I, {
					sideCar: Oe,
					removeScrollBar: p,
					shards: g,
					noIsolation: $,
					inert: P,
					setCallbacks: i,
					allowPinchZoom: !!f,
					lockRef: n,
					gapMode: O,
				}),
			l
				? u.cloneElement(u.Children.only(c), H(H({}, B), { ref: j }))
				: u.createElement(w, H({}, B, { className: d, ref: j }), c)
		);
	});
fe.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
fe.classNames = { fullWidth: ue, zeroRight: ce };
var be,
	Ct = function () {
		if (be) return be;
		if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
	};
function Nt() {
	if (!document) return null;
	var e = document.createElement('style');
	e.type = 'text/css';
	var t = Ct();
	return t && e.setAttribute('nonce', t), e;
}
function jt(e, t) {
	e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function $t(e) {
	var t = document.head || document.getElementsByTagName('head')[0];
	t.appendChild(e);
}
var Pt = function () {
		var e = 0,
			t = null;
		return {
			add: function (n) {
				e == 0 && (t = Nt()) && (jt(t, n), $t(t)), e++;
			},
			remove: function () {
				e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
			},
		};
	},
	kt = function () {
		var e = Pt();
		return function (t, n) {
			u.useEffect(
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
	Ie = function () {
		var e = kt(),
			t = function (n) {
				var a = n.styles,
					o = n.dynamic;
				return e(a, o), null;
			};
		return t;
	},
	Et = { left: 0, top: 0, right: 0, gap: 0 },
	ve = function (e) {
		return parseInt(e || '', 10) || 0;
	},
	Rt = function (e) {
		var t = window.getComputedStyle(document.body),
			n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
			a = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
			o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
		return [ve(n), ve(a), ve(o)];
	},
	Ot = function (e) {
		if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return Et;
		var t = Rt(e),
			n = document.documentElement.clientWidth,
			a = window.innerWidth;
		return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, a - n + t[2] - t[0]) };
	},
	It = Ie(),
	Mt = function (e, t, n, a) {
		var o = e.left,
			i = e.top,
			l = e.right,
			c = e.gap;
		return (
			n === void 0 && (n = 'margin'),
			`
  .`
				.concat(
					pt,
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
									i,
									`px;
    padding-right: `
								)
								.concat(
									l,
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
					ce,
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
					ue,
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
				.concat(ce, ' .')
				.concat(
					ce,
					` {
    right: 0 `
				)
				.concat(
					a,
					`;
  }
  
  .`
				)
				.concat(ue, ' .')
				.concat(
					ue,
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
				.concat(mt, ': ')
				.concat(
					c,
					`px;
  }
`
				)
		);
	},
	Tt = function (e) {
		var t = e.noRelative,
			n = e.noImportant,
			a = e.gapMode,
			o = a === void 0 ? 'margin' : a,
			i = u.useMemo(
				function () {
					return Ot(o);
				},
				[o]
			);
		return u.createElement(It, { styles: Mt(i, !t, o, n ? '' : '!important') });
	},
	he = !1;
if (typeof window < 'u')
	try {
		var se = Object.defineProperty({}, 'passive', {
			get: function () {
				return (he = !0), !0;
			},
		});
		window.addEventListener('test', se, se), window.removeEventListener('test', se, se);
	} catch {
		he = !1;
	}
var Q = he ? { passive: !1 } : !1,
	Bt = function (e) {
		return e.tagName === 'TEXTAREA';
	},
	Me = function (e, t) {
		var n = window.getComputedStyle(e);
		return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !Bt(e) && n[t] === 'visible');
	},
	Lt = function (e) {
		return Me(e, 'overflowY');
	},
	At = function (e) {
		return Me(e, 'overflowX');
	},
	we = function (e, t) {
		var n = t.ownerDocument,
			a = t;
		do {
			typeof ShadowRoot < 'u' && a instanceof ShadowRoot && (a = a.host);
			var o = Te(e, a);
			if (o) {
				var i = Be(e, a),
					l = i[1],
					c = i[2];
				if (l > c) return !0;
			}
			a = a.parentNode;
		} while (a && a !== n.body);
		return !1;
	},
	Wt = function (e) {
		var t = e.scrollTop,
			n = e.scrollHeight,
			a = e.clientHeight;
		return [t, n, a];
	},
	Dt = function (e) {
		var t = e.scrollLeft,
			n = e.scrollWidth,
			a = e.clientWidth;
		return [t, n, a];
	},
	Te = function (e, t) {
		return e === 'v' ? Lt(t) : At(t);
	},
	Be = function (e, t) {
		return e === 'v' ? Wt(t) : Dt(t);
	},
	Vt = function (e, t) {
		return e === 'h' && t === 'rtl' ? -1 : 1;
	},
	Ht = function (e, t, n, a, o) {
		var i = Vt(e, window.getComputedStyle(t).direction),
			l = i * a,
			c = n.target,
			d = t.contains(c),
			p = !1,
			h = l > 0,
			g = 0,
			b = 0;
		do {
			var $ = Be(e, c),
				P = $[0],
				f = $[1],
				v = $[2],
				w = f - v - i * P;
			(P || w) && Te(e, c) && ((g += w), (b += P)),
				c instanceof ShadowRoot ? (c = c.host) : (c = c.parentNode);
		} while ((!d && c !== document.body) || (d && (t.contains(c) || t === c)));
		return (
			((h && ((o && Math.abs(g) < 1) || (!o && l > g))) ||
				(!h && ((o && Math.abs(b) < 1) || (!o && -l > b)))) &&
				(p = !0),
			p
		);
	},
	ie = function (e) {
		return 'changedTouches' in e
			? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
			: [0, 0];
	},
	Se = function (e) {
		return [e.deltaX, e.deltaY];
	},
	xe = function (e) {
		return e && 'current' in e ? e.current : e;
	},
	Ft = function (e, t) {
		return e[0] === t[0] && e[1] === t[1];
	},
	Ut = function (e) {
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
	zt = 0,
	J = [];
function Xt(e) {
	var t = u.useRef([]),
		n = u.useRef([0, 0]),
		a = u.useRef(),
		o = u.useState(zt++)[0],
		i = u.useState(Ie)[0],
		l = u.useRef(e);
	u.useEffect(
		function () {
			l.current = e;
		},
		[e]
	),
		u.useEffect(
			function () {
				if (e.inert) {
					document.body.classList.add('block-interactivity-'.concat(o));
					var f = at([e.lockRef.current], (e.shards || []).map(xe), !0).filter(Boolean);
					return (
						f.forEach(function (v) {
							return v.classList.add('allow-interactivity-'.concat(o));
						}),
						function () {
							document.body.classList.remove('block-interactivity-'.concat(o)),
								f.forEach(function (v) {
									return v.classList.remove('allow-interactivity-'.concat(o));
								});
						}
					);
				}
			},
			[e.inert, e.lockRef.current, e.shards]
		);
	var c = u.useCallback(function (f, v) {
			if ('touches' in f && f.touches.length === 2) return !l.current.allowPinchZoom;
			var w = ie(f),
				O = n.current,
				S = 'deltaX' in f ? f.deltaX : O[0] - w[0],
				I = 'deltaY' in f ? f.deltaY : O[1] - w[1],
				j,
				B = f.target,
				L = Math.abs(S) > Math.abs(I) ? 'h' : 'v';
			if ('touches' in f && L === 'h' && B.type === 'range') return !1;
			var W = we(L, B);
			if (!W) return !0;
			if ((W ? (j = L) : ((j = L === 'v' ? 'h' : 'v'), (W = we(L, B))), !W)) return !1;
			if ((!a.current && 'changedTouches' in f && (S || I) && (a.current = j), !j)) return !0;
			var D = a.current || j;
			return Ht(D, v, f, D === 'h' ? S : I, !0);
		}, []),
		d = u.useCallback(function (f) {
			var v = f;
			if (!(!J.length || J[J.length - 1] !== i)) {
				var w = 'deltaY' in v ? Se(v) : ie(v),
					O = t.current.filter(function (j) {
						return (
							j.name === v.type &&
							(j.target === v.target || v.target === j.shadowParent) &&
							Ft(j.delta, w)
						);
					})[0];
				if (O && O.should) {
					v.cancelable && v.preventDefault();
					return;
				}
				if (!O) {
					var S = (l.current.shards || [])
							.map(xe)
							.filter(Boolean)
							.filter(function (j) {
								return j.contains(v.target);
							}),
						I = S.length > 0 ? c(v, S[0]) : !l.current.noIsolation;
					I && v.cancelable && v.preventDefault();
				}
			}
		}, []),
		p = u.useCallback(function (f, v, w, O) {
			var S = { name: f, delta: v, target: w, should: O, shadowParent: Yt(w) };
			t.current.push(S),
				setTimeout(function () {
					t.current = t.current.filter(function (I) {
						return I !== S;
					});
				}, 1);
		}, []),
		h = u.useCallback(function (f) {
			(n.current = ie(f)), (a.current = void 0);
		}, []),
		g = u.useCallback(function (f) {
			p(f.type, Se(f), f.target, c(f, e.lockRef.current));
		}, []),
		b = u.useCallback(function (f) {
			p(f.type, ie(f), f.target, c(f, e.lockRef.current));
		}, []);
	u.useEffect(function () {
		return (
			J.push(i),
			e.setCallbacks({ onScrollCapture: g, onWheelCapture: g, onTouchMoveCapture: b }),
			document.addEventListener('wheel', d, Q),
			document.addEventListener('touchmove', d, Q),
			document.addEventListener('touchstart', h, Q),
			function () {
				(J = J.filter(function (f) {
					return f !== i;
				})),
					document.removeEventListener('wheel', d, Q),
					document.removeEventListener('touchmove', d, Q),
					document.removeEventListener('touchstart', h, Q);
			}
		);
	}, []);
	var $ = e.removeScrollBar,
		P = e.inert;
	return u.createElement(
		u.Fragment,
		null,
		P ? u.createElement(i, { styles: Ut(o) }) : null,
		$ ? u.createElement(Tt, { gapMode: e.gapMode }) : null
	);
}
function Yt(e) {
	for (var t = null; e !== null; )
		e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
	return t;
}
const qt = _t(Oe, Xt);
var Le = u.forwardRef(function (e, t) {
	return u.createElement(fe, H({}, e, { ref: t, sideCar: qt }));
});
Le.classNames = fe.classNames;
const Zt = Le;
var [Gt, K] = Ze({
		name: 'NavbarContext',
		strict: !0,
		errorMessage:
			'useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />',
	}),
	Qt = {
		enter: {
			height: 'calc(100vh - var(--navbar-height) - 1px)',
			transition: { duration: 0.3, easings: 'easeOut' },
		},
		exit: { height: 0, transition: { duration: 0.25, easings: 'easeIn' } },
	},
	Ae = X((e, t) => {
		var n, a;
		const { className: o, children: i, portalContainer: l, motionProps: c, style: d, ...p } = e,
			h = Y(t),
			{ slots: g, isMenuOpen: b, height: $, disableAnimation: P, classNames: f } = K(),
			v = U(f?.menu, o),
			w = u.useCallback(
				({ children: S }) =>
					m.jsx(Zt, { forwardProps: !0, enabled: b, removeScrollBar: !1, children: S }),
				[b]
			),
			O = P
				? m.jsx(w, {
						children: m.jsx('ul', {
							ref: h,
							className: (n = g.menu) == null ? void 0 : n.call(g, { class: v }),
							'data-open': A(b),
							style: { '--navbar-height': $ },
							...p,
							children: i,
						}),
				  })
				: m.jsx(nt, {
						mode: 'wait',
						children: b
							? m.jsx(w, {
									children: m.jsx(pe.ul, {
										ref: h,
										layoutScroll: !0,
										animate: 'enter',
										className: (a = g.menu) == null ? void 0 : a.call(g, { class: v }),
										'data-open': A(b),
										exit: 'exit',
										initial: 'exit',
										style: { '--navbar-height': $, ...d },
										variants: Qt,
										...ne(c, p),
										children: i,
									}),
							  })
							: null,
				  });
		return m.jsx(Ge, { portalContainer: l, children: O });
	});
Ae.displayName = 'NextUI.NavbarMenu';
var We = Ae,
	Jt = {
		visible: { y: 0, transition: { ease: me.easeOut } },
		hidden: { y: '-100%', transition: { ease: me.easeIn } },
	},
	Kt = typeof window < 'u';
function _e(e) {
	return Kt
		? e
			? { x: e.scrollLeft, y: e.scrollTop }
			: { x: window.scrollX, y: window.scrollY }
		: { x: 0, y: 0 };
}
var er = (e) => {
	const { elementRef: t, delay: n = 30, callback: a, isEnabled: o } = e,
		i = u.useRef(o ? _e(t?.current) : { x: 0, y: 0 });
	let l = null;
	const c = () => {
		const d = _e(t?.current);
		typeof a == 'function' && a({ prevPos: i.current, currPos: d }), (i.current = d), (l = null);
	};
	return (
		u.useEffect(() => {
			if (!o) return;
			const d = () => {
					n ? l === null && (l = setTimeout(c, n)) : c();
				},
				p = t?.current || window;
			return p.addEventListener('scroll', d), () => p.removeEventListener('scroll', d);
		}, [t?.current, n, o]),
		i.current
	);
};
function tr(e) {
	var t;
	const [n, a] = Qe(e, ge.variantKeys),
		{
			ref: o,
			as: i,
			parentRef: l,
			height: c = '4rem',
			shouldHideOnScroll: d = !1,
			disableScrollHandler: p = !1,
			onScrollPositionChange: h,
			isMenuOpen: g,
			isMenuDefaultOpen: b,
			onMenuOpenChange: $ = () => {},
			motionProps: P,
			className: f,
			classNames: v,
			...w
		} = n,
		O = i || 'nav',
		S = Y(o),
		I = u.useRef(0),
		j = u.useRef(0),
		[B, L] = u.useState(!1),
		W = u.useCallback(
			(x) => {
				$(x || !1);
			},
			[$]
		),
		[D, q] = je(g, b, W),
		F = () => {
			if (S.current) {
				const x = S.current.offsetWidth;
				x !== I.current && (I.current = x);
			}
		};
	Je({
		ref: S,
		onResize: () => {
			var x;
			((x = S.current) == null ? void 0 : x.offsetWidth) !== I.current && (F(), q(!1));
		},
	}),
		u.useEffect(() => {
			var x;
			F(), (j.current = ((x = S.current) == null ? void 0 : x.offsetHeight) || 0);
		}, []);
	const ee = u.useMemo(() => ge({ ...a, hideOnScroll: d }), [...Object.values(a), d]),
		ae = U(v?.base, f);
	er({
		elementRef: l,
		isEnabled: d || !p,
		callback: ({ prevPos: x, currPos: G }) => {
			h?.(G.y),
				d &&
					L((T) => {
						const z = G.y > x.y && G.y > j.current;
						return z !== T ? z : T;
					});
		},
	});
	const te = (x = {}) => ({
			...ne(w, x),
			'data-hidden': A(B),
			'data-menu-open': A(D),
			ref: S,
			className: ee.base({ class: U(ae, x?.className) }),
			style: { '--navbar-height': c, ...x?.style },
		}),
		Z = (x = {}) => ({
			...x,
			'data-menu-open': A(D),
			className: ee.wrapper({ class: U(v?.wrapper, x?.className) }),
		});
	return {
		Component: O,
		slots: ee,
		domRef: S,
		height: c,
		isHidden: B,
		disableAnimation: (t = e.disableAnimation) != null ? t : !1,
		shouldHideOnScroll: d,
		isMenuOpen: D,
		classNames: v,
		setIsMenuOpen: q,
		motionProps: P,
		getBaseProps: te,
		getWrapperProps: Z,
	};
}
var De = X((e, t) => {
	const { children: n, ...a } = e,
		o = tr({ ...a, ref: t }),
		i = o.Component,
		[l, c] = vt(n, We),
		d = m.jsxs(m.Fragment, {
			children: [m.jsx('header', { ...o.getWrapperProps(), children: l }), c],
		});
	return m.jsx(Gt, {
		value: o,
		children: o.shouldHideOnScroll
			? m.jsx(pe.nav, {
					animate: o.isHidden ? 'hidden' : 'visible',
					initial: !1,
					variants: Jt,
					...ne(o.getBaseProps(), o.motionProps),
					children: d,
			  })
			: m.jsx(i, { ...o.getBaseProps(), children: d }),
	});
});
De.displayName = 'NextUI.Navbar';
var rr = De,
	Ve = X((e, t) => {
		var n;
		const { as: a, className: o, children: i, ...l } = e,
			c = a || 'div',
			d = Y(t),
			{ slots: p, classNames: h } = K(),
			g = U(h?.brand, o);
		return m.jsx(c, {
			ref: d,
			className: (n = p.brand) == null ? void 0 : n.call(p, { class: g }),
			...l,
			children: i,
		});
	});
Ve.displayName = 'NextUI.NavbarBrand';
var nr = Ve,
	He = X((e, t) => {
		var n;
		const { as: a, className: o, children: i, justify: l = 'start', ...c } = e,
			d = a || 'ul',
			p = Y(t),
			{ slots: h, classNames: g } = K(),
			b = U(g?.content, o);
		return m.jsx(d, {
			ref: p,
			className: (n = h.content) == null ? void 0 : n.call(h, { class: b }),
			'data-justify': l,
			...c,
			children: i,
		});
	});
He.displayName = 'NextUI.NavbarContent';
var ar = He,
	Fe = X((e, t) => {
		var n;
		const { as: a, className: o, children: i, isActive: l, ...c } = e,
			d = a || 'li',
			p = Y(t),
			{ slots: h, classNames: g } = K(),
			b = U(g?.item, o);
		return m.jsx(d, {
			ref: p,
			className: (n = h.item) == null ? void 0 : n.call(h, { class: b }),
			'data-active': A(l),
			...c,
			children: i,
		});
	});
Fe.displayName = 'NextUI.NavbarItem';
var or = Fe,
	Ue = X((e, t) => {
		var n;
		const { className: a, children: o, isActive: i, ...l } = e,
			c = Y(t),
			{ slots: d, isMenuOpen: p, classNames: h } = K(),
			g = U(h?.menuItem, a);
		return m.jsx('li', {
			ref: c,
			className: (n = d.menuItem) == null ? void 0 : n.call(d, { class: g }),
			'data-active': A(i),
			'data-open': A(p),
			...l,
			children: o,
		});
	});
Ue.displayName = 'NextUI.NavbarMenuItem';
var sr = Ue;
function ir(e, t, n) {
	const { isSelected: a } = t,
		{ isPressed: o, buttonProps: i } = Ke({ ...e, onPress: et(t.toggle, e.onPress) }, n);
	return { isPressed: o, buttonProps: ne(i, { 'aria-pressed': a }) };
}
var ze = X((e, t) => {
	var n;
	const { as: a, icon: o, className: i, onChange: l, autoFocus: c, srOnlyText: d, ...p } = e,
		h = a || 'button',
		g = Y(t),
		{ slots: b, classNames: $, isMenuOpen: P, setIsMenuOpen: f } = K(),
		w = ht({
			...p,
			isSelected: P,
			onChange: (F) => {
				l?.(F), f(F);
			},
		}),
		{ buttonProps: O, isPressed: S } = ir(e, w, g),
		{ isFocusVisible: I, focusProps: j } = tt({ autoFocus: c }),
		{ isHovered: B, hoverProps: L } = rt({}),
		W = U($?.toggle, i),
		D = u.useMemo(
			() =>
				typeof o == 'function'
					? o(P ?? !1)
					: o || m.jsx('span', { className: b.toggleIcon({ class: $?.toggleIcon }) }),
			[o, P, b.toggleIcon, $?.toggleIcon]
		),
		q = u.useMemo(
			() => d || (w.isSelected ? 'close navigation menu' : 'open navigation menu'),
			[d, P]
		);
	return m.jsxs(h, {
		ref: g,
		className: (n = b.toggle) == null ? void 0 : n.call(b, { class: W }),
		'data-focus-visible': A(I),
		'data-hover': A(B),
		'data-open': A(P),
		'data-pressed': A(S),
		...ne(O, j, L, p),
		children: [m.jsx('span', { className: b.srOnly(), children: q }), D],
	});
});
ze.displayName = 'NextUI.NavbarMenuToggle';
var lr = ze;
const cr = '/src/assets/',
	re = '/assets/icons/',
	ur = '/src/assets/projects/',
	le = '/src/assets/services/',
	Ce = '/src/assets/social/',
	_ = '/assets/technologies/',
	Ne = {
		astronaut: `${cr}div-astronaut.webp`,
		icons: {
			facebook: `${re}facebook.svg`,
			github: `${re}github.svg`,
			instagram: `${re}instagram.svg`,
			english: `${re}english.svg`,
			spanish: `${re}spanish.svg`,
		},
		projects: { globalredex: `${ur}globalredex-desktop.webp` },
		services: {
			uiux: `${le}uxui.webp`,
			webdev: `${le}webdev.webp`,
			mobile: `${le}mobileapps.webp`,
			marketing: `${le}marketing.webp`,
		},
		technologies: {
			Ai: `${_}Ai.svg`,
			angular: `${_}angular.svg`,
			astro: `${_}astroreal.svg`,
			css: `${_}css.svg`,
			django: `${_}django.svg`,
			express: `${_}express.svg`,
			figma: `${_}figma.svg`,
			flask: `${_}flask.svg`,
			javascript: `${_}javascript.svg`,
			mongodb: `${_}mongo.svg`,
			next: `${_}next.svg`,
			node: `${_}node.svg`,
			postgresql: `${_}postgres.svg`,
			python: `${_}python.svg`,
			react: `${_}react.svg`,
			typescript: `${_}typescript.svg`,
			vue: `${_}vue.svg`,
			Xd: `${_}Xd.svg`,
			crossLogo: `${_}crossfunclogo.svg`,
			techLines: {
				firstLine: `${_}lines/firstline.svg`,
				secondLine: `${_}lines/secondline.svg`,
				thirdLine: `${_}lines/thirdline.svg`,
				fourthLine: `${_}lines/fourthline.svg`,
				fifthLine: `${_}lines/fifthline.svg`,
				sixthLine: `${_}lines/sixthline.svg`,
				seventhLine: `${_}lines/seventhline.svg`,
				eighthline: `${_}lines/eighthline.svg`,
			},
		},
		social: { whatsapp: `${Ce}whatsapplogo.webp`, telegram: `${Ce}telegramlogo.webp` },
	};
function gr({ children: e }) {
	const [t, n] = u.useState(!1),
		[a, o] = u.useState(''),
		i = [
			{ title: oe('home.navbar.home'), href: '#banner' },
			{ title: oe('home.navbar.about'), href: '#about' },
			{ title: oe('home.navbar.services'), href: '#services' },
			{ title: oe('home.navbar.contact'), href: '#contact' },
		];
	return (
		u.useEffect(() => {
			typeof window < 'u' && o(window.location.pathname);
		}, []),
		m.jsxs(rr, {
			onMenuOpenChange: n,
			isMenuOpen: t,
			maxWidth: '2xl',
			className: 'fixed bg-primary-50',
			children: [
				m.jsx(nr, { children: e }),
				m.jsxs(ar, {
					className: 'sm:gap-8 md:gap-16 lg:gap-32',
					justify: 'center',
					children: [
						i.map((l, c) =>
							m.jsx(
								or,
								{
									className: 'hidden cursor-pointer sm:flex',
									children: m.jsx(pe.a, {
										initial: { x: -100, opacity: 0 },
										animate: { x: 0, opacity: 1 },
										transition: { duration: 0.2 },
										className: 'a-scroll w-full',
										href: l.href,
										children: m.jsx('p', {
											className: 'font-bold text-foreground-50',
											children: l.title,
										}),
									}),
								},
								`${l.title}-${c}`
							)
						),
						m.jsx('a', {
							href: a === '/' ? '/en' : '/',
							children: m.jsx('img', {
								src: a === '/' ? Ne.icons.english : Ne.icons.spanish,
								alt: 'Language Flag',
								width: 25,
								height: 25,
							}),
						}),
					],
				}),
				m.jsx(lr, { 'aria-label': t ? 'Close menu' : 'Open menu', className: 'sm:hidden' }),
				m.jsx(We, {
					children: i.map((l, c) =>
						m.jsx(
							sr,
							{
								children: m.jsx('a', {
									className: 'a-scroll w-full',
									href: l.href,
									onClick: (d) => {
										d.preventDefault(),
											document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }),
											setTimeout(() => n(!1), 500);
									},
									children: m.jsx('p', {
										className: 'font-bold text-foreground-50',
										children: l.title,
									}),
								}),
							},
							`${l.title}-${c}`
						)
					),
				}),
			],
		})
	);
}
export { gr as NavbarHome };
