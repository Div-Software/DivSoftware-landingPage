import { r as v, $ as ps } from './index.J00EDW8g.js';
const gs = v.createContext({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: 'never' }),
	Zt = v.createContext({}),
	Lt = v.createContext(null),
	Qt = typeof document < 'u',
	Ee = Qt ? v.useLayoutEffect : v.useEffect,
	ys = v.createContext({ strict: !1 });
function Wi(t, e, n, s) {
	const { visualElement: i } = v.useContext(Zt),
		o = v.useContext(ys),
		r = v.useContext(Lt),
		a = v.useContext(gs).reducedMotion,
		c = v.useRef();
	(s = s || o.renderer),
		!c.current &&
			s &&
			(c.current = s(t, {
				visualState: e,
				parent: i,
				props: n,
				presenceContext: r,
				blockInitialAnimation: r ? r.initial === !1 : !1,
				reducedMotionConfig: a,
			}));
	const l = c.current;
	v.useInsertionEffect(() => {
		l && l.update(n, r);
	});
	const u = v.useRef(!!window.HandoffAppearAnimations);
	return (
		Ee(() => {
			l && (l.render(), u.current && l.animationState && l.animationState.animateChanges());
		}),
		v.useEffect(() => {
			l &&
				(l.updateFeatures(),
				!u.current && l.animationState && l.animationState.animateChanges(),
				(window.HandoffAppearAnimations = void 0),
				(u.current = !1));
		}),
		l
	);
}
function dt(t) {
	return typeof t == 'object' && Object.prototype.hasOwnProperty.call(t, 'current');
}
function zi(t, e, n) {
	return v.useCallback(
		(s) => {
			s && t.mount && t.mount(s),
				e && (s ? e.mount(s) : e.unmount()),
				n && (typeof n == 'function' ? n(s) : dt(n) && (n.current = s));
		},
		[e]
	);
}
function Dt(t) {
	return typeof t == 'string' || Array.isArray(t);
}
function Jt(t) {
	return typeof t == 'object' && typeof t.start == 'function';
}
const Fe = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
	Be = ['initial', ...Fe];
function te(t) {
	return Jt(t.animate) || Be.some((e) => Dt(t[e]));
}
function vs(t) {
	return !!(te(t) || t.variants);
}
function Hi(t, e) {
	if (te(t)) {
		const { initial: n, animate: s } = t;
		return { initial: n === !1 || Dt(n) ? n : void 0, animate: Dt(s) ? s : void 0 };
	}
	return t.inherit !== !1 ? e : {};
}
function Ki(t) {
	const { initial: e, animate: n } = Hi(t, v.useContext(Zt));
	return v.useMemo(() => ({ initial: e, animate: n }), [ln(e), ln(n)]);
}
function ln(t) {
	return Array.isArray(t) ? t.join(' ') : t;
}
const un = {
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
	Mt = {};
for (const t in un) Mt[t] = { isEnabled: (e) => un[t].some((n) => !!e[n]) };
function _i(t) {
	for (const e in t) Mt[e] = { ...Mt[e], ...t[e] };
}
const ke = v.createContext({}),
	xs = v.createContext({}),
	Xi = Symbol.for('motionComponentSymbol');
function Ps({
	preloadedFeatures: t,
	createVisualElement: e,
	useRender: n,
	useVisualState: s,
	Component: i,
}) {
	t && _i(t);
	function o(a, c) {
		let l;
		const u = { ...v.useContext(gs), ...a, layoutId: Yi(a) },
			{ isStatic: h } = u,
			f = Ki(a),
			d = s(a, h);
		if (!h && Qt) {
			f.visualElement = Wi(i, d, u, e);
			const m = v.useContext(xs),
				y = v.useContext(ys).strict;
			f.visualElement && (l = f.visualElement.loadFeatures(u, y, t, m));
		}
		return v.createElement(
			Zt.Provider,
			{ value: f },
			l && f.visualElement ? v.createElement(l, { visualElement: f.visualElement, ...u }) : null,
			n(i, a, zi(d, f.visualElement, c), d, h, f.visualElement)
		);
	}
	const r = v.forwardRef(o);
	return (r[Xi] = i), r;
}
function Yi({ layoutId: t }) {
	const e = v.useContext(ke).id;
	return e && t !== void 0 ? e + '-' + t : t;
}
function qi(t) {
	function e(s, i = {}) {
		return Ps(t(s, i));
	}
	if (typeof Proxy > 'u') return e;
	const n = new Map();
	return new Proxy(e, { get: (s, i) => (n.has(i) || n.set(i, e(i)), n.get(i)) });
}
const Zi = [
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
function je(t) {
	return typeof t != 'string' || t.includes('-') ? !1 : !!(Zi.indexOf(t) > -1 || /[A-Z]/.test(t));
}
const Wt = {};
function Qi(t) {
	Object.assign(Wt, t);
}
const Et = [
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
	lt = new Set(Et);
function Ts(t, { layout: e, layoutId: n }) {
	return (
		lt.has(t) || t.startsWith('origin') || ((e || n !== void 0) && (!!Wt[t] || t === 'opacity'))
	);
}
const O = (t) => !!(t && t.getVelocity),
	Ji = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
	tr = Et.length;
function er(t, { enableHardwareAcceleration: e = !0, allowTransformNone: n = !0 }, s, i) {
	let o = '';
	for (let r = 0; r < tr; r++) {
		const a = Et[r];
		if (t[a] !== void 0) {
			const c = Ji[a] || a;
			o += `${c}(${t[a]}) `;
		}
	}
	return (
		e && !t.z && (o += 'translateZ(0)'),
		(o = o.trim()),
		i ? (o = i(t, s ? '' : o)) : n && s && (o = 'none'),
		o
	);
}
const bs = (t) => (e) => typeof e == 'string' && e.startsWith(t),
	Vs = bs('--'),
	ve = bs('var(--'),
	nr = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
	sr = (t, e) => (e && typeof t == 'number' ? e.transform(t) : t),
	et = (t, e, n) => Math.min(Math.max(n, t), e),
	ut = { test: (t) => typeof t == 'number', parse: parseFloat, transform: (t) => t },
	St = { ...ut, transform: (t) => et(0, 1, t) },
	Ot = { ...ut, default: 1 },
	Ct = (t) => Math.round(t * 1e5) / 1e5,
	ee = /(-)?([\d]*\.?[\d])+/g,
	Ss =
		/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
	ir =
		/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ft(t) {
	return typeof t == 'string';
}
const Bt = (t) => ({
		test: (e) => Ft(e) && e.endsWith(t) && e.split(' ').length === 1,
		parse: parseFloat,
		transform: (e) => `${e}${t}`,
	}),
	Z = Bt('deg'),
	G = Bt('%'),
	P = Bt('px'),
	rr = Bt('vh'),
	or = Bt('vw'),
	hn = { ...G, parse: (t) => G.parse(t) / 100, transform: (t) => G.transform(t * 100) },
	fn = { ...ut, transform: Math.round },
	Cs = {
		borderWidth: P,
		borderTopWidth: P,
		borderRightWidth: P,
		borderBottomWidth: P,
		borderLeftWidth: P,
		borderRadius: P,
		radius: P,
		borderTopLeftRadius: P,
		borderTopRightRadius: P,
		borderBottomRightRadius: P,
		borderBottomLeftRadius: P,
		width: P,
		maxWidth: P,
		height: P,
		maxHeight: P,
		size: P,
		top: P,
		right: P,
		bottom: P,
		left: P,
		padding: P,
		paddingTop: P,
		paddingRight: P,
		paddingBottom: P,
		paddingLeft: P,
		margin: P,
		marginTop: P,
		marginRight: P,
		marginBottom: P,
		marginLeft: P,
		rotate: Z,
		rotateX: Z,
		rotateY: Z,
		rotateZ: Z,
		scale: Ot,
		scaleX: Ot,
		scaleY: Ot,
		scaleZ: Ot,
		skew: Z,
		skewX: Z,
		skewY: Z,
		distance: P,
		translateX: P,
		translateY: P,
		translateZ: P,
		x: P,
		y: P,
		z: P,
		perspective: P,
		transformPerspective: P,
		opacity: St,
		originX: hn,
		originY: hn,
		originZ: P,
		zIndex: fn,
		fillOpacity: St,
		strokeOpacity: St,
		numOctaves: fn,
	};
function Oe(t, e, n, s) {
	const { style: i, vars: o, transform: r, transformOrigin: a } = t;
	let c = !1,
		l = !1,
		u = !0;
	for (const h in e) {
		const f = e[h];
		if (Vs(h)) {
			o[h] = f;
			continue;
		}
		const d = Cs[h],
			m = sr(f, d);
		if (lt.has(h)) {
			if (((c = !0), (r[h] = m), !u)) continue;
			f !== (d.default || 0) && (u = !1);
		} else h.startsWith('origin') ? ((l = !0), (a[h] = m)) : (i[h] = m);
	}
	if (
		(e.transform ||
			(c || s ? (i.transform = er(t.transform, n, u, s)) : i.transform && (i.transform = 'none')),
		l)
	) {
		const { originX: h = '50%', originY: f = '50%', originZ: d = 0 } = a;
		i.transformOrigin = `${h} ${f} ${d}`;
	}
}
const Ie = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function As(t, e, n) {
	for (const s in e) !O(e[s]) && !Ts(s, n) && (t[s] = e[s]);
}
function ar({ transformTemplate: t }, e, n) {
	return v.useMemo(() => {
		const s = Ie();
		return Oe(s, e, { enableHardwareAcceleration: !n }, t), Object.assign({}, s.vars, s.style);
	}, [e]);
}
function cr(t, e, n) {
	const s = t.style || {},
		i = {};
	return As(i, s, t), Object.assign(i, ar(t, e, n)), t.transformValues ? t.transformValues(i) : i;
}
function lr(t, e, n) {
	const s = {},
		i = cr(t, e, n);
	return (
		t.drag &&
			t.dragListener !== !1 &&
			((s.draggable = !1),
			(i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = 'none'),
			(i.touchAction = t.drag === !0 ? 'none' : `pan-${t.drag === 'x' ? 'y' : 'x'}`)),
		t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0),
		(s.style = i),
		s
	);
}
const ur = new Set([
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
function zt(t) {
	return (
		t.startsWith('while') ||
		(t.startsWith('drag') && t !== 'draggable') ||
		t.startsWith('layout') ||
		t.startsWith('onTap') ||
		t.startsWith('onPan') ||
		ur.has(t)
	);
}
let ws = (t) => !zt(t);
function hr(t) {
	t && (ws = (e) => (e.startsWith('on') ? !zt(e) : t(e)));
}
try {
	hr(require('@emotion/is-prop-valid').default);
} catch {}
function fr(t, e, n) {
	const s = {};
	for (const i in t)
		(i === 'values' && typeof t.values == 'object') ||
			((ws(i) ||
				(n === !0 && zt(i)) ||
				(!e && !zt(i)) ||
				(t.draggable && i.startsWith('onDrag'))) &&
				(s[i] = t[i]));
	return s;
}
function dn(t, e, n) {
	return typeof t == 'string' ? t : P.transform(e + n * t);
}
function dr(t, e, n) {
	const s = dn(e, t.x, t.width),
		i = dn(n, t.y, t.height);
	return `${s} ${i}`;
}
const mr = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
	pr = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function gr(t, e, n = 1, s = 0, i = !0) {
	t.pathLength = 1;
	const o = i ? mr : pr;
	t[o.offset] = P.transform(-s);
	const r = P.transform(e),
		a = P.transform(n);
	t[o.array] = `${r} ${a}`;
}
function Ue(
	t,
	{
		attrX: e,
		attrY: n,
		attrScale: s,
		originX: i,
		originY: o,
		pathLength: r,
		pathSpacing: a = 1,
		pathOffset: c = 0,
		...l
	},
	u,
	h,
	f
) {
	if ((Oe(t, l, u, f), h)) {
		t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
		return;
	}
	(t.attrs = t.style), (t.style = {});
	const { attrs: d, style: m, dimensions: y } = t;
	d.transform && (y && (m.transform = d.transform), delete d.transform),
		y &&
			(i !== void 0 || o !== void 0 || m.transform) &&
			(m.transformOrigin = dr(y, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)),
		e !== void 0 && (d.x = e),
		n !== void 0 && (d.y = n),
		s !== void 0 && (d.scale = s),
		r !== void 0 && gr(d, r, a, c, !1);
}
const Ds = () => ({ ...Ie(), attrs: {} }),
	Ne = (t) => typeof t == 'string' && t.toLowerCase() === 'svg';
function yr(t, e, n, s) {
	const i = v.useMemo(() => {
		const o = Ds();
		return (
			Ue(o, e, { enableHardwareAcceleration: !1 }, Ne(s), t.transformTemplate),
			{ ...o.attrs, style: { ...o.style } }
		);
	}, [e]);
	if (t.style) {
		const o = {};
		As(o, t.style, t), (i.style = { ...o, ...i.style });
	}
	return i;
}
function vr(t = !1) {
	return (n, s, i, { latestValues: o }, r) => {
		const c = (je(n) ? yr : lr)(s, o, r, n),
			u = { ...fr(s, typeof n == 'string', t), ...c, ref: i },
			{ children: h } = s,
			f = v.useMemo(() => (O(h) ? h.get() : h), [h]);
		return v.createElement(n, { ...u, children: f });
	};
}
const Ge = (t) => t.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function Ms(t, { style: e, vars: n }, s, i) {
	Object.assign(t.style, e, i && i.getProjectionStyles(s));
	for (const o in n) t.style.setProperty(o, n[o]);
}
const Rs = new Set([
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
function Ls(t, e, n, s) {
	Ms(t, e, void 0, s);
	for (const i in e.attrs) t.setAttribute(Rs.has(i) ? i : Ge(i), e.attrs[i]);
}
function $e(t, e) {
	const { style: n } = t,
		s = {};
	for (const i in n) (O(n[i]) || (e.style && O(e.style[i])) || Ts(i, t)) && (s[i] = n[i]);
	return s;
}
function Es(t, e) {
	const n = $e(t, e);
	for (const s in t)
		if (O(t[s]) || O(e[s])) {
			const i = Et.indexOf(s) !== -1 ? 'attr' + s.charAt(0).toUpperCase() + s.substring(1) : s;
			n[i] = t[s];
		}
	return n;
}
function We(t, e, n, s = {}, i = {}) {
	return (
		typeof e == 'function' && (e = e(n !== void 0 ? n : t.custom, s, i)),
		typeof e == 'string' && (e = t.variants && t.variants[e]),
		typeof e == 'function' && (e = e(n !== void 0 ? n : t.custom, s, i)),
		e
	);
}
function Fs(t) {
	const e = v.useRef(null);
	return e.current === null && (e.current = t()), e.current;
}
const Ht = (t) => Array.isArray(t),
	xr = (t) => !!(t && typeof t == 'object' && t.mix && t.toValue),
	Pr = (t) => (Ht(t) ? t[t.length - 1] || 0 : t);
function Gt(t) {
	const e = O(t) ? t.get() : t;
	return xr(e) ? e.toValue() : e;
}
function Tr({ scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n }, s, i, o) {
	const r = { latestValues: br(s, i, o, t), renderState: e() };
	return n && (r.mount = (a) => n(s, a, r)), r;
}
const Bs = (t) => (e, n) => {
	const s = v.useContext(Zt),
		i = v.useContext(Lt),
		o = () => Tr(t, e, s, i);
	return n ? o() : Fs(o);
};
function br(t, e, n, s) {
	const i = {},
		o = s(t, {});
	for (const f in o) i[f] = Gt(o[f]);
	let { initial: r, animate: a } = t;
	const c = te(t),
		l = vs(t);
	e &&
		l &&
		!c &&
		t.inherit !== !1 &&
		(r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
	let u = n ? n.initial === !1 : !1;
	u = u || r === !1;
	const h = u ? a : r;
	return (
		h &&
			typeof h != 'boolean' &&
			!Jt(h) &&
			(Array.isArray(h) ? h : [h]).forEach((d) => {
				const m = We(t, d);
				if (!m) return;
				const { transitionEnd: y, transition: x, ...V } = m;
				for (const g in V) {
					let p = V[g];
					if (Array.isArray(p)) {
						const T = u ? p.length - 1 : 0;
						p = p[T];
					}
					p !== null && (i[g] = p);
				}
				for (const g in y) i[g] = y[g];
			}),
		i
	);
}
const R = (t) => t;
class mn {
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
function Vr(t) {
	let e = new mn(),
		n = new mn(),
		s = 0,
		i = !1,
		o = !1;
	const r = new WeakSet(),
		a = {
			schedule: (c, l = !1, u = !1) => {
				const h = u && i,
					f = h ? e : n;
				return l && r.add(c), f.add(c) && h && i && (s = e.order.length), c;
			},
			cancel: (c) => {
				n.remove(c), r.delete(c);
			},
			process: (c) => {
				if (i) {
					o = !0;
					return;
				}
				if (((i = !0), ([e, n] = [n, e]), n.clear(), (s = e.order.length), s))
					for (let l = 0; l < s; l++) {
						const u = e.order[l];
						u(c), r.has(u) && (a.schedule(u), t());
					}
				(i = !1), o && ((o = !1), a.process(c));
			},
		};
	return a;
}
const It = ['prepare', 'read', 'update', 'preRender', 'render', 'postRender'],
	Sr = 40;
function Cr(t, e) {
	let n = !1,
		s = !0;
	const i = { delta: 0, timestamp: 0, isProcessing: !1 },
		o = It.reduce((h, f) => ((h[f] = Vr(() => (n = !0))), h), {}),
		r = (h) => o[h].process(i),
		a = () => {
			const h = performance.now();
			(n = !1),
				(i.delta = s ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, Sr), 1)),
				(i.timestamp = h),
				(i.isProcessing = !0),
				It.forEach(r),
				(i.isProcessing = !1),
				n && e && ((s = !1), t(a));
		},
		c = () => {
			(n = !0), (s = !0), i.isProcessing || t(a);
		};
	return {
		schedule: It.reduce((h, f) => {
			const d = o[f];
			return (h[f] = (m, y = !1, x = !1) => (n || c(), d.schedule(m, y, x))), h;
		}, {}),
		cancel: (h) => It.forEach((f) => o[f].cancel(h)),
		state: i,
		steps: o,
	};
}
const {
		schedule: C,
		cancel: _,
		state: k,
		steps: re,
	} = Cr(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : R, !0),
	Ar = {
		useVisualState: Bs({
			scrapeMotionValuesFromProps: Es,
			createRenderState: Ds,
			onMount: (t, e, { renderState: n, latestValues: s }) => {
				C.read(() => {
					try {
						n.dimensions = typeof e.getBBox == 'function' ? e.getBBox() : e.getBoundingClientRect();
					} catch {
						n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
					}
				}),
					C.render(() => {
						Ue(n, s, { enableHardwareAcceleration: !1 }, Ne(e.tagName), t.transformTemplate),
							Ls(e, n);
					});
			},
		}),
	},
	wr = { useVisualState: Bs({ scrapeMotionValuesFromProps: $e, createRenderState: Ie }) };
function ks(t, { forwardMotionProps: e = !1 }, n, s) {
	return {
		...(je(t) ? Ar : wr),
		preloadedFeatures: n,
		useRender: vr(e),
		createVisualElement: s,
		Component: t,
	};
}
function z(t, e, n, s = { passive: !0 }) {
	return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
const js = (t) =>
	t.pointerType === 'mouse' ? typeof t.button != 'number' || t.button <= 0 : t.isPrimary !== !1;
function ne(t, e = 'page') {
	return { point: { x: t[e + 'X'], y: t[e + 'Y'] } };
}
const Dr = (t) => (e) => js(e) && t(e, ne(e));
function H(t, e, n, s) {
	return z(t, e, Dr(n), s);
}
const Mr = (t, e) => (n) => e(t(n)),
	J = (...t) => t.reduce(Mr);
function Os(t) {
	let e = null;
	return () => {
		const n = () => {
			e = null;
		};
		return e === null ? ((e = t), n) : !1;
	};
}
const pn = Os('dragHorizontal'),
	gn = Os('dragVertical');
function Is(t) {
	let e = !1;
	if (t === 'y') e = gn();
	else if (t === 'x') e = pn();
	else {
		const n = pn(),
			s = gn();
		n && s
			? (e = () => {
					n(), s();
			  })
			: (n && n(), s && s());
	}
	return e;
}
function Us() {
	const t = Is(!0);
	return t ? (t(), !1) : !0;
}
class st {
	constructor(e) {
		(this.isMounted = !1), (this.node = e);
	}
	update() {}
}
function yn(t, e) {
	const n = 'pointer' + (e ? 'enter' : 'leave'),
		s = 'onHover' + (e ? 'Start' : 'End'),
		i = (o, r) => {
			if (o.type === 'touch' || Us()) return;
			const a = t.getProps();
			t.animationState && a.whileHover && t.animationState.setActive('whileHover', e),
				a[s] && C.update(() => a[s](o, r));
		};
	return H(t.current, n, i, { passive: !t.getProps()[s] });
}
class Rr extends st {
	mount() {
		this.unmount = J(yn(this.node, !0), yn(this.node, !1));
	}
	unmount() {}
}
class Lr extends st {
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
		this.unmount = J(
			z(this.node.current, 'focus', () => this.onFocus()),
			z(this.node.current, 'blur', () => this.onBlur())
		);
	}
	unmount() {}
}
const Ns = (t, e) => (e ? (t === e ? !0 : Ns(t, e.parentElement)) : !1);
function oe(t, e) {
	if (!e) return;
	const n = new PointerEvent('pointer' + t);
	e(n, ne(n));
}
class Er extends st {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = R),
			(this.removeEndListeners = R),
			(this.removeAccessibleListeners = R),
			(this.startPointerPress = (e, n) => {
				if ((this.removeEndListeners(), this.isPressing)) return;
				const s = this.node.getProps(),
					o = H(
						window,
						'pointerup',
						(a, c) => {
							if (!this.checkPressEnd()) return;
							const { onTap: l, onTapCancel: u } = this.node.getProps();
							C.update(() => {
								Ns(this.node.current, a.target) ? l && l(a, c) : u && u(a, c);
							});
						},
						{ passive: !(s.onTap || s.onPointerUp) }
					),
					r = H(window, 'pointercancel', (a, c) => this.cancelPress(a, c), {
						passive: !(s.onTapCancel || s.onPointerCancel),
					});
				(this.removeEndListeners = J(o, r)), this.startPress(e, n);
			}),
			(this.startAccessiblePress = () => {
				const e = (o) => {
						if (o.key !== 'Enter' || this.isPressing) return;
						const r = (a) => {
							a.key !== 'Enter' ||
								!this.checkPressEnd() ||
								oe('up', (c, l) => {
									const { onTap: u } = this.node.getProps();
									u && C.update(() => u(c, l));
								});
						};
						this.removeEndListeners(),
							(this.removeEndListeners = z(this.node.current, 'keyup', r)),
							oe('down', (a, c) => {
								this.startPress(a, c);
							});
					},
					n = z(this.node.current, 'keydown', e),
					s = () => {
						this.isPressing && oe('cancel', (o, r) => this.cancelPress(o, r));
					},
					i = z(this.node.current, 'blur', s);
				this.removeAccessibleListeners = J(n, i);
			});
	}
	startPress(e, n) {
		this.isPressing = !0;
		const { onTapStart: s, whileTap: i } = this.node.getProps();
		i && this.node.animationState && this.node.animationState.setActive('whileTap', !0),
			s && C.update(() => s(e, n));
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap &&
				this.node.animationState &&
				this.node.animationState.setActive('whileTap', !1),
			!Us()
		);
	}
	cancelPress(e, n) {
		if (!this.checkPressEnd()) return;
		const { onTapCancel: s } = this.node.getProps();
		s && C.update(() => s(e, n));
	}
	mount() {
		const e = this.node.getProps(),
			n = H(this.node.current, 'pointerdown', this.startPointerPress, {
				passive: !(e.onTapStart || e.onPointerStart),
			}),
			s = z(this.node.current, 'focus', this.startAccessiblePress);
		this.removeStartListeners = J(n, s);
	}
	unmount() {
		this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
	}
}
const xe = new WeakMap(),
	ae = new WeakMap(),
	Fr = (t) => {
		const e = xe.get(t.target);
		e && e(t);
	},
	Br = (t) => {
		t.forEach(Fr);
	};
function kr({ root: t, ...e }) {
	const n = t || document;
	ae.has(n) || ae.set(n, {});
	const s = ae.get(n),
		i = JSON.stringify(e);
	return s[i] || (s[i] = new IntersectionObserver(Br, { root: t, ...e })), s[i];
}
function jr(t, e, n) {
	const s = kr(e);
	return (
		xe.set(t, n),
		s.observe(t),
		() => {
			xe.delete(t), s.unobserve(t);
		}
	);
}
const Or = { some: 0, all: 1 };
class Ir extends st {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
	}
	startObserver() {
		this.unmount();
		const { viewport: e = {} } = this.node.getProps(),
			{ root: n, margin: s, amount: i = 'some', once: o } = e,
			r = {
				root: n ? n.current : void 0,
				rootMargin: s,
				threshold: typeof i == 'number' ? i : Or[i],
			},
			a = (c) => {
				const { isIntersecting: l } = c;
				if (this.isInView === l || ((this.isInView = l), o && !l && this.hasEnteredView)) return;
				l && (this.hasEnteredView = !0),
					this.node.animationState && this.node.animationState.setActive('whileInView', l);
				const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(),
					f = l ? u : h;
				f && f(c);
			};
		return jr(this.node.current, r, a);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > 'u') return;
		const { props: e, prevProps: n } = this.node;
		['amount', 'margin', 'root'].some(Ur(e, n)) && this.startObserver();
	}
	unmount() {}
}
function Ur({ viewport: t = {} }, { viewport: e = {} } = {}) {
	return (n) => t[n] !== e[n];
}
const Nr = {
	inView: { Feature: Ir },
	tap: { Feature: Er },
	focus: { Feature: Lr },
	hover: { Feature: Rr },
};
function Gs(t, e) {
	if (!Array.isArray(e)) return !1;
	const n = e.length;
	if (n !== t.length) return !1;
	for (let s = 0; s < n; s++) if (e[s] !== t[s]) return !1;
	return !0;
}
function Gr(t) {
	const e = {};
	return t.values.forEach((n, s) => (e[s] = n.get())), e;
}
function $r(t) {
	const e = {};
	return t.values.forEach((n, s) => (e[s] = n.getVelocity())), e;
}
function se(t, e, n) {
	const s = t.getProps();
	return We(s, e, n !== void 0 ? n : s.custom, Gr(t), $r(t));
}
const Wr = 'framerAppearId',
	zr = 'data-' + Ge(Wr);
let Hr = R,
	ze = R;
const tt = (t) => t * 1e3,
	K = (t) => t / 1e3,
	vn = { current: !1 },
	$s = (t) => Array.isArray(t) && typeof t[0] == 'number';
function Ws(t) {
	return !!(!t || (typeof t == 'string' && zs[t]) || $s(t) || (Array.isArray(t) && t.every(Ws)));
}
const Vt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
	zs = {
		linear: 'linear',
		ease: 'ease',
		easeIn: 'ease-in',
		easeOut: 'ease-out',
		easeInOut: 'ease-in-out',
		circIn: Vt([0, 0.65, 0.55, 1]),
		circOut: Vt([0.55, 0, 1, 0.45]),
		backIn: Vt([0.31, 0.01, 0.66, -0.59]),
		backOut: Vt([0.33, 1.53, 0.69, 0.99]),
	};
function Hs(t) {
	if (t) return $s(t) ? Vt(t) : Array.isArray(t) ? t.map(Hs) : zs[t];
}
function Kr(
	t,
	e,
	n,
	{ delay: s = 0, duration: i, repeat: o = 0, repeatType: r = 'loop', ease: a, times: c } = {}
) {
	const l = { [e]: n };
	c && (l.offset = c);
	const u = Hs(a);
	return (
		Array.isArray(u) && (l.easing = u),
		t.animate(l, {
			delay: s,
			duration: i,
			easing: Array.isArray(u) ? 'linear' : u,
			fill: 'both',
			iterations: o + 1,
			direction: r === 'reverse' ? 'alternate' : 'normal',
		})
	);
}
function _r(t, { repeat: e, repeatType: n = 'loop' }) {
	const s = e && n !== 'loop' && e % 2 === 1 ? 0 : t.length - 1;
	return t[s];
}
const Ks = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
	Xr = 1e-7,
	Yr = 12;
function qr(t, e, n, s, i) {
	let o,
		r,
		a = 0;
	do (r = e + (n - e) / 2), (o = Ks(r, s, i) - t), o > 0 ? (n = r) : (e = r);
	while (Math.abs(o) > Xr && ++a < Yr);
	return r;
}
function kt(t, e, n, s) {
	if (t === e && n === s) return R;
	const i = (o) => qr(o, 0, 1, t, n);
	return (o) => (o === 0 || o === 1 ? o : Ks(i(o), e, s));
}
const Zr = kt(0.42, 0, 1, 1),
	Qr = kt(0, 0, 0.58, 1),
	_s = kt(0.42, 0, 0.58, 1),
	Jr = (t) => Array.isArray(t) && typeof t[0] != 'number',
	Xs = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
	Ys = (t) => (e) => 1 - t(1 - e),
	qs = (t) => 1 - Math.sin(Math.acos(t)),
	He = Ys(qs),
	to = Xs(He),
	Zs = kt(0.33, 1.53, 0.69, 0.99),
	Ke = Ys(Zs),
	eo = Xs(Ke),
	no = (t) => ((t *= 2) < 1 ? 0.5 * Ke(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)))),
	so = {
		linear: R,
		easeIn: Zr,
		easeInOut: _s,
		easeOut: Qr,
		circIn: qs,
		circInOut: to,
		circOut: He,
		backIn: Ke,
		backInOut: eo,
		backOut: Zs,
		anticipate: no,
	},
	xn = (t) => {
		if (Array.isArray(t)) {
			ze(t.length === 4);
			const [e, n, s, i] = t;
			return kt(e, n, s, i);
		} else if (typeof t == 'string') return so[t];
		return t;
	},
	_e = (t, e) => (n) =>
		!!(
			(Ft(n) && ir.test(n) && n.startsWith(t)) ||
			(e && Object.prototype.hasOwnProperty.call(n, e))
		),
	Qs = (t, e, n) => (s) => {
		if (!Ft(s)) return s;
		const [i, o, r, a] = s.match(ee);
		return {
			[t]: parseFloat(i),
			[e]: parseFloat(o),
			[n]: parseFloat(r),
			alpha: a !== void 0 ? parseFloat(a) : 1,
		};
	},
	io = (t) => et(0, 255, t),
	ce = { ...ut, transform: (t) => Math.round(io(t)) },
	ct = {
		test: _e('rgb', 'red'),
		parse: Qs('red', 'green', 'blue'),
		transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) =>
			'rgba(' +
			ce.transform(t) +
			', ' +
			ce.transform(e) +
			', ' +
			ce.transform(n) +
			', ' +
			Ct(St.transform(s)) +
			')',
	};
