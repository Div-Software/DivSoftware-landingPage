import {
	$ as Bi,
	a as Oi,
	t as Fi,
	d as Ii,
	u as $i,
	b as Ni,
	c as Vt,
	e as _i,
	f as At,
	g as Mt,
	j as k,
	h as st,
	m as Ui,
	i as Wi,
	k as Hi,
	l as zi,
	n as Gi,
	L as Ki,
	o as Dn,
	s as En,
} from './LogoComponent.3676cf1a.js';
import { R as Q, r as g } from './index.6460afdd.js';
import { $ as Xi } from './index.dee33f80.js';
const de = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
	Hr = Q.createContext(de),
	Yi = Q.createContext(!1);
let qi = !!(typeof window < 'u' && window.document && window.document.createElement),
	De = new WeakMap();
function Zi(t = !1) {
	let e = g.useContext(Hr),
		n = g.useRef(null);
	if (n.current === null && !t) {
		var r, s;
		let o =
			(r = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
			r === void 0 ||
			(s = r.ReactCurrentOwner) === null ||
			s === void 0
				? void 0
				: s.current;
		if (o) {
			let i = De.get(o);
			i == null
				? De.set(o, { id: e.current, state: o.memoizedState })
				: o.memoizedState !== i.state && ((e.current = i.id), De.delete(o));
		}
		n.current = ++e.current;
	}
	return n.current;
}
function Qi(t) {
	let e = g.useContext(Hr);
	e === de &&
		!qi &&
		console.warn(
			'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
		);
	let n = Zi(!!t),
		r = `react-aria${e.prefix}`;
	return t || `${r}-${n}`;
}
function Ji(t) {
	let e = Q.useId(),
		[n] = g.useState(zr()),
		r = n ? 'react-aria' : `react-aria${de.prefix}`;
	return t || `${r}-${e}`;
}
Q.useId;
function to() {
	return !1;
}
function eo() {
	return !0;
}
function no(t) {
	return () => {};
}
function zr() {
	return typeof Q.useSyncExternalStore == 'function'
		? Q.useSyncExternalStore(no, to, eo)
		: g.useContext(Yi);
}
function Gr(t, e, n) {
	let [r, s] = g.useState(t || e),
		o = g.useRef(t !== void 0),
		i = t !== void 0;
	g.useEffect(() => {
		let c = o.current;
		c !== i &&
			console.warn(
				`WARN: A component changed from ${c ? 'controlled' : 'uncontrolled'} to ${
					i ? 'controlled' : 'uncontrolled'
				}.`
			),
			(o.current = i);
	}, [i]);
	let a = i ? t : r,
		l = g.useCallback(
			(c, ...u) => {
				let f = (d, ...h) => {
					n && (Object.is(a, d) || n(d, ...h)), i || (a = d);
				};
				typeof c == 'function'
					? (console.warn(
							'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320'
					  ),
					  s((h, ...m) => {
							let y = c(i ? a : h, ...m);
							return f(y, ...u), i ? h : y;
					  }))
					: (i || s(c), f(c, ...u));
			},
			[i, a, n]
		);
	return [a, l];
}
var at = function () {
	return (
		(at =
			Object.assign ||
			function (e) {
				for (var n, r = 1, s = arguments.length; r < s; r++) {
					n = arguments[r];
					for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
				}
				return e;
			}),
		at.apply(this, arguments)
	);
};
function Kr(t, e) {
	var n = {};
	for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
	if (t != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
			e.indexOf(r[s]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(t, r[s]) &&
				(n[r[s]] = t[r[s]]);
	return n;
}
function ro(t, e, n) {
	if (n || arguments.length === 2)
		for (var r = 0, s = e.length, o; r < s; r++)
			(o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), (o[r] = e[r]));
	return t.concat(o || Array.prototype.slice.call(e));
}
const so = Q.createContext(null);
function io(t) {
	let e = zr(),
		{ portalContainer: n = e ? null : document.body, isExiting: r } = t,
		[s, o] = g.useState(!1),
		i = g.useMemo(() => ({ contain: s, setContain: o }), [s, o]);
	if (!n) return null;
	let a = t.children;
	return (
		t.disableFocusManagement ||
			(a = Q.createElement(Oi, { restoreFocus: !0, contain: s && !r }, a)),
		(a = Q.createElement(so.Provider, { value: i }, Q.createElement(Bi, null, a))),
		Xi.createPortal(a, n)
	);
}
var kn = Fi({
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
			...Ii,
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
				menu: ['hidden', 'h-[calc(100dvh_-_var(--navbar-height)_-_1px)]', 'data-[open=true]:flex'],
			},
		},
	},
	defaultVariants: { maxWidth: 'lg', position: 'sticky', isBlurred: !0 },
});
function Xr(t) {
	var e,
		n,
		r = '';
	if (typeof t == 'string' || typeof t == 'number') r += t;
	else if (typeof t == 'object')
		if (Array.isArray(t))
			for (e = 0; e < t.length; e++) t[e] && (n = Xr(t[e])) && (r && (r += ' '), (r += n));
		else for (e in t) t[e] && (r && (r += ' '), (r += e));
	return r;
}
function ut(...t) {
	for (var e = 0, n, r, s = ''; e < t.length; )
		(n = t[e++]) && (r = Xr(n)) && (s && (s += ' '), (s += r));
	return s;
}
function oo(t = {}) {
	const {
			strict: e = !0,
			errorMessage:
				n = 'useContext: `context` is undefined. Seems you forgot to wrap component within the Provider',
			name: r,
		} = t,
		s = g.createContext(void 0);
	s.displayName = r;
	function o() {
		var i;
		const a = g.useContext(s);
		if (!a && e) {
			const l = new Error(n);
			throw (
				((l.name = 'ContextError'), (i = Error.captureStackTrace) == null || i.call(Error, l, o), l)
			);
		}
		return a;
	}
	return [s.Provider, o, s];
}
var ao = Object.create,
	Yr = Object.defineProperty,
	lo = Object.getOwnPropertyDescriptor,
	qr = Object.getOwnPropertyNames,
	co = Object.getPrototypeOf,
	uo = Object.prototype.hasOwnProperty,
	Zr = (t, e) =>
		function () {
			return e || (0, t[qr(t)[0]])((e = { exports: {} }).exports, e), e.exports;
		},
	fo = (t, e, n, r) => {
		if ((e && typeof e == 'object') || typeof e == 'function')
			for (let s of qr(e))
				!uo.call(t, s) &&
					s !== n &&
					Yr(t, s, { get: () => e[s], enumerable: !(r = lo(e, s)) || r.enumerable });
		return t;
	},
	ho = (t, e, n) => (
		(n = t != null ? ao(co(t)) : {}),
		fo(e || !t || !t.__esModule ? Yr(n, 'default', { value: t, enumerable: !0 }) : n, t)
	),
	po = Zr({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js'(t) {
			var e = Symbol.for('react.element'),
				n = Symbol.for('react.portal'),
				r = Symbol.for('react.fragment'),
				s = Symbol.for('react.strict_mode'),
				o = Symbol.for('react.profiler'),
				i = Symbol.for('react.provider'),
				a = Symbol.for('react.context'),
				l = Symbol.for('react.forward_ref'),
				c = Symbol.for('react.suspense'),
				u = Symbol.for('react.memo'),
				f = Symbol.for('react.lazy'),
				d = Symbol.iterator;
			function h(p) {
				return p === null || typeof p != 'object'
					? null
					: ((p = (d && p[d]) || p['@@iterator']), typeof p == 'function' ? p : null);
			}
			var m = {
					isMounted: function () {
						return !1;
					},
					enqueueForceUpdate: function () {},
					enqueueReplaceState: function () {},
					enqueueSetState: function () {},
				},
				y = Object.assign,
				x = {};
			function w(p, P, E) {
				(this.props = p), (this.context = P), (this.refs = x), (this.updater = E || m);
			}
			(w.prototype.isReactComponent = {}),
				(w.prototype.setState = function (p, P) {
					if (typeof p != 'object' && typeof p != 'function' && p != null)
						throw Error(
							'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
						);
					this.updater.enqueueSetState(this, p, P, 'setState');
				}),
				(w.prototype.forceUpdate = function (p) {
					this.updater.enqueueForceUpdate(this, p, 'forceUpdate');
				});
			function b() {}
			b.prototype = w.prototype;
			function v(p, P, E) {
				(this.props = p), (this.context = P), (this.refs = x), (this.updater = E || m);
			}
			var S = (v.prototype = new b());
			(S.constructor = v), y(S, w.prototype), (S.isPureReactComponent = !0);
			var C = Array.isArray,
				D = Object.prototype.hasOwnProperty,
				A = { current: null },
				T = { key: !0, ref: !0, __self: !0, __source: !0 };
			function M(p, P, E) {
				var j,
					L = {},
					O = null,
					_ = null;
				if (P != null)
					for (j in (P.ref !== void 0 && (_ = P.ref), P.key !== void 0 && (O = '' + P.key), P))
						D.call(P, j) && !T.hasOwnProperty(j) && (L[j] = P[j]);
				var U = arguments.length - 2;
				if (U === 1) L.children = E;
				else if (1 < U) {
					for (var I = Array(U), Y = 0; Y < U; Y++) I[Y] = arguments[Y + 2];
					L.children = I;
				}
				if (p && p.defaultProps)
					for (j in ((U = p.defaultProps), U)) L[j] === void 0 && (L[j] = U[j]);
				return { $$typeof: e, type: p, key: O, ref: _, props: L, _owner: A.current };
			}
			function X(p, P) {
				return { $$typeof: e, type: p.type, key: P, ref: p.ref, props: p.props, _owner: p._owner };
			}
			function G(p) {
				return typeof p == 'object' && p !== null && p.$$typeof === e;
			}
			function Z(p) {
				var P = { '=': '=0', ':': '=2' };
				return (
					'$' +
					p.replace(/[=:]/g, function (E) {
						return P[E];
					})
				);
			}
			var tt = /\/+/g;
			function $(p, P) {
				return typeof p == 'object' && p !== null && p.key != null ? Z('' + p.key) : P.toString(36);
			}
			function B(p, P, E, j, L) {
				var O = typeof p;
				(O === 'undefined' || O === 'boolean') && (p = null);
				var _ = !1;
				if (p === null) _ = !0;
				else
					switch (O) {
						case 'string':
						case 'number':
							_ = !0;
							break;
						case 'object':
							switch (p.$$typeof) {
								case e:
								case n:
									_ = !0;
							}
					}
				if (_)
					return (
						(_ = p),
						(L = L(_)),
						(p = j === '' ? '.' + $(_, 0) : j),
						C(L)
							? ((E = ''),
							  p != null && (E = p.replace(tt, '$&/') + '/'),
							  B(L, P, E, '', function (Y) {
									return Y;
							  }))
							: L != null &&
							  (G(L) &&
									(L = X(
										L,
										E +
											(!L.key || (_ && _.key === L.key)
												? ''
												: ('' + L.key).replace(tt, '$&/') + '/') +
											p
									)),
							  P.push(L)),
						1
					);
				if (((_ = 0), (j = j === '' ? '.' : j + ':'), C(p)))
					for (var U = 0; U < p.length; U++) {
						O = p[U];
						var I = j + $(O, U);
						_ += B(O, P, E, I, L);
					}
				else if (((I = h(p)), typeof I == 'function'))
					for (p = I.call(p), U = 0; !(O = p.next()).done; )
						(O = O.value), (I = j + $(O, U++)), (_ += B(O, P, E, I, L));
				else if (O === 'object')
					throw (
						((P = String(p)),
						Error(
							'Objects are not valid as a React child (found: ' +
								(P === '[object Object]'
									? 'object with keys {' + Object.keys(p).join(', ') + '}'
									: P) +
								'). If you meant to render a collection of children, use an array instead.'
						))
					);
				return _;
			}
			function R(p, P, E) {
				if (p == null) return p;
				var j = [],
					L = 0;
				return (
					B(p, j, '', '', function (O) {
						return P.call(E, O, L++);
					}),
					j
				);
			}
			function et(p) {
				if (p._status === -1) {
					var P = p._result;
					(P = P()),
						P.then(
							function (E) {
								(p._status === 0 || p._status === -1) && ((p._status = 1), (p._result = E));
							},
							function (E) {
								(p._status === 0 || p._status === -1) && ((p._status = 2), (p._result = E));
							}
						),
						p._status === -1 && ((p._status = 0), (p._result = P));
				}
				if (p._status === 1) return p._result.default;
				throw p._result;
			}
			var H = { current: null },
				it = { transition: null },
				ee = { ReactCurrentDispatcher: H, ReactCurrentBatchConfig: it, ReactCurrentOwner: A };
			(t.Children = {
				map: R,
				forEach: function (p, P, E) {
					R(
						p,
						function () {
							P.apply(this, arguments);
						},
						E
					);
				},
				count: function (p) {
					var P = 0;
					return (
						R(p, function () {
							P++;
						}),
						P
					);
				},
				toArray: function (p) {
					return (
						R(p, function (P) {
							return P;
						}) || []
					);
				},
				only: function (p) {
					if (!G(p))
						throw Error('React.Children.only expected to receive a single React element child.');
					return p;
				},
			}),
				(t.Component = w),
				(t.Fragment = r),
				(t.Profiler = o),
				(t.PureComponent = v),
				(t.StrictMode = s),
				(t.Suspense = c),
				(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ee),
				(t.cloneElement = function (p, P, E) {
					if (p == null)
						throw Error(
							'React.cloneElement(...): The argument must be a React element, but you passed ' +
								p +
								'.'
						);
					var j = y({}, p.props),
						L = p.key,
						O = p.ref,
						_ = p._owner;
					if (P != null) {
						if (
							(P.ref !== void 0 && ((O = P.ref), (_ = A.current)),
							P.key !== void 0 && (L = '' + P.key),
							p.type && p.type.defaultProps)
						)
							var U = p.type.defaultProps;
						for (I in P)
							D.call(P, I) &&
								!T.hasOwnProperty(I) &&
								(j[I] = P[I] === void 0 && U !== void 0 ? U[I] : P[I]);
					}
					var I = arguments.length - 2;
					if (I === 1) j.children = E;
					else if (1 < I) {
						U = Array(I);
						for (var Y = 0; Y < I; Y++) U[Y] = arguments[Y + 2];
						j.children = U;
					}
					return { $$typeof: e, type: p.type, key: L, ref: O, props: j, _owner: _ };
				}),
				(t.createContext = function (p) {
					return (
						(p = {
							$$typeof: a,
							_currentValue: p,
							_currentValue2: p,
							_threadCount: 0,
							Provider: null,
							Consumer: null,
							_defaultValue: null,
							_globalName: null,
						}),
						(p.Provider = { $$typeof: i, _context: p }),
						(p.Consumer = p)
					);
				}),
				(t.createElement = M),
				(t.createFactory = function (p) {
					var P = M.bind(null, p);
					return (P.type = p), P;
				}),
				(t.createRef = function () {
					return { current: null };
				}),
				(t.forwardRef = function (p) {
					return { $$typeof: l, render: p };
				}),
				(t.isValidElement = G),
				(t.lazy = function (p) {
					return { $$typeof: f, _payload: { _status: -1, _result: p }, _init: et };
				}),
				(t.memo = function (p, P) {
					return { $$typeof: u, type: p, compare: P === void 0 ? null : P };
				}),
				(t.startTransition = function (p) {
					var P = it.transition;
					it.transition = {};
					try {
						p();
					} finally {
						it.transition = P;
					}
				}),
				(t.unstable_act = function () {
					throw Error('act(...) is not supported in production builds of React.');
				}),
				(t.useCallback = function (p, P) {
					return H.current.useCallback(p, P);
				}),
				(t.useContext = function (p) {
					return H.current.useContext(p);
				}),
				(t.useDebugValue = function () {}),
				(t.useDeferredValue = function (p) {
					return H.current.useDeferredValue(p);
				}),
				(t.useEffect = function (p, P) {
					return H.current.useEffect(p, P);
				}),
				(t.useId = function () {
					return H.current.useId();
				}),
				(t.useImperativeHandle = function (p, P, E) {
					return H.current.useImperativeHandle(p, P, E);
				}),
				(t.useInsertionEffect = function (p, P) {
					return H.current.useInsertionEffect(p, P);
				}),
				(t.useLayoutEffect = function (p, P) {
					return H.current.useLayoutEffect(p, P);
				}),
				(t.useMemo = function (p, P) {
					return H.current.useMemo(p, P);
				}),
				(t.useReducer = function (p, P, E) {
					return H.current.useReducer(p, P, E);
				}),
				(t.useRef = function (p) {
					return H.current.useRef(p);
				}),
				(t.useState = function (p) {
					return H.current.useState(p);
				}),
				(t.useSyncExternalStore = function (p, P, E) {
					return H.current.useSyncExternalStore(p, P, E);
				}),
				(t.useTransition = function () {
					return H.current.useTransition();
				}),
				(t.version = '18.2.0');
		},
	}),
	mo = Zr({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'(t, e) {
			e.exports = po();
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
 */ var Ln = ho(mo()),
	go = (t, e) => {
		var n;
		let r = [];
		const s =
				(n = Ln.Children.map(t, (i) =>
					(0, Ln.isValidElement)(i) && i.type === e ? (r.push(i), null) : i
				)) == null
					? void 0
					: n.filter(Boolean),
			o = r.length >= 0 ? r : void 0;
		return [s, o];
	};
const Qr = g.createContext({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: 'never' }),
	Pe = g.createContext({}),
	Se = g.createContext(null),
	we = typeof document < 'u',
	an = we ? g.useLayoutEffect : g.useEffect,
	Jr = g.createContext({ strict: !1 });
function yo(t, e, n, r) {
	const { visualElement: s } = g.useContext(Pe),
		o = g.useContext(Jr),
		i = g.useContext(Se),
		a = g.useContext(Qr).reducedMotion,
		l = g.useRef();
	(r = r || o.renderer),
		!l.current &&
			r &&
			(l.current = r(t, {
				visualState: e,
				parent: s,
				props: n,
				presenceContext: i,
				blockInitialAnimation: i ? i.initial === !1 : !1,
				reducedMotionConfig: a,
			}));
	const c = l.current;
	g.useInsertionEffect(() => {
		c && c.update(n, i);
	});
	const u = g.useRef(!!window.HandoffAppearAnimations);
	return (
		an(() => {
			c && (c.render(), u.current && c.animationState && c.animationState.animateChanges());
		}),
		g.useEffect(() => {
			c &&
				(c.updateFeatures(),
				!u.current && c.animationState && c.animationState.animateChanges(),
				(window.HandoffAppearAnimations = void 0),
				(u.current = !1));
		}),
		c
	);
}
function jt(t) {
	return typeof t == 'object' && Object.prototype.hasOwnProperty.call(t, 'current');
}
function vo(t, e, n) {
	return g.useCallback(
		(r) => {
			r && t.mount && t.mount(r),
				e && (r ? e.mount(r) : e.unmount()),
				n && (typeof n == 'function' ? n(r) : jt(n) && (n.current = r));
		},
		[e]
	);
}
function Xt(t) {
	return typeof t == 'string' || Array.isArray(t);
}
function Ce(t) {
	return typeof t == 'object' && typeof t.start == 'function';
}
const ln = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
	cn = ['initial', ...ln];
function Te(t) {
	return Ce(t.animate) || cn.some((e) => Xt(t[e]));
}
function ts(t) {
	return !!(Te(t) || t.variants);
}
function bo(t, e) {
	if (Te(t)) {
		const { initial: n, animate: r } = t;
		return { initial: n === !1 || Xt(n) ? n : void 0, animate: Xt(r) ? r : void 0 };
	}
	return t.inherit !== !1 ? e : {};
}
function xo(t) {
	const { initial: e, animate: n } = bo(t, g.useContext(Pe));
	return g.useMemo(() => ({ initial: e, animate: n }), [jn(e), jn(n)]);
}
function jn(t) {
	return Array.isArray(t) ? t.join(' ') : t;
}
const Bn = {
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
	Yt = {};
for (const t in Bn) Yt[t] = { isEnabled: (e) => Bn[t].some((n) => !!e[n]) };
function Po(t) {
	for (const e in t) Yt[e] = { ...Yt[e], ...t[e] };
}
const un = g.createContext({}),
	es = g.createContext({}),
	So = Symbol.for('motionComponentSymbol');
function wo({
	preloadedFeatures: t,
	createVisualElement: e,
	useRender: n,
	useVisualState: r,
	Component: s,
}) {
	t && Po(t);
	function o(a, l) {
		let c;
		const u = { ...g.useContext(Qr), ...a, layoutId: Co(a) },
			{ isStatic: f } = u,
			d = xo(a),
			h = r(a, f);
		if (!f && we) {
			d.visualElement = yo(s, h, u, e);
			const m = g.useContext(es),
				y = g.useContext(Jr).strict;
			d.visualElement && (c = d.visualElement.loadFeatures(u, y, t, m));
		}
		return g.createElement(
			Pe.Provider,
			{ value: d },
			c && d.visualElement ? g.createElement(c, { visualElement: d.visualElement, ...u }) : null,
			n(s, a, vo(h, d.visualElement, l), h, f, d.visualElement)
		);
	}
	const i = g.forwardRef(o);
	return (i[So] = s), i;
}
function Co({ layoutId: t }) {
	const e = g.useContext(un).id;
	return e && t !== void 0 ? e + '-' + t : t;
}
function To(t) {
	function e(r, s = {}) {
		return wo(t(r, s));
	}
	if (typeof Proxy > 'u') return e;
	const n = new Map();
	return new Proxy(e, { get: (r, s) => (n.has(s) || n.set(s, e(s)), n.get(s)) });
}
const Vo = [
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
function fn(t) {
	return typeof t != 'string' || t.includes('-') ? !1 : !!(Vo.indexOf(t) > -1 || /[A-Z]/.test(t));
}
const he = {};
function Ao(t) {
	Object.assign(he, t);
}
const Zt = [
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
	Rt = new Set(Zt);
function ns(t, { layout: e, layoutId: n }) {
	return (
		Rt.has(t) || t.startsWith('origin') || ((e || n !== void 0) && (!!he[t] || t === 'opacity'))
	);
}
const J = (t) => !!(t && t.getVelocity),
	Mo = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
	Ro = Zt.length;
function Do(t, { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 }, r, s) {
	let o = '';
	for (let i = 0; i < Ro; i++) {
		const a = Zt[i];
		if (t[a] !== void 0) {
			const l = Mo[a] || a;
			o += `${l}(${t[a]}) `;
		}
	}
	return (
		e && !t.z && (o += 'translateZ(0)'),
		(o = o.trim()),
		s ? (o = s(t, r ? '' : o)) : n && r && (o = 'none'),
		o
	);
}
const rs = (t) => (e) => typeof e == 'string' && e.startsWith(t),
	ss = rs('--'),
	Ge = rs('var(--'),
	Eo = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
	ko = (t, e) => (e && typeof t == 'number' ? e.transform(t) : t),
	vt = (t, e, n) => Math.min(Math.max(n, t), e),
	Dt = { test: (t) => typeof t == 'number', parse: parseFloat, transform: (t) => t },
	Ht = { ...Dt, transform: (t) => vt(0, 1, t) },
	ne = { ...Dt, default: 1 },
	zt = (t) => Math.round(t * 1e5) / 1e5,
	Ve = /(-)?([\d]*\.?[\d])+/g,
	is =
		/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
	Lo =
		/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Qt(t) {
	return typeof t == 'string';
}
const Jt = (t) => ({
		test: (e) => Qt(e) && e.endsWith(t) && e.split(' ').length === 1,
		parse: parseFloat,
		transform: (e) => `${e}${t}`,
	}),
	pt = Jt('deg'),
	lt = Jt('%'),
	V = Jt('px'),
	jo = Jt('vh'),
	Bo = Jt('vw'),
	On = { ...lt, parse: (t) => lt.parse(t) / 100, transform: (t) => lt.transform(t * 100) },
	Fn = { ...Dt, transform: Math.round },
	os = {
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
		rotate: pt,
		rotateX: pt,
		rotateY: pt,
		rotateZ: pt,
		scale: ne,
		scaleX: ne,
		scaleY: ne,
		scaleZ: ne,
		skew: pt,
		skewX: pt,
		skewY: pt,
		distance: V,
		translateX: V,
		translateY: V,
		translateZ: V,
		x: V,
		y: V,
		z: V,
		perspective: V,
		transformPerspective: V,
		opacity: Ht,
		originX: On,
		originY: On,
		originZ: V,
		zIndex: Fn,
		fillOpacity: Ht,
		strokeOpacity: Ht,
		numOctaves: Fn,
	};
function dn(t, e, n, r) {
	const { style: s, vars: o, transform: i, transformOrigin: a } = t;
	let l = !1,
		c = !1,
		u = !0;
	for (const f in e) {
		const d = e[f];
		if (ss(f)) {
			o[f] = d;
			continue;
		}
		const h = os[f],
			m = ko(d, h);
		if (Rt.has(f)) {
			if (((l = !0), (i[f] = m), !u)) continue;
			d !== (h.default || 0) && (u = !1);
		} else f.startsWith('origin') ? ((c = !0), (a[f] = m)) : (s[f] = m);
	}
	if (
		(e.transform ||
			(l || r ? (s.transform = Do(t.transform, n, u, r)) : s.transform && (s.transform = 'none')),
		c)
	) {
		const { originX: f = '50%', originY: d = '50%', originZ: h = 0 } = a;
		s.transformOrigin = `${f} ${d} ${h}`;
	}
}
const hn = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function as(t, e, n) {
	for (const r in e) !J(e[r]) && !ns(r, n) && (t[r] = e[r]);
}
function Oo({ transformTemplate: t }, e, n) {
	return g.useMemo(() => {
		const r = hn();
		return dn(r, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, r.vars, r.style);
	}, [e]);
}
function Fo(t, e, n) {
	const r = t.style || {},
		s = {};
	return as(s, r, t), Object.assign(s, Oo(t, e, n)), t.transformValues ? t.transformValues(s) : s;
}
function Io(t, e, n) {
	const r = {},
		s = Fo(t, e, n);
	return (
		t.drag &&
			t.dragListener !== !1 &&
			((r.draggable = !1),
			(s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = 'none'),
			(s.touchAction = t.drag === !0 ? 'none' : `pan-${t.drag === 'x' ? 'y' : 'x'}`)),
		t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
		(r.style = s),
		r
	);
}
const $o = new Set([
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
function pe(t) {
	return (
		t.startsWith('while') ||
		(t.startsWith('drag') && t !== 'draggable') ||
		t.startsWith('layout') ||
		t.startsWith('onTap') ||
		t.startsWith('onPan') ||
		$o.has(t)
	);
}
let ls = (t) => !pe(t);
function No(t) {
	t && (ls = (e) => (e.startsWith('on') ? !pe(e) : t(e)));
}
try {
	No(require('@emotion/is-prop-valid').default);
} catch {}
function _o(t, e, n) {
	const r = {};
	for (const s in t)
		(s === 'values' && typeof t.values == 'object') ||
			((ls(s) ||
				(n === !0 && pe(s)) ||
				(!e && !pe(s)) ||
				(t.draggable && s.startsWith('onDrag'))) &&
				(r[s] = t[s]));
	return r;
}
function In(t, e, n) {
	return typeof t == 'string' ? t : V.transform(e + n * t);
}
function Uo(t, e, n) {
	const r = In(e, t.x, t.width),
		s = In(n, t.y, t.height);
	return `${r} ${s}`;
}
const Wo = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
	Ho = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function zo(t, e, n = 1, r = 0, s = !0) {
	t.pathLength = 1;
	const o = s ? Wo : Ho;
	t[o.offset] = V.transform(-r);
	const i = V.transform(e),
		a = V.transform(n);
	t[o.array] = `${i} ${a}`;
}
function pn(
	t,
	{
		attrX: e,
		attrY: n,
		attrScale: r,
		originX: s,
		originY: o,
		pathLength: i,
		pathSpacing: a = 1,
		pathOffset: l = 0,
		...c
	},
	u,
	f,
	d
) {
	if ((dn(t, c, u, d), f)) {
		t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
		return;
	}
	(t.attrs = t.style), (t.style = {});
	const { attrs: h, style: m, dimensions: y } = t;
	h.transform && (y && (m.transform = h.transform), delete h.transform),
		y &&
			(s !== void 0 || o !== void 0 || m.transform) &&
			(m.transformOrigin = Uo(y, s !== void 0 ? s : 0.5, o !== void 0 ? o : 0.5)),
		e !== void 0 && (h.x = e),
		n !== void 0 && (h.y = n),
		r !== void 0 && (h.scale = r),
		i !== void 0 && zo(h, i, a, l, !1);
}
const cs = () => ({ ...hn(), attrs: {} }),
	mn = (t) => typeof t == 'string' && t.toLowerCase() === 'svg';
function Go(t, e, n, r) {
	const s = g.useMemo(() => {
		const o = cs();
		return (
			pn(o, e, { enableHardwareAcceleration: !1 }, mn(r), t.transformTemplate),
			{ ...o.attrs, style: { ...o.style } }
		);
	}, [e]);
	if (t.style) {
		const o = {};
		as(o, t.style, t), (s.style = { ...o, ...s.style });
	}
	return s;
}
function Ko(t = !1) {
	return (n, r, s, { latestValues: o }, i) => {
		const l = (fn(n) ? Go : Io)(r, o, i, n),
			u = { ..._o(r, typeof n == 'string', t), ...l, ref: s },
			{ children: f } = r,
			d = g.useMemo(() => (J(f) ? f.get() : f), [f]);
		return g.createElement(n, { ...u, children: d });
	};
}
const gn = (t) => t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function us(t, { style: e, vars: n }, r, s) {
	Object.assign(t.style, e, s && s.getProjectionStyles(r));
	for (const o in n) t.style.setProperty(o, n[o]);
}
const fs = new Set([
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
function ds(t, e, n, r) {
	us(t, e, void 0, r);
	for (const s in e.attrs) t.setAttribute(fs.has(s) ? s : gn(s), e.attrs[s]);
}
function yn(t, e) {
	const { style: n } = t,
		r = {};
	for (const s in n) (J(n[s]) || (e.style && J(e.style[s])) || ns(s, t)) && (r[s] = n[s]);
	return r;
}
function hs(t, e) {
	const n = yn(t, e);
	for (const r in t)
		if (J(t[r]) || J(e[r])) {
			const s = Zt.indexOf(r) !== -1 ? 'attr' + r.charAt(0).toUpperCase() + r.substring(1) : r;
			n[s] = t[r];
		}
	return n;
}
function vn(t, e, n, r = {}, s = {}) {
	return (
		typeof e == 'function' && (e = e(n !== void 0 ? n : t.custom, r, s)),
		typeof e == 'string' && (e = t.variants && t.variants[e]),
		typeof e == 'function' && (e = e(n !== void 0 ? n : t.custom, r, s)),
		e
	);
}
function ps(t) {
	const e = g.useRef(null);
	return e.current === null && (e.current = t()), e.current;
}
const me = (t) => Array.isArray(t),
	Xo = (t) => !!(t && typeof t == 'object' && t.mix && t.toValue),
	Yo = (t) => (me(t) ? t[t.length - 1] || 0 : t);
function le(t) {
	const e = J(t) ? t.get() : t;
	return Xo(e) ? e.toValue() : e;
}
function qo({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, r, s, o) {
	const i = { latestValues: Zo(r, s, o, t), renderState: e() };
	return n && (i.mount = (a) => n(r, a, i)), i;
}
const ms = (t) => (e, n) => {
	const r = g.useContext(Pe),
		s = g.useContext(Se),
		o = () => qo(t, e, r, s);
	return n ? o() : ps(o);
};
function Zo(t, e, n, r) {
	const s = {},
		o = r(t, {});
	for (const d in o) s[d] = le(o[d]);
	let { initial: i, animate: a } = t;
	const l = Te(t),
		c = ts(t);
	e &&
		c &&
		!l &&
		t.inherit !== !1 &&
		(i === void 0 && (i = e.initial), a === void 0 && (a = e.animate));
	let u = n ? n.initial === !1 : !1;
	u = u || i === !1;
	const f = u ? a : i;
	return (
		f &&
			typeof f != 'boolean' &&
			!Ce(f) &&
			(Array.isArray(f) ? f : [f]).forEach((h) => {
				const m = vn(t, h);
				if (!m) return;
				const { transitionEnd: y, transition: x, ...w } = m;
				for (const b in w) {
					let v = w[b];
					if (Array.isArray(v)) {
						const S = u ? v.length - 1 : 0;
						v = v[S];
					}
					v !== null && (s[b] = v);
				}
				for (const b in y) s[b] = y[b];
			}),
		s
	);
}
const W = (t) => t;
class $n {
	constructor() {
		(this.order = []), (this.scheduled = new Set());
	}
	add(e) {
		if (!this.scheduled.has(e)) return this.scheduled.add(e), this.order.push(e), !0;
	}
	remove(e) {
		const n = this.order.indexOf(e);
		n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(e));
	}
	clear() {
		(this.order.length = 0), this.scheduled.clear();
	}
}
function Qo(t) {
	let e = new $n(),
		n = new $n(),
		r = 0,
		s = !1,
		o = !1;
	const i = new WeakSet(),
		a = {
			schedule: (l, c = !1, u = !1) => {
				const f = u && s,
					d = f ? e : n;
				return c && i.add(l), d.add(l) && f && s && (r = e.order.length), l;
			},
			cancel: (l) => {
				n.remove(l), i.delete(l);
			},
			process: (l) => {
				if (s) {
					o = !0;
					return;
				}
				if (((s = !0), ([e, n] = [n, e]), n.clear(), (r = e.order.length), r))
					for (let c = 0; c < r; c++) {
						const u = e.order[c];
						u(l), i.has(u) && (a.schedule(u), t());
					}
				(s = !1), o && ((o = !1), a.process(l));
			},
		};
	return a;
}
const re = ['prepare', 'read', 'update', 'preRender', 'render', 'postRender'],
	Jo = 40;
function ta(t, e) {
	let n = !1,
		r = !0;
	const s = { delta: 0, timestamp: 0, isProcessing: !1 },
		o = re.reduce((f, d) => ((f[d] = Qo(() => (n = !0))), f), {}),
		i = (f) => o[f].process(s),
		a = () => {
			const f = performance.now();
			(n = !1),
				(s.delta = r ? 1e3 / 60 : Math.max(Math.min(f - s.timestamp, Jo), 1)),
				(s.timestamp = f),
				(s.isProcessing = !0),
				re.forEach(i),
				(s.isProcessing = !1),
				n && e && ((r = !1), t(a));
		},
		l = () => {
			(n = !0), (r = !0), s.isProcessing || t(a);
		};
	return {
		schedule: re.reduce((f, d) => {
			const h = o[d];
			return (f[d] = (m, y = !1, x = !1) => (n || l(), h.schedule(m, y, x))), f;
		}, {}),
		cancel: (f) => re.forEach((d) => o[d].cancel(f)),
		state: s,
		steps: o,
	};
}
const {
		schedule: F,
		cancel: ht,
		state: K,
		steps: Ee,
	} = ta(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : W, !0),
	ea = {
		useVisualState: ms({
			scrapeMotionValuesFromProps: hs,
			createRenderState: cs,
			onMount: (t, e, { renderState: n, latestValues: r }) => {
				F.read(() => {
					try {
						n.dimensions = typeof e.getBBox == 'function' ? e.getBBox() : e.getBoundingClientRect();
					} catch {
						n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
					}
				}),
					F.render(() => {
						pn(n, r, { enableHardwareAcceleration: !1 }, mn(e.tagName), t.transformTemplate),
							ds(e, n);
					});
			},
		}),
	},
	na = { useVisualState: ms({ scrapeMotionValuesFromProps: yn, createRenderState: hn }) };
function ra(t, { forwardMotionProps: e = !1 }, n, r) {
	return {
		...(fn(t) ? ea : na),
		preloadedFeatures: n,
		useRender: Ko(e),
		createVisualElement: r,
		Component: t,
	};
}
function ct(t, e, n, r = { passive: !0 }) {
	return t.addEventListener(e, n, r), () => t.removeEventListener(e, n);
}
const gs = (t) =>
	t.pointerType === 'mouse' ? typeof t.button != 'number' || t.button <= 0 : t.isPrimary !== !1;
function Ae(t, e = 'page') {
	return { point: { x: t[e + 'X'], y: t[e + 'Y'] } };
}
const sa = (t) => (e) => gs(e) && t(e, Ae(e));
function ft(t, e, n, r) {
	return ct(t, e, sa(n), r);
}
const ia = (t, e) => (n) => e(t(n)),
	gt = (...t) => t.reduce(ia);
function ys(t) {
	let e = null;
	return () => {
		const n = () => {
			e = null;
		};
		return e === null ? ((e = t), n) : !1;
	};
}
const Nn = ys('dragHorizontal'),
	_n = ys('dragVertical');
function vs(t) {
	let e = !1;
	if (t === 'y') e = _n();
	else if (t === 'x') e = Nn();
	else {
		const n = Nn(),
			r = _n();
		n && r
			? (e = () => {
					n(), r();
			  })
			: (n && n(), r && r());
	}
	return e;
}
function bs() {
	const t = vs(!0);
	return t ? (t(), !1) : !0;
}
class xt {
	constructor(e) {
		(this.isMounted = !1), (this.node = e);
	}
	update() {}
}
function Un(t, e) {
	const n = 'pointer' + (e ? 'enter' : 'leave'),
		r = 'onHover' + (e ? 'Start' : 'End'),
		s = (o, i) => {
			if (o.type === 'touch' || bs()) return;
			const a = t.getProps();
			t.animationState && a.whileHover && t.animationState.setActive('whileHover', e),
				a[r] && F.update(() => a[r](o, i));
		};
	return ft(t.current, n, s, { passive: !t.getProps()[r] });
}
class oa extends xt {
	mount() {
		this.unmount = gt(Un(this.node, !0), Un(this.node, !1));
	}
	unmount() {}
}
class aa extends xt {
	constructor() {
		super(...arguments), (this.isActive = !1);
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(':focus-visible');
		} catch {
			e = !0;
		}
		!e ||
			!this.node.animationState ||
			(this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
	}
	mount() {
		this.unmount = gt(
			ct(this.node.current, 'focus', () => this.onFocus()),
			ct(this.node.current, 'blur', () => this.onBlur())
		);
	}
	unmount() {}
}
const xs = (t, e) => (e ? (t === e ? !0 : xs(t, e.parentElement)) : !1);
function ke(t, e) {
	if (!e) return;
	const n = new PointerEvent('pointer' + t);
	e(n, Ae(n));
}
class la extends xt {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = W),
			(this.removeEndListeners = W),
			(this.removeAccessibleListeners = W),
			(this.startPointerPress = (e, n) => {
				if ((this.removeEndListeners(), this.isPressing)) return;
				const r = this.node.getProps(),
					o = ft(
						window,
						'pointerup',
						(a, l) => {
							if (!this.checkPressEnd()) return;
							const { onTap: c, onTapCancel: u } = this.node.getProps();
							F.update(() => {
								xs(this.node.current, a.target) ? c && c(a, l) : u && u(a, l);
							});
						},
						{ passive: !(r.onTap || r.onPointerUp) }
					),
					i = ft(window, 'pointercancel', (a, l) => this.cancelPress(a, l), {
						passive: !(r.onTapCancel || r.onPointerCancel),
					});
				(this.removeEndListeners = gt(o, i)), this.startPress(e, n);
			}),
			(this.startAccessiblePress = () => {
				const e = (o) => {
						if (o.key !== 'Enter' || this.isPressing) return;
						const i = (a) => {
							a.key !== 'Enter' ||
								!this.checkPressEnd() ||
								ke('up', (l, c) => {
									const { onTap: u } = this.node.getProps();
									u && F.update(() => u(l, c));
								});
						};
						this.removeEndListeners(),
							(this.removeEndListeners = ct(this.node.current, 'keyup', i)),
							ke('down', (a, l) => {
								this.startPress(a, l);
							});
					},
					n = ct(this.node.current, 'keydown', e),
					r = () => {
						this.isPressing && ke('cancel', (o, i) => this.cancelPress(o, i));
					},
					s = ct(this.node.current, 'blur', r);
				this.removeAccessibleListeners = gt(n, s);
			});
	}
	startPress(e, n) {
		this.isPressing = !0;
		const { onTapStart: r, whileTap: s } = this.node.getProps();
		s && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
			r && F.update(() => r(e, n));
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap &&
				this.node.animationState &&
				this.node.animationState.setActive('whileTap', !1),
			!bs()
		);
	}
	cancelPress(e, n) {
		if (!this.checkPressEnd()) return;
		const { onTapCancel: r } = this.node.getProps();
		r && F.update(() => r(e, n));
	}
	mount() {
		const e = this.node.getProps(),
			n = ft(this.node.current, 'pointerdown', this.startPointerPress, {
				passive: !(e.onTapStart || e.onPointerStart),
			}),
			r = ct(this.node.current, 'focus', this.startAccessiblePress);
		this.removeStartListeners = gt(n, r);
	}
	unmount() {
		this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
	}
}
const Ke = new WeakMap(),
	Le = new WeakMap(),
	ca = (t) => {
		const e = Ke.get(t.target);
		e && e(t);
	},
	ua = (t) => {
		t.forEach(ca);
	};
function fa({ root: t, ...e }) {
	const n = t || document;
	Le.has(n) || Le.set(n, {});
	const r = Le.get(n),
		s = JSON.stringify(e);
	return r[s] || (r[s] = new IntersectionObserver(ua, { root: t, ...e })), r[s];
}
function da(t, e, n) {
	const r = fa(e);
	return (
		Ke.set(t, n),
		r.observe(t),
		() => {
			Ke.delete(t), r.unobserve(t);
		}
	);
}
const ha = { some: 0, all: 1 };
class pa extends xt {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
	}
	startObserver() {
		this.unmount();
		const { viewport: e = {} } = this.node.getProps(),
			{ root: n, margin: r, amount: s = 'some', once: o } = e,
			i = {
				root: n ? n.current : void 0,
				rootMargin: r,
				threshold: typeof s == 'number' ? s : ha[s],
			},
			a = (l) => {
				const { isIntersecting: c } = l;
				if (this.isInView === c || ((this.isInView = c), o && !c && this.hasEnteredView)) return;
				c && (this.hasEnteredView = !0),
					this.node.animationState && this.node.animationState.setActive('whileInView', c);
				const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(),
					d = c ? u : f;
				d && d(l);
			};
		return da(this.node.current, i, a);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > 'u') return;
		const { props: e, prevProps: n } = this.node;
		['amount', 'margin', 'root'].some(ma(e, n)) && this.startObserver();
	}
	unmount() {}
}
function ma({ viewport: t = {} }, { viewport: e = {} } = {}) {
	return (n) => t[n] !== e[n];
}
const ga = {
	inView: { Feature: pa },
	tap: { Feature: la },
	focus: { Feature: aa },
	hover: { Feature: oa },
};
function Ps(t, e) {
	if (!Array.isArray(e)) return !1;
	const n = e.length;
	if (n !== t.length) return !1;
	for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
	return !0;
}
function ya(t) {
	const e = {};
	return t.values.forEach((n, r) => (e[r] = n.get())), e;
}
function va(t) {
	const e = {};
	return t.values.forEach((n, r) => (e[r] = n.getVelocity())), e;
}
function Me(t, e, n) {
	const r = t.getProps();
	return vn(r, e, n !== void 0 ? n : r.custom, ya(t), va(t));
}
const ba = 'framerAppearId',
	xa = 'data-' + gn(ba);
let Pa = W,
	bn = W;
const yt = (t) => t * 1e3,
	dt = (t) => t / 1e3,
	Sa = { current: !1 },
	Ss = (t) => Array.isArray(t) && typeof t[0] == 'number';
function ws(t) {
	return !!(!t || (typeof t == 'string' && Cs[t]) || Ss(t) || (Array.isArray(t) && t.every(ws)));
}
const Wt = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
	Cs = {
		linear: 'linear',
		ease: 'ease',
		easeIn: 'ease-in',
		easeOut: 'ease-out',
		easeInOut: 'ease-in-out',
		circIn: Wt([0, 0.65, 0.55, 1]),
		circOut: Wt([0.55, 0, 1, 0.45]),
		backIn: Wt([0.31, 0.01, 0.66, -0.59]),
		backOut: Wt([0.33, 1.53, 0.69, 0.99]),
	};
function Ts(t) {
	if (t) return Ss(t) ? Wt(t) : Array.isArray(t) ? t.map(Ts) : Cs[t];
}
function wa(
	t,
	e,
	n,
	{ delay: r = 0, duration: s, repeat: o = 0, repeatType: i = 'loop', ease: a, times: l } = {}
) {
	const c = { [e]: n };
	l && (c.offset = l);
	const u = Ts(a);
	return (
		Array.isArray(u) && (c.easing = u),
		t.animate(c, {
			delay: r,
			duration: s,
			easing: Array.isArray(u) ? 'linear' : u,
			fill: 'both',
			iterations: o + 1,
			direction: i === 'reverse' ? 'alternate' : 'normal',
		})
	);
}
function Ca(t, { repeat: e, repeatType: n = 'loop' }) {
	const r = e && n !== 'loop' && e % 2 === 1 ? 0 : t.length - 1;
	return t[r];
}
const Vs = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
	Ta = 1e-7,
	Va = 12;
function Aa(t, e, n, r, s) {
	let o,
		i,
		a = 0;
	do (i = e + (n - e) / 2), (o = Vs(i, r, s) - t), o > 0 ? (n = i) : (e = i);
	while (Math.abs(o) > Ta && ++a < Va);
	return i;
}
function te(t, e, n, r) {
	if (t === e && n === r) return W;
	const s = (o) => Aa(o, 0, 1, t, n);
	return (o) => (o === 0 || o === 1 ? o : Vs(s(o), e, r));
}
const Ma = te(0.42, 0, 1, 1),
	Ra = te(0, 0, 0.58, 1),
	As = te(0.42, 0, 0.58, 1),
	Da = (t) => Array.isArray(t) && typeof t[0] != 'number',
	Ms = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
	Rs = (t) => (e) => 1 - t(1 - e),
	Ds = (t) => 1 - Math.sin(Math.acos(t)),
	xn = Rs(Ds),
	Ea = Ms(xn),
	Es = te(0.33, 1.53, 0.69, 0.99),
	Pn = Rs(Es),
	ka = Ms(Pn),
	La = (t) => ((t *= 2) < 1 ? 0.5 * Pn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
	ja = {
		linear: W,
		easeIn: Ma,
		easeInOut: As,
		easeOut: Ra,
		circIn: Ds,
		circInOut: Ea,
		circOut: xn,
		backIn: Pn,
		backInOut: ka,
		backOut: Es,
		anticipate: La,
	},
	Wn = (t) => {
		if (Array.isArray(t)) {
			bn(t.length === 4);
			const [e, n, r, s] = t;
			return te(e, n, r, s);
		} else if (typeof t == 'string') return ja[t];
		return t;
	},
	Sn = (t, e) => (n) =>
		!!(
			(Qt(n) && Lo.test(n) && n.startsWith(t)) ||
			(e && Object.prototype.hasOwnProperty.call(n, e))
		),
	ks = (t, e, n) => (r) => {
		if (!Qt(r)) return r;
		const [s, o, i, a] = r.match(Ve);
		return {
			[t]: parseFloat(s),
			[e]: parseFloat(o),
			[n]: parseFloat(i),
			alpha: a !== void 0 ? parseFloat(a) : 1,
		};
	},
	Ba = (t) => vt(0, 255, t),
	je = { ...Dt, transform: (t) => Math.round(Ba(t)) },
	Tt = {
		test: Sn('rgb', 'red'),
		parse: ks('red', 'green', 'blue'),
		transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
			'rgba(' +
			je.transform(t) +
			', ' +
			je.transform(e) +
			', ' +
			je.transform(n) +
			', ' +
			zt(Ht.transform(r)) +
			')',
	};
function Oa(t) {
	let e = '',
		n = '',
		r = '',
		s = '';
	return (
		t.length > 5
			? ((e = t.substring(1, 3)),
			  (n = t.substring(3, 5)),
			  (r = t.substring(5, 7)),
			  (s = t.substring(7, 9)))
			: ((e = t.substring(1, 2)),
			  (n = t.substring(2, 3)),
			  (r = t.substring(3, 4)),
			  (s = t.substring(4, 5)),
			  (e += e),
			  (n += n),
			  (r += r),
			  (s += s)),
		{
			red: parseInt(e, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: s ? parseInt(s, 16) / 255 : 1,
		}
	);
}
const Xe = { test: Sn('#'), parse: Oa, transform: Tt.transform },
	Bt = {
		test: Sn('hsl', 'hue'),
		parse: ks('hue', 'saturation', 'lightness'),
		transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
			'hsla(' +
			Math.round(t) +
			', ' +
			lt.transform(zt(e)) +
			', ' +
			lt.transform(zt(n)) +
			', ' +
			zt(Ht.transform(r)) +
			')',
	},
	q = {
		test: (t) => Tt.test(t) || Xe.test(t) || Bt.test(t),
		parse: (t) => (Tt.test(t) ? Tt.parse(t) : Bt.test(t) ? Bt.parse(t) : Xe.parse(t)),
		transform: (t) => (Qt(t) ? t : t.hasOwnProperty('red') ? Tt.transform(t) : Bt.transform(t)),
	},
	N = (t, e, n) => -n * t + n * e + t;
function Be(t, e, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
	);
}
function Fa({ hue: t, saturation: e, lightness: n, alpha: r }) {
	(t /= 360), (e /= 100), (n /= 100);
	let s = 0,
		o = 0,
		i = 0;
	if (!e) s = o = i = n;
	else {
		const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
			l = 2 * n - a;
		(s = Be(l, a, t + 1 / 3)), (o = Be(l, a, t)), (i = Be(l, a, t - 1 / 3));
	}
	return {
		red: Math.round(s * 255),
		green: Math.round(o * 255),
		blue: Math.round(i * 255),
		alpha: r,
	};
}
const Oe = (t, e, n) => {
		const r = t * t;
		return Math.sqrt(Math.max(0, n * (e * e - r) + r));
	},
	Ia = [Xe, Tt, Bt],
	$a = (t) => Ia.find((e) => e.test(t));
function Hn(t) {
	const e = $a(t);
	let n = e.parse(t);
	return e === Bt && (n = Fa(n)), n;
}
const Ls = (t, e) => {
	const n = Hn(t),
		r = Hn(e),
		s = { ...n };
	return (o) => (
		(s.red = Oe(n.red, r.red, o)),
		(s.green = Oe(n.green, r.green, o)),
		(s.blue = Oe(n.blue, r.blue, o)),
		(s.alpha = N(n.alpha, r.alpha, o)),
		Tt.transform(s)
	);
};
function Na(t) {
	var e, n;
	return (
		isNaN(t) &&
		Qt(t) &&
		(((e = t.match(Ve)) === null || e === void 0 ? void 0 : e.length) || 0) +
			(((n = t.match(is)) === null || n === void 0 ? void 0 : n.length) || 0) >
			0
	);
}
const js = { regex: Eo, countKey: 'Vars', token: '${v}', parse: W },
	Bs = { regex: is, countKey: 'Colors', token: '${c}', parse: q.parse },
	Os = { regex: Ve, countKey: 'Numbers', token: '${n}', parse: Dt.parse };
function Fe(t, { regex: e, countKey: n, token: r, parse: s }) {
	const o = t.tokenised.match(e);
	o &&
		((t['num' + n] = o.length),
		(t.tokenised = t.tokenised.replace(e, r)),
		t.values.push(...o.map(s)));
}
function ge(t) {
	const e = t.toString(),
		n = { value: e, tokenised: e, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
	return n.value.includes('var(--') && Fe(n, js), Fe(n, Bs), Fe(n, Os), n;
}
function Fs(t) {
	return ge(t).values;
}
function Is(t) {
	const { values: e, numColors: n, numVars: r, tokenised: s } = ge(t),
		o = e.length;
	return (i) => {
		let a = s;
		for (let l = 0; l < o; l++)
			l < r
				? (a = a.replace(js.token, i[l]))
				: l < r + n
				? (a = a.replace(Bs.token, q.transform(i[l])))
				: (a = a.replace(Os.token, zt(i[l])));
		return a;
	};
}
const _a = (t) => (typeof t == 'number' ? 0 : t);
function Ua(t) {
	const e = Fs(t);
	return Is(t)(e.map(_a));
}
const bt = { test: Na, parse: Fs, createTransformer: Is, getAnimatableNone: Ua },
	$s = (t, e) => (n) => `${n > 0 ? e : t}`;
function Ns(t, e) {
	return typeof t == 'number'
		? (n) => N(t, e, n)
		: q.test(t)
		? Ls(t, e)
		: t.startsWith('var(')
		? $s(t, e)
		: Us(t, e);
}
const _s = (t, e) => {
		const n = [...t],
			r = n.length,
			s = t.map((o, i) => Ns(o, e[i]));
		return (o) => {
			for (let i = 0; i < r; i++) n[i] = s[i](o);
			return n;
		};
	},
	Wa = (t, e) => {
		const n = { ...t, ...e },
			r = {};
		for (const s in n) t[s] !== void 0 && e[s] !== void 0 && (r[s] = Ns(t[s], e[s]));
		return (s) => {
			for (const o in r) n[o] = r[o](s);
			return n;
		};
	},
	Us = (t, e) => {
		const n = bt.createTransformer(e),
			r = ge(t),
			s = ge(e);
		return r.numVars === s.numVars && r.numColors === s.numColors && r.numNumbers >= s.numNumbers
			? gt(_s(r.values, s.values), n)
			: $s(t, e);
	},
	qt = (t, e, n) => {
		const r = e - t;
		return r === 0 ? 1 : (n - t) / r;
	},
	zn = (t, e) => (n) => N(t, e, n);
function Ha(t) {
	return typeof t == 'number'
		? zn
		: typeof t == 'string'
		? q.test(t)
			? Ls
			: Us
		: Array.isArray(t)
		? _s
		: typeof t == 'object'
		? Wa
		: zn;
}
function za(t, e, n) {
	const r = [],
		s = n || Ha(t[0]),
		o = t.length - 1;
	for (let i = 0; i < o; i++) {
		let a = s(t[i], t[i + 1]);
		if (e) {
			const l = Array.isArray(e) ? e[i] || W : e;
			a = gt(l, a);
		}
		r.push(a);
	}
	return r;
}
function Ws(t, e, { clamp: n = !0, ease: r, mixer: s } = {}) {
	const o = t.length;
	if ((bn(o === e.length), o === 1)) return () => e[0];
	t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
	const i = za(e, r, s),
		a = i.length,
		l = (c) => {
			let u = 0;
			if (a > 1) for (; u < t.length - 2 && !(c < t[u + 1]); u++);
			const f = qt(t[u], t[u + 1], c);
			return i[u](f);
		};
	return n ? (c) => l(vt(t[0], t[o - 1], c)) : l;
}
function Ga(t, e) {
	const n = t[t.length - 1];
	for (let r = 1; r <= e; r++) {
		const s = qt(0, e, r);
		t.push(N(n, 1, s));
	}
}
function Ka(t) {
	const e = [0];
	return Ga(e, t.length - 1), e;
}
function Xa(t, e) {
	return t.map((n) => n * e);
}
function Ya(t, e) {
	return t.map(() => e || As).splice(0, t.length - 1);
}
function ye({ duration: t = 300, keyframes: e, times: n, ease: r = 'easeInOut' }) {
	const s = Da(r) ? r.map(Wn) : Wn(r),
		o = { done: !1, value: e[0] },
		i = Xa(n && n.length === e.length ? n : Ka(e), t),
		a = Ws(i, e, { ease: Array.isArray(s) ? s : Ya(e, s) });
	return { calculatedDuration: t, next: (l) => ((o.value = a(l)), (o.done = l >= t), o) };
}
function Hs(t, e) {
	return e ? t * (1e3 / e) : 0;
}
const qa = 5;
function zs(t, e, n) {
	const r = Math.max(e - qa, 0);
	return Hs(n - t(r), e - r);
}
const Ie = 0.001,
	Za = 0.01,
	Gn = 10,
	Qa = 0.05,
	Ja = 1;
function tl({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: r = 1 }) {
	let s, o;
	Pa(t <= yt(Gn));
	let i = 1 - e;
	(i = vt(Qa, Ja, i)),
		(t = vt(Za, Gn, dt(t))),
		i < 1
			? ((s = (c) => {
					const u = c * i,
						f = u * t,
						d = u - n,
						h = Ye(c, i),
						m = Math.exp(-f);
					return Ie - (d / h) * m;
			  }),
			  (o = (c) => {
					const f = c * i * t,
						d = f * n + n,
						h = Math.pow(i, 2) * Math.pow(c, 2) * t,
						m = Math.exp(-f),
						y = Ye(Math.pow(c, 2), i);
					return ((-s(c) + Ie > 0 ? -1 : 1) * ((d - h) * m)) / y;
			  }))
			: ((s = (c) => {
					const u = Math.exp(-c * t),
						f = (c - n) * t + 1;
					return -Ie + u * f;
			  }),
			  (o = (c) => {
					const u = Math.exp(-c * t),
						f = (n - c) * (t * t);
					return u * f;
			  }));
	const a = 5 / t,
		l = nl(s, o, a);
	if (((t = yt(t)), isNaN(l))) return { stiffness: 100, damping: 10, duration: t };
	{
		const c = Math.pow(l, 2) * r;
		return { stiffness: c, damping: i * 2 * Math.sqrt(r * c), duration: t };
	}
}
const el = 12;
function nl(t, e, n) {
	let r = n;
	for (let s = 1; s < el; s++) r = r - t(r) / e(r);
	return r;
}
function Ye(t, e) {
	return t * Math.sqrt(1 - e * e);
}
const rl = ['duration', 'bounce'],
	sl = ['stiffness', 'damping', 'mass'];
function Kn(t, e) {
	return e.some((n) => t[n] !== void 0);
}
function il(t) {
	let e = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...t };
	if (!Kn(t, sl) && Kn(t, rl)) {
		const n = tl(t);
		(e = { ...e, ...n, velocity: 0, mass: 1 }), (e.isResolvedFromDuration = !0);
	}
	return e;
}
function Gs({ keyframes: t, restDelta: e, restSpeed: n, ...r }) {
	const s = t[0],
		o = t[t.length - 1],
		i = { done: !1, value: s },
		{
			stiffness: a,
			damping: l,
			mass: c,
			velocity: u,
			duration: f,
			isResolvedFromDuration: d,
		} = il(r),
		h = u ? -dt(u) : 0,
		m = l / (2 * Math.sqrt(a * c)),
		y = o - s,
		x = dt(Math.sqrt(a / c)),
		w = Math.abs(y) < 5;
	n || (n = w ? 0.01 : 2), e || (e = w ? 0.005 : 0.5);
	let b;
	if (m < 1) {
		const v = Ye(x, m);
		b = (S) => {
			const C = Math.exp(-m * x * S);
			return o - C * (((h + m * x * y) / v) * Math.sin(v * S) + y * Math.cos(v * S));
		};
	} else if (m === 1) b = (v) => o - Math.exp(-x * v) * (y + (h + x * y) * v);
	else {
		const v = x * Math.sqrt(m * m - 1);
		b = (S) => {
			const C = Math.exp(-m * x * S),
				D = Math.min(v * S, 300);
			return o - (C * ((h + m * x * y) * Math.sinh(D) + v * y * Math.cosh(D))) / v;
		};
	}
	return {
		calculatedDuration: (d && f) || null,
		next: (v) => {
			const S = b(v);
			if (d) i.done = v >= f;
			else {
				let C = h;
				v !== 0 && (m < 1 ? (C = zs(b, v, S)) : (C = 0));
				const D = Math.abs(C) <= n,
					A = Math.abs(o - S) <= e;
				i.done = D && A;
			}
			return (i.value = i.done ? o : S), i;
		},
	};
}
function Xn({
	keyframes: t,
	velocity: e = 0,
	power: n = 0.8,
	timeConstant: r = 325,
	bounceDamping: s = 10,
	bounceStiffness: o = 500,
	modifyTarget: i,
	min: a,
	max: l,
	restDelta: c = 0.5,
	restSpeed: u,
}) {
	const f = t[0],
		d = { done: !1, value: f },
		h = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
		m = (T) => (a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l);
	let y = n * e;
	const x = f + y,
		w = i === void 0 ? x : i(x);
	w !== x && (y = w - f);
	const b = (T) => -y * Math.exp(-T / r),
		v = (T) => w + b(T),
		S = (T) => {
			const M = b(T),
				X = v(T);
			(d.done = Math.abs(M) <= c), (d.value = d.done ? w : X);
		};
	let C, D;
	const A = (T) => {
		h(d.value) &&
			((C = T),
			(D = Gs({
				keyframes: [d.value, m(d.value)],
				velocity: zs(v, T, d.value),
				damping: s,
				stiffness: o,
				restDelta: c,
				restSpeed: u,
			})));
	};
	return (
		A(0),
		{
			calculatedDuration: null,
			next: (T) => {
				let M = !1;
				return (
					!D && C === void 0 && ((M = !0), S(T), A(T)),
					C !== void 0 && T > C ? D.next(T - C) : (!M && S(T), d)
				);
			},
		}
	);
}
const ol = (t) => {
		const e = ({ timestamp: n }) => t(n);
		return {
			start: () => F.update(e, !0),
			stop: () => ht(e),
			now: () => (K.isProcessing ? K.timestamp : performance.now()),
		};
	},
	Yn = 2e4;
function qn(t) {
	let e = 0;
	const n = 50;
	let r = t.next(e);
	for (; !r.done && e < Yn; ) (e += n), (r = t.next(e));
	return e >= Yn ? 1 / 0 : e;
}
const al = { decay: Xn, inertia: Xn, tween: ye, keyframes: ye, spring: Gs };
function ve({
	autoplay: t = !0,
	delay: e = 0,
	driver: n = ol,
	keyframes: r,
	type: s = 'keyframes',
	repeat: o = 0,
	repeatDelay: i = 0,
	repeatType: a = 'loop',
	onPlay: l,
	onStop: c,
	onComplete: u,
	onUpdate: f,
	...d
}) {
	let h = 1,
		m = !1,
		y,
		x;
	const w = () => {
		x = new Promise((p) => {
			y = p;
		});
	};
	w();
	let b;
	const v = al[s] || ye;
	let S;
	v !== ye && typeof r[0] != 'number' && ((S = Ws([0, 100], r, { clamp: !1 })), (r = [0, 100]));
	const C = v({ ...d, keyframes: r });
	let D;
	a === 'mirror' && (D = v({ ...d, keyframes: [...r].reverse(), velocity: -(d.velocity || 0) }));
	let A = 'idle',
		T = null,
		M = null,
		X = null;
	C.calculatedDuration === null && o && (C.calculatedDuration = qn(C));
	const { calculatedDuration: G } = C;
	let Z = 1 / 0,
		tt = 1 / 0;
	G !== null && ((Z = G + i), (tt = Z * (o + 1) - i));
	let $ = 0;
	const B = (p) => {
			if (M === null) return;
			h > 0 && (M = Math.min(M, p)),
				h < 0 && (M = Math.min(p - tt / h, M)),
				T !== null ? ($ = T) : ($ = Math.round(p - M) * h);
			const P = $ - e * (h >= 0 ? 1 : -1),
				E = h >= 0 ? P < 0 : P > tt;
			($ = Math.max(P, 0)), A === 'finished' && T === null && ($ = tt);
			let j = $,
				L = C;
			if (o) {
				const I = $ / Z;
				let Y = Math.floor(I),
					Pt = I % 1;
				!Pt && I >= 1 && (Pt = 1), Pt === 1 && Y--, (Y = Math.min(Y, o + 1));
				const Mn = !!(Y % 2);
				Mn && (a === 'reverse' ? ((Pt = 1 - Pt), i && (Pt -= i / Z)) : a === 'mirror' && (L = D));
				let Rn = vt(0, 1, Pt);
				$ > tt && (Rn = a === 'reverse' && Mn ? 1 : 0), (j = Rn * Z);
			}
			const O = E ? { done: !1, value: r[0] } : L.next(j);
			S && (O.value = S(O.value));
			let { done: _ } = O;
			!E && G !== null && (_ = h >= 0 ? $ >= tt : $ <= 0);
			const U = T === null && (A === 'finished' || (A === 'running' && _));
			return f && f(O.value), U && H(), O;
		},
		R = () => {
			b && b.stop(), (b = void 0);
		},
		et = () => {
			(A = 'idle'), R(), y(), w(), (M = X = null);
		},
		H = () => {
			(A = 'finished'), u && u(), R(), y();
		},
		it = () => {
			if (m) return;
			b || (b = n(B));
			const p = b.now();
			l && l(),
				T !== null ? (M = p - T) : (!M || A === 'finished') && (M = p),
				A === 'finished' && w(),
				(X = M),
				(T = null),
				(A = 'running'),
				b.start();
		};
	t && it();
	const ee = {
		then(p, P) {
			return x.then(p, P);
		},
		get time() {
			return dt($);
		},
		set time(p) {
			(p = yt(p)), ($ = p), T !== null || !b || h === 0 ? (T = p) : (M = b.now() - p / h);
		},
		get duration() {
			const p = C.calculatedDuration === null ? qn(C) : C.calculatedDuration;
			return dt(p);
		},
		get speed() {
			return h;
		},
		set speed(p) {
			p === h || !b || ((h = p), (ee.time = dt($)));
		},
		get state() {
			return A;
		},
		play: it,
		pause: () => {
			(A = 'paused'), (T = $);
		},
		stop: () => {
			(m = !0), A !== 'idle' && ((A = 'idle'), c && c(), et());
		},
		cancel: () => {
			X !== null && B(X), et();
		},
		complete: () => {
			A = 'finished';
		},
		sample: (p) => ((M = 0), B(p)),
	};
	return ee;
}
function ll(t) {
	let e;
	return () => (e === void 0 && (e = t()), e);
}
const cl = ll(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
	ul = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
	se = 10,
	fl = 2e4,
	dl = (t, e) => e.type === 'spring' || t === 'backgroundColor' || !ws(e.ease);
function hl(t, e, { onUpdate: n, onComplete: r, ...s }) {
	if (
		!(
			cl() &&
			ul.has(e) &&
			!s.repeatDelay &&
			s.repeatType !== 'mirror' &&
			s.damping !== 0 &&
			s.type !== 'inertia'
		)
	)
		return !1;
	let i = !1,
		a,
		l;
	const c = () => {
		l = new Promise((b) => {
			a = b;
		});
	};
	c();
	let { keyframes: u, duration: f = 300, ease: d, times: h } = s;
	if (dl(e, s)) {
		const b = ve({ ...s, repeat: 0, delay: 0 });
		let v = { done: !1, value: u[0] };
		const S = [];
		let C = 0;
		for (; !v.done && C < fl; ) (v = b.sample(C)), S.push(v.value), (C += se);
		(h = void 0), (u = S), (f = C - se), (d = 'linear');
	}
	const m = wa(t.owner.current, e, u, { ...s, duration: f, ease: d, times: h });
	s.syncStart &&
		(m.startTime = K.isProcessing
			? K.timestamp
			: document.timeline
			? document.timeline.currentTime
			: performance.now());
	const y = () => m.cancel(),
		x = () => {
			F.update(y), a(), c();
		};
	return (
		(m.onfinish = () => {
			t.set(Ca(u, s)), r && r(), x();
		}),
		{
			then(b, v) {
				return l.then(b, v);
			},
			attachTimeline(b) {
				return (m.timeline = b), (m.onfinish = null), W;
			},
			get time() {
				return dt(m.currentTime || 0);
			},
			set time(b) {
				m.currentTime = yt(b);
			},
			get speed() {
				return m.playbackRate;
			},
			set speed(b) {
				m.playbackRate = b;
			},
			get duration() {
				return dt(f);
			},
			play: () => {
				i || (m.play(), ht(y));
			},
			pause: () => m.pause(),
			stop: () => {
				if (((i = !0), m.playState === 'idle')) return;
				const { currentTime: b } = m;
				if (b) {
					const v = ve({ ...s, autoplay: !1 });
					t.setWithVelocity(v.sample(b - se).value, v.sample(b).value, se);
				}
				x();
			},
			complete: () => m.finish(),
			cancel: x,
		}
	);
}
function pl({ keyframes: t, delay: e, onUpdate: n, onComplete: r }) {
	const s = () => (
		n && n(t[t.length - 1]),
		r && r(),
		{
			time: 0,
			speed: 1,
			duration: 0,
			play: W,
			pause: W,
			stop: W,
			then: (o) => (o(), Promise.resolve()),
			cancel: W,
			complete: W,
		}
	);
	return e ? ve({ keyframes: [0, 1], duration: 0, delay: e, onComplete: s }) : s();
}
const ml = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
	gl = (t) => ({
		type: 'spring',
		stiffness: 550,
		damping: t === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	yl = { type: 'keyframes', duration: 0.8 },
	vl = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	bl = (t, { keyframes: e }) =>
		e.length > 2 ? yl : Rt.has(t) ? (t.startsWith('scale') ? gl(e[1]) : ml) : vl,
	qe = (t, e) =>
		t === 'zIndex'
			? !1
			: !!(
					typeof e == 'number' ||
					Array.isArray(e) ||
					(typeof e == 'string' && (bt.test(e) || e === '0') && !e.startsWith('url('))
			  ),
	xl = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function Pl(t) {
	const [e, n] = t.slice(0, -1).split('(');
	if (e === 'drop-shadow') return t;
	const [r] = n.match(Ve) || [];
	if (!r) return t;
	const s = n.replace(r, '');
	let o = xl.has(e) ? 1 : 0;
	return r !== n && (o *= 100), e + '(' + o + s + ')';
}
const Sl = /([a-z-]*)\(.*?\)/g,
	Ze = {
		...bt,
		getAnimatableNone: (t) => {
			const e = t.match(Sl);
			return e ? e.map(Pl).join(' ') : t;
		},
	},
	wl = {
		...os,
		color: q,
		backgroundColor: q,
		outlineColor: q,
		fill: q,
		stroke: q,
		borderColor: q,
		borderTopColor: q,
		borderRightColor: q,
		borderBottomColor: q,
		borderLeftColor: q,
		filter: Ze,
		WebkitFilter: Ze,
	},
	wn = (t) => wl[t];
function Ks(t, e) {
	let n = wn(t);
	return n !== Ze && (n = bt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Xs = (t) => /^0[^.\s]+$/.test(t);
function Cl(t) {
	if (typeof t == 'number') return t === 0;
	if (t !== null) return t === 'none' || t === '0' || Xs(t);
}
function Tl(t, e, n, r) {
	const s = qe(e, n);
	let o;
	Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
	const i = r.from !== void 0 ? r.from : t.get();
	let a;
	const l = [];
	for (let c = 0; c < o.length; c++)
		o[c] === null && (o[c] = c === 0 ? i : o[c - 1]),
			Cl(o[c]) && l.push(c),
			typeof o[c] == 'string' && o[c] !== 'none' && o[c] !== '0' && (a = o[c]);
	if (s && l.length && a)
		for (let c = 0; c < l.length; c++) {
			const u = l[c];
			o[u] = Ks(e, a);
		}
	return o;
}
function Vl({
	when: t,
	delay: e,
	delayChildren: n,
	staggerChildren: r,
	staggerDirection: s,
	repeat: o,
	repeatType: i,
	repeatDelay: a,
	from: l,
	elapsed: c,
	...u
}) {
	return !!Object.keys(u).length;
}
function Ys(t, e) {
	return t[e] || t.default || t;
}
const Cn =
	(t, e, n, r = {}) =>
	(s) => {
		const o = Ys(r, t) || {},
			i = o.delay || r.delay || 0;
		let { elapsed: a = 0 } = r;
		a = a - yt(i);
		const l = Tl(e, t, n, o),
			c = l[0],
			u = l[l.length - 1],
			f = qe(t, c),
			d = qe(t, u);
		let h = {
			keyframes: l,
			velocity: e.getVelocity(),
			ease: 'easeOut',
			...o,
			delay: -a,
			onUpdate: (m) => {
				e.set(m), o.onUpdate && o.onUpdate(m);
			},
			onComplete: () => {
				s(), o.onComplete && o.onComplete();
			},
		};
		if (
			(Vl(o) || (h = { ...h, ...bl(t, h) }),
			h.duration && (h.duration = yt(h.duration)),
			h.repeatDelay && (h.repeatDelay = yt(h.repeatDelay)),
			!f || !d || Sa.current || o.type === !1)
		)
			return pl(h);
		if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
			const m = hl(e, t, h);
			if (m) return m;
		}
		return ve(h);
	};
function be(t) {
	return !!(J(t) && t.add);
}
const qs = (t) => /^\-?\d*\.?\d+$/.test(t);
function Tn(t, e) {
	t.indexOf(e) === -1 && t.push(e);
}
function Vn(t, e) {
	const n = t.indexOf(e);
	n > -1 && t.splice(n, 1);
}
class An {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return Tn(this.subscriptions, e), () => Vn(this.subscriptions, e);
	}
	notify(e, n, r) {
		const s = this.subscriptions.length;
		if (s)
			if (s === 1) this.subscriptions[0](e, n, r);
			else
				for (let o = 0; o < s; o++) {
					const i = this.subscriptions[o];
					i && i(e, n, r);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const Al = (t) => !isNaN(parseFloat(t));
class Ml {
	constructor(e, n = {}) {
		(this.version = '10.16.4'),
			(this.timeDelta = 0),
			(this.lastUpdated = 0),
			(this.canTrackVelocity = !1),
			(this.events = {}),
			(this.updateAndNotify = (r, s = !0) => {
				(this.prev = this.current), (this.current = r);
				const { delta: o, timestamp: i } = K;
				this.lastUpdated !== i &&
					((this.timeDelta = o), (this.lastUpdated = i), F.postRender(this.scheduleVelocityCheck)),
					this.prev !== this.current &&
						this.events.change &&
						this.events.change.notify(this.current),
					this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
					s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
			}),
			(this.scheduleVelocityCheck = () => F.postRender(this.velocityCheck)),
			(this.velocityCheck = ({ timestamp: r }) => {
				r !== this.lastUpdated &&
					((this.prev = this.current),
					this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
			}),
			(this.hasAnimated = !1),
			(this.prev = this.current = e),
			(this.canTrackVelocity = Al(this.current)),
			(this.owner = n.owner);
	}
	onChange(e) {
		return this.on('change', e);
	}
	on(e, n) {
		this.events[e] || (this.events[e] = new An());
		const r = this.events[e].add(n);
		return e === 'change'
			? () => {
					r(),
						F.read(() => {
							this.events.change.getSize() || this.stop();
						});
			  }
			: r;
	}
	clearListeners() {
		for (const e in this.events) this.events[e].clear();
	}
	attach(e, n) {
		(this.passiveEffect = e), (this.stopPassiveEffect = n);
	}
	set(e, n = !0) {
		!n || !this.passiveEffect
			? this.updateAndNotify(e, n)
			: this.passiveEffect(e, this.updateAndNotify);
	}
	setWithVelocity(e, n, r) {
		this.set(n), (this.prev = e), (this.timeDelta = r);
	}
	jump(e) {
		this.updateAndNotify(e),
			(this.prev = e),
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
			? Hs(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
			: 0;
	}
	start(e) {
		return (
			this.stop(),
			new Promise((n) => {
				(this.hasAnimated = !0),
					(this.animation = e(n)),
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
function It(t, e) {
	return new Ml(t, e);
}
const Zs = (t) => (e) => e.test(t),
	Rl = { test: (t) => t === 'auto', parse: (t) => t },
	Qs = [Dt, V, lt, pt, Bo, jo, Rl],
	_t = (t) => Qs.find(Zs(t)),
	Dl = [...Qs, q, bt],
	El = (t) => Dl.find(Zs(t));
function kl(t, e, n) {
	t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, It(n));
}
function Ll(t, e) {
	const n = Me(t, e);
	let { transitionEnd: r = {}, transition: s = {}, ...o } = n ? t.makeTargetAnimatable(n, !1) : {};
	o = { ...o, ...r };
	for (const i in o) {
		const a = Yo(o[i]);
		kl(t, i, a);
	}
}
function jl(t, e, n) {
	var r, s;
	const o = Object.keys(e).filter((a) => !t.hasValue(a)),
		i = o.length;
	if (i)
		for (let a = 0; a < i; a++) {
			const l = o[a],
				c = e[l];
			let u = null;
			Array.isArray(c) && (u = c[0]),
				u === null &&
					(u =
						(s = (r = n[l]) !== null && r !== void 0 ? r : t.readValue(l)) !== null && s !== void 0
							? s
							: e[l]),
				u != null &&
					(typeof u == 'string' && (qs(u) || Xs(u))
						? (u = parseFloat(u))
						: !El(u) && bt.test(c) && (u = Ks(l, c)),
					t.addValue(l, It(u, { owner: t })),
					n[l] === void 0 && (n[l] = u),
					u !== null && t.setBaseTarget(l, u));
		}
}
function Bl(t, e) {
	return e ? (e[t] || e.default || e).from : void 0;
}
function Ol(t, e, n) {
	const r = {};
	for (const s in t) {
		const o = Bl(s, e);
		if (o !== void 0) r[s] = o;
		else {
			const i = n.getValue(s);
			i && (r[s] = i.get());
		}
	}
	return r;
}
function Fl({ protectedKeys: t, needsAnimating: e }, n) {
	const r = t.hasOwnProperty(n) && e[n] !== !0;
	return (e[n] = !1), r;
}
function Js(t, e, { delay: n = 0, transitionOverride: r, type: s } = {}) {
	let {
		transition: o = t.getDefaultTransition(),
		transitionEnd: i,
		...a
	} = t.makeTargetAnimatable(e);
	const l = t.getValue('willChange');
	r && (o = r);
	const c = [],
		u = s && t.animationState && t.animationState.getState()[s];
	for (const f in a) {
		const d = t.getValue(f),
			h = a[f];
		if (!d || h === void 0 || (u && Fl(u, f))) continue;
		const m = { delay: n, elapsed: 0, ...o };
		if (window.HandoffAppearAnimations && !d.hasAnimated) {
			const x = t.getProps()[xa];
			x && ((m.elapsed = window.HandoffAppearAnimations(x, f, d, F)), (m.syncStart = !0));
		}
		d.start(Cn(f, d, h, t.shouldReduceMotion && Rt.has(f) ? { type: !1 } : m));
		const y = d.animation;
		be(l) && (l.add(f), y.then(() => l.remove(f))), c.push(y);
	}
	return (
		i &&
			Promise.all(c).then(() => {
				i && Ll(t, i);
			}),
		c
	);
}
function Qe(t, e, n = {}) {
	const r = Me(t, e, n.custom);
	let { transition: s = t.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (s = n.transitionOverride);
	const o = r ? () => Promise.all(Js(t, r, n)) : () => Promise.resolve(),
		i =
			t.variantChildren && t.variantChildren.size
				? (l = 0) => {
						const { delayChildren: c = 0, staggerChildren: u, staggerDirection: f } = s;
						return Il(t, e, c + l, u, f, n);
				  }
				: () => Promise.resolve(),
		{ when: a } = s;
	if (a) {
		const [l, c] = a === 'beforeChildren' ? [o, i] : [i, o];
		return l().then(() => c());
	} else return Promise.all([o(), i(n.delay)]);
}
function Il(t, e, n = 0, r = 0, s = 1, o) {
	const i = [],
		a = (t.variantChildren.size - 1) * r,
		l = s === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
	return (
		Array.from(t.variantChildren)
			.sort($l)
			.forEach((c, u) => {
				c.notify('AnimationStart', e),
					i.push(Qe(c, e, { ...o, delay: n + l(u) }).then(() => c.notify('AnimationComplete', e)));
			}),
		Promise.all(i)
	);
}
function $l(t, e) {
	return t.sortNodePosition(e);
}
function Nl(t, e, n = {}) {
	t.notify('AnimationStart', e);
	let r;
	if (Array.isArray(e)) {
		const s = e.map((o) => Qe(t, o, n));
		r = Promise.all(s);
	} else if (typeof e == 'string') r = Qe(t, e, n);
	else {
		const s = typeof e == 'function' ? Me(t, e, n.custom) : e;
		r = Promise.all(Js(t, s, n));
	}
	return r.then(() => t.notify('AnimationComplete', e));
}
const _l = [...ln].reverse(),
	Ul = ln.length;
function Wl(t) {
	return (e) => Promise.all(e.map(({ animation: n, options: r }) => Nl(t, n, r)));
}
function Hl(t) {
	let e = Wl(t);
	const n = Gl();
	let r = !0;
	const s = (l, c) => {
		const u = Me(t, c);
		if (u) {
			const { transition: f, transitionEnd: d, ...h } = u;
			l = { ...l, ...h, ...d };
		}
		return l;
	};
	function o(l) {
		e = l(t);
	}
	function i(l, c) {
		const u = t.getProps(),
			f = t.getVariantContext(!0) || {},
			d = [],
			h = new Set();
		let m = {},
			y = 1 / 0;
		for (let w = 0; w < Ul; w++) {
			const b = _l[w],
				v = n[b],
				S = u[b] !== void 0 ? u[b] : f[b],
				C = Xt(S),
				D = b === c ? v.isActive : null;
			D === !1 && (y = w);
			let A = S === f[b] && S !== u[b] && C;
			if (
				(A && r && t.manuallyAnimateOnMount && (A = !1),
				(v.protectedKeys = { ...m }),
				(!v.isActive && D === null) || (!S && !v.prevProp) || Ce(S) || typeof S == 'boolean')
			)
				continue;
			const T = zl(v.prevProp, S);
			let M = T || (b === c && v.isActive && !A && C) || (w > y && C);
			const X = Array.isArray(S) ? S : [S];
			let G = X.reduce(s, {});
			D === !1 && (G = {});
			const { prevResolvedValues: Z = {} } = v,
				tt = { ...Z, ...G },
				$ = (B) => {
					(M = !0), h.delete(B), (v.needsAnimating[B] = !0);
				};
			for (const B in tt) {
				const R = G[B],
					et = Z[B];
				m.hasOwnProperty(B) ||
					(R !== et
						? me(R) && me(et)
							? !Ps(R, et) || T
								? $(B)
								: (v.protectedKeys[B] = !0)
							: R !== void 0
							? $(B)
							: h.add(B)
						: R !== void 0 && h.has(B)
						? $(B)
						: (v.protectedKeys[B] = !0));
			}
			(v.prevProp = S),
				(v.prevResolvedValues = G),
				v.isActive && (m = { ...m, ...G }),
				r && t.blockInitialAnimation && (M = !1),
				M && !A && d.push(...X.map((B) => ({ animation: B, options: { type: b, ...l } })));
		}
		if (h.size) {
			const w = {};
			h.forEach((b) => {
				const v = t.getBaseTarget(b);
				v !== void 0 && (w[b] = v);
			}),
				d.push({ animation: w });
		}
		let x = !!d.length;
		return (
			r && u.initial === !1 && !t.manuallyAnimateOnMount && (x = !1),
			(r = !1),
			x ? e(d) : Promise.resolve()
		);
	}
	function a(l, c, u) {
		var f;
		if (n[l].isActive === c) return Promise.resolve();
		(f = t.variantChildren) === null ||
			f === void 0 ||
			f.forEach((h) => {
				var m;
				return (m = h.animationState) === null || m === void 0 ? void 0 : m.setActive(l, c);
			}),
			(n[l].isActive = c);
		const d = i(u, l);
		for (const h in n) n[h].protectedKeys = {};
		return d;
	}
	return { animateChanges: i, setActive: a, setAnimateFunction: o, getState: () => n };
}
function zl(t, e) {
	return typeof e == 'string' ? e !== t : Array.isArray(e) ? !Ps(e, t) : !1;
}
function St(t = !1) {
	return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Gl() {
	return {
		animate: St(!0),
		whileInView: St(),
		whileHover: St(),
		whileTap: St(),
		whileDrag: St(),
		whileFocus: St(),
		exit: St(),
	};
}
class Kl extends xt {
	constructor(e) {
		super(e), e.animationState || (e.animationState = Hl(e));
	}
	updateAnimationControlsSubscription() {
		const { animate: e } = this.node.getProps();
		this.unmount(), Ce(e) && (this.unmount = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate: e } = this.node.getProps(),
			{ animate: n } = this.node.prevProps || {};
		e !== n && this.updateAnimationControlsSubscription();
	}
	unmount() {}
}
let Xl = 0;
class Yl extends xt {
	constructor() {
		super(...arguments), (this.id = Xl++);
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: e, onExitComplete: n, custom: r } = this.node.presenceContext,
			{ isPresent: s } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || e === s) return;
		const o = this.node.animationState.setActive('exit', !e, {
			custom: r ?? this.node.getProps().custom,
		});
		n && !e && o.then(() => n(this.id));
	}
	mount() {
		const { register: e } = this.node.presenceContext || {};
		e && (this.unmount = e(this.id));
	}
	unmount() {}
}
const ql = { animation: { Feature: Kl }, exit: { Feature: Yl } },
	Zn = (t, e) => Math.abs(t - e);
function Zl(t, e) {
	const n = Zn(t.x, e.x),
		r = Zn(t.y, e.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
class ti {
	constructor(e, n, { transformPagePoint: r } = {}) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const c = Ne(this.lastMoveEventInfo, this.history),
					u = this.startEvent !== null,
					f = Zl(c.offset, { x: 0, y: 0 }) >= 3;
				if (!u && !f) return;
				const { point: d } = c,
					{ timestamp: h } = K;
				this.history.push({ ...d, timestamp: h });
				const { onStart: m, onMove: y } = this.handlers;
				u || (m && m(this.lastMoveEvent, c), (this.startEvent = this.lastMoveEvent)),
					y && y(this.lastMoveEvent, c);
			}),
			(this.handlePointerMove = (c, u) => {
				(this.lastMoveEvent = c),
					(this.lastMoveEventInfo = $e(u, this.transformPagePoint)),
					F.update(this.updatePoint, !0);
			}),
			(this.handlePointerUp = (c, u) => {
				if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
				const { onEnd: f, onSessionEnd: d } = this.handlers,
					h = Ne(
						c.type === 'pointercancel' ? this.lastMoveEventInfo : $e(u, this.transformPagePoint),
						this.history
					);
				this.startEvent && f && f(c, h), d && d(c, h);
			}),
			!gs(e))
		)
			return;
		(this.handlers = n), (this.transformPagePoint = r);
		const s = Ae(e),
			o = $e(s, this.transformPagePoint),
			{ point: i } = o,
			{ timestamp: a } = K;
		this.history = [{ ...i, timestamp: a }];
		const { onSessionStart: l } = n;
		l && l(e, Ne(o, this.history)),
			(this.removeListeners = gt(
				ft(window, 'pointermove', this.handlePointerMove),
				ft(window, 'pointerup', this.handlePointerUp),
				ft(window, 'pointercancel', this.handlePointerUp)
			));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), ht(this.updatePoint);
	}
}
function $e(t, e) {
	return e ? { point: e(t.point) } : t;
}
function Qn(t, e) {
	return { x: t.x - e.x, y: t.y - e.y };
}
function Ne({ point: t }, e) {
	return { point: t, delta: Qn(t, ei(e)), offset: Qn(t, Ql(e)), velocity: Jl(e, 0.1) };
}
function Ql(t) {
	return t[0];
}
function ei(t) {
	return t[t.length - 1];
}
function Jl(t, e) {
	if (t.length < 2) return { x: 0, y: 0 };
	let n = t.length - 1,
		r = null;
	const s = ei(t);
	for (; n >= 0 && ((r = t[n]), !(s.timestamp - r.timestamp > yt(e))); ) n--;
	if (!r) return { x: 0, y: 0 };
	const o = dt(s.timestamp - r.timestamp);
	if (o === 0) return { x: 0, y: 0 };
	const i = { x: (s.x - r.x) / o, y: (s.y - r.y) / o };
	return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function nt(t) {
	return t.max - t.min;
}
function Je(t, e = 0, n = 0.01) {
	return Math.abs(t - e) <= n;
}
function Jn(t, e, n, r = 0.5) {
	(t.origin = r),
		(t.originPoint = N(e.min, e.max, t.origin)),
		(t.scale = nt(n) / nt(e)),
		(Je(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
		(t.translate = N(n.min, n.max, t.origin) - t.originPoint),
		(Je(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function Gt(t, e, n, r) {
	Jn(t.x, e.x, n.x, r ? r.originX : void 0), Jn(t.y, e.y, n.y, r ? r.originY : void 0);
}
function tr(t, e, n) {
	(t.min = n.min + e.min), (t.max = t.min + nt(e));
}
function tc(t, e, n) {
	tr(t.x, e.x, n.x), tr(t.y, e.y, n.y);
}
function er(t, e, n) {
	(t.min = e.min - n.min), (t.max = t.min + nt(e));
}
function Kt(t, e, n) {
	er(t.x, e.x, n.x), er(t.y, e.y, n.y);
}
function ec(t, { min: e, max: n }, r) {
	return (
		e !== void 0 && t < e
			? (t = r ? N(e, t, r.min) : Math.max(t, e))
			: n !== void 0 && t > n && (t = r ? N(n, t, r.max) : Math.min(t, n)),
		t
	);
}
function nr(t, e, n) {
	return {
		min: e !== void 0 ? t.min + e : void 0,
		max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
	};
}
function nc(t, { top: e, left: n, bottom: r, right: s }) {
	return { x: nr(t.x, n, s), y: nr(t.y, e, r) };
}
function rr(t, e) {
	let n = e.min - t.min,
		r = e.max - t.max;
	return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), { min: n, max: r };
}
function rc(t, e) {
	return { x: rr(t.x, e.x), y: rr(t.y, e.y) };
}
function sc(t, e) {
	let n = 0.5;
	const r = nt(t),
		s = nt(e);
	return (
		s > r ? (n = qt(e.min, e.max - r, t.min)) : r > s && (n = qt(t.min, t.max - s, e.min)),
		vt(0, 1, n)
	);
}
function ic(t, e) {
	const n = {};
	return (
		e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
	);
}
const tn = 0.35;
function oc(t = tn) {
	return (
		t === !1 ? (t = 0) : t === !0 && (t = tn),
		{ x: sr(t, 'left', 'right'), y: sr(t, 'top', 'bottom') }
	);
}
function sr(t, e, n) {
	return { min: ir(t, e), max: ir(t, n) };
}
function ir(t, e) {
	return typeof t == 'number' ? t : t[e] || 0;
}
const or = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Ot = () => ({ x: or(), y: or() }),
	ar = () => ({ min: 0, max: 0 }),
	z = () => ({ x: ar(), y: ar() });
function ot(t) {
	return [t('x'), t('y')];
}
function ni({ top: t, left: e, right: n, bottom: r }) {
	return { x: { min: e, max: n }, y: { min: t, max: r } };
}
function ac({ x: t, y: e }) {
	return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function lc(t, e) {
	if (!e) return t;
	const n = e({ x: t.left, y: t.top }),
		r = e({ x: t.right, y: t.bottom });
	return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function _e(t) {
	return t === void 0 || t === 1;
}
function en({ scale: t, scaleX: e, scaleY: n }) {
	return !_e(t) || !_e(e) || !_e(n);
}
function wt(t) {
	return en(t) || ri(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function ri(t) {
	return lr(t.x) || lr(t.y);
}
function lr(t) {
	return t && t !== '0%';
}
function xe(t, e, n) {
	const r = t - n,
		s = e * r;
	return n + s;
}
function cr(t, e, n, r, s) {
	return s !== void 0 && (t = xe(t, s, r)), xe(t, n, r) + e;
}
function nn(t, e = 0, n = 1, r, s) {
	(t.min = cr(t.min, e, n, r, s)), (t.max = cr(t.max, e, n, r, s));
}
function si(t, { x: e, y: n }) {
	nn(t.x, e.translate, e.scale, e.originPoint), nn(t.y, n.translate, n.scale, n.originPoint);
}
function cc(t, e, n, r = !1) {
	const s = n.length;
	if (!s) return;
	e.x = e.y = 1;
	let o, i;
	for (let a = 0; a < s; a++) {
		(o = n[a]), (i = o.projectionDelta);
		const l = o.instance;
		(l && l.style && l.style.display === 'contents') ||
			(r &&
				o.options.layoutScroll &&
				o.scroll &&
				o !== o.root &&
				Ft(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
			i && ((e.x *= i.x.scale), (e.y *= i.y.scale), si(t, i)),
			r && wt(o.latestValues) && Ft(t, o.latestValues));
	}
	(e.x = ur(e.x)), (e.y = ur(e.y));
}
function ur(t) {
	return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function mt(t, e) {
	(t.min = t.min + e), (t.max = t.max + e);
}
function fr(t, e, [n, r, s]) {
	const o = e[s] !== void 0 ? e[s] : 0.5,
		i = N(t.min, t.max, o);
	nn(t, e[n], e[r], i, e.scale);
}
const uc = ['x', 'scaleX', 'originX'],
	fc = ['y', 'scaleY', 'originY'];
function Ft(t, e) {
	fr(t.x, e, uc), fr(t.y, e, fc);
}
function ii(t, e) {
	return ni(lc(t.getBoundingClientRect(), e));
}
function dc(t, e, n) {
	const r = ii(t, n),
		{ scroll: s } = e;
	return s && (mt(r.x, s.offset.x), mt(r.y, s.offset.y)), r;
}
const hc = new WeakMap();
class pc {
	constructor(e) {
		(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = z()),
			(this.visualElement = e);
	}
	start(e, { snapToCursor: n = !1 } = {}) {
		const { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		const s = (l) => {
				this.stopAnimation(), n && this.snapToCursor(Ae(l, 'page').point);
			},
			o = (l, c) => {
				const { drag: u, dragPropagation: f, onDragStart: d } = this.getProps();
				if (
					u &&
					!f &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = vs(u)),
					!this.openGlobalLock)
				)
					return;
				(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0),
						(this.visualElement.projection.target = void 0)),
					ot((m) => {
						let y = this.getAxisMotionValue(m).get() || 0;
						if (lt.test(y)) {
							const { projection: x } = this.visualElement;
							if (x && x.layout) {
								const w = x.layout.layoutBox[m];
								w && (y = nt(w) * (parseFloat(y) / 100));
							}
						}
						this.originPoint[m] = y;
					}),
					d && F.update(() => d(l, c), !1, !0);
				const { animationState: h } = this.visualElement;
				h && h.setActive('whileDrag', !0);
			},
			i = (l, c) => {
				const {
					dragPropagation: u,
					dragDirectionLock: f,
					onDirectionLock: d,
					onDrag: h,
				} = this.getProps();
				if (!u && !this.openGlobalLock) return;
				const { offset: m } = c;
				if (f && this.currentDirection === null) {
					(this.currentDirection = mc(m)),
						this.currentDirection !== null && d && d(this.currentDirection);
					return;
				}
				this.updateAxis('x', c.point, m),
					this.updateAxis('y', c.point, m),
					this.visualElement.render(),
					h && h(l, c);
			},
			a = (l, c) => this.stop(l, c);
		this.panSession = new ti(
			e,
			{ onSessionStart: s, onStart: o, onMove: i, onSessionEnd: a },
			{ transformPagePoint: this.visualElement.getTransformPagePoint() }
		);
	}
	stop(e, n) {
		const r = this.isDragging;
		if ((this.cancel(), !r)) return;
		const { velocity: s } = n;
		this.startAnimation(s);
		const { onDragEnd: o } = this.getProps();
		o && F.update(() => o(e, n));
	}
	cancel() {
		this.isDragging = !1;
		const { projection: e, animationState: n } = this.visualElement;
		e && (e.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0);
		const { dragPropagation: r } = this.getProps();
		!r && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
			n && n.setActive('whileDrag', !1);
	}
	updateAxis(e, n, r) {
		const { drag: s } = this.getProps();
		if (!r || !ie(e, s, this.currentDirection)) return;
		const o = this.getAxisMotionValue(e);
		let i = this.originPoint[e] + r[e];
		this.constraints && this.constraints[e] && (i = ec(i, this.constraints[e], this.elastic[e])),
			o.set(i);
	}
	resolveConstraints() {
		const { dragConstraints: e, dragElastic: n } = this.getProps(),
			{ layout: r } = this.visualElement.projection || {},
			s = this.constraints;
		e && jt(e)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: e && r
			? (this.constraints = nc(r.layoutBox, e))
			: (this.constraints = !1),
			(this.elastic = oc(n)),
			s !== this.constraints &&
				r &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				ot((o) => {
					this.getAxisMotionValue(o) &&
						(this.constraints[o] = ic(r.layoutBox[o], this.constraints[o]));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
		if (!e || !jt(e)) return !1;
		const r = e.current,
			{ projection: s } = this.visualElement;
		if (!s || !s.layout) return !1;
		const o = dc(r, s.root, this.visualElement.getTransformPagePoint());
		let i = rc(s.layout.layoutBox, o);
		if (n) {
			const a = n(ac(i));
			(this.hasMutatedConstraints = !!a), a && (i = ni(a));
		}
		return i;
	}
	startAnimation(e) {
		const {
				drag: n,
				dragMomentum: r,
				dragElastic: s,
				dragTransition: o,
				dragSnapToOrigin: i,
				onDragTransitionEnd: a,
			} = this.getProps(),
			l = this.constraints || {},
			c = ot((u) => {
				if (!ie(u, n, this.currentDirection)) return;
				let f = (l && l[u]) || {};
				i && (f = { min: 0, max: 0 });
				const d = s ? 200 : 1e6,
					h = s ? 40 : 1e7,
					m = {
						type: 'inertia',
						velocity: r ? e[u] : 0,
						bounceStiffness: d,
						bounceDamping: h,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...o,
						...f,
					};
				return this.startAxisValueAnimation(u, m);
			});
		return Promise.all(c).then(a);
	}
	startAxisValueAnimation(e, n) {
		const r = this.getAxisMotionValue(e);
		return r.start(Cn(e, r, 0, n));
	}
	stopAnimation() {
		ot((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		const n = '_drag' + e.toUpperCase(),
			r = this.visualElement.getProps(),
			s = r[n];
		return s || this.visualElement.getValue(e, (r.initial ? r.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		ot((n) => {
			const { drag: r } = this.getProps();
			if (!ie(n, r, this.currentDirection)) return;
			const { projection: s } = this.visualElement,
				o = this.getAxisMotionValue(n);
			if (s && s.layout) {
				const { min: i, max: a } = s.layout.layoutBox[n];
				o.set(e[n] - N(i, a, 0.5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: e, dragConstraints: n } = this.getProps(),
			{ projection: r } = this.visualElement;
		if (!jt(n) || !r || !this.constraints) return;
		this.stopAnimation();
		const s = { x: 0, y: 0 };
		ot((i) => {
			const a = this.getAxisMotionValue(i);
			if (a) {
				const l = a.get();
				s[i] = sc({ min: l, max: l }, this.constraints[i]);
			}
		});
		const { transformTemplate: o } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
			r.root && r.root.updateScroll(),
			r.updateLayout(),
			this.resolveConstraints(),
			ot((i) => {
				if (!ie(i, e, null)) return;
				const a = this.getAxisMotionValue(i),
					{ min: l, max: c } = this.constraints[i];
				a.set(N(l, c, s[i]));
			});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		hc.set(this.visualElement, this);
		const e = this.visualElement.current,
			n = ft(e, 'pointerdown', (l) => {
				const { drag: c, dragListener: u = !0 } = this.getProps();
				c && u && this.start(l);
			}),
			r = () => {
				const { dragConstraints: l } = this.getProps();
				jt(l) && (this.constraints = this.resolveRefConstraints());
			},
			{ projection: s } = this.visualElement,
			o = s.addEventListener('measure', r);
		s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), r();
		const i = ct(window, 'resize', () => this.scalePositionWithinConstraints()),
			a = s.addEventListener('didUpdate', ({ delta: l, hasLayoutChanged: c }) => {
				this.isDragging &&
					c &&
					(ot((u) => {
						const f = this.getAxisMotionValue(u);
						f && ((this.originPoint[u] += l[u].translate), f.set(f.get() + l[u].translate));
					}),
					this.visualElement.render());
			});
		return () => {
			i(), n(), o(), a && a();
		};
	}
	getProps() {
		const e = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: s = !1,
				dragConstraints: o = !1,
				dragElastic: i = tn,
				dragMomentum: a = !0,
			} = e;
		return {
			...e,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: s,
			dragConstraints: o,
			dragElastic: i,
			dragMomentum: a,
		};
	}
}
function ie(t, e, n) {
	return (e === !0 || e === t) && (n === null || n === t);
}
function mc(t, e = 10) {
	let n = null;
	return Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x'), n;
}
class gc extends xt {
	constructor(e) {
		super(e),
			(this.removeGroupControls = W),
			(this.removeListeners = W),
			(this.controls = new pc(e));
	}
	mount() {
		const { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || W);
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}
const dr = (t) => (e, n) => {
	t && F.update(() => t(e, n));
};
class yc extends xt {
	constructor() {
		super(...arguments), (this.removePointerDownListener = W);
	}
	onPointerDown(e) {
		this.session = new ti(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
		});
	}
	createPanHandlers() {
		const { onPanSessionStart: e, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
		return {
			onSessionStart: dr(e),
			onStart: dr(n),
			onMove: r,
			onEnd: (o, i) => {
				delete this.session, s && F.update(() => s(o, i));
			},
		};
	}
	mount() {
		this.removePointerDownListener = ft(this.node.current, 'pointerdown', (e) =>
			this.onPointerDown(e)
		);
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}
function vc() {
	const t = g.useContext(Se);
	if (t === null) return [!0, null];
	const { isPresent: e, onExitComplete: n, register: r } = t,
		s = g.useId();
	return g.useEffect(() => r(s), []), !e && n ? [!1, () => n && n(s)] : [!0];
}
const ce = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function hr(t, e) {
	return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const Ut = {
		correct: (t, e) => {
			if (!e.target) return t;
			if (typeof t == 'string')
				if (V.test(t)) t = parseFloat(t);
				else return t;
			const n = hr(t, e.target.x),
				r = hr(t, e.target.y);
			return `${n}% ${r}%`;
		},
	},
	bc = {
		correct: (t, { treeScale: e, projectionDelta: n }) => {
			const r = t,
				s = bt.parse(t);
			if (s.length > 5) return r;
			const o = bt.createTransformer(t),
				i = typeof s[0] != 'number' ? 1 : 0,
				a = n.x.scale * e.x,
				l = n.y.scale * e.y;
			(s[0 + i] /= a), (s[1 + i] /= l);
			const c = N(a, l, 0.5);
			return (
				typeof s[2 + i] == 'number' && (s[2 + i] /= c),
				typeof s[3 + i] == 'number' && (s[3 + i] /= c),
				o(s)
			);
		},
	};
class xc extends Q.Component {
	componentDidMount() {
		const { visualElement: e, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props,
			{ projection: o } = e;
		Ao(Pc),
			o &&
				(n.group && n.group.add(o),
				r && r.register && s && r.register(o),
				o.root.didUpdate(),
				o.addEventListener('animationComplete', () => {
					this.safeToRemove();
				}),
				o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
			(ce.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(e) {
		const { layoutDependency: n, visualElement: r, drag: s, isPresent: o } = this.props,
			i = r.projection;
		return (
			i &&
				((i.isPresent = o),
				s || e.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(),
				e.isPresent !== o &&
					(o
						? i.promote()
						: i.relegate() ||
						  F.postRender(() => {
								const a = i.getStack();
								(!a || !a.members.length) && this.safeToRemove();
						  }))),
			null
		);
	}
	componentDidUpdate() {
		const { projection: e } = this.props.visualElement;
		e &&
			(e.root.didUpdate(),
			queueMicrotask(() => {
				!e.currentAnimation && e.isLead() && this.safeToRemove();
			}));
	}
	componentWillUnmount() {
		const { visualElement: e, layoutGroup: n, switchLayoutGroup: r } = this.props,
			{ projection: s } = e;
		s &&
			(s.scheduleCheckAfterUnmount(),
			n && n.group && n.group.remove(s),
			r && r.deregister && r.deregister(s));
	}
	safeToRemove() {
		const { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
}
function oi(t) {
	const [e, n] = vc(),
		r = g.useContext(un);
	return Q.createElement(xc, {
		...t,
		layoutGroup: r,
		switchLayoutGroup: g.useContext(es),
		isPresent: e,
		safeToRemove: n,
	});
}
const Pc = {
		borderRadius: {
			...Ut,
			applyTo: [
				'borderTopLeftRadius',
				'borderTopRightRadius',
				'borderBottomLeftRadius',
				'borderBottomRightRadius',
			],
		},
		borderTopLeftRadius: Ut,
		borderTopRightRadius: Ut,
		borderBottomLeftRadius: Ut,
		borderBottomRightRadius: Ut,
		boxShadow: bc,
	},
	ai = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
	Sc = ai.length,
	pr = (t) => (typeof t == 'string' ? parseFloat(t) : t),
	mr = (t) => typeof t == 'number' || V.test(t);
function wc(t, e, n, r, s, o) {
	s
		? ((t.opacity = N(0, n.opacity !== void 0 ? n.opacity : 1, Cc(r))),
		  (t.opacityExit = N(e.opacity !== void 0 ? e.opacity : 1, 0, Tc(r))))
		: o &&
		  (t.opacity = N(
				e.opacity !== void 0 ? e.opacity : 1,
				n.opacity !== void 0 ? n.opacity : 1,
				r
		  ));
	for (let i = 0; i < Sc; i++) {
		const a = `border${ai[i]}Radius`;
		let l = gr(e, a),
			c = gr(n, a);
		if (l === void 0 && c === void 0) continue;
		l || (l = 0),
			c || (c = 0),
			l === 0 || c === 0 || mr(l) === mr(c)
				? ((t[a] = Math.max(N(pr(l), pr(c), r), 0)), (lt.test(c) || lt.test(l)) && (t[a] += '%'))
				: (t[a] = c);
	}
	(e.rotate || n.rotate) && (t.rotate = N(e.rotate || 0, n.rotate || 0, r));
}
function gr(t, e) {
	return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Cc = li(0, 0.5, xn),
	Tc = li(0.5, 0.95, W);
function li(t, e, n) {
	return (r) => (r < t ? 0 : r > e ? 1 : n(qt(t, e, r)));
}
function yr(t, e) {
	(t.min = e.min), (t.max = e.max);
}
function rt(t, e) {
	yr(t.x, e.x), yr(t.y, e.y);
}
function vr(t, e, n, r, s) {
	return (t -= e), (t = xe(t, 1 / n, r)), s !== void 0 && (t = xe(t, 1 / s, r)), t;
}
function Vc(t, e = 0, n = 1, r = 0.5, s, o = t, i = t) {
	if (
		(lt.test(e) && ((e = parseFloat(e)), (e = N(i.min, i.max, e / 100) - i.min)),
		typeof e != 'number')
	)
		return;
	let a = N(o.min, o.max, r);
	t === o && (a -= e), (t.min = vr(t.min, e, n, a, s)), (t.max = vr(t.max, e, n, a, s));
}
function br(t, e, [n, r, s], o, i) {
	Vc(t, e[n], e[r], e[s], e.scale, o, i);
}
const Ac = ['x', 'scaleX', 'originX'],
	Mc = ['y', 'scaleY', 'originY'];
function xr(t, e, n, r) {
	br(t.x, e, Ac, n ? n.x : void 0, r ? r.x : void 0),
		br(t.y, e, Mc, n ? n.y : void 0, r ? r.y : void 0);
}
function Pr(t) {
	return t.translate === 0 && t.scale === 1;
}
function ci(t) {
	return Pr(t.x) && Pr(t.y);
}
function Rc(t, e) {
	return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
}
function ui(t, e) {
	return (
		Math.round(t.x.min) === Math.round(e.x.min) &&
		Math.round(t.x.max) === Math.round(e.x.max) &&
		Math.round(t.y.min) === Math.round(e.y.min) &&
		Math.round(t.y.max) === Math.round(e.y.max)
	);
}
function Sr(t) {
	return nt(t.x) / nt(t.y);
}
class Dc {
	constructor() {
		this.members = [];
	}
	add(e) {
		Tn(this.members, e), e.scheduleRender();
	}
	remove(e) {
		if ((Vn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n);
		}
	}
	relegate(e) {
		const n = this.members.findIndex((s) => e === s);
		if (n === 0) return !1;
		let r;
		for (let s = n; s >= 0; s--) {
			const o = this.members[s];
			if (o.isPresent !== !1) {
				r = o;
				break;
			}
		}
		return r ? (this.promote(r), !0) : !1;
	}
	promote(e, n) {
		const r = this.lead;
		if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
			r.instance && r.scheduleRender(),
				e.scheduleRender(),
				(e.resumeFrom = r),
				n && (e.resumeFrom.preserveOpacity = !0),
				r.snapshot &&
					((e.snapshot = r.snapshot),
					(e.snapshot.latestValues = r.animationValues || r.latestValues)),
				e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
			const { crossfade: s } = e.options;
			s === !1 && r.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			const { options: n, resumingFrom: r } = e;
			n.onExitComplete && n.onExitComplete(),
				r && r.options.onExitComplete && r.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => {
			e.instance && e.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
}
function wr(t, e, n) {
	let r = '';
	const s = t.x.translate / e.x,
		o = t.y.translate / e.y;
	if (
		((s || o) && (r = `translate3d(${s}px, ${o}px, 0) `),
		(e.x !== 1 || e.y !== 1) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
		n)
	) {
		const { rotate: l, rotateX: c, rotateY: u } = n;
		l && (r += `rotate(${l}deg) `),
			c && (r += `rotateX(${c}deg) `),
			u && (r += `rotateY(${u}deg) `);
	}
	const i = t.x.scale * e.x,
		a = t.y.scale * e.y;
	return (i !== 1 || a !== 1) && (r += `scale(${i}, ${a})`), r || 'none';
}
const Ec = (t, e) => t.depth - e.depth;
class kc {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(e) {
		Tn(this.children, e), (this.isDirty = !0);
	}
	remove(e) {
		Vn(this.children, e), (this.isDirty = !0);
	}
	forEach(e) {
		this.isDirty && this.children.sort(Ec), (this.isDirty = !1), this.children.forEach(e);
	}
}
function Lc(t, e) {
	const n = performance.now(),
		r = ({ timestamp: s }) => {
			const o = s - n;
			o >= e && (ht(r), t(o - e));
		};
	return F.read(r, !0), () => ht(r);
}
function jc(t) {
	window.MotionDebug && window.MotionDebug.record(t);
}
function Bc(t) {
	return t instanceof SVGElement && t.tagName !== 'svg';
}
function Oc(t, e, n) {
	const r = J(t) ? t : It(t);
	return r.start(Cn('', r, e, n)), r.animation;
}
const Cr = ['', 'X', 'Y', 'Z'],
	Tr = 1e3;
let Fc = 0;
const Ct = {
	type: 'projectionFrame',
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0,
};
function fi({
	attachResizeListener: t,
	defaultParent: e,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: s,
}) {
	return class {
		constructor(i = {}, a = e?.()) {
			(this.id = Fc++),
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
					(Ct.totalNodes = Ct.resolvedTargetDeltas = Ct.recalculatedProjection = 0),
						this.nodes.forEach(Nc),
						this.nodes.forEach(zc),
						this.nodes.forEach(Gc),
						this.nodes.forEach(_c),
						jc(Ct);
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
			this.root === this && (this.nodes = new kc());
		}
		addEventListener(i, a) {
			return (
				this.eventHandlers.has(i) || this.eventHandlers.set(i, new An()),
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
			(this.isSVG = Bc(i)), (this.instance = i);
			const { layoutId: l, layout: c, visualElement: u } = this.options;
			if (
				(u && !u.current && u.mount(i),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				a && (c || l) && (this.isLayoutDirty = !0),
				t)
			) {
				let f;
				const d = () => (this.root.updateBlockedByResize = !1);
				t(i, () => {
					(this.root.updateBlockedByResize = !0),
						f && f(),
						(f = Lc(d, 250)),
						ce.hasAnimatedSinceResize && ((ce.hasAnimatedSinceResize = !1), this.nodes.forEach(Ar));
				});
			}
			l && this.root.registerSharedNode(l, this),
				this.options.animate !== !1 &&
					u &&
					(l || c) &&
					this.addEventListener(
						'didUpdate',
						({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: h, layout: m }) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const y = this.options.transition || u.getDefaultTransition() || Zc,
								{ onLayoutAnimationStart: x, onLayoutAnimationComplete: w } = u.getProps(),
								b = !this.targetLayout || !ui(this.targetLayout, m) || h,
								v = !d && h;
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								v ||
								(d && (b || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(f, v);
								const S = { ...Ys(y, 'layout'), onPlay: x, onComplete: w };
								(u.shouldReduceMotion || this.options.layoutRoot) && ((S.delay = 0), (S.type = !1)),
									this.startAnimation(S);
							} else
								d || Ar(this),
									this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
							this.targetLayout = m;
						}
					);
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const i = this.getStack();
			i && i.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				ht(this.updateProjection);
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
				((this.isUpdating = !0), this.nodes && this.nodes.forEach(Kc), this.animationId++);
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
			for (let u = 0; u < this.path.length; u++) {
				const f = this.path[u];
				(f.shouldResetTransform = !0),
					f.updateScroll('snapshot'),
					f.options.layoutRoot && f.willUpdate(!1);
			}
			const { layoutId: a, layout: l } = this.options;
			if (a === void 0 && !l) return;
			const c = this.getTransformTemplate();
			(this.prevTransformTemplateValue = c ? c(this.latestValues, '') : void 0),
				this.updateSnapshot(),
				i && this.notifyListeners('willUpdate');
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Vr);
				return;
			}
			this.isUpdating || this.nodes.forEach(Wc),
				(this.isUpdating = !1),
				this.nodes.forEach(Hc),
				this.nodes.forEach(Ic),
				this.nodes.forEach($c),
				this.clearAllSnapshots();
			const a = performance.now();
			(K.delta = vt(0, 1e3 / 60, a - K.timestamp)),
				(K.timestamp = a),
				(K.isProcessing = !0),
				Ee.update.process(K),
				Ee.preRender.process(K),
				Ee.render.process(K),
				(K.isProcessing = !1);
		}
		didUpdate() {
			this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Uc), this.sharedNodes.forEach(Xc);
		}
		scheduleUpdateProjection() {
			F.preRender(this.updateProjection, !1, !0);
		}
		scheduleCheckAfterUnmount() {
			F.postRender(() => {
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
				(this.layoutCorrected = z()),
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
			if (!s) return;
			const i = this.isLayoutDirty || this.shouldResetTransform,
				a = this.projectionDelta && !ci(this.projectionDelta),
				l = this.getTransformTemplate(),
				c = l ? l(this.latestValues, '') : void 0,
				u = c !== this.prevTransformTemplateValue;
			i &&
				(a || wt(this.latestValues) || u) &&
				(s(this.instance, c), (this.shouldResetTransform = !1), this.scheduleRender());
		}
		measure(i = !0) {
			const a = this.measurePageBox();
			let l = this.removeElementScroll(a);
			return (
				i && (l = this.removeTransform(l)),
				Qc(l),
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
			if (!i) return z();
			const a = i.measureViewportBox(),
				{ scroll: l } = this.root;
			return l && (mt(a.x, l.offset.x), mt(a.y, l.offset.y)), a;
		}
		removeElementScroll(i) {
			const a = z();
			rt(a, i);
			for (let l = 0; l < this.path.length; l++) {
				const c = this.path[l],
					{ scroll: u, options: f } = c;
				if (c !== this.root && u && f.layoutScroll) {
					if (u.isRoot) {
						rt(a, i);
						const { scroll: d } = this.root;
						d && (mt(a.x, -d.offset.x), mt(a.y, -d.offset.y));
					}
					mt(a.x, u.offset.x), mt(a.y, u.offset.y);
				}
			}
			return a;
		}
		applyTransform(i, a = !1) {
			const l = z();
			rt(l, i);
			for (let c = 0; c < this.path.length; c++) {
				const u = this.path[c];
				!a &&
					u.options.layoutScroll &&
					u.scroll &&
					u !== u.root &&
					Ft(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
					wt(u.latestValues) && Ft(l, u.latestValues);
			}
			return wt(this.latestValues) && Ft(l, this.latestValues), l;
		}
		removeTransform(i) {
			const a = z();
			rt(a, i);
			for (let l = 0; l < this.path.length; l++) {
				const c = this.path[l];
				if (!c.instance || !wt(c.latestValues)) continue;
				en(c.latestValues) && c.updateSnapshot();
				const u = z(),
					f = c.measurePageBox();
				rt(u, f), xr(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
			}
			return wt(this.latestValues) && xr(a, this.latestValues), a;
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
				this.relativeParent.resolvedRelativeTargetAt !== K.timestamp &&
				this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(i = !1) {
			var a;
			const l = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
				this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
			const c = !!this.resumingFrom || this !== l;
			if (
				!(
					i ||
					(c && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					(!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget
				)
			)
				return;
			const { layout: f, layoutId: d } = this.options;
			if (!(!this.layout || !(f || d))) {
				if (
					((this.resolvedRelativeTargetAt = K.timestamp), !this.targetDelta && !this.relativeTarget)
				) {
					const h = this.getClosestProjectingParent();
					h && h.layout && this.animationProgress !== 1
						? ((this.relativeParent = h),
						  this.forceRelativeParentToResolveTarget(),
						  (this.relativeTarget = z()),
						  (this.relativeTargetOrigin = z()),
						  Kt(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox),
						  rt(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target || ((this.target = z()), (this.targetWithTransforms = z())),
						this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.relativeParent &&
						this.relativeParent.target
							? (this.forceRelativeParentToResolveTarget(),
							  tc(this.target, this.relativeTarget, this.relativeParent.target))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: rt(this.target, this.layout.layoutBox),
							  si(this.target, this.targetDelta))
							: rt(this.target, this.layout.layoutBox),
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
							  (this.relativeTarget = z()),
							  (this.relativeTargetOrigin = z()),
							  Kt(this.relativeTargetOrigin, this.target, h.target),
							  rt(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					Ct.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || en(this.parent.latestValues) || ri(this.parent.latestValues)))
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
			let c = !0;
			if (
				((this.isProjectionDirty ||
					(!((i = this.parent) === null || i === void 0) && i.isProjectionDirty)) &&
					(c = !1),
				l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
				this.resolvedRelativeTargetAt === K.timestamp && (c = !1),
				c)
			)
				return;
			const { layout: u, layoutId: f } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(u || f))
			)
				return;
			rt(this.layoutCorrected, this.layout.layoutBox);
			const d = this.treeScale.x,
				h = this.treeScale.y;
			cc(this.layoutCorrected, this.treeScale, this.path, l),
				a.layout &&
					!a.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					(a.target = a.layout.layoutBox);
			const { target: m } = a;
			if (!m) {
				this.projectionTransform &&
					((this.projectionDelta = Ot()),
					(this.projectionTransform = 'none'),
					this.scheduleRender());
				return;
			}
			this.projectionDelta ||
				((this.projectionDelta = Ot()), (this.projectionDeltaWithTransform = Ot()));
			const y = this.projectionTransform;
			Gt(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
				(this.projectionTransform = wr(this.projectionDelta, this.treeScale)),
				(this.projectionTransform !== y || this.treeScale.x !== d || this.treeScale.y !== h) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners('projectionUpdate', m)),
				Ct.recalculatedProjection++;
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
				c = l ? l.latestValues : {},
				u = { ...this.latestValues },
				f = Ot();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !a);
			const d = z(),
				h = l ? l.source : void 0,
				m = this.layout ? this.layout.source : void 0,
				y = h !== m,
				x = this.getStack(),
				w = !x || x.members.length <= 1,
				b = !!(y && !w && this.options.crossfade === !0 && !this.path.some(qc));
			this.animationProgress = 0;
			let v;
			(this.mixTargetDelta = (S) => {
				const C = S / 1e3;
				Mr(f.x, i.x, C),
					Mr(f.y, i.y, C),
					this.setTargetDelta(f),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(Kt(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						Yc(this.relativeTarget, this.relativeTargetOrigin, d, C),
						v && Rc(this.relativeTarget, v) && (this.isProjectionDirty = !1),
						v || (v = z()),
						rt(v, this.relativeTarget)),
					y && ((this.animationValues = u), wc(u, c, this.latestValues, C, b, w)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = C);
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(i) {
			this.notifyListeners('animationStart'),
				this.currentAnimation && this.currentAnimation.stop(),
				this.resumingFrom &&
					this.resumingFrom.currentAnimation &&
					this.resumingFrom.currentAnimation.stop(),
				this.pendingAnimation && (ht(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = F.update(() => {
					(ce.hasAnimatedSinceResize = !0),
						(this.currentAnimation = Oc(0, Tr, {
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
				(this.mixTargetDelta && this.mixTargetDelta(Tr), this.currentAnimation.stop()),
				this.completeAnimation();
		}
		applyTransformsToTarget() {
			const i = this.getLead();
			let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
			if (!(!a || !l || !c)) {
				if (
					this !== i &&
					this.layout &&
					c &&
					di(this.options.animationType, this.layout.layoutBox, c.layoutBox)
				) {
					l = this.target || z();
					const f = nt(this.layout.layoutBox.x);
					(l.x.min = i.target.x.min), (l.x.max = l.x.min + f);
					const d = nt(this.layout.layoutBox.y);
					(l.y.min = i.target.y.min), (l.y.max = l.y.min + d);
				}
				rt(a, l), Ft(a, u), Gt(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
			}
		}
		registerSharedNode(i, a) {
			this.sharedNodes.has(i) || this.sharedNodes.set(i, new Dc()), this.sharedNodes.get(i).add(a);
			const c = a.options.initialPromotionConfig;
			a.promote({
				transition: c ? c.transition : void 0,
				preserveFollowOpacity:
					c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0,
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
			const c = this.getStack();
			c && c.promote(this, l),
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
			const c = {};
			for (let u = 0; u < Cr.length; u++) {
				const f = 'rotate' + Cr[u];
				l[f] && ((c[f] = l[f]), i.setStaticValue(f, 0));
			}
			i.render();
			for (const u in c) i.setStaticValue(u, c[u]);
			i.scheduleRender();
		}
		getProjectionStyles(i = {}) {
			var a, l;
			const c = {};
			if (!this.instance || this.isSVG) return c;
			if (this.isVisible) c.visibility = '';
			else return { visibility: 'hidden' };
			const u = this.getTransformTemplate();
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(c.opacity = ''),
					(c.pointerEvents = le(i.pointerEvents) || ''),
					(c.transform = u ? u(this.latestValues, '') : 'none'),
					c
				);
			const f = this.getLead();
			if (!this.projectionDelta || !this.layout || !f.target) {
				const y = {};
				return (
					this.options.layoutId &&
						((y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
						(y.pointerEvents = le(i.pointerEvents) || '')),
					this.hasProjected &&
						!wt(this.latestValues) &&
						((y.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
					y
				);
			}
			const d = f.animationValues || f.latestValues;
			this.applyTransformsToTarget(),
				(c.transform = wr(this.projectionDeltaWithTransform, this.treeScale, d)),
				u && (c.transform = u(d, c.transform));
			const { x: h, y: m } = this.projectionDelta;
			(c.transformOrigin = `${h.origin * 100}% ${m.origin * 100}% 0`),
				f.animationValues
					? (c.opacity =
							f === this
								? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !==
										null && l !== void 0
									? l
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: d.opacityExit)
					: (c.opacity =
							f === this
								? d.opacity !== void 0
									? d.opacity
									: ''
								: d.opacityExit !== void 0
								? d.opacityExit
								: 0);
			for (const y in he) {
				if (d[y] === void 0) continue;
				const { correct: x, applyTo: w } = he[y],
					b = c.transform === 'none' ? d[y] : x(d[y], f);
				if (w) {
					const v = w.length;
					for (let S = 0; S < v; S++) c[w[S]] = b;
				} else c[y] = b;
			}
			return (
				this.options.layoutId &&
					(c.pointerEvents = f === this ? le(i.pointerEvents) || '' : 'none'),
				c
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
				this.root.nodes.forEach(Vr),
				this.root.sharedNodes.clear();
		}
	};
}
function Ic(t) {
	t.updateLayout();
}
function $c(t) {
	var e;
	const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
	if (t.isLead() && t.layout && n && t.hasListeners('didUpdate')) {
		const { layoutBox: r, measuredBox: s } = t.layout,
			{ animationType: o } = t.options,
			i = n.source !== t.layout.source;
		o === 'size'
			? ot((f) => {
					const d = i ? n.measuredBox[f] : n.layoutBox[f],
						h = nt(d);
					(d.min = r[f].min), (d.max = d.min + h);
			  })
			: di(o, n.layoutBox, r) &&
			  ot((f) => {
					const d = i ? n.measuredBox[f] : n.layoutBox[f],
						h = nt(r[f]);
					(d.max = d.min + h),
						t.relativeTarget &&
							!t.currentAnimation &&
							((t.isProjectionDirty = !0), (t.relativeTarget[f].max = t.relativeTarget[f].min + h));
			  });
		const a = Ot();
		Gt(a, r, n.layoutBox);
		const l = Ot();
		i ? Gt(l, t.applyTransform(s, !0), n.measuredBox) : Gt(l, r, n.layoutBox);
		const c = !ci(a);
		let u = !1;
		if (!t.resumeFrom) {
			const f = t.getClosestProjectingParent();
			if (f && !f.resumeFrom) {
				const { snapshot: d, layout: h } = f;
				if (d && h) {
					const m = z();
					Kt(m, n.layoutBox, d.layoutBox);
					const y = z();
					Kt(y, r, h.layoutBox),
						ui(m, y) || (u = !0),
						f.options.layoutRoot &&
							((t.relativeTarget = y), (t.relativeTargetOrigin = m), (t.relativeParent = f));
				}
			}
		}
		t.notifyListeners('didUpdate', {
			layout: r,
			snapshot: n,
			delta: l,
			layoutDelta: a,
			hasLayoutChanged: c,
			hasRelativeTargetChanged: u,
		});
	} else if (t.isLead()) {
		const { onExitComplete: r } = t.options;
		r && r();
	}
	t.options.transition = void 0;
}
function Nc(t) {
	Ct.totalNodes++,
		t.parent &&
			(t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
			t.isSharedProjectionDirty ||
				(t.isSharedProjectionDirty = !!(
					t.isProjectionDirty ||
					t.parent.isProjectionDirty ||
					t.parent.isSharedProjectionDirty
				)),
			t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function _c(t) {
	t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function Uc(t) {
	t.clearSnapshot();
}
function Vr(t) {
	t.clearMeasurements();
}
function Wc(t) {
	t.isLayoutDirty = !1;
}
function Hc(t) {
	const { visualElement: e } = t.options;
	e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'), t.resetTransform();
}
function Ar(t) {
	t.finishAnimation(),
		(t.targetDelta = t.relativeTarget = t.target = void 0),
		(t.isProjectionDirty = !0);
}
function zc(t) {
	t.resolveTargetDelta();
}
function Gc(t) {
	t.calcProjection();
}
function Kc(t) {
	t.resetRotation();
}
function Xc(t) {
	t.removeLeadSnapshot();
}
function Mr(t, e, n) {
	(t.translate = N(e.translate, 0, n)),
		(t.scale = N(e.scale, 1, n)),
		(t.origin = e.origin),
		(t.originPoint = e.originPoint);
}
function Rr(t, e, n, r) {
	(t.min = N(e.min, n.min, r)), (t.max = N(e.max, n.max, r));
}
function Yc(t, e, n, r) {
	Rr(t.x, e.x, n.x, r), Rr(t.y, e.y, n.y, r);
}
function qc(t) {
	return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Zc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	Dr = (t) => typeof navigator < 'u' && navigator.userAgent.toLowerCase().includes(t),
	Er = Dr('applewebkit/') && !Dr('chrome/') ? Math.round : W;
function kr(t) {
	(t.min = Er(t.min)), (t.max = Er(t.max));
}
function Qc(t) {
	kr(t.x), kr(t.y);
}
function di(t, e, n) {
	return t === 'position' || (t === 'preserve-aspect' && !Je(Sr(e), Sr(n), 0.2));
}
const Jc = fi({
		attachResizeListener: (t, e) => ct(t, 'resize', e),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	Ue = { current: void 0 },
	hi = fi({
		measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
		defaultParent: () => {
			if (!Ue.current) {
				const t = new Jc({});
				t.mount(window), t.setOptions({ layoutScroll: !0 }), (Ue.current = t);
			}
			return Ue.current;
		},
		resetTransform: (t, e) => {
			t.style.transform = e !== void 0 ? e : 'none';
		},
		checkIsScrollRoot: (t) => window.getComputedStyle(t).position === 'fixed',
	}),
	tu = { pan: { Feature: yc }, drag: { Feature: gc, ProjectionNode: hi, MeasureLayout: oi } },
	eu = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function nu(t) {
	const e = eu.exec(t);
	if (!e) return [,];
	const [, n, r] = e;
	return [n, r];
}
function rn(t, e, n = 1) {
	const [r, s] = nu(t);
	if (!r) return;
	const o = window.getComputedStyle(e).getPropertyValue(r);
	if (o) {
		const i = o.trim();
		return qs(i) ? parseFloat(i) : i;
	} else return Ge(s) ? rn(s, e, n + 1) : s;
}
function ru(t, { ...e }, n) {
	const r = t.current;
	if (!(r instanceof Element)) return { target: e, transitionEnd: n };
	n && (n = { ...n }),
		t.values.forEach((s) => {
			const o = s.get();
			if (!Ge(o)) return;
			const i = rn(o, r);
			i && s.set(i);
		});
	for (const s in e) {
		const o = e[s];
		if (!Ge(o)) continue;
		const i = rn(o, r);
		i && ((e[s] = i), n || (n = {}), n[s] === void 0 && (n[s] = o));
	}
	return { target: e, transitionEnd: n };
}
const su = new Set([
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
	pi = (t) => su.has(t),
	iu = (t) => Object.keys(t).some(pi),
	Lr = (t) => t === Dt || t === V,
	jr = (t, e) => parseFloat(t.split(', ')[e]),
	Br =
		(t, e) =>
		(n, { transform: r }) => {
			if (r === 'none' || !r) return 0;
			const s = r.match(/^matrix3d\((.+)\)$/);
			if (s) return jr(s[1], e);
			{
				const o = r.match(/^matrix\((.+)\)$/);
				return o ? jr(o[1], t) : 0;
			}
		},
	ou = new Set(['x', 'y', 'z']),
	au = Zt.filter((t) => !ou.has(t));
function lu(t) {
	const e = [];
	return (
		au.forEach((n) => {
			const r = t.getValue(n);
			r !== void 0 && (e.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
		}),
		e.length && t.render(),
		e
	);
}
const $t = {
	width: ({ x: t }, { paddingLeft: e = '0', paddingRight: n = '0' }) =>
		t.max - t.min - parseFloat(e) - parseFloat(n),
	height: ({ y: t }, { paddingTop: e = '0', paddingBottom: n = '0' }) =>
		t.max - t.min - parseFloat(e) - parseFloat(n),
	top: (t, { top: e }) => parseFloat(e),
	left: (t, { left: e }) => parseFloat(e),
	bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
	right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
	x: Br(4, 13),
	y: Br(5, 14),
};
$t.translateX = $t.x;
$t.translateY = $t.y;
const cu = (t, e, n) => {
		const r = e.measureViewportBox(),
			s = e.current,
			o = getComputedStyle(s),
			{ display: i } = o,
			a = {};
		i === 'none' && e.setStaticValue('display', t.display || 'block'),
			n.forEach((c) => {
				a[c] = $t[c](r, o);
			}),
			e.render();
		const l = e.measureViewportBox();
		return (
			n.forEach((c) => {
				const u = e.getValue(c);
				u && u.jump(a[c]), (t[c] = $t[c](l, o));
			}),
			t
		);
	},
	uu = (t, e, n = {}, r = {}) => {
		(e = { ...e }), (r = { ...r });
		const s = Object.keys(e).filter(pi);
		let o = [],
			i = !1;
		const a = [];
		if (
			(s.forEach((l) => {
				const c = t.getValue(l);
				if (!t.hasValue(l)) return;
				let u = n[l],
					f = _t(u);
				const d = e[l];
				let h;
				if (me(d)) {
					const m = d.length,
						y = d[0] === null ? 1 : 0;
					(u = d[y]), (f = _t(u));
					for (let x = y; x < m && d[x] !== null; x++) h ? bn(_t(d[x]) === h) : (h = _t(d[x]));
				} else h = _t(d);
				if (f !== h)
					if (Lr(f) && Lr(h)) {
						const m = c.get();
						typeof m == 'string' && c.set(parseFloat(m)),
							typeof d == 'string'
								? (e[l] = parseFloat(d))
								: Array.isArray(d) && h === V && (e[l] = d.map(parseFloat));
					} else
						f?.transform && h?.transform && (u === 0 || d === 0)
							? u === 0
								? c.set(h.transform(u))
								: (e[l] = f.transform(d))
							: (i || ((o = lu(t)), (i = !0)),
							  a.push(l),
							  (r[l] = r[l] !== void 0 ? r[l] : e[l]),
							  c.jump(d));
			}),
			a.length)
		) {
			const l = a.indexOf('height') >= 0 ? window.pageYOffset : null,
				c = cu(e, t, a);
			return (
				o.length &&
					o.forEach(([u, f]) => {
						t.getValue(u).set(f);
					}),
				t.render(),
				we && l !== null && window.scrollTo({ top: l }),
				{ target: c, transitionEnd: r }
			);
		} else return { target: e, transitionEnd: r };
	};
function fu(t, e, n, r) {
	return iu(e) ? uu(t, e, n, r) : { target: e, transitionEnd: r };
}
const du = (t, e, n, r) => {
		const s = ru(t, e, r);
		return (e = s.target), (r = s.transitionEnd), fu(t, e, n, r);
	},
	sn = { current: null },
	mi = { current: !1 };
function hu() {
	if (((mi.current = !0), !!we))
		if (window.matchMedia) {
			const t = window.matchMedia('(prefers-reduced-motion)'),
				e = () => (sn.current = t.matches);
			t.addListener(e), e();
		} else sn.current = !1;
}
function pu(t, e, n) {
	const { willChange: r } = e;
	for (const s in e) {
		const o = e[s],
			i = n[s];
		if (J(o)) t.addValue(s, o), be(r) && r.add(s);
		else if (J(i)) t.addValue(s, It(o, { owner: t })), be(r) && r.remove(s);
		else if (i !== o)
			if (t.hasValue(s)) {
				const a = t.getValue(s);
				!a.hasAnimated && a.set(o);
			} else {
				const a = t.getStaticValue(s);
				t.addValue(s, It(a !== void 0 ? a : o, { owner: t }));
			}
	}
	for (const s in n) e[s] === void 0 && t.removeValue(s);
	return e;
}
const Or = new WeakMap(),
	gi = Object.keys(Yt),
	mu = gi.length,
	Fr = [
		'AnimationStart',
		'AnimationComplete',
		'Update',
		'BeforeLayoutMeasure',
		'LayoutMeasure',
		'LayoutAnimationStart',
		'LayoutAnimationComplete',
	],
	gu = cn.length;
class yu {
	constructor(
		{ parent: e, props: n, presenceContext: r, reducedMotionConfig: s, visualState: o },
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
			(this.scheduleRender = () => F.render(this.render, !1, !0));
		const { latestValues: a, renderState: l } = o;
		(this.latestValues = a),
			(this.baseTarget = { ...a }),
			(this.initialValues = n.initial ? { ...a } : {}),
			(this.renderState = l),
			(this.parent = e),
			(this.props = n),
			(this.presenceContext = r),
			(this.depth = e ? e.depth + 1 : 0),
			(this.reducedMotionConfig = s),
			(this.options = i),
			(this.isControllingVariants = Te(n)),
			(this.isVariantNode = ts(n)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(e && e.current));
		const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(n, {});
		for (const f in u) {
			const d = u[f];
			a[f] !== void 0 && J(d) && (d.set(a[f], !1), be(c) && c.add(f));
		}
	}
	scrapeMotionValuesFromProps(e, n) {
		return {};
	}
	mount(e) {
		(this.current = e),
			Or.set(e, this),
			this.projection && !this.projection.instance && this.projection.mount(e),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
			mi.current || hu(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === 'never'
					? !1
					: this.reducedMotionConfig === 'always'
					? !0
					: sn.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext);
	}
	unmount() {
		Or.delete(this.current),
			this.projection && this.projection.unmount(),
			ht(this.notifyUpdate),
			ht(this.render),
			this.valueSubscriptions.forEach((e) => e()),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this);
		for (const e in this.events) this.events[e].clear();
		for (const e in this.features) this.features[e].unmount();
		this.current = null;
	}
	bindToMotionValue(e, n) {
		const r = Rt.has(e),
			s = n.on('change', (i) => {
				(this.latestValues[e] = i),
					this.props.onUpdate && F.update(this.notifyUpdate, !1, !0),
					r && this.projection && (this.projection.isTransformDirty = !0);
			}),
			o = n.on('renderRequest', this.scheduleRender);
		this.valueSubscriptions.set(e, () => {
			s(), o();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
			? 0
			: this.sortInstanceNodePosition(this.current, e.current);
	}
	loadFeatures({ children: e, ...n }, r, s, o) {
		let i, a;
		for (let l = 0; l < mu; l++) {
			const c = gi[l],
				{ isEnabled: u, Feature: f, ProjectionNode: d, MeasureLayout: h } = Yt[c];
			d && (i = d),
				u(n) && (!this.features[c] && f && (this.features[c] = new f(this)), h && (a = h));
		}
		if (!this.projection && i) {
			this.projection = new i(this.latestValues, this.parent && this.parent.projection);
			const {
				layoutId: l,
				layout: c,
				drag: u,
				dragConstraints: f,
				layoutScroll: d,
				layoutRoot: h,
			} = n;
			this.projection.setOptions({
				layoutId: l,
				layout: c,
				alwaysMeasureLayout: !!u || (f && jt(f)),
				visualElement: this,
				scheduleRender: () => this.scheduleRender(),
				animationType: typeof c == 'string' ? c : 'both',
				initialPromotionConfig: o,
				layoutScroll: d,
				layoutRoot: h,
			});
		}
		return a;
	}
	updateFeatures() {
		for (const e in this.features) {
			const n = this.features[e];
			n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.options, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : z();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, n) {
		this.latestValues[e] = n;
	}
	makeTargetAnimatable(e, n = !0) {
		return this.makeTargetAnimatableFromInstance(e, this.props, n);
	}
	update(e, n) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = e),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = n);
		for (let r = 0; r < Fr.length; r++) {
			const s = Fr[r];
			this.propEventSubscriptions[s] &&
				(this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
			const o = e['on' + s];
			o && (this.propEventSubscriptions[s] = this.on(s, o));
		}
		(this.prevMotionValues = pu(
			this,
			this.scrapeMotionValuesFromProps(e, this.prevProps),
			this.prevMotionValues
		)),
			this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
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
	getVariantContext(e = !1) {
		if (e) return this.parent ? this.parent.getVariantContext() : void 0;
		if (!this.isControllingVariants) {
			const r = this.parent ? this.parent.getVariantContext() || {} : {};
			return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
		}
		const n = {};
		for (let r = 0; r < gu; r++) {
			const s = cn[r],
				o = this.props[s];
			(Xt(o) || o === !1) && (n[s] = o);
		}
		return n;
	}
	addVariantChild(e) {
		const n = this.getClosestVariantNode();
		if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
	}
	addValue(e, n) {
		n !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, n)),
			this.values.set(e, n),
			(this.latestValues[e] = n.get());
	}
	removeValue(e) {
		this.values.delete(e);
		const n = this.valueSubscriptions.get(e);
		n && (n(), this.valueSubscriptions.delete(e)),
			delete this.latestValues[e],
			this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, n) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let r = this.values.get(e);
		return r === void 0 && n !== void 0 && ((r = It(n, { owner: this })), this.addValue(e, r)), r;
	}
	readValue(e) {
		var n;
		return this.latestValues[e] !== void 0 || !this.current
			? this.latestValues[e]
			: (n = this.getBaseTargetFromProps(this.props, e)) !== null && n !== void 0
			? n
			: this.readValueFromInstance(this.current, e, this.options);
	}
	setBaseTarget(e, n) {
		this.baseTarget[e] = n;
	}
	getBaseTarget(e) {
		var n;
		const { initial: r } = this.props,
			s =
				typeof r == 'string' || typeof r == 'object'
					? (n = vn(this.props, r)) === null || n === void 0
						? void 0
						: n[e]
					: void 0;
		if (r && s !== void 0) return s;
		const o = this.getBaseTargetFromProps(this.props, e);
		return o !== void 0 && !J(o)
			? o
			: this.initialValues[e] !== void 0 && s === void 0
			? void 0
			: this.baseTarget[e];
	}
	on(e, n) {
		return this.events[e] || (this.events[e] = new An()), this.events[e].add(n);
	}
	notify(e, ...n) {
		this.events[e] && this.events[e].notify(...n);
	}
}
class yi extends yu {
	sortInstanceNodePosition(e, n) {
		return e.compareDocumentPosition(n) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, n) {
		return e.style ? e.style[n] : void 0;
	}
	removeValueFromRenderState(e, { vars: n, style: r }) {
		delete n[e], delete r[e];
	}
	makeTargetAnimatableFromInstance(
		{ transition: e, transitionEnd: n, ...r },
		{ transformValues: s },
		o
	) {
		let i = Ol(r, e || {}, this);
		if ((s && (n && (n = s(n)), r && (r = s(r)), i && (i = s(i))), o)) {
			jl(this, r, i);
			const a = du(this, r, i, n);
			(n = a.transitionEnd), (r = a.target);
		}
		return { transition: e, transitionEnd: n, ...r };
	}
}
function vu(t) {
	return window.getComputedStyle(t);
}
class bu extends yi {
	readValueFromInstance(e, n) {
		if (Rt.has(n)) {
			const r = wn(n);
			return (r && r.default) || 0;
		} else {
			const r = vu(e),
				s = (ss(n) ? r.getPropertyValue(n) : r[n]) || 0;
			return typeof s == 'string' ? s.trim() : s;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: n }) {
		return ii(e, n);
	}
	build(e, n, r, s) {
		dn(e, n, r, s.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, n) {
		return yn(e, n);
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		const { children: e } = this.props;
		J(e) &&
			(this.childSubscription = e.on('change', (n) => {
				this.current && (this.current.textContent = `${n}`);
			}));
	}
	renderInstance(e, n, r, s) {
		us(e, n, r, s);
	}
}
class xu extends yi {
	constructor() {
		super(...arguments), (this.isSVGTag = !1);
	}
	getBaseTargetFromProps(e, n) {
		return e[n];
	}
	readValueFromInstance(e, n) {
		if (Rt.has(n)) {
			const r = wn(n);
			return (r && r.default) || 0;
		}
		return (n = fs.has(n) ? n : gn(n)), e.getAttribute(n);
	}
	measureInstanceViewportBox() {
		return z();
	}
	scrapeMotionValuesFromProps(e, n) {
		return hs(e, n);
	}
	build(e, n, r, s) {
		pn(e, n, r, this.isSVGTag, s.transformTemplate);
	}
	renderInstance(e, n, r, s) {
		ds(e, n, r, s);
	}
	mount(e) {
		(this.isSVGTag = mn(e.tagName)), super.mount(e);
	}
}
const Pu = (t, e) =>
		fn(t)
			? new xu(e, { enableHardwareAcceleration: !1 })
			: new bu(e, { enableHardwareAcceleration: !0 }),
	Su = { layout: { ProjectionNode: hi, MeasureLayout: oi } },
	wu = { ...ql, ...ga, ...tu, ...Su },
	vi = To((t, e) => ra(t, e, wu, Pu));
function bi() {
	const t = g.useRef(!1);
	return (
		an(
			() => (
				(t.current = !0),
				() => {
					t.current = !1;
				}
			),
			[]
		),
		t
	);
}
function Cu() {
	const t = bi(),
		[e, n] = g.useState(0),
		r = g.useCallback(() => {
			t.current && n(e + 1);
		}, [e]);
	return [g.useCallback(() => F.postRender(r), [r]), e];
}
class Tu extends g.Component {
	getSnapshotBeforeUpdate(e) {
		const n = this.props.childRef.current;
		if (n && e.isPresent && !this.props.isPresent) {
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
function Vu({ children: t, isPresent: e }) {
	const n = g.useId(),
		r = g.useRef(null),
		s = g.useRef({ width: 0, height: 0, top: 0, left: 0 });
	return (
		g.useInsertionEffect(() => {
			const { width: o, height: i, top: a, left: l } = s.current;
			if (e || !r.current || !o || !i) return;
			r.current.dataset.motionPopId = n;
			const c = document.createElement('style');
			return (
				document.head.appendChild(c),
				c.sheet &&
					c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
				() => {
					document.head.removeChild(c);
				}
			);
		}, [e]),
		g.createElement(Tu, { isPresent: e, childRef: r, sizeRef: s }, g.cloneElement(t, { ref: r }))
	);
}
const We = ({
	children: t,
	initial: e,
	isPresent: n,
	onExitComplete: r,
	custom: s,
	presenceAffectsLayout: o,
	mode: i,
}) => {
	const a = ps(Au),
		l = g.useId(),
		c = g.useMemo(
			() => ({
				id: l,
				initial: e,
				isPresent: n,
				custom: s,
				onExitComplete: (u) => {
					a.set(u, !0);
					for (const f of a.values()) if (!f) return;
					r && r();
				},
				register: (u) => (a.set(u, !1), () => a.delete(u)),
			}),
			o ? void 0 : [n]
		);
	return (
		g.useMemo(() => {
			a.forEach((u, f) => a.set(f, !1));
		}, [n]),
		g.useEffect(() => {
			!n && !a.size && r && r();
		}, [n]),
		i === 'popLayout' && (t = g.createElement(Vu, { isPresent: n }, t)),
		g.createElement(Se.Provider, { value: c }, t)
	);
};
function Au() {
	return new Map();
}
function Mu(t) {
	return g.useEffect(() => () => t(), []);
}
const Lt = (t) => t.key || '';
function Ru(t, e) {
	t.forEach((n) => {
		const r = Lt(n);
		e.set(r, n);
	});
}
function Du(t) {
	const e = [];
	return (
		g.Children.forEach(t, (n) => {
			g.isValidElement(n) && e.push(n);
		}),
		e
	);
}
const Eu = ({
	children: t,
	custom: e,
	initial: n = !0,
	onExitComplete: r,
	exitBeforeEnter: s,
	presenceAffectsLayout: o = !0,
	mode: i = 'sync',
}) => {
	const a = g.useContext(un).forceRender || Cu()[0],
		l = bi(),
		c = Du(t);
	let u = c;
	const f = g.useRef(new Map()).current,
		d = g.useRef(u),
		h = g.useRef(new Map()).current,
		m = g.useRef(!0);
	if (
		(an(() => {
			(m.current = !1), Ru(c, h), (d.current = u);
		}),
		Mu(() => {
			(m.current = !0), h.clear(), f.clear();
		}),
		m.current)
	)
		return g.createElement(
			g.Fragment,
			null,
			u.map((b) =>
				g.createElement(
					We,
					{
						key: Lt(b),
						isPresent: !0,
						initial: n ? void 0 : !1,
						presenceAffectsLayout: o,
						mode: i,
					},
					b
				)
			)
		);
	u = [...u];
	const y = d.current.map(Lt),
		x = c.map(Lt),
		w = y.length;
	for (let b = 0; b < w; b++) {
		const v = y[b];
		x.indexOf(v) === -1 && !f.has(v) && f.set(v, void 0);
	}
	return (
		i === 'wait' && f.size && (u = []),
		f.forEach((b, v) => {
			if (x.indexOf(v) !== -1) return;
			const S = h.get(v);
			if (!S) return;
			const C = y.indexOf(v);
			let D = b;
			if (!D) {
				const A = () => {
					h.delete(v), f.delete(v);
					const T = d.current.findIndex((M) => M.key === v);
					if ((d.current.splice(T, 1), !f.size)) {
						if (((d.current = c), l.current === !1)) return;
						a(), r && r();
					}
				};
				(D = g.createElement(
					We,
					{
						key: Lt(S),
						isPresent: !1,
						onExitComplete: A,
						custom: e,
						presenceAffectsLayout: o,
						mode: i,
					},
					S
				)),
					f.set(v, D);
			}
			u.splice(C, 0, D);
		}),
		(u = u.map((b) => {
			const v = b.key;
			return f.has(v)
				? b
				: g.createElement(We, { key: Lt(b), isPresent: !0, presenceAffectsLayout: o, mode: i }, b);
		})),
		g.createElement(g.Fragment, null, f.size ? u : u.map((b) => g.cloneElement(b)))
	);
};
var Ir = {
	ease: [0.36, 0.66, 0.4, 1],
	easeIn: [0.4, 0, 1, 1],
	easeOut: [0, 0, 0.2, 1],
	easeInOut: [0.4, 0, 0.2, 1],
	spring: [0.155, 1.105, 0.295, 1.12],
	springOut: [0.57, -0.15, 0.62, 0.07],
	softSpring: [0.16, 1.11, 0.3, 1.02],
};
function ku(t, e) {
	let {
			elementType: n = 'button',
			isDisabled: r,
			onPress: s,
			onPressStart: o,
			onPressEnd: i,
			onPressChange: a,
			preventFocusOnPress: l,
			allowFocusWhenDisabled: c,
			onClick: u,
			href: f,
			target: d,
			rel: h,
			type: m = 'button',
			allowTextSelectionOnPress: y,
		} = t,
		x;
	n === 'button'
		? (x = { type: m, disabled: r })
		: (x = {
				role: 'button',
				tabIndex: r ? void 0 : 0,
				href: n === 'a' && r ? void 0 : f,
				target: n === 'a' ? d : void 0,
				type: n === 'input' ? m : void 0,
				disabled: n === 'input' ? r : void 0,
				'aria-disabled': !r || n === 'input' ? void 0 : r,
				rel: n === 'a' ? h : void 0,
		  });
	let { pressProps: w, isPressed: b } = $i({
			onPressStart: o,
			onPressEnd: i,
			onPressChange: a,
			onPress: s,
			isDisabled: r,
			preventFocusOnPress: l,
			allowTextSelectionOnPress: y,
			ref: e,
		}),
		{ focusableProps: v } = Ni(t, e);
	c && (v.tabIndex = r ? -1 : v.tabIndex);
	let S = Vt(v, w, _i(t, { labelable: !0 }));
	return {
		isPressed: b,
		buttonProps: Vt(x, S, {
			'aria-haspopup': t['aria-haspopup'],
			'aria-expanded': t['aria-expanded'],
			'aria-controls': t['aria-controls'],
			'aria-pressed': t['aria-pressed'],
			onClick: (C) => {
				u?.(C);
			},
		}),
	};
}
function Lu(t = {}) {
	let { isReadOnly: e } = t,
		[n, r] = Gr(t.isSelected, t.defaultSelected || !1, t.onChange);
	function s(i) {
		e || r(i);
	}
	function o() {
		e || r(!n);
	}
	return { isSelected: n, setSelected: s, toggle: o };
}
var ue = 'right-scroll-bar-position',
	fe = 'width-before-scroll-bar',
	ju = 'with-scroll-bars-hidden',
	Bu = '--removed-body-scroll-bar-size';
function Ou(t, e) {
	return typeof t == 'function' ? t(e) : t && (t.current = e), t;
}
function Fu(t, e) {
	var n = g.useState(function () {
		return {
			value: t,
			callback: e,
			facade: {
				get current() {
					return n.value;
				},
				set current(r) {
					var s = n.value;
					s !== r && ((n.value = r), n.callback(r, s));
				},
			},
		};
	})[0];
	return (n.callback = e), n.facade;
}
function Iu(t, e) {
	return Fu(e || null, function (n) {
		return t.forEach(function (r) {
			return Ou(r, n);
		});
	});
}
function $u(t) {
	return t;
}
function Nu(t, e) {
	e === void 0 && (e = $u);
	var n = [],
		r = !1,
		s = {
			read: function () {
				if (r)
					throw new Error(
						'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
					);
				return n.length ? n[n.length - 1] : t;
			},
			useMedium: function (o) {
				var i = e(o, r);
				return (
					n.push(i),
					function () {
						n = n.filter(function (a) {
							return a !== i;
						});
					}
				);
			},
			assignSyncMedium: function (o) {
				for (r = !0; n.length; ) {
					var i = n;
					(n = []), i.forEach(o);
				}
				n = {
					push: function (a) {
						return o(a);
					},
					filter: function () {
						return n;
					},
				};
			},
			assignMedium: function (o) {
				r = !0;
				var i = [];
				if (n.length) {
					var a = n;
					(n = []), a.forEach(o), (i = n);
				}
				var l = function () {
						var u = i;
						(i = []), u.forEach(o);
					},
					c = function () {
						return Promise.resolve().then(l);
					};
				c(),
					(n = {
						push: function (u) {
							i.push(u), c();
						},
						filter: function (u) {
							return (i = i.filter(u)), n;
						},
					});
			},
		};
	return s;
}
function _u(t) {
	t === void 0 && (t = {});
	var e = Nu(null);
	return (e.options = at({ async: !0, ssr: !1 }, t)), e;
}
var xi = function (t) {
	var e = t.sideCar,
		n = Kr(t, ['sideCar']);
	if (!e) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
	var r = e.read();
	if (!r) throw new Error('Sidecar medium not found');
	return g.createElement(r, at({}, n));
};
xi.isSideCarExport = !0;
function Uu(t, e) {
	return t.useMedium(e), xi;
}
var Pi = _u(),
	He = function () {},
	Re = g.forwardRef(function (t, e) {
		var n = g.useRef(null),
			r = g.useState({ onScrollCapture: He, onWheelCapture: He, onTouchMoveCapture: He }),
			s = r[0],
			o = r[1],
			i = t.forwardProps,
			a = t.children,
			l = t.className,
			c = t.removeScrollBar,
			u = t.enabled,
			f = t.shards,
			d = t.sideCar,
			h = t.noIsolation,
			m = t.inert,
			y = t.allowPinchZoom,
			x = t.as,
			w = x === void 0 ? 'div' : x,
			b = t.gapMode,
			v = Kr(t, [
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
			S = d,
			C = Iu([n, e]),
			D = at(at({}, v), s);
		return g.createElement(
			g.Fragment,
			null,
			u &&
				g.createElement(S, {
					sideCar: Pi,
					removeScrollBar: c,
					shards: f,
					noIsolation: h,
					inert: m,
					setCallbacks: o,
					allowPinchZoom: !!y,
					lockRef: n,
					gapMode: b,
				}),
			i
				? g.cloneElement(g.Children.only(a), at(at({}, D), { ref: C }))
				: g.createElement(w, at({}, D, { className: l, ref: C }), a)
		);
	});
Re.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Re.classNames = { fullWidth: fe, zeroRight: ue };
var $r,
	Wu = function () {
		if ($r) return $r;
		if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
	};
function Hu() {
	if (!document) return null;
	var t = document.createElement('style');
	t.type = 'text/css';
	var e = Wu();
	return e && t.setAttribute('nonce', e), t;
}
function zu(t, e) {
	t.styleSheet ? (t.styleSheet.cssText = e) : t.appendChild(document.createTextNode(e));
}
function Gu(t) {
	var e = document.head || document.getElementsByTagName('head')[0];
	e.appendChild(t);
}
var Ku = function () {
		var t = 0,
			e = null;
		return {
			add: function (n) {
				t == 0 && (e = Hu()) && (zu(e, n), Gu(e)), t++;
			},
			remove: function () {
				t--, !t && e && (e.parentNode && e.parentNode.removeChild(e), (e = null));
			},
		};
	},
	Xu = function () {
		var t = Ku();
		return function (e, n) {
			g.useEffect(
				function () {
					return (
						t.add(e),
						function () {
							t.remove();
						}
					);
				},
				[e && n]
			);
		};
	},
	Si = function () {
		var t = Xu(),
			e = function (n) {
				var r = n.styles,
					s = n.dynamic;
				return t(r, s), null;
			};
		return e;
	},
	Yu = { left: 0, top: 0, right: 0, gap: 0 },
	ze = function (t) {
		return parseInt(t || '', 10) || 0;
	},
	qu = function (t) {
		var e = window.getComputedStyle(document.body),
			n = e[t === 'padding' ? 'paddingLeft' : 'marginLeft'],
			r = e[t === 'padding' ? 'paddingTop' : 'marginTop'],
			s = e[t === 'padding' ? 'paddingRight' : 'marginRight'];
		return [ze(n), ze(r), ze(s)];
	},
	Zu = function (t) {
		if ((t === void 0 && (t = 'margin'), typeof window > 'u')) return Yu;
		var e = qu(t),
			n = document.documentElement.clientWidth,
			r = window.innerWidth;
		return { left: e[0], top: e[1], right: e[2], gap: Math.max(0, r - n + e[2] - e[0]) };
	},
	Qu = Si(),
	Ju = function (t, e, n, r) {
		var s = t.left,
			o = t.top,
			i = t.right,
			a = t.gap;
		return (
			n === void 0 && (n = 'margin'),
			`
  .`
				.concat(
					ju,
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
						e && 'position: relative '.concat(r, ';'),
						n === 'margin' &&
							`
    padding-left: `
								.concat(
									s,
									`px;
    padding-top: `
								)
								.concat(
									o,
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
					ue,
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
					fe,
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
				.concat(ue, ' .')
				.concat(
					ue,
					` {
    right: 0 `
				)
				.concat(
					r,
					`;
  }
  
  .`
				)
				.concat(fe, ' .')
				.concat(
					fe,
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
				.concat(Bu, ': ')
				.concat(
					a,
					`px;
  }
`
				)
		);
	},
	tf = function (t) {
		var e = t.noRelative,
			n = t.noImportant,
			r = t.gapMode,
			s = r === void 0 ? 'margin' : r,
			o = g.useMemo(
				function () {
					return Zu(s);
				},
				[s]
			);
		return g.createElement(Qu, { styles: Ju(o, !e, s, n ? '' : '!important') });
	},
	on = !1;
if (typeof window < 'u')
	try {
		var oe = Object.defineProperty({}, 'passive', {
			get: function () {
				return (on = !0), !0;
			},
		});
		window.addEventListener('test', oe, oe), window.removeEventListener('test', oe, oe);
	} catch {
		on = !1;
	}
var Et = on ? { passive: !1 } : !1,
	ef = function (t) {
		return t.tagName === 'TEXTAREA';
	},
	wi = function (t, e) {
		var n = window.getComputedStyle(t);
		return n[e] !== 'hidden' && !(n.overflowY === n.overflowX && !ef(t) && n[e] === 'visible');
	},
	nf = function (t) {
		return wi(t, 'overflowY');
	},
	rf = function (t) {
		return wi(t, 'overflowX');
	},
	Nr = function (t, e) {
		var n = e.ownerDocument,
			r = e;
		do {
			typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host);
			var s = Ci(t, r);
			if (s) {
				var o = Ti(t, r),
					i = o[1],
					a = o[2];
				if (i > a) return !0;
			}
			r = r.parentNode;
		} while (r && r !== n.body);
		return !1;
	},
	sf = function (t) {
		var e = t.scrollTop,
			n = t.scrollHeight,
			r = t.clientHeight;
		return [e, n, r];
	},
	of = function (t) {
		var e = t.scrollLeft,
			n = t.scrollWidth,
			r = t.clientWidth;
		return [e, n, r];
	},
	Ci = function (t, e) {
		return t === 'v' ? nf(e) : rf(e);
	},
	Ti = function (t, e) {
		return t === 'v' ? sf(e) : of(e);
	},
	af = function (t, e) {
		return t === 'h' && e === 'rtl' ? -1 : 1;
	},
	lf = function (t, e, n, r, s) {
		var o = af(t, window.getComputedStyle(e).direction),
			i = o * r,
			a = n.target,
			l = e.contains(a),
			c = !1,
			u = i > 0,
			f = 0,
			d = 0;
		do {
			var h = Ti(t, a),
				m = h[0],
				y = h[1],
				x = h[2],
				w = y - x - o * m;
			(m || w) && Ci(t, a) && ((f += w), (d += m)),
				a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
		} while ((!l && a !== document.body) || (l && (e.contains(a) || e === a)));
		return (
			((u && ((s && Math.abs(f) < 1) || (!s && i > f))) ||
				(!u && ((s && Math.abs(d) < 1) || (!s && -i > d)))) &&
				(c = !0),
			c
		);
	},
	ae = function (t) {
		return 'changedTouches' in t
			? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
			: [0, 0];
	},
	_r = function (t) {
		return [t.deltaX, t.deltaY];
	},
	Ur = function (t) {
		return t && 'current' in t ? t.current : t;
	},
	cf = function (t, e) {
		return t[0] === e[0] && t[1] === e[1];
	},
	uf = function (t) {
		return `
  .block-interactivity-`
			.concat(
				t,
				` {pointer-events: none;}
  .allow-interactivity-`
			)
			.concat(
				t,
				` {pointer-events: all;}
`
			);
	},
	ff = 0,
	kt = [];
function df(t) {
	var e = g.useRef([]),
		n = g.useRef([0, 0]),
		r = g.useRef(),
		s = g.useState(ff++)[0],
		o = g.useState(Si)[0],
		i = g.useRef(t);
	g.useEffect(
		function () {
			i.current = t;
		},
		[t]
	),
		g.useEffect(
			function () {
				if (t.inert) {
					document.body.classList.add('block-interactivity-'.concat(s));
					var y = ro([t.lockRef.current], (t.shards || []).map(Ur), !0).filter(Boolean);
					return (
						y.forEach(function (x) {
							return x.classList.add('allow-interactivity-'.concat(s));
						}),
						function () {
							document.body.classList.remove('block-interactivity-'.concat(s)),
								y.forEach(function (x) {
									return x.classList.remove('allow-interactivity-'.concat(s));
								});
						}
					);
				}
			},
			[t.inert, t.lockRef.current, t.shards]
		);
	var a = g.useCallback(function (y, x) {
			if ('touches' in y && y.touches.length === 2) return !i.current.allowPinchZoom;
			var w = ae(y),
				b = n.current,
				v = 'deltaX' in y ? y.deltaX : b[0] - w[0],
				S = 'deltaY' in y ? y.deltaY : b[1] - w[1],
				C,
				D = y.target,
				A = Math.abs(v) > Math.abs(S) ? 'h' : 'v';
			if ('touches' in y && A === 'h' && D.type === 'range') return !1;
			var T = Nr(A, D);
			if (!T) return !0;
			if ((T ? (C = A) : ((C = A === 'v' ? 'h' : 'v'), (T = Nr(A, D))), !T)) return !1;
			if ((!r.current && 'changedTouches' in y && (v || S) && (r.current = C), !C)) return !0;
			var M = r.current || C;
			return lf(M, x, y, M === 'h' ? v : S, !0);
		}, []),
		l = g.useCallback(function (y) {
			var x = y;
			if (!(!kt.length || kt[kt.length - 1] !== o)) {
				var w = 'deltaY' in x ? _r(x) : ae(x),
					b = e.current.filter(function (C) {
						return (
							C.name === x.type &&
							(C.target === x.target || x.target === C.shadowParent) &&
							cf(C.delta, w)
						);
					})[0];
				if (b && b.should) {
					x.cancelable && x.preventDefault();
					return;
				}
				if (!b) {
					var v = (i.current.shards || [])
							.map(Ur)
							.filter(Boolean)
							.filter(function (C) {
								return C.contains(x.target);
							}),
						S = v.length > 0 ? a(x, v[0]) : !i.current.noIsolation;
					S && x.cancelable && x.preventDefault();
				}
			}
		}, []),
		c = g.useCallback(function (y, x, w, b) {
			var v = { name: y, delta: x, target: w, should: b, shadowParent: hf(w) };
			e.current.push(v),
				setTimeout(function () {
					e.current = e.current.filter(function (S) {
						return S !== v;
					});
				}, 1);
		}, []),
		u = g.useCallback(function (y) {
			(n.current = ae(y)), (r.current = void 0);
		}, []),
		f = g.useCallback(function (y) {
			c(y.type, _r(y), y.target, a(y, t.lockRef.current));
		}, []),
		d = g.useCallback(function (y) {
			c(y.type, ae(y), y.target, a(y, t.lockRef.current));
		}, []);
	g.useEffect(function () {
		return (
			kt.push(o),
			t.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: d }),
			document.addEventListener('wheel', l, Et),
			document.addEventListener('touchmove', l, Et),
			document.addEventListener('touchstart', u, Et),
			function () {
				(kt = kt.filter(function (y) {
					return y !== o;
				})),
					document.removeEventListener('wheel', l, Et),
					document.removeEventListener('touchmove', l, Et),
					document.removeEventListener('touchstart', u, Et);
			}
		);
	}, []);
	var h = t.removeScrollBar,
		m = t.inert;
	return g.createElement(
		g.Fragment,
		null,
		m ? g.createElement(o, { styles: uf(s) }) : null,
		h ? g.createElement(tf, { gapMode: t.gapMode }) : null
	);
}
function hf(t) {
	for (var e = null; t !== null; )
		t instanceof ShadowRoot && ((e = t.host), (t = t.host)), (t = t.parentNode);
	return e;
}
const pf = Uu(Pi, df);
var Vi = g.forwardRef(function (t, e) {
	return g.createElement(Re, at({}, t, { ref: e, sideCar: pf }));
});
Vi.classNames = Re.classNames;
const mf = Vi;
var [gf, Nt] = oo({
		name: 'NavbarContext',
		strict: !0,
		errorMessage:
			'useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />',
	}),
	yf = {
		enter: {
			height: 'calc(100vh - var(--navbar-height) - 1px)',
			transition: { duration: 0.3, easings: 'easeOut' },
		},
		exit: { height: 0, transition: { duration: 0.25, easings: 'easeIn' } },
	},
	Ai = At((t, e) => {
		var n, r;
		const { className: s, children: o, portalContainer: i, motionProps: a, style: l, ...c } = t,
			u = Mt(e),
			{ slots: f, isMenuOpen: d, height: h, disableAnimation: m, classNames: y } = Nt(),
			x = ut(y?.menu, s),
			w = g.useCallback(
				({ children: v }) =>
					k.jsx(mf, { forwardProps: !0, enabled: d, removeScrollBar: !1, children: v }),
				[d]
			),
			b = m
				? k.jsx(w, {
						children: k.jsx('ul', {
							ref: u,
							className: (n = f.menu) == null ? void 0 : n.call(f, { class: x }),
							'data-open': st(d),
							style: { '--navbar-height': h },
							...c,
							children: o,
						}),
				  })
				: k.jsx(Eu, {
						mode: 'wait',
						children: d
							? k.jsx(w, {
									children: k.jsx(vi.ul, {
										ref: u,
										layoutScroll: !0,
										animate: 'enter',
										className: (r = f.menu) == null ? void 0 : r.call(f, { class: x }),
										'data-open': st(d),
										exit: 'exit',
										initial: 'exit',
										style: { '--navbar-height': h, ...l },
										variants: yf,
										...Vt(a, c),
										children: o,
									}),
							  })
							: null,
				  });
		return k.jsx(io, { portalContainer: i, children: b });
	});
Ai.displayName = 'NextUI.NavbarMenu';
var Mi = Ai,
	vf = {
		visible: { y: 0, transition: { ease: Ir.easeOut } },
		hidden: { y: '-100%', transition: { ease: Ir.easeIn } },
	},
	bf = typeof window < 'u';
function Wr(t) {
	return bf
		? t
			? { x: t.scrollLeft, y: t.scrollTop }
			: { x: window.scrollX, y: window.scrollY }
		: { x: 0, y: 0 };
}
var xf = (t) => {
	const { elementRef: e, delay: n = 30, callback: r, isEnabled: s } = t,
		o = g.useRef(s ? Wr(e?.current) : { x: 0, y: 0 });
	let i = null;
	const a = () => {
		const l = Wr(e?.current);
		typeof r == 'function' && r({ prevPos: o.current, currPos: l }), (o.current = l), (i = null);
	};
	return (
		g.useEffect(() => {
			if (!s) return;
			const l = () => {
					n ? i === null && (i = setTimeout(a, n)) : a();
				},
				c = e?.current || window;
			return c.addEventListener('scroll', l), () => c.removeEventListener('scroll', l);
		}, [e?.current, n, s]),
		o.current
	);
};
function Pf(t) {
	var e;
	const [n, r] = Ui(t, kn.variantKeys),
		{
			ref: s,
			as: o,
			parentRef: i,
			height: a = '4rem',
			shouldHideOnScroll: l = !1,
			disableScrollHandler: c = !1,
			onScrollPositionChange: u,
			isMenuOpen: f,
			isMenuDefaultOpen: d,
			onMenuOpenChange: h = () => {},
			motionProps: m,
			className: y,
			classNames: x,
			...w
		} = n,
		b = o || 'nav',
		v = Mt(s),
		S = g.useRef(0),
		C = g.useRef(0),
		[D, A] = g.useState(!1),
		T = g.useCallback(
			(R) => {
				h(R || !1);
			},
			[h]
		),
		[M, X] = Gr(f, d, T),
		G = () => {
			if (v.current) {
				const R = v.current.offsetWidth;
				R !== S.current && (S.current = R);
			}
		};
	Wi({
		ref: v,
		onResize: () => {
			var R;
			((R = v.current) == null ? void 0 : R.offsetWidth) !== S.current && (G(), X(!1));
		},
	}),
		g.useEffect(() => {
			var R;
			G(), (C.current = ((R = v.current) == null ? void 0 : R.offsetHeight) || 0);
		}, []);
	const Z = g.useMemo(() => kn({ ...r, hideOnScroll: l }), [...Object.values(r), l]),
		tt = ut(x?.base, y);
	xf({
		elementRef: i,
		isEnabled: l || !c,
		callback: ({ prevPos: R, currPos: et }) => {
			u?.(et.y),
				l &&
					A((H) => {
						const it = et.y > R.y && et.y > C.current;
						return it !== H ? it : H;
					});
		},
	});
	const $ = (R = {}) => ({
			...Vt(w, R),
			'data-hidden': st(D),
			'data-menu-open': st(M),
			ref: v,
			className: Z.base({ class: ut(tt, R?.className) }),
			style: { '--navbar-height': a, ...R?.style },
		}),
		B = (R = {}) => ({
			...R,
			'data-menu-open': st(M),
			className: Z.wrapper({ class: ut(x?.wrapper, R?.className) }),
		});
	return {
		Component: b,
		slots: Z,
		domRef: v,
		height: a,
		isHidden: D,
		disableAnimation: (e = t.disableAnimation) != null ? e : !1,
		shouldHideOnScroll: l,
		isMenuOpen: M,
		classNames: x,
		setIsMenuOpen: X,
		motionProps: m,
		getBaseProps: $,
		getWrapperProps: B,
	};
}
var Ri = At((t, e) => {
	const { children: n, ...r } = t,
		s = Pf({ ...r, ref: e }),
		o = s.Component,
		[i, a] = go(n, Mi),
		l = k.jsxs(k.Fragment, {
			children: [k.jsx('header', { ...s.getWrapperProps(), children: i }), a],
		});
	return k.jsx(gf, {
		value: s,
		children: s.shouldHideOnScroll
			? k.jsx(vi.nav, {
					animate: s.isHidden ? 'hidden' : 'visible',
					initial: !1,
					variants: vf,
					...Vt(s.getBaseProps(), s.motionProps),
					children: l,
			  })
			: k.jsx(o, { ...s.getBaseProps(), children: l }),
	});
});
Ri.displayName = 'NextUI.Navbar';
var Sf = Ri,
	Di = At((t, e) => {
		var n;
		const { as: r, className: s, children: o, ...i } = t,
			a = r || 'div',
			l = Mt(e),
			{ slots: c, classNames: u } = Nt(),
			f = ut(u?.brand, s);
		return k.jsx(a, {
			ref: l,
			className: (n = c.brand) == null ? void 0 : n.call(c, { class: f }),
			...i,
			children: o,
		});
	});
Di.displayName = 'NextUI.NavbarBrand';
var wf = Di,
	Ei = At((t, e) => {
		var n;
		const { as: r, className: s, children: o, justify: i = 'start', ...a } = t,
			l = r || 'ul',
			c = Mt(e),
			{ slots: u, classNames: f } = Nt(),
			d = ut(f?.content, s);
		return k.jsx(l, {
			ref: c,
			className: (n = u.content) == null ? void 0 : n.call(u, { class: d }),
			'data-justify': i,
			...a,
			children: o,
		});
	});
Ei.displayName = 'NextUI.NavbarContent';
var Cf = Ei,
	ki = At((t, e) => {
		var n;
		const { as: r, className: s, children: o, isActive: i, ...a } = t,
			l = r || 'li',
			c = Mt(e),
			{ slots: u, classNames: f } = Nt(),
			d = ut(f?.item, s);
		return k.jsx(l, {
			ref: c,
			className: (n = u.item) == null ? void 0 : n.call(u, { class: d }),
			'data-active': st(i),
			...a,
			children: o,
		});
	});
ki.displayName = 'NextUI.NavbarItem';
var Tf = ki,
	Li = At((t, e) => {
		var n;
		const { className: r, children: s, isActive: o, ...i } = t,
			a = Mt(e),
			{ slots: l, isMenuOpen: c, classNames: u } = Nt(),
			f = ut(u?.menuItem, r);
		return k.jsx('li', {
			ref: a,
			className: (n = l.menuItem) == null ? void 0 : n.call(l, { class: f }),
			'data-active': st(o),
			'data-open': st(c),
			...i,
			children: s,
		});
	});
Li.displayName = 'NextUI.NavbarMenuItem';
var Vf = Li;
function Af(t, e, n) {
	const { isSelected: r } = e,
		{ isPressed: s, buttonProps: o } = ku({ ...t, onPress: Hi(e.toggle, t.onPress) }, n);
	return { isPressed: s, buttonProps: Vt(o, { 'aria-pressed': r }) };
}
var ji = At((t, e) => {
	var n;
	const { as: r, icon: s, className: o, onChange: i, autoFocus: a, srOnlyText: l, ...c } = t,
		u = r || 'button',
		f = Mt(e),
		{ slots: d, classNames: h, isMenuOpen: m, setIsMenuOpen: y } = Nt(),
		w = Lu({
			...c,
			isSelected: m,
			onChange: (G) => {
				i?.(G), y(G);
			},
		}),
		{ buttonProps: b, isPressed: v } = Af(t, w, f),
		{ isFocusVisible: S, focusProps: C } = zi({ autoFocus: a }),
		{ isHovered: D, hoverProps: A } = Gi({}),
		T = ut(h?.toggle, o),
		M = g.useMemo(
			() =>
				typeof s == 'function'
					? s(m ?? !1)
					: s || k.jsx('span', { className: d.toggleIcon({ class: h?.toggleIcon }) }),
			[s, m, d.toggleIcon, h?.toggleIcon]
		),
		X = g.useMemo(
			() => l || (w.isSelected ? 'close navigation menu' : 'open navigation menu'),
			[l, m]
		);
	return k.jsxs(u, {
		ref: f,
		className: (n = d.toggle) == null ? void 0 : n.call(d, { class: T }),
		'data-focus-visible': st(S),
		'data-hover': st(D),
		'data-open': st(m),
		'data-pressed': st(v),
		...Vt(b, C, A, c),
		children: [k.jsx('span', { className: d.srOnly(), children: X }), M],
	});
});
ji.displayName = 'NextUI.NavbarMenuToggle';
var Mf = ji;
function Lf() {
	const [t, e] = Q.useState(!1),
		n = [
			{ title: 'Home', href: '#banner' },
			{ title: 'About', href: '#about' },
			{ title: 'Services', href: '#services' },
			{ title: 'Contact', href: '#contact' },
		];
	return k.jsxs(Sf, {
		onMenuOpenChange: e,
		isMenuOpen: t,
		maxWidth: '2xl',
		className: 'fixed bg-primary-50',
		children: [
			k.jsx(wf, { children: k.jsx(Ki, { size: 'small' }) }),
			k.jsx(Mf, { 'aria-label': t ? 'Close menu' : 'Open menu', className: 'sm:hidden' }),
			k.jsx(Cf, {
				className: 'hidden sm:flex sm:gap-8 md:gap-16 lg:gap-32',
				justify: 'center',
				children: n.map((r, s) =>
					k.jsx(
						Tf,
						{
							style: { cursor: 'pointer' },
							children: k.jsx(Dn, {
								className: 'w-full',
								size: 'lg',
								onClick: () => En(r.href, () => e(!1)),
								children: k.jsx('p', {
									className: 'font-bold text-foreground-50',
									children: r.title,
								}),
							}),
						},
						`${r.title}-${s}`
					)
				),
			}),
			k.jsx(Mi, {
				children: n.map((r, s) =>
					k.jsx(
						Vf,
						{
							children: k.jsx(Dn, {
								color: 'foreground',
								className: 'w-full',
								size: 'lg',
								onClick: () => En(r.href, () => e(!1)),
								children: r.title,
							}),
						},
						`${r.title}-${s}`
					)
				),
			}),
		],
	});
}
export { Lf as NavbarHome };
