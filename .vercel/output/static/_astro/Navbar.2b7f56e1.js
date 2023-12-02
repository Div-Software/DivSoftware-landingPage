import {
	t as He,
	d as Fe,
	v as we,
	x as Ue,
	w as z,
	z as Y,
	H as F,
	u as p,
	F as A,
	A as ze,
	y as Se,
	k as te,
	V as Ye,
	a5 as de,
	G as Xe,
	a6 as qe,
	C as Ge,
	D as Ze,
	B as Qe,
	E as Je,
} from './index.1313ec55.js';
import { t as ne } from './i18next.a4b2730f.js';
import { r as f, R as Ke } from './index.b3c965e4.js';
import './_commonjsHelpers.725317a4.js';
var D = function () {
	return (
		(D =
			Object.assign ||
			function (t) {
				for (var n, a = 1, o = arguments.length; a < o; a++) {
					n = arguments[a];
					for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
				}
				return t;
			}),
		D.apply(this, arguments)
	);
};
function xe(e, t) {
	var n = {};
	for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
	if (e != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++)
			t.indexOf(a[o]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
				(n[a[o]] = e[a[o]]);
	return n;
}
function et(e, t, n) {
	if (n || arguments.length === 2)
		for (var a = 0, o = t.length, i; a < o; a++)
			(i || !(a in t)) && (i || (i = Array.prototype.slice.call(t, 0, a)), (i[a] = t[a]));
	return e.concat(i || Array.prototype.slice.call(t));
}
var ve = He({
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
				...Fe,
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
	tt = Object.create,
	_e = Object.defineProperty,
	rt = Object.getOwnPropertyDescriptor,
	Ce = Object.getOwnPropertyNames,
	nt = Object.getPrototypeOf,
	at = Object.prototype.hasOwnProperty,
	Ne = (e, t) =>
		function () {
			return t || (0, e[Ce(e)[0]])((t = { exports: {} }).exports, t), t.exports;
		},
	ot = (e, t, n, a) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let o of Ce(t))
				!at.call(e, o) &&
					o !== n &&
					_e(e, o, { get: () => t[o], enumerable: !(a = rt(t, o)) || a.enumerable });
		return e;
	},
	lt = (e, t, n) => (
		(n = e != null ? tt(nt(e)) : {}),
		ot(t || !e || !e.__esModule ? _e(n, 'default', { value: e, enumerable: !0 }) : n, e)
	),
	it = Ne({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js'(e) {
			var t = Symbol.for('react.element'),
				n = Symbol.for('react.portal'),
				a = Symbol.for('react.fragment'),
				o = Symbol.for('react.strict_mode'),
				i = Symbol.for('react.profiler'),
				c = Symbol.for('react.provider'),
				u = Symbol.for('react.context'),
				d = Symbol.for('react.forward_ref'),
				m = Symbol.for('react.suspense'),
				h = Symbol.for('react.memo'),
				y = Symbol.for('react.lazy'),
				b = Symbol.iterator;
			function j(r) {
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
				s = Object.assign,
				v = {};
			function w(r, l, g) {
				(this.props = r), (this.context = l), (this.refs = v), (this.updater = g || P);
			}
			(w.prototype.isReactComponent = {}),
				(w.prototype.setState = function (r, l) {
					if (typeof r != 'object' && typeof r != 'function' && r != null)
						throw Error(
							'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
						);
					this.updater.enqueueSetState(this, r, l, 'setState');
				}),
				(w.prototype.forceUpdate = function (r) {
					this.updater.enqueueForceUpdate(this, r, 'forceUpdate');
				});
			function O() {}
			O.prototype = w.prototype;
			function S(r, l, g) {
				(this.props = r), (this.context = l), (this.refs = v), (this.updater = g || P);
			}
			var I = (S.prototype = new O());
			(I.constructor = S), s(I, w.prototype), (I.isPureReactComponent = !0);
			var N = Array.isArray,
				T = Object.prototype.hasOwnProperty,
				B = { current: null },
				W = { key: !0, ref: !0, __self: !0, __source: !0 };
			function L(r, l, g) {
				var C,
					_ = {},
					R = null,
					M = null;
				if (l != null)
					for (C in (l.ref !== void 0 && (M = l.ref), l.key !== void 0 && (R = '' + l.key), l))
						T.call(l, C) && !W.hasOwnProperty(C) && (_[C] = l[C]);
				var k = arguments.length - 2;
				if (k === 1) _.children = g;
				else if (1 < k) {
					for (var E = Array(k), V = 0; V < k; V++) E[V] = arguments[V + 2];
					_.children = E;
				}
				if (r && r.defaultProps)
					for (C in ((k = r.defaultProps), k)) _[C] === void 0 && (_[C] = k[C]);
				return { $$typeof: t, type: r, key: R, ref: M, props: _, _owner: B.current };
			}
			function X(r, l) {
				return { $$typeof: t, type: r.type, key: l, ref: r.ref, props: r.props, _owner: r._owner };
			}
			function H(r) {
				return typeof r == 'object' && r !== null && r.$$typeof === t;
			}
			function K(r) {
				var l = { '=': '=0', ':': '=2' };
				return (
					'$' +
					r.replace(/[=:]/g, function (g) {
						return l[g];
					})
				);
			}
			var re = /\/+/g;
			function ee(r, l) {
				return typeof r == 'object' && r !== null && r.key != null ? K('' + r.key) : l.toString(36);
			}
			function q(r, l, g, C, _) {
				var R = typeof r;
				(R === 'undefined' || R === 'boolean') && (r = null);
				var M = !1;
				if (r === null) M = !0;
				else
					switch (R) {
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
						(_ = _(M)),
						(r = C === '' ? '.' + ee(M, 0) : C),
						N(_)
							? ((g = ''),
							  r != null && (g = r.replace(re, '$&/') + '/'),
							  q(_, l, g, '', function (V) {
									return V;
							  }))
							: _ != null &&
							  (H(_) &&
									(_ = X(
										_,
										g +
											(!_.key || (M && M.key === _.key)
												? ''
												: ('' + _.key).replace(re, '$&/') + '/') +
											r
									)),
							  l.push(_)),
						1
					);
				if (((M = 0), (C = C === '' ? '.' : C + ':'), N(r)))
					for (var k = 0; k < r.length; k++) {
						R = r[k];
						var E = C + ee(R, k);
						M += q(R, l, g, E, _);
					}
				else if (((E = j(r)), typeof E == 'function'))
					for (r = E.call(r), k = 0; !(R = r.next()).done; )
						(R = R.value), (E = C + ee(R, k++)), (M += q(R, l, g, E, _));
				else if (R === 'object')
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
				return M;
			}
			function x(r, l, g) {
				if (r == null) return r;
				var C = [],
					_ = 0;
				return (
					q(r, C, '', '', function (R) {
						return l.call(g, R, _++);
					}),
					C
				);
			}
			function G(r) {
				if (r._status === -1) {
					var l = r._result;
					(l = l()),
						l.then(
							function (g) {
								(r._status === 0 || r._status === -1) && ((r._status = 1), (r._result = g));
							},
							function (g) {
								(r._status === 0 || r._status === -1) && ((r._status = 2), (r._result = g));
							}
						),
						r._status === -1 && ((r._status = 0), (r._result = l));
				}
				if (r._status === 1) return r._result.default;
				throw r._result;
			}
			var $ = { current: null },
				U = { transition: null },
				De = { ReactCurrentDispatcher: $, ReactCurrentBatchConfig: U, ReactCurrentOwner: B };
			(e.Children = {
				map: x,
				forEach: function (r, l, g) {
					x(
						r,
						function () {
							l.apply(this, arguments);
						},
						g
					);
				},
				count: function (r) {
					var l = 0;
					return (
						x(r, function () {
							l++;
						}),
						l
					);
				},
				toArray: function (r) {
					return (
						x(r, function (l) {
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
				(e.Component = w),
				(e.Fragment = a),
				(e.Profiler = i),
				(e.PureComponent = S),
				(e.StrictMode = o),
				(e.Suspense = m),
				(e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = De),
				(e.cloneElement = function (r, l, g) {
					if (r == null)
						throw Error(
							'React.cloneElement(...): The argument must be a React element, but you passed ' +
								r +
								'.'
						);
					var C = s({}, r.props),
						_ = r.key,
						R = r.ref,
						M = r._owner;
					if (l != null) {
						if (
							(l.ref !== void 0 && ((R = l.ref), (M = B.current)),
							l.key !== void 0 && (_ = '' + l.key),
							r.type && r.type.defaultProps)
						)
							var k = r.type.defaultProps;
						for (E in l)
							T.call(l, E) &&
								!W.hasOwnProperty(E) &&
								(C[E] = l[E] === void 0 && k !== void 0 ? k[E] : l[E]);
					}
					var E = arguments.length - 2;
					if (E === 1) C.children = g;
					else if (1 < E) {
						k = Array(E);
						for (var V = 0; V < E; V++) k[V] = arguments[V + 2];
						C.children = k;
					}
					return { $$typeof: t, type: r.type, key: _, ref: R, props: C, _owner: M };
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
						(r.Provider = { $$typeof: c, _context: r }),
						(r.Consumer = r)
					);
				}),
				(e.createElement = L),
				(e.createFactory = function (r) {
					var l = L.bind(null, r);
					return (l.type = r), l;
				}),
				(e.createRef = function () {
					return { current: null };
				}),
				(e.forwardRef = function (r) {
					return { $$typeof: d, render: r };
				}),
				(e.isValidElement = H),
				(e.lazy = function (r) {
					return { $$typeof: y, _payload: { _status: -1, _result: r }, _init: G };
				}),
				(e.memo = function (r, l) {
					return { $$typeof: h, type: r, compare: l === void 0 ? null : l };
				}),
				(e.startTransition = function (r) {
					var l = U.transition;
					U.transition = {};
					try {
						r();
					} finally {
						U.transition = l;
					}
				}),
				(e.unstable_act = function () {
					throw Error('act(...) is not supported in production builds of React.');
				}),
				(e.useCallback = function (r, l) {
					return $.current.useCallback(r, l);
				}),
				(e.useContext = function (r) {
					return $.current.useContext(r);
				}),
				(e.useDebugValue = function () {}),
				(e.useDeferredValue = function (r) {
					return $.current.useDeferredValue(r);
				}),
				(e.useEffect = function (r, l) {
					return $.current.useEffect(r, l);
				}),
				(e.useId = function () {
					return $.current.useId();
				}),
				(e.useImperativeHandle = function (r, l, g) {
					return $.current.useImperativeHandle(r, l, g);
				}),
				(e.useInsertionEffect = function (r, l) {
					return $.current.useInsertionEffect(r, l);
				}),
				(e.useLayoutEffect = function (r, l) {
					return $.current.useLayoutEffect(r, l);
				}),
				(e.useMemo = function (r, l) {
					return $.current.useMemo(r, l);
				}),
				(e.useReducer = function (r, l, g) {
					return $.current.useReducer(r, l, g);
				}),
				(e.useRef = function (r) {
					return $.current.useRef(r);
				}),
				(e.useState = function (r) {
					return $.current.useState(r);
				}),
				(e.useSyncExternalStore = function (r, l, g) {
					return $.current.useSyncExternalStore(r, l, g);
				}),
				(e.useTransition = function () {
					return $.current.useTransition();
				}),
				(e.version = '18.2.0');
		},
	}),
	ct = Ne({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'(e, t) {
			t.exports = it();
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
 */ var he = lt(ct()),
	ut = (e, t) => {
		var n;
		let a = [];
		const o =
				(n = he.Children.map(e, (c) =>
					(0, he.isValidElement)(c) && c.type === t ? (a.push(c), null) : c
				)) == null
					? void 0
					: n.filter(Boolean),
			i = a.length >= 0 ? a : void 0;
		return [o, i];
	};
function st(e = {}) {
	let { isReadOnly: t } = e,
		[n, a] = we(e.isSelected, e.defaultSelected || !1, e.onChange);
	function o(c) {
		t || a(c);
	}
	function i() {
		t || a(!n);
	}
	return { isSelected: n, setSelected: o, toggle: i };
}
var le = 'right-scroll-bar-position',
	ie = 'width-before-scroll-bar',
	ft = 'with-scroll-bars-hidden',
	dt = '--removed-body-scroll-bar-size';
function vt(e, t) {
	return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function ht(e, t) {
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
function mt(e, t) {
	return ht(t || null, function (n) {
		return e.forEach(function (a) {
			return vt(a, n);
		});
	});
}
function pt(e) {
	return e;
}
function yt(e, t) {
	t === void 0 && (t = pt);
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
				var c = t(i, a);
				return (
					n.push(c),
					function () {
						n = n.filter(function (u) {
							return u !== c;
						});
					}
				);
			},
			assignSyncMedium: function (i) {
				for (a = !0; n.length; ) {
					var c = n;
					(n = []), c.forEach(i);
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
				var c = [];
				if (n.length) {
					var u = n;
					(n = []), u.forEach(i), (c = n);
				}
				var d = function () {
						var h = c;
						(c = []), h.forEach(i);
					},
					m = function () {
						return Promise.resolve().then(d);
					};
				m(),
					(n = {
						push: function (h) {
							c.push(h), m();
						},
						filter: function (h) {
							return (c = c.filter(h)), n;
						},
					});
			},
		};
	return o;
}
function gt(e) {
	e === void 0 && (e = {});
	var t = yt(null);
	return (t.options = D({ async: !0, ssr: !1 }, e)), t;
}
var je = function (e) {
	var t = e.sideCar,
		n = xe(e, ['sideCar']);
	if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
	var a = t.read();
	if (!a) throw new Error('Sidecar medium not found');
	return f.createElement(a, D({}, n));
};
je.isSideCarExport = !0;
function bt(e, t) {
	return e.useMedium(t), je;
}
var Pe = gt(),
	ue = function () {},
	ce = f.forwardRef(function (e, t) {
		var n = f.useRef(null),
			a = f.useState({ onScrollCapture: ue, onWheelCapture: ue, onTouchMoveCapture: ue }),
			o = a[0],
			i = a[1],
			c = e.forwardProps,
			u = e.children,
			d = e.className,
			m = e.removeScrollBar,
			h = e.enabled,
			y = e.shards,
			b = e.sideCar,
			j = e.noIsolation,
			P = e.inert,
			s = e.allowPinchZoom,
			v = e.as,
			w = v === void 0 ? 'div' : v,
			O = e.gapMode,
			S = xe(e, [
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
			N = mt([n, t]),
			T = D(D({}, S), o);
		return f.createElement(
			f.Fragment,
			null,
			h &&
				f.createElement(I, {
					sideCar: Pe,
					removeScrollBar: m,
					shards: y,
					noIsolation: j,
					inert: P,
					setCallbacks: i,
					allowPinchZoom: !!s,
					lockRef: n,
					gapMode: O,
				}),
			c
				? f.cloneElement(f.Children.only(u), D(D({}, T), { ref: N }))
				: f.createElement(w, D({}, T, { className: d, ref: N }), u)
		);
	});
ce.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ce.classNames = { fullWidth: ie, zeroRight: le };
var me,
	wt = function () {
		if (me) return me;
		if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
	};
function St() {
	if (!document) return null;
	var e = document.createElement('style');
	e.type = 'text/css';
	var t = wt();
	return t && e.setAttribute('nonce', t), e;
}
function xt(e, t) {
	e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function _t(e) {
	var t = document.head || document.getElementsByTagName('head')[0];
	t.appendChild(e);
}
var Ct = function () {
		var e = 0,
			t = null;
		return {
			add: function (n) {
				e == 0 && (t = St()) && (xt(t, n), _t(t)), e++;
			},
			remove: function () {
				e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
			},
		};
	},
	Nt = function () {
		var e = Ct();
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
	Ee = function () {
		var e = Nt(),
			t = function (n) {
				var a = n.styles,
					o = n.dynamic;
				return e(a, o), null;
			};
		return t;
	},
	jt = { left: 0, top: 0, right: 0, gap: 0 },
	se = function (e) {
		return parseInt(e || '', 10) || 0;
	},
	Pt = function (e) {
		var t = window.getComputedStyle(document.body),
			n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
			a = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
			o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
		return [se(n), se(a), se(o)];
	},
	Et = function (e) {
		if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return jt;
		var t = Pt(e),
			n = document.documentElement.clientWidth,
			a = window.innerWidth;
		return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, a - n + t[2] - t[0]) };
	},
	Rt = Ee(),
	kt = function (e, t, n, a) {
		var o = e.left,
			i = e.top,
			c = e.right,
			u = e.gap;
		return (
			n === void 0 && (n = 'margin'),
			`
  .`
				.concat(
					ft,
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
									c,
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
					le,
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
					ie,
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
				.concat(le, ' .')
				.concat(
					le,
					` {
    right: 0 `
				)
				.concat(
					a,
					`;
  }
  
  .`
				)
				.concat(ie, ' .')
				.concat(
					ie,
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
				.concat(dt, ': ')
				.concat(
					u,
					`px;
  }
`
				)
		);
	},
	Ot = function (e) {
		var t = e.noRelative,
			n = e.noImportant,
			a = e.gapMode,
			o = a === void 0 ? 'margin' : a,
			i = f.useMemo(
				function () {
					return Et(o);
				},
				[o]
			);
		return f.createElement(Rt, { styles: kt(i, !t, o, n ? '' : '!important') });
	},
	fe = !1;
if (typeof window < 'u')
	try {
		var ae = Object.defineProperty({}, 'passive', {
			get: function () {
				return (fe = !0), !0;
			},
		});
		window.addEventListener('test', ae, ae), window.removeEventListener('test', ae, ae);
	} catch {
		fe = !1;
	}
var Z = fe ? { passive: !1 } : !1,
	It = function (e) {
		return e.tagName === 'TEXTAREA';
	},
	Re = function (e, t) {
		var n = window.getComputedStyle(e);
		return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !It(e) && n[t] === 'visible');
	},
	Mt = function (e) {
		return Re(e, 'overflowY');
	},
	$t = function (e) {
		return Re(e, 'overflowX');
	},
	pe = function (e, t) {
		var n = t.ownerDocument,
			a = t;
		do {
			typeof ShadowRoot < 'u' && a instanceof ShadowRoot && (a = a.host);
			var o = ke(e, a);
			if (o) {
				var i = Oe(e, a),
					c = i[1],
					u = i[2];
				if (c > u) return !0;
			}
			a = a.parentNode;
		} while (a && a !== n.body);
		return !1;
	},
	Tt = function (e) {
		var t = e.scrollTop,
			n = e.scrollHeight,
			a = e.clientHeight;
		return [t, n, a];
	},
	Bt = function (e) {
		var t = e.scrollLeft,
			n = e.scrollWidth,
			a = e.clientWidth;
		return [t, n, a];
	},
	ke = function (e, t) {
		return e === 'v' ? Mt(t) : $t(t);
	},
	Oe = function (e, t) {
		return e === 'v' ? Tt(t) : Bt(t);
	},
	At = function (e, t) {
		return e === 'h' && t === 'rtl' ? -1 : 1;
	},
	Wt = function (e, t, n, a, o) {
		var i = At(e, window.getComputedStyle(t).direction),
			c = i * a,
			u = n.target,
			d = t.contains(u),
			m = !1,
			h = c > 0,
			y = 0,
			b = 0;
		do {
			var j = Oe(e, u),
				P = j[0],
				s = j[1],
				v = j[2],
				w = s - v - i * P;
			(P || w) && ke(e, u) && ((y += w), (b += P)),
				u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
		} while ((!d && u !== document.body) || (d && (t.contains(u) || t === u)));
		return (
			((h && ((o && Math.abs(y) < 1) || (!o && c > y))) ||
				(!h && ((o && Math.abs(b) < 1) || (!o && -c > b)))) &&
				(m = !0),
			m
		);
	},
	oe = function (e) {
		return 'changedTouches' in e
			? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
			: [0, 0];
	},
	ye = function (e) {
		return [e.deltaX, e.deltaY];
	},
	ge = function (e) {
		return e && 'current' in e ? e.current : e;
	},
	Lt = function (e, t) {
		return e[0] === t[0] && e[1] === t[1];
	},
	Vt = function (e) {
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
	Dt = 0,
	Q = [];
function Ht(e) {
	var t = f.useRef([]),
		n = f.useRef([0, 0]),
		a = f.useRef(),
		o = f.useState(Dt++)[0],
		i = f.useState(Ee)[0],
		c = f.useRef(e);
	f.useEffect(
		function () {
			c.current = e;
		},
		[e]
	),
		f.useEffect(
			function () {
				if (e.inert) {
					document.body.classList.add('block-interactivity-'.concat(o));
					var s = et([e.lockRef.current], (e.shards || []).map(ge), !0).filter(Boolean);
					return (
						s.forEach(function (v) {
							return v.classList.add('allow-interactivity-'.concat(o));
						}),
						function () {
							document.body.classList.remove('block-interactivity-'.concat(o)),
								s.forEach(function (v) {
									return v.classList.remove('allow-interactivity-'.concat(o));
								});
						}
					);
				}
			},
			[e.inert, e.lockRef.current, e.shards]
		);
	var u = f.useCallback(function (s, v) {
			if ('touches' in s && s.touches.length === 2) return !c.current.allowPinchZoom;
			var w = oe(s),
				O = n.current,
				S = 'deltaX' in s ? s.deltaX : O[0] - w[0],
				I = 'deltaY' in s ? s.deltaY : O[1] - w[1],
				N,
				T = s.target,
				B = Math.abs(S) > Math.abs(I) ? 'h' : 'v';
			if ('touches' in s && B === 'h' && T.type === 'range') return !1;
			var W = pe(B, T);
			if (!W) return !0;
			if ((W ? (N = B) : ((N = B === 'v' ? 'h' : 'v'), (W = pe(B, T))), !W)) return !1;
			if ((!a.current && 'changedTouches' in s && (S || I) && (a.current = N), !N)) return !0;
			var L = a.current || N;
			return Wt(L, v, s, L === 'h' ? S : I, !0);
		}, []),
		d = f.useCallback(function (s) {
			var v = s;
			if (!(!Q.length || Q[Q.length - 1] !== i)) {
				var w = 'deltaY' in v ? ye(v) : oe(v),
					O = t.current.filter(function (N) {
						return (
							N.name === v.type &&
							(N.target === v.target || v.target === N.shadowParent) &&
							Lt(N.delta, w)
						);
					})[0];
				if (O && O.should) {
					v.cancelable && v.preventDefault();
					return;
				}
				if (!O) {
					var S = (c.current.shards || [])
							.map(ge)
							.filter(Boolean)
							.filter(function (N) {
								return N.contains(v.target);
							}),
						I = S.length > 0 ? u(v, S[0]) : !c.current.noIsolation;
					I && v.cancelable && v.preventDefault();
				}
			}
		}, []),
		m = f.useCallback(function (s, v, w, O) {
			var S = { name: s, delta: v, target: w, should: O, shadowParent: Ft(w) };
			t.current.push(S),
				setTimeout(function () {
					t.current = t.current.filter(function (I) {
						return I !== S;
					});
				}, 1);
		}, []),
		h = f.useCallback(function (s) {
			(n.current = oe(s)), (a.current = void 0);
		}, []),
		y = f.useCallback(function (s) {
			m(s.type, ye(s), s.target, u(s, e.lockRef.current));
		}, []),
		b = f.useCallback(function (s) {
			m(s.type, oe(s), s.target, u(s, e.lockRef.current));
		}, []);
	f.useEffect(function () {
		return (
			Q.push(i),
			e.setCallbacks({ onScrollCapture: y, onWheelCapture: y, onTouchMoveCapture: b }),
			document.addEventListener('wheel', d, Z),
			document.addEventListener('touchmove', d, Z),
			document.addEventListener('touchstart', h, Z),
			function () {
				(Q = Q.filter(function (s) {
					return s !== i;
				})),
					document.removeEventListener('wheel', d, Z),
					document.removeEventListener('touchmove', d, Z),
					document.removeEventListener('touchstart', h, Z);
			}
		);
	}, []);
	var j = e.removeScrollBar,
		P = e.inert;
	return f.createElement(
		f.Fragment,
		null,
		P ? f.createElement(i, { styles: Vt(o) }) : null,
		j ? f.createElement(Ot, { gapMode: e.gapMode }) : null
	);
}
function Ft(e) {
	for (var t = null; e !== null; )
		e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
	return t;
}
const Ut = bt(Pe, Ht);
var Ie = f.forwardRef(function (e, t) {
	return f.createElement(ce, D({}, e, { ref: t, sideCar: Ut }));
});
Ie.classNames = ce.classNames;
const zt = Ie;
var [Yt, J] = Ue({
		name: 'NavbarContext',
		strict: !0,
		errorMessage:
			'useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />',
	}),
	Xt = {
		enter: {
			height: 'calc(100vh - var(--navbar-height) - 1px)',
			transition: { duration: 0.3, easings: 'easeOut' },
		},
		exit: { height: 0, transition: { duration: 0.25, easings: 'easeIn' } },
	},
	Me = z((e, t) => {
		var n, a;
		const { className: o, children: i, portalContainer: c, motionProps: u, style: d, ...m } = e,
			h = Y(t),
			{ slots: y, isMenuOpen: b, height: j, disableAnimation: P, classNames: s } = J(),
			v = F(s?.menu, o),
			w = f.useCallback(
				({ children: S }) =>
					p.jsx(zt, { forwardProps: !0, enabled: b, removeScrollBar: !1, children: S }),
				[b]
			),
			O = P
				? p.jsx(w, {
						children: p.jsx('ul', {
							ref: h,
							className: (n = y.menu) == null ? void 0 : n.call(y, { class: v }),
							'data-open': A(b),
							style: { '--navbar-height': j },
							...m,
							children: i,
						}),
				  })
				: p.jsx(ze, {
						mode: 'wait',
						children: b
							? p.jsx(w, {
									children: p.jsx(Se.ul, {
										ref: h,
										layoutScroll: !0,
										animate: 'enter',
										className: (a = y.menu) == null ? void 0 : a.call(y, { class: v }),
										'data-open': A(b),
										exit: 'exit',
										initial: 'exit',
										style: { '--navbar-height': j, ...d },
										variants: Xt,
										...te(u, m),
										children: i,
									}),
							  })
							: null,
				  });
		return p.jsx(Ye, { portalContainer: c, children: O });
	});
Me.displayName = 'NextUI.NavbarMenu';
var $e = Me,
	qt = {
		visible: { y: 0, transition: { ease: de.easeOut } },
		hidden: { y: '-100%', transition: { ease: de.easeIn } },
	},
	Gt = typeof window < 'u';
function be(e) {
	return Gt
		? e
			? { x: e.scrollLeft, y: e.scrollTop }
			: { x: window.scrollX, y: window.scrollY }
		: { x: 0, y: 0 };
}
var Zt = (e) => {
	const { elementRef: t, delay: n = 30, callback: a, isEnabled: o } = e,
		i = f.useRef(o ? be(t?.current) : { x: 0, y: 0 });
	let c = null;
	const u = () => {
		const d = be(t?.current);
		typeof a == 'function' && a({ prevPos: i.current, currPos: d }), (i.current = d), (c = null);
	};
	return (
		f.useEffect(() => {
			if (!o) return;
			const d = () => {
					n ? c === null && (c = setTimeout(u, n)) : u();
				},
				m = t?.current || window;
			return m.addEventListener('scroll', d), () => m.removeEventListener('scroll', d);
		}, [t?.current, n, o]),
		i.current
	);
};
function Qt(e) {
	var t;
	const [n, a] = Xe(e, ve.variantKeys),
		{
			ref: o,
			as: i,
			parentRef: c,
			height: u = '4rem',
			shouldHideOnScroll: d = !1,
			disableScrollHandler: m = !1,
			onScrollPositionChange: h,
			isMenuOpen: y,
			isMenuDefaultOpen: b,
			onMenuOpenChange: j = () => {},
			motionProps: P,
			className: s,
			classNames: v,
			...w
		} = n,
		O = i || 'nav',
		S = Y(o),
		I = f.useRef(0),
		N = f.useRef(0),
		[T, B] = f.useState(!1),
		W = f.useCallback(
			(x) => {
				j(x || !1);
			},
			[j]
		),
		[L, X] = we(y, b, W),
		H = () => {
			if (S.current) {
				const x = S.current.offsetWidth;
				x !== I.current && (I.current = x);
			}
		};
	qe({
		ref: S,
		onResize: () => {
			var x;
			((x = S.current) == null ? void 0 : x.offsetWidth) !== I.current && (H(), X(!1));
		},
	}),
		f.useEffect(() => {
			var x;
			H(), (N.current = ((x = S.current) == null ? void 0 : x.offsetHeight) || 0);
		}, []);
	const K = f.useMemo(() => ve({ ...a, hideOnScroll: d }), [...Object.values(a), d]),
		re = F(v?.base, s);
	Zt({
		elementRef: c,
		isEnabled: d || !m,
		callback: ({ prevPos: x, currPos: G }) => {
			h?.(G.y),
				d &&
					B(($) => {
						const U = G.y > x.y && G.y > N.current;
						return U !== $ ? U : $;
					});
		},
	});
	const ee = (x = {}) => ({
			...te(w, x),
			'data-hidden': A(T),
			'data-menu-open': A(L),
			ref: S,
			className: K.base({ class: F(re, x?.className) }),
			style: { '--navbar-height': u, ...x?.style },
		}),
		q = (x = {}) => ({
			...x,
			'data-menu-open': A(L),
			className: K.wrapper({ class: F(v?.wrapper, x?.className) }),
		});
	return {
		Component: O,
		slots: K,
		domRef: S,
		height: u,
		isHidden: T,
		disableAnimation: (t = e.disableAnimation) != null ? t : !1,
		shouldHideOnScroll: d,
		isMenuOpen: L,
		classNames: v,
		setIsMenuOpen: X,
		motionProps: P,
		getBaseProps: ee,
		getWrapperProps: q,
	};
}
var Te = z((e, t) => {
	const { children: n, ...a } = e,
		o = Qt({ ...a, ref: t }),
		i = o.Component,
		[c, u] = ut(n, $e),
		d = p.jsxs(p.Fragment, {
			children: [p.jsx('header', { ...o.getWrapperProps(), children: c }), u],
		});
	return p.jsx(Yt, {
		value: o,
		children: o.shouldHideOnScroll
			? p.jsx(Se.nav, {
					animate: o.isHidden ? 'hidden' : 'visible',
					initial: !1,
					variants: qt,
					...te(o.getBaseProps(), o.motionProps),
					children: d,
			  })
			: p.jsx(i, { ...o.getBaseProps(), children: d }),
	});
});
Te.displayName = 'NextUI.Navbar';
var Jt = Te,
	Be = z((e, t) => {
		var n;
		const { as: a, className: o, children: i, ...c } = e,
			u = a || 'div',
			d = Y(t),
			{ slots: m, classNames: h } = J(),
			y = F(h?.brand, o);
		return p.jsx(u, {
			ref: d,
			className: (n = m.brand) == null ? void 0 : n.call(m, { class: y }),
			...c,
			children: i,
		});
	});
Be.displayName = 'NextUI.NavbarBrand';
var Kt = Be,
	Ae = z((e, t) => {
		var n;
		const { as: a, className: o, children: i, justify: c = 'start', ...u } = e,
			d = a || 'ul',
			m = Y(t),
			{ slots: h, classNames: y } = J(),
			b = F(y?.content, o);
		return p.jsx(d, {
			ref: m,
			className: (n = h.content) == null ? void 0 : n.call(h, { class: b }),
			'data-justify': c,
			...u,
			children: i,
		});
	});
Ae.displayName = 'NextUI.NavbarContent';
var er = Ae,
	We = z((e, t) => {
		var n;
		const { as: a, className: o, children: i, isActive: c, ...u } = e,
			d = a || 'li',
			m = Y(t),
			{ slots: h, classNames: y } = J(),
			b = F(y?.item, o);
		return p.jsx(d, {
			ref: m,
			className: (n = h.item) == null ? void 0 : n.call(h, { class: b }),
			'data-active': A(c),
			...u,
			children: i,
		});
	});
We.displayName = 'NextUI.NavbarItem';
var tr = We,
	Le = z((e, t) => {
		var n;
		const { className: a, children: o, isActive: i, ...c } = e,
			u = Y(t),
			{ slots: d, isMenuOpen: m, classNames: h } = J(),
			y = F(h?.menuItem, a);
		return p.jsx('li', {
			ref: u,
			className: (n = d.menuItem) == null ? void 0 : n.call(d, { class: y }),
			'data-active': A(i),
			'data-open': A(m),
			...c,
			children: o,
		});
	});
Le.displayName = 'NextUI.NavbarMenuItem';
var rr = Le;
function nr(e, t, n) {
	const { isSelected: a } = t,
		{ isPressed: o, buttonProps: i } = Ge({ ...e, onPress: Ze(t.toggle, e.onPress) }, n);
	return { isPressed: o, buttonProps: te(i, { 'aria-pressed': a }) };
}
var Ve = z((e, t) => {
	var n;
	const { as: a, icon: o, className: i, onChange: c, autoFocus: u, srOnlyText: d, ...m } = e,
		h = a || 'button',
		y = Y(t),
		{ slots: b, classNames: j, isMenuOpen: P, setIsMenuOpen: s } = J(),
		w = st({
			...m,
			isSelected: P,
			onChange: (H) => {
				c?.(H), s(H);
			},
		}),
		{ buttonProps: O, isPressed: S } = nr(e, w, y),
		{ isFocusVisible: I, focusProps: N } = Qe({ autoFocus: u }),
		{ isHovered: T, hoverProps: B } = Je({}),
		W = F(j?.toggle, i),
		L = f.useMemo(
			() =>
				typeof o == 'function'
					? o(P ?? !1)
					: o || p.jsx('span', { className: b.toggleIcon({ class: j?.toggleIcon }) }),
			[o, P, b.toggleIcon, j?.toggleIcon]
		),
		X = f.useMemo(
			() => d || (w.isSelected ? 'close navigation menu' : 'open navigation menu'),
			[d, P]
		);
	return p.jsxs(h, {
		ref: y,
		className: (n = b.toggle) == null ? void 0 : n.call(b, { class: W }),
		'data-focus-visible': A(I),
		'data-hover': A(T),
		'data-open': A(P),
		'data-pressed': A(S),
		...te(O, N, B, m),
		children: [p.jsx('span', { className: b.srOnly(), children: X }), L],
	});
});
Ve.displayName = 'NextUI.NavbarMenuToggle';
var ar = Ve;
function ur({ children: e }) {
	const [t, n] = Ke.useState(!1),
		a = [
			{ title: ne('home.navbar.home'), href: '#banner' },
			{ title: ne('home.navbar.about'), href: '#about' },
			{ title: ne('home.navbar.services'), href: '#services' },
			{ title: ne('home.navbar.contact'), href: '#contact' },
		];
	return p.jsxs(Jt, {
		onMenuOpenChange: n,
		isMenuOpen: t,
		maxWidth: '2xl',
		className: 'fixed bg-primary-50',
		children: [
			p.jsx(Kt, { children: e }),
			p.jsx(ar, { 'aria-label': t ? 'Close menu' : 'Open menu', className: 'sm:hidden' }),
			p.jsx(er, {
				className: 'hidden sm:flex sm:gap-8 md:gap-16 lg:gap-32',
				justify: 'center',
				children: a.map((o, i) =>
					p.jsx(
						tr,
						{
							style: { cursor: 'pointer' },
							children: p.jsx('a', {
								className: 'a-scroll w-full',
								href: o.href,
								children: p.jsx('p', {
									className: 'font-bold text-foreground-50',
									children: o.title,
								}),
							}),
						},
						`${o.title}-${i}`
					)
				),
			}),
			p.jsx($e, {
				children: a.map((o, i) =>
					p.jsx(
						rr,
						{
							children: p.jsx('a', {
								className: 'a-scroll w-full',
								href: o.href,
								onClick: (c) => {
									c.preventDefault(),
										document.querySelector(o.href)?.scrollIntoView({ behavior: 'smooth' }),
										setTimeout(() => n(!1), 500);
								},
								children: p.jsx('p', {
									className: 'font-bold text-foreground-50',
									children: o.title,
								}),
							}),
						},
						`${o.title}-${i}`
					)
				),
			}),
		],
	});
}
export { ur as NavbarHome };