function ro(t) {
	let e = '',
		n = '',
		s = '',
		i = '';
	return (
		t.length > 5
			? ((e = t.substring(1, 3)),
			  (n = t.substring(3, 5)),
			  (s = t.substring(5, 7)),
			  (i = t.substring(7, 9)))
			: ((e = t.substring(1, 2)),
			  (n = t.substring(2, 3)),
			  (s = t.substring(3, 4)),
			  (i = t.substring(4, 5)),
			  (e += e),
			  (n += n),
			  (s += s),
			  (i += i)),
		{
			red: parseInt(e, 16),
			green: parseInt(n, 16),
			blue: parseInt(s, 16),
			alpha: i ? parseInt(i, 16) / 255 : 1,
		}
	);
}
const Pe = { test: _e('#'), parse: ro, transform: ct.transform },
	mt = {
		test: _e('hsl', 'hue'),
		parse: Qs('hue', 'saturation', 'lightness'),
		transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) =>
			'hsla(' +
			Math.round(t) +
			', ' +
			G.transform(Ct(e)) +
			', ' +
			G.transform(Ct(n)) +
			', ' +
			Ct(St.transform(s)) +
			')',
	},
	j = {
		test: (t) => ct.test(t) || Pe.test(t) || mt.test(t),
		parse: (t) => (ct.test(t) ? ct.parse(t) : mt.test(t) ? mt.parse(t) : Pe.parse(t)),
		transform: (t) => (Ft(t) ? t : t.hasOwnProperty('red') ? ct.transform(t) : mt.transform(t)),
	},
	M = (t, e, n) => -n * t + n * e + t;
function le(t, e, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
	);
}
function oo({ hue: t, saturation: e, lightness: n, alpha: s }) {
	(t /= 360), (e /= 100), (n /= 100);
	let i = 0,
		o = 0,
		r = 0;
	if (!e) i = o = r = n;
	else {
		const a = n < 0.5 ? n * (1 + e) : n + e - n * e,
			c = 2 * n - a;
		(i = le(c, a, t + 1 / 3)), (o = le(c, a, t)), (r = le(c, a, t - 1 / 3));
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(o * 255),
		blue: Math.round(r * 255),
		alpha: s,
	};
}
const ue = (t, e, n) => {
		const s = t * t;
		return Math.sqrt(Math.max(0, n * (e * e - s) + s));
	},
	ao = [Pe, ct, mt],
	co = (t) => ao.find((e) => e.test(t));
function Pn(t) {
	const e = co(t);
	let n = e.parse(t);
	return e === mt && (n = oo(n)), n;
}
const Js = (t, e) => {
	const n = Pn(t),
		s = Pn(e),
		i = { ...n };
	return (o) => (
		(i.red = ue(n.red, s.red, o)),
		(i.green = ue(n.green, s.green, o)),
		(i.blue = ue(n.blue, s.blue, o)),
		(i.alpha = M(n.alpha, s.alpha, o)),
		ct.transform(i)
	);
};
function lo(t) {
	var e, n;
	return (
		isNaN(t) &&
		Ft(t) &&
		(((e = t.match(ee)) === null || e === void 0 ? void 0 : e.length) || 0) +
			(((n = t.match(Ss)) === null || n === void 0 ? void 0 : n.length) || 0) >
			0
	);
}
const ti = { regex: nr, countKey: 'Vars', token: '${v}', parse: R },
	ei = { regex: Ss, countKey: 'Colors', token: '${c}', parse: j.parse },
	ni = { regex: ee, countKey: 'Numbers', token: '${n}', parse: ut.parse };
