import {
	c as st,
	a as rt,
	l as ot,
	M as z,
	u as E,
	b as ge,
	L as at,
	d as ye,
	e as Pe,
	m as Re,
	f as it,
	g as De,
	h as W,
	i as We,
	j,
	k as H,
	n as w,
	o as K,
	p as M,
	q as ut,
	r as ct,
	s as lt,
	t as ft,
	v as dt,
	w as mt,
	x as Q,
	y as Fe,
	z as pt,
	A as He,
	B as ht,
	C as Be,
	D as gt,
	E as yt,
	F as Z,
	G as vt,
	H as ve,
	I as Et,
	J as ee,
	K as St,
	N as wt,
	O as xt,
	P as ke,
	Q as At,
	R as Ct,
	S as It,
	T as bt,
	U as Mt,
	V as te,
	W as Tt,
	X as Vt,
	Y as Lt,
	Z as Ot,
	_ as zt,
	$ as Pt,
	a0 as Ge,
	a1 as Rt,
	a2 as Dt,
	a3 as Wt,
	a4 as Ne,
	a5 as k,
	a6 as ne,
	a7 as Ft,
	a8 as Ee,
	a9 as Ht,
	aa as Bt,
	ab as kt,
	ac as Gt,
	ad as Nt,
	ae as Ut,
	af as jt,
	ag as Xt,
	ah as Yt,
} from './index.ffe82eb6.js';
import {
	aj as Qs,
	ax as Zs,
	av as er,
	aw as tr,
	aU as nr,
	aV as sr,
	ap as rr,
	aA as or,
	aB as ar,
	aC as ir,
	aD as ur,
	aq as cr,
	aR as lr,
	aE as fr,
	aF as dr,
	aG as mr,
	ay as pr,
	ar as hr,
	as as gr,
	ai as yr,
	ao as vr,
	aK as Er,
	aN as Sr,
	aO as wr,
	aP as xr,
	aH as Ar,
	aI as Cr,
	aJ as Ir,
	aS as br,
	aW as Mr,
	aT as Tr,
	al as Vr,
	aL as Lr,
	au as Or,
	az as zr,
	at as Pr,
	ak as Rr,
	aM as Dr,
	aQ as Wr,
	am as Fr,
	an as Hr,
} from './index.ffe82eb6.js';
import { r as c } from './index.9eb79d8f.js';
import './_commonjsHelpers.725317a4.js';
const vs = st(rt);
function Es({ children: e, isValidProp: t, ...n }) {
	t && ot(t), (n = { ...c.useContext(z), ...n }), (n.isStatic = E(() => n.isStatic));
	const s = c.useMemo(
		() => n,
		[JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
	);
	return c.createElement(z.Provider, { value: s }, e);
}
function Ss({ children: e, features: t, strict: n = !1 }) {
	const [, s] = c.useState(!_(t)),
		r = c.useRef(void 0);
	if (!_(t)) {
		const { renderer: o, ...a } = t;
		(r.current = o), ge(a);
	}
	return (
		c.useEffect(() => {
			_(t) &&
				t().then(({ renderer: o, ...a }) => {
					ge(a), (r.current = o), s(!0);
				});
		}, []),
		c.createElement(at.Provider, { value: { renderer: r.current, strict: n } }, e)
	);
}
function _(e) {
	return typeof e == 'function';
}
const Kt = c.createContext(null),
	_t = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function Se() {
	const e = new Set(),
		t = new WeakMap(),
		n = () => e.forEach(_t);
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
const Ue = (e) => e === !0,
	Jt = (e) => Ue(e === !0) || e === 'id',
	$t = ({ children: e, id: t, inherit: n = !0 }) => {
		const s = c.useContext(ye),
			r = c.useContext(Kt),
			[o, a] = Pe(),
			u = c.useRef(null),
			i = s.id || r;
		u.current === null &&
			(Jt(n) && i && (t = t ? i + '-' + t : i),
			(u.current = { id: t, group: (Ue(n) && s.group) || Se() }));
		const f = c.useMemo(() => ({ ...u.current, forceRender: o }), [a]);
		return c.createElement(ye.Provider, { value: f }, e);
	},
	je = c.createContext(null);
function qt(e, t, n, s) {
	if (!s) return e;
	const r = e.findIndex((l) => l.value === t);
	if (r === -1) return e;
	const o = s > 0 ? 1 : -1,
		a = e[r + o];
	if (!a) return e;
	const u = e[r],
		i = a.layout,
		f = Re(i.min, i.max, 0.5);
	return (o === 1 && u.layout.max + n > f) || (o === -1 && u.layout.min + n < f)
		? it(e, r, r + o)
		: e;
}
function Qt({ children: e, as: t = 'ul', axis: n = 'y', onReorder: s, values: r, ...o }, a) {
	const u = E(() => De(t)),
		i = [],
		f = c.useRef(!1),
		l = {
			axis: n,
			registerItem: (p, d) => {
				const m = i.findIndex((y) => p === y.value);
				m !== -1 ? (i[m].layout = d[n]) : i.push({ value: p, layout: d[n] }), i.sort(tn);
			},
			updateOrder: (p, d, m) => {
				if (f.current) return;
				const y = qt(i, p, d, m);
				i !== y && ((f.current = !0), s(y.map(en).filter((h) => r.indexOf(h) !== -1)));
			},
		};
	return (
		c.useEffect(() => {
			f.current = !1;
		}),
		c.createElement(
			u,
			{ ...o, ref: a, ignoreStrict: !0 },
			c.createElement(je.Provider, { value: l }, e)
		)
	);
}
const Zt = c.forwardRef(Qt);
function en(e) {
	return e.value;
}
function tn(e, t) {
	return e.layout.min - t.layout.min;
}
function T(e) {
	const t = E(() => W(e)),
		{ isStatic: n } = c.useContext(z);
	if (n) {
		const [, s] = c.useState(e);
		c.useEffect(() => t.on('change', s), []);
	}
	return t;
}
const nn = (e) => typeof e == 'object' && e.mix,
	sn = (e) => (nn(e) ? e.mix : void 0);
function rn(...e) {
	const t = !Array.isArray(e[0]),
		n = t ? 0 : -1,
		s = e[0 + n],
		r = e[1 + n],
		o = e[2 + n],
		a = e[3 + n],
		u = We(r, o, { mixer: sn(o[0]), ...a });
	return t ? u(s) : u;
}
function ae(e, t) {
	const n = T(t()),
		s = () => n.set(t());
	return (
		s(),
		j(() => {
			const r = () => w.update(s, !1, !0),
				o = e.map((a) => a.on('change', r));
			return () => {
				o.forEach((a) => a()), H(s);
			};
		}),
		n
	);
}
function on(e) {
	(K.current = []), e();
	const t = ae(K.current, e);
	return (K.current = void 0), t;
}
function se(e, t, n, s) {
	if (typeof e == 'function') return on(e);
	const r = typeof t == 'function' ? t : rn(t, n, s);
	return Array.isArray(e) ? we(e, r) : we([e], ([o]) => r(o));
}
function we(e, t) {
	const n = E(() => []);
	return ae(e, () => {
		n.length = 0;
		const s = e.length;
		for (let r = 0; r < s; r++) n[r] = e[r].get();
		return t(n);
	});
}
function xe(e, t = 0) {
	return M(e) ? e : T(t);
}
function an(
	{ children: e, style: t = {}, value: n, as: s = 'li', onDrag: r, layout: o = !0, ...a },
	u
) {
	const i = E(() => De(s)),
		f = c.useContext(je),
		l = { x: xe(t.x), y: xe(t.y) },
		p = se([l.x, l.y], ([h, g]) => (h || g ? 1 : 'unset')),
		{ axis: d, registerItem: m, updateOrder: y } = f;
	return c.createElement(
		i,
		{
			drag: d,
			...a,
			dragSnapToOrigin: !0,
			style: { ...t, x: l.x, y: l.y, zIndex: p },
			layout: o,
			onDrag: (h, g) => {
				const { velocity: v } = g;
				v[d] && y(n, l[d].get(), v[d]), r && r(h, g);
			},
			onLayoutMeasure: (h) => m(n, h),
			ref: u,
			ignoreStrict: !0,
		},
		e
	);
}
const un = c.forwardRef(an),
	ws = { Group: Zt, Item: un },
	cn = { renderer: ut, ...ct, ...lt },
	xs = { ...cn, ...ft, ...dt };
function As(e, ...t) {
	const n = e.length;
	function s() {
		let r = '';
		for (let o = 0; o < n; o++) {
			r += e[o];
			const a = t[o];
			a && (r += M(a) ? a.get() : a);
		}
		return r;
	}
	return ae(t.filter(M), s);
}
function Cs(e, t = {}) {
	const { isStatic: n } = c.useContext(z),
		s = c.useRef(null),
		r = T(M(e) ? e.get() : e),
		o = () => {
			s.current && s.current.stop();
		};
	return (
		c.useInsertionEffect(
			() =>
				r.attach((a, u) => {
					if (n) return u(a);
					if (
						(o(),
						(s.current = mt({
							keyframes: [r.get(), a],
							velocity: r.getVelocity(),
							type: 'spring',
							restDelta: 0.001,
							restSpeed: 0.01,
							...t,
							onUpdate: u,
						})),
						!Q.isProcessing)
					) {
						const i = performance.now() - Q.timestamp;
						i < 30 && (s.current.time = Fe(i));
					}
					return r.get();
				}, o),
			[JSON.stringify(t)]
		),
		j(() => {
			if (M(e)) return e.on('change', (a) => r.set(parseFloat(a)));
		}, [r]),
		r
	);
}
function ln(e, t, n) {
	c.useInsertionEffect(() => e.on(t, n), [e, t, n]);
}
function Is(e) {
	const t = T(e.getVelocity());
	return (
		ln(e, 'velocityChange', (n) => {
			t.set(n);
		}),
		t
	);
}
function X(e, t, n) {
	var s;
	if (typeof e == 'string') {
		let r = document;
		t && (pt(!!t.current), (r = t.current)),
			n
				? (((s = n[e]) !== null && s !== void 0) || (n[e] = r.querySelectorAll(e)), (e = n[e]))
				: (e = r.querySelectorAll(e));
	} else e instanceof Element && (e = [e]);
	return Array.from(e || []);
}
const G = new WeakMap();
let b;
function fn(e, t) {
	if (t) {
		const { inlineSize: n, blockSize: s } = t[0];
		return { width: n, height: s };
	} else
		return e instanceof SVGElement && 'getBBox' in e
			? e.getBBox()
			: { width: e.offsetWidth, height: e.offsetHeight };
}
function dn({ target: e, contentRect: t, borderBoxSize: n }) {
	var s;
	(s = G.get(e)) === null ||
		s === void 0 ||
		s.forEach((r) => {
			r({
				target: e,
				contentSize: t,
				get size() {
					return fn(e, n);
				},
			});
		});
}
function mn(e) {
	e.forEach(dn);
}
function pn() {
	typeof ResizeObserver > 'u' || (b = new ResizeObserver(mn));
}
function hn(e, t) {
	b || pn();
	const n = X(e);
	return (
		n.forEach((s) => {
			let r = G.get(s);
			r || ((r = new Set()), G.set(s, r)), r.add(t), b?.observe(s);
		}),
		() => {
			n.forEach((s) => {
				const r = G.get(s);
				r?.delete(t), r?.size || b?.unobserve(s);
			});
		}
	);
}
const N = new Set();
let F;
function gn() {
	(F = () => {
		const e = { width: window.innerWidth, height: window.innerHeight },
			t = { target: window, size: e, contentSize: e };
		N.forEach((n) => n(t));
	}),
		window.addEventListener('resize', F);
}
function yn(e) {
	return (
		N.add(e),
		F || gn(),
		() => {
			N.delete(e), !N.size && F && (F = void 0);
		}
	);
}
function vn(e, t) {
	return typeof e == 'function' ? yn(e) : hn(e, t);
}
const En = 50,
	Ae = () => ({
		current: 0,
		offset: [],
		progress: 0,
		scrollLength: 0,
		targetOffset: 0,
		targetLength: 0,
		containerLength: 0,
		velocity: 0,
	}),
	Sn = () => ({ time: 0, x: Ae(), y: Ae() }),
	wn = { x: { length: 'Width', position: 'Left' }, y: { length: 'Height', position: 'Top' } };
function Ce(e, t, n, s) {
	const r = n[t],
		{ length: o, position: a } = wn[t],
		u = r.current,
		i = n.time;
	(r.current = e['scroll' + a]),
		(r.scrollLength = e['scroll' + o] - e['client' + o]),
		(r.offset.length = 0),
		(r.offset[0] = 0),
		(r.offset[1] = r.scrollLength),
		(r.progress = He(0, r.scrollLength, r.current));
	const f = s - i;
	r.velocity = f > En ? 0 : ht(r.current - u, f);
}
function xn(e, t, n) {
	Ce(e, 'x', t, n), Ce(e, 'y', t, n), (t.time = n);
}
function An(e, t) {
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
				u = s.parentNode;
			for (; !a; ) u.tagName === 'svg' && (a = u), (u = s.parentNode);
			s = a;
		} else break;
	return n;
}
const Cn = {
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
	re = { start: 0, center: 0.5, end: 1 };
function Ie(e, t, n = 0) {
	let s = 0;
	if ((re[e] !== void 0 && (e = re[e]), typeof e == 'string')) {
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
const In = [0, 0];
function bn(e, t, n, s) {
	let r = Array.isArray(e) ? e : In,
		o = 0,
		a = 0;
	return (
		typeof e == 'number'
			? (r = [e, e])
			: typeof e == 'string' &&
			  ((e = e.trim()), e.includes(' ') ? (r = e.split(' ')) : (r = [e, re[e] ? e : '0'])),
		(o = Ie(r[0], n, s)),
		(a = Ie(r[1], t)),
		o - a
	);
}
const Mn = { x: 0, y: 0 };
function Tn(e) {
	return 'getBBox' in e && e.tagName !== 'svg'
		? e.getBBox()
		: { width: e.clientWidth, height: e.clientHeight };
}
function Vn(e, t, n) {
	let { offset: s = Cn.All } = n;
	const { target: r = e, axis: o = 'y' } = n,
		a = o === 'y' ? 'height' : 'width',
		u = r !== e ? An(r, e) : Mn,
		i = r === e ? { width: e.scrollWidth, height: e.scrollHeight } : Tn(r),
		f = { width: e.clientWidth, height: e.clientHeight };
	t[o].offset.length = 0;
	let l = !t[o].interpolate;
	const p = s.length;
	for (let d = 0; d < p; d++) {
		const m = bn(s[d], f[a], i[a], u[o]);
		!l && m !== t[o].interpolatorOffsets[d] && (l = !0), (t[o].offset[d] = m);
	}
	l && ((t[o].interpolate = We(t[o].offset, Be(s))), (t[o].interpolatorOffsets = [...t[o].offset])),
		(t[o].progress = t[o].interpolate(t[o].current));
}
function Ln(e, t = e, n) {
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
function On(e, t, n, s = {}) {
	return {
		measure: () => Ln(e, s.target, n),
		update: (r) => {
			xn(e, n, r), (s.offset || s.target) && Vn(e, n, s);
		},
		notify: () => t(n),
	};
}
const D = new WeakMap(),
	be = new WeakMap(),
	J = new WeakMap(),
	Me = (e) => (e === document.documentElement ? window : e);
function Xe(e, { container: t = document.documentElement, ...n } = {}) {
	let s = J.get(t);
	s || ((s = new Set()), J.set(t, s));
	const r = Sn(),
		o = On(t, e, r, n);
	if ((s.add(o), !D.has(t))) {
		const u = () => {
				for (const d of s) d.measure();
			},
			i = () => {
				for (const d of s) d.update(Q.timestamp);
			},
			f = () => {
				for (const d of s) d.notify();
			},
			l = () => {
				w.read(u, !1, !0), w.update(i, !1, !0), w.update(f, !1, !0);
			};
		D.set(t, l);
		const p = Me(t);
		window.addEventListener('resize', l, { passive: !0 }),
			t !== document.documentElement && be.set(t, vn(t, l)),
			p.addEventListener('scroll', l, { passive: !0 });
	}
	const a = D.get(t);
	return (
		w.read(a, !1, !0),
		() => {
			var u;
			H(a);
			const i = J.get(t);
			if (!i || (i.delete(o), i.size)) return;
			const f = D.get(t);
			D.delete(t),
				f &&
					(Me(t).removeEventListener('scroll', f),
					(u = be.get(t)) === null || u === void 0 || u(),
					window.removeEventListener('resize', f));
		}
	);
}
function Te(e, t) {
	gt(!!(!t || t.current));
}
const zn = () => ({ scrollX: W(0), scrollY: W(0), scrollXProgress: W(0), scrollYProgress: W(0) });
function Ye({ container: e, target: t, layoutEffect: n = !0, ...s } = {}) {
	const r = E(zn);
	return (
		(n ? j : c.useEffect)(
			() => (
				Te('target', t),
				Te('container', e),
				Xe(
					({ x: a, y: u }) => {
						r.scrollX.set(a.current),
							r.scrollXProgress.set(a.progress),
							r.scrollY.set(u.current),
							r.scrollYProgress.set(u.progress);
					},
					{ ...s, container: e?.current || void 0, target: t?.current || void 0 }
				)
			),
			[e, t, JSON.stringify(s.offset)]
		),
		r
	);
}
function bs(e) {
	return Ye({ container: e });
}
function Ms() {
	return Ye();
}
function Pn(e) {
	const t = c.useRef(0),
		{ isStatic: n } = c.useContext(z);
	c.useEffect(() => {
		if (n) return;
		const s = ({ timestamp: r, delta: o }) => {
			t.current || (t.current = r), e(r - t.current, o);
		};
		return w.update(s, !0), () => H(s);
	}, [e]);
}
function Ts() {
	const e = T(0);
	return Pn((t) => e.set(t)), e;
}
class Rn extends yt {
	constructor() {
		super(...arguments), (this.members = []), (this.transforms = new Set());
	}
	add(t) {
		let n;
		Z.has(t)
			? (this.transforms.add(t), (n = 'transform'))
			: !t.startsWith('origin') && !vt(t) && t !== 'willChange' && (n = ve(t)),
			n && (Et(this.members, n), this.update());
	}
	remove(t) {
		Z.has(t)
			? (this.transforms.delete(t), this.transforms.size || ee(this.members, 'transform'))
			: ee(this.members, ve(t)),
			this.update();
	}
	update() {
		this.set(this.members.length ? this.members.join(', ') : 'auto');
	}
}
function Vs() {
	return E(() => new Rn('auto'));
}
function Dn() {
	!St.current && wt();
	const [e] = c.useState(xt.current);
	return e;
}
function Ls() {
	const e = Dn(),
		{ reducedMotion: t } = c.useContext(z);
	return t === 'never' ? !1 : t === 'always' ? !0 : e;
}
function Wn(e) {
	e.values.forEach((t) => t.stop());
}
function Fn() {
	const e = new Set(),
		t = {
			subscribe(n) {
				return e.add(n), () => void e.delete(n);
			},
			start(n, s) {
				const r = [];
				return (
					e.forEach((o) => {
						r.push(ke(o, n, { transitionOverride: s }));
					}),
					Promise.all(r)
				);
			},
			set(n) {
				return e.forEach((s) => {
					At(s, n);
				});
			},
			stop() {
				e.forEach((n) => {
					Wn(n);
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
function Ke(e, t) {
	let n;
	const s = () => {
		const { currentTime: r } = t,
			a = (r === null ? 0 : r.value) / 100;
		n !== a && e(a), (n = a);
	};
	return w.update(s, !0), () => H(s);
}
const _e = Ct(() => window.ScrollTimeline !== void 0);
class Je {
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
			if (_e() && s.attachTimeline) s.attachTimeline(t);
			else
				return (
					s.pause(),
					Ke((r) => {
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
function Hn(e) {
	return typeof e == 'object' && !Array.isArray(e);
}
function Bn(e) {
	const t = {
			presenceContext: null,
			props: {},
			visualState: {
				renderState: { transform: {}, transformOrigin: {}, style: {}, vars: {}, attrs: {} },
				latestValues: {},
			},
		},
		n = It(e)
			? new bt(t, { enableHardwareAcceleration: !1 })
			: new Mt(t, { enableHardwareAcceleration: !0 });
	n.mount(e), te.set(e, n);
}
function kn(e, t = 100) {
	const n = Tt({ keyframes: [0, t], ...e }),
		s = Math.min(Vt(n), Lt);
	return { type: 'keyframes', ease: (r) => n.next(s * r).value / t, duration: Fe(s) };
}
function Ve(e, t, n, s) {
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
const $e = (e, t, n) => {
	const s = t - e;
	return ((((n - e) % s) + s) % s) + e;
};
function Gn(e, t) {
	return Ot(e) ? e[$e(0, e.length, t)] : e;
}
function Nn(e, t, n) {
	for (let s = 0; s < e.length; s++) {
		const r = e[s];
		r.at > t && r.at < n && (ee(e, r), s--);
	}
}
function Un(e, t, n, s, r, o) {
	Nn(e, r, o);
	for (let a = 0; a < t.length; a++) e.push({ value: t[a], at: Re(r, o, s[a]), easing: Gn(n, a) });
}
function jn(e, t) {
	return e.at === t.at ? (e.value === null ? 1 : t.value === null ? -1 : 0) : e.at - t.at;
}
const Xn = 'easeInOut';
function Yn(e, { defaultTransition: t = {}, ...n } = {}, s) {
	const r = t.duration || 0.3,
		o = new Map(),
		a = new Map(),
		u = {},
		i = new Map();
	let f = 0,
		l = 0,
		p = 0;
	for (let d = 0; d < e.length; d++) {
		const m = e[d];
		if (typeof m == 'string') {
			i.set(m, l);
			continue;
		} else if (!Array.isArray(m)) {
			i.set(m.name, Ve(l, m.at, f, i));
			continue;
		}
		let [y, h, g = {}] = m;
		g.at !== void 0 && (l = Ve(l, g.at, f, i));
		let v = 0;
		const V = (x, A, I, P = 0, R = 0) => {
			const S = Kn(x),
				{ delay: Y = 0, times: L = Be(S), type: et = 'keyframes', ...tt } = A;
			let { ease: ie = t.ease || 'easeOut', duration: C } = A;
			const ue = typeof Y == 'function' ? Y(P, R) : Y,
				ce = S.length;
			if (ce <= 2 && et === 'spring') {
				let me = 100;
				if (ce === 2 && $n(S)) {
					const nt = S[1] - S[0];
					me = Math.abs(nt);
				}
				const pe = { ...tt };
				C !== void 0 && (pe.duration = Pt(C));
				const he = kn(pe, me);
				(ie = he.ease), (C = he.duration);
			}
			C ?? (C = r);
			const le = l + ue,
				fe = le + C;
			L.length === 1 && L[0] === 0 && (L[1] = 1);
			const de = L.length - S.length;
			de > 0 && zt(L, de),
				S.length === 1 && S.unshift(null),
				Un(I, S, ie, L, le, fe),
				(v = Math.max(ue + C, v)),
				(p = Math.max(fe, p));
		};
		if (M(y)) {
			const x = Le(y, a);
			V(h, g, Oe('default', x));
		} else {
			const x = X(y, s, u),
				A = x.length;
			for (let I = 0; I < A; I++) {
				(h = h), (g = g);
				const P = x[I],
					R = Le(P, a);
				for (const S in h) V(h[S], _n(g, S), Oe(S, R), I, A);
			}
			(f = l), (l += v);
		}
	}
	return (
		a.forEach((d, m) => {
			for (const y in d) {
				const h = d[y];
				h.sort(jn);
				const g = [],
					v = [],
					V = [];
				for (let A = 0; A < h.length; A++) {
					const { at: I, value: P, easing: R } = h[A];
					g.push(P), v.push(He(0, p, I)), V.push(R || 'easeOut');
				}
				v[0] !== 0 && (v.unshift(0), g.unshift(g[0]), V.unshift(Xn)),
					v[v.length - 1] !== 1 && (v.push(1), g.push(null)),
					o.has(m) || o.set(m, { keyframes: {}, transition: {} });
				const x = o.get(m);
				(x.keyframes[y] = g), (x.transition[y] = { ...t, duration: p, ease: V, times: v, ...n });
			}
		}),
		o
	);
}
function Le(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function Oe(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function Kn(e) {
	return Array.isArray(e) ? e : [e];
}
function _n(e, t) {
	return e[t] ? { ...e, ...e[t] } : { ...e };
}
const Jn = (e) => typeof e == 'number',
	$n = (e) => e.every(Jn);
function qe(e, t, n, s) {
	const r = X(e, s),
		o = r.length,
		a = [];
	for (let u = 0; u < o; u++) {
		const i = r[u];
		te.has(i) || Bn(i);
		const f = te.get(i),
			l = { ...n };
		typeof l.delay == 'function' && (l.delay = l.delay(u, o)),
			a.push(...Rt(f, { ...t, transition: l }, {}));
	}
	return new Je(a);
}
const qn = (e) => Array.isArray(e) && Array.isArray(e[0]);
function Qn(e, t, n) {
	const s = [];
	return (
		Yn(e, t, n).forEach(({ keyframes: o, transition: a }, u) => {
			let i;
			M(u) ? (i = Ge(u, o.default, a.default)) : (i = qe(u, o, a)), s.push(i);
		}),
		new Je(s)
	);
}
const Qe = (e) => {
		function t(n, s, r) {
			let o;
			return (
				qn(n) ? (o = Qn(n, s, e)) : Hn(s) ? (o = qe(n, s, r, e)) : (o = Ge(n, s, r)),
				e && e.animations.push(o),
				o
			);
		}
		return t;
	},
	Os = Qe();
function zs() {
	const e = E(() => ({ current: null, animations: [] })),
		t = E(() => Qe(e));
	return (
		Dt(() => {
			e.animations.forEach((n) => n.stop());
		}),
		[e, t]
	);
}
function Zn() {
	const e = E(Fn);
	return j(e.mount, []), e;
}
const Ps = Zn;
function Rs(...e) {
	const t = c.useRef(0),
		[n, s] = c.useState(e[t.current]),
		r = c.useCallback(
			(o) => {
				(t.current = typeof o != 'number' ? $e(0, e.length, t.current + 1) : o), s(e[t.current]);
			},
			[e.length, ...e]
		);
	return [n, r];
}
const es = { some: 0, all: 1 };
function ts(e, t, { root: n, margin: s, amount: r = 'some' } = {}) {
	const o = X(e),
		a = new WeakMap(),
		u = (f) => {
			f.forEach((l) => {
				const p = a.get(l.target);
				if (l.isIntersecting !== !!p)
					if (l.isIntersecting) {
						const d = t(l);
						typeof d == 'function' ? a.set(l.target, d) : i.unobserve(l.target);
					} else p && (p(l), a.delete(l.target));
			});
		},
		i = new IntersectionObserver(u, {
			root: n,
			rootMargin: s,
			threshold: typeof r == 'number' ? r : es[r],
		});
	return o.forEach((f) => i.observe(f)), () => i.disconnect();
}
function Ds(e, { root: t, margin: n, amount: s, once: r = !1 } = {}) {
	const [o, a] = c.useState(!1);
	return (
		c.useEffect(() => {
			if (!e.current || (r && o)) return;
			const u = () => (a(!0), r ? void 0 : () => a(!1)),
				i = { root: (t && t.current) || void 0, margin: n, amount: s };
			return ts(e.current, u, i);
		}, [t, e, n, r]),
		o
	);
}
class ns {
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
const ss = () => new ns();
function Ws() {
	return E(ss);
}
function Fs(e, t, n, s) {
	c.useEffect(() => {
		const r = e.current;
		if (n && r) return Wt(r, t, n, s);
	}, [e, t, n, s]);
}
function rs(e) {
	return e !== null && typeof e == 'object' && Ne in e;
}
function Hs(e) {
	if (rs(e)) return e[Ne];
}
function os() {
	return as;
}
function as(e) {
	k.current && ((k.current.isUpdating = !1), k.current.blockUpdate(), e && e());
}
function Bs() {
	const [e, t] = Pe(),
		n = os(),
		s = c.useRef();
	return (
		c.useEffect(() => {
			w.postRender(() =>
				w.postRender(() => {
					t === s.current && (ne.current = !1);
				})
			);
		}, [t]),
		(r) => {
			n(() => {
				(ne.current = !0), e(), r(), (s.current = t + 1);
			});
		}
	);
}
function ks() {
	ne.current = !1;
}
function Gs() {
	return c.useCallback(() => {
		const t = k.current;
		t && t.resetTree();
	}, []);
}
const Ze = (e, t) => `${e}: ${t}`,
	U = new Map();
let $;
function is(e, t, n, s) {
	const r = Ze(e, Z.has(t) ? 'transform' : t),
		o = U.get(r);
	if (!o) return 0;
	const { animation: a, startTime: u } = o,
		i = () => {
			U.delete(r);
			try {
				a.cancel();
			} catch {}
		};
	return u !== null ? (s.render(i), $ === void 0 && ($ = performance.now()), $ - u || 0) : (i(), 0);
}
let B, O;
function Ns(e, t, n, s, r) {
	if (window.HandoffComplete) {
		window.HandoffAppearAnimations = void 0;
		return;
	}
	const o = e.dataset[Ft];
	if (!o) return;
	window.HandoffAppearAnimations = is;
	const a = Ze(o, t);
	O ||
		((O = Ee(e, t, [n[0], n[0]], { duration: 1e4, ease: 'linear' })),
		U.set(a, { animation: O, startTime: null }));
	const u = () => {
		O.cancel();
		const i = Ee(e, t, n, s);
		B === void 0 && (B = performance.now()),
			(i.startTime = B),
			U.set(a, { animation: i, startTime: B }),
			r && r(i);
	};
	O.ready ? O.ready.then(u).catch(Ht) : u();
}
const oe = () => ({});
class us extends kt {
	build() {}
	measureInstanceViewportBox() {
		return Gt();
	}
	resetTransform() {}
	restoreTransform() {}
	removeValueFromRenderState() {}
	renderInstance() {}
	scrapeMotionValuesFromProps() {
		return oe();
	}
	getBaseTargetFromProps() {}
	readValueFromInstance(t, n, s) {
		return s.initialState[n] || 0;
	}
	sortInstanceNodePosition() {
		return 0;
	}
	makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...s }) {
		const r = Nt(s, t || {}, this);
		return Ut(this, s, r), { transition: t, transitionEnd: n, ...s };
	}
}
const cs = Bt({ scrapeMotionValuesFromProps: oe, createRenderState: oe });
function Us(e) {
	const [t, n] = c.useState(e),
		s = cs({}, !1),
		r = E(() => new us({ props: {}, visualState: s, presenceContext: null }, { initialState: e }));
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
	const o = E(() => (a) => ke(r, a));
	return [t, o];
}
const ls = 1e5,
	ze = (e) => (e > 0.001 ? 1 / e : ls);
function js(e) {
	let t = T(1),
		n = T(1);
	const { visualElement: s } = c.useContext(jt);
	e
		? ((t = e.scaleX || t), (n = e.scaleY || n))
		: s && ((t = s.getValue('scaleX', 1)), (n = s.getValue('scaleY', 1)));
	const r = se(t, ze),
		o = se(n, ze);
	return { scaleX: r, scaleY: o };
}
let fs = 0;
const Xs = ({ children: e }) => (
	c.useEffect(() => {}, []), c.createElement($t, { id: E(() => `asl-${fs++}`) }, e)
);
function ds({ source: e, axis: t = 'y' }) {
	const n = { value: 0 },
		s = Xe(
			(r) => {
				n.value = r[t].progress * 100;
			},
			{ container: e, axis: t }
		);
	return { currentTime: n, cancel: s };
}
const q = new Map();
function ms({ source: e = document.documentElement, axis: t = 'y' } = {}) {
	q.has(e) || q.set(e, {});
	const n = q.get(e);
	return (
		n[t] || (n[t] = _e() ? new ScrollTimeline({ source: e, axis: t }) : ds({ source: e, axis: t })),
		n[t]
	);
}
function Ys(e, t) {
	const n = ms(t);
	return typeof e == 'function' ? Ke(e, n) : e.attachTimeline(n);
}
function ps(e, t) {
	if (e === 'first') return 0;
	{
		const n = t - 1;
		return e === 'last' ? n : n / 2;
	}
}
function Ks(e = 0.1, { startDelay: t = 0, from: n = 0, ease: s } = {}) {
	return (r, o) => {
		const a = typeof n == 'number' ? n : ps(n, o),
			u = Math.abs(a - r);
		let i = e * u;
		if (s) {
			const f = o * e;
			i = Xt(s)(i / f) * f;
		}
		return t + i;
	};
}
const _s = w,
	Js = Yt.reduce((e, t) => ((e[t] = (n) => H(n)), e), {});
export {
	Qs as AnimatePresence,
	Xs as AnimateSharedLayout,
	Kt as DeprecatedLayoutGroupContext,
	ns as DragControls,
	Zs as FlatTree,
	$t as LayoutGroup,
	ye as LayoutGroupContext,
	Ss as LazyMotion,
	Es as MotionConfig,
	z as MotionConfigContext,
	jt as MotionContext,
	yt as MotionValue,
	er as PresenceContext,
	ws as Reorder,
	tr as SwitchLayoutGroupContext,
	kt as VisualElement,
	nr as addPointerEvent,
	sr as addPointerInfo,
	rr as addScaleCorrector,
	Os as animate,
	mt as animateValue,
	ke as animateVisualElement,
	Fn as animationControls,
	ct as animations,
	or as anticipate,
	ar as backIn,
	ir as backInOut,
	ur as backOut,
	cr as buildTransform,
	lr as calcLength,
	H as cancelFrame,
	Js as cancelSync,
	Ut as checkTargetForNewValues,
	fr as circIn,
	dr as circInOut,
	mr as circOut,
	pr as clamp,
	hr as color,
	gr as complex,
	Gt as createBox,
	yr as createDomMotionComponent,
	vr as createMotionComponent,
	Qe as createScopedAnimate,
	Er as cubicBezier,
	Sr as delay,
	ks as disableInstantTransitions,
	wr as distance,
	xr as distance2D,
	cn as domAnimation,
	xs as domMax,
	Ar as easeIn,
	Cr as easeInOut,
	Ir as easeOut,
	br as filterProps,
	w as frame,
	Q as frameData,
	ts as inView,
	We as interpolate,
	pt as invariant,
	Mr as isBrowser,
	Tr as isDragActive,
	rs as isMotionComponent,
	M as isMotionValue,
	Vr as isValidMotionProp,
	vs as m,
	Bt as makeUseVisualState,
	Lr as mirrorEasing,
	Re as mix,
	De as motion,
	W as motionValue,
	Or as optimizedAppearDataAttribute,
	zr as pipe,
	He as progress,
	Pr as px,
	Rr as resolveMotionValue,
	Dr as reverseEasing,
	Ys as scroll,
	Xe as scrollInfo,
	Tt as spring,
	Ks as stagger,
	Ns as startOptimizedAppearAnimation,
	Wr as steps,
	_s as sync,
	rn as transform,
	Hs as unwrapMotionComponent,
	zs as useAnimate,
	Ps as useAnimation,
	Zn as useAnimationControls,
	Pn as useAnimationFrame,
	Rs as useCycle,
	Us as useDeprecatedAnimatedState,
	js as useDeprecatedInvertedScale,
	Fs as useDomEvent,
	Ws as useDragControls,
	bs as useElementScroll,
	Pe as useForceUpdate,
	Ds as useInView,
	os as useInstantLayoutTransition,
	Bs as useInstantTransition,
	Fr as useIsPresent,
	j as useIsomorphicLayoutEffect,
	As as useMotionTemplate,
	T as useMotionValue,
	ln as useMotionValueEvent,
	Hr as usePresence,
	Dn as useReducedMotion,
	Ls as useReducedMotionConfig,
	Gs as useResetProjection,
	Ye as useScroll,
	Cs as useSpring,
	Ts as useTime,
	se as useTransform,
	Dt as useUnmountEffect,
	Is as useVelocity,
	Ms as useViewportScroll,
	Vs as useWillChange,
	te as visualElementStore,
	gt as warning,
	$e as wrap,
};
