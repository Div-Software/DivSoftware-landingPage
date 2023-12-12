import {
	t as Ye,
	d as qe,
	v as Ne,
	x as Ze,
	w as X,
	y as Y,
	F as U,
	u as p,
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
} from './index.8CcIiJ4E.js';
import { t as oe } from './i18next.O_TauLNA.js';
import { r as f } from './index.J00EDW8g.js';
import { aj as nt, g as fe } from './index.9xSjhrF6.js';
import './index.0PBxFPxt.js';
import './_commonjsHelpers.5-cIlDoe.js';
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
				u = Symbol.for('react.context'),
				c = Symbol.for('react.forward_ref'),
				v = Symbol.for('react.suspense'),
				h = Symbol.for('react.memo'),
				g = Symbol.for('react.lazy'),
				y = Symbol.iterator;
			function $(r) {
				return r === null || typeof r != 'object'
					? null
					: ((r = (y && r[y]) || r['@@iterator']), typeof r == 'function' ? r : null);
			}
			var P = {
					isMounted: function () {
						return !1;
					},
					enqueueForceUpdate: function () {},
					enqueueReplaceState: function () {},
					enqueueSetState: function () {},
				},
				d = Object.assign,
				m = {};
			function w(r, s, b) {
				(this.props = r), (this.context = s), (this.refs = m), (this.updater = b || P);
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
			function x(r, s, b) {
				(this.props = r), (this.context = s), (this.refs = m), (this.updater = b || P);
			}
			var I = (x.prototype = new O());
			(I.constructor = x), d(I, w.prototype), (I.isPureReactComponent = !0);
			var N = Array.isArray,
				B = Object.prototype.hasOwnProperty,
				L = { current: null },
				W = { key: !0, ref: !0, __self: !0, __source: !0 };
			function D(r, s, b) {
				var j,
					C = {},
					E = null,
					M = null;
				if (s != null)
					for (j in (s.ref !== void 0 && (M = s.ref), s.key !== void 0 && (E = '' + s.key), s))
						B.call(s, j) && !W.hasOwnProperty(j) && (C[j] = s[j]);
				var R = arguments.length - 2;
				if (R === 1) C.children = b;
				else if (1 < R) {
					for (var k = Array(R), V = 0; V < R; V++) k[V] = arguments[V + 2];
					C.children = k;
				}
				if (r && r.defaultProps)
					for (j in ((R = r.defaultProps), R)) C[j] === void 0 && (C[j] = R[j]);
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
					r.replace(/[=:]/g, function (b) {
						return s[b];
					})
				);
			}
			var ae = /\/+/g;
			function te(r, s) {
				return typeof r == 'object' && r !== null && r.key != null
					? ee('' + r.key)
					: s.toString(36);
			}
			function Z(r, s, b, j, C) {
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
						(r = j === '' ? '.' + te(M, 0) : j),
						N(C)
							? ((b = ''),
							  r != null && (b = r.replace(ae, '$&/') + '/'),
							  Z(C, s, b, '', function (V) {
									return V;
							  }))
							: C != null &&
							  (F(C) &&
									(C = q(
										C,
										b +
											(!C.key || (M && M.key === C.key)
												? ''
												: ('' + C.key).replace(ae, '$&/') + '/') +
											r
									)),
							  s.push(C)),
						1
					);
				if (((M = 0), (j = j === '' ? '.' : j + ':'), N(r)))
					for (var R = 0; R < r.length; R++) {
						E = r[R];
						var k = j + te(E, R);
						M += Z(E, s, b, k, C);
					}
				else if (((k = $(r)), typeof k == 'function'))
					for (r = k.call(r), R = 0; !(E = r.next()).done; )
						(E = E.value), (k = j + te(E, R++)), (M += Z(E, s, b, k, C));
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
			function S(r, s, b) {
				if (r == null) return r;
				var j = [],
					C = 0;
				return (
					Z(r, j, '', '', function (E) {
						return s.call(b, E, C++);
					}),
					j
				);
			}
			function G(r) {
				if (r._status === -1) {
					var s = r._result;
					(s = s()),
						s.then(
							function (b) {
								(r._status === 0 || r._status === -1) && ((r._status = 1), (r._result = b));
							},
							function (b) {
								(r._status === 0 || r._status === -1) && ((r._status = 2), (r._result = b));
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
				map: S,
				forEach: function (r, s, b) {
					S(
						r,
						function () {
							s.apply(this, arguments);
						},
						b
					);
				},
				count: function (r) {
					var s = 0;
					return (
						S(r, function () {
							s++;
						}),
						s
					);
				},
				toArray: function (r) {
					return (
						S(r, function (s) {
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
				(e.PureComponent = x),
				(e.StrictMode = o),
				(e.Suspense = v),
				(e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xe),
				(e.cloneElement = function (r, s, b) {
					if (r == null)
						throw Error(
							'React.cloneElement(...): The argument must be a React element, but you passed ' +
								r +
								'.'
						);
					var j = d({}, r.props),
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
								(j[k] = s[k] === void 0 && R !== void 0 ? R[k] : s[k]);
					}
					var k = arguments.length - 2;
					if (k === 1) j.children = b;
					else if (1 < k) {
						R = Array(k);
						for (var V = 0; V < k; V++) R[V] = arguments[V + 2];
						j.children = R;
					}
					return { $$typeof: t, type: r.type, key: C, ref: E, props: j, _owner: M };
				}),
				(e.createContext = function (r) {
					return (
						(r = {
							$$typeof: u,
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
					return { $$typeof: c, render: r };
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
				(e.useImperativeHandle = function (r, s, b) {
					return T.current.useImperativeHandle(r, s, b);
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
				(e.useReducer = function (r, s, b) {
					return T.current.useReducer(r, s, b);
				}),
				(e.useRef = function (r) {
					return T.current.useRef(r);
				}),
				(e.useState = function (r) {
					return T.current.useState(r);
				}),
				(e.useSyncExternalStore = function (r, s, b) {
					return T.current.useSyncExternalStore(r, s, b);
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
 */ var be = ut(dt()),
	vt = (e, t) => {
		var n;
		let a = [];
		const o =
				(n = be.Children.map(e, (l) =>
					(0, be.isValidElement)(l) && l.type === t ? (a.push(l), null) : l
				)) == null
					? void 0
					: n.filter(Boolean),
			i = a.length >= 0 ? a : void 0;
		return [o, i];
	};
function ht(e = {}) {
	let { isReadOnly: t } = e,
		[n, a] = Ne(e.isSelected, e.defaultSelected || !1, e.onChange);
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
function bt(e, t) {
	var n = f.useState(function () {
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
function yt(e, t) {
	return bt(t || null, function (n) {
		return e.forEach(function (a) {
			return gt(a, n);
		});
	});
}
function wt(e) {
	return e;
}
function xt(e, t) {
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
						n = n.filter(function (u) {
							return u !== l;
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
					push: function (u) {
						return i(u);
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
					var u = n;
					(n = []), u.forEach(i), (l = n);
				}
				var c = function () {
						var h = l;
						(l = []), h.forEach(i);
					},
					v = function () {
						return Promise.resolve().then(c);
					};
				v(),
					(n = {
						push: function (h) {
							l.push(h), v();
						},
						filter: function (h) {
							return (l = l.filter(h)), n;
						},
					});
			},
		};
	return o;
}
function St(e) {
	e === void 0 && (e = {});
	var t = xt(null);
	return (t.options = H({ async: !0, ssr: !1 }, e)), t;
}
var Re = function (e) {
	var t = e.sideCar,
		n = $e(e, ['sideCar']);
	if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
	var a = t.read();
	if (!a) throw new Error('Sidecar medium not found');
	return f.createElement(a, H({}, n));
};
Re.isSideCarExport = !0;
function _t(e, t) {
	return e.useMedium(t), Re;
}
var Oe = St(),
	ve = function () {},
	de = f.forwardRef(function (e, t) {
		var n = f.useRef(null),
			a = f.useState({ onScrollCapture: ve, onWheelCapture: ve, onTouchMoveCapture: ve }),
			o = a[0],
			i = a[1],
			l = e.forwardProps,
			u = e.children,
			c = e.className,
			v = e.removeScrollBar,
			h = e.enabled,
			g = e.shards,
			y = e.sideCar,
			$ = e.noIsolation,
			P = e.inert,
			d = e.allowPinchZoom,
			m = e.as,
			w = m === void 0 ? 'div' : m,
			O = e.gapMode,
			x = $e(e, [
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
			I = y,
			N = yt([n, t]),
			B = H(H({}, x), o);
		return f.createElement(
			f.Fragment,
			null,
			h &&
				f.createElement(I, {
					sideCar: Oe,
					removeScrollBar: v,
					shards: g,
					noIsolation: $,
					inert: P,
					setCallbacks: i,
					allowPinchZoom: !!d,
					lockRef: n,
					gapMode: O,
				}),
			l
				? f.cloneElement(f.Children.only(u), H(H({}, B), { ref: N }))
				: f.createElement(w, H({}, B, { className: c, ref: N }), u)
		);
	});
de.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
de.classNames = { fullWidth: ue, zeroRight: ce };
var ye,
	Ct = function () {
		if (ye) return ye;
		if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
	};
function jt() {
	if (!document) return null;
	var e = document.createElement('style');
	e.type = 'text/css';
	var t = Ct();
	return t && e.setAttribute('nonce', t), e;
}
function Nt(e, t) {
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
				e == 0 && (t = jt()) && (Nt(t, n), $t(t)), e++;
			},
			remove: function () {
				e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
			},
		};
	},
	kt = function () {
		var e = Pt();
		return function (t, n) {
			f.useEffect(
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
	he = function (e) {
		return parseInt(e || '', 10) || 0;
	},
	Rt = function (e) {
		var t = window.getComputedStyle(document.body),
			n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
			a = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
			o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
		return [he(n), he(a), he(o)];
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
			u = e.gap;
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
				.concat(u, 'px ')
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
								.concat(u, 'px ')
								.concat(
									a,
									`;
    `
								),
						n === 'padding' && 'padding-right: '.concat(u, 'px ').concat(a, ';'),
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
				.concat(u, 'px ')
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
				.concat(u, 'px ')
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
					u,
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
			i = f.useMemo(
				function () {
					return Ot(o);
				},
				[o]
			);
		return f.createElement(It, { styles: Mt(i, !t, o, n ? '' : '!important') });
	},
	pe = !1;
if (typeof window < 'u')
	try {
		var se = Object.defineProperty({}, 'passive', {
			get: function () {
				return (pe = !0), !0;
			},
		});
		window.addEventListener('test', se, se), window.removeEventListener('test', se, se);
	} catch {
		pe = !1;
	}
var Q = pe ? { passive: !1 } : !1,
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
					u = i[2];
				if (l > u) return !0;
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
			u = n.target,
			c = t.contains(u),
			v = !1,
			h = l > 0,
			g = 0,
			y = 0;
		do {
			var $ = Be(e, u),
				P = $[0],
				d = $[1],
				m = $[2],
				w = d - m - i * P;
			(P || w) && Te(e, u) && ((g += w), (y += P)),
				u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
		} while ((!c && u !== document.body) || (c && (t.contains(u) || t === u)));
		return (
			((h && ((o && Math.abs(g) < 1) || (!o && l > g))) ||
				(!h && ((o && Math.abs(y) < 1) || (!o && -l > y)))) &&
				(v = !0),
			v
		);
	},
	ie = function (e) {
		return 'changedTouches' in e
			? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
			: [0, 0];
	},
	xe = function (e) {
		return [e.deltaX, e.deltaY];
	},
	Se = function (e) {
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
	var t = f.useRef([]),
		n = f.useRef([0, 0]),
		a = f.useRef(),
		o = f.useState(zt++)[0],
		i = f.useState(Ie)[0],
		l = f.useRef(e);
	f.useEffect(
		function () {
			l.current = e;
		},
		[e]
	),
		f.useEffect(
			function () {
				if (e.inert) {
					document.body.classList.add('block-interactivity-'.concat(o));
					var d = at([e.lockRef.current], (e.shards || []).map(Se), !0).filter(Boolean);
					return (
						d.forEach(function (m) {
							return m.classList.add('allow-interactivity-'.concat(o));
						}),
						function () {
							document.body.classList.remove('block-interactivity-'.concat(o)),
								d.forEach(function (m) {
									return m.classList.remove('allow-interactivity-'.concat(o));
								});
						}
					);
				}
			},
			[e.inert, e.lockRef.current, e.shards]
		);
	var u = f.useCallback(function (d, m) {
			if ('touches' in d && d.touches.length === 2) return !l.current.allowPinchZoom;
			var w = ie(d),
				O = n.current,
				x = 'deltaX' in d ? d.deltaX : O[0] - w[0],
				I = 'deltaY' in d ? d.deltaY : O[1] - w[1],
				N,
				B = d.target,
				L = Math.abs(x) > Math.abs(I) ? 'h' : 'v';
			if ('touches' in d && L === 'h' && B.type === 'range') return !1;
			var W = we(L, B);
			if (!W) return !0;
			if ((W ? (N = L) : ((N = L === 'v' ? 'h' : 'v'), (W = we(L, B))), !W)) return !1;
			if ((!a.current && 'changedTouches' in d && (x || I) && (a.current = N), !N)) return !0;
			var D = a.current || N;
			return Ht(D, m, d, D === 'h' ? x : I, !0);
		}, []),
		c = f.useCallback(function (d) {
			var m = d;
			if (!(!J.length || J[J.length - 1] !== i)) {
				var w = 'deltaY' in m ? xe(m) : ie(m),
					O = t.current.filter(function (N) {
						return (
							N.name === m.type &&
							(N.target === m.target || m.target === N.shadowParent) &&
							Ft(N.delta, w)
						);
					})[0];
				if (O && O.should) {
					m.cancelable && m.preventDefault();
					return;
				}
				if (!O) {
					var x = (l.current.shards || [])
							.map(Se)
							.filter(Boolean)
							.filter(function (N) {
								return N.contains(m.target);
							}),
						I = x.length > 0 ? u(m, x[0]) : !l.current.noIsolation;
					I && m.cancelable && m.preventDefault();
				}
			}
		}, []),
		v = f.useCallback(function (d, m, w, O) {
			var x = { name: d, delta: m, target: w, should: O, shadowParent: Yt(w) };
			t.current.push(x),
				setTimeout(function () {
					t.current = t.current.filter(function (I) {
						return I !== x;
					});
				}, 1);
		}, []),
		h = f.useCallback(function (d) {
			(n.current = ie(d)), (a.current = void 0);
		}, []),
		g = f.useCallback(function (d) {
			v(d.type, xe(d), d.target, u(d, e.lockRef.current));
		}, []),
		y = f.useCallback(function (d) {
			v(d.type, ie(d), d.target, u(d, e.lockRef.current));
		}, []);
	f.useEffect(function () {
		return (
			J.push(i),
			e.setCallbacks({ onScrollCapture: g, onWheelCapture: g, onTouchMoveCapture: y }),
			document.addEventListener('wheel', c, Q),
			document.addEventListener('touchmove', c, Q),
			document.addEventListener('touchstart', h, Q),
			function () {
				(J = J.filter(function (d) {
					return d !== i;
				})),
					document.removeEventListener('wheel', c, Q),
					document.removeEventListener('touchmove', c, Q),
					document.removeEventListener('touchstart', h, Q);
			}
		);
	}, []);
	var $ = e.removeScrollBar,
		P = e.inert;
	return f.createElement(
		f.Fragment,
		null,
		P ? f.createElement(i, { styles: Ut(o) }) : null,
		$ ? f.createElement(Tt, { gapMode: e.gapMode }) : null
	);
}
function Yt(e) {
	for (var t = null; e !== null; )
		e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
	return t;
}
const qt = _t(Oe, Xt);
var Le = f.forwardRef(function (e, t) {
	return f.createElement(de, H({}, e, { ref: t, sideCar: qt }));
});
Le.classNames = de.classNames;
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
		const { className: o, children: i, portalContainer: l, motionProps: u, style: c, ...v } = e,
			h = Y(t),
			{ slots: g, isMenuOpen: y, height: $, disableAnimation: P, classNames: d } = K(),
			m = U(d?.menu, o),
			w = f.useCallback(
				({ children: x }) =>
					p.jsx(Zt, { forwardProps: !0, enabled: y, removeScrollBar: !1, children: x }),
				[y]
			),
			O = P
				? p.jsx(w, {
						children: p.jsx('ul', {
							ref: h,
							className: (n = g.menu) == null ? void 0 : n.call(g, { class: m }),
							'data-open': A(y),
							style: { '--navbar-height': $ },
							...v,
							children: i,
						}),
				  })
				: p.jsx(nt, {
						mode: 'wait',
						children: y
							? p.jsx(w, {
									children: p.jsx(fe.ul, {
										ref: h,
										layoutScroll: !0,
										animate: 'enter',
										className: (a = g.menu) == null ? void 0 : a.call(g, { class: m }),
										'data-open': A(y),
										exit: 'exit',
										initial: 'exit',
										style: { '--navbar-height': $, ...c },
										variants: Qt,
										...ne(u, v),
										children: i,
									}),
							  })
							: null,
				  });
		return p.jsx(Ge, { portalContainer: l, children: O });
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
		i = f.useRef(o ? _e(t?.current) : { x: 0, y: 0 });
	let l = null;
	const u = () => {
		const c = _e(t?.current);
		typeof a == 'function' && a({ prevPos: i.current, currPos: c }), (i.current = c), (l = null);
	};
	return (
		f.useEffect(() => {
			if (!o) return;
			const c = () => {
					n ? l === null && (l = setTimeout(u, n)) : u();
				},
				v = t?.current || window;
			return v.addEventListener('scroll', c), () => v.removeEventListener('scroll', c);
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
			height: u = '4rem',
			shouldHideOnScroll: c = !1,
			disableScrollHandler: v = !1,
			onScrollPositionChange: h,
			isMenuOpen: g,
			isMenuDefaultOpen: y,
			onMenuOpenChange: $ = () => {},
			motionProps: P,
			className: d,
			classNames: m,
			...w
		} = n,
		O = i || 'nav',
		x = Y(o),
		I = f.useRef(0),
		N = f.useRef(0),
		[B, L] = f.useState(!1),
		W = f.useCallback(
			(S) => {
				$(S || !1);
			},
			[$]
		),
		[D, q] = Ne(g, y, W),
		F = () => {
			if (x.current) {
				const S = x.current.offsetWidth;
				S !== I.current && (I.current = S);
			}
		};
	Je({
		ref: x,
		onResize: () => {
			var S;
			((S = x.current) == null ? void 0 : S.offsetWidth) !== I.current && (F(), q(!1));
		},
	}),
		f.useEffect(() => {
			var S;
			F(), (N.current = ((S = x.current) == null ? void 0 : S.offsetHeight) || 0);
		}, []);
	const ee = f.useMemo(() => ge({ ...a, hideOnScroll: c }), [...Object.values(a), c]),
		ae = U(m?.base, d);
	er({
		elementRef: l,
		isEnabled: c || !v,
		callback: ({ prevPos: S, currPos: G }) => {
			h?.(G.y),
				c &&
					L((T) => {
						const z = G.y > S.y && G.y > N.current;
						return z !== T ? z : T;
					});
		},
	});
	const te = (S = {}) => ({
			...ne(w, S),
			'data-hidden': A(B),
			'data-menu-open': A(D),
			ref: x,
			className: ee.base({ class: U(ae, S?.className) }),
			style: { '--navbar-height': u, ...S?.style },
		}),
		Z = (S = {}) => ({
			...S,
			'data-menu-open': A(D),
			className: ee.wrapper({ class: U(m?.wrapper, S?.className) }),
		});
	return {
		Component: O,
		slots: ee,
		domRef: x,
		height: u,
		isHidden: B,
		disableAnimation: (t = e.disableAnimation) != null ? t : !1,
		shouldHideOnScroll: c,
		isMenuOpen: D,
		classNames: m,
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
		[l, u] = vt(n, We),
		c = p.jsxs(p.Fragment, {
			children: [p.jsx('header', { ...o.getWrapperProps(), children: l }), u],
		});
	return p.jsx(Gt, {
		value: o,
		children: o.shouldHideOnScroll
			? p.jsx(fe.nav, {
					animate: o.isHidden ? 'hidden' : 'visible',
					initial: !1,
					variants: Jt,
					...ne(o.getBaseProps(), o.motionProps),
					children: c,
			  })
			: p.jsx(i, { ...o.getBaseProps(), children: c }),
	});
});
De.displayName = 'NextUI.Navbar';
var rr = De,
	Ve = X((e, t) => {
		var n;
		const { as: a, className: o, children: i, ...l } = e,
			u = a || 'div',
			c = Y(t),
			{ slots: v, classNames: h } = K(),
			g = U(h?.brand, o);
		return p.jsx(u, {
			ref: c,
			className: (n = v.brand) == null ? void 0 : n.call(v, { class: g }),
			...l,
			children: i,
		});
	});
Ve.displayName = 'NextUI.NavbarBrand';
var nr = Ve,
	He = X((e, t) => {
		var n;
		const { as: a, className: o, children: i, justify: l = 'start', ...u } = e,
			c = a || 'ul',
			v = Y(t),
			{ slots: h, classNames: g } = K(),
			y = U(g?.content, o);
		return p.jsx(c, {
			ref: v,
			className: (n = h.content) == null ? void 0 : n.call(h, { class: y }),
			'data-justify': l,
			...u,
			children: i,
		});
	});
He.displayName = 'NextUI.NavbarContent';
var ar = He,
	Fe = X((e, t) => {
		var n;
		const { as: a, className: o, children: i, isActive: l, ...u } = e,
			c = a || 'li',
			v = Y(t),
			{ slots: h, classNames: g } = K(),
			y = U(g?.item, o);
		return p.jsx(c, {
			ref: v,
			className: (n = h.item) == null ? void 0 : n.call(h, { class: y }),
			'data-active': A(l),
			...u,
			children: i,
		});
	});
Fe.displayName = 'NextUI.NavbarItem';
var or = Fe,
	Ue = X((e, t) => {
		var n;
		const { className: a, children: o, isActive: i, ...l } = e,
			u = Y(t),
			{ slots: c, isMenuOpen: v, classNames: h } = K(),
			g = U(h?.menuItem, a);
		return p.jsx('li', {
			ref: u,
			className: (n = c.menuItem) == null ? void 0 : n.call(c, { class: g }),
			'data-active': A(i),
			'data-open': A(v),
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
	const { as: a, icon: o, className: i, onChange: l, autoFocus: u, srOnlyText: c, ...v } = e,
		h = a || 'button',
		g = Y(t),
		{ slots: y, classNames: $, isMenuOpen: P, setIsMenuOpen: d } = K(),
		w = ht({
			...v,
			isSelected: P,
			onChange: (F) => {
				l?.(F), d(F);
			},
		}),
		{ buttonProps: O, isPressed: x } = ir(e, w, g),
		{ isFocusVisible: I, focusProps: N } = tt({ autoFocus: u }),
		{ isHovered: B, hoverProps: L } = rt({}),
		W = U($?.toggle, i),
		D = f.useMemo(
			() =>
				typeof o == 'function'
					? o(P ?? !1)
					: o || p.jsx('span', { className: y.toggleIcon({ class: $?.toggleIcon }) }),
			[o, P, y.toggleIcon, $?.toggleIcon]
		),
		q = f.useMemo(
			() => c || (w.isSelected ? 'close navigation menu' : 'open navigation menu'),
			[c, P]
		);
	return p.jsxs(h, {
		ref: g,
		className: (n = y.toggle) == null ? void 0 : n.call(y, { class: W }),
		'data-focus-visible': A(I),
		'data-hover': A(B),
		'data-open': A(P),
		'data-pressed': A(x),
		...ne(O, N, L, v),
		children: [p.jsx('span', { className: y.srOnly(), children: q }), D],
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
	je = {
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
	const [t, n] = f.useState(!1),
		[a, o] = f.useState(''),
		i = [
			{ title: oe('home.navbar.home'), href: '#banner' },
			{ title: oe('home.navbar.about'), href: '#about' },
			{ title: oe('home.navbar.services'), href: '#services' },
			{ title: oe('home.navbar.contact'), href: '#contact' },
		],
		l = ({ language: c, flagImage: v, currentPath: h }) => {
			const g = (c === '' && h === '/') || h === `/${c}`;
			return p.jsx('div', {
				className: g ? 'rounded-sm p-0.5 outline outline-2 outline-[#7127BA] xs:p-1' : '',
				children: g
					? p.jsx('img', {
							src: v,
							alt: `${c.toUpperCase()} Flag`,
							width: 20,
							height: 20,
							className: 'sm:h-[25px] sm:w-[25px]',
					  })
					: p.jsx('a', {
							href: `/${c}`,
							children: p.jsx('img', {
								src: v,
								alt: `${c.toUpperCase()} Flag`,
								width: 20,
								height: 20,
								className: 'sm:h-[25px] sm:w-[25px]',
							}),
					  }),
			});
		},
		u = () =>
			p.jsxs(fe.div, {
				initial: { x: -100, opacity: 0 },
				animate: { x: 0, opacity: 1 },
				className:
					'flex items-center justify-center gap-1.5 rounded-lg bg-background p-1.5 backdrop-blur-sm xs:p-2 sm:gap-2 md:gap-3',
				children: [
					p.jsx(l, { language: '', flagImage: je.icons.spanish, currentPath: a }),
					p.jsx(l, { language: 'en', flagImage: je.icons.english, currentPath: a }),
				],
			});
	return (
		f.useEffect(() => {
			typeof window < 'u' && o(window.location.pathname);
		}, []),
		p.jsxs(rr, {
			onMenuOpenChange: n,
			isMenuOpen: t,
			maxWidth: '2xl',
			className: 'fixed bg-primary-50',
			children: [
				p.jsx(nr, { children: e }),
				p.jsxs(ar, {
					className: 'sm:gap-4 md:gap-12 lg:gap-32 xl:gap-40',
					justify: 'center',
					children: [
						p.jsx('div', {
							className:
								'hidden cursor-pointer flex-row items-center justify-between gap-[4vw] sm:flex lg:gap-[6vw] xl:gap-[10vw]',
							children: i.map((c, v) =>
								p.jsx(
									or,
									{
										children: p.jsx(fe.a, {
											initial: { x: -100, opacity: 0 },
											animate: { x: 0, opacity: 1 },
											transition: { duration: 0.1 },
											className: 'a-scroll w-full',
											href: c.href,
											children: p.jsx('p', {
												className: 'text-base font-bold text-foreground-50 md:text-lg',
												children: c.title,
											}),
										}),
									},
									`${c.title}-${v}`
								)
							),
						}),
						p.jsx(u, {}),
					],
				}),
				p.jsx(lr, { 'aria-label': t ? 'Close menu' : 'Open menu', className: 'sm:hidden' }),
				p.jsx(We, {
					children: i.map((c, v) =>
						p.jsx(
							sr,
							{
								children: p.jsx('a', {
									className: 'a-scroll w-full',
									href: c.href,
									onClick: (h) => {
										h.preventDefault(),
											document.querySelector(c.href)?.scrollIntoView({ behavior: 'smooth' }),
											setTimeout(() => n(!1), 500);
									},
									children: p.jsx('p', {
										className: 'font-bold text-foreground-50',
										children: c.title,
									}),
								}),
							},
							`${c.title}-${v}`
						)
					),
				}),
			],
		})
	);
}
export { gr as NavbarHome };