function he(t, { regex: e, countKey: n, token: s, parse: i }) {
	const o = t.tokenised.match(e);
	o &&
		((t['num' + n] = o.length),
		(t.tokenised = t.tokenised.replace(e, s)),
		t.values.push(...o.map(i)));
}
function Kt(t) {
	const e = t.toString(),
		n = { value: e, tokenised: e, values: [], numVars: 0, numColors: 0, numNumbers: 0 };
	return n.value.includes('var(--') && he(n, ti), he(n, ei), he(n, ni), n;
}
function si(t) {
	return Kt(t).values;
}
function ii(t) {
	const { values: e, numColors: n, numVars: s, tokenised: i } = Kt(t),
		o = e.length;
	return (r) => {
		let a = i;
		for (let c = 0; c < o; c++)
			c < s
				? (a = a.replace(ti.token, r[c]))
				: c < s + n
				? (a = a.replace(ei.token, j.transform(r[c])))
				: (a = a.replace(ni.token, Ct(r[c])));
		return a;
	};
}
const uo = (t) => (typeof t == 'number' ? 0 : t);
function ho(t) {
	const e = si(t);
	return ii(t)(e.map(uo));
}
const nt = { test: lo, parse: si, createTransformer: ii, getAnimatableNone: ho },
	ri = (t, e) => (n) => `${n > 0 ? e : t}`;
function oi(t, e) {
	return typeof t == 'number'
		? (n) => M(t, e, n)
		: j.test(t)
		? Js(t, e)
		: t.startsWith('var(')
		? ri(t, e)
		: ci(t, e);
}
const ai = (t, e) => {
		const n = [...t],
			s = n.length,
			i = t.map((o, r) => oi(o, e[r]));
		return (o) => {
			for (let r = 0; r < s; r++) n[r] = i[r](o);
			return n;
		};
	},
	fo = (t, e) => {
		const n = { ...t, ...e },
			s = {};
		for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = oi(t[i], e[i]));
		return (i) => {
			for (const o in s) n[o] = s[o](i);
			return n;
		};
	},
	ci = (t, e) => {
		const n = nt.createTransformer(e),
			s = Kt(t),
			i = Kt(e);
		return s.numVars === i.numVars && s.numColors === i.numColors && s.numNumbers >= i.numNumbers
			? J(ai(s.values, i.values), n)
			: ri(t, e);
	},
	Rt = (t, e, n) => {
		const s = e - t;
		return s === 0 ? 1 : (n - t) / s;
	},
	Tn = (t, e) => (n) => M(t, e, n);
function mo(t) {
	return typeof t == 'number'
		? Tn
		: typeof t == 'string'
		? j.test(t)
			? Js
			: ci
		: Array.isArray(t)
		? ai
		: typeof t == 'object'
		? fo
		: Tn;
}
function po(t, e, n) {
	const s = [],
		i = n || mo(t[0]),
		o = t.length - 1;
	for (let r = 0; r < o; r++) {
		let a = i(t[r], t[r + 1]);
		if (e) {
			const c = Array.isArray(e) ? e[r] || R : e;
			a = J(c, a);
		}
		s.push(a);
	}
	return s;
}
function li(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
	const o = t.length;
	if ((ze(o === e.length), o === 1)) return () => e[0];
	t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
	const r = po(e, s, i),
		a = r.length,
		c = (l) => {
			let u = 0;
			if (a > 1) for (; u < t.length - 2 && !(l < t[u + 1]); u++);
			const h = Rt(t[u], t[u + 1], l);
			return r[u](h);
		};
	return n ? (l) => c(et(t[0], t[o - 1], l)) : c;
}
function go(t, e) {
	const n = t[t.length - 1];
	for (let s = 1; s <= e; s++) {
		const i = Rt(0, e, s);
		t.push(M(n, 1, i));
	}
}
function yo(t) {
	const e = [0];
	return go(e, t.length - 1), e;
}
function vo(t, e) {
	return t.map((n) => n * e);
}
function xo(t, e) {
	return t.map(() => e || _s).splice(0, t.length - 1);
}
function _t({ duration: t = 300, keyframes: e, times: n, ease: s = 'easeInOut' }) {
	const i = Jr(s) ? s.map(xn) : xn(s),
		o = { done: !1, value: e[0] },
		r = vo(n && n.length === e.length ? n : yo(e), t),
		a = li(r, e, { ease: Array.isArray(i) ? i : xo(e, i) });
	return { calculatedDuration: t, next: (c) => ((o.value = a(c)), (o.done = c >= t), o) };
}
function ui(t, e) {
	return e ? t * (1e3 / e) : 0;
}
const Po = 5;
function hi(t, e, n) {
	const s = Math.max(e - Po, 0);
	return ui(n - t(s), e - s);
}
const fe = 0.001,
	To = 0.01,
	bn = 10,
	bo = 0.05,
	Vo = 1;
function So({ duration: t = 800, bounce: e = 0.25, velocity: n = 0, mass: s = 1 }) {
	let i, o;
	Hr(t <= tt(bn));
	let r = 1 - e;
	(r = et(bo, Vo, r)),
		(t = et(To, bn, K(t))),
		r < 1
			? ((i = (l) => {
					const u = l * r,
						h = u * t,
						f = u - n,
						d = Te(l, r),
						m = Math.exp(-h);
					return fe - (f / d) * m;
			  }),
			  (o = (l) => {
					const h = l * r * t,
						f = h * n + n,
						d = Math.pow(r, 2) * Math.pow(l, 2) * t,
						m = Math.exp(-h),
						y = Te(Math.pow(l, 2), r);
					return ((-i(l) + fe > 0 ? -1 : 1) * ((f - d) * m)) / y;
			  }))
			: ((i = (l) => {
					const u = Math.exp(-l * t),
						h = (l - n) * t + 1;
					return -fe + u * h;
			  }),
			  (o = (l) => {
					const u = Math.exp(-l * t),
						h = (n - l) * (t * t);
					return u * h;
			  }));
	const a = 5 / t,
		c = Ao(i, o, a);
	if (((t = tt(t)), isNaN(c))) return { stiffness: 100, damping: 10, duration: t };
	{
		const l = Math.pow(c, 2) * s;
		return { stiffness: l, damping: r * 2 * Math.sqrt(s * l), duration: t };
	}
}
const Co = 12;
function Ao(t, e, n) {
	let s = n;
	for (let i = 1; i < Co; i++) s = s - t(s) / e(s);
	return s;
}
function Te(t, e) {
	return t * Math.sqrt(1 - e * e);
}
const wo = ['duration', 'bounce'],
	Do = ['stiffness', 'damping', 'mass'];
function Vn(t, e) {
	return e.some((n) => t[n] !== void 0);
}
function Mo(t) {
	let e = { velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1, ...t };
	if (!Vn(t, Do) && Vn(t, wo)) {
		const n = So(t);
		(e = { ...e, ...n, velocity: 0, mass: 1 }), (e.isResolvedFromDuration = !0);
	}
	return e;
}
function fi({ keyframes: t, restDelta: e, restSpeed: n, ...s }) {
	const i = t[0],
		o = t[t.length - 1],
		r = { done: !1, value: i },
		{
			stiffness: a,
			damping: c,
			mass: l,
			velocity: u,
			duration: h,
			isResolvedFromDuration: f,
		} = Mo(s),
		d = u ? -K(u) : 0,
		m = c / (2 * Math.sqrt(a * l)),
		y = o - i,
		x = K(Math.sqrt(a / l)),
		V = Math.abs(y) < 5;
	n || (n = V ? 0.01 : 2), e || (e = V ? 0.005 : 0.5);
	let g;
	if (m < 1) {
		const p = Te(x, m);
		g = (T) => {
			const b = Math.exp(-m * x * T);
			return o - b * (((d + m * x * y) / p) * Math.sin(p * T) + y * Math.cos(p * T));
		};
	} else if (m === 1) g = (p) => o - Math.exp(-x * p) * (y + (d + x * y) * p);
	else {
		const p = x * Math.sqrt(m * m - 1);
		g = (T) => {
			const b = Math.exp(-m * x * T),
				L = Math.min(p * T, 300);
			return o - (b * ((d + m * x * y) * Math.sinh(L) + p * y * Math.cosh(L))) / p;
		};
	}
	return {
		calculatedDuration: (f && h) || null,
		next: (p) => {
			const T = g(p);
			if (f) r.done = p >= h;
			else {
				let b = d;
				p !== 0 && (m < 1 ? (b = hi(g, p, T)) : (b = 0));
				const L = Math.abs(b) <= n,
					A = Math.abs(o - T) <= e;
				r.done = L && A;
			}
			return (r.value = r.done ? o : T), r;
		},
	};
}
function Sn({
	keyframes: t,
	velocity: e = 0,
	power: n = 0.8,
	timeConstant: s = 325,
	bounceDamping: i = 10,
	bounceStiffness: o = 500,
	modifyTarget: r,
	min: a,
	max: c,
	restDelta: l = 0.5,
	restSpeed: u,
}) {
	const h = t[0],
		f = { done: !1, value: h },
		d = (S) => (a !== void 0 && S < a) || (c !== void 0 && S > c),
		m = (S) => (a === void 0 ? c : c === void 0 || Math.abs(a - S) < Math.abs(c - S) ? a : c);
	let y = n * e;
	const x = h + y,
		V = r === void 0 ? x : r(x);
	V !== x && (y = V - h);
	const g = (S) => -y * Math.exp(-S / s),
		p = (S) => V + g(S),
		T = (S) => {
			const w = g(S),
				$ = p(S);
			(f.done = Math.abs(w) <= l), (f.value = f.done ? V : $);
		};
	let b, L;
	const A = (S) => {
		d(f.value) &&
			((b = S),
			(L = fi({
				keyframes: [f.value, m(f.value)],
				velocity: hi(p, S, f.value),
				damping: i,
				stiffness: o,
				restDelta: l,
				restSpeed: u,
			})));
	};
	return (
		A(0),
		{
			calculatedDuration: null,
			next: (S) => {
				let w = !1;
				return (
					!L && b === void 0 && ((w = !0), T(S), A(S)),
					b !== void 0 && S > b ? L.next(S - b) : (!w && T(S), f)
				);
			},
		}
	);
}
const Ro = (t) => {
		const e = ({ timestamp: n }) => t(n);
		return {
			start: () => C.update(e, !0),
			stop: () => _(e),
			now: () => (k.isProcessing ? k.timestamp : performance.now()),
		};
	},
	Cn = 2e4;
