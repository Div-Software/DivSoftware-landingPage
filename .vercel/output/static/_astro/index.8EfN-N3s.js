import {
	c as et,
	a as tt,
	l as nt,
	M as O,
	u as y,
	b as de,
	L as st,
	d as me,
	e as Le,
	m as Oe,
	f as rt,
	g as ze,
	h as D,
	i as Pe,
	j as N,
	k as B,
	n as x,
	o as X,
	p as V,
	q as ot,
	r as at,
	s as it,
	t as ut,
	v as ct,
	w as lt,
	x as J,
	y as Re,
	z as ft,
	A as De,
	B as dt,
	C as We,
	D as mt,
	E as pt,
	F as $,
	G as ht,
	H as pe,
	I as gt,
	J as q,
	K as yt,
	N as vt,
	O as Et,
	P as Be,
	Q as St,
	R as xt,
	S as wt,
	T as At,
	U as Ct,
	V as Q,
	W as It,
	X as bt,
	Y as Mt,
	Z as Vt,
	_ as Tt,
	$ as Lt,
	a0 as Fe,
	a1 as Ot,
	a2 as zt,
	a3 as Pt,
	a4 as He,
	a5 as F,
	a6 as he,
	a7 as Rt,
	a8 as ge,
	a9 as Dt,
	aa as Wt,
	ab as Bt,
	ac as Ft,
	ad as Ht,
	ae as kt,
	af as Gt,
	ag as Nt,
	ah as Ut,
} from './index.9xSjhrF6.js';
import {
	aj as _s,
	ax as Js,
	av as $s,
	aw as qs,
	aU as Qs,
	aV as Zs,
	ap as er,
	aA as tr,
	aB as nr,
	aC as sr,
	aD as rr,
	aq as or,
	aR as ar,
	aE as ir,
	aF as ur,
	aG as cr,
	ay as lr,
	ar as fr,
	as as dr,
	ai as mr,
	ao as pr,
	aK as hr,
	aN as gr,
	aO as yr,
	aP as vr,
	aH as Er,
	aI as Sr,
	aJ as xr,
	aS as wr,
	aW as Ar,
	aT as Cr,
	al as Ir,
	aL as br,
	au as Mr,
	az as Vr,
	at as Tr,
	ak as Lr,
	aM as Or,
	aQ as zr,
	am as Pr,
	an as Rr,
} from './index.9xSjhrF6.js';
import { r as c } from './index.J00EDW8g.js';
import './_commonjsHelpers.5-cIlDoe.js';
const hs = et(tt);
function gs({ children: e, isValidProp: t, ...n }) {
	t && nt(t), (n = { ...c.useContext(O), ...n }), (n.isStatic = y(() => n.isStatic));
	const s = c.useMemo(
		() => n,
		[JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
	);
	return c.createElement(O.Provider, { value: s }, e);
}
function ys({ children: e, features: t, strict: n = !1 }) {
	const [, s] = c.useState(!Y(t)),
		r = c.useRef(void 0);
	if (!Y(t)) {
		const { renderer: o, ...a } = t;
		(r.current = o), de(a);
	}
	return (
		c.useEffect(() => {
			Y(t) &&
				t().then(({ renderer: o, ...a }) => {
					de(a), (r.current = o), s(!0);
				});
		}, []),
		c.createElement(st.Provider, { value: { renderer: r.current, strict: n } }, e)
	);
}
function Y(e) {
	return typeof e == 'function';
}
const jt = c.createContext(null),
	Xt = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function ye() {
	const e = new Set(),
		t = new WeakMap(),
		n = () => e.forEach(Xt);
	return {
		add: (s) => {
			e.add(s), t.set(s, s.addEventListener('willUpdate', n));
		},
		remove: (s) => {
			e.delete(s);
			const r = t.get(s);
			r && (r(), t.delete(s)), n();
		},
		dirty: n,
	};
}
const ke = (e) => e === !0,
	Yt = (e) => ke(e === !0) || e === 'id',
	Kt = ({ children: e, id: t, inherit: n = !0 }) => {
		const s = c.useContext(me),
			r = c.useContext(jt),
			[o, a] = Le(),
			i = c.useRef(null),
			u = s.id || r;
		i.current === null &&
			(Yt(n) && u && (t = t ? u + '-' + t : u),
			(i.current = { id: t, group: (ke(n) && s.group) || ye() }));
		const f = c.useMemo(() => ({ ...i.current, forceRender: o }), [a]);
		return c.createElement(me.Provider, { value: f }, e);
	},
	Ge = c.createContext(null);
function _t(e, t, n, s) {
	if (!s) return e;
	const r = e.findIndex((l) => l.value === t);
	if (r === -1) return e;
	const o = s > 0 ? 1 : -1,
		a = e[r + o];
	if (!a) return e;
	const i = e[r],
		u = a.layout,
		f = Oe(u.min, u.max, 0.5);
	return (o === 1 && i.layout.max + n > f) || (o === -1 && i.layout.min + n < f)
		? rt(e, r, r + o)
		: e;
}
function Jt({ children: e, as: t = 'ul', axis: n = 'y', onReorder: s, values: r, ...o }, a) {
	const i = y(() => ze(t)),
		u = [],
		f = c.useRef(!1),
		l = {
			axis: n,
			registerItem: (p, d) => {
				d &&
					u.findIndex((m) => p === m.value) === -1 &&
					(u.push({ value: p, layout: d[n] }), u.sort(Qt));
			},
			updateOrder: (p, d, m) => {
				if (f.current) return;
				const S = _t(u, p, d, m);
				u !== S && ((f.current = !0), s(S.map(qt).filter((v) => r.indexOf(v) !== -1)));
			},
		};
	return (
		c.useEffect(() => {
			f.current = !1;
		}),
		c.createElement(
			i,
			{ ...o, ref: a, ignoreStrict: !0 },
			c.createElement(Ge.Provider, { value: l }, e)
		)
	);
}
const $t = c.forwardRef(Jt);
function qt(e) {
	return e.value;
}
function Qt(e, t) {
	return e.layout.min - t.layout.min;
}
function T(e) {
	const t = y(() => D(e)),
		{ isStatic: n } = c.useContext(O);
	if (n) {
		const [, s] = c.useState(e);
		c.useEffect(() => t.on('change', s), []);
	}
	return t;
}
const Zt = (e) => typeof e == 'object' && e.mix,
	en = (e) => (Zt(e) ? e.mix : void 0);
function tn(...e) {
	const t = !Array.isArray(e[0]),
		n = t ? 0 : -1,
		s = e[0 + n],
		r = e[1 + n],
		o = e[2 + n],
		a = e[3 + n],
		i = Pe(r, o, { mixer: en(o[0]), ...a });
	return t ? i(s) : i;
}
function ne(e, t) {
	const n = T(t()),
		s = () => n.set(t());
	return (
		s(),
		N(() => {
			const r = () => x.update(s, !1, !0),
				o = e.map((a) => a.on('change', r));
			return () => {
				o.forEach((a) => a()), B(s);
			};
		}),
		n
	);
}
function nn(e) {
	(X.current = []), e();
	const t = ne(X.current, e);
	return (X.current = void 0), t;
}
function Z(e, t, n, s) {
	if (typeof e == 'function') return nn(e);
	const r = typeof t == 'function' ? t : tn(t, n, s);
	return Array.isArray(e) ? ve(e, r) : ve([e], ([o]) => r(o));
}
function ve(e, t) {
	const n = y(() => []);
	return ne(e, () => {
		n.length = 0;
		const s = e.length;
		for (let r = 0; r < s; r++) n[r] = e[r].get();
		return t(n);
	});
}
function Ee(e, t = 0) {
	return V(e) ? e : T(t);
}
function sn(
	{ children: e, style: t = {}, value: n, as: s = 'li', onDrag: r, layout: o = !0, ...a },
	i
) {
	const u = y(() => ze(s)),
		f = c.useContext(Ge),
		l = { x: Ee(t.x), y: Ee(t.y) },
		p = Z([l.x, l.y], ([h, g]) => (h || g ? 1 : 'unset')),
		d = c.useRef(null),
		{ axis: m, registerItem: S, updateOrder: v } = f;
	return (
		c.useEffect(() => {
			S(n, d.current);
		}, [f]),
		c.createElement(
			u,
			{
				drag: m,
				...a,
				dragSnapToOrigin: !0,
				style: { ...t, x: l.x, y: l.y, zIndex: p },
				layout: o,
				onDrag: (h, g) => {
					const { velocity: w } = g;
					w[m] && v(n, l[m].get(), w[m]), r && r(h, g);
				},
				onLayoutMeasure: (h) => {
					d.current = h;
				},
				ref: i,
				ignoreStrict: !0,
			},
			e
		)
	);
}
const rn = c.forwardRef(sn),
	vs = { Group: $t, Item: rn },
	on = { renderer: ot, ...at, ...it },
	Es = { ...on, ...ut, ...ct };
function Ss(e, ...t) {
	const n = e.length;
	function s() {
		let r = '';
		for (let o = 0; o < n; o++) {
			r += e[o];
			const a = t[o];
			a && (r += V(a) ? a.get() : a);
		}
		return r;
	}
	return ne(t.filter(V), s);
}
function xs(e, t = {}) {
	const { isStatic: n } = c.useContext(O),
		s = c.useRef(null),
		r = T(V(e) ? e.get() : e),
		o = () => {
			s.current && s.current.stop();
		};
	return (
		c.useInsertionEffect(
			() =>
				r.attach((a, i) => {
					if (n) return i(a);
					if (
						(o(),
						(s.current = lt({
							keyframes: [r.get(), a],
							velocity: r.getVelocity(),
							type: 'spring',
							restDelta: 0.001,
							restSpeed: 0.01,
							...t,
							onUpdate: i,
						})),
						!J.isProcessing)
					) {
						const u = performance.now() - J.timestamp;
						u < 30 && (s.current.time = Re(u));
					}
					return r.get();
				}, o),
			[JSON.stringify(t)]
		),
		N(() => {
			if (V(e)) return e.on('change', (a) => r.set(parseFloat(a)));
		}, [r]),
		r
	);
}
function an(e, t, n) {
	c.useInsertionEffect(() => e.on(t, n), [e, t, n]);
}
function ws(e) {
	const t = T(e.getVelocity());
	return (
		an(e, 'velocityChange', (n) => {
			t.set(n);
		}),
		t
	);
}
function U(e, t, n) {
	var s;
	if (typeof e == 'string') {
		let r = document;
		t && (ft(!!t.current), (r = t.current)),
			n
				? (((s = n[e]) !== null && s !== void 0) || (n[e] = r.querySelectorAll(e)), (e = n[e]))
				: (e = r.querySelectorAll(e));
	} else e instanceof Element && (e = [e]);
	return Array.from(e || []);
}
const H = new WeakMap();
let M;
function un(e, t) {
	if (t) {
		const { inlineSize: n, blockSize: s } = t[0];
		return { width: n, height: s };
	} else
		return e instanceof SVGElement && 'getBBox' in e
			? e.getBBox()
			: { width: e.offsetWidth, height: e.offsetHeight };
}
function cn({ target: e, contentRect: t, borderBoxSize: n }) {
	var s;
	(s = H.get(e)) === null ||
		s === void 0 ||
		s.forEach((r) => {
			r({
				target: e,
				contentSize: t,
				get size() {
					return un(e, n);
				},
			});
		});
}
function ln(e) {
	e.forEach(cn);
}
function fn() {
	typeof ResizeObserver > 'u' || (M = new ResizeObserver(ln));
}
function dn(e, t) {
	M || fn();
	const n = U(e);
	return (
		n.forEach((s) => {
			let r = H.get(s);
			r || ((r = new Set()), H.set(s, r)), r.add(t), M?.observe(s);
		}),
		() => {
			n.forEach((s) => {
				const r = H.get(s);
				r?.delete(t), r?.size || M?.unobserve(s);
			});
		}
	);
}
const k = new Set();
let W;
function mn() {
	(W = () => {
		const e = { width: window.innerWidth, height: window.innerHeight },
			t = { target: window, size: e, contentSize: e };
		k.forEach((n) => n(t));
	}),
		window.addEventListener('resize', W);
}
function pn(e) {
	return (
		k.add(e),
		W || mn(),
		() => {
			k.delete(e), !k.size && W && (W = void 0);
		}
	);
}
function hn(e, t) {
	return typeof e == 'function' ? pn(e) : dn(e, t);
}
const gn = 50,
	Se = () => ({
		current: 0,
		offset: [],
		progress: 0,
		scrollLength: 0,
		targetOffset: 0,
		targetLength: 0,
		containerLength: 0,
		velocity: 0,
	}),
	yn = () => ({ time: 0, x: Se(), y: Se() }),
	vn = { x: { length: 'Width', position: 'Left' }, y: { length: 'Height', position: 'Top' } };
function xe(e, t, n, s) {
	const r = n[t],
		{ length: o, position: a } = vn[t],
		i = r.current,
		u = n.time;
	(r.current = e['scroll' + a]),
		(r.scrollLength = e['scroll' + o] - e['client' + o]),
		(r.offset.length = 0),
		(r.offset[0] = 0),
		(r.offset[1] = r.scrollLength),
		(r.progress = De(0, r.scrollLength, r.current));
	const f = s - u;
	r.velocity = f > gn ? 0 : dt(r.current - i, f);
}
function En(e, t, n) {
	xe(e, 'x', t, n), xe(e, 'y', t, n), (t.time = n);
}
function Sn(e, t) {
	const n = { x: 0, y: 0 };
	let s = e;
	for (; s && s !== t; )
		if (s instanceof HTMLElement) (n.x += s.offsetLeft), (n.y += s.offsetTop), (s = s.offsetParent);
		else if (s.tagName === 'svg') {
			const r = s.getBoundingClientRect();
			s = s.parentElement;
			const o = s.getBoundingClientRect();
			(n.x += r.left - o.left), (n.y += r.top - o.top);
		} else if (s instanceof SVGGraphicsElement) {
			const { x: r, y: o } = s.getBBox();
			(n.x += r), (n.y += o);
			let a = null,
				i = s.parentNode;
			for (; !a; ) i.tagName === 'svg' && (a = i), (i = s.parentNode);
			s = a;
		} else break;
	return n;
}
const xn = {
		Enter: [
			[0, 1],
			[1, 1],
		],
		Exit: [
			[0, 0],
			[1, 0],
		],
		Any: [
			[1, 0],
			[0, 1],
		],
		All: [
			[0, 0],
			[1, 1],
		],
	},
	ee = { start: 0, center: 0.5, end: 1 };
function we(e, t, n = 0) {
	let s = 0;
	if ((ee[e] !== void 0 && (e = ee[e]), typeof e == 'string')) {
		const r = parseFloat(e);
		e.endsWith('px')
			? (s = r)
			: e.endsWith('%')
			? (e = r / 100)
			: e.endsWith('vw')
			? (s = (r / 100) * document.documentElement.clientWidth)
			: e.endsWith('vh')
			? (s = (r / 100) * document.documentElement.clientHeight)
			: (e = r);
	}
	return typeof e == 'number' && (s = t * e), n + s;
}
const wn = [0, 0];
function An(e, t, n, s) {
	let r = Array.isArray(e) ? e : wn,
		o = 0,
		a = 0;
	return (
		typeof e == 'number'
			? (r = [e, e])
			: typeof e == 'string' &&
			  ((e = e.trim()), e.includes(' ') ? (r = e.split(' ')) : (r = [e, ee[e] ? e : '0'])),
		(o = we(r[0], n, s)),
		(a = we(r[1], t)),
		o - a
	);
}
const Cn = { x: 0, y: 0 };
function In(e) {
	return 'getBBox' in e && e.tagName !== 'svg'
		? e.getBBox()
		: { width: e.clientWidth, height: e.clientHeight };
}
function bn(e, t, n) {
	let { offset: s = xn.All } = n;
	const { target: r = e, axis: o = 'y' } = n,
		a = o === 'y' ? 'height' : 'width',
		i = r !== e ? Sn(r, e) : Cn,
		u = r === e ? { width: e.scrollWidth, height: e.scrollHeight } : In(r),
		f = { width: e.clientWidth, height: e.clientHeight };
	t[o].offset.length = 0;
	let l = !t[o].interpolate;
	const p = s.length;
	for (let d = 0; d < p; d++) {
		const m = An(s[d], f[a], u[a], i[o]);
		!l && m !== t[o].interpolatorOffsets[d] && (l = !0), (t[o].offset[d] = m);
	}
	l && ((t[o].interpolate = Pe(t[o].offset, We(s))), (t[o].interpolatorOffsets = [...t[o].offset])),
		(t[o].progress = t[o].interpolate(t[o].current));
}
function Mn(e, t = e, n) {
	if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
		let s = t;
		for (; s && s !== e; )
			(n.x.targetOffset += s.offsetLeft), (n.y.targetOffset += s.offsetTop), (s = s.offsetParent);
	}
	(n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
		(n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
		(n.x.containerLength = e.clientWidth),
		(n.y.containerLength = e.clientHeight);
}
function Vn(e, t, n, s = {}) {
	return {
		measure: () => Mn(e, s.target, n),
		update: (r) => {
			En(e, n, r), (s.offset || s.target) && bn(e, n, s);
		},
		notify: () => t(n),
	};
}
const R = new WeakMap(),
	Ae = new WeakMap(),
	K = new WeakMap(),
	Ce = (e) => (e === document.documentElement ? window : e);
function Ne(e, { container: t = document.documentElement, ...n } = {}) {
	let s = K.get(t);
	s || ((s = new Set()), K.set(t, s));
	const r = yn(),
		o = Vn(t, e, r, n);
	if ((s.add(o), !R.has(t))) {
		const i = () => {
				for (const d of s) d.measure();
			},
			u = () => {
				for (const d of s) d.update(J.timestamp);
			},
			f = () => {
				for (const d of s) d.notify();
			},
			l = () => {
				x.read(i, !1, !0), x.update(u, !1, !0), x.update(f, !1, !0);
			};
		R.set(t, l);
		const p = Ce(t);
		window.addEventListener('resize', l, { passive: !0 }),
			t !== document.documentElement && Ae.set(t, hn(t, l)),
			p.addEventListener('scroll', l, { passive: !0 });
	}
	const a = R.get(t);
	return (
		x.read(a, !1, !0),
		() => {
			var i;
			B(a);
			const u = K.get(t);
			if (!u || (u.delete(o), u.size)) return;
			const f = R.get(t);
			R.delete(t),
				f &&
					(Ce(t).removeEventListener('scroll', f),
					(i = Ae.get(t)) === null || i === void 0 || i(),
					window.removeEventListener('resize', f));
		}
	);
}
function Ie(e, t) {
	mt(!!(!t || t.current));
}
const Tn = () => ({ scrollX: D(0), scrollY: D(0), scrollXProgress: D(0), scrollYProgress: D(0) });
function Ue({ container: e, target: t, layoutEffect: n = !0, ...s } = {}) {
	const r = y(Tn);
	return (
		(n ? N : c.useEffect)(
			() => (
				Ie('target', t),
				Ie('container', e),
				Ne(
					({ x: a, y: i }) => {
						r.scrollX.set(a.current),
							r.scrollXProgress.set(a.progress),
							r.scrollY.set(i.current),
							r.scrollYProgress.set(i.progress);
					},
					{ ...s, container: e?.current || void 0, target: t?.current || void 0 }
				)
			),
			[e, t, JSON.stringify(s.offset)]
		),
		r
	);
}
function As(e) {
	return Ue({ container: e });
}
function Cs() {
	return Ue();
}
function Ln(e) {
	const t = c.useRef(0),
		{ isStatic: n } = c.useContext(O);
	c.useEffect(() => {
		if (n) return;
		const s = ({ timestamp: r, delta: o }) => {
			t.current || (t.current = r), e(r - t.current, o);
		};
		return x.update(s, !0), () => B(s);
	}, [e]);
}
function Is() {
	const e = T(0);
	return Ln((t) => e.set(t)), e;
}
class On extends pt {
	constructor() {
		super(...arguments), (this.members = []), (this.transforms = new Set());
	}
	add(t) {
		let n;
		$.has(t)
			? (this.transforms.add(t), (n = 'transform'))
			: !t.startsWith('origin') && !ht(t) && t !== 'willChange' && (n = pe(t)),
			n && (gt(this.members, n), this.update());
	}
	remove(t) {
		$.has(t)
			? (this.transforms.delete(t), this.transforms.size || q(this.members, 'transform'))
			: q(this.members, pe(t)),
			this.update();
	}
	update() {
		this.set(this.members.length ? this.members.join(', ') : 'auto');
	}
}
function bs() {
	return y(() => new On('auto'));
}
function zn() {
	!yt.current && vt();
	const [e] = c.useState(Et.current);
	return e;
}
function Ms() {
	const e = zn(),
		{ reducedMotion: t } = c.useContext(O);
	return t === 'never' ? !1 : t === 'always' ? !0 : e;
}
function Pn(e) {
	e.values.forEach((t) => t.stop());
}
function Rn() {
	const e = new Set(),
		t = {
			subscribe(n) {
				return e.add(n), () => void e.delete(n);
			},
			start(n, s) {
				const r = [];
				return (
					e.forEach((o) => {
						r.push(Be(o, n, { transitionOverride: s }));
					}),
					Promise.all(r)
				);
			},
			set(n) {
				return e.forEach((s) => {
					St(s, n);
				});
			},
			stop() {
				e.forEach((n) => {
					Pn(n);
				});
			},
			mount() {
				return () => {
					t.stop();
				};
			},
		};
	return t;
}
function je(e, t) {
	let n;
	const s = () => {
		const { currentTime: r } = t,
			a = (r === null ? 0 : r.value) / 100;
		n !== a && e(a), (n = a);
	};
	return x.update(s, !0), () => B(s);
}
const Xe = xt(() => window.ScrollTimeline !== void 0);
class Ye {
	constructor(t) {
		this.animations = t.filter(Boolean);
	}
	then(t, n) {
		return Promise.all(this.animations).then(t).catch(n);
	}
	getAll(t) {
		return this.animations[0][t];
	}
	setAll(t, n) {
		for (let s = 0; s < this.animations.length; s++) this.animations[s][t] = n;
	}
	attachTimeline(t) {
		const n = this.animations.map((s) => {
			if (Xe() && s.attachTimeline) s.attachTimeline(t);
			else
				return (
					s.pause(),
					je((r) => {
						s.time = s.duration * r;
					}, t)
				);
		});
		return () => {
			n.forEach((s, r) => {
				s && s(), this.animations[r].stop();
			});
		};
	}
	get time() {
		return this.getAll('time');
	}
	set time(t) {
		this.setAll('time', t);
	}
	get speed() {
		return this.getAll('speed');
	}
	set speed(t) {
		this.setAll('speed', t);
	}
	get duration() {
		let t = 0;
		for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
		return t;
	}
	runAll(t) {
		this.animations.forEach((n) => n[t]());
	}
	play() {
		this.runAll('play');
	}
	pause() {
		this.runAll('pause');
	}
	stop() {
		this.runAll('stop');
	}
	cancel() {
		this.runAll('cancel');
	}
	complete() {
		this.runAll('complete');
	}
}
function Dn(e) {
	return typeof e == 'object' && !Array.isArray(e);
}
function Wn(e) {
	const t = {
			presenceContext: null,
			props: {},
			visualState: {
				renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} },
				latestValues: {},
			},
		},
		n = wt(e)
			? new At(t, { enableHardwareAcceleration: !1 })
			: new Ct(t, { enableHardwareAcceleration: !0 });
	n.mount(e), Q.set(e, n);
}
function Bn(e, t = 100) {
	const n = It({ keyframes: [0, t], ...e }),
		s = Math.min(bt(n), Mt);
	return { type: 'keyframes', ease: (r) => n.next(s * r).value / t, duration: Re(s) };
}
function be(e, t, n, s) {
	var r;
	return typeof t == 'number'
		? t
		: t.startsWith('-') || t.startsWith('+')
		? Math.max(0, e + parseFloat(t))
		: t === '<'
		? n
		: (r = s.get(t)) !== null && r !== void 0
		? r
		: e;
}
const Ke = (e, t, n) => {
	const s = t - e;
	return ((((n - e) % s) + s) % s) + e;
};
function Fn(e, t) {
	return Vt(e) ? e[Ke(0, e.length, t)] : e;
}
function Hn(e, t, n) {
	for (let s = 0; s < e.length; s++) {
		const r = e[s];
		r.at > t && r.at < n && (q(e, r), s--);
	}
}
function kn(e, t, n, s, r, o) {
	Hn(e, r, o);
	for (let a = 0; a < t.length; a++) e.push({ value: t[a], at: Oe(r, o, s[a]), easing: Fn(n, a) });
}
function Gn(e, t) {
	return e.at === t.at ? (e.value === null ? 1 : t.value === null ? -1 : 0) : e.at - t.at;
}
const Nn = 'easeInOut';
function Un(e, { defaultTransition: t = {}, ...n } = {}, s) {
	const r = t.duration || 0.3,
		o = new Map(),
		a = new Map(),
		i = {},
		u = new Map();
	let f = 0,
		l = 0,
		p = 0;
	for (let d = 0; d < e.length; d++) {
		const m = e[d];
		if (typeof m == 'string') {
			u.set(m, l);
			continue;
		} else if (!Array.isArray(m)) {
			u.set(m.name, be(l, m.at, f, u));
			continue;
		}
		let [S, v, h = {}] = m;
		h.at !== void 0 && (l = be(l, h.at, f, u));
		let g = 0;
		const w = (A, C, b, z = 0, P = 0) => {
			const E = jn(A),
				{ delay: j = 0, times: L = We(E), type: qe = 'keyframes', ...Qe } = C;
			let { ease: se = t.ease || 'easeOut', duration: I } = C;
			const re = typeof j == 'function' ? j(z, P) : j,
				oe = E.length;
			if (oe <= 2 && qe === 'spring') {
				let ce = 100;
				if (oe === 2 && Kn(E)) {
					const Ze = E[1] - E[0];
					ce = Math.abs(Ze);
				}
				const le = { ...Qe };
				I !== void 0 && (le.duration = Lt(I));
				const fe = Bn(le, ce);
				(se = fe.ease), (I = fe.duration);
			}
			I ?? (I = r);
			const ae = l + re,
				ie = ae + I;
			L.length === 1 && L[0] === 0 && (L[1] = 1);
			const ue = L.length - E.length;
			ue > 0 && Tt(L, ue),
				E.length === 1 && E.unshift(null),
				kn(b, E, se, L, ae, ie),
				(g = Math.max(re + I, g)),
				(p = Math.max(ie, p));
		};
		if (V(S)) {
			const A = Me(S, a);
			w(v, h, Ve('default', A));
		} else {
			const A = U(S, s, i),
				C = A.length;
			for (let b = 0; b < C; b++) {
				(v = v), (h = h);
				const z = A[b],
					P = Me(z, a);
				for (const E in v) w(v[E], Xn(h, E), Ve(E, P), b, C);
			}
			(f = l), (l += g);
		}
	}
	return (
		a.forEach((d, m) => {
			for (const S in d) {
				const v = d[S];
				v.sort(Gn);
				const h = [],
					g = [],
					w = [];
				for (let C = 0; C < v.length; C++) {
					const { at: b, value: z, easing: P } = v[C];
					h.push(z), g.push(De(0, p, b)), w.push(P || 'easeOut');
				}
				g[0] !== 0 && (g.unshift(0), h.unshift(h[0]), w.unshift(Nn)),
					g[g.length - 1] !== 1 && (g.push(1), h.push(null)),
					o.has(m) || o.set(m, { keyframes: {}, transition: {} });
				const A = o.get(m);
				(A.keyframes[S] = h), (A.transition[S] = { ...t, duration: p, ease: w, times: g, ...n });
			}
		}),
		o
	);
}
function Me(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function Ve(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function jn(e) {
	return Array.isArray(e) ? e : [e];
}
function Xn(e, t) {
	return e[t] ? { ...e, ...e[t] } : { ...e };
}
const Yn = (e) => typeof e == 'number',
	Kn = (e) => e.every(Yn);
function _e(e, t, n, s) {
	const r = U(e, s),
		o = r.length,
		a = [];
	for (let i = 0; i < o; i++) {
		const u = r[i];
		Q.has(u) || Wn(u);
		const f = Q.get(u),
			l = { ...n };
		typeof l.delay == 'function' && (l.delay = l.delay(i, o)),
			a.push(...Ot(f, { ...t, transition: l }, {}));
	}
	return new Ye(a);
}
const _n = (e) => Array.isArray(e) && Array.isArray(e[0]);
function Jn(e, t, n) {
	const s = [];
	return (
		Un(e, t, n).forEach(({ keyframes: o, transition: a }, i) => {
			let u;
			V(i) ? (u = Fe(i, o.default, a.default)) : (u = _e(i, o, a)), s.push(u);
		}),
		new Ye(s)
	);
}
const Je = (e) => {
		function t(n, s, r) {
			let o;
			return (
				_n(n) ? (o = Jn(n, s, e)) : Dn(s) ? (o = _e(n, s, r, e)) : (o = Fe(n, s, r)),
				e && e.animations.push(o),
				o
			);
		}
		return t;
	},
	Vs = Je();
function Ts() {
	const e = y(() => ({ current: null, animations: [] })),
		t = y(() => Je(e));
	return (
		zt(() => {
			e.animations.forEach((n) => n.stop());
		}),
		[e, t]
	);
}
function $n() {
	const e = y(Rn);
	return N(e.mount, []), e;
}
const Ls = $n;
function Os(...e) {
	const t = c.useRef(0),
		[n, s] = c.useState(e[t.current]),
		r = c.useCallback(
			(o) => {
				(t.current = typeof o != 'number' ? Ke(0, e.length, t.current + 1) : o), s(e[t.current]);
			},
			[e.length, ...e]
		);
	return [n, r];
}
const qn = { some: 0, all: 1 };
function Qn(e, t, { root: n, margin: s, amount: r = 'some' } = {}) {
	const o = U(e),
		a = new WeakMap(),
		i = (f) => {
			f.forEach((l) => {
				const p = a.get(l.target);
				if (l.isIntersecting !== !!p)
					if (l.isIntersecting) {
						const d = t(l);
						typeof d == 'function' ? a.set(l.target, d) : u.unobserve(l.target);
					} else p && (p(l), a.delete(l.target));
			});
		},
		u = new IntersectionObserver(i, {
			root: n,
			rootMargin: s,
			threshold: typeof r == 'number' ? r : qn[r],
		});
	return o.forEach((f) => u.observe(f)), () => u.disconnect();
}
function zs(e, { root: t, margin: n, amount: s, once: r = !1 } = {}) {
	const [o, a] = c.useState(!1);
	return (
		c.useEffect(() => {
			if (!e.current || (r && o)) return;
			const i = () => (a(!0), r ? void 0 : () => a(!1)),
				u = { root: (t && t.current) || void 0, margin: n, amount: s };
			return Qn(e.current, i, u);
		}, [t, e, n, r]),
		o
	);
}
class Zn {
	constructor() {
		this.componentControls = new Set();
	}
	subscribe(t) {
		return this.componentControls.add(t), () => this.componentControls.delete(t);
	}
	start(t, n) {
		this.componentControls.forEach((s) => {
			s.start(t.nativeEvent || t, n);
		});
	}
}
const es = () => new Zn();
function Ps() {
	return y(es);
}
function Rs(e, t, n, s) {
	c.useEffect(() => {
		const r = e.current;
		if (n && r) return Pt(r, t, n, s);
	}, [e, t, n, s]);
}
function ts(e) {
	return e !== null && typeof e == 'object' && He in e;
}
function Ds(e) {
	if (ts(e)) return e[He];
}
function ns() {
	return ss;
}
function ss(e) {
	F.current && ((F.current.isUpdating = !1), F.current.blockUpdate(), e && e());
}
function Ws() {
	const [e, t] = Le(),
		n = ns(),
		s = c.useRef();
	return (
		c.useEffect(() => {
			x.postRender(() =>
				x.postRender(() => {
					t === s.current && (he.current = !1);
				})
			);
		}, [t]),
		(r) => {
			n(() => {
				(he.current = !0), e(), r(), (s.current = t + 1);
			});
		}
	);
}
function Bs() {
	return c.useCallback(() => {
		const t = F.current;
		t && t.resetTree();
	}, []);
}
const $e = (e, t) => `${e}: ${t}`,
	G = new Map();
function rs(e, t, n, s) {
	const r = $e(e, $.has(t) ? 'transform' : t),
		o = G.get(r);
	if (!o) return 0;
	const { animation: a, startTime: i } = o,
		u = () => {
			G.delete(r);
			try {
				a.cancel();
			} catch {}
		};
	return i !== null ? (s.render(u), performance.now() - i || 0) : (u(), 0);
}
function Fs(e, t, n, s, r) {
	const o = e.dataset[Rt];
	if (!o) return;
	window.HandoffAppearAnimations = rs;
	const a = $e(o, t),
		i = ge(e, t, [n[0], n[0]], { duration: 1e4, ease: 'linear' });
	G.set(a, { animation: i, startTime: null });
	const u = () => {
		i.cancel();
		const f = ge(e, t, n, s);
		document.timeline && (f.startTime = document.timeline.currentTime),
			G.set(a, { animation: f, startTime: performance.now() }),
			r && r(f);
	};
	i.ready ? i.ready.then(u).catch(Dt) : u();
}
const te = () => ({});
class os extends Bt {
	build() {}
	measureInstanceViewportBox() {
		return Ft();
	}
	resetTransform() {}
	restoreTransform() {}
	removeValueFromRenderState() {}
	renderInstance() {}
	scrapeMotionValuesFromProps() {
		return te();
	}
	getBaseTargetFromProps() {}
	readValueFromInstance(t, n, s) {
		return s.initialState[n] || 0;
	}
	sortInstanceNodePosition() {
		return 0;
	}
	makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...s }) {
		const r = Ht(s, t || {}, this);
		return kt(this, s, r), { transition: t, transitionEnd: n, ...s };
	}
}
const as = Wt({ scrapeMotionValuesFromProps: te, createRenderState: te });
function Hs(e) {
	const [t, n] = c.useState(e),
		s = as({}, !1),
		r = y(() => new os({ props: {}, visualState: s, presenceContext: null }, { initialState: e }));
	c.useEffect(() => (r.mount({}), () => r.unmount()), [r]),
		c.useEffect(() => {
			r.update(
				{
					onUpdate: (a) => {
						n({ ...a });
					},
				},
				null
			);
		}, [n, r]);
	const o = y(() => (a) => Be(r, a));
	return [t, o];
}
const is = 1e5,
	Te = (e) => (e > 0.001 ? 1 / e : is);
