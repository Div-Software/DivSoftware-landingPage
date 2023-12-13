import {
	t as Je,
	d as Qe,
	v as Ee,
	x as Ke,
	w as X,
	y as Y,
	F as D,
	u as b,
	D as A,
	k as re,
	S as et,
	a3 as ge,
	E as tt,
	a4 as nt,
	A as rt,
	B as at,
	z as ot,
	C as st,
} from './index.8CcIiJ4E.js';
import { r as f } from './index.J00EDW8g.js';
import { g as it, b as lt } from './i18nInstance.ugchUh8N.js';
import { aj as ct, g as ue } from './index.9xSjhrF6.js';
import './index.0PBxFPxt.js';
import './_commonjsHelpers.5-cIlDoe.js';
function ut() {
	if (console && console.warn) {
		for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
		typeof t[0] == 'string' && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
	}
}
const me = {};
function pe() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	(typeof t[0] == 'string' && me[t[0]]) ||
		(typeof t[0] == 'string' && (me[t[0]] = new Date()), ut(...t));
}
const ke = (e, t) => () => {
	if (e.isInitialized) t();
	else {
		const n = () => {
			setTimeout(() => {
				e.off('initialized', n);
			}, 0),
				t();
		};
		e.on('initialized', n);
	}
};
function be(e, t, n) {
	e.loadNamespaces(t, ke(e, n));
}
function ye(e, t, n, a) {
	typeof n == 'string' && (n = [n]),
		n.forEach((s) => {
			e.options.ns.indexOf(s) < 0 && e.options.ns.push(s);
		}),
		e.loadLanguages(t, ke(e, a));
}
function ft(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	const a = t.languages[0],
		s = t.options ? t.options.fallbackLng : !1,
		o = t.languages[t.languages.length - 1];
	if (a.toLowerCase() === 'cimode') return !0;
	const l = (u, d) => {
		const c = t.services.backendConnector.state[`${u}|${d}`];
		return c === -1 || c === 2;
	};
	return n.bindI18n &&
		n.bindI18n.indexOf('languageChanging') > -1 &&
		t.services.backendConnector.backend &&
		t.isLanguageChangingTo &&
		!l(t.isLanguageChangingTo, e)
		? !1
		: !!(
				t.hasResourceBundle(a, e) ||
				!t.services.backendConnector.backend ||
				(t.options.resources && !t.options.partialBundledLanguages) ||
				(l(a, e) && (!s || l(o, e)))
		  );
}
function dt(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
	return !t.languages || !t.languages.length
		? (pe('i18n.languages were undefined or empty', t.languages), !0)
		: t.options.ignoreJSONStructure !== void 0
		? t.hasLoadedNamespace(e, {
				lng: n.lng,
				precheck: (s, o) => {
					if (
						n.bindI18n &&
						n.bindI18n.indexOf('languageChanging') > -1 &&
						s.services.backendConnector.backend &&
						s.isLanguageChangingTo &&
						!o(s.isLanguageChangingTo, e)
					)
						return !1;
				},
		  })
		: ft(e, t, n);
}
const vt = f.createContext();
class pt {
	constructor() {
		this.usedNamespaces = {};
	}
	addUsedNamespaces(t) {
		t.forEach((n) => {
			this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
		});
	}
	getUsedNamespaces() {
		return Object.keys(this.usedNamespaces);
	}
}
const ht = (e, t) => {
	const n = f.useRef();
	return (
		f.useEffect(() => {
			n.current = t ? n.current : e;
		}, [e, t]),
		n.current
	);
};
function gt(e) {
	let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	const { i18n: n } = t,
		{ i18n: a, defaultNS: s } = f.useContext(vt) || {},
		o = n || a || lt();
	if ((o && !o.reportNamespaces && (o.reportNamespaces = new pt()), !o)) {
		pe('You will need to pass in an i18next instance by using initReactI18next');
		const m = (w, k) =>
				typeof k == 'string'
					? k
					: k && typeof k == 'object' && typeof k.defaultValue == 'string'
					? k.defaultValue
					: Array.isArray(w)
					? w[w.length - 1]
					: w,
			N = [m, {}, !1];
		return (N.t = m), (N.i18n = {}), (N.ready = !1), N;
	}
	o.options.react &&
		o.options.react.wait !== void 0 &&
		pe(
			'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
		);
	const l = { ...it(), ...o.options.react, ...t },
		{ useSuspense: u, keyPrefix: d } = l;
	let c = e || s || (o.options && o.options.defaultNS);
	(c = typeof c == 'string' ? [c] : c || ['translation']),
		o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(c);
	const v = (o.isInitialized || o.initializedStoreOnce) && c.every((m) => dt(m, o, l));
	function g() {
		return o.getFixedT(t.lng || null, l.nsMode === 'fallback' ? c : c[0], d);
	}
	const [y, C] = f.useState(g);
	let _ = c.join();
	t.lng && (_ = `${t.lng}${_}`);
	const p = ht(_),
		h = f.useRef(!0);
	f.useEffect(() => {
		const { bindI18n: m, bindI18nStore: N } = l;
		(h.current = !0),
			!v &&
				!u &&
				(t.lng
					? ye(o, t.lng, c, () => {
							h.current && C(g);
					  })
					: be(o, c, () => {
							h.current && C(g);
					  })),
			v && p && p !== _ && h.current && C(g);
		function w() {
			h.current && C(g);
		}
		return (
			m && o && o.on(m, w),
			N && o && o.store.on(N, w),
			() => {
				(h.current = !1),
					m && o && m.split(' ').forEach((k) => o.off(k, w)),
					N && o && N.split(' ').forEach((k) => o.store.off(k, w));
			}
		);
	}, [o, _]);
	const x = f.useRef(!0);
	f.useEffect(() => {
		h.current && !x.current && C(g), (x.current = !1);
	}, [o, d]);
	const E = [y, o, v];
	if (((E.t = y), (E.i18n = o), (E.ready = v), v || (!v && !u))) return E;
	throw new Promise((m) => {
		t.lng ? ye(o, t.lng, c, () => m()) : be(o, c, () => m());
	});
}
var U = function () {
	return (
		(U =
			Object.assign ||
			function (t) {
				for (var n, a = 1, s = arguments.length; a < s; a++) {
					n = arguments[a];
					for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
				}
				return t;
			}),
		U.apply(this, arguments)
	);
};
function Re(e, t) {
	var n = {};
	for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
	if (e != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var s = 0, a = Object.getOwnPropertySymbols(e); s < a.length; s++)
			t.indexOf(a[s]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(e, a[s]) &&
				(n[a[s]] = e[a[s]]);
	return n;
}
function mt(e, t, n) {
	if (n || arguments.length === 2)
		for (var a = 0, s = t.length, o; a < s; a++)
			(o || !(a in t)) && (o || (o = Array.prototype.slice.call(t, 0, a)), (o[a] = t[a]));
	return e.concat(o || Array.prototype.slice.call(t));
}
var we = Je({
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
				...Qe,
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
	bt = Object.create,
	Oe = Object.defineProperty,
	yt = Object.getOwnPropertyDescriptor,
	Ie = Object.getOwnPropertyNames,
	wt = Object.getPrototypeOf,
	xt = Object.prototype.hasOwnProperty,
	Me = (e, t) =>
		function () {
			return t || (0, e[Ie(e)[0]])((t = { exports: {} }).exports, t), t.exports;
		},
	St = (e, t, n, a) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let s of Ie(t))
				!xt.call(e, s) &&
					s !== n &&
					Oe(e, s, { get: () => t[s], enumerable: !(a = yt(t, s)) || a.enumerable });
		return e;
	},
	Nt = (e, t, n) => (
		(n = e != null ? bt(wt(e)) : {}),
		St(t || !e || !e.__esModule ? Oe(n, 'default', { value: e, enumerable: !0 }) : n, e)
	),
	Ct = Me({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js'(e) {
			var t = Symbol.for('react.element'),
				n = Symbol.for('react.portal'),
				a = Symbol.for('react.fragment'),
				s = Symbol.for('react.strict_mode'),
				o = Symbol.for('react.profiler'),
				l = Symbol.for('react.provider'),
				u = Symbol.for('react.context'),
				d = Symbol.for('react.forward_ref'),
				c = Symbol.for('react.suspense'),
				v = Symbol.for('react.memo'),
				g = Symbol.for('react.lazy'),
				y = Symbol.iterator;
			function C(r) {
				return r === null || typeof r != 'object'
					? null
					: ((r = (y && r[y]) || r['@@iterator']), typeof r == 'function' ? r : null);
			}
			var _ = {
					isMounted: function () {
						return !1;
					},
					enqueueForceUpdate: function () {},
					enqueueReplaceState: function () {},
					enqueueSetState: function () {},
				},
				p = Object.assign,
				h = {};
			function x(r, i, S) {
				(this.props = r), (this.context = i), (this.refs = h), (this.updater = S || _);
			}
			(x.prototype.isReactComponent = {}),
				(x.prototype.setState = function (r, i) {
					if (typeof r != 'object' && typeof r != 'function' && r != null)
						throw Error(
							'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
						);
					this.updater.enqueueSetState(this, r, i, 'setState');
				}),
				(x.prototype.forceUpdate = function (r) {
					this.updater.enqueueForceUpdate(this, r, 'forceUpdate');
				});
			function E() {}
			E.prototype = x.prototype;
			function m(r, i, S) {
				(this.props = r), (this.context = i), (this.refs = h), (this.updater = S || _);
			}
			var N = (m.prototype = new E());
			(N.constructor = m), p(N, x.prototype), (N.isPureReactComponent = !0);
			var w = Array.isArray,
				k = Object.prototype.hasOwnProperty,
				B = { current: null },
				W = { key: !0, ref: !0, __self: !0, __source: !0 };
			function F(r, i, S) {
				var R,
					P = {},
					I = null,
					T = null;
				if (i != null)
					for (R in (i.ref !== void 0 && (T = i.ref), i.key !== void 0 && (I = '' + i.key), i))
						k.call(i, R) && !W.hasOwnProperty(R) && (P[R] = i[R]);
				var M = arguments.length - 2;
				if (M === 1) P.children = S;
				else if (1 < M) {
					for (var O = Array(M), H = 0; H < M; H++) O[H] = arguments[H + 2];
					P.children = O;
				}
				if (r && r.defaultProps)
					for (R in ((M = r.defaultProps), M)) P[R] === void 0 && (P[R] = M[R]);
				return { $$typeof: t, type: r, key: I, ref: T, props: P, _owner: B.current };
			}
			function q(r, i) {
				return { $$typeof: t, type: r.type, key: i, ref: r.ref, props: r.props, _owner: r._owner };
			}
			function z(r) {
				return typeof r == 'object' && r !== null && r.$$typeof === t;
			}
			function ee(r) {
				var i = { '=': '=0', ':': '=2' };
				return (
					'$' +
					r.replace(/[=:]/g, function (S) {
						return i[S];
					})
				);
			}
			var ae = /\/+/g;
			function te(r, i) {
				return typeof r == 'object' && r !== null && r.key != null
					? ee('' + r.key)
					: i.toString(36);
			}
			function Z(r, i, S, R, P) {
				var I = typeof r;
				(I === 'undefined' || I === 'boolean') && (r = null);
				var T = !1;
				if (r === null) T = !0;
				else
					switch (I) {
						case 'string':
						case 'number':
							T = !0;
							break;
						case 'object':
							switch (r.$$typeof) {
								case t:
								case n:
									T = !0;
							}
					}
				if (T)
					return (
						(T = r),
						(P = P(T)),
						(r = R === '' ? '.' + te(T, 0) : R),
						w(P)
							? ((S = ''),
							  r != null && (S = r.replace(ae, '$&/') + '/'),
							  Z(P, i, S, '', function (H) {
									return H;
							  }))
							: P != null &&
							  (z(P) &&
									(P = q(
										P,
										S +
											(!P.key || (T && T.key === P.key)
												? ''
												: ('' + P.key).replace(ae, '$&/') + '/') +
											r
									)),
							  i.push(P)),
						1
					);
				if (((T = 0), (R = R === '' ? '.' : R + ':'), w(r)))
					for (var M = 0; M < r.length; M++) {
						I = r[M];
						var O = R + te(I, M);
						T += Z(I, i, S, O, P);
					}
				else if (((O = C(r)), typeof O == 'function'))
					for (r = O.call(r), M = 0; !(I = r.next()).done; )
						(I = I.value), (O = R + te(I, M++)), (T += Z(I, i, S, O, P));
				else if (I === 'object')
					throw (
						((i = String(r)),
						Error(
							'Objects are not valid as a React child (found: ' +
								(i === '[object Object]'
									? 'object with keys {' + Object.keys(r).join(', ') + '}'
									: i) +
								'). If you meant to render a collection of children, use an array instead.'
						))
					);
				return T;
			}
			function j(r, i, S) {
				if (r == null) return r;
				var R = [],
					P = 0;
				return (
					Z(r, R, '', '', function (I) {
						return i.call(S, I, P++);
					}),
					R
				);
			}
			function G(r) {
				if (r._status === -1) {
					var i = r._result;
					(i = i()),
						i.then(
							function (S) {
								(r._status === 0 || r._status === -1) && ((r._status = 1), (r._result = S));
							},
							function (S) {
								(r._status === 0 || r._status === -1) && ((r._status = 2), (r._result = S));
							}
						),
						r._status === -1 && ((r._status = 0), (r._result = i));
				}
				if (r._status === 1) return r._result.default;
				throw r._result;
			}
			var L = { current: null },
				V = { transition: null },
				Ge = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: V, ReactCurrentOwner: B };
			(e.Children = {
				map: j,
				forEach: function (r, i, S) {
					j(
						r,
						function () {
							i.apply(this, arguments);
						},
						S
					);
				},
				count: function (r) {
					var i = 0;
					return (
						j(r, function () {
							i++;
						}),
						i
					);
				},
				toArray: function (r) {
					return (
						j(r, function (i) {
							return i;
						}) || []
					);
				},
				only: function (r) {
					if (!z(r))
						throw Error('React.Children.only expected to receive a single React element child.');
					return r;
				},
			}),
				(e.Component = x),
				(e.Fragment = a),
				(e.Profiler = o),
				(e.PureComponent = m),
				(e.StrictMode = s),
				(e.Suspense = c),
				(e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ge),
				(e.cloneElement = function (r, i, S) {
					if (r == null)
						throw Error(
							'React.cloneElement(...): The argument must be a React element, but you passed ' +
								r +
								'.'
						);
					var R = p({}, r.props),
						P = r.key,
						I = r.ref,
						T = r._owner;
					if (i != null) {
						if (
							(i.ref !== void 0 && ((I = i.ref), (T = B.current)),
							i.key !== void 0 && (P = '' + i.key),
							r.type && r.type.defaultProps)
						)
							var M = r.type.defaultProps;
						for (O in i)
							k.call(i, O) &&
								!W.hasOwnProperty(O) &&
								(R[O] = i[O] === void 0 && M !== void 0 ? M[O] : i[O]);
					}
					var O = arguments.length - 2;
					if (O === 1) R.children = S;
					else if (1 < O) {
						M = Array(O);
						for (var H = 0; H < O; H++) M[H] = arguments[H + 2];
						R.children = M;
					}
					return { $$typeof: t, type: r.type, key: P, ref: I, props: R, _owner: T };
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
				(e.createElement = F),
				(e.createFactory = function (r) {
					var i = F.bind(null, r);
					return (i.type = r), i;
				}),
				(e.createRef = function () {
					return { current: null };
				}),
				(e.forwardRef = function (r) {
					return { $$typeof: d, render: r };
				}),
				(e.isValidElement = z),
				(e.lazy = function (r) {
					return { $$typeof: g, _payload: { _status: -1, _result: r }, _init: G };
				}),
				(e.memo = function (r, i) {
					return { $$typeof: v, type: r, compare: i === void 0 ? null : i };
				}),
				(e.startTransition = function (r) {
					var i = V.transition;
					V.transition = {};
					try {
						r();
					} finally {
						V.transition = i;
					}
				}),
				(e.unstable_act = function () {
					throw Error('act(...) is not supported in production builds of React.');
				}),
				(e.useCallback = function (r, i) {
					return L.current.useCallback(r, i);
				}),
				(e.useContext = function (r) {
					return L.current.useContext(r);
				}),
				(e.useDebugValue = function () {}),
				(e.useDeferredValue = function (r) {
					return L.current.useDeferredValue(r);
				}),
				(e.useEffect = function (r, i) {
					return L.current.useEffect(r, i);
				}),
				(e.useId = function () {
					return L.current.useId();
				}),
				(e.useImperativeHandle = function (r, i, S) {
					return L.current.useImperativeHandle(r, i, S);
				}),
				(e.useInsertionEffect = function (r, i) {
					return L.current.useInsertionEffect(r, i);
				}),
				(e.useLayoutEffect = function (r, i) {
					return L.current.useLayoutEffect(r, i);
				}),
				(e.useMemo = function (r, i) {
					return L.current.useMemo(r, i);
				}),
				(e.useReducer = function (r, i, S) {
					return L.current.useReducer(r, i, S);
				}),
				(e.useRef = function (r) {
					return L.current.useRef(r);
				}),
				(e.useState = function (r) {
					return L.current.useState(r);
				}),
				(e.useSyncExternalStore = function (r, i, S) {
					return L.current.useSyncExternalStore(r, i, S);
				}),
				(e.useTransition = function () {
					return L.current.useTransition();
				}),
				(e.version = '18.2.0');
		},
	}),
	_t = Me({
		'../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'(e, t) {
			t.exports = Ct();
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
 */ var xe = Nt(_t()),
	jt = (e, t) => {
		var n;
		let a = [];
		const s =
				(n = xe.Children.map(e, (l) =>
					(0, xe.isValidElement)(l) && l.type === t ? (a.push(l), null) : l
				)) == null
					? void 0
					: n.filter(Boolean),
			o = a.length >= 0 ? a : void 0;
		return [s, o];
	};
function $t(e = {}) {
	let { isReadOnly: t } = e,
		[n, a] = Ee(e.isSelected, e.defaultSelected || !1, e.onChange);
	function s(l) {
		t || a(l);
	}
	function o() {
		t || a(!n);
	}
	return { isSelected: n, setSelected: s, toggle: o };
}
var le = 'right-scroll-bar-position',
	ce = 'width-before-scroll-bar',
	Pt = 'with-scroll-bars-hidden',
	Et = '--removed-body-scroll-bar-size';
function kt(e, t) {
	return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function Rt(e, t) {
	var n = f.useState(function () {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(a) {
					var s = n.value;
					s !== a && ((n.value = a), n.callback(a, s));
				},
			},
		};
	})[0];
	return (n.callback = t), n.facade;
}
function Ot(e, t) {
	return Rt(t || null, function (n) {
		return e.forEach(function (a) {
			return kt(a, n);
		});
	});
}
function It(e) {
	return e;
}
function Mt(e, t) {
	t === void 0 && (t = It);
	var n = [],
		a = !1,
		s = {
			read: function () {
				if (a)
					throw new Error(
						'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
					);
				return n.length ? n[n.length - 1] : e;
			},
			useMedium: function (o) {
				var l = t(o, a);
				return (
					n.push(l),
					function () {
						n = n.filter(function (u) {
							return u !== l;
						});
					}
				);
			},
			assignSyncMedium: function (o) {
				for (a = !0; n.length; ) {
					var l = n;
					(n = []), l.forEach(o);
				}
				n = {
					push: function (u) {
						return o(u);
					},
					filter: function () {
						return n;
					},
				};
			},
			assignMedium: function (o) {
				a = !0;
				var l = [];
				if (n.length) {
					var u = n;
					(n = []), u.forEach(o), (l = n);
				}
				var d = function () {
						var v = l;
						(l = []), v.forEach(o);
					},
					c = function () {
						return Promise.resolve().then(d);
					};
				c(),
					(n = {
						push: function (v) {
							l.push(v), c();
						},
						filter: function (v) {
							return (l = l.filter(v)), n;
						},
					});
			},
		};
	return s;
}
function Tt(e) {
	e === void 0 && (e = {});
	var t = Mt(null);
	return (t.options = U({ async: !0, ssr: !1 }, e)), t;
}
var Te = function (e) {
	var t = e.sideCar,
		n = Re(e, ['sideCar']);
	if (!t) throw new Error('Sidecar: please provide `sideCar` property to import the right car');
	var a = t.read();
	if (!a) throw new Error('Sidecar medium not found');
	return f.createElement(a, U({}, n));
};
Te.isSideCarExport = !0;
function Lt(e, t) {
	return e.useMedium(t), Te;
}
var Le = Tt(),
	de = function () {},
	fe = f.forwardRef(function (e, t) {
		var n = f.useRef(null),
			a = f.useState({ onScrollCapture: de, onWheelCapture: de, onTouchMoveCapture: de }),
			s = a[0],
			o = a[1],
			l = e.forwardProps,
			u = e.children,
			d = e.className,
			c = e.removeScrollBar,
			v = e.enabled,
			g = e.shards,
			y = e.sideCar,
			C = e.noIsolation,
			_ = e.inert,
			p = e.allowPinchZoom,
			h = e.as,
			x = h === void 0 ? 'div' : h,
			E = e.gapMode,
			m = Re(e, [
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
			N = y,
			w = Ot([n, t]),
			k = U(U({}, m), s);
		return f.createElement(
			f.Fragment,
			null,
			v &&
				f.createElement(N, {
					sideCar: Le,
					removeScrollBar: c,
					shards: g,
					noIsolation: C,
					inert: _,
					setCallbacks: o,
					allowPinchZoom: !!p,
					lockRef: n,
					gapMode: E,
				}),
			l
				? f.cloneElement(f.Children.only(u), U(U({}, k), { ref: w }))
				: f.createElement(x, U({}, k, { className: d, ref: w }), u)
		);
	});
fe.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
fe.classNames = { fullWidth: ce, zeroRight: le };
var Se,
	Bt = function () {
		if (Se) return Se;
		if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
	};
function At() {
	if (!document) return null;
	var e = document.createElement('style');
	e.type = 'text/css';
	var t = Bt();
	return t && e.setAttribute('nonce', t), e;
}
function Wt(e, t) {
	e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function Ft(e) {
	var t = document.head || document.getElementsByTagName('head')[0];
	t.appendChild(e);
}
var Ht = function () {
		var e = 0,
			t = null;
		return {
			add: function (n) {
				e == 0 && (t = At()) && (Wt(t, n), Ft(t)), e++;
			},
			remove: function () {
				e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
			},
		};
	},
	Ut = function () {
		var e = Ht();
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
	Be = function () {
		var e = Ut(),
			t = function (n) {
				var a = n.styles,
					s = n.dynamic;
				return e(a, s), null;
			};
		return t;
	},
	zt = { left: 0, top: 0, right: 0, gap: 0 },
	ve = function (e) {
		return parseInt(e || '', 10) || 0;
	},
	Dt = function (e) {
		var t = window.getComputedStyle(document.body),
			n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
			a = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
			s = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
		return [ve(n), ve(a), ve(s)];
	},
	Vt = function (e) {
		if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return zt;
		var t = Dt(e),
			n = document.documentElement.clientWidth,
			a = window.innerWidth;
		return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, a - n + t[2] - t[0]) };
	},
	Xt = Be(),
	Yt = function (e, t, n, a) {
		var s = e.left,
			o = e.top,
			l = e.right,
			u = e.gap;
		return (
			n === void 0 && (n = 'margin'),
			`
  .`
				.concat(
					Pt,
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
					ce,
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
				.concat(ce, ' .')
				.concat(
					ce,
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
				.concat(Et, ': ')
				.concat(
					u,
					`px;
  }
`
				)
		);
	},
	qt = function (e) {
		var t = e.noRelative,
			n = e.noImportant,
			a = e.gapMode,
			s = a === void 0 ? 'margin' : a,
			o = f.useMemo(
				function () {
					return Vt(s);
				},
				[s]
			);
		return f.createElement(Xt, { styles: Yt(o, !t, s, n ? '' : '!important') });
	},
	he = !1;
if (typeof window < 'u')
	try {
		var oe = Object.defineProperty({}, 'passive', {
			get: function () {
				return (he = !0), !0;
			},
		});
		window.addEventListener('test', oe, oe), window.removeEventListener('test', oe, oe);
	} catch {
		he = !1;
	}
var J = he ? { passive: !1 } : !1,
	Zt = function (e) {
		return e.tagName === 'TEXTAREA';
	},
	Ae = function (e, t) {
		var n = window.getComputedStyle(e);
		return n[t] !== 'hidden' && !(n.overflowY === n.overflowX && !Zt(e) && n[t] === 'visible');
	},
	Gt = function (e) {
		return Ae(e, 'overflowY');
	},
	Jt = function (e) {
		return Ae(e, 'overflowX');
	},
	Ne = function (e, t) {
		var n = t.ownerDocument,
			a = t;
		do {
			typeof ShadowRoot < 'u' && a instanceof ShadowRoot && (a = a.host);
			var s = We(e, a);
			if (s) {
				var o = Fe(e, a),
					l = o[1],
					u = o[2];
				if (l > u) return !0;
			}
			a = a.parentNode;
		} while (a && a !== n.body);
		return !1;
	},
	Qt = function (e) {
		var t = e.scrollTop,
			n = e.scrollHeight,
			a = e.clientHeight;
		return [t, n, a];
	},
	Kt = function (e) {
		var t = e.scrollLeft,
			n = e.scrollWidth,
			a = e.clientWidth;
		return [t, n, a];
	},
	We = function (e, t) {
		return e === 'v' ? Gt(t) : Jt(t);
	},
	Fe = function (e, t) {
		return e === 'v' ? Qt(t) : Kt(t);
	},
	en = function (e, t) {
		return e === 'h' && t === 'rtl' ? -1 : 1;
	},
	tn = function (e, t, n, a, s) {
		var o = en(e, window.getComputedStyle(t).direction),
			l = o * a,
			u = n.target,
			d = t.contains(u),
			c = !1,
			v = l > 0,
			g = 0,
			y = 0;
		do {
			var C = Fe(e, u),
				_ = C[0],
				p = C[1],
				h = C[2],
				x = p - h - o * _;
			(_ || x) && We(e, u) && ((g += x), (y += _)),
				u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
		} while ((!d && u !== document.body) || (d && (t.contains(u) || t === u)));
		return (
			((v && ((s && Math.abs(g) < 1) || (!s && l > g))) ||
				(!v && ((s && Math.abs(y) < 1) || (!s && -l > y)))) &&
				(c = !0),
			c
		);
	},
	se = function (e) {
		return 'changedTouches' in e
			? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
			: [0, 0];
	},
	Ce = function (e) {
		return [e.deltaX, e.deltaY];
	},
	_e = function (e) {
		return e && 'current' in e ? e.current : e;
	},
	nn = function (e, t) {
		return e[0] === t[0] && e[1] === t[1];
	},
	rn = function (e) {
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
	an = 0,
	Q = [];
function on(e) {
	var t = f.useRef([]),
		n = f.useRef([0, 0]),
		a = f.useRef(),
		s = f.useState(an++)[0],
		o = f.useState(Be)[0],
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
					document.body.classList.add('block-interactivity-'.concat(s));
					var p = mt([e.lockRef.current], (e.shards || []).map(_e), !0).filter(Boolean);
					return (
						p.forEach(function (h) {
							return h.classList.add('allow-interactivity-'.concat(s));
						}),
						function () {
							document.body.classList.remove('block-interactivity-'.concat(s)),
								p.forEach(function (h) {
									return h.classList.remove('allow-interactivity-'.concat(s));
								});
						}
					);
				}
			},
			[e.inert, e.lockRef.current, e.shards]
		);
	var u = f.useCallback(function (p, h) {
			if ('touches' in p && p.touches.length === 2) return !l.current.allowPinchZoom;
			var x = se(p),
				E = n.current,
				m = 'deltaX' in p ? p.deltaX : E[0] - x[0],
				N = 'deltaY' in p ? p.deltaY : E[1] - x[1],
				w,
				k = p.target,
				B = Math.abs(m) > Math.abs(N) ? 'h' : 'v';
			if ('touches' in p && B === 'h' && k.type === 'range') return !1;
			var W = Ne(B, k);
			if (!W) return !0;
			if ((W ? (w = B) : ((w = B === 'v' ? 'h' : 'v'), (W = Ne(B, k))), !W)) return !1;
			if ((!a.current && 'changedTouches' in p && (m || N) && (a.current = w), !w)) return !0;
			var F = a.current || w;
			return tn(F, h, p, F === 'h' ? m : N, !0);
		}, []),
		d = f.useCallback(function (p) {
			var h = p;
			if (!(!Q.length || Q[Q.length - 1] !== o)) {
				var x = 'deltaY' in h ? Ce(h) : se(h),
					E = t.current.filter(function (w) {
						return (
							w.name === h.type &&
							(w.target === h.target || h.target === w.shadowParent) &&
							nn(w.delta, x)
						);
					})[0];
				if (E && E.should) {
					h.cancelable && h.preventDefault();
					return;
				}
				if (!E) {
					var m = (l.current.shards || [])
							.map(_e)
							.filter(Boolean)
							.filter(function (w) {
								return w.contains(h.target);
							}),
						N = m.length > 0 ? u(h, m[0]) : !l.current.noIsolation;
					N && h.cancelable && h.preventDefault();
				}
			}
		}, []),
		c = f.useCallback(function (p, h, x, E) {
			var m = { name: p, delta: h, target: x, should: E, shadowParent: sn(x) };
			t.current.push(m),
				setTimeout(function () {
					t.current = t.current.filter(function (N) {
						return N !== m;
					});
				}, 1);
		}, []),
		v = f.useCallback(function (p) {
			(n.current = se(p)), (a.current = void 0);
		}, []),
		g = f.useCallback(function (p) {
			c(p.type, Ce(p), p.target, u(p, e.lockRef.current));
		}, []),
		y = f.useCallback(function (p) {
			c(p.type, se(p), p.target, u(p, e.lockRef.current));
		}, []);
	f.useEffect(function () {
		return (
			Q.push(o),
			e.setCallbacks({ onScrollCapture: g, onWheelCapture: g, onTouchMoveCapture: y }),
			document.addEventListener('wheel', d, J),
			document.addEventListener('touchmove', d, J),
			document.addEventListener('touchstart', v, J),
			function () {
				(Q = Q.filter(function (p) {
					return p !== o;
				})),
					document.removeEventListener('wheel', d, J),
					document.removeEventListener('touchmove', d, J),
					document.removeEventListener('touchstart', v, J);
			}
		);
	}, []);
	var C = e.removeScrollBar,
		_ = e.inert;
	return f.createElement(
		f.Fragment,
		null,
		_ ? f.createElement(o, { styles: rn(s) }) : null,
		C ? f.createElement(qt, { gapMode: e.gapMode }) : null
	);
}
function sn(e) {
	for (var t = null; e !== null; )
		e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
	return t;
}
const ln = Lt(Le, on);
var He = f.forwardRef(function (e, t) {
	return f.createElement(fe, U({}, e, { ref: t, sideCar: ln }));
});
He.classNames = fe.classNames;
const cn = He;
var [un, K] = Ke({
		name: 'NavbarContext',
		strict: !0,
		errorMessage:
			'useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />',
	}),
	fn = {
		enter: {
			height: 'calc(100vh - var(--navbar-height) - 1px)',
			transition: { duration: 0.3, easings: 'easeOut' },
		},
		exit: { height: 0, transition: { duration: 0.25, easings: 'easeIn' } },
	},
	Ue = X((e, t) => {
		var n, a;
		const { className: s, children: o, portalContainer: l, motionProps: u, style: d, ...c } = e,
			v = Y(t),
			{ slots: g, isMenuOpen: y, height: C, disableAnimation: _, classNames: p } = K(),
			h = D(p?.menu, s),
			x = f.useCallback(
				({ children: m }) =>
					b.jsx(cn, { forwardProps: !0, enabled: y, removeScrollBar: !1, children: m }),
				[y]
			),
			E = _
				? b.jsx(x, {
						children: b.jsx('ul', {
							ref: v,
							className: (n = g.menu) == null ? void 0 : n.call(g, { class: h }),
							'data-open': A(y),
							style: { '--navbar-height': C },
							...c,
							children: o,
						}),
				  })
				: b.jsx(ct, {
						mode: 'wait',
						children: y
							? b.jsx(x, {
									children: b.jsx(ue.ul, {
										ref: v,
										layoutScroll: !0,
										animate: 'enter',
										className: (a = g.menu) == null ? void 0 : a.call(g, { class: h }),
										'data-open': A(y),
										exit: 'exit',
										initial: 'exit',
										style: { '--navbar-height': C, ...d },
										variants: fn,
										...re(u, c),
										children: o,
									}),
							  })
							: null,
				  });
		return b.jsx(et, { portalContainer: l, children: E });
	});
Ue.displayName = 'NextUI.NavbarMenu';
var ze = Ue,
	dn = {
		visible: { y: 0, transition: { ease: ge.easeOut } },
		hidden: { y: '-100%', transition: { ease: ge.easeIn } },
	},
	vn = typeof window < 'u';
function je(e) {
	return vn
		? e
			? { x: e.scrollLeft, y: e.scrollTop }
			: { x: window.scrollX, y: window.scrollY }
		: { x: 0, y: 0 };
}
var pn = (e) => {
	const { elementRef: t, delay: n = 30, callback: a, isEnabled: s } = e,
		o = f.useRef(s ? je(t?.current) : { x: 0, y: 0 });
	let l = null;
	const u = () => {
		const d = je(t?.current);
		typeof a == 'function' && a({ prevPos: o.current, currPos: d }), (o.current = d), (l = null);
	};
	return (
		f.useEffect(() => {
			if (!s) return;
			const d = () => {
					n ? l === null && (l = setTimeout(u, n)) : u();
				},
				c = t?.current || window;
			return c.addEventListener('scroll', d), () => c.removeEventListener('scroll', d);
		}, [t?.current, n, s]),
		o.current
	);
};
function hn(e) {
	var t;
	const [n, a] = tt(e, we.variantKeys),
		{
			ref: s,
			as: o,
			parentRef: l,
			height: u = '4rem',
			shouldHideOnScroll: d = !1,
			disableScrollHandler: c = !1,
			onScrollPositionChange: v,
			isMenuOpen: g,
			isMenuDefaultOpen: y,
			onMenuOpenChange: C = () => {},
			motionProps: _,
			className: p,
			classNames: h,
			...x
		} = n,
		E = o || 'nav',
		m = Y(s),
		N = f.useRef(0),
		w = f.useRef(0),
		[k, B] = f.useState(!1),
		W = f.useCallback(
			(j) => {
				C(j || !1);
			},
			[C]
		),
		[F, q] = Ee(g, y, W),
		z = () => {
			if (m.current) {
				const j = m.current.offsetWidth;
				j !== N.current && (N.current = j);
			}
		};
	nt({
		ref: m,
		onResize: () => {
			var j;
			((j = m.current) == null ? void 0 : j.offsetWidth) !== N.current && (z(), q(!1));
		},
	}),
		f.useEffect(() => {
			var j;
			z(), (w.current = ((j = m.current) == null ? void 0 : j.offsetHeight) || 0);
		}, []);
	const ee = f.useMemo(() => we({ ...a, hideOnScroll: d }), [...Object.values(a), d]),
		ae = D(h?.base, p);
	pn({
		elementRef: l,
		isEnabled: d || !c,
		callback: ({ prevPos: j, currPos: G }) => {
			v?.(G.y),
				d &&
					B((L) => {
						const V = G.y > j.y && G.y > w.current;
						return V !== L ? V : L;
					});
		},
	});
	const te = (j = {}) => ({
			...re(x, j),
			'data-hidden': A(k),
			'data-menu-open': A(F),
			ref: m,
			className: ee.base({ class: D(ae, j?.className) }),
			style: { '--navbar-height': u, ...j?.style },
		}),
		Z = (j = {}) => ({
			...j,
			'data-menu-open': A(F),
			className: ee.wrapper({ class: D(h?.wrapper, j?.className) }),
		});
	return {
		Component: E,
		slots: ee,
		domRef: m,
		height: u,
		isHidden: k,
		disableAnimation: (t = e.disableAnimation) != null ? t : !1,
		shouldHideOnScroll: d,
		isMenuOpen: F,
		classNames: h,
		setIsMenuOpen: q,
		motionProps: _,
		getBaseProps: te,
		getWrapperProps: Z,
	};
}
var De = X((e, t) => {
	const { children: n, ...a } = e,
		s = hn({ ...a, ref: t }),
		o = s.Component,
		[l, u] = jt(n, ze),
		d = b.jsxs(b.Fragment, {
			children: [b.jsx('header', { ...s.getWrapperProps(), children: l }), u],
		});
	return b.jsx(un, {
		value: s,
		children: s.shouldHideOnScroll
			? b.jsx(ue.nav, {
					animate: s.isHidden ? 'hidden' : 'visible',
					initial: !1,
					variants: dn,
					...re(s.getBaseProps(), s.motionProps),
					children: d,
			  })
			: b.jsx(o, { ...s.getBaseProps(), children: d }),
	});
});
De.displayName = 'NextUI.Navbar';
var gn = De,
	Ve = X((e, t) => {
		var n;
		const { as: a, className: s, children: o, ...l } = e,
			u = a || 'div',
			d = Y(t),
			{ slots: c, classNames: v } = K(),
			g = D(v?.brand, s);
		return b.jsx(u, {
			ref: d,
			className: (n = c.brand) == null ? void 0 : n.call(c, { class: g }),
			...l,
			children: o,
		});
	});
Ve.displayName = 'NextUI.NavbarBrand';
var mn = Ve,
	Xe = X((e, t) => {
		var n;
		const { as: a, className: s, children: o, justify: l = 'start', ...u } = e,
			d = a || 'ul',
			c = Y(t),
			{ slots: v, classNames: g } = K(),
			y = D(g?.content, s);
		return b.jsx(d, {
			ref: c,
			className: (n = v.content) == null ? void 0 : n.call(v, { class: y }),
			'data-justify': l,
			...u,
			children: o,
		});
	});
Xe.displayName = 'NextUI.NavbarContent';
var bn = Xe,
	Ye = X((e, t) => {
		var n;
		const { as: a, className: s, children: o, isActive: l, ...u } = e,
			d = a || 'li',
			c = Y(t),
			{ slots: v, classNames: g } = K(),
			y = D(g?.item, s);
		return b.jsx(d, {
			ref: c,
			className: (n = v.item) == null ? void 0 : n.call(v, { class: y }),
			'data-active': A(l),
			...u,
			children: o,
		});
	});
Ye.displayName = 'NextUI.NavbarItem';
var yn = Ye,
	qe = X((e, t) => {
		var n;
		const { className: a, children: s, isActive: o, ...l } = e,
			u = Y(t),
			{ slots: d, isMenuOpen: c, classNames: v } = K(),
			g = D(v?.menuItem, a);
		return b.jsx('li', {
			ref: u,
			className: (n = d.menuItem) == null ? void 0 : n.call(d, { class: g }),
			'data-active': A(o),
			'data-open': A(c),
			...l,
			children: s,
		});
	});
qe.displayName = 'NextUI.NavbarMenuItem';
var wn = qe;
function xn(e, t, n) {
	const { isSelected: a } = t,
		{ isPressed: s, buttonProps: o } = rt({ ...e, onPress: at(t.toggle, e.onPress) }, n);
	return { isPressed: s, buttonProps: re(o, { 'aria-pressed': a }) };
}
var Ze = X((e, t) => {
	var n;
	const { as: a, icon: s, className: o, onChange: l, autoFocus: u, srOnlyText: d, ...c } = e,
		v = a || 'button',
		g = Y(t),
		{ slots: y, classNames: C, isMenuOpen: _, setIsMenuOpen: p } = K(),
		x = $t({
			...c,
			isSelected: _,
			onChange: (z) => {
				l?.(z), p(z);
			},
		}),
		{ buttonProps: E, isPressed: m } = xn(e, x, g),
		{ isFocusVisible: N, focusProps: w } = ot({ autoFocus: u }),
		{ isHovered: k, hoverProps: B } = st({}),
		W = D(C?.toggle, o),
		F = f.useMemo(
			() =>
				typeof s == 'function'
					? s(_ ?? !1)
					: s || b.jsx('span', { className: y.toggleIcon({ class: C?.toggleIcon }) }),
			[s, _, y.toggleIcon, C?.toggleIcon]
		),
		q = f.useMemo(
			() => d || (x.isSelected ? 'close navigation menu' : 'open navigation menu'),
			[d, _]
		);
	return b.jsxs(v, {
		ref: g,
		className: (n = y.toggle) == null ? void 0 : n.call(y, { class: W }),
		'data-focus-visible': A(N),
		'data-hover': A(k),
		'data-open': A(_),
		'data-pressed': A(m),
		...re(E, w, B, c),
		children: [b.jsx('span', { className: y.srOnly(), children: q }), F],
	});
});
Ze.displayName = 'NextUI.NavbarMenuToggle';
var Sn = Ze;
const Nn = '/src/assets/',
	ne = '/assets/icons/',
	Cn = '/src/assets/projects/',
	ie = '/src/assets/services/',
	$e = '/src/assets/social/',
	$ = '/assets/technologies/',
	Pe = {
		astronaut: `${Nn}div-astronaut.webp`,
		icons: {
			facebook: `${ne}facebook.svg`,
			github: `${ne}github.svg`,
			instagram: `${ne}instagram.svg`,
			english: `${ne}english.svg`,
			spanish: `${ne}spanish.svg`,
		},
		projects: { globalredex: `${Cn}globalredex-desktop.webp` },
		services: {
			uiux: `${ie}uxui.webp`,
			webdev: `${ie}webdev.webp`,
			mobile: `${ie}mobileapps.webp`,
			marketing: `${ie}marketing.webp`,
		},
		technologies: {
			Ai: `${$}Ai.svg`,
			angular: `${$}angular.svg`,
			astro: `${$}astroreal.svg`,
			css: `${$}css.svg`,
			django: `${$}django.svg`,
			express: `${$}express.svg`,
			figma: `${$}figma.svg`,
			flask: `${$}flask.svg`,
			javascript: `${$}javascript.svg`,
			mongodb: `${$}mongo.svg`,
			next: `${$}next.svg`,
			node: `${$}node.svg`,
			postgresql: `${$}postgres.svg`,
			python: `${$}python.svg`,
			react: `${$}react.svg`,
			typescript: `${$}typescript.svg`,
			vue: `${$}vue.svg`,
			Xd: `${$}Xd.svg`,
			crossLogo: `${$}crossfunclogo.svg`,
			techLines: {
				firstLine: `${$}lines/firstline.svg`,
				secondLine: `${$}lines/secondline.svg`,
				thirdLine: `${$}lines/thirdline.svg`,
				fourthLine: `${$}lines/fourthline.svg`,
				fifthLine: `${$}lines/fifthline.svg`,
				sixthLine: `${$}lines/sixthline.svg`,
				seventhLine: `${$}lines/seventhline.svg`,
				eighthline: `${$}lines/eighthline.svg`,
			},
		},
		social: { whatsapp: `${$e}whatsapplogo.webp`, telegram: `${$e}telegramlogo.webp` },
	};
function Rn({ children: e }) {
	const [t, n] = f.useState(!1),
		[a, s] = f.useState(''),
		{ t: o } = gt(),
		l = [
			{ title: o('home.navbar.home'), href: '#banner' },
			{ title: o('home.navbar.about'), href: '#about' },
			{ title: o('home.navbar.services'), href: '#services' },
			{ title: o('home.navbar.contact'), href: '#contact' },
		],
		u = ({ language: c, flagImage: v, currentPath: g }) => {
			const y = (c === '' && g === '/') || g === `/${c}`;
			return b.jsx('div', {
				className: y ? 'rounded-sm p-0.5 outline outline-2 outline-[#7127BA] xs:p-1' : '',
				children: y
					? b.jsx('img', {
							src: v,
							alt: `${c.toUpperCase()} Flag`,
							width: 20,
							height: 20,
							className: 'sm:h-[25px] sm:w-[25px]',
					  })
					: b.jsx('a', {
							href: `/${c}`,
							children: b.jsx('img', {
								src: v,
								alt: `${c.toUpperCase()} Flag`,
								width: 20,
								height: 20,
								className: 'sm:h-[25px] sm:w-[25px]',
							}),
					  }),
			});
		},
		d = () =>
			b.jsxs(ue.div, {
				initial: { x: -100, opacity: 0 },
				animate: { x: 0, opacity: 1 },
				className:
					'flex items-center justify-center gap-1.5 rounded-lg bg-background p-1.5 backdrop-blur-sm xs:p-2 sm:gap-2 md:gap-3',
				children: [
					b.jsx(u, { language: '', flagImage: Pe.icons.spanish, currentPath: a }),
					b.jsx(u, { language: 'en', flagImage: Pe.icons.english, currentPath: a }),
				],
			});
	return (
		f.useEffect(() => {
			typeof window < 'u' && s(window.location.pathname);
		}, []),
		b.jsxs(gn, {
			onMenuOpenChange: n,
			isMenuOpen: t,
			maxWidth: '2xl',
			className: 'fixed bg-primary-50',
			children: [
				b.jsx(mn, { children: e }),
				b.jsxs(bn, {
					className: 'sm:gap-4 md:gap-12 lg:gap-32 xl:gap-40',
					justify: 'center',
					children: [
						b.jsx('div', {
							className:
								'hidden cursor-pointer flex-row items-center justify-between gap-[3vw] sm:flex lg:gap-[6vw] xl:gap-[10vw]',
							children: l.map((c, v) =>
								b.jsx(
									yn,
									{
										children: b.jsx(ue.a, {
											initial: { x: -100, opacity: 0 },
											animate: { x: 0, opacity: 1 },
											transition: { duration: 0.1 },
											className: 'a-scroll w-full',
											href: c.href,
											children: b.jsx('p', {
												className: 'text-base font-bold text-foreground-50 md:text-lg',
												children: c.title,
											}),
										}),
									},
									`${c.title}-${v}`
								)
							),
						}),
						b.jsx(d, {}),
					],
				}),
				b.jsx(Sn, { 'aria-label': t ? 'Close menu' : 'Open menu', className: 'sm:hidden' }),
				b.jsx(ze, {
					children: l.map((c, v) =>
						b.jsx(
							wn,
							{
								children: b.jsx('a', {
									className: 'a-scroll w-full',
									href: c.href,
									onClick: (g) => {
										g.preventDefault(),
											document.querySelector(c.href)?.scrollIntoView({ behavior: 'smooth' }),
											setTimeout(() => n(!1), 500);
									},
									children: b.jsx('p', {
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
export { Rn as NavbarHome };