function An(t) {
	let e = 0;
	const n = 50;
	let s = t.next(e);
	for (; !s.done && e < Cn; ) (e += n), (s = t.next(e));
	return e >= Cn ? 1 / 0 : e;
}
const Lo = { decay: Sn, inertia: Sn, tween: _t, keyframes: _t, spring: fi };
function Xt({
	autoplay: t = !0,
	delay: e = 0,
	driver: n = Ro,
	keyframes: s,
	type: i = 'keyframes',
	repeat: o = 0,
	repeatDelay: r = 0,
	repeatType: a = 'loop',
	onPlay: c,
	onStop: l,
	onComplete: u,
	onUpdate: h,
	...f
}) {
	let d = 1,
		m = !1,
		y,
		x;
	const V = () => {
		x = new Promise((D) => {
			y = D;
		});
	};
	V();
	let g;
	const p = Lo[i] || _t;
	let T;
	p !== _t && typeof s[0] != 'number' && ((T = li([0, 100], s, { clamp: !1 })), (s = [0, 100]));
	const b = p({ ...f, keyframes: s });
	let L;
	a === 'mirror' && (L = p({ ...f, keyframes: [...s].reverse(), velocity: -(f.velocity || 0) }));
	let A = 'idle',
		S = null,
		w = null,
		$ = null;
	b.calculatedDuration === null && o && (b.calculatedDuration = An(b));
	const { calculatedDuration: W } = b;
	let X = 1 / 0,
		Y = 1 / 0;
	W !== null && ((X = W + r), (Y = X * (o + 1) - r));
	let B = 0;
	const F = (D) => {
			if (w === null) return;
			d > 0 && (w = Math.min(w, D)),
				d < 0 && (w = Math.min(D - Y / d, w)),
				S !== null ? (B = S) : (B = Math.round(D - w) * d);
			const xt = B - e * (d >= 0 ? 1 : -1),
				nn = d >= 0 ? xt < 0 : xt > Y;
			(B = Math.max(xt, 0)), A === 'finished' && S === null && (B = Y);
			let sn = B,
				rn = b;
			if (o) {
				const ie = B / X;
				let jt = Math.floor(ie),
					it = ie % 1;
				!it && ie >= 1 && (it = 1), it === 1 && jt--, (jt = Math.min(jt, o + 1));
				const an = !!(jt % 2);
				an && (a === 'reverse' ? ((it = 1 - it), r && (it -= r / X)) : a === 'mirror' && (rn = L));
				let cn = et(0, 1, it);
				B > Y && (cn = a === 'reverse' && an ? 1 : 0), (sn = cn * X);
			}
			const Pt = nn ? { done: !1, value: s[0] } : rn.next(sn);
			T && (Pt.value = T(Pt.value));
			let { done: on } = Pt;
			!nn && W !== null && (on = d >= 0 ? B >= Y : B <= 0);
			const $i = S === null && (A === 'finished' || (A === 'running' && on));
			return h && h(Pt.value), $i && Gi(), Pt;
		},
		q = () => {
			g && g.stop(), (g = void 0);
		},
		ht = () => {
			(A = 'idle'), q(), y(), V(), (w = $ = null);
		},
		Gi = () => {
			(A = 'finished'), u && u(), q(), y();
		},
		tn = () => {
			if (m) return;
			g || (g = n(F));
			const D = g.now();
			c && c(),
				S !== null ? (w = D - S) : (!w || A === 'finished') && (w = D),
				A === 'finished' && V(),
				($ = w),
				(S = null),
				(A = 'running'),
				g.start();
		};
	t && tn();
	const en = {
		then(D, xt) {
			return x.then(D, xt);
		},
		get time() {
			return K(B);
		},
		set time(D) {
			(D = tt(D)), (B = D), S !== null || !g || d === 0 ? (S = D) : (w = g.now() - D / d);
		},
		get duration() {
			const D = b.calculatedDuration === null ? An(b) : b.calculatedDuration;
			return K(D);
		},
		get speed() {
			return d;
		},
		set speed(D) {
			D === d || !g || ((d = D), (en.time = K(B)));
		},
		get state() {
			return A;
		},
		play: tn,
		pause: () => {
			(A = 'paused'), (S = B);
		},
		stop: () => {
			(m = !0), A !== 'idle' && ((A = 'idle'), l && l(), ht());
		},
		cancel: () => {
			$ !== null && F($), ht();
		},
		complete: () => {
			A = 'finished';
		},
		sample: (D) => ((w = 0), F(D)),
	};
	return en;
}
function Eo(t) {
	let e;
	return () => (e === void 0 && (e = t()), e);
}
const Fo = Eo(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
	Bo = new Set(['opacity', 'clipPath', 'filter', 'transform', 'backgroundColor']),
	Ut = 10,
	ko = 2e4,
	jo = (t, e) => e.type === 'spring' || t === 'backgroundColor' || !Ws(e.ease);
function Oo(t, e, { onUpdate: n, onComplete: s, ...i }) {
	if (
		!(
			Fo() &&
			Bo.has(e) &&
			!i.repeatDelay &&
			i.repeatType !== 'mirror' &&
			i.damping !== 0 &&
			i.type !== 'inertia'
		)
	)
		return !1;
	let r = !1,
		a,
		c;
	const l = () => {
		c = new Promise((g) => {
			a = g;
		});
	};
	l();
	let { keyframes: u, duration: h = 300, ease: f, times: d } = i;
	if (jo(e, i)) {
		const g = Xt({ ...i, repeat: 0, delay: 0 });
		let p = { done: !1, value: u[0] };
		const T = [];
		let b = 0;
		for (; !p.done && b < ko; ) (p = g.sample(b)), T.push(p.value), (b += Ut);
		(d = void 0), (u = T), (h = b - Ut), (f = 'linear');
	}
	const m = Kr(t.owner.current, e, u, { ...i, duration: h, ease: f, times: d });
	i.syncStart &&
		(m.startTime = k.isProcessing
			? k.timestamp
			: document.timeline
			? document.timeline.currentTime
			: performance.now());
	const y = () => m.cancel(),
		x = () => {
			C.update(y), a(), l();
		};
	return (
		(m.onfinish = () => {
			t.set(_r(u, i)), s && s(), x();
		}),
		{
			then(g, p) {
				return c.then(g, p);
			},
			attachTimeline(g) {
				return (m.timeline = g), (m.onfinish = null), R;
			},
			get time() {
				return K(m.currentTime || 0);
			},
			set time(g) {
				m.currentTime = tt(g);
			},
			get speed() {
				return m.playbackRate;
			},
			set speed(g) {
				m.playbackRate = g;
			},
			get duration() {
				return K(h);
			},
			play: () => {
				r || (m.play(), _(y));
			},
			pause: () => m.pause(),
			stop: () => {
				if (((r = !0), m.playState === 'idle')) return;
				const { currentTime: g } = m;
				if (g) {
					const p = Xt({ ...i, autoplay: !1 });
					t.setWithVelocity(p.sample(g - Ut).value, p.sample(g).value, Ut);
				}
				x();
			},
			complete: () => m.finish(),
			cancel: x,
		}
	);
}
function Io({ keyframes: t, delay: e, onUpdate: n, onComplete: s }) {
	const i = () => (
		n && n(t[t.length - 1]),
		s && s(),
		{
			time: 0,
			speed: 1,
			duration: 0,
			play: R,
			pause: R,
			stop: R,
			then: (o) => (o(), Promise.resolve()),
			cancel: R,
			complete: R,
		}
	);
	return e ? Xt({ keyframes: [0, 1], duration: 0, delay: e, onComplete: i }) : i();
}
const Uo = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
	No = (t) => ({
		type: 'spring',
		stiffness: 550,
		damping: t === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	Go = { type: 'keyframes', duration: 0.8 },
	$o = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	Wo = (t, { keyframes: e }) =>
		e.length > 2 ? Go : lt.has(t) ? (t.startsWith('scale') ? No(e[1]) : Uo) : $o,
	be = (t, e) =>
		t === 'zIndex'
			? !1
			: !!(
					typeof e == 'number' ||
					Array.isArray(e) ||
					(typeof e == 'string' && (nt.test(e) || e === '0') && !e.startsWith('url('))
			  ),
	zo = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function Ho(t) {
	const [e, n] = t.slice(0, -1).split('(');
	if (e === 'drop-shadow') return t;
	const [s] = n.match(ee) || [];
	if (!s) return t;
	const i = n.replace(s, '');
	let o = zo.has(e) ? 1 : 0;
	return s !== n && (o *= 100), e + '(' + o + i + ')';
}
const Ko = /([a-z-]*)\(.*?\)/g,
	Ve = {
		...nt,
		getAnimatableNone: (t) => {
			const e = t.match(Ko);
			return e ? e.map(Ho).join(' ') : t;
		},
	},
	_o = {
		...Cs,
		color: j,
		backgroundColor: j,
		outlineColor: j,
		fill: j,
		stroke: j,
		borderColor: j,
		borderTopColor: j,
		borderRightColor: j,
		borderBottomColor: j,
		borderLeftColor: j,
		filter: Ve,
		WebkitFilter: Ve,
	},
	Xe = (t) => _o[t];
function di(t, e) {
	let n = Xe(t);
	return n !== Ve && (n = nt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const mi = (t) => /^0[^.\s]+$/.test(t);
function Xo(t) {
	if (typeof t == 'number') return t === 0;
	if (t !== null) return t === 'none' || t === '0' || mi(t);
}
function Yo(t, e, n, s) {
	const i = be(e, n);
	let o;
	Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
	const r = s.from !== void 0 ? s.from : t.get();
	let a;
	const c = [];
	for (let l = 0; l < o.length; l++)
		o[l] === null && (o[l] = l === 0 ? r : o[l - 1]),
			Xo(o[l]) && c.push(l),
			typeof o[l] == 'string' && o[l] !== 'none' && o[l] !== '0' && (a = o[l]);
	if (i && c.length && a)
		for (let l = 0; l < c.length; l++) {
			const u = c[l];
			o[u] = di(e, a);
		}
	return o;
}
function qo({
	when: t,
	delay: e,
	delayChildren: n,
	staggerChildren: s,
	staggerDirection: i,
	repeat: o,
	repeatType: r,
	repeatDelay: a,
	from: c,
	elapsed: l,
	...u
}) {
	return !!Object.keys(u).length;
}
function pi(t, e) {
	return t[e] || t.default || t;
}
const Ye =
	(t, e, n, s = {}) =>
	(i) => {
		const o = pi(s, t) || {},
			r = o.delay || s.delay || 0;
		let { elapsed: a = 0 } = s;
		a = a - tt(r);
		const c = Yo(e, t, n, o),
			l = c[0],
			u = c[c.length - 1],
			h = be(t, l),
			f = be(t, u);
		let d = {
			keyframes: c,
			velocity: e.getVelocity(),
			ease: 'easeOut',
			...o,
			delay: -a,
			onUpdate: (m) => {
				e.set(m), o.onUpdate && o.onUpdate(m);
			},
			onComplete: () => {
				i(), o.onComplete && o.onComplete();
			},
		};
		if (
			(qo(o) || (d = { ...d, ...Wo(t, d) }),
			d.duration && (d.duration = tt(d.duration)),
			d.repeatDelay && (d.repeatDelay = tt(d.repeatDelay)),
			!h || !f || vn.current || o.type === !1)
		)
			return Io(vn.current ? { ...d, delay: 0 } : d);
		if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
			const m = Oo(e, t, d);
			if (m) return m;
		}
		return Xt(d);
	};
function Yt(t) {
	return !!(O(t) && t.add);
}
const gi = (t) => /^\-?\d*\.?\d+$/.test(t);
function qe(t, e) {
	t.indexOf(e) === -1 && t.push(e);
}
function Ze(t, e) {
	const n = t.indexOf(e);
	n > -1 && t.splice(n, 1);
}
function tl([...t], e, n) {
	const s = e < 0 ? t.length + e : e;
	if (s >= 0 && s < t.length) {
		const i = n < 0 ? t.length + n : n,
			[o] = t.splice(e, 1);
		t.splice(i, 0, o);
	}
	return t;
}
class Qe {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return qe(this.subscriptions, e), () => Ze(this.subscriptions, e);
	}
	notify(e, n, s) {
		const i = this.subscriptions.length;
		if (i)
			if (i === 1) this.subscriptions[0](e, n, s);
			else
				for (let o = 0; o < i; o++) {
					const r = this.subscriptions[o];
					r && r(e, n, s);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const Zo = (t) => !isNaN(parseFloat(t)),
	wn = { current: void 0 };
class Qo {
	constructor(e, n = {}) {
		(this.version = '10.16.4'),
			(this.timeDelta = 0),
			(this.lastUpdated = 0),
			(this.canTrackVelocity = !1),
			(this.events = {}),
			(this.updateAndNotify = (s, i = !0) => {
				(this.prev = this.current), (this.current = s);
				const { delta: o, timestamp: r } = k;
				this.lastUpdated !== r &&
					((this.timeDelta = o), (this.lastUpdated = r), C.postRender(this.scheduleVelocityCheck)),
					this.prev !== this.current &&
						this.events.change &&
						this.events.change.notify(this.current),
					this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
					i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
			}),
			(this.scheduleVelocityCheck = () => C.postRender(this.velocityCheck)),
			(this.velocityCheck = ({ timestamp: s }) => {
				s !== this.lastUpdated &&
					((this.prev = this.current),
					this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
			}),
			(this.hasAnimated = !1),
			(this.prev = this.current = e),
			(this.canTrackVelocity = Zo(this.current)),
			(this.owner = n.owner);
	}
	onChange(e) {
		return this.on('change', e);
	}
	on(e, n) {
		this.events[e] || (this.events[e] = new Qe());
		const s = this.events[e].add(n);
		return e === 'change'
			? () => {
					s(),
						C.read(() => {
							this.events.change.getSize() || this.stop();
						});
			  }
			: s;
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
	setWithVelocity(e, n, s) {
		this.set(n), (this.prev = e), (this.timeDelta = s);
	}
	jump(e) {
		this.updateAndNotify(e),
			(this.prev = e),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
	get() {
		return wn.current && wn.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		return this.canTrackVelocity
			? ui(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function yt(t, e) {
	return new Qo(t, e);
}
const yi = (t) => (e) => e.test(t),
	Jo = { test: (t) => t === 'auto', parse: (t) => t },
	vi = [ut, P, G, Z, or, rr, Jo],
	Tt = (t) => vi.find(yi(t)),
	ta = [...vi, j, nt],
	ea = (t) => ta.find(yi(t));
function na(t, e, n) {
	t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, yt(n));
}
function Je(t, e) {
	const n = se(t, e);
	let { transitionEnd: s = {}, transition: i = {}, ...o } = n ? t.makeTargetAnimatable(n, !1) : {};
	o = { ...o, ...s };
	for (const r in o) {
		const a = Pr(o[r]);
		na(t, r, a);
	}
}
function Se(t, e) {
	[...e].reverse().forEach((s) => {
		const i = t.getVariant(s);
		i && Je(t, i),
			t.variantChildren &&
				t.variantChildren.forEach((o) => {
					Se(o, e);
				});
	});
}
function el(t, e) {
	if (Array.isArray(e)) return Se(t, e);
	if (typeof e == 'string') return Se(t, [e]);
	Je(t, e);
}
function sa(t, e, n) {
	var s, i;
	const o = Object.keys(e).filter((a) => !t.hasValue(a)),
		r = o.length;
	if (r)
		for (let a = 0; a < r; a++) {
			const c = o[a],
				l = e[c];
			let u = null;
			Array.isArray(l) && (u = l[0]),
				u === null &&
					(u =
						(i = (s = n[c]) !== null && s !== void 0 ? s : t.readValue(c)) !== null && i !== void 0
							? i
							: e[c]),
				u != null &&
					(typeof u == 'string' && (gi(u) || mi(u))
						? (u = parseFloat(u))
						: !ea(u) && nt.test(l) && (u = di(c, l)),
					t.addValue(c, yt(u, { owner: t })),
					n[c] === void 0 && (n[c] = u),
					u !== null && t.setBaseTarget(c, u));
		}
}
function ia(t, e) {
	return e ? (e[t] || e.default || e).from : void 0;
}
function ra(t, e, n) {
	const s = {};
	for (const i in t) {
		const o = ia(i, e);
		if (o !== void 0) s[i] = o;
		else {
			const r = n.getValue(i);
			r && (s[i] = r.get());
		}
	}
	return s;
}
function oa({ protectedKeys: t, needsAnimating: e }, n) {
	const s = t.hasOwnProperty(n) && e[n] !== !0;
	return (e[n] = !1), s;
}
function xi(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
	let {
		transition: o = t.getDefaultTransition(),
		transitionEnd: r,
		...a
	} = t.makeTargetAnimatable(e);
	const c = t.getValue('willChange');
	s && (o = s);
	const l = [],
		u = i && t.animationState && t.animationState.getState()[i];
	for (const h in a) {
		const f = t.getValue(h),
			d = a[h];
		if (!f || d === void 0 || (u && oa(u, h))) continue;
		const m = { delay: n, elapsed: 0, ...o };
		if (window.HandoffAppearAnimations && !f.hasAnimated) {
			const x = t.getProps()[zr];
			x && ((m.elapsed = window.HandoffAppearAnimations(x, h, f, C)), (m.syncStart = !0));
		}
		f.start(Ye(h, f, d, t.shouldReduceMotion && lt.has(h) ? { type: !1 } : m));
		const y = f.animation;
		Yt(c) && (c.add(h), y.then(() => c.remove(h))), l.push(y);
	}
	return (
		r &&
			Promise.all(l).then(() => {
				r && Je(t, r);
			}),
		l
	);
}
function Ce(t, e, n = {}) {
	const s = se(t, e, n.custom);
	let { transition: i = t.getDefaultTransition() || {} } = s || {};
	n.transitionOverride && (i = n.transitionOverride);
	const o = s ? () => Promise.all(xi(t, s, n)) : () => Promise.resolve(),
		r =
			t.variantChildren && t.variantChildren.size
				? (c = 0) => {
						const { delayChildren: l = 0, staggerChildren: u, staggerDirection: h } = i;
						return aa(t, e, l + c, u, h, n);
				  }
				: () => Promise.resolve(),
		{ when: a } = i;
	if (a) {
		const [c, l] = a === 'beforeChildren' ? [o, r] : [r, o];
		return c().then(() => l());
	} else return Promise.all([o(), r(n.delay)]);
}
function aa(t, e, n = 0, s = 0, i = 1, o) {
	const r = [],
		a = (t.variantChildren.size - 1) * s,
		c = i === 1 ? (l = 0) => l * s : (l = 0) => a - l * s;
	return (
		Array.from(t.variantChildren)
			.sort(ca)
			.forEach((l, u) => {
				l.notify('AnimationStart', e),
					r.push(Ce(l, e, { ...o, delay: n + c(u) }).then(() => l.notify('AnimationComplete', e)));
			}),
		Promise.all(r)
	);
}
function ca(t, e) {
	return t.sortNodePosition(e);
}
function la(t, e, n = {}) {
	t.notify('AnimationStart', e);
	let s;
	if (Array.isArray(e)) {
		const i = e.map((o) => Ce(t, o, n));
		s = Promise.all(i);
	} else if (typeof e == 'string') s = Ce(t, e, n);
	else {
		const i = typeof e == 'function' ? se(t, e, n.custom) : e;
		s = Promise.all(xi(t, i, n));
	}
	return s.then(() => t.notify('AnimationComplete', e));
}
const ua = [...Fe].reverse(),
	ha = Fe.length;
function fa(t) {
	return (e) => Promise.all(e.map(({ animation: n, options: s }) => la(t, n, s)));
}
function da(t) {
	let e = fa(t);
	const n = pa();
	let s = !0;
	const i = (c, l) => {
		const u = se(t, l);
		if (u) {
			const { transition: h, transitionEnd: f, ...d } = u;
			c = { ...c, ...d, ...f };
		}
		return c;
	};
	function o(c) {
		e = c(t);
	}
	function r(c, l) {
		const u = t.getProps(),
			h = t.getVariantContext(!0) || {},
			f = [],
			d = new Set();
		let m = {},
			y = 1 / 0;
		for (let V = 0; V < ha; V++) {
			const g = ua[V],
				p = n[g],
				T = u[g] !== void 0 ? u[g] : h[g],
				b = Dt(T),
				L = g === l ? p.isActive : null;
			L === !1 && (y = V);
			let A = T === h[g] && T !== u[g] && b;
			if (
				(A && s && t.manuallyAnimateOnMount && (A = !1),
				(p.protectedKeys = { ...m }),
				(!p.isActive && L === null) || (!T && !p.prevProp) || Jt(T) || typeof T == 'boolean')
			)
				continue;
			const S = ma(p.prevProp, T);
			let w = S || (g === l && p.isActive && !A && b) || (V > y && b);
			const $ = Array.isArray(T) ? T : [T];
			let W = $.reduce(i, {});
			L === !1 && (W = {});
			const { prevResolvedValues: X = {} } = p,
				Y = { ...X, ...W },
				B = (F) => {
					(w = !0), d.delete(F), (p.needsAnimating[F] = !0);
				};
			for (const F in Y) {
				const q = W[F],
					ht = X[F];
				m.hasOwnProperty(F) ||
					(q !== ht
						? Ht(q) && Ht(ht)
							? !Gs(q, ht) || S
								? B(F)
								: (p.protectedKeys[F] = !0)
							: q !== void 0
							? B(F)
							: d.add(F)
						: q !== void 0 && d.has(F)
						? B(F)
						: (p.protectedKeys[F] = !0));
			}
			(p.prevProp = T),
				(p.prevResolvedValues = W),
				p.isActive && (m = { ...m, ...W }),
				s && t.blockInitialAnimation && (w = !1),
				w && !A && f.push(...$.map((F) => ({ animation: F, options: { type: g, ...c } })));
		}
		if (d.size) {
			const V = {};
			d.forEach((g) => {
				const p = t.getBaseTarget(g);
				p !== void 0 && (V[g] = p);
			}),
				f.push({ animation: V });
		}
		let x = !!f.length;
		return (
			s && u.initial === !1 && !t.manuallyAnimateOnMount && (x = !1),
			(s = !1),
			x ? e(f) : Promise.resolve()
		);
	}
	function a(c, l, u) {
		var h;
		if (n[c].isActive === l) return Promise.resolve();
		(h = t.variantChildren) === null ||
			h === void 0 ||
			h.forEach((d) => {
				var m;
				return (m = d.animationState) === null || m === void 0 ? void 0 : m.setActive(c, l);
			}),
			(n[c].isActive = l);
		const f = r(u, c);
		for (const d in n) n[d].protectedKeys = {};
		return f;
	}
	return { animateChanges: r, setActive: a, setAnimateFunction: o, getState: () => n };
}
function ma(t, e) {
	return typeof e == 'string' ? e !== t : Array.isArray(e) ? !Gs(e, t) : !1;
}
function rt(t = !1) {
	return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function pa() {
	return {
		animate: rt(!0),
		whileInView: rt(),
		whileHover: rt(),
		whileTap: rt(),
		whileDrag: rt(),
		whileFocus: rt(),
		exit: rt(),
	};
}
class ga extends st {
	constructor(e) {
		super(e), e.animationState || (e.animationState = da(e));
	}
	updateAnimationControlsSubscription() {
		const { animate: e } = this.node.getProps();
		this.unmount(), Jt(e) && (this.unmount = e.subscribe(this.node));
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
let ya = 0;
class va extends st {
	constructor() {
		super(...arguments), (this.id = ya++);
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: e, onExitComplete: n, custom: s } = this.node.presenceContext,
			{ isPresent: i } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || e === i) return;
		const o = this.node.animationState.setActive('exit', !e, {
			custom: s ?? this.node.getProps().custom,
		});
		n && !e && o.then(() => n(this.id));
	}
	mount() {
		const { register: e } = this.node.presenceContext || {};
		e && (this.unmount = e(this.id));
	}
	unmount() {}
}
const xa = { animation: { Feature: ga }, exit: { Feature: va } },
	Dn = (t, e) => Math.abs(t - e);
function Pa(t, e) {
	const n = Dn(t.x, e.x),
		s = Dn(t.y, e.y);
	return Math.sqrt(n ** 2 + s ** 2);
}
class Pi {
	constructor(e, n, { transformPagePoint: s } = {}) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const l = me(this.lastMoveEventInfo, this.history),
					u = this.startEvent !== null,
					h = Pa(l.offset, { x: 0, y: 0 }) >= 3;
				if (!u && !h) return;
				const { point: f } = l,
					{ timestamp: d } = k;
				this.history.push({ ...f, timestamp: d });
				const { onStart: m, onMove: y } = this.handlers;
				u || (m && m(this.lastMoveEvent, l), (this.startEvent = this.lastMoveEvent)),
					y && y(this.lastMoveEvent, l);
			}),
			(this.handlePointerMove = (l, u) => {
				(this.lastMoveEvent = l),
					(this.lastMoveEventInfo = de(u, this.transformPagePoint)),
					C.update(this.updatePoint, !0);
			}),
			(this.handlePointerUp = (l, u) => {
				if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))) return;
				const { onEnd: h, onSessionEnd: f } = this.handlers,
					d = me(
						l.type === 'pointercancel' ? this.lastMoveEventInfo : de(u, this.transformPagePoint),
						this.history
					);
				this.startEvent && h && h(l, d), f && f(l, d);
			}),
			!js(e))
		)
			return;
		(this.handlers = n), (this.transformPagePoint = s);
		const i = ne(e),
			o = de(i, this.transformPagePoint),
			{ point: r } = o,
			{ timestamp: a } = k;
		this.history = [{ ...r, timestamp: a }];
		const { onSessionStart: c } = n;
		c && c(e, me(o, this.history)),
			(this.removeListeners = J(
				H(window, 'pointermove', this.handlePointerMove),
				H(window, 'pointerup', this.handlePointerUp),
				H(window, 'pointercancel', this.handlePointerUp)
			));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), _(this.updatePoint);
	}
}
function de(t, e) {
	return e ? { point: e(t.point) } : t;
}
function Mn(t, e) {
	return { x: t.x - e.x, y: t.y - e.y };
}
function me({ point: t }, e) {
	return { point: t, delta: Mn(t, Ti(e)), offset: Mn(t, Ta(e)), velocity: ba(e, 0.1) };
}
function Ta(t) {
	return t[0];
}
function Ti(t) {
	return t[t.length - 1];
}
function ba(t, e) {
	if (t.length < 2) return { x: 0, y: 0 };
	let n = t.length - 1,
		s = null;
	const i = Ti(t);
	for (; n >= 0 && ((s = t[n]), !(i.timestamp - s.timestamp > tt(e))); ) n--;
	if (!s) return { x: 0, y: 0 };
	const o = K(i.timestamp - s.timestamp);
	if (o === 0) return { x: 0, y: 0 };
	const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
	return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function I(t) {
	return t.max - t.min;
}
function Ae(t, e = 0, n = 0.01) {
	return Math.abs(t - e) <= n;
}
function Rn(t, e, n, s = 0.5) {
	(t.origin = s),
		(t.originPoint = M(e.min, e.max, t.origin)),
		(t.scale = I(n) / I(e)),
		(Ae(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
		(t.translate = M(n.min, n.max, t.origin) - t.originPoint),
		(Ae(t.translate) || isNaN(t.translate)) && (t.translate = 0);
}
function At(t, e, n, s) {
	Rn(t.x, e.x, n.x, s ? s.originX : void 0), Rn(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Ln(t, e, n) {
	(t.min = n.min + e.min), (t.max = t.min + I(e));
}
function Va(t, e, n) {
	Ln(t.x, e.x, n.x), Ln(t.y, e.y, n.y);
}
function En(t, e, n) {
	(t.min = e.min - n.min), (t.max = t.min + I(e));
}
function wt(t, e, n) {
	En(t.x, e.x, n.x), En(t.y, e.y, n.y);
}
function Sa(t, { min: e, max: n }, s) {
	return (
		e !== void 0 && t < e
			? (t = s ? M(e, t, s.min) : Math.max(t, e))
			: n !== void 0 && t > n && (t = s ? M(n, t, s.max) : Math.min(t, n)),
		t
	);
}
function Fn(t, e, n) {
	return {
		min: e !== void 0 ? t.min + e : void 0,
		max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
	};
}
function Ca(t, { top: e, left: n, bottom: s, right: i }) {
	return { x: Fn(t.x, n, i), y: Fn(t.y, e, s) };
}
function Bn(t, e) {
	let n = e.min - t.min,
		s = e.max - t.max;
	return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function Aa(t, e) {
	return { x: Bn(t.x, e.x), y: Bn(t.y, e.y) };
}
function wa(t, e) {
	let n = 0.5;
	const s = I(t),
		i = I(e);
	return (
		i > s ? (n = Rt(e.min, e.max - s, t.min)) : s > i && (n = Rt(t.min, t.max - i, e.min)),
		et(0, 1, n)
	);
}
function Da(t, e) {
	const n = {};
	return (
		e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
	);
}
const we = 0.35;
function Ma(t = we) {
	return (
		t === !1 ? (t = 0) : t === !0 && (t = we),
		{ x: kn(t, 'left', 'right'), y: kn(t, 'top', 'bottom') }
	);
}
function kn(t, e, n) {
	return { min: jn(t, e), max: jn(t, n) };
}
function jn(t, e) {
	return typeof t == 'number' ? t : t[e] || 0;
}
const On = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	pt = () => ({ x: On(), y: On() }),
	In = () => ({ min: 0, max: 0 }),
	E = () => ({ x: In(), y: In() });
function N(t) {
	return [t('x'), t('y')];
}
function bi({ top: t, left: e, right: n, bottom: s }) {
	return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function Ra({ x: t, y: e }) {
	return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function La(t, e) {
	if (!e) return t;
	const n = e({ x: t.left, y: t.top }),
		s = e({ x: t.right, y: t.bottom });
	return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function pe(t) {
	return t === void 0 || t === 1;
}
function De({ scale: t, scaleX: e, scaleY: n }) {
	return !pe(t) || !pe(e) || !pe(n);
}
function ot(t) {
	return De(t) || Vi(t) || t.z || t.rotate || t.rotateX || t.rotateY;
}
function Vi(t) {
	return Un(t.x) || Un(t.y);
}
function Un(t) {
	return t && t !== '0%';
}
function qt(t, e, n) {
	const s = t - n,
		i = e * s;
	return n + i;
}
function Nn(t, e, n, s, i) {
	return i !== void 0 && (t = qt(t, i, s)), qt(t, n, s) + e;
}
function Me(t, e = 0, n = 1, s, i) {
	(t.min = Nn(t.min, e, n, s, i)), (t.max = Nn(t.max, e, n, s, i));
}
function Si(t, { x: e, y: n }) {
	Me(t.x, e.translate, e.scale, e.originPoint), Me(t.y, n.translate, n.scale, n.originPoint);
}
function Ea(t, e, n, s = !1) {
	const i = n.length;
	if (!i) return;
	e.x = e.y = 1;
	let o, r;
	for (let a = 0; a < i; a++) {
		(o = n[a]), (r = o.projectionDelta);
		const c = o.instance;
		(c && c.style && c.style.display === 'contents') ||
			(s &&
				o.options.layoutScroll &&
				o.scroll &&
				o !== o.root &&
				gt(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
			r && ((e.x *= r.x.scale), (e.y *= r.y.scale), Si(t, r)),
			s && ot(o.latestValues) && gt(t, o.latestValues));
	}
	(e.x = Gn(e.x)), (e.y = Gn(e.y));
}
function Gn(t) {
	return Number.isInteger(t) || t > 1.0000000000001 || t < 0.999999999999 ? t : 1;
}
function Q(t, e) {
	(t.min = t.min + e), (t.max = t.max + e);
}
function $n(t, e, [n, s, i]) {
	const o = e[i] !== void 0 ? e[i] : 0.5,
		r = M(t.min, t.max, o);
	Me(t, e[n], e[s], r, e.scale);
}
const Fa = ['x', 'scaleX', 'originX'],
	Ba = ['y', 'scaleY', 'originY'];
function gt(t, e) {
	$n(t.x, e, Fa), $n(t.y, e, Ba);
}
function Ci(t, e) {
	return bi(La(t.getBoundingClientRect(), e));
}
function ka(t, e, n) {
	const s = Ci(t, n),
		{ scroll: i } = e;
	return i && (Q(s.x, i.offset.x), Q(s.y, i.offset.y)), s;
}
const ja = new WeakMap();
class Oa {
	constructor(e) {
		(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = E()),
			(this.visualElement = e);
	}
	start(e, { snapToCursor: n = !1 } = {}) {
		const { presenceContext: s } = this.visualElement;
		if (s && s.isPresent === !1) return;
		const i = (c) => {
				this.stopAnimation(), n && this.snapToCursor(ne(c, 'page').point);
			},
			o = (c, l) => {
				const { drag: u, dragPropagation: h, onDragStart: f } = this.getProps();
				if (
					u &&
					!h &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = Is(u)),
					!this.openGlobalLock)
				)
					return;
				(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0),
						(this.visualElement.projection.target = void 0)),
					N((m) => {
						let y = this.getAxisMotionValue(m).get() || 0;
						if (G.test(y)) {
							const { projection: x } = this.visualElement;
							if (x && x.layout) {
								const V = x.layout.layoutBox[m];
								V && (y = I(V) * (parseFloat(y) / 100));
							}
						}
						this.originPoint[m] = y;
					}),
					f && C.update(() => f(c, l), !1, !0);
				const { animationState: d } = this.visualElement;
				d && d.setActive('whileDrag', !0);
			},
			r = (c, l) => {
				const {
					dragPropagation: u,
					dragDirectionLock: h,
					onDirectionLock: f,
					onDrag: d,
				} = this.getProps();
				if (!u && !this.openGlobalLock) return;
				const { offset: m } = l;
				if (h && this.currentDirection === null) {
					(this.currentDirection = Ia(m)),
						this.currentDirection !== null && f && f(this.currentDirection);
					return;
				}
				this.updateAxis('x', l.point, m),
					this.updateAxis('y', l.point, m),
					this.visualElement.render(),
					d && d(c, l);
			},
			a = (c, l) => this.stop(c, l);
		this.panSession = new Pi(
			e,
			{ onSessionStart: i, onStart: o, onMove: r, onSessionEnd: a },
			{ transformPagePoint: this.visualElement.getTransformPagePoint() }
		);
	}
	stop(e, n) {
		const s = this.isDragging;
		if ((this.cancel(), !s)) return;
		const { velocity: i } = n;
		this.startAnimation(i);
		const { onDragEnd: o } = this.getProps();
		o && C.update(() => o(e, n));
	}
	cancel() {
		this.isDragging = !1;
		const { projection: e, animationState: n } = this.visualElement;
		e && (e.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0);
		const { dragPropagation: s } = this.getProps();
		!s && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
			n && n.setActive('whileDrag', !1);
	}
	updateAxis(e, n, s) {
		const { drag: i } = this.getProps();
		if (!s || !Nt(e, i, this.currentDirection)) return;
		const o = this.getAxisMotionValue(e);
		let r = this.originPoint[e] + s[e];
		this.constraints && this.constraints[e] && (r = Sa(r, this.constraints[e], this.elastic[e])),
			o.set(r);
	}
	resolveConstraints() {
		const { dragConstraints: e, dragElastic: n } = this.getProps(),
			{ layout: s } = this.visualElement.projection || {},
			i = this.constraints;
		e && dt(e)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: e && s
			? (this.constraints = Ca(s.layoutBox, e))
			: (this.constraints = !1),
			(this.elastic = Ma(n)),
			i !== this.constraints &&
				s &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				N((o) => {
					this.getAxisMotionValue(o) &&
						(this.constraints[o] = Da(s.layoutBox[o], this.constraints[o]));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
		if (!e || !dt(e)) return !1;
		const s = e.current,
			{ projection: i } = this.visualElement;
		if (!i || !i.layout) return !1;
		const o = ka(s, i.root, this.visualElement.getTransformPagePoint());
		let r = Aa(i.layout.layoutBox, o);
		if (n) {
			const a = n(Ra(r));
			(this.hasMutatedConstraints = !!a), a && (r = bi(a));
		}
		return r;
	}
	startAnimation(e) {
		const {
				drag: n,
				dragMomentum: s,
				dragElastic: i,
				dragTransition: o,
				dragSnapToOrigin: r,
				onDragTransitionEnd: a,
			} = this.getProps(),
			c = this.constraints || {},
			l = N((u) => {
				if (!Nt(u, n, this.currentDirection)) return;
				let h = (c && c[u]) || {};
				r && (h = { min: 0, max: 0 });
				const f = i ? 200 : 1e6,
					d = i ? 40 : 1e7,
					m = {
						type: 'inertia',
						velocity: s ? e[u] : 0,
						bounceStiffness: f,
						bounceDamping: d,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...o,
						...h,
					};
				return this.startAxisValueAnimation(u, m);
			});
		return Promise.all(l).then(a);
	}
	startAxisValueAnimation(e, n) {
		const s = this.getAxisMotionValue(e);
		return s.start(Ye(e, s, 0, n));
	}
	stopAnimation() {
		N((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		const n = '_drag' + e.toUpperCase(),
			s = this.visualElement.getProps(),
			i = s[n];
		return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		N((n) => {
			const { drag: s } = this.getProps();
			if (!Nt(n, s, this.currentDirection)) return;
			const { projection: i } = this.visualElement,
				o = this.getAxisMotionValue(n);
			if (i && i.layout) {
				const { min: r, max: a } = i.layout.layoutBox[n];
				o.set(e[n] - M(r, a, 0.5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: e, dragConstraints: n } = this.getProps(),
			{ projection: s } = this.visualElement;
		if (!dt(n) || !s || !this.constraints) return;
		this.stopAnimation();
		const i = { x: 0, y: 0 };
		N((r) => {
			const a = this.getAxisMotionValue(r);
			if (a) {
				const c = a.get();
				i[r] = wa({ min: c, max: c }, this.constraints[r]);
			}
		});
		const { transformTemplate: o } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
			s.root && s.root.updateScroll(),
			s.updateLayout(),
			this.resolveConstraints(),
			N((r) => {
				if (!Nt(r, e, null)) return;
				const a = this.getAxisMotionValue(r),
					{ min: c, max: l } = this.constraints[r];
				a.set(M(c, l, i[r]));
			});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		ja.set(this.visualElement, this);
		const e = this.visualElement.current,
			n = H(e, 'pointerdown', (c) => {
				const { drag: l, dragListener: u = !0 } = this.getProps();
				l && u && this.start(c);
			}),
			s = () => {
				const { dragConstraints: c } = this.getProps();
				dt(c) && (this.constraints = this.resolveRefConstraints());
			},
			{ projection: i } = this.visualElement,
			o = i.addEventListener('measure', s);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), s();
		const r = z(window, 'resize', () => this.scalePositionWithinConstraints()),
			a = i.addEventListener('didUpdate', ({ delta: c, hasLayoutChanged: l }) => {
				this.isDragging &&
					l &&
					(N((u) => {
						const h = this.getAxisMotionValue(u);
						h && ((this.originPoint[u] += c[u].translate), h.set(h.get() + c[u].translate));
					}),
					this.visualElement.render());
			});
		return () => {
			r(), n(), o(), a && a();
		};
	}
	getProps() {
		const e = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: s = !1,
				dragPropagation: i = !1,
				dragConstraints: o = !1,
				dragElastic: r = we,
				dragMomentum: a = !0,
			} = e;
		return {
			...e,
			drag: n,
			dragDirectionLock: s,
			dragPropagation: i,
			dragConstraints: o,
			dragElastic: r,
			dragMomentum: a,
		};
	}
}
function Nt(t, e, n) {
	return (e === !0 || e === t) && (n === null || n === t);
}
function Ia(t, e = 10) {
	let n = null;
	return Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x'), n;
}
class Ua extends st {
	constructor(e) {
		super(e),
			(this.removeGroupControls = R),
			(this.removeListeners = R),
			(this.controls = new Oa(e));
	}
	mount() {
		const { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || R);
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}
const Wn = (t) => (e, n) => {
	t && C.update(() => t(e, n));
};
class Na extends st {
	constructor() {
		super(...arguments), (this.removePointerDownListener = R);
	}
	onPointerDown(e) {
		this.session = new Pi(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
		});
	}
	createPanHandlers() {
		const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
		return {
			onSessionStart: Wn(e),
			onStart: Wn(n),
			onMove: s,
			onEnd: (o, r) => {
				delete this.session, i && C.update(() => i(o, r));
			},
		};
	}
	mount() {
		this.removePointerDownListener = H(this.node.current, 'pointerdown', (e) =>
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
function Ga() {
	const t = v.useContext(Lt);
	if (t === null) return [!0, null];
	const { isPresent: e, onExitComplete: n, register: s } = t,
		i = v.useId();
	return v.useEffect(() => s(i), []), !e && n ? [!1, () => n && n(i)] : [!0];
}
function nl() {
	return $a(v.useContext(Lt));
}
function $a(t) {
	return t === null ? !0 : t.isPresent;
}
const $t = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function zn(t, e) {
	return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
}
const bt = {
		correct: (t, e) => {
			if (!e.target) return t;
			if (typeof t == 'string')
				if (P.test(t)) t = parseFloat(t);
				else return t;
			const n = zn(t, e.target.x),
				s = zn(t, e.target.y);
			return `${n}% ${s}%`;
		},
	},
	Wa = {
		correct: (t, { treeScale: e, projectionDelta: n }) => {
			const s = t,
				i = nt.parse(t);
			if (i.length > 5) return s;
			const o = nt.createTransformer(t),
				r = typeof i[0] != 'number' ? 1 : 0,
				a = n.x.scale * e.x,
				c = n.y.scale * e.y;
			(i[0 + r] /= a), (i[1 + r] /= c);
			const l = M(a, c, 0.5);
			return (
				typeof i[2 + r] == 'number' && (i[2 + r] /= l),
				typeof i[3 + r] == 'number' && (i[3 + r] /= l),
				o(i)
			);
		},
	};
class za extends ps.Component {
	componentDidMount() {
		const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props,
			{ projection: o } = e;
		Qi(Ha),
			o &&
				(n.group && n.group.add(o),
				s && s.register && i && s.register(o),
				o.root.didUpdate(),
				o.addEventListener('animationComplete', () => {
					this.safeToRemove();
				}),
				o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })),
			($t.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(e) {
		const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props,
			r = s.projection;
		return (
			r &&
				((r.isPresent = o),
				i || e.layoutDependency !== n || n === void 0 ? r.willUpdate() : this.safeToRemove(),
				e.isPresent !== o &&
					(o
						? r.promote()
						: r.relegate() ||
						  C.postRender(() => {
								const a = r.getStack();
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
		const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props,
			{ projection: i } = e;
		i &&
			(i.scheduleCheckAfterUnmount(),
			n && n.group && n.group.remove(i),
			s && s.deregister && s.deregister(i));
	}
	safeToRemove() {
		const { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
}
function Ai(t) {
	const [e, n] = Ga(),
		s = v.useContext(ke);
	return ps.createElement(za, {
		...t,
		layoutGroup: s,
		switchLayoutGroup: v.useContext(xs),
		isPresent: e,
		safeToRemove: n,
	});
}
const Ha = {
		borderRadius: {
			...bt,
			applyTo: [
				'borderTopLeftRadius',
				'borderTopRightRadius',
				'borderBottomLeftRadius',
				'borderBottomRightRadius',
			],
		},
		borderTopLeftRadius: bt,
		borderTopRightRadius: bt,
		borderBottomLeftRadius: bt,
		borderBottomRightRadius: bt,
		boxShadow: Wa,
	},
	wi = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
	Ka = wi.length,
	Hn = (t) => (typeof t == 'string' ? parseFloat(t) : t),
	Kn = (t) => typeof t == 'number' || P.test(t);
function _a(t, e, n, s, i, o) {
	i
		? ((t.opacity = M(0, n.opacity !== void 0 ? n.opacity : 1, Xa(s))),
		  (t.opacityExit = M(e.opacity !== void 0 ? e.opacity : 1, 0, Ya(s))))
		: o &&
		  (t.opacity = M(
				e.opacity !== void 0 ? e.opacity : 1,
				n.opacity !== void 0 ? n.opacity : 1,
				s
		  ));
	for (let r = 0; r < Ka; r++) {
		const a = `border${wi[r]}Radius`;
		let c = _n(e, a),
			l = _n(n, a);
		if (c === void 0 && l === void 0) continue;
		c || (c = 0),
			l || (l = 0),
			c === 0 || l === 0 || Kn(c) === Kn(l)
				? ((t[a] = Math.max(M(Hn(c), Hn(l), s), 0)), (G.test(l) || G.test(c)) && (t[a] += '%'))
				: (t[a] = l);
	}
	(e.rotate || n.rotate) && (t.rotate = M(e.rotate || 0, n.rotate || 0, s));
}
function _n(t, e) {
	return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const Xa = Di(0, 0.5, He),
	Ya = Di(0.5, 0.95, R);
function Di(t, e, n) {
	return (s) => (s < t ? 0 : s > e ? 1 : n(Rt(t, e, s)));
}
function Xn(t, e) {
	(t.min = e.min), (t.max = e.max);
}
function U(t, e) {
	Xn(t.x, e.x), Xn(t.y, e.y);
}
function Yn(t, e, n, s, i) {
	return (t -= e), (t = qt(t, 1 / n, s)), i !== void 0 && (t = qt(t, 1 / i, s)), t;
}
function qa(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
	if (
		(G.test(e) && ((e = parseFloat(e)), (e = M(r.min, r.max, e / 100) - r.min)),
		typeof e != 'number')
	)
		return;
	let a = M(o.min, o.max, s);
	t === o && (a -= e), (t.min = Yn(t.min, e, n, a, i)), (t.max = Yn(t.max, e, n, a, i));
}
function qn(t, e, [n, s, i], o, r) {
	qa(t, e[n], e[s], e[i], e.scale, o, r);
}
const Za = ['x', 'scaleX', 'originX'],
	Qa = ['y', 'scaleY', 'originY'];
function Zn(t, e, n, s) {
	qn(t.x, e, Za, n ? n.x : void 0, s ? s.x : void 0),
		qn(t.y, e, Qa, n ? n.y : void 0, s ? s.y : void 0);
}
function Qn(t) {
	return t.translate === 0 && t.scale === 1;
}
function Mi(t) {
	return Qn(t.x) && Qn(t.y);
}
function Ja(t, e) {
	return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
}
function Ri(t, e) {
	return (
		Math.round(t.x.min) === Math.round(e.x.min) &&
		Math.round(t.x.max) === Math.round(e.x.max) &&
		Math.round(t.y.min) === Math.round(e.y.min) &&
		Math.round(t.y.max) === Math.round(e.y.max)
	);
}
function Jn(t) {
	return I(t.x) / I(t.y);
}
class tc {
	constructor() {
		this.members = [];
	}
	add(e) {
		qe(this.members, e), e.scheduleRender();
	}
	remove(e) {
		if ((Ze(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead)) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n);
		}
	}
	relegate(e) {
		const n = this.members.findIndex((i) => e === i);
		if (n === 0) return !1;
		let s;
		for (let i = n; i >= 0; i--) {
			const o = this.members[i];
			if (o.isPresent !== !1) {
				s = o;
				break;
			}
		}
		return s ? (this.promote(s), !0) : !1;
	}
	promote(e, n) {
		const s = this.lead;
		if (e !== s && ((this.prevLead = s), (this.lead = e), e.show(), s)) {
			s.instance && s.scheduleRender(),
				e.scheduleRender(),
				(e.resumeFrom = s),
				n && (e.resumeFrom.preserveOpacity = !0),
				s.snapshot &&
					((e.snapshot = s.snapshot),
					(e.snapshot.latestValues = s.animationValues || s.latestValues)),
				e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
			const { crossfade: i } = e.options;
			i === !1 && s.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			const { options: n, resumingFrom: s } = e;
			n.onExitComplete && n.onExitComplete(),
				s && s.options.onExitComplete && s.options.onExitComplete();
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
function ts(t, e, n) {
	let s = '';
	const i = t.x.translate / e.x,
		o = t.y.translate / e.y;
	if (
		((i || o) && (s = `translate3d(${i}px, ${o}px, 0) `),
		(e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
		n)
	) {
		const { rotate: c, rotateX: l, rotateY: u } = n;
		c && (s += `rotate(${c}deg) `),
			l && (s += `rotateX(${l}deg) `),
			u && (s += `rotateY(${u}deg) `);
	}
	const r = t.x.scale * e.x,
		a = t.y.scale * e.y;
	return (r !== 1 || a !== 1) && (s += `scale(${r}, ${a})`), s || 'none';
}
const ec = (t, e) => t.depth - e.depth;
class nc {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(e) {
		qe(this.children, e), (this.isDirty = !0);
	}
	remove(e) {
		Ze(this.children, e), (this.isDirty = !0);
	}
	forEach(e) {
		this.isDirty && this.children.sort(ec), (this.isDirty = !1), this.children.forEach(e);
	}
}
function sc(t, e) {
	const n = performance.now(),
		s = ({ timestamp: i }) => {
			const o = i - n;
			o >= e && (_(s), t(o - e));
		};
	return C.read(s, !0), () => _(s);
}
function ic(t) {
	window.MotionDebug && window.MotionDebug.record(t);
}
function rc(t) {
	return t instanceof SVGElement && t.tagName !== 'svg';
}
function oc(t, e, n) {
	const s = O(t) ? t : yt(t);
	return s.start(Ye('', s, e, n)), s.animation;
}
const es = ['', 'X', 'Y', 'Z'],
	ns = 1e3;
let ac = 0;
const at = {
	type: 'projectionFrame',
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0,
};
function Li({
	attachResizeListener: t,
	defaultParent: e,
	measureScroll: n,
	checkIsScrollRoot: s,
	resetTransform: i,
}) {
	return class {
		constructor(r = {}, a = e?.()) {
			(this.id = ac++),
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
					(at.totalNodes = at.resolvedTargetDeltas = at.recalculatedProjection = 0),
						this.nodes.forEach(uc),
						this.nodes.forEach(pc),
						this.nodes.forEach(gc),
						this.nodes.forEach(hc),
						ic(at);
				}),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = r),
				(this.root = a ? a.root || a : this),
				(this.path = a ? [...a.path, a] : []),
				(this.parent = a),
				(this.depth = a ? a.depth + 1 : 0);
			for (let c = 0; c < this.path.length; c++) this.path[c].shouldResetTransform = !0;
			this.root === this && (this.nodes = new nc());
		}
		addEventListener(r, a) {
			return (
				this.eventHandlers.has(r) || this.eventHandlers.set(r, new Qe()),
				this.eventHandlers.get(r).add(a)
			);
		}
		notifyListeners(r, ...a) {
			const c = this.eventHandlers.get(r);
			c && c.notify(...a);
		}
		hasListeners(r) {
			return this.eventHandlers.has(r);
		}
		mount(r, a = this.root.hasTreeAnimated) {
			if (this.instance) return;
			(this.isSVG = rc(r)), (this.instance = r);
			const { layoutId: c, layout: l, visualElement: u } = this.options;
			if (
				(u && !u.current && u.mount(r),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				a && (l || c) && (this.isLayoutDirty = !0),
				t)
			) {
				let h;
				const f = () => (this.root.updateBlockedByResize = !1);
				t(r, () => {
					(this.root.updateBlockedByResize = !0),
						h && h(),
						(h = sc(f, 250)),
						$t.hasAnimatedSinceResize && (($t.hasAnimatedSinceResize = !1), this.nodes.forEach(is));
				});
			}
			c && this.root.registerSharedNode(c, this),
				this.options.animate !== !1 &&
					u &&
					(c || l) &&
					this.addEventListener(
						'didUpdate',
						({ delta: h, hasLayoutChanged: f, hasRelativeTargetChanged: d, layout: m }) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const y = this.options.transition || u.getDefaultTransition() || Tc,
								{ onLayoutAnimationStart: x, onLayoutAnimationComplete: V } = u.getProps(),
								g = !this.targetLayout || !Ri(this.targetLayout, m) || d,
								p = !f && d;
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								p ||
								(f && (g || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(h, p);
								const T = { ...pi(y, 'layout'), onPlay: x, onComplete: V };
								(u.shouldReduceMotion || this.options.layoutRoot) && ((T.delay = 0), (T.type = !1)),
									this.startAnimation(T);
							} else
								f || is(this),
									this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
							this.targetLayout = m;
						}
					);
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const r = this.getStack();
			r && r.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				_(this.updateProjection);
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
				((this.isUpdating = !0), this.nodes && this.nodes.forEach(yc), this.animationId++);
		}
		getTransformTemplate() {
			const { visualElement: r } = this.options;
			return r && r.getProps().transformTemplate;
		}
		willUpdate(r = !0) {
			if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if ((!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
			this.isLayoutDirty = !0;
			for (let u = 0; u < this.path.length; u++) {
				const h = this.path[u];
				(h.shouldResetTransform = !0),
					h.updateScroll('snapshot'),
					h.options.layoutRoot && h.willUpdate(!1);
			}
			const { layoutId: a, layout: c } = this.options;
			if (a === void 0 && !c) return;
			const l = this.getTransformTemplate();
			(this.prevTransformTemplateValue = l ? l(this.latestValues, '') : void 0),
				this.updateSnapshot(),
				r && this.notifyListeners('willUpdate');
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ss);
				return;
			}
			this.isUpdating || this.nodes.forEach(dc),
				(this.isUpdating = !1),
				this.nodes.forEach(mc),
				this.nodes.forEach(cc),
				this.nodes.forEach(lc),
				this.clearAllSnapshots();
			const a = performance.now();
			(k.delta = et(0, 1e3 / 60, a - k.timestamp)),
				(k.timestamp = a),
				(k.isProcessing = !0),
				re.update.process(k),
				re.preRender.process(k),
				re.render.process(k),
				(k.isProcessing = !1);
		}
		didUpdate() {
			this.updateScheduled || ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
		}
		clearAllSnapshots() {
			this.nodes.forEach(fc), this.sharedNodes.forEach(vc);
		}
		scheduleUpdateProjection() {
			C.preRender(this.updateProjection, !1, !0);
		}
		scheduleCheckAfterUnmount() {
			C.postRender(() => {
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
				for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
			const r = this.layout;
			(this.layout = this.measure(!1)),
				(this.layoutCorrected = E()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners('measure', this.layout.layoutBox);
			const { visualElement: a } = this.options;
			a && a.notify('LayoutMeasure', this.layout.layoutBox, r ? r.layoutBox : void 0);
		}
		updateScroll(r = 'measure') {
			let a = !!(this.options.layoutScroll && this.instance);
			this.scroll &&
				this.scroll.animationId === this.root.animationId &&
				this.scroll.phase === r &&
				(a = !1),
				a &&
					(this.scroll = {
						animationId: this.root.animationId,
						phase: r,
						isRoot: s(this.instance),
						offset: n(this.instance),
					});
		}
		resetTransform() {
			if (!i) return;
			const r = this.isLayoutDirty || this.shouldResetTransform,
				a = this.projectionDelta && !Mi(this.projectionDelta),
				c = this.getTransformTemplate(),
				l = c ? c(this.latestValues, '') : void 0,
				u = l !== this.prevTransformTemplateValue;
			r &&
				(a || ot(this.latestValues) || u) &&
				(i(this.instance, l), (this.shouldResetTransform = !1), this.scheduleRender());
		}
		measure(r = !0) {
			const a = this.measurePageBox();
			let c = this.removeElementScroll(a);
			return (
				r && (c = this.removeTransform(c)),
				bc(c),
				{
					animationId: this.root.animationId,
					measuredBox: a,
					layoutBox: c,
					latestValues: {},
					source: this.id,
				}
			);
		}
		measurePageBox() {
			const { visualElement: r } = this.options;
			if (!r) return E();
			const a = r.measureViewportBox(),
				{ scroll: c } = this.root;
			return c && (Q(a.x, c.offset.x), Q(a.y, c.offset.y)), a;
		}
		removeElementScroll(r) {
			const a = E();
			U(a, r);
			for (let c = 0; c < this.path.length; c++) {
				const l = this.path[c],
					{ scroll: u, options: h } = l;
				if (l !== this.root && u && h.layoutScroll) {
					if (u.isRoot) {
						U(a, r);
						const { scroll: f } = this.root;
						f && (Q(a.x, -f.offset.x), Q(a.y, -f.offset.y));
					}
					Q(a.x, u.offset.x), Q(a.y, u.offset.y);
				}
			}
			return a;
		}
		applyTransform(r, a = !1) {
			const c = E();
			U(c, r);
			for (let l = 0; l < this.path.length; l++) {
				const u = this.path[l];
				!a &&
					u.options.layoutScroll &&
					u.scroll &&
					u !== u.root &&
					gt(c, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
					ot(u.latestValues) && gt(c, u.latestValues);
			}
			return ot(this.latestValues) && gt(c, this.latestValues), c;
		}
		removeTransform(r) {
			const a = E();
			U(a, r);
			for (let c = 0; c < this.path.length; c++) {
				const l = this.path[c];
				if (!l.instance || !ot(l.latestValues)) continue;
				De(l.latestValues) && l.updateSnapshot();
				const u = E(),
					h = l.measurePageBox();
				U(u, h), Zn(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
			}
			return ot(this.latestValues) && Zn(a, this.latestValues), a;
		}
		setTargetDelta(r) {
			(this.targetDelta = r), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
		}
		setOptions(r) {
			this.options = {
				...this.options,
				...r,
				crossfade: r.crossfade !== void 0 ? r.crossfade : !0,
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
				this.relativeParent.resolvedRelativeTargetAt !== k.timestamp &&
				this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(r = !1) {
			var a;
			const c = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
				this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
			const l = !!this.resumingFrom || this !== c;
			if (
				!(
					r ||
					(l && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					(!((a = this.parent) === null || a === void 0) && a.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget
				)
			)
				return;
			const { layout: h, layoutId: f } = this.options;
			if (!(!this.layout || !(h || f))) {
				if (
					((this.resolvedRelativeTargetAt = k.timestamp), !this.targetDelta && !this.relativeTarget)
				) {
					const d = this.getClosestProjectingParent();
					d && d.layout && this.animationProgress !== 1
						? ((this.relativeParent = d),
						  this.forceRelativeParentToResolveTarget(),
						  (this.relativeTarget = E()),
						  (this.relativeTargetOrigin = E()),
						  wt(this.relativeTargetOrigin, this.layout.layoutBox, d.layout.layoutBox),
						  U(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target || ((this.target = E()), (this.targetWithTransforms = E())),
						this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.relativeParent &&
						this.relativeParent.target
							? (this.forceRelativeParentToResolveTarget(),
							  Va(this.target, this.relativeTarget, this.relativeParent.target))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: U(this.target, this.layout.layoutBox),
							  Si(this.target, this.targetDelta))
							: U(this.target, this.layout.layoutBox),
						this.attemptToResolveRelativeTarget)
					) {
						this.attemptToResolveRelativeTarget = !1;
						const d = this.getClosestProjectingParent();
						d &&
						!!d.resumingFrom == !!this.resumingFrom &&
						!d.options.layoutScroll &&
						d.target &&
						this.animationProgress !== 1
							? ((this.relativeParent = d),
							  this.forceRelativeParentToResolveTarget(),
							  (this.relativeTarget = E()),
							  (this.relativeTargetOrigin = E()),
							  wt(this.relativeTargetOrigin, this.target, d.target),
							  U(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					at.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || De(this.parent.latestValues) || Vi(this.parent.latestValues)))
				return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!(
				(this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
				this.layout
			);
		}
		calcProjection() {
			var r;
			const a = this.getLead(),
				c = !!this.resumingFrom || this !== a;
			let l = !0;
			if (
				((this.isProjectionDirty ||
					(!((r = this.parent) === null || r === void 0) && r.isProjectionDirty)) &&
					(l = !1),
				c && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
				this.resolvedRelativeTargetAt === k.timestamp && (l = !1),
				l)
			)
				return;
			const { layout: u, layoutId: h } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(u || h))
			)
				return;
			U(this.layoutCorrected, this.layout.layoutBox);
			const f = this.treeScale.x,
				d = this.treeScale.y;
			Ea(this.layoutCorrected, this.treeScale, this.path, c),
				a.layout &&
					!a.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					(a.target = a.layout.layoutBox);
			const { target: m } = a;
			if (!m) {
				this.projectionTransform &&
					((this.projectionDelta = pt()),
					(this.projectionTransform = 'none'),
					this.scheduleRender());
				return;
			}
			this.projectionDelta ||
				((this.projectionDelta = pt()), (this.projectionDeltaWithTransform = pt()));
			const y = this.projectionTransform;
			At(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
				(this.projectionTransform = ts(this.projectionDelta, this.treeScale)),
				(this.projectionTransform !== y || this.treeScale.x !== f || this.treeScale.y !== d) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners('projectionUpdate', m)),
				at.recalculatedProjection++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(r = !0) {
			if ((this.options.scheduleRender && this.options.scheduleRender(), r)) {
				const a = this.getStack();
				a && a.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		setAnimationOrigin(r, a = !1) {
			const c = this.snapshot,
				l = c ? c.latestValues : {},
				u = { ...this.latestValues },
				h = pt();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !a);
			const f = E(),
				d = c ? c.source : void 0,
				m = this.layout ? this.layout.source : void 0,
				y = d !== m,
				x = this.getStack(),
				V = !x || x.members.length <= 1,
				g = !!(y && !V && this.options.crossfade === !0 && !this.path.some(Pc));
			this.animationProgress = 0;
			let p;
			(this.mixTargetDelta = (T) => {
				const b = T / 1e3;
				rs(h.x, r.x, b),
					rs(h.y, r.y, b),
					this.setTargetDelta(h),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(wt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						xc(this.relativeTarget, this.relativeTargetOrigin, f, b),
						p && Ja(this.relativeTarget, p) && (this.isProjectionDirty = !1),
						p || (p = E()),
						U(p, this.relativeTarget)),
					y && ((this.animationValues = u), _a(u, l, this.latestValues, b, g, V)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = b);
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(r) {
			this.notifyListeners('animationStart'),
				this.currentAnimation && this.currentAnimation.stop(),
				this.resumingFrom &&
					this.resumingFrom.currentAnimation &&
					this.resumingFrom.currentAnimation.stop(),
				this.pendingAnimation && (_(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = C.update(() => {
					($t.hasAnimatedSinceResize = !0),
						(this.currentAnimation = oc(0, ns, {
							...r,
							onUpdate: (a) => {
								this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
							},
							onComplete: () => {
								r.onComplete && r.onComplete(), this.completeAnimation();
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
			const r = this.getStack();
			r && r.exitAnimationComplete(),
				(this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
				this.notifyListeners('animationComplete');
		}
		finishAnimation() {
			this.currentAnimation &&
				(this.mixTargetDelta && this.mixTargetDelta(ns), this.currentAnimation.stop()),
				this.completeAnimation();
		}
		applyTransformsToTarget() {
			const r = this.getLead();
			let { targetWithTransforms: a, target: c, layout: l, latestValues: u } = r;
			if (!(!a || !c || !l)) {
				if (
					this !== r &&
					this.layout &&
					l &&
					Ei(this.options.animationType, this.layout.layoutBox, l.layoutBox)
				) {
					c = this.target || E();
					const h = I(this.layout.layoutBox.x);
					(c.x.min = r.target.x.min), (c.x.max = c.x.min + h);
					const f = I(this.layout.layoutBox.y);
					(c.y.min = r.target.y.min), (c.y.max = c.y.min + f);
				}
				U(a, c), gt(a, u), At(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
			}
		}
		registerSharedNode(r, a) {
			this.sharedNodes.has(r) || this.sharedNodes.set(r, new tc()), this.sharedNodes.get(r).add(a);
			const l = a.options.initialPromotionConfig;
			a.promote({
				transition: l ? l.transition : void 0,
				preserveFollowOpacity:
					l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0,
			});
		}
		isLead() {
			const r = this.getStack();
			return r ? r.lead === this : !0;
		}
		getLead() {
			var r;
			const { layoutId: a } = this.options;
			return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.lead) || this : this;
		}
		getPrevLead() {
			var r;
			const { layoutId: a } = this.options;
			return a ? ((r = this.getStack()) === null || r === void 0 ? void 0 : r.prevLead) : void 0;
		}
		getStack() {
			const { layoutId: r } = this.options;
			if (r) return this.root.sharedNodes.get(r);
		}
		promote({ needsReset: r, transition: a, preserveFollowOpacity: c } = {}) {
			const l = this.getStack();
			l && l.promote(this, c),
				r && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				a && this.setOptions({ transition: a });
		}
		relegate() {
			const r = this.getStack();
			return r ? r.relegate(this) : !1;
		}
		resetRotation() {
			const { visualElement: r } = this.options;
			if (!r) return;
			let a = !1;
			const { latestValues: c } = r;
			if (((c.rotate || c.rotateX || c.rotateY || c.rotateZ) && (a = !0), !a)) return;
			const l = {};
			for (let u = 0; u < es.length; u++) {
				const h = 'rotate' + es[u];
				c[h] && ((l[h] = c[h]), r.setStaticValue(h, 0));
			}
			r.render();
			for (const u in l) r.setStaticValue(u, l[u]);
			r.scheduleRender();
		}
		getProjectionStyles(r = {}) {
			var a, c;
			const l = {};
			if (!this.instance || this.isSVG) return l;
			if (this.isVisible) l.visibility = '';
			else return { visibility: 'hidden' };
			const u = this.getTransformTemplate();
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(l.opacity = ''),
					(l.pointerEvents = Gt(r.pointerEvents) || ''),
					(l.transform = u ? u(this.latestValues, '') : 'none'),
					l
				);
			const h = this.getLead();
			if (!this.projectionDelta || !this.layout || !h.target) {
				const y = {};
				return (
					this.options.layoutId &&
						((y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
						(y.pointerEvents = Gt(r.pointerEvents) || '')),
					this.hasProjected &&
						!ot(this.latestValues) &&
						((y.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
					y
				);
			}
			const f = h.animationValues || h.latestValues;
			this.applyTransformsToTarget(),
				(l.transform = ts(this.projectionDeltaWithTransform, this.treeScale, f)),
				u && (l.transform = u(f, l.transform));
			const { x: d, y: m } = this.projectionDelta;
			(l.transformOrigin = `${d.origin * 100}% ${m.origin * 100}% 0`),
				h.animationValues
					? (l.opacity =
							h === this
								? (c = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !==
										null && c !== void 0
									? c
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: f.opacityExit)
					: (l.opacity =
							h === this
								? f.opacity !== void 0
									? f.opacity
									: ''
								: f.opacityExit !== void 0
								? f.opacityExit
								: 0);
			for (const y in Wt) {
				if (f[y] === void 0) continue;
				const { correct: x, applyTo: V } = Wt[y],
					g = l.transform === 'none' ? f[y] : x(f[y], h);
				if (V) {
					const p = V.length;
					for (let T = 0; T < p; T++) l[V[T]] = g;
				} else l[y] = g;
			}
			return (
				this.options.layoutId &&
					(l.pointerEvents = h === this ? Gt(r.pointerEvents) || '' : 'none'),
				l
			);
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((r) => {
				var a;
				return (a = r.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
			}),
				this.root.nodes.forEach(ss),
				this.root.sharedNodes.clear();
		}
	};
}
function cc(t) {
	t.updateLayout();
}
function lc(t) {
	var e;
	const n = ((e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) || t.snapshot;
	if (t.isLead() && t.layout && n && t.hasListeners('didUpdate')) {
		const { layoutBox: s, measuredBox: i } = t.layout,
			{ animationType: o } = t.options,
			r = n.source !== t.layout.source;
		o === 'size'
			? N((h) => {
					const f = r ? n.measuredBox[h] : n.layoutBox[h],
						d = I(f);
					(f.min = s[h].min), (f.max = f.min + d);
			  })
			: Ei(o, n.layoutBox, s) &&
			  N((h) => {
					const f = r ? n.measuredBox[h] : n.layoutBox[h],
						d = I(s[h]);
					(f.max = f.min + d),
						t.relativeTarget &&
							!t.currentAnimation &&
							((t.isProjectionDirty = !0), (t.relativeTarget[h].max = t.relativeTarget[h].min + d));
			  });
		const a = pt();
		At(a, s, n.layoutBox);
		const c = pt();
		r ? At(c, t.applyTransform(i, !0), n.measuredBox) : At(c, s, n.layoutBox);
		const l = !Mi(a);
		let u = !1;
		if (!t.resumeFrom) {
			const h = t.getClosestProjectingParent();
			if (h && !h.resumeFrom) {
				const { snapshot: f, layout: d } = h;
				if (f && d) {
					const m = E();
					wt(m, n.layoutBox, f.layoutBox);
					const y = E();
					wt(y, s, d.layoutBox),
						Ri(m, y) || (u = !0),
						h.options.layoutRoot &&
							((t.relativeTarget = y), (t.relativeTargetOrigin = m), (t.relativeParent = h));
				}
			}
		}
		t.notifyListeners('didUpdate', {
			layout: s,
			snapshot: n,
			delta: c,
			layoutDelta: a,
			hasLayoutChanged: l,
			hasRelativeTargetChanged: u,
		});
	} else if (t.isLead()) {
		const { onExitComplete: s } = t.options;
		s && s();
	}
	t.options.transition = void 0;
}
function uc(t) {
	at.totalNodes++,
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
function hc(t) {
	t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function fc(t) {
	t.clearSnapshot();
}
function ss(t) {
	t.clearMeasurements();
}
function dc(t) {
	t.isLayoutDirty = !1;
}
function mc(t) {
	const { visualElement: e } = t.options;
	e && e.getProps().onBeforeLayoutMeasure && e.notify('BeforeLayoutMeasure'), t.resetTransform();
}
function is(t) {
	t.finishAnimation(),
		(t.targetDelta = t.relativeTarget = t.target = void 0),
		(t.isProjectionDirty = !0);
}
function pc(t) {
	t.resolveTargetDelta();
}
function gc(t) {
	t.calcProjection();
}
function yc(t) {
	t.resetRotation();
}
function vc(t) {
	t.removeLeadSnapshot();
}
function rs(t, e, n) {
	(t.translate = M(e.translate, 0, n)),
		(t.scale = M(e.scale, 1, n)),
		(t.origin = e.origin),
		(t.originPoint = e.originPoint);
}
function os(t, e, n, s) {
	(t.min = M(e.min, n.min, s)), (t.max = M(e.max, n.max, s));
}
function xc(t, e, n, s) {
	os(t.x, e.x, n.x, s), os(t.y, e.y, n.y, s);
}
function Pc(t) {
	return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Tc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	as = (t) => typeof navigator < 'u' && navigator.userAgent.toLowerCase().includes(t),
	cs = as('applewebkit/') && !as('chrome/') ? Math.round : R;
function ls(t) {
	(t.min = cs(t.min)), (t.max = cs(t.max));
}
function bc(t) {
	ls(t.x), ls(t.y);
}
function Ei(t, e, n) {
	return t === 'position' || (t === 'preserve-aspect' && !Ae(Jn(e), Jn(n), 0.2));
}
const Vc = Li({
		attachResizeListener: (t, e) => z(t, 'resize', e),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	ge = { current: void 0 },
	Fi = Li({
		measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
		defaultParent: () => {
			if (!ge.current) {
				const t = new Vc({});
				t.mount(window), t.setOptions({ layoutScroll: !0 }), (ge.current = t);
			}
			return ge.current;
		},
		resetTransform: (t, e) => {
			t.style.transform = e !== void 0 ? e : 'none';
		},
		checkIsScrollRoot: (t) => window.getComputedStyle(t).position === 'fixed',
	}),
	Sc = { pan: { Feature: Na }, drag: { Feature: Ua, ProjectionNode: Fi, MeasureLayout: Ai } },
	Cc = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Ac(t) {
	const e = Cc.exec(t);
	if (!e) return [,];
	const [, n, s] = e;
	return [n, s];
}
function Re(t, e, n = 1) {
	const [s, i] = Ac(t);
	if (!s) return;
	const o = window.getComputedStyle(e).getPropertyValue(s);
	if (o) {
		const r = o.trim();
		return gi(r) ? parseFloat(r) : r;
	} else return ve(i) ? Re(i, e, n + 1) : i;
}
function wc(t, { ...e }, n) {
	const s = t.current;
	if (!(s instanceof Element)) return { target: e, transitionEnd: n };
	n && (n = { ...n }),
		t.values.forEach((i) => {
			const o = i.get();
			if (!ve(o)) return;
			const r = Re(o, s);
			r && i.set(r);
		});
	for (const i in e) {
		const o = e[i];
		if (!ve(o)) continue;
		const r = Re(o, s);
		r && ((e[i] = r), n || (n = {}), n[i] === void 0 && (n[i] = o));
	}
	return { target: e, transitionEnd: n };
}
const Dc = new Set([
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
	Bi = (t) => Dc.has(t),
	Mc = (t) => Object.keys(t).some(Bi),
	us = (t) => t === ut || t === P,
	hs = (t, e) => parseFloat(t.split(', ')[e]),
	fs =
		(t, e) =>
		(n, { transform: s }) => {
			if (s === 'none' || !s) return 0;
			const i = s.match(/^matrix3d\((.+)\)$/);
			if (i) return hs(i[1], e);
			{
				const o = s.match(/^matrix\((.+)\)$/);
				return o ? hs(o[1], t) : 0;
			}
		},
	Rc = new Set(['x', 'y', 'z']),
	Lc = Et.filter((t) => !Rc.has(t));
function Ec(t) {
	const e = [];
	return (
		Lc.forEach((n) => {
			const s = t.getValue(n);
			s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith('scale') ? 1 : 0));
		}),
		e.length && t.render(),
		e
	);
}
const vt = {
	width: ({ x: t }, { paddingLeft: e = '0', paddingRight: n = '0' }) =>
		t.max - t.min - parseFloat(e) - parseFloat(n),
	height: ({ y: t }, { paddingTop: e = '0', paddingBottom: n = '0' }) =>
		t.max - t.min - parseFloat(e) - parseFloat(n),
	top: (t, { top: e }) => parseFloat(e),
	left: (t, { left: e }) => parseFloat(e),
	bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
	right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
	x: fs(4, 13),
	y: fs(5, 14),
};
vt.translateX = vt.x;
vt.translateY = vt.y;
const Fc = (t, e, n) => {
		const s = e.measureViewportBox(),
			i = e.current,
			o = getComputedStyle(i),
			{ display: r } = o,
			a = {};
		r === 'none' && e.setStaticValue('display', t.display || 'block'),
			n.forEach((l) => {
				a[l] = vt[l](s, o);
			}),
			e.render();
		const c = e.measureViewportBox();
		return (
			n.forEach((l) => {
				const u = e.getValue(l);
				u && u.jump(a[l]), (t[l] = vt[l](c, o));
			}),
			t
		);
	},
	Bc = (t, e, n = {}, s = {}) => {
		(e = { ...e }), (s = { ...s });
		const i = Object.keys(e).filter(Bi);
		let o = [],
			r = !1;
		const a = [];
		if (
			(i.forEach((c) => {
				const l = t.getValue(c);
				if (!t.hasValue(c)) return;
				let u = n[c],
					h = Tt(u);
				const f = e[c];
				let d;
				if (Ht(f)) {
					const m = f.length,
						y = f[0] === null ? 1 : 0;
					(u = f[y]), (h = Tt(u));
					for (let x = y; x < m && f[x] !== null; x++) d ? ze(Tt(f[x]) === d) : (d = Tt(f[x]));
				} else d = Tt(f);
				if (h !== d)
					if (us(h) && us(d)) {
						const m = l.get();
						typeof m == 'string' && l.set(parseFloat(m)),
							typeof f == 'string'
								? (e[c] = parseFloat(f))
								: Array.isArray(f) && d === P && (e[c] = f.map(parseFloat));
					} else
						h?.transform && d?.transform && (u === 0 || f === 0)
							? u === 0
								? l.set(d.transform(u))
								: (e[c] = h.transform(f))
							: (r || ((o = Ec(t)), (r = !0)),
							  a.push(c),
							  (s[c] = s[c] !== void 0 ? s[c] : e[c]),
							  l.jump(f));
			}),
			a.length)
		) {
			const c = a.indexOf('height') >= 0 ? window.pageYOffset : null,
				l = Fc(e, t, a);
			return (
				o.length &&
					o.forEach(([u, h]) => {
						t.getValue(u).set(h);
					}),
				t.render(),
				Qt && c !== null && window.scrollTo({ top: c }),
				{ target: l, transitionEnd: s }
			);
		} else return { target: e, transitionEnd: s };
	};
function kc(t, e, n, s) {
	return Mc(e) ? Bc(t, e, n, s) : { target: e, transitionEnd: s };
}
const jc = (t, e, n, s) => {
		const i = wc(t, e, s);
		return (e = i.target), (s = i.transitionEnd), kc(t, e, n, s);
	},
	Le = { current: null },
	ki = { current: !1 };
function Oc() {
	if (((ki.current = !0), !!Qt))
		if (window.matchMedia) {
			const t = window.matchMedia('(prefers-reduced-motion)'),
				e = () => (Le.current = t.matches);
			t.addListener(e), e();
		} else Le.current = !1;
}
function Ic(t, e, n) {
	const { willChange: s } = e;
	for (const i in e) {
		const o = e[i],
			r = n[i];
		if (O(o)) t.addValue(i, o), Yt(s) && s.add(i);
		else if (O(r)) t.addValue(i, yt(o, { owner: t })), Yt(s) && s.remove(i);
		else if (r !== o)
			if (t.hasValue(i)) {
				const a = t.getValue(i);
				!a.hasAnimated && a.set(o);
			} else {
				const a = t.getStaticValue(i);
				t.addValue(i, yt(a !== void 0 ? a : o, { owner: t }));
			}
	}
	for (const i in n) e[i] === void 0 && t.removeValue(i);
	return e;
}
const ds = new WeakMap(),
	ji = Object.keys(Mt),
	Uc = ji.length,
	ms = [
		'AnimationStart',
		'AnimationComplete',
		'Update',
		'BeforeLayoutMeasure',
		'LayoutMeasure',
		'LayoutAnimationStart',
		'LayoutAnimationComplete',
	],
	Nc = Be.length;
class Gc {
	constructor(
		{ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, visualState: o },
		r = {}
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
			(this.scheduleRender = () => C.render(this.render, !1, !0));
		const { latestValues: a, renderState: c } = o;
		(this.latestValues = a),
			(this.baseTarget = { ...a }),
			(this.initialValues = n.initial ? { ...a } : {}),
			(this.renderState = c),
			(this.parent = e),
			(this.props = n),
			(this.presenceContext = s),
			(this.depth = e ? e.depth + 1 : 0),
			(this.reducedMotionConfig = i),
			(this.options = r),
			(this.isControllingVariants = te(n)),
			(this.isVariantNode = vs(n)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(e && e.current));
		const { willChange: l, ...u } = this.scrapeMotionValuesFromProps(n, {});
		for (const h in u) {
			const f = u[h];
			a[h] !== void 0 && O(f) && (f.set(a[h], !1), Yt(l) && l.add(h));
		}
	}
	scrapeMotionValuesFromProps(e, n) {
		return {};
	}
	mount(e) {
		(this.current = e),
			ds.set(e, this),
			this.projection && !this.projection.instance && this.projection.mount(e),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((n, s) => this.bindToMotionValue(s, n)),
			ki.current || Oc(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === 'never'
					? !1
					: this.reducedMotionConfig === 'always'
					? !0
					: Le.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext);
	}
	unmount() {
		ds.delete(this.current),
			this.projection && this.projection.unmount(),
			_(this.notifyUpdate),
			_(this.render),
			this.valueSubscriptions.forEach((e) => e()),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this);
		for (const e in this.events) this.events[e].clear();
		for (const e in this.features) this.features[e].unmount();
		this.current = null;
	}
	bindToMotionValue(e, n) {
		const s = lt.has(e),
			i = n.on('change', (r) => {
				(this.latestValues[e] = r),
					this.props.onUpdate && C.update(this.notifyUpdate, !1, !0),
					s && this.projection && (this.projection.isTransformDirty = !0);
			}),
			o = n.on('renderRequest', this.scheduleRender);
		this.valueSubscriptions.set(e, () => {
			i(), o();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type
			? 0
			: this.sortInstanceNodePosition(this.current, e.current);
	}
	loadFeatures({ children: e, ...n }, s, i, o) {
		let r, a;
		for (let c = 0; c < Uc; c++) {
			const l = ji[c],
				{ isEnabled: u, Feature: h, ProjectionNode: f, MeasureLayout: d } = Mt[l];
			f && (r = f),
				u(n) && (!this.features[l] && h && (this.features[l] = new h(this)), d && (a = d));
		}
		if (!this.projection && r) {
			this.projection = new r(this.latestValues, this.parent && this.parent.projection);
			const {
				layoutId: c,
				layout: l,
				drag: u,
				dragConstraints: h,
				layoutScroll: f,
				layoutRoot: d,
			} = n;
			this.projection.setOptions({
				layoutId: c,
				layout: l,
				alwaysMeasureLayout: !!u || (h && dt(h)),
				visualElement: this,
				scheduleRender: () => this.scheduleRender(),
				animationType: typeof l == 'string' ? l : 'both',
				initialPromotionConfig: o,
				layoutScroll: f,
				layoutRoot: d,
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
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E();
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
		for (let s = 0; s < ms.length; s++) {
			const i = ms[s];
			this.propEventSubscriptions[i] &&
				(this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
			const o = e['on' + i];
			o && (this.propEventSubscriptions[i] = this.on(i, o));
		}
		(this.prevMotionValues = Ic(
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
			const s = this.parent ? this.parent.getVariantContext() || {} : {};
			return this.props.initial !== void 0 && (s.initial = this.props.initial), s;
		}
		const n = {};
		for (let s = 0; s < Nc; s++) {
			const i = Be[s],
				o = this.props[i];
			(Dt(o) || o === !1) && (n[i] = o);
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
		let s = this.values.get(e);
		return s === void 0 && n !== void 0 && ((s = yt(n, { owner: this })), this.addValue(e, s)), s;
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
		const { initial: s } = this.props,
			i =
				typeof s == 'string' || typeof s == 'object'
					? (n = We(this.props, s)) === null || n === void 0
						? void 0
						: n[e]
					: void 0;
		if (s && i !== void 0) return i;
		const o = this.getBaseTargetFromProps(this.props, e);
		return o !== void 0 && !O(o)
			? o
			: this.initialValues[e] !== void 0 && i === void 0
			? void 0
			: this.baseTarget[e];
	}
	on(e, n) {
		return this.events[e] || (this.events[e] = new Qe()), this.events[e].add(n);
	}
	notify(e, ...n) {
		this.events[e] && this.events[e].notify(...n);
	}
}
class Oi extends Gc {
	sortInstanceNodePosition(e, n) {
		return e.compareDocumentPosition(n) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, n) {
		return e.style ? e.style[n] : void 0;
	}
	removeValueFromRenderState(e, { vars: n, style: s }) {
		delete n[e], delete s[e];
	}
	makeTargetAnimatableFromInstance(
		{ transition: e, transitionEnd: n, ...s },
		{ transformValues: i },
		o
	) {
		let r = ra(s, e || {}, this);
		if ((i && (n && (n = i(n)), s && (s = i(s)), r && (r = i(r))), o)) {
			sa(this, s, r);
			const a = jc(this, s, r, n);
			(n = a.transitionEnd), (s = a.target);
		}
		return { transition: e, transitionEnd: n, ...s };
	}
}
function $c(t) {
	return window.getComputedStyle(t);
}
class Wc extends Oi {
	readValueFromInstance(e, n) {
		if (lt.has(n)) {
			const s = Xe(n);
			return (s && s.default) || 0;
		} else {
			const s = $c(e),
				i = (Vs(n) ? s.getPropertyValue(n) : s[n]) || 0;
			return typeof i == 'string' ? i.trim() : i;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: n }) {
		return Ci(e, n);
	}
	build(e, n, s, i) {
		Oe(e, n, s, i.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, n) {
		return $e(e, n);
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		const { children: e } = this.props;
		O(e) &&
			(this.childSubscription = e.on('change', (n) => {
				this.current && (this.current.textContent = `${n}`);
			}));
	}
	renderInstance(e, n, s, i) {
		Ms(e, n, s, i);
	}
}
class zc extends Oi {
	constructor() {
		super(...arguments), (this.isSVGTag = !1);
	}
	getBaseTargetFromProps(e, n) {
		return e[n];
	}
	readValueFromInstance(e, n) {
		if (lt.has(n)) {
			const s = Xe(n);
			return (s && s.default) || 0;
		}
		return (n = Rs.has(n) ? n : Ge(n)), e.getAttribute(n);
	}
	measureInstanceViewportBox() {
		return E();
	}
	scrapeMotionValuesFromProps(e, n) {
		return Es(e, n);
	}
	build(e, n, s, i) {
		Ue(e, n, s, this.isSVGTag, i.transformTemplate);
	}
	renderInstance(e, n, s, i) {
		Ls(e, n, s, i);
	}
	mount(e) {
		(this.isSVGTag = Ne(e.tagName)), super.mount(e);
	}
}
const Ii = (t, e) =>
		je(t)
			? new zc(e, { enableHardwareAcceleration: !1 })
			: new Wc(e, { enableHardwareAcceleration: !0 }),
	Hc = { layout: { ProjectionNode: Fi, MeasureLayout: Ai } },
	Ui = { ...xa, ...Nr, ...Sc, ...Hc },
	il = qi((t, e) => ks(t, e, Ui, Ii));
function rl(t) {
	return Ps(ks(t, { forwardMotionProps: !1 }, Ui, Ii));
}
function Ni() {
	const t = v.useRef(!1);
	return (
		Ee(
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
function Kc() {
	const t = Ni(),
		[e, n] = v.useState(0),
		s = v.useCallback(() => {
			t.current && n(e + 1);
		}, [e]);
	return [v.useCallback(() => C.postRender(s), [s]), e];
}
class _c extends v.Component {
	getSnapshotBeforeUpdate(e) {
		const n = this.props.childRef.current;
		if (n && e.isPresent && !this.props.isPresent) {
			const s = this.props.sizeRef.current;
			(s.height = n.offsetHeight || 0),
				(s.width = n.offsetWidth || 0),
				(s.top = n.offsetTop),
				(s.left = n.offsetLeft);
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
}
function Xc({ children: t, isPresent: e }) {
	const n = v.useId(),
		s = v.useRef(null),
		i = v.useRef({ width: 0, height: 0, top: 0, left: 0 });
	return (
		v.useInsertionEffect(() => {
			const { width: o, height: r, top: a, left: c } = i.current;
			if (e || !s.current || !o || !r) return;
			s.current.dataset.motionPopId = n;
			const l = document.createElement('style');
			return (
				document.head.appendChild(l),
				l.sheet &&
					l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${c}px !important;
          }
        `),
				() => {
					document.head.removeChild(l);
				}
			);
		}, [e]),
		v.createElement(_c, { isPresent: e, childRef: s, sizeRef: i }, v.cloneElement(t, { ref: s }))
	);
}
const ye = ({
	children: t,
	initial: e,
	isPresent: n,
	onExitComplete: s,
	custom: i,
	presenceAffectsLayout: o,
	mode: r,
}) => {
	const a = Fs(Yc),
		c = v.useId(),
		l = v.useMemo(
			() => ({
				id: c,
				initial: e,
				isPresent: n,
				custom: i,
				onExitComplete: (u) => {
					a.set(u, !0);
					for (const h of a.values()) if (!h) return;
					s && s();
				},
				register: (u) => (a.set(u, !1), () => a.delete(u)),
			}),
			o ? void 0 : [n]
		);
	return (
		v.useMemo(() => {
			a.forEach((u, h) => a.set(h, !1));
		}, [n]),
		v.useEffect(() => {
			!n && !a.size && s && s();
		}, [n]),
		r === 'popLayout' && (t = v.createElement(Xc, { isPresent: n }, t)),
		v.createElement(Lt.Provider, { value: l }, t)
	);
};
function Yc() {
	return new Map();
}
function qc(t) {
	return v.useEffect(() => () => t(), []);
}
const ft = (t) => t.key || '';
function Zc(t, e) {
	t.forEach((n) => {
		const s = ft(n);
		e.set(s, n);
	});
}
function Qc(t) {
	const e = [];
	return (
		v.Children.forEach(t, (n) => {
			v.isValidElement(n) && e.push(n);
		}),
		e
	);
}
const ol = ({
	children: t,
	custom: e,
	initial: n = !0,
	onExitComplete: s,
	exitBeforeEnter: i,
	presenceAffectsLayout: o = !0,
	mode: r = 'sync',
}) => {
	const a = v.useContext(ke).forceRender || Kc()[0],
		c = Ni(),
		l = Qc(t);
	let u = l;
	const h = v.useRef(new Map()).current,
		f = v.useRef(u),
		d = v.useRef(new Map()).current,
		m = v.useRef(!0);
	if (
		(Ee(() => {
			(m.current = !1), Zc(l, d), (f.current = u);
		}),
		qc(() => {
			(m.current = !0), d.clear(), h.clear();
		}),
		m.current)
	)
		return v.createElement(
			v.Fragment,
			null,
			u.map((g) =>
				v.createElement(
					ye,
					{
						key: ft(g),
						isPresent: !0,
						initial: n ? void 0 : !1,
						presenceAffectsLayout: o,
						mode: r,
					},
					g
				)
			)
		);
	u = [...u];
	const y = f.current.map(ft),
		x = l.map(ft),
		V = y.length;
	for (let g = 0; g < V; g++) {
		const p = y[g];
		x.indexOf(p) === -1 && !h.has(p) && h.set(p, void 0);
	}
	return (
		r === 'wait' && h.size && (u = []),
		h.forEach((g, p) => {
			if (x.indexOf(p) !== -1) return;
			const T = d.get(p);
			if (!T) return;
			const b = y.indexOf(p);
			let L = g;
			if (!L) {
				const A = () => {
					d.delete(p), h.delete(p);
					const S = f.current.findIndex((w) => w.key === p);
					if ((f.current.splice(S, 1), !h.size)) {
						if (((f.current = l), c.current === !1)) return;
						a(), s && s();
					}
				};
				(L = v.createElement(
					ye,
					{
						key: ft(T),
						isPresent: !1,
						onExitComplete: A,
						custom: e,
						presenceAffectsLayout: o,
						mode: r,
					},
					T
				)),
					h.set(p, L);
			}
			u.splice(b, 0, L);
		}),
		(u = u.map((g) => {
			const p = g.key;
			return h.has(p)
				? g
				: v.createElement(ye, { key: ft(g), isPresent: !0, presenceAffectsLayout: o, mode: r }, g);
		})),
		v.createElement(v.Fragment, null, h.size ? u : u.map((g) => v.cloneElement(g)))
	);
};
export {
	tt as $,
	Rt as A,
	ui as B,
	yo as C,
	Hr as D,
	Qo as E,
	lt as F,
	Vs as G,
	Ge as H,
	qe as I,
	Ze as J,
	ki as K,
	ys as L,
	gs as M,
	Oc as N,
	Le as O,
	la as P,
	el as Q,
	Eo as R,
	rc as S,
	zc as T,
	Wc as U,
	ds as V,
	fi as W,
	An as X,
	Cn as Y,
	Jr as Z,
	go as _,
	ks as a,
	oc as a0,
	xi as a1,
	qc as a2,
	z as a3,
	Xi as a4,
	ge as a5,
	vn as a6,
	Wr as a7,
	Kr as a8,
	R as a9,
	no as aA,
	Ke as aB,
	eo as aC,
	Zs as aD,
	qs as aE,
	to as aF,
	He as aG,
	Zr as aH,
	_s as aI,
	Qr as aJ,
	kt as aK,
	Xs as aL,
	Ys as aM,
	sc as aN,
	Dn as aO,
	Pa as aP,
	re as aQ,
	I as aR,
	fr as aS,
	Us as aT,
	H as aU,
	Dr as aV,
	Qt as aW,
	Bs as aa,
	Gc as ab,
	E as ac,
	ra as ad,
	sa as ae,
	Zt as af,
	xn as ag,
	It as ah,
	rl as ai,
	ol as aj,
	Gt as ak,
	zt as al,
	nl as am,
	Ga as an,
	Ps as ao,
	Qi as ap,
	er as aq,
	j as ar,
	nt as as,
	P as at,
	zr as au,
	Lt as av,
	xs as aw,
	nc as ax,
	et as ay,
	J as az,
	_i as b,
	qi as c,
	ke as d,
	Kc as e,
	tl as f,
	il as g,
	yt as h,
	li as i,
	Ee as j,
	_ as k,
	hr as l,
	M as m,
	C as n,
	wn as o,
	O as p,
	Ii as q,
	xa as r,
	Nr as s,
	Sc as t,
	Fs as u,
	Hc as v,
	Xt as w,
	k as x,
	K as y,
	ze as z,
};