function ks(e) {
	let t = T(1),
		n = T(1);
	const { visualElement: s } = c.useContext(Gt);
	e
		? ((t = e.scaleX || t), (n = e.scaleY || n))
		: s && ((t = s.getValue('scaleX', 1)), (n = s.getValue('scaleY', 1)));
	const r = Z(t, Te),
		o = Z(n, Te);
	return { scaleX: r, scaleY: o };
}
let us = 0;
const Gs = ({ children: e }) => (
	c.useEffect(() => {}, []), c.createElement(Kt, { id: y(() => `asl-${us++}`) }, e)
);
function cs({ source: e, axis: t = 'y' }) {
	const n = { value: 0 },
		s = Ne(
			(r) => {
				n.value = r[t].progress * 100;
			},
			{ container: e, axis: t }
		);
	return { currentTime: n, cancel: s };
}
const _ = new Map();
function ls({ source: e = document.documentElement, axis: t = 'y' } = {}) {
	_.has(e) || _.set(e, {});
	const n = _.get(e);
	return (
		n[t] || (n[t] = Xe() ? new ScrollTimeline({ source: e, axis: t }) : cs({ source: e, axis: t })),
		n[t]
	);
}
function Ns(e, t) {
	const n = ls(t);
	return typeof e == 'function' ? je(e, n) : e.attachTimeline(n);
}
function fs(e, t) {
	if (e === 'first') return 0;
	{
		const n = t - 1;
		return e === 'last' ? n : n / 2;
	}
}
function Us(e = 0.1, { startDelay: t = 0, from: n = 0, ease: s } = {}) {
	return (r, o) => {
		const a = typeof n == 'number' ? n : fs(n, o),
			i = Math.abs(a - r);
		let u = e * i;
		if (s) {
			const f = o * e;
			u = Nt(s)(u / f) * f;
		}
		return t + u;
	};
}
const js = x,
	Xs = Ut.reduce((e, t) => ((e[t] = (n) => B(n)), e), {});
export {
	_s as AnimatePresence,
	Gs as AnimateSharedLayout,
	jt as DeprecatedLayoutGroupContext,
	Zn as DragControls,
	Js as FlatTree,
	Kt as LayoutGroup,
	me as LayoutGroupContext,
	ys as LazyMotion,
	gs as MotionConfig,
	O as MotionConfigContext,
	Gt as MotionContext,
	pt as MotionValue,
	$s as PresenceContext,
	vs as Reorder,
	qs as SwitchLayoutGroupContext,
	Bt as VisualElement,
	Qs as addPointerEvent,
	Zs as addPointerInfo,
	er as addScaleCorrector,
	Vs as animate,
	lt as animateValue,
	Be as animateVisualElement,
	Rn as animationControls,
	at as animations,
	tr as anticipate,
	nr as backIn,
	sr as backInOut,
	rr as backOut,
	or as buildTransform,
	ar as calcLength,
	B as cancelFrame,
	Xs as cancelSync,
	kt as checkTargetForNewValues,
	ir as circIn,
	ur as circInOut,
	cr as circOut,
	lr as clamp,
	fr as color,
	dr as complex,
	Ft as createBox,
	mr as createDomMotionComponent,
	pr as createMotionComponent,
	Je as createScopedAnimate,
	hr as cubicBezier,
	gr as delay,
	yr as distance,
	vr as distance2D,
	on as domAnimation,
	Es as domMax,
	Er as easeIn,
	Sr as easeInOut,
	xr as easeOut,
	wr as filterProps,
	x as frame,
	J as frameData,
	Qn as inView,
	Pe as interpolate,
	ft as invariant,
	Ar as isBrowser,
	Cr as isDragActive,
	ts as isMotionComponent,
	V as isMotionValue,
	Ir as isValidMotionProp,
	hs as m,
	Wt as makeUseVisualState,
	br as mirrorEasing,
	Oe as mix,
	ze as motion,
	D as motionValue,
	Mr as optimizedAppearDataAttribute,
	Vr as pipe,
	De as progress,
	Tr as px,
	Lr as resolveMotionValue,
	Or as reverseEasing,
	Ns as scroll,
	Ne as scrollInfo,
	It as spring,
	Us as stagger,
	Fs as startOptimizedAppearAnimation,
	zr as steps,
	js as sync,
	tn as transform,
	Ds as unwrapMotionComponent,
	Ts as useAnimate,
	Ls as useAnimation,
	$n as useAnimationControls,
	Ln as useAnimationFrame,
	Os as useCycle,
	Hs as useDeprecatedAnimatedState,
	ks as useDeprecatedInvertedScale,
	Rs as useDomEvent,
	Ps as useDragControls,
	As as useElementScroll,
	Le as useForceUpdate,
	zs as useInView,
	ns as useInstantLayoutTransition,
	Ws as useInstantTransition,
	Pr as useIsPresent,
	N as useIsomorphicLayoutEffect,
	Ss as useMotionTemplate,
	T as useMotionValue,
	an as useMotionValueEvent,
	Rr as usePresence,
	zn as useReducedMotion,
	Ms as useReducedMotionConfig,
	Bs as useResetProjection,
	Ue as useScroll,
	xs as useSpring,
	Is as useTime,
	Z as useTransform,
	zt as useUnmountEffect,
	ws as useVelocity,
	Cs as useViewportScroll,
	bs as useWillChange,
	Q as visualElementStore,
	mt as warning,
	Ke as wrap,
};
