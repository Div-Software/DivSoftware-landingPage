import {
	t as me,
	d as ze,
	g as pr,
	c as Me,
	$ as ft,
	a as Wt,
	b as gr,
	e as Ot,
	f as br,
	h as lt,
	i as hr,
	j as pt,
	k as j,
	l as jt,
	m as Lt,
	n as mr,
	o as gt,
	p as vr,
	q as Tt,
	r as yr,
	s as bt,
	u as g,
	v as Ve,
	w as ve,
	x as xr,
	y as we,
	z as De,
	A as Vt,
	B as it,
	C as Fe,
	D as M,
	E as Ee,
	F as T,
	G as wr,
	H as Je,
	I as Ht,
	J as Le,
	K as ke,
	L as Pr,
	M as Sr,
	N as He,
	O as Ut,
	P as $r,
	Q as qt,
	R as Cr,
	S as Kr,
	T as Gt,
	U as Mr,
	V as Ir,
	W as Yt,
	X as Dr,
	Y as ht,
	Z as kr,
	_ as Er,
	a0 as _r,
	a1 as Ar,
	a2 as Br,
	a3 as mt,
	a4 as zr,
	a5 as Fr,
} from './index.c329b6ce.js';
import { t as ce } from './i18next.a4b2730f.js';
import { r as u, $ as Te } from './index.9eb79d8f.js';
import { r as Nr } from './index.414e2829.js';
import { aj as Xt, g as dt } from './index.ffe82eb6.js';
import './_commonjsHelpers.725317a4.js';
function st() {
	return (
		(st = Object.assign
			? Object.assign.bind()
			: function (a) {
					for (var e = 1; e < arguments.length; e++) {
						var t = arguments[e];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (a[r] = t[r]);
					}
					return a;
			  }),
		st.apply(this, arguments)
	);
}
var Rr = {
		default: 'bg-default text-default-foreground',
		primary: 'bg-primary text-primary-foreground',
		secondary: 'bg-secondary text-secondary-foreground',
		success: 'bg-success text-success-foreground',
		warning: 'bg-warning text-warning-foreground',
		danger: 'bg-danger text-danger-foreground',
		foreground: 'bg-foreground text-background',
	},
	Wr = {
		default: 'shadow-lg shadow-default/50 bg-default text-default-foreground',
		primary: 'shadow-lg shadow-primary/40 bg-primary text-primary-foreground',
		secondary: 'shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground',
		success: 'shadow-lg shadow-success/40 bg-success text-success-foreground',
		warning: 'shadow-lg shadow-warning/40 bg-warning text-warning-foreground',
		danger: 'shadow-lg shadow-danger/40 bg-danger text-danger-foreground',
		foreground: 'shadow-lg shadow-foreground/40 bg-foreground text-background',
	},
	Or = {
		default: 'bg-transparent border-default text-foreground',
		primary: 'bg-transparent border-primary text-primary',
		secondary: 'bg-transparent border-secondary text-secondary',
		success: 'bg-transparent border-success text-success',
		warning: 'bg-transparent border-warning text-warning',
		danger: 'bg-transparent border-danger text-danger',
		foreground: 'bg-transparent border-foreground text-foreground',
	},
	jr = {
		default: 'bg-default/40 text-default-foreground',
		primary: 'bg-primary/20 text-primary',
		secondary: 'bg-secondary/20 text-secondary',
		success: 'bg-success/20 text-success-600 dark:text-success',
		warning: 'bg-warning/20 text-warning-600 dark:text-warning',
		danger: 'bg-danger/20 text-danger dark:text-danger-500',
		foreground: 'bg-foreground/10 text-foreground',
	},
	Lr = {
		default: 'border-default bg-default-100 text-default-foreground',
		primary: 'border-default bg-default-100 text-primary',
		secondary: 'border-default bg-default-100 text-secondary',
		success: 'border-default bg-default-100 text-success',
		warning: 'border-default bg-default-100 text-warning',
		danger: 'border-default bg-default-100 text-danger',
		foreground: 'border-default bg-default-100 text-foreground',
	},
	Tr = {
		default: 'bg-transparent text-default-foreground',
		primary: 'bg-transparent text-primary',
		secondary: 'bg-transparent text-secondary',
		success: 'bg-transparent text-success',
		warning: 'bg-transparent text-warning',
		danger: 'bg-transparent text-danger',
		foreground: 'bg-transparent text-foreground',
	},
	Vr = {
		default: 'border-default text-default-foreground hover:!bg-default',
		primary: 'border-primary text-primary hover:!text-primary-foreground hover:!bg-primary',
		secondary:
			'border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary',
		success: 'border-success text-success hover:!text-success-foreground hover:!bg-success',
		warning: 'border-warning text-warning hover:!text-warning-foreground hover:!bg-warning',
		danger: 'border-danger text-danger hover:!text-danger-foreground hover:!bg-danger',
		foreground: 'border-foreground text-foreground hover:!bg-foreground',
	},
	_ = { solid: Rr, shadow: Wr, bordered: Or, flat: jr, faded: Lr, light: Tr, ghost: Vr },
	vt = me({
		slots: {
			base: 'relative inline-flex flex-col gap-2 items-center justify-center',
			wrapper: 'relative flex',
			circle1: [
				'absolute',
				'w-full',
				'h-full',
				'rounded-full',
				'animate-spinner-ease-spin',
				'border-2',
				'border-solid',
				'border-t-transparent',
				'border-l-transparent',
				'border-r-transparent',
			],
			circle2: [
				'absolute',
				'w-full',
				'h-full',
				'rounded-full',
				'opacity-75',
				'animate-spinner-linear-spin',
				'border-2',
				'border-dotted',
				'border-t-transparent',
				'border-l-transparent',
				'border-r-transparent',
			],
			label: 'text-foreground dark:text-foreground-dark font-regular',
		},
		variants: {
			size: {
				sm: { wrapper: 'w-5 h-5', circle1: 'border-2', circle2: 'border-2', label: 'text-small' },
				md: { wrapper: 'w-8 h-8', circle1: 'border-3', circle2: 'border-3', label: 'text-medium' },
				lg: { wrapper: 'w-10 h-10', circle1: 'border-3', circle2: 'border-3', label: 'text-large' },
			},
			color: {
				current: { circle1: 'border-b-current', circle2: 'border-b-current' },
				white: { circle1: 'border-b-white', circle2: 'border-b-white' },
				default: { circle1: 'border-b-default', circle2: 'border-b-default' },
				primary: { circle1: 'border-b-primary', circle2: 'border-b-primary' },
				secondary: { circle1: 'border-b-secondary', circle2: 'border-b-secondary' },
				success: { circle1: 'border-b-success', circle2: 'border-b-success' },
				warning: { circle1: 'border-b-warning', circle2: 'border-b-warning' },
				danger: { circle1: 'border-b-danger', circle2: 'border-b-danger' },
			},
			labelColor: {
				foreground: { label: 'text-foreground' },
				primary: { label: 'text-primary' },
				secondary: { label: 'text-secondary' },
				success: { label: 'text-success' },
				warning: { label: 'text-warning' },
				danger: { label: 'text-danger' },
			},
		},
		defaultVariants: { size: 'md', color: 'primary', labelColor: 'foreground' },
	}),
	yt = me({
		slots: {
			base: [
				'z-0',
				'relative',
				'bg-transparent',
				"before:content-['']",
				'before:hidden',
				'before:z-[-1]',
				'before:absolute',
				'before:rotate-45',
				'before:w-2.5',
				'before:h-2.5',
				'before:rounded-sm',
				'data-[arrow=true]:before:block',
				'data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]',
				'data-[placement=top]:before:left-1/2',
				'data-[placement=top]:before:-translate-x-1/2',
				'data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]',
				'data-[placement=top-start]:before:left-3',
				'data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]',
				'data-[placement=top-end]:before:right-3',
				'data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]',
				'data-[placement=bottom]:before:left-1/2',
				'data-[placement=bottom]:before:-translate-x-1/2',
				'data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]',
				'data-[placement=bottom-start]:before:left-3',
				'data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]',
				'data-[placement=bottom-end]:before:right-3',
				'data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]',
				'data-[placement=left]:before:top-1/2',
				'data-[placement=left]:before:-translate-y-1/2',
				'data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]',
				'data-[placement=left-start]:before:top-1/4',
				'data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]',
				'data-[placement=left-end]:before:bottom-1/4',
				'data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]',
				'data-[placement=right]:before:top-1/2',
				'data-[placement=right]:before:-translate-y-1/2',
				'data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]',
				'data-[placement=right-start]:before:top-1/4',
				'data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]',
				'data-[placement=right-end]:before:bottom-1/4',
				...ze,
			],
			content: [
				'z-10',
				'px-2.5',
				'py-1',
				'w-full',
				'inline-flex',
				'flex-col',
				'items-center',
				'justify-center',
				'box-border',
				'subpixel-antialiased',
				'outline-none',
				'box-border',
			],
			trigger: ['z-10'],
			backdrop: ['hidden'],
			arrow: [],
		},
		variants: {
			size: {
				sm: { content: 'text-tiny' },
				md: { content: 'text-small' },
				lg: { content: 'text-medium' },
			},
			color: {
				default: { base: 'before:bg-content1 before:shadow-small', content: 'bg-content1' },
				foreground: { base: 'before:bg-foreground', content: _.solid.foreground },
				primary: { base: 'before:bg-primary', content: _.solid.primary },
				secondary: { base: 'before:bg-secondary', content: _.solid.secondary },
				success: { base: 'before:bg-success', content: _.solid.success },
				warning: { base: 'before:bg-warning', content: _.solid.warning },
				danger: { base: 'before:bg-danger', content: _.solid.danger },
			},
			radius: {
				none: { content: 'rounded-none' },
				sm: { content: 'rounded-small' },
				md: { content: 'rounded-medium' },
				lg: { content: 'rounded-large' },
				full: { content: 'rounded-full' },
			},
			shadow: {
				sm: { content: 'shadow-small' },
				md: { content: 'shadow-medium' },
				lg: { content: 'shadow-large' },
			},
			backdrop: {
				transparent: {},
				opaque: { backdrop: 'bg-overlay/50 backdrop-opacity-disabled' },
				blur: { backdrop: 'backdrop-blur-sm backdrop-saturate-150 bg-overlay/30' },
			},
			triggerScaleOnOpen: {
				true: {
					trigger: [
						'aria-expanded:scale-[0.97]',
						'aria-expanded:opacity-70',
						'subpixel-antialiased',
					],
				},
				false: {},
			},
			disableAnimation: { true: { base: 'animate-none' } },
		},
		defaultVariants: {
			color: 'default',
			radius: 'lg',
			size: 'md',
			shadow: 'md',
			backdrop: 'transparent',
			disableAnimation: !1,
			triggerScaleOnOpen: !0,
		},
		compoundVariants: [
			{
				backdrop: ['opaque', 'blur'],
				class: { backdrop: 'block w-full h-full fixed inset-0 -z-30' },
			},
		],
	}),
	Hr = [
		'data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
		'data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
		'data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
	],
	Ur = [
		'data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
		'data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
		'data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]',
	],
	xt = me({
		base: [],
		variants: {
			orientation: { vertical: ['overflow-y-auto', ...Hr], horizontal: ['overflow-x-auto', ...Ur] },
			hideScrollBar: { true: 'scrollbar-hide', false: '' },
		},
		defaultVariants: { orientation: 'vertical', hideScrollBar: !1 },
	}),
	wt = me({
		slots: {
			base: ['group inline-flex flex-col relative w-full'],
			label: [
				'block',
				'absolute',
				'z-10',
				'origin-top-left',
				'subpixel-antialiased',
				'text-small',
				'text-foreground-500',
				'pointer-events-none',
			],
			mainWrapper: 'w-full flex flex-col',
			trigger:
				'relative px-3 gap-3 w-full inline-flex flex-row items-center shadow-sm outline-none tap-highlight-transparent',
			innerWrapper:
				'inline-flex h-full w-[calc(100%_-_theme(spacing.unit-6))] min-h-unit-4 items-center gap-1.5 box-border',
			selectorIcon: 'absolute right-3 w-unit-4 h-unit-4',
			spinner: 'absolute right-3',
			value: ['text-foreground-500', 'font-normal', 'w-full', 'text-left'],
			listboxWrapper: 'scroll-py-6 max-h-64 w-full',
			listbox: '',
			popoverContent: 'w-full p-1 overflow-hidden',
			helperWrapper: 'p-1 flex relative flex-col gap-1.5',
			description: 'text-tiny text-foreground-400',
			errorMessage: 'text-tiny text-danger',
		},
		variants: {
			variant: {
				flat: {
					trigger: [
						'bg-default-100',
						'data-[hover=true]:bg-default-200',
						'group-data-[focus=true]:bg-default-100',
					],
				},
				faded: {
					trigger: [
						'bg-default-100',
						'border-medium',
						'border-default-200',
						'data-[hover=true]:border-default-400',
					],
					value: 'group-data-[has-value=true]:text-default-foreground',
				},
				bordered: {
					trigger: [
						'border-medium',
						'border-default-200',
						'data-[hover=true]:border-default-400',
						'data-[open=true]:border-default-foreground',
						'data-[focus=true]:border-default-foreground',
						'data-[focus=true]:border-default-foreground',
					],
				},
				underlined: {
					trigger: [
						'!px-1',
						'!pb-0',
						'!gap-0',
						'relative',
						'box-border',
						'border-b-medium',
						'shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]',
						'border-default-200',
						'!rounded-none',
						'hover:border-default-300',
						"after:content-['']",
						'after:w-0',
						'after:origin-center',
						'after:bg-default-foreground',
						'after:absolute',
						'after:left-1/2',
						'after:-translate-x-1/2',
						'after:-bottom-[2px]',
						'after:h-[2px]',
						'data-[open=true]:after:w-full',
						'data-[focus=true]:after:w-full',
					],
					label: 'group-data-[filled=true]:text-foreground',
				},
			},
			color: { default: {}, primary: {}, secondary: {}, success: {}, warning: {}, danger: {} },
			size: {
				sm: {
					label: 'text-tiny',
					trigger: 'h-unit-8 min-h-unit-8 px-2 rounded-small',
					value: 'text-small',
				},
				md: { trigger: 'h-unit-10 min-h-unit-10 rounded-medium', value: 'text-small' },
				lg: { trigger: 'h-unit-12 min-h-unit-12 rounded-large', value: 'text-medium' },
			},
			radius: {
				none: { trigger: 'rounded-none' },
				sm: { trigger: 'rounded-small' },
				md: { trigger: 'rounded-medium' },
				lg: { trigger: 'rounded-large' },
				full: { trigger: 'rounded-full' },
			},
			labelPlacement: {
				outside: { base: 'flex flex-col' },
				'outside-left': {
					base: 'flex-row items-center flex-nowrap items-start',
					label: 'relative pr-2 text-foreground',
				},
				inside: {
					label: 'text-tiny cursor-pointer',
					trigger: 'flex-col items-start justify-center gap-0',
				},
			},
			fullWidth: { true: { base: 'w-full' } },
			isDisabled: {
				true: { base: 'opacity-disabled pointer-events-none', trigger: 'pointer-events-none' },
			},
			isInvalid: {
				true: { label: '!text-danger', value: '!text-danger', selectorIcon: 'text-danger' },
			},
			isRequired: { true: { label: "after:content-['*'] after:text-danger after:ml-0.5" } },
			isMultiline: {
				true: { label: 'relative', trigger: '!h-auto' },
				false: { value: 'truncate' },
			},
			disableAnimation: {
				true: {
					trigger: 'after:transition-none',
					base: 'transition-none',
					label: 'transition-none',
					selectorIcon: 'transition-none',
				},
				false: {
					base: 'transition-background motion-reduce:transition-none !duration-150',
					label: [
						'will-change-auto',
						'origin-top-left',
						'!duration-200',
						'!ease-out',
						'transition-[transform,color,left,opacity]',
						'motion-reduce:transition-none',
					],
					selectorIcon: 'transition-transform duration-150 ease motion-reduce:transition-none',
				},
			},
			disableSelectorIconRotation: {
				true: {},
				false: { selectorIcon: 'data-[open=true]:rotate-180' },
			},
		},
		defaultVariants: {
			variant: 'flat',
			color: 'default',
			size: 'md',
			labelPlacement: 'inside',
			fullWidth: !0,
			isDisabled: !1,
			isMultiline: !1,
			disableAnimation: !1,
			disableSelectorIconRotation: !1,
		},
		compoundVariants: [
			{
				variant: 'flat',
				color: 'default',
				class: { value: 'group-data-[has-value=true]:text-default-foreground' },
			},
			{
				variant: 'flat',
				color: 'primary',
				class: {
					trigger: [
						'bg-primary-50',
						'text-primary',
						'data-[hover=true]:bg-primary-100',
						'group-data-[focus=true]:bg-primary-50',
					],
					value: 'text-primary',
					label: 'text-primary',
				},
			},
			{
				variant: 'flat',
				color: 'secondary',
				class: {
					trigger: [
						'bg-secondary-50',
						'text-secondary',
						'data-[hover=true]:bg-secondary-100',
						'group-data-[focus=true]:bg-secondary-50',
					],
					value: 'text-secondary',
					label: 'text-secondary',
				},
			},
			{
				variant: 'flat',
				color: 'success',
				class: {
					trigger: [
						'bg-success-50',
						'text-success-600',
						'dark:text-success',
						'data-[hover=true]:bg-success-100',
						'group-data-[focus=true]:bg-success-50',
					],
					value: 'text-success-600 dark:text-success',
					label: 'text-success-600 dark:text-success',
				},
			},
			{
				variant: 'flat',
				color: 'warning',
				class: {
					trigger: [
						'bg-warning-50',
						'text-warning-600',
						'dark:text-warning',
						'data-[hover=true]:bg-warning-100',
						'group-data-[focus=true]:bg-warning-50',
					],
					value: 'text-warning-600 dark:text-warning',
					label: 'text-warning-600 dark:text-warning',
				},
			},
			{
				variant: 'flat',
				color: 'danger',
				class: {
					trigger: [
						'bg-danger-50',
						'text-danger',
						'dark:text-danger-500',
						'data-[hover=true]:bg-danger-100',
						'group-data-[focus=true]:bg-danger-50',
					],
					value: 'text-danger dark:text-danger-500',
					label: 'text-danger dark:text-danger-500',
				},
			},
			{
				variant: 'faded',
				color: 'primary',
				class: { trigger: 'data-[hover=true]:border-primary', label: 'text-primary' },
			},
			{
				variant: 'faded',
				color: 'secondary',
				class: { trigger: 'data-[hover=true]:border-secondary', label: 'text-secondary' },
			},
			{
				variant: 'faded',
				color: 'success',
				class: { trigger: 'data-[hover=true]:border-success', label: 'text-success' },
			},
			{
				variant: 'faded',
				color: 'warning',
				class: { trigger: 'data-[hover=true]:border-warning', label: 'text-warning' },
			},
			{
				variant: 'faded',
				color: 'danger',
				class: { trigger: 'data-[hover=true]:border-danger', label: 'text-danger' },
			},
			{
				variant: 'underlined',
				color: 'default',
				class: { value: 'group-data-[has-value=true]:text-foreground' },
			},
			{
				variant: 'underlined',
				color: 'primary',
				class: { trigger: 'after:bg-primary', label: 'text-primary' },
			},
			{
				variant: 'underlined',
				color: 'secondary',
				class: { trigger: 'after:bg-secondary', label: 'text-secondary' },
			},
			{
				variant: 'underlined',
				color: 'success',
				class: { trigger: 'after:bg-success', label: 'text-success' },
			},
			{
				variant: 'underlined',
				color: 'warning',
				class: { trigger: 'after:bg-warning', label: 'text-warning' },
			},
			{
				variant: 'underlined',
				color: 'danger',
				class: { trigger: 'after:bg-danger', label: 'text-danger' },
			},
			{
				variant: 'bordered',
				color: 'primary',
				class: {
					trigger: ['data-[open=true]:border-primary', 'data-[focus=true]:border-primary'],
					label: 'text-primary',
				},
			},
			{
				variant: 'bordered',
				color: 'secondary',
				class: {
					trigger: ['data-[open=true]:border-secondary', 'data-[focus=true]:border-secondary'],
					label: 'text-secondary',
				},
			},
			{
				variant: 'bordered',
				color: 'success',
				class: {
					trigger: ['data-[open=true]:border-success', 'data-[focus=true]:border-success'],
					label: 'text-success',
				},
			},
			{
				variant: 'bordered',
				color: 'warning',
				class: {
					trigger: ['data-[open=true]:border-warning', 'data-[focus=true]:border-warning'],
					label: 'text-warning',
				},
			},
			{
				variant: 'bordered',
				color: 'danger',
				class: {
					trigger: ['data-[open=true]:border-danger', 'data-[focus=true]:border-danger'],
					label: 'text-danger',
				},
			},
			{
				labelPlacement: 'inside',
				color: 'default',
				class: { label: 'group-data-[filled=true]:text-default-600' },
			},
			{
				labelPlacement: 'outside',
				color: 'default',
				class: { label: 'group-data-[filled=true]:text-foreground' },
			},
			{ radius: 'full', size: ['sm'], class: { trigger: 'px-3' } },
			{ radius: 'full', size: 'md', class: { trigger: 'px-4' } },
			{ radius: 'full', size: 'lg', class: { trigger: 'px-5' } },
			{
				disableAnimation: !1,
				variant: ['faded', 'bordered'],
				class: { trigger: 'transition-colors motion-reduce:transition-none' },
			},
			{
				disableAnimation: !1,
				variant: 'underlined',
				class: { trigger: 'after:transition-width motion-reduce:after:transition-none' },
			},
			{ variant: ['flat', 'faded'], class: { trigger: [...ze] } },
			{
				isInvalid: !0,
				variant: 'flat',
				class: {
					trigger: [
						'bg-danger-50',
						'data-[hover=true]:bg-danger-100',
						'group-data-[focus=true]:bg-danger-50',
					],
				},
			},
			{
				isInvalid: !0,
				variant: 'bordered',
				class: { trigger: '!border-danger group-data-[focus=true]:border-danger' },
			},
			{ isInvalid: !0, variant: 'underlined', class: { trigger: 'after:bg-danger' } },
			{
				labelPlacement: 'inside',
				size: 'sm',
				class: { trigger: 'h-12 min-h-unit-12 py-1.5 px-3' },
			},
			{ labelPlacement: 'inside', size: 'md', class: { trigger: 'h-14 min-h-unit-14 py-2' } },
			{
				labelPlacement: 'inside',
				size: 'lg',
				class: { label: 'text-small', trigger: 'h-16 min-h-unit-16 py-2.5 gap-0' },
			},
			{
				labelPlacement: ['inside', 'outside'],
				class: { label: ['group-data-[filled=true]:pointer-events-auto'] },
			},
			{
				labelPlacement: 'outside',
				isMultiline: !1,
				class: {
					base: 'group relative justify-end',
					label: ['pb-0', 'z-20', 'top-1/2', '-translate-y-1/2', 'group-data-[filled=true]:left-0'],
				},
			},
			{ labelPlacement: ['inside'], class: { label: 'group-data-[filled=true]:scale-85' } },
			{ labelPlacement: 'inside', size: ['sm', 'md'], class: { label: 'text-small' } },
			{
				labelPlacement: 'inside',
				isMultiline: !1,
				size: 'sm',
				class: {
					label: [
						'group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px)]',
					],
					innerWrapper: 'group-data-[has-label=true]:pt-4',
				},
			},
			{
				labelPlacement: 'inside',
				isMultiline: !1,
				size: 'md',
				class: {
					label: [
						'group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]',
					],
					innerWrapper: 'group-data-[has-label=true]:pt-4',
				},
			},
			{
				labelPlacement: 'inside',
				isMultiline: !1,
				size: 'lg',
				class: {
					label: [
						'text-medium',
						'group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]',
					],
					innerWrapper: 'group-data-[has-label=true]:pt-5',
				},
			},
			{
				labelPlacement: 'inside',
				variant: ['faded', 'bordered'],
				isMultiline: !1,
				size: 'sm',
				class: {
					label: [
						'group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: ['faded', 'bordered'],
				isMultiline: !1,
				size: 'md',
				class: {
					label: [
						'group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: ['faded', 'bordered'],
				isMultiline: !1,
				size: 'lg',
				class: {
					label: [
						'text-medium',
						'group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px_-_theme(borderWidth.medium))]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: 'underlined',
				isMultiline: !1,
				size: 'sm',
				class: {
					label: [
						'group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_5px)]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: 'underlined',
				isMultiline: !1,
				size: 'md',
				class: {
					label: [
						'group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_3.5px)]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: 'underlined',
				isMultiline: !1,
				size: 'lg',
				class: {
					label: [
						'text-medium',
						'group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]',
					],
				},
			},
			{
				labelPlacement: 'outside',
				size: 'sm',
				isMultiline: !1,
				class: {
					label: [
						'left-2',
						'text-tiny',
						'group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)]',
					],
					base: 'data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_8px)]',
				},
			},
			{
				labelPlacement: 'outside',
				isMultiline: !1,
				size: 'md',
				class: {
					label: [
						'left-3',
						'text-small',
						'group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]',
					],
					base: 'data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]',
				},
			},
			{
				labelPlacement: 'outside',
				isMultiline: !1,
				size: 'lg',
				class: {
					label: [
						'left-3',
						'text-medium',
						'group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_24px)]',
					],
					base: 'data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_12px)]',
				},
			},
			{ labelPlacement: 'outside', isMultiline: !0, class: { label: 'pb-1.5' } },
			{
				labelPlacement: ['inside', 'outside'],
				class: { label: ['pe-2', 'max-w-full', 'text-ellipsis', 'overflow-hidden'] },
			},
		],
	}),
	Pt = me({
		slots: {
			base: 'group flex flex-col',
			label: [
				'absolute',
				'z-10',
				'pointer-events-none',
				'origin-top-left',
				'subpixel-antialiased',
				'block',
				'text-small',
				'text-foreground-500',
			],
			mainWrapper: 'h-full',
			inputWrapper:
				'relative w-full inline-flex tap-highlight-transparent flex-row items-center shadow-sm px-3 gap-3',
			innerWrapper: 'inline-flex w-full items-center h-full box-border',
			input: [
				'w-full font-normal bg-transparent !outline-none placeholder:text-foreground-500 focus-visible:outline-none',
				'data-[has-start-content=true]:ps-1.5',
				'data-[has-end-content=true]:pe-1.5',
			],
			clearButton: [
				'p-2',
				'-m-2',
				'z-10',
				'hidden',
				'absolute',
				'right-3',
				'appearance-none',
				'outline-none',
				'select-none',
				'opacity-0',
				'hover:!opacity-100',
				'cursor-pointer',
				'active:!opacity-70',
				'rounded-full',
				...ze,
			],
			helperWrapper: 'hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5',
			description: 'text-tiny text-foreground-400',
			errorMessage: 'text-tiny text-danger',
		},
		variants: {
			variant: {
				flat: {
					inputWrapper: [
						'bg-default-100',
						'data-[hover=true]:bg-default-200',
						'group-data-[focus=true]:bg-default-100',
					],
				},
				faded: {
					inputWrapper: [
						'bg-default-100',
						'border-medium',
						'border-default-200',
						'data-[hover=true]:border-default-400',
					],
					value: 'group-data-[has-value=true]:text-default-foreground',
				},
				bordered: {
					inputWrapper: [
						'border-medium',
						'border-default-200',
						'data-[hover=true]:border-default-400',
						'group-data-[focus=true]:border-default-foreground',
					],
				},
				underlined: {
					inputWrapper: [
						'!px-1',
						'!pb-0',
						'!gap-0',
						'relative',
						'box-border',
						'border-b-medium',
						'shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]',
						'border-default-200',
						'!rounded-none',
						'hover:border-default-300',
						"after:content-['']",
						'after:w-0',
						'after:origin-center',
						'after:bg-default-foreground',
						'after:absolute',
						'after:left-1/2',
						'after:-translate-x-1/2',
						'after:-bottom-[2px]',
						'after:h-[2px]',
						'group-data-[focus=true]:after:w-full',
					],
					innerWrapper: 'pb-1',
					label: 'group-data-[filled-within=true]:text-foreground',
				},
			},
			color: { default: {}, primary: {}, secondary: {}, success: {}, warning: {}, danger: {} },
			size: {
				sm: {
					label: 'text-tiny',
					inputWrapper: 'h-unit-8 min-h-unit-8 px-2 rounded-small',
					input: 'text-small',
					clearButton: 'text-medium',
				},
				md: {
					inputWrapper: 'h-unit-10 min-h-unit-10 rounded-medium',
					input: 'text-small',
					clearButton: 'text-large',
				},
				lg: {
					inputWrapper: 'h-unit-12 min-h-unit-12 rounded-large',
					input: 'text-medium',
					clearButton: 'text-large',
				},
			},
			radius: {
				none: { inputWrapper: 'rounded-none' },
				sm: { inputWrapper: 'rounded-small' },
				md: { inputWrapper: 'rounded-medium' },
				lg: { inputWrapper: 'rounded-large' },
				full: { inputWrapper: 'rounded-full' },
			},
			labelPlacement: {
				outside: { mainWrapper: 'flex flex-col' },
				'outside-left': {
					base: 'flex-row items-center flex-nowrap data-[has-helper=true]:items-start',
					inputWrapper: 'flex-1',
					mainWrapper: 'flex flex-col',
					label: 'relative text-foreground pr-2',
				},
				inside: {
					label: 'text-tiny cursor-text',
					inputWrapper: 'flex-col items-start justify-center gap-0',
					innerWrapper: 'group-data-[has-label=true]:items-end',
				},
			},
			fullWidth: { true: { base: 'w-full' } },
			isClearable: {
				true: {
					input: 'peer pr-6',
					clearButton: 'peer-data-[filled=true]:opacity-70 peer-data-[filled=true]:block',
				},
			},
			isDisabled: {
				true: {
					base: 'opacity-disabled pointer-events-none',
					inputWrapper: 'pointer-events-none',
					label: 'pointer-events-none',
				},
			},
			isInvalid: {
				true: { label: '!text-danger', input: '!placeholder:text-danger !text-danger' },
			},
			isRequired: { true: { label: "after:content-['*'] after:text-danger after:ml-0.5" } },
			isMultiline: {
				true: {
					label: 'relative',
					inputWrapper: '!h-auto',
					innerWrapper: 'items-start group-data-[has-label=true]:items-start',
					input: 'resize-none data-[hide-scroll=true]:scrollbar-hide',
				},
			},
			disableAnimation: {
				true: {
					input: 'transition-none',
					inputWrapper: 'transition-none',
					label: 'transition-none',
				},
				false: {
					inputWrapper: 'transition-background motion-reduce:transition-none !duration-150',
					label: [
						'will-change-auto',
						'!duration-200',
						'!ease-out',
						'motion-reduce:transition-none',
						'transition-[transform,color,left,opacity]',
					],
					clearButton: ['transition-opacity', 'motion-reduce:transition-none'],
				},
			},
		},
		defaultVariants: {
			variant: 'flat',
			color: 'default',
			size: 'md',
			fullWidth: !0,
			labelPlacement: 'inside',
			isDisabled: !1,
			isMultiline: !1,
			disableAnimation: !1,
		},
		compoundVariants: [
			{
				variant: 'flat',
				color: 'default',
				class: { input: 'group-data-[has-value=true]:text-default-foreground' },
			},
			{
				variant: 'flat',
				color: 'primary',
				class: {
					inputWrapper: [
						'bg-primary-50',
						'data-[hover=true]:bg-primary-100',
						'text-primary',
						'group-data-[focus=true]:bg-primary-50',
						'placeholder:text-primary',
					],
					input: 'placeholder:text-primary',
					label: 'text-primary',
				},
			},
			{
				variant: 'flat',
				color: 'secondary',
				class: {
					inputWrapper: [
						'bg-secondary-50',
						'text-secondary',
						'data-[hover=true]:bg-secondary-100',
						'group-data-[focus=true]:bg-secondary-50',
						'placeholder:text-secondary',
					],
					input: 'placeholder:text-secondary',
					label: 'text-secondary',
				},
			},
			{
				variant: 'flat',
				color: 'success',
				class: {
					inputWrapper: [
						'bg-success-50',
						'text-success-600',
						'dark:text-success',
						'placeholder:text-success-600',
						'dark:placeholder:text-success',
						'data-[hover=true]:bg-success-100',
						'group-data-[focus=true]:bg-success-50',
					],
					input: 'placeholder:text-success-600 dark:placeholder:text-success',
					label: 'text-success-600 dark:text-success',
				},
			},
			{
				variant: 'flat',
				color: 'warning',
				class: {
					inputWrapper: [
						'bg-warning-50',
						'text-warning-600',
						'dark:text-warning',
						'placeholder:text-warning-600',
						'dark:placeholder:text-warning',
						'data-[hover=true]:bg-warning-100',
						'group-data-[focus=true]:bg-warning-50',
					],
					input: 'placeholder:text-warning-600 dark:placeholder:text-warning',
					label: 'text-warning-600 dark:text-warning',
				},
			},
			{
				variant: 'flat',
				color: 'danger',
				class: {
					inputWrapper: [
						'bg-danger-50',
						'text-danger',
						'dark:text-danger-500',
						'placeholder:text-danger',
						'dark:placeholder:text-danger-500',
						'data-[hover=true]:bg-danger-100',
						'group-data-[focus=true]:bg-danger-50',
					],
					input: 'placeholder:text-danger dark:placeholder:text-danger-500',
					label: 'text-danger dark:text-danger-500',
				},
			},
			{
				variant: 'faded',
				color: 'primary',
				class: {
					label: 'text-primary',
					inputWrapper: 'data-[hover=true]:border-primary focus-within:border-primary',
				},
			},
			{
				variant: 'faded',
				color: 'secondary',
				class: {
					label: 'text-secondary',
					inputWrapper: 'data-[hover=true]:border-secondary focus-within:border-secondary',
				},
			},
			{
				variant: 'faded',
				color: 'success',
				class: {
					label: 'text-success',
					inputWrapper: 'data-[hover=true]:border-success focus-within:border-success',
				},
			},
			{
				variant: 'faded',
				color: 'warning',
				class: {
					label: 'text-warning',
					inputWrapper: 'data-[hover=true]:border-warning focus-within:border-warning',
				},
			},
			{
				variant: 'faded',
				color: 'danger',
				class: {
					label: 'text-danger',
					inputWrapper: 'data-[hover=true]:border-danger focus-within:border-danger',
				},
			},
			{
				variant: 'underlined',
				color: 'default',
				class: { input: 'group-data-[has-value=true]:text-foreground' },
			},
			{
				variant: 'underlined',
				color: 'primary',
				class: { inputWrapper: 'after:bg-primary', label: 'text-primary' },
			},
			{
				variant: 'underlined',
				color: 'secondary',
				class: { inputWrapper: 'after:bg-secondary', label: 'text-secondary' },
			},
			{
				variant: 'underlined',
				color: 'success',
				class: { inputWrapper: 'after:bg-success', label: 'text-success' },
			},
			{
				variant: 'underlined',
				color: 'warning',
				class: { inputWrapper: 'after:bg-warning', label: 'text-warning' },
			},
			{
				variant: 'underlined',
				color: 'danger',
				class: { inputWrapper: 'after:bg-danger', label: 'text-danger' },
			},
			{
				variant: 'bordered',
				color: 'primary',
				class: { inputWrapper: 'group-data-[focus=true]:border-primary', label: 'text-primary' },
			},
			{
				variant: 'bordered',
				color: 'secondary',
				class: {
					inputWrapper: 'group-data-[focus=true]:border-secondary',
					label: 'text-secondary',
				},
			},
			{
				variant: 'bordered',
				color: 'success',
				class: { inputWrapper: 'group-data-[focus=true]:border-success', label: 'text-success' },
			},
			{
				variant: 'bordered',
				color: 'warning',
				class: { inputWrapper: 'group-data-[focus=true]:border-warning', label: 'text-warning' },
			},
			{
				variant: 'bordered',
				color: 'danger',
				class: { inputWrapper: 'group-data-[focus=true]:border-danger', label: 'text-danger' },
			},
			{
				labelPlacement: 'inside',
				color: 'default',
				class: { label: 'group-data-[filled-within=true]:text-default-600' },
			},
			{
				labelPlacement: 'outside',
				color: 'default',
				class: { label: 'group-data-[filled-within=true]:text-foreground' },
			},
			{ radius: 'full', size: ['sm'], class: { inputWrapper: 'px-3' } },
			{ radius: 'full', size: 'md', class: { inputWrapper: 'px-4' } },
			{ radius: 'full', size: 'lg', class: { inputWrapper: 'px-5' } },
			{
				disableAnimation: !1,
				variant: ['faded', 'bordered'],
				class: { inputWrapper: 'transition-colors motion-reduce:transition-none' },
			},
			{
				disableAnimation: !1,
				variant: 'underlined',
				class: { inputWrapper: 'after:transition-width motion-reduce:after:transition-none' },
			},
			{ variant: ['flat', 'faded'], class: { inputWrapper: [...pr] } },
			{
				isInvalid: !0,
				variant: 'flat',
				class: {
					inputWrapper: [
						'bg-danger-50',
						'data-[hover=true]:bg-danger-100',
						'group-data-[focus=true]:bg-danger-50',
					],
				},
			},
			{
				isInvalid: !0,
				variant: 'bordered',
				class: { inputWrapper: '!border-danger group-data-[focus=true]:border-danger' },
			},
			{ isInvalid: !0, variant: 'underlined', class: { inputWrapper: 'after:bg-danger' } },
			{ labelPlacement: 'inside', size: 'sm', class: { inputWrapper: 'h-12 py-1.5 px-3' } },
			{ labelPlacement: 'inside', size: 'md', class: { inputWrapper: 'h-14 py-2' } },
			{
				labelPlacement: 'inside',
				size: 'lg',
				class: { label: 'text-small', inputWrapper: 'h-16 py-2.5 gap-0' },
			},
			{
				labelPlacement: 'inside',
				size: 'sm',
				variant: ['bordered', 'faded'],
				class: { inputWrapper: 'py-1' },
			},
			{
				labelPlacement: ['inside', 'outside'],
				class: { label: ['group-data-[filled-within=true]:pointer-events-auto'] },
			},
			{ labelPlacement: ['outside', 'outside-left'], class: { input: 'h-full' } },
			{
				labelPlacement: 'outside',
				isMultiline: !1,
				class: {
					base: 'group relative justify-end',
					label: [
						'pb-0',
						'z-20',
						'top-1/2',
						'-translate-y-1/2',
						'group-data-[filled-within=true]:left-0',
					],
				},
			},
			{
				labelPlacement: ['inside'],
				class: { label: ['group-data-[filled-within=true]:scale-85'] },
			},
			{ labelPlacement: ['inside'], variant: 'flat', class: { innerWrapper: 'pb-0.5' } },
			{ variant: 'underlined', size: 'sm', class: { innerWrapper: 'pb-1' } },
			{ variant: 'underlined', size: ['md', 'lg'], class: { innerWrapper: 'pb-1.5' } },
			{ labelPlacement: 'inside', size: ['sm', 'md'], class: { label: 'text-small' } },
			{
				labelPlacement: 'inside',
				isMultiline: !1,
				size: 'sm',
				class: {
					label: [
						'group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px)]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				isMultiline: !1,
				size: 'md',
				class: {
					label: [
						'group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				isMultiline: !1,
				size: 'lg',
				class: {
					label: [
						'text-medium',
						'group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: ['faded', 'bordered'],
				isMultiline: !1,
				size: 'sm',
				class: {
					label: [
						'group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: ['faded', 'bordered'],
				isMultiline: !1,
				size: 'md',
				class: {
					label: [
						'group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: ['faded', 'bordered'],
				isMultiline: !1,
				size: 'lg',
				class: {
					label: [
						'text-medium',
						'group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px_-_theme(borderWidth.medium))]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: 'underlined',
				isMultiline: !1,
				size: 'sm',
				class: {
					label: [
						'group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_5px)]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: 'underlined',
				isMultiline: !1,
				size: 'md',
				class: {
					label: [
						'group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_3.5px)]',
					],
				},
			},
			{
				labelPlacement: 'inside',
				variant: 'underlined',
				size: 'lg',
				isMultiline: !1,
				class: {
					label: [
						'text-medium',
						'group-data-[filled-within=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]',
					],
				},
			},
			{
				labelPlacement: 'outside',
				size: 'sm',
				isMultiline: !1,
				class: {
					label: [
						'left-2',
						'text-tiny',
						'group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)]',
					],
					base: 'data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_8px)]',
				},
			},
			{
				labelPlacement: 'outside',
				size: 'md',
				isMultiline: !1,
				class: {
					label: [
						'left-3',
						'text-small',
						'group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]',
					],
					base: 'data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]',
				},
			},
			{
				labelPlacement: 'outside',
				size: 'lg',
				isMultiline: !1,
				class: {
					label: [
						'left-3',
						'text-medium',
						'group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_24px)]',
					],
					base: 'data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_12px)]',
				},
			},
			{
				labelPlacement: 'outside-left',
				size: 'sm',
				class: { label: 'group-data-[has-helper=true]:pt-2' },
			},
			{
				labelPlacement: 'outside-left',
				size: 'md',
				class: { label: 'group-data-[has-helper=true]:pt-3' },
			},
			{
				labelPlacement: 'outside-left',
				size: 'lg',
				class: { label: 'group-data-[has-helper=true]:pt-4' },
			},
			{
				labelPlacement: ['outside', 'outside-left'],
				isMultiline: !0,
				class: { inputWrapper: 'py-2' },
			},
			{ labelPlacement: 'outside', isMultiline: !0, class: { label: 'pb-1.5' } },
			{ labelPlacement: 'inside', isMultiline: !0, class: { label: 'pb-0.5', input: 'pt-0' } },
			{
				isMultiline: !0,
				disableAnimation: !1,
				class: { input: 'transition-height !duration-100 motion-reduce:transition-none' },
			},
			{
				labelPlacement: ['inside', 'outside'],
				class: { label: ['pe-2', 'max-w-full', 'text-ellipsis', 'overflow-hidden'] },
			},
			{
				isMultiline: !0,
				radius: 'full',
				class: { inputWrapper: 'data-[has-multiple-rows=true]:rounded-large' },
			},
		],
	}),
	qr = me({
		slots: {
			base: 'w-full relative flex flex-col gap-1 p-1',
			list: 'w-full flex flex-col gap-0.5 outline-none',
			emptyContent: [
				'h-10',
				'px-2',
				'py-1.5',
				'w-full',
				'h-full',
				'text-foreground-400',
				'text-start',
			],
		},
	}),
	St = me({
		slots: {
			base: [
				'flex',
				'group',
				'gap-2',
				'items-center',
				'justify-between',
				'relative',
				'px-2',
				'py-1.5',
				'w-full',
				'h-full',
				'box-border',
				'rounded-small',
				'subpixel-antialiased',
				'outline-none',
				'cursor-pointer',
				'tap-highlight-transparent',
				...ze,
				'data-[focus-visible=true]:dark:ring-offset-background-content1',
			],
			wrapper: 'w-full flex flex-col items-start justify-center',
			title: 'flex-1 text-small font-normal truncate',
			description: ['w-full', 'text-tiny', 'text-foreground-500', 'group-hover:text-current'],
			selectedIcon: ['text-inherit', 'w-3', 'h-3', 'flex-shrink-0'],
			shortcut: [
				'px-1',
				'py-0.5',
				'rounded',
				'font-sans',
				'text-foreground-500',
				'text-tiny',
				'border-small',
				'border-default-300',
				'group-hover:border-current',
			],
		},
		variants: {
			variant: {
				solid: { base: '' },
				bordered: { base: 'border-medium border-transparent bg-transparent' },
				light: { base: 'bg-transparent' },
				faded: {
					base: [
						'border-small border-transparent hover:border-default data-[hover=true]:bg-default-100',
						'data-[selectable=true]:focus:border-default data-[selectable=true]:focus:bg-default-100',
					],
				},
				flat: { base: '' },
				shadow: { base: 'data-[hover=true]:shadow-lg' },
			},
			color: { default: {}, primary: {}, secondary: {}, success: {}, warning: {}, danger: {} },
			showDivider: {
				true: {
					base: [
						'mb-1.5',
						"after:content-['']",
						'after:absolute',
						'after:-bottom-1',
						'after:left-0',
						'after:right-0',
						'after:h-divider',
						'after:bg-divider',
					],
				},
				false: {},
			},
			isDisabled: { true: { base: 'opacity-disabled pointer-events-none' } },
			disableAnimation: { true: {}, false: { base: 'data-[hover=true]:transition-colors' } },
		},
		defaultVariants: { variant: 'solid', color: 'default', disableAnimation: !1, showDivider: !1 },
		compoundVariants: [
			{
				variant: 'solid',
				color: 'default',
				class: {
					base: [
						'data-[hover=true]:bg-default',
						'data-[hover=true]:text-default-foreground',
						'data-[selectable=true]:focus:bg-default',
						'data-[selectable=true]:focus:text-default-foreground',
					],
				},
			},
			{
				variant: 'solid',
				color: 'primary',
				class: {
					base: [
						'data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground',
						'data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground',
					],
				},
			},
			{
				variant: 'solid',
				color: 'secondary',
				class: {
					base: [
						'data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground',
						'data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground',
					],
				},
			},
			{
				variant: 'solid',
				color: 'success',
				class: {
					base: [
						'data-[hover=true]:bg-success data-[hover=true]:text-success-foreground',
						'data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground',
					],
				},
			},
			{
				variant: 'solid',
				color: 'warning',
				class: {
					base: [
						'data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground',
						'data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground',
					],
				},
			},
			{
				variant: 'solid',
				color: 'danger',
				class: {
					base: [
						'data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground',
						'data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground',
					],
				},
			},
			{
				variant: 'shadow',
				color: 'default',
				class: {
					base: [
						'data-[hover=true]:shadow-default/50 data-[hover=true]:bg-default data-[hover=true]:text-default-foreground',
						'data-[selectable=true]:focus:shadow-default/50 data-[selectable=true]:focus:bg-default data-[selectable=true]:focus:text-default-foreground',
					],
				},
			},
			{
				variant: 'shadow',
				color: 'primary',
				class: {
					base: [
						'data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground',
						'data-[selectable=true]:focus:shadow-primary/30 data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground',
					],
				},
			},
			{
				variant: 'shadow',
				color: 'secondary',
				class: {
					base: [
						'data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground',
						'data-[selectable=true]:focus:shadow-secondary/30 data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground',
					],
				},
			},
			{
				variant: 'shadow',
				color: 'success',
				class: {
					base: [
						'data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground',
						'data-[selectable=true]:focus:shadow-success/30 data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground',
					],
				},
			},
			{
				variant: 'shadow',
				color: 'warning',
				class: {
					base: [
						'data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground',
						'data-[selectable=true]:focus:shadow-warning/30 data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground',
					],
				},
			},
			{
				variant: 'shadow',
				color: 'danger',
				class: {
					base: [
						'data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground',
						'data-[selectable=true]:focus:shadow-danger/30 data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground',
					],
				},
			},
			{
				variant: 'bordered',
				color: 'default',
				class: {
					base: ['data-[hover=true]:border-default', 'data-[selectable=true]:focus:border-default'],
				},
			},
			{
				variant: 'bordered',
				color: 'primary',
				class: {
					base: [
						'data-[hover=true]:border-primary data-[hover=true]:text-primary',
						'data-[selectable=true]:focus:border-primary data-[selectable=true]:focus:text-primary',
					],
				},
			},
			{
				variant: 'bordered',
				color: 'secondary',
				class: {
					base: [
						'data-[hover=true]:border-secondary data-[hover=true]:text-secondary',
						'data-[selectable=true]:focus:border-secondary data-[selectable=true]:focus:text-secondary',
					],
				},
			},
			{
				variant: 'bordered',
				color: 'success',
				class: {
					base: [
						'data-[hover=true]:border-success data-[hover=true]:text-success',
						'data-[selectable=true]:focus:border-success data-[selectable=true]:focus:text-success',
					],
				},
			},
			{
				variant: 'bordered',
				color: 'warning',
				class: {
					base: [
						'data-[hover=true]:border-warning data-[hover=true]:text-warning',
						'data-[selectable=true]:focus:border-warning data-[selectable=true]:focus:text-warning',
					],
				},
			},
			{
				variant: 'bordered',
				color: 'danger',
				class: {
					base: [
						'data-[hover=true]:border-danger data-[hover=true]:text-danger',
						'data-[selectable=true]:focus:border-danger data-[selectable=true]:focus:text-danger',
					],
				},
			},
			{
				variant: 'flat',
				color: 'default',
				class: {
					base: [
						'data-[hover=true]:bg-default/40',
						'data-[hover=true]:text-default-foreground',
						'data-[selectable=true]:focus:bg-default/40',
						'data-[selectable=true]:focus:text-default-foreground',
					],
				},
			},
			{
				variant: 'flat',
				color: 'primary',
				class: {
					base: [
						'data-[hover=true]:bg-primary/20 data-[hover=true]:text-primary',
						'data-[selectable=true]:focus:bg-primary/20 data-[selectable=true]:focus:text-primary',
					],
				},
			},
			{
				variant: 'flat',
				color: 'secondary',
				class: {
					base: [
						'data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary',
						'data-[selectable=true]:focus:bg-secondary/20 data-[selectable=true]:focus:text-secondary',
					],
				},
			},
			{
				variant: 'flat',
				color: 'success',
				class: {
					base: [
						'data-[hover=true]:bg-success/20 data-[hover=true]:text-success',
						'data-[selectable=true]:focus:bg-success/20 data-[selectable=true]:focus:text-success',
					],
				},
			},
			{
				variant: 'flat',
				color: 'warning',
				class: {
					base: [
						'data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning',
						'data-[selectable=true]:focus:bg-warning/20 data-[selectable=true]:focus:text-warning',
					],
				},
			},
			{
				variant: 'flat',
				color: 'danger',
				class: {
					base: [
						'data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger',
						'data-[selectable=true]:focus:bg-danger/20 data-[selectable=true]:focus:text-danger',
					],
				},
			},
			{
				variant: 'faded',
				color: 'default',
				class: {
					base: [
						'data-[hover=true]:text-default-foreground',
						'data-[selectable=true]:focus:text-default-foreground',
					],
				},
			},
			{
				variant: 'faded',
				color: 'primary',
				class: {
					base: ['data-[hover=true]:text-primary', 'data-[selectable=true]:focus:text-primary'],
				},
			},
			{
				variant: 'faded',
				color: 'secondary',
				class: {
					base: ['data-[hover=true]:text-secondary', 'data-[selectable=true]:focus:text-secondary'],
				},
			},
			{
				variant: 'faded',
				color: 'success',
				class: {
					base: ['data-[hover=true]:text-success', 'data-[selectable=true]:focus:text-success'],
				},
			},
			{
				variant: 'faded',
				color: 'warning',
				class: {
					base: ['data-[hover=true]:text-warning', 'data-[selectable=true]:focus:text-warning'],
				},
			},
			{
				variant: 'faded',
				color: 'danger',
				class: {
					base: ['data-[hover=true]:text-danger', 'data-[selectable=true]:focus:text-danger'],
				},
			},
			{
				variant: 'light',
				color: 'default',
				class: {
					base: [
						'data-[hover=true]:text-default-500',
						'data-[selectable=true]:focus:text-default-500',
					],
				},
			},
			{
				variant: 'light',
				color: 'primary',
				class: {
					base: ['data-[hover=true]:text-primary', 'data-[selectable=true]:focus:text-primary'],
				},
			},
			{
				variant: 'light',
				color: 'secondary',
				class: {
					base: ['data-[hover=true]:text-secondary', 'data-[selectable=true]:focus:text-secondary'],
				},
			},
			{
				variant: 'light',
				color: 'success',
				class: {
					base: ['data-[hover=true]:text-success', 'data-[selectable=true]:focus:text-success'],
				},
			},
			{
				variant: 'light',
				color: 'warning',
				class: {
					base: ['data-[hover=true]:text-warning', 'data-[selectable=true]:focus:text-warning'],
				},
			},
			{
				variant: 'light',
				color: 'danger',
				class: {
					base: ['data-[hover=true]:text-danger', 'data-[selectable=true]:focus:text-danger'],
				},
			},
		],
	}),
	Gr = me({
		slots: {
			base: 'relative mb-2',
			heading: 'pl-1 text-tiny text-foreground-500',
			group: 'data-[has-title=true]:pt-1',
			divider: 'mt-2',
		},
	}),
	Yr = me({
		base: 'shrink-0 bg-divider border-none',
		variants: { orientation: { horizontal: 'w-full h-divider', vertical: 'h-full w-divider' } },
		defaultVariants: { orientation: 'horizontal' },
	}),
	Xr = me({
		base: [
			'z-0',
			'group',
			'relative',
			'inline-flex',
			'items-center',
			'justify-center',
			'box-border',
			'appearance-none',
			'outline-none',
			'select-none',
			'whitespace-nowrap',
			'min-w-max',
			'font-normal',
			'subpixel-antialiased',
			'overflow-hidden',
			'tap-highlight-transparent',
			...ze,
		],
		variants: {
			variant: {
				solid: '',
				bordered: 'border-medium bg-transparent',
				light: 'bg-transparent',
				flat: '',
				faded: 'border-medium',
				shadow: '',
				ghost: 'border-medium bg-transparent',
			},
			size: {
				sm: 'px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2 rounded-small',
				md: 'px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium',
				lg: 'px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-large',
			},
			color: { default: '', primary: '', secondary: '', success: '', warning: '', danger: '' },
			radius: {
				none: 'rounded-none',
				sm: 'rounded-small',
				md: 'rounded-medium',
				lg: 'rounded-large',
				full: 'rounded-full',
			},
			fullWidth: { true: 'w-full' },
			isDisabled: { true: 'opacity-disabled pointer-events-none' },
			isInGroup: { true: '[&:not(:first-child):not(:last-child)]:rounded-none' },
			isIconOnly: { true: 'px-unit-0 !gap-unit-0', false: '[&>svg]:max-w-[theme(spacing.unit-8)]' },
			disableAnimation: {
				true: '!transition-none',
				false:
					'data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none',
			},
		},
		defaultVariants: {
			size: 'md',
			variant: 'solid',
			color: 'default',
			fullWidth: !1,
			isDisabled: !1,
			isInGroup: !1,
			disableAnimation: !1,
		},
		compoundVariants: [
			{ variant: 'solid', color: 'default', class: _.solid.default },
			{ variant: 'solid', color: 'primary', class: _.solid.primary },
			{ variant: 'solid', color: 'secondary', class: _.solid.secondary },
			{ variant: 'solid', color: 'success', class: _.solid.success },
			{ variant: 'solid', color: 'warning', class: _.solid.warning },
			{ variant: 'solid', color: 'danger', class: _.solid.danger },
			{ variant: 'shadow', color: 'default', class: _.shadow.default },
			{ variant: 'shadow', color: 'primary', class: _.shadow.primary },
			{ variant: 'shadow', color: 'secondary', class: _.shadow.secondary },
			{ variant: 'shadow', color: 'success', class: _.shadow.success },
			{ variant: 'shadow', color: 'warning', class: _.shadow.warning },
			{ variant: 'shadow', color: 'danger', class: _.shadow.danger },
			{ variant: 'bordered', color: 'default', class: _.bordered.default },
			{ variant: 'bordered', color: 'primary', class: _.bordered.primary },
			{ variant: 'bordered', color: 'secondary', class: _.bordered.secondary },
			{ variant: 'bordered', color: 'success', class: _.bordered.success },
			{ variant: 'bordered', color: 'warning', class: _.bordered.warning },
			{ variant: 'bordered', color: 'danger', class: _.bordered.danger },
			{ variant: 'flat', color: 'default', class: _.flat.default },
			{ variant: 'flat', color: 'primary', class: _.flat.primary },
			{ variant: 'flat', color: 'secondary', class: _.flat.secondary },
			{ variant: 'flat', color: 'success', class: _.flat.success },
			{ variant: 'flat', color: 'warning', class: _.flat.warning },
			{ variant: 'flat', color: 'danger', class: _.flat.danger },
			{ variant: 'faded', color: 'default', class: _.faded.default },
			{ variant: 'faded', color: 'primary', class: _.faded.primary },
			{ variant: 'faded', color: 'secondary', class: _.faded.secondary },
			{ variant: 'faded', color: 'success', class: _.faded.success },
			{ variant: 'faded', color: 'warning', class: _.faded.warning },
			{ variant: 'faded', color: 'danger', class: _.faded.danger },
			{
				variant: 'light',
				color: 'default',
				class: [_.light.default, 'data-[hover=true]:bg-default/40'],
			},
			{
				variant: 'light',
				color: 'primary',
				class: [_.light.primary, 'data-[hover=true]:bg-primary/20'],
			},
			{
				variant: 'light',
				color: 'secondary',
				class: [_.light.secondary, 'data-[hover=true]:bg-secondary/20'],
			},
			{
				variant: 'light',
				color: 'success',
				class: [_.light.success, 'data-[hover=true]:bg-success/20'],
			},
			{
				variant: 'light',
				color: 'warning',
				class: [_.light.warning, 'data-[hover=true]:bg-warning/20'],
			},
			{
				variant: 'light',
				color: 'danger',
				class: [_.light.danger, 'data-[hover=true]:bg-danger/20'],
			},
			{ variant: 'ghost', color: 'default', class: _.ghost.default },
			{ variant: 'ghost', color: 'primary', class: _.ghost.primary },
			{ variant: 'ghost', color: 'secondary', class: _.ghost.secondary },
			{ variant: 'ghost', color: 'success', class: _.ghost.success },
			{ variant: 'ghost', color: 'warning', class: _.ghost.warning },
			{ variant: 'ghost', color: 'danger', class: _.ghost.danger },
			{ isInGroup: !0, class: 'rounded-none first:rounded-s-medium last:rounded-e-medium' },
			{
				isInGroup: !0,
				size: 'sm',
				class: 'rounded-none first:rounded-s-small last:rounded-e-small',
			},
			{
				isInGroup: !0,
				size: 'md',
				class: 'rounded-none first:rounded-s-medium last:rounded-e-medium',
			},
			{
				isInGroup: !0,
				size: 'lg',
				class: 'rounded-none first:rounded-s-large last:rounded-e-large',
			},
			{
				isInGroup: !0,
				isRounded: !0,
				class: 'rounded-none first:rounded-s-full last:rounded-e-full',
			},
			{
				isInGroup: !0,
				radius: 'none',
				class: 'rounded-none first:rounded-s-none last:rounded-e-none',
			},
			{
				isInGroup: !0,
				radius: 'sm',
				class: 'rounded-none first:rounded-s-small last:rounded-e-small',
			},
			{
				isInGroup: !0,
				radius: 'md',
				class: 'rounded-none first:rounded-s-medium last:rounded-e-medium',
			},
			{
				isInGroup: !0,
				radius: 'lg',
				class: 'rounded-none first:rounded-s-large last:rounded-e-large',
			},
			{
				isInGroup: !0,
				radius: 'full',
				class: 'rounded-none first:rounded-s-full last:rounded-e-full',
			},
			{ isInGroup: !0, variant: ['ghost', 'bordered'], color: 'default', className: Me.default },
			{ isInGroup: !0, variant: ['ghost', 'bordered'], color: 'primary', className: Me.primary },
			{
				isInGroup: !0,
				variant: ['ghost', 'bordered'],
				color: 'secondary',
				className: Me.secondary,
			},
			{ isInGroup: !0, variant: ['ghost', 'bordered'], color: 'success', className: Me.success },
			{ isInGroup: !0, variant: ['ghost', 'bordered'], color: 'warning', className: Me.warning },
			{ isInGroup: !0, variant: ['ghost', 'bordered'], color: 'danger', className: Me.danger },
			{ isIconOnly: !0, size: 'sm', class: 'min-w-unit-8 w-unit-8 h-unit-8' },
			{ isIconOnly: !0, size: 'md', class: 'min-w-unit-10 w-unit-10 h-unit-10' },
			{ isIconOnly: !0, size: 'lg', class: 'min-w-unit-12 w-unit-12 h-unit-12' },
			{
				variant: ['solid', 'faded', 'flat', 'bordered', 'shadow'],
				class: 'data-[hover=true]:opacity-hover',
			},
		],
	});
me({
	base: 'inline-flex items-center justify-center h-auto',
	variants: { fullWidth: { true: 'w-full' } },
	defaultVariants: { fullWidth: !1 },
});
var Zr = (...a) => {
		let e = ' ';
		for (const t of a)
			if (typeof t == 'string' && t.length > 0) {
				e = t;
				break;
			}
		return e;
	},
	Jr = (a) => a.charAt(0).toUpperCase() + a.slice(1);
function Qr(a) {
	return `${a}-${Math.floor(Math.random() * 1e6)}`;
}
function el(a) {
	for (const e in a) e.startsWith('on') && delete a[e];
	return a;
}
var tl = new Set([
		'id',
		'type',
		'style',
		'title',
		'role',
		'tabIndex',
		'htmlFor',
		'width',
		'height',
		'abbr',
		'accept',
		'acceptCharset',
		'accessKey',
		'action',
		'allowFullScreen',
		'allowTransparency',
		'alt',
		'async',
		'autoComplete',
		'autoFocus',
		'autoPlay',
		'cellPadding',
		'cellSpacing',
		'challenge',
		'charset',
		'checked',
		'cite',
		'class',
		'className',
		'cols',
		'colSpan',
		'command',
		'content',
		'contentEditable',
		'contextMenu',
		'controls',
		'coords',
		'crossOrigin',
		'data',
		'dateTime',
		'default',
		'defer',
		'dir',
		'disabled',
		'download',
		'draggable',
		'dropzone',
		'encType',
		'for',
		'form',
		'formAction',
		'formEncType',
		'formMethod',
		'formNoValidate',
		'formTarget',
		'frameBorder',
		'headers',
		'hidden',
		'high',
		'href',
		'hrefLang',
		'httpEquiv',
		'icon',
		'inputMode',
		'isMap',
		'itemId',
		'itemProp',
		'itemRef',
		'itemScope',
		'itemType',
		'kind',
		'label',
		'lang',
		'list',
		'loop',
		'manifest',
		'max',
		'maxLength',
		'media',
		'mediaGroup',
		'method',
		'min',
		'minLength',
		'multiple',
		'muted',
		'name',
		'noValidate',
		'open',
		'optimum',
		'pattern',
		'ping',
		'placeholder',
		'poster',
		'preload',
		'radioGroup',
		'referrerPolicy',
		'readOnly',
		'rel',
		'required',
		'rows',
		'rowSpan',
		'sandbox',
		'scope',
		'scoped',
		'scrolling',
		'seamless',
		'selected',
		'shape',
		'size',
		'sizes',
		'slot',
		'sortable',
		'span',
		'spellCheck',
		'src',
		'srcDoc',
		'srcSet',
		'start',
		'step',
		'target',
		'translate',
		'typeMustMatch',
		'useMap',
		'value',
		'wmode',
		'wrap',
	]),
	al = new Set([
		'onCopy',
		'onCut',
		'onPaste',
		'onLoad',
		'onError',
		'onWheel',
		'onScroll',
		'onCompositionEnd',
		'onCompositionStart',
		'onCompositionUpdate',
		'onKeyDown',
		'onKeyPress',
		'onKeyUp',
		'onFocus',
		'onBlur',
		'onChange',
		'onInput',
		'onSubmit',
		'onClick',
		'onContextMenu',
		'onDoubleClick',
		'onDrag',
		'onDragEnd',
		'onDragEnter',
		'onDragExit',
		'onDragLeave',
		'onDragOver',
		'onDragStart',
		'onDrop',
		'onMouseDown',
		'onMouseEnter',
		'onMouseLeave',
		'onMouseMove',
		'onMouseOut',
		'onMouseOver',
		'onMouseUp',
		'onPointerDown',
		'onPointerEnter',
		'onPointerLeave',
		'onPointerUp',
		'onSelect',
		'onTouchCancel',
		'onTouchEnd',
		'onTouchMove',
		'onTouchStart',
		'onAnimationStart',
		'onAnimationEnd',
		'onAnimationIteration',
		'onTransitionEnd',
	]),
	rl = /^(data-.*)$/,
	ll = /^(aria-.*)$/,
	Qe = /^(on[A-Z].*)$/;
function $e(a, e = {}) {
	let { labelable: t = !0, enabled: r = !0, propNames: s, omitPropNames: l, omitEventNames: n } = e,
		d = {};
	if (!r) return a;
	for (const o in a)
		l?.has(o) ||
			(n?.has(o) && Qe.test(o)) ||
			(Qe.test(o) && !al.has(o)) ||
			(((Object.prototype.hasOwnProperty.call(a, o) &&
				(tl.has(o) || (t && ll.test(o)) || s?.has(o) || rl.test(o))) ||
				Qe.test(o)) &&
				(d[o] = a[o]));
	return d;
}
function nt(a) {
	return vr() ? a.altKey : a.ctrlKey;
}
function Ie(a) {
	return Tt() ? a.metaKey : a.ctrlKey;
}
const sl = 1e3;
function Zt(a) {
	let { keyboardDelegate: e, selectionManager: t, onTypeSelect: r } = a,
		s = u.useRef({ search: '', timeout: null }).current,
		l = (n) => {
			let d = nl(n.key);
			if (!d || n.ctrlKey || n.metaKey || !n.currentTarget.contains(n.target)) return;
			d === ' ' &&
				s.search.trim().length > 0 &&
				(n.preventDefault(), 'continuePropagation' in n || n.stopPropagation()),
				(s.search += d);
			let o = e.getKeyForSearch(s.search, t.focusedKey);
			o == null && (o = e.getKeyForSearch(s.search)),
				o != null && (t.setFocusedKey(o), r && r(o)),
				clearTimeout(s.timeout),
				(s.timeout = setTimeout(() => {
					s.search = '';
				}, sl));
		};
	return { typeSelectProps: { onKeyDownCapture: e.getKeyForSearch ? l : null } };
}
function nl(a) {
	return a.length === 1 || !/^[A-Z]/i.test(a) ? a : '';
}
function ol(a) {
	let {
			selectionManager: e,
			keyboardDelegate: t,
			ref: r,
			autoFocus: s = !1,
			shouldFocusWrap: l = !1,
			disallowEmptySelection: n = !1,
			disallowSelectAll: d = !1,
			selectOnFocus: o = e.selectionBehavior === 'replace',
			disallowTypeAhead: i = !1,
			shouldUseVirtualFocus: p,
			allowsTabNavigation: c = !1,
			isVirtualized: f,
			scrollRef: b = r,
			linkBehavior: x = 'action',
		} = a,
		{ direction: y } = gr(),
		m = Ot(),
		$ = (h) => {
			if ((h.altKey && h.key === 'Tab' && h.preventDefault(), !r.current.contains(h.target)))
				return;
			const E = (I, H) => {
				if (I != null) {
					if (e.isLink(I) && x === 'selection' && o && !nt(h)) {
						Nr.flushSync(() => {
							e.setFocusedKey(I, H);
						});
						let G = b.current.querySelector(`[data-key="${I}"]`);
						m.open(G, h);
						return;
					}
					if ((e.setFocusedKey(I, H), e.isLink(I) && x === 'override')) return;
					h.shiftKey && e.selectionMode === 'multiple'
						? e.extendSelection(I)
						: o && !nt(h) && e.replaceSelection(I);
				}
			};
			switch (h.key) {
				case 'ArrowDown':
					if (t.getKeyBelow) {
						var O, W;
						h.preventDefault();
						let I =
							e.focusedKey != null
								? t.getKeyBelow(e.focusedKey)
								: (O = t.getFirstKey) === null || O === void 0
								  ? void 0
								  : O.call(t);
						I == null &&
							l &&
							(I = (W = t.getFirstKey) === null || W === void 0 ? void 0 : W.call(t, e.focusedKey)),
							E(I);
					}
					break;
				case 'ArrowUp':
					if (t.getKeyAbove) {
						var z, B;
						h.preventDefault();
						let I =
							e.focusedKey != null
								? t.getKeyAbove(e.focusedKey)
								: (z = t.getLastKey) === null || z === void 0
								  ? void 0
								  : z.call(t);
						I == null &&
							l &&
							(I = (B = t.getLastKey) === null || B === void 0 ? void 0 : B.call(t, e.focusedKey)),
							E(I);
					}
					break;
				case 'ArrowLeft':
					if (t.getKeyLeftOf) {
						var q, S;
						h.preventDefault();
						let I = t.getKeyLeftOf(e.focusedKey);
						I == null &&
							l &&
							(I =
								y === 'rtl'
									? (q = t.getFirstKey) === null || q === void 0
										? void 0
										: q.call(t, e.focusedKey)
									: (S = t.getLastKey) === null || S === void 0
									  ? void 0
									  : S.call(t, e.focusedKey)),
							E(I, y === 'rtl' ? 'first' : 'last');
					}
					break;
				case 'ArrowRight':
					if (t.getKeyRightOf) {
						var V, w;
						h.preventDefault();
						let I = t.getKeyRightOf(e.focusedKey);
						I == null &&
							l &&
							(I =
								y === 'rtl'
									? (V = t.getLastKey) === null || V === void 0
										? void 0
										: V.call(t, e.focusedKey)
									: (w = t.getFirstKey) === null || w === void 0
									  ? void 0
									  : w.call(t, e.focusedKey)),
							E(I, y === 'rtl' ? 'last' : 'first');
					}
					break;
				case 'Home':
					if (t.getFirstKey) {
						h.preventDefault();
						let I = t.getFirstKey(e.focusedKey, Ie(h));
						e.setFocusedKey(I),
							Ie(h) && h.shiftKey && e.selectionMode === 'multiple'
								? e.extendSelection(I)
								: o && e.replaceSelection(I);
					}
					break;
				case 'End':
					if (t.getLastKey) {
						h.preventDefault();
						let I = t.getLastKey(e.focusedKey, Ie(h));
						e.setFocusedKey(I),
							Ie(h) && h.shiftKey && e.selectionMode === 'multiple'
								? e.extendSelection(I)
								: o && e.replaceSelection(I);
					}
					break;
				case 'PageDown':
					if (t.getKeyPageBelow) {
						h.preventDefault();
						let I = t.getKeyPageBelow(e.focusedKey);
						E(I);
					}
					break;
				case 'PageUp':
					if (t.getKeyPageAbove) {
						h.preventDefault();
						let I = t.getKeyPageAbove(e.focusedKey);
						E(I);
					}
					break;
				case 'a':
					Ie(h) &&
						e.selectionMode === 'multiple' &&
						d !== !0 &&
						(h.preventDefault(), e.selectAll());
					break;
				case 'Escape':
					h.preventDefault(), n || e.clearSelection();
					break;
				case 'Tab':
					if (!c) {
						if (h.shiftKey) r.current.focus();
						else {
							let I = yr(r.current, { tabbable: !0 }),
								H,
								G;
							do (G = I.lastChild()), G && (H = G);
							while (G);
							H && !H.contains(document.activeElement) && bt(H);
						}
						break;
					}
			}
		},
		v = u.useRef({ top: 0, left: 0 });
	br(
		b,
		'scroll',
		f
			? null
			: () => {
					v.current = { top: b.current.scrollTop, left: b.current.scrollLeft };
			  }
	);
	let C = (h) => {
			if (e.isFocused) {
				h.currentTarget.contains(h.target) || e.setFocused(!1);
				return;
			}
			if (h.currentTarget.contains(h.target)) {
				if ((e.setFocused(!0), e.focusedKey == null)) {
					let W = (B) => {
							B != null && (e.setFocusedKey(B), o && e.replaceSelection(B));
						},
						z = h.relatedTarget;
					var E, O;
					z && h.currentTarget.compareDocumentPosition(z) & Node.DOCUMENT_POSITION_FOLLOWING
						? W((E = e.lastSelectedKey) !== null && E !== void 0 ? E : t.getLastKey())
						: W((O = e.firstSelectedKey) !== null && O !== void 0 ? O : t.getFirstKey());
				} else
					f || ((b.current.scrollTop = v.current.top), (b.current.scrollLeft = v.current.left));
				if (!f && e.focusedKey != null) {
					let W = b.current.querySelector(`[data-key="${e.focusedKey}"]`);
					W &&
						(W.contains(document.activeElement) || bt(W),
						gt() === 'keyboard' && pt(W, { containingElement: r.current }));
				}
			}
		},
		P = (h) => {
			h.currentTarget.contains(h.relatedTarget) || e.setFocused(!1);
		};
	const D = u.useRef(s);
	u.useEffect(() => {
		if (D.current) {
			let h = null;
			s === 'first' && (h = t.getFirstKey()), s === 'last' && (h = t.getLastKey());
			let E = e.selectedKeys;
			E.size && (h = E.values().next().value),
				e.setFocused(!0),
				e.setFocusedKey(h),
				h == null && !p && lt(r.current);
		}
		D.current = !1;
	}, []);
	let k = u.useRef(e.focusedKey);
	u.useEffect(() => {
		let h = gt();
		if (e.isFocused && e.focusedKey != null && b?.current) {
			let E = b.current.querySelector(`[data-key="${e.focusedKey}"]`);
			E && h === 'keyboard' && (f || hr(b.current, E), pt(E, { containingElement: r.current }));
		}
		e.isFocused && e.focusedKey == null && k.current != null && lt(r.current),
			(k.current = e.focusedKey);
	}, [f, b, e.focusedKey, e.isFocused, r]);
	let A = {
			onKeyDown: $,
			onFocus: C,
			onBlur: P,
			onMouseDown(h) {
				b.current === h.target && h.preventDefault();
			},
		},
		{ typeSelectProps: F } = Zt({ keyboardDelegate: t, selectionManager: e });
	i || (A = j(F, A));
	let R;
	return p || (R = e.focusedKey == null ? 0 : -1), { collectionProps: { ...A, tabIndex: R } };
}
function il(a) {
	let {
			selectionManager: e,
			key: t,
			ref: r,
			shouldSelectOnPressUp: s,
			shouldUseVirtualFocus: l,
			focus: n,
			isDisabled: d,
			onAction: o,
			allowsDifferentPressOrigin: i,
			linkBehavior: p = 'action',
		} = a,
		c = Ot(),
		f = (S) => {
			if (S.pointerType === 'keyboard' && nt(S)) e.toggleSelection(t);
			else {
				if (e.selectionMode === 'none') return;
				if (e.isLink(t)) {
					if (p === 'selection') {
						c.open(r.current, S), e.setSelectedKeys(e.selectedKeys);
						return;
					} else if (p === 'override' || p === 'none') return;
				}
				e.selectionMode === 'single'
					? e.isSelected(t) && !e.disallowEmptySelection
						? e.toggleSelection(t)
						: e.replaceSelection(t)
					: S && S.shiftKey
					  ? e.extendSelection(t)
					  : e.selectionBehavior === 'toggle' ||
					      (S && (Ie(S) || S.pointerType === 'touch' || S.pointerType === 'virtual'))
					    ? e.toggleSelection(t)
					    : e.replaceSelection(t);
			}
		};
	u.useEffect(() => {
		t === e.focusedKey &&
			e.isFocused &&
			!l &&
			(n ? n() : document.activeElement !== r.current && lt(r.current));
	}, [r, t, e.focusedKey, e.childFocusStrategy, e.isFocused, l]),
		(d = d || e.isDisabled(t));
	let b = {};
	!l && !d
		? (b = {
				tabIndex: t === e.focusedKey ? 0 : -1,
				onFocus(S) {
					S.target === r.current && e.setFocusedKey(t);
				},
		  })
		: d &&
		  (b.onMouseDown = (S) => {
				S.preventDefault();
		  });
	let x = e.isLink(t) && p === 'override',
		y = e.isLink(t) && p !== 'selection' && p !== 'none',
		m = !d && e.canSelectItem(t) && !x,
		$ = (o || y) && !d,
		v = $ && (e.selectionBehavior === 'replace' ? !m : !m || e.isEmpty),
		C = $ && m && e.selectionBehavior === 'replace',
		P = v || C,
		D = u.useRef(null),
		k = P && m,
		A = u.useRef(!1),
		F = u.useRef(!1),
		R = (S) => {
			o && o(), y && c.open(r.current, S);
		},
		h = {};
	s
		? ((h.onPressStart = (S) => {
				(D.current = S.pointerType),
					(A.current = k),
					S.pointerType === 'keyboard' && (!P || Ct()) && f(S);
		  }),
		  i
				? ((h.onPressUp = v
						? null
						: (S) => {
								S.pointerType !== 'keyboard' && m && f(S);
						  }),
				  (h.onPress = v ? R : null))
				: (h.onPress = (S) => {
						if (v || (C && S.pointerType !== 'mouse')) {
							if (S.pointerType === 'keyboard' && !$t()) return;
							R(S);
						} else S.pointerType !== 'keyboard' && m && f(S);
				  }))
		: ((h.onPressStart = (S) => {
				(D.current = S.pointerType),
					(A.current = k),
					(F.current = v),
					m &&
						((S.pointerType === 'mouse' && !v) || (S.pointerType === 'keyboard' && (!$ || Ct()))) &&
						f(S);
		  }),
		  (h.onPress = (S) => {
				(S.pointerType === 'touch' ||
					S.pointerType === 'pen' ||
					S.pointerType === 'virtual' ||
					(S.pointerType === 'keyboard' && P && $t()) ||
					(S.pointerType === 'mouse' && F.current)) &&
					(P ? R(S) : m && f(S));
		  })),
		(b['data-key'] = t),
		(h.preventFocusOnPress = l);
	let { pressProps: E, isPressed: O } = jt(h),
		W = C
			? (S) => {
					D.current === 'mouse' && (S.stopPropagation(), S.preventDefault(), R(S));
			  }
			: void 0,
		{ longPressProps: z } = Lt({
			isDisabled: !k,
			onLongPress(S) {
				S.pointerType === 'touch' && (f(S), e.setSelectionBehavior('toggle'));
			},
		}),
		B = (S) => {
			D.current === 'touch' && A.current && S.preventDefault();
		},
		q = e.isLink(t)
			? (S) => {
					mr.isOpening || S.preventDefault();
			  }
			: void 0;
	return {
		itemProps: j(b, m || v ? E : {}, k ? z : {}, {
			onDoubleClick: W,
			onDragStartCapture: B,
			onClick: q,
		}),
		isPressed: O,
		isSelected: e.isSelected(t),
		isFocused: e.isFocused && e.focusedKey === t,
		isDisabled: d,
		allowsSelection: m,
		hasAction: P,
	};
}
function $t() {
	let a = window.event;
	return a?.key === 'Enter';
}
function Ct() {
	let a = window.event;
	return a?.key === ' ' || a?.code === 'Space';
}
class Jt {
	getNextKey(e) {
		for (e = this.collection.getKeyAfter(e); e != null; ) {
			if (this.collection.getItem(e).type === 'item' && !this.disabledKeys.has(e)) return e;
			e = this.collection.getKeyAfter(e);
		}
		return null;
	}
	getPreviousKey(e) {
		for (e = this.collection.getKeyBefore(e); e != null; ) {
			if (this.collection.getItem(e).type === 'item' && !this.disabledKeys.has(e)) return e;
			e = this.collection.getKeyBefore(e);
		}
		return null;
	}
	findKey(e, t, r) {
		let s = this.getItem(e);
		if (!s) return null;
		let l = s.getBoundingClientRect();
		do (e = t(e)), (s = this.getItem(e));
		while (s && r(l, s.getBoundingClientRect()));
		return e;
	}
	isSameRow(e, t) {
		return e.top === t.top || e.left !== t.left;
	}
	isSameColumn(e, t) {
		return e.left === t.left || e.top !== t.top;
	}
	getKeyBelow(e) {
		return this.layout === 'grid' && this.orientation === 'vertical'
			? this.findKey(e, (t) => this.getNextKey(t), this.isSameRow)
			: this.getNextKey(e);
	}
	getKeyAbove(e) {
		return this.layout === 'grid' && this.orientation === 'vertical'
			? this.findKey(e, (t) => this.getPreviousKey(t), this.isSameRow)
			: this.getPreviousKey(e);
	}
	getNextColumn(e, t) {
		return t ? this.getPreviousKey(e) : this.getNextKey(e);
	}
	getKeyRightOf(e) {
		return this.layout === 'grid'
			? this.orientation === 'vertical'
				? this.getNextColumn(e, this.direction === 'rtl')
				: this.findKey(e, (t) => this.getNextColumn(t, this.direction === 'rtl'), this.isSameColumn)
			: this.orientation === 'horizontal'
			  ? this.getNextColumn(e, this.direction === 'rtl')
			  : null;
	}
	getKeyLeftOf(e) {
		return this.layout === 'grid'
			? this.orientation === 'vertical'
				? this.getNextColumn(e, this.direction === 'ltr')
				: this.findKey(e, (t) => this.getNextColumn(t, this.direction === 'ltr'), this.isSameColumn)
			: this.orientation === 'horizontal'
			  ? this.getNextColumn(e, this.direction === 'ltr')
			  : null;
	}
	getFirstKey() {
		let e = this.collection.getFirstKey();
		for (; e != null; ) {
			if (this.collection.getItem(e).type === 'item' && !this.disabledKeys.has(e)) return e;
			e = this.collection.getKeyAfter(e);
		}
		return null;
	}
	getLastKey() {
		let e = this.collection.getLastKey();
		for (; e != null; ) {
			if (this.collection.getItem(e).type === 'item' && !this.disabledKeys.has(e)) return e;
			e = this.collection.getKeyBefore(e);
		}
		return null;
	}
	getItem(e) {
		return this.ref.current.querySelector(`[data-key="${e}"]`);
	}
	getKeyPageAbove(e) {
		let t = this.ref.current,
			r = this.getItem(e);
		if (!r) return null;
		if (!ft(t)) return this.getFirstKey();
		let s = t.getBoundingClientRect(),
			l = r.getBoundingClientRect();
		if (this.orientation === 'horizontal') {
			let n = s.x - t.scrollLeft,
				d = Math.max(0, l.x - n + l.width - s.width);
			for (; r && l.x - n > d; )
				(e = this.getKeyAbove(e)),
					(r = e == null ? null : this.getItem(e)),
					(l = r?.getBoundingClientRect());
		} else {
			let n = s.y - t.scrollTop,
				d = Math.max(0, l.y - n + l.height - s.height);
			for (; r && l.y - n > d; )
				(e = this.getKeyAbove(e)),
					(r = e == null ? null : this.getItem(e)),
					(l = r?.getBoundingClientRect());
		}
		return e ?? this.getFirstKey();
	}
	getKeyPageBelow(e) {
		let t = this.ref.current,
			r = this.getItem(e);
		if (!r) return null;
		if (!ft(t)) return this.getLastKey();
		let s = t.getBoundingClientRect(),
			l = r.getBoundingClientRect();
		if (this.orientation === 'horizontal') {
			let n = s.x - t.scrollLeft,
				d = Math.min(t.scrollWidth, l.x - n - l.width + s.width);
			for (; r && l.x - n < d; )
				(e = this.getKeyBelow(e)),
					(r = e == null ? null : this.getItem(e)),
					(l = r?.getBoundingClientRect());
		} else {
			let n = s.y - t.scrollTop,
				d = Math.min(t.scrollHeight, l.y - n - l.height + s.height);
			for (; r && l.y - n < d; )
				(e = this.getKeyBelow(e)),
					(r = e == null ? null : this.getItem(e)),
					(l = r?.getBoundingClientRect());
		}
		return e ?? this.getLastKey();
	}
	getKeyForSearch(e, t) {
		if (!this.collator) return null;
		let r = this.collection,
			s = t || this.getFirstKey();
		for (; s != null; ) {
			let l = r.getItem(s),
				n = l.textValue.slice(0, e.length);
			if (l.textValue && this.collator.compare(n, e) === 0) return s;
			s = this.getKeyBelow(s);
		}
		return null;
	}
	constructor(...e) {
		if (e.length === 1) {
			let t = e[0];
			(this.collection = t.collection),
				(this.ref = t.ref),
				(this.collator = t.collator),
				(this.disabledKeys = t.disabledKeys || new Set()),
				(this.orientation = t.orientation),
				(this.direction = t.direction),
				(this.layout = t.layout || 'stack');
		} else
			(this.collection = e[0]),
				(this.disabledKeys = e[1]),
				(this.ref = e[2]),
				(this.collator = e[3]),
				(this.layout = 'stack'),
				(this.orientation = 'vertical');
		this.layout === 'stack' &&
			this.orientation === 'vertical' &&
			((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
	}
}
function dl(a) {
	let { selectionManager: e, collection: t, disabledKeys: r, ref: s, keyboardDelegate: l } = a,
		n = Wt({ usage: 'search', sensitivity: 'base' }),
		d = e.disabledBehavior,
		o = u.useMemo(
			() => l || new Jt(t, d === 'selection' ? new Set() : r, s, n),
			[l, t, r, s, n, d]
		),
		{ collectionProps: i } = ol({ ...a, ref: s, selectionManager: e, keyboardDelegate: o });
	return { listProps: i };
}
var ul = (a) =>
		g.jsx('svg', {
			'aria-hidden': 'true',
			focusable: 'false',
			height: '1em',
			role: 'presentation',
			viewBox: '0 0 24 24',
			width: '1em',
			...a,
			children: g.jsx('path', {
				d: 'M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z',
				fill: 'currentColor',
			}),
		}),
	cl = ({ strokeWidth: a = 1.5, ...e }) =>
		g.jsx('svg', {
			'aria-hidden': 'true',
			fill: 'none',
			focusable: 'false',
			height: '1em',
			role: 'presentation',
			stroke: 'currentColor',
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
			strokeWidth: a,
			viewBox: '0 0 24 24',
			width: '1em',
			...e,
			children: g.jsx('path', { d: 'm6 9 6 6 6-6' }),
		});
function Qt(a) {
	return null;
}
Qt.getCollectionNode = function* (e, t) {
	let { childItems: r, title: s, children: l } = e,
		n = e.title || e.children,
		d = e.textValue || (typeof n == 'string' ? n : '') || e['aria-label'] || '';
	!d &&
		!t?.suppressTextValueWarning &&
		console.warn(
			'<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.'
		),
		yield {
			type: 'item',
			props: e,
			rendered: n,
			textValue: d,
			'aria-label': e['aria-label'],
			hasChildNodes: fl(e),
			*childNodes() {
				if (r) for (let o of r) yield { type: 'item', value: o };
				else if (s) {
					let o = [];
					Te.Children.forEach(l, (i) => {
						o.push({ type: 'item', element: i });
					}),
						yield* o;
				}
			},
		};
};
function fl(a) {
	return a.hasChildItems != null
		? a.hasChildItems
		: !!(a.childItems || (a.title && Te.Children.count(a.children) > 0));
}
let pl = Qt;
class gl {
	build(e, t) {
		return (this.context = t), Kt(() => this.iterateCollection(e));
	}
	*iterateCollection(e) {
		let { children: t, items: r } = e;
		if (typeof t == 'function') {
			if (!r) throw new Error('props.children was a function but props.items is missing');
			for (let s of e.items) yield* this.getFullNode({ value: s }, { renderer: t });
		} else {
			let s = [];
			Te.Children.forEach(t, (n) => {
				s.push(n);
			});
			let l = 0;
			for (let n of s) {
				let d = this.getFullNode({ element: n, index: l }, {});
				for (let o of d) l++, yield o;
			}
		}
	}
	getKey(e, t, r, s) {
		if (e.key != null) return e.key;
		if (t.type === 'cell' && t.key != null) return `${s}${t.key}`;
		let l = t.value;
		if (l != null) {
			var n;
			let d = (n = l.key) !== null && n !== void 0 ? n : l.id;
			if (d == null) throw new Error('No key found for item');
			return d;
		}
		return s ? `${s}.${t.index}` : `$.${t.index}`;
	}
	getChildState(e, t) {
		return { renderer: t.renderer || e.renderer };
	}
	*getFullNode(e, t, r, s) {
		let l = e.element;
		if (!l && e.value && t && t.renderer) {
			let o = this.cache.get(e.value);
			if (o && (!o.shouldInvalidate || !o.shouldInvalidate(this.context))) {
				(o.index = e.index), (o.parentKey = s ? s.key : null), yield o;
				return;
			}
			l = t.renderer(e.value);
		}
		if (Te.isValidElement(l)) {
			let o = l.type;
			if (typeof o != 'function' && typeof o.getCollectionNode != 'function') {
				let f = typeof l.type == 'function' ? l.type.name : l.type;
				throw new Error(`Unknown element <${f}> in collection.`);
			}
			let i = o.getCollectionNode(l.props, this.context),
				p = e.index,
				c = i.next();
			for (; !c.done && c.value; ) {
				let f = c.value;
				e.index = p;
				let b = f.key;
				b || (b = f.element ? null : this.getKey(l, e, t, r));
				let y = [
					...this.getFullNode(
						{ ...f, key: b, index: p, wrapper: bl(e.wrapper, f.wrapper) },
						this.getChildState(t, f),
						r ? `${r}${l.key}` : l.key,
						s
					),
				];
				for (let m of y) {
					if (
						((m.value = f.value || e.value),
						m.value && this.cache.set(m.value, m),
						e.type && m.type !== e.type)
					)
						throw new Error(
							`Unsupported type <${et(m.type)}> in <${et(s.type)}>. Only <${et(
								e.type
							)}> is supported.`
						);
					p++, yield m;
				}
				c = i.next(y);
			}
			return;
		}
		if (e.key == null) return;
		let n = this,
			d = {
				type: e.type,
				props: e.props,
				key: e.key,
				parentKey: s ? s.key : null,
				value: e.value,
				level: s ? s.level + 1 : 0,
				index: e.index,
				rendered: e.rendered,
				textValue: e.textValue,
				'aria-label': e['aria-label'],
				wrapper: e.wrapper,
				shouldInvalidate: e.shouldInvalidate,
				hasChildNodes: e.hasChildNodes,
				childNodes: Kt(function* () {
					if (!e.hasChildNodes) return;
					let o = 0;
					for (let i of e.childNodes()) {
						i.key != null && (i.key = `${d.key}${i.key}`), (i.index = o);
						let p = n.getFullNode(i, n.getChildState(t, i), d.key, d);
						for (let c of p) o++, yield c;
					}
				}),
			};
		yield d;
	}
	constructor() {
		this.cache = new WeakMap();
	}
}
function Kt(a) {
	let e = [],
		t = null;
	return {
		*[Symbol.iterator]() {
			for (let r of e) yield r;
			t || (t = a());
			for (let r of t) e.push(r), yield r;
		},
	};
}
function bl(a, e) {
	if (a && e) return (t) => a(e(t));
	if (a) return a;
	if (e) return e;
}
function et(a) {
	return a[0].toUpperCase() + a.slice(1);
}
function hl(a, e, t) {
	let r = u.useMemo(() => new gl(), []),
		{ children: s, items: l, collection: n } = a;
	return u.useMemo(() => {
		if (n) return n;
		let o = r.build({ children: s, items: l }, t);
		return e(o);
	}, [r, s, l, n, t, e]);
}
function ea(a, e) {
	return typeof e.getChildren == 'function' ? e.getChildren(a.key) : a.childNodes;
}
function ml(a) {
	return vl(a, 0);
}
function vl(a, e) {
	if (e < 0) return;
	let t = 0;
	for (let r of a) {
		if (t === e) return r;
		t++;
	}
}
function tt(a, e, t) {
	if (e.parentKey === t.parentKey) return e.index - t.index;
	let r = [...Mt(a, e), e],
		s = [...Mt(a, t), t],
		l = r.slice(0, s.length).findIndex((n, d) => n !== s[d]);
	return l !== -1
		? ((e = r[l]), (t = s[l]), e.index - t.index)
		: r.findIndex((n) => n === t) >= 0
		  ? 1
		  : (s.findIndex((n) => n === e) >= 0, -1);
}
function Mt(a, e) {
	let t = [];
	for (; e?.parentKey != null; ) (e = a.getItem(e.parentKey)), t.unshift(e);
	return t;
}
const It = new WeakMap();
function yl(a) {
	let e = It.get(a);
	if (e != null) return e;
	e = 0;
	let t = (r) => {
		for (let s of r) s.type === 'section' ? t(ea(s, a)) : e++;
	};
	return t(a), It.set(a, e), e;
}
class he extends Set {
	constructor(e, t, r) {
		super(e),
			e instanceof he
				? ((this.anchorKey = t || e.anchorKey), (this.currentKey = r || e.currentKey))
				: ((this.anchorKey = t), (this.currentKey = r));
	}
}
function xl(a, e) {
	if (a.size !== e.size) return !1;
	for (let t of a) if (!e.has(t)) return !1;
	return !0;
}
function wl(a) {
	let {
			selectionMode: e = 'none',
			disallowEmptySelection: t,
			allowDuplicateSelectionEvents: r,
			selectionBehavior: s = 'toggle',
			disabledBehavior: l = 'all',
		} = a,
		n = u.useRef(!1),
		[, d] = u.useState(!1),
		o = u.useRef(null),
		i = u.useRef(null),
		[, p] = u.useState(null),
		c = u.useMemo(() => Dt(a.selectedKeys), [a.selectedKeys]),
		f = u.useMemo(() => Dt(a.defaultSelectedKeys, new he()), [a.defaultSelectedKeys]),
		[b, x] = Ve(c, f, a.onSelectionChange),
		y = u.useMemo(() => (a.disabledKeys ? new Set(a.disabledKeys) : new Set()), [a.disabledKeys]),
		[m, $] = u.useState(s);
	s === 'replace' && m === 'toggle' && typeof b == 'object' && b.size === 0 && $('replace');
	let v = u.useRef(s);
	return (
		u.useEffect(() => {
			s !== v.current && ($(s), (v.current = s));
		}, [s]),
		{
			selectionMode: e,
			disallowEmptySelection: t,
			selectionBehavior: m,
			setSelectionBehavior: $,
			get isFocused() {
				return n.current;
			},
			setFocused(C) {
				(n.current = C), d(C);
			},
			get focusedKey() {
				return o.current;
			},
			get childFocusStrategy() {
				return i.current;
			},
			setFocusedKey(C, P = 'first') {
				(o.current = C), (i.current = P), p(C);
			},
			selectedKeys: b,
			setSelectedKeys(C) {
				(r || !xl(C, b)) && x(C);
			},
			disabledKeys: y,
			disabledBehavior: l,
		}
	);
}
function Dt(a, e) {
	return a ? (a === 'all' ? 'all' : new he(a)) : e;
}
class Pl {
	get selectionMode() {
		return this.state.selectionMode;
	}
	get disallowEmptySelection() {
		return this.state.disallowEmptySelection;
	}
	get selectionBehavior() {
		return this.state.selectionBehavior;
	}
	setSelectionBehavior(e) {
		this.state.setSelectionBehavior(e);
	}
	get isFocused() {
		return this.state.isFocused;
	}
	setFocused(e) {
		this.state.setFocused(e);
	}
	get focusedKey() {
		return this.state.focusedKey;
	}
	get childFocusStrategy() {
		return this.state.childFocusStrategy;
	}
	setFocusedKey(e, t) {
		(e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, t);
	}
	get selectedKeys() {
		return this.state.selectedKeys === 'all'
			? new Set(this.getSelectAllKeys())
			: this.state.selectedKeys;
	}
	get rawSelection() {
		return this.state.selectedKeys;
	}
	isSelected(e) {
		return this.state.selectionMode === 'none'
			? !1
			: ((e = this.getKey(e)),
			  this.state.selectedKeys === 'all' ? this.canSelectItem(e) : this.state.selectedKeys.has(e));
	}
	get isEmpty() {
		return this.state.selectedKeys !== 'all' && this.state.selectedKeys.size === 0;
	}
	get isSelectAll() {
		if (this.isEmpty) return !1;
		if (this.state.selectedKeys === 'all') return !0;
		if (this._isSelectAll != null) return this._isSelectAll;
		let e = this.getSelectAllKeys(),
			t = this.state.selectedKeys;
		return (this._isSelectAll = e.every((r) => t.has(r))), this._isSelectAll;
	}
	get firstSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let r = this.collection.getItem(t);
			(!e || (r && tt(this.collection, r, e) < 0)) && (e = r);
		}
		return e?.key;
	}
	get lastSelectedKey() {
		let e = null;
		for (let t of this.state.selectedKeys) {
			let r = this.collection.getItem(t);
			(!e || (r && tt(this.collection, r, e) > 0)) && (e = r);
		}
		return e?.key;
	}
	get disabledKeys() {
		return this.state.disabledKeys;
	}
	get disabledBehavior() {
		return this.state.disabledBehavior;
	}
	extendSelection(e) {
		if (this.selectionMode === 'none') return;
		if (this.selectionMode === 'single') {
			this.replaceSelection(e);
			return;
		}
		e = this.getKey(e);
		let t;
		if (this.state.selectedKeys === 'all') t = new he([e], e, e);
		else {
			let r = this.state.selectedKeys,
				s = r.anchorKey || e;
			t = new he(r, s, e);
			for (let l of this.getKeyRange(s, r.currentKey || e)) t.delete(l);
			for (let l of this.getKeyRange(e, s)) this.canSelectItem(l) && t.add(l);
		}
		this.state.setSelectedKeys(t);
	}
	getKeyRange(e, t) {
		let r = this.collection.getItem(e),
			s = this.collection.getItem(t);
		return r && s
			? tt(this.collection, r, s) <= 0
				? this.getKeyRangeInternal(e, t)
				: this.getKeyRangeInternal(t, e)
			: [];
	}
	getKeyRangeInternal(e, t) {
		let r = [],
			s = e;
		for (; s; ) {
			let l = this.collection.getItem(s);
			if (
				(((l && l.type === 'item') || (l.type === 'cell' && this.allowsCellSelection)) && r.push(s),
				s === t)
			)
				return r;
			s = this.collection.getKeyAfter(s);
		}
		return [];
	}
	getKey(e) {
		let t = this.collection.getItem(e);
		if (!t || (t.type === 'cell' && this.allowsCellSelection)) return e;
		for (; t.type !== 'item' && t.parentKey != null; ) t = this.collection.getItem(t.parentKey);
		return !t || t.type !== 'item' ? null : t.key;
	}
	toggleSelection(e) {
		if (this.selectionMode === 'none') return;
		if (this.selectionMode === 'single' && !this.isSelected(e)) {
			this.replaceSelection(e);
			return;
		}
		if (((e = this.getKey(e)), e == null)) return;
		let t = new he(
			this.state.selectedKeys === 'all' ? this.getSelectAllKeys() : this.state.selectedKeys
		);
		t.has(e)
			? t.delete(e)
			: this.canSelectItem(e) && (t.add(e), (t.anchorKey = e), (t.currentKey = e)),
			!(this.disallowEmptySelection && t.size === 0) && this.state.setSelectedKeys(t);
	}
	replaceSelection(e) {
		if (this.selectionMode === 'none' || ((e = this.getKey(e)), e == null)) return;
		let t = this.canSelectItem(e) ? new he([e], e, e) : new he();
		this.state.setSelectedKeys(t);
	}
	setSelectedKeys(e) {
		if (this.selectionMode === 'none') return;
		let t = new he();
		for (let r of e)
			if (((r = this.getKey(r)), r != null && (t.add(r), this.selectionMode === 'single'))) break;
		this.state.setSelectedKeys(t);
	}
	getSelectAllKeys() {
		let e = [],
			t = (r) => {
				for (; r; ) {
					if (this.canSelectItem(r)) {
						let s = this.collection.getItem(r);
						s.type === 'item' && e.push(r),
							s.hasChildNodes &&
								(this.allowsCellSelection || s.type !== 'item') &&
								t(ml(ea(s, this.collection)).key);
					}
					r = this.collection.getKeyAfter(r);
				}
			};
		return t(this.collection.getFirstKey()), e;
	}
	selectAll() {
		!this.isSelectAll && this.selectionMode === 'multiple' && this.state.setSelectedKeys('all');
	}
	clearSelection() {
		!this.disallowEmptySelection &&
			(this.state.selectedKeys === 'all' || this.state.selectedKeys.size > 0) &&
			this.state.setSelectedKeys(new he());
	}
	toggleSelectAll() {
		this.isSelectAll ? this.clearSelection() : this.selectAll();
	}
	select(e, t) {
		this.selectionMode !== 'none' &&
			(this.selectionMode === 'single'
				? this.isSelected(e) && !this.disallowEmptySelection
					? this.toggleSelection(e)
					: this.replaceSelection(e)
				: this.selectionBehavior === 'toggle' ||
				    (t && (t.pointerType === 'touch' || t.pointerType === 'virtual'))
				  ? this.toggleSelection(e)
				  : this.replaceSelection(e));
	}
	isSelectionEqual(e) {
		if (e === this.state.selectedKeys) return !0;
		let t = this.selectedKeys;
		if (e.size !== t.size) return !1;
		for (let r of e) if (!t.has(r)) return !1;
		for (let r of t) if (!e.has(r)) return !1;
		return !0;
	}
	canSelectItem(e) {
		if (this.state.selectionMode === 'none' || this.state.disabledKeys.has(e)) return !1;
		let t = this.collection.getItem(e);
		return !(!t || (t.type === 'cell' && !this.allowsCellSelection));
	}
	isDisabled(e) {
		return this.state.disabledKeys.has(e) && this.state.disabledBehavior === 'all';
	}
	isLink(e) {
		var t, r;
		return !!(
			!(
				(r = this.collection.getItem(e)) === null ||
				r === void 0 ||
				(t = r.props) === null ||
				t === void 0
			) && t.href
		);
	}
	constructor(e, t, r) {
		(this.collection = e), (this.state = t);
		var s;
		(this.allowsCellSelection = (s = r?.allowsCellSelection) !== null && s !== void 0 ? s : !1),
			(this._isSelectAll = null);
	}
}
function Sl(a) {
	let e = $e(a, { enabled: typeof a.elementType == 'string' }),
		t;
	return (
		a.orientation === 'vertical' && (t = 'vertical'),
		a.elementType !== 'hr'
			? { separatorProps: { ...e, role: 'separator', 'aria-orientation': t } }
			: { separatorProps: e }
	);
}
function $l(a) {
	const { as: e, className: t, orientation: r, ...s } = a;
	let l = e || 'hr';
	l === 'hr' && r === 'vertical' && (l = 'div');
	const { separatorProps: n } = Sl({
			elementType: typeof l == 'string' ? l : 'hr',
			orientation: r,
		}),
		d = u.useMemo(() => Yr({ orientation: r, className: t }), [r, t]),
		o = u.useCallback(
			(i = {}) => ({ className: d, role: 'separator', 'data-orientation': r, ...n, ...s, ...i }),
			[d, r, n, s]
		);
	return { Component: l, getDividerProps: o };
}
var ta = ve((a, e) => {
	const { Component: t, getDividerProps: r } = $l({ ...a });
	return g.jsx(t, { ref: e, ...r() });
});
ta.displayName = 'NextUI.Divider';
var Cl = ta,
	Kl = (a) => {
		const e = {
			top: { originY: 1 },
			bottom: { originY: 0 },
			left: { originX: 1 },
			right: { originX: 0 },
			'top-start': { originX: 0, originY: 1 },
			'top-end': { originX: 1, originY: 1 },
			'bottom-start': { originX: 0, originY: 0 },
			'bottom-end': { originX: 1, originY: 0 },
			'right-start': { originX: 0, originY: 0 },
			'right-end': { originX: 0, originY: 1 },
			'left-start': { originX: 1, originY: 0 },
			'left-end': { originX: 1, originY: 1 },
		};
		return e?.[a] || {};
	},
	Ml = (a) =>
		({
			top: 'top',
			bottom: 'bottom',
			left: 'left',
			right: 'right',
			'top-start': 'top start',
			'top-end': 'top end',
			'bottom-start': 'bottom start',
			'bottom-end': 'bottom end',
			'left-start': 'left top',
			'left-end': 'left bottom',
			'right-start': 'right top',
			'right-end': 'right bottom',
		})[a],
	Il = (a, e) => {
		if (e.includes('-')) {
			const [t] = e.split('-');
			if (t.includes(a)) return !1;
		}
		return !0;
	},
	kt = (a, e) => {
		if (e.includes('-')) {
			const [, t] = e.split('-');
			return `${a}-${t}`;
		}
		return a;
	},
	Ae = new WeakMap(),
	pe = [];
function Dl(a, e = document.body) {
	let t = new Set(a),
		r = new Set(),
		s = (o) => {
			for (let f of o.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]'))
				t.add(f);
			let i = (f) => {
					const b = f.parentElement;
					if (t.has(f) || (r.has(b) && b.getAttribute('role') !== 'row'))
						return NodeFilter.FILTER_REJECT;
					for (let x of t) if (f.contains(x)) return NodeFilter.FILTER_SKIP;
					return NodeFilter.FILTER_ACCEPT;
				},
				p = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, { acceptNode: i }),
				c = i(o);
			if ((c === NodeFilter.FILTER_ACCEPT && l(o), c !== NodeFilter.FILTER_REJECT)) {
				let f = p.nextNode();
				for (; f != null; ) l(f), (f = p.nextNode());
			}
		},
		l = (o) => {
			var i;
			let p = (i = Ae.get(o)) != null ? i : 0;
			(o.getAttribute('aria-hidden') === 'true' && p === 0) ||
				(p === 0 && o.setAttribute('aria-hidden', 'true'), r.add(o), Ae.set(o, p + 1));
		};
	pe.length && pe[pe.length - 1].disconnect(), s(e);
	let n = new MutationObserver((o) => {
		for (let i of o)
			if (
				!(i.type !== 'childList' || i.addedNodes.length === 0) &&
				![...t, ...r].some((p) => p.contains(i.target))
			) {
				for (let p of i.removedNodes) p instanceof Element && (t.delete(p), r.delete(p));
				for (let p of i.addedNodes)
					(p instanceof HTMLElement || p instanceof SVGElement) &&
					(p.dataset.liveAnnouncer === 'true' || p.dataset.reactAriaTopLayer === 'true')
						? t.add(p)
						: p instanceof Element && s(p);
			}
	});
	n.observe(e, { childList: !0, subtree: !0 });
	let d = {
		observe() {
			n.observe(e, { childList: !0, subtree: !0 });
		},
		disconnect() {
			n.disconnect();
		},
	};
	return (
		pe.push(d),
		() => {
			n.disconnect();
			for (let o of r) {
				let i = Ae.get(o);
				i != null &&
					(i === 1 ? (o.removeAttribute('aria-hidden'), Ae.delete(o)) : Ae.set(o, i - 1));
			}
			d === pe[pe.length - 1]
				? (pe.pop(), pe.length && pe[pe.length - 1].observe())
				: pe.splice(pe.indexOf(d), 1);
		}
	);
}
var [Us, kl] = xr({ name: 'ButtonGroupContext', strict: !1 }),
	El = (a, e, t) => Math.min(Math.max(a, e), t),
	aa = (a) => {
		const { ripples: e = [], motionProps: t, color: r = 'currentColor', style: s, onClear: l } = a;
		return g.jsx(g.Fragment, {
			children: e.map((n) => {
				const d = El(0.01 * n.size, 0.2, n.size > 100 ? 0.75 : 0.5);
				return g.jsx(
					Xt,
					{
						mode: 'popLayout',
						children: g.jsx(dt.span, {
							animate: { transform: 'scale(2)', opacity: 0 },
							className: 'nextui-ripple',
							exit: { opacity: 0 },
							initial: { transform: 'scale(0)', opacity: 0.35 },
							style: {
								position: 'absolute',
								backgroundColor: r,
								borderRadius: '100%',
								transformOrigin: 'center',
								pointerEvents: 'none',
								zIndex: 10,
								top: n.y,
								left: n.x,
								width: `${n.size}px`,
								height: `${n.size}px`,
								...s,
							},
							transition: { duration: d },
							onAnimationComplete: () => {
								l(n.key);
							},
							...t,
						}),
					},
					n.key
				);
			}),
		});
	};
aa.displayName = 'NextUI.Ripple';
var _l = aa;
function Al(a = {}) {
	const [e, t] = u.useState([]),
		r = u.useCallback((l) => {
			const n = l.currentTarget,
				d = Math.max(n.clientWidth, n.clientHeight),
				o = n.getBoundingClientRect();
			t((i) => [
				...i,
				{
					key: Qr(i.length.toString()),
					size: d,
					x: l.clientX - o.x - d / 2,
					y: l.clientY - o.y - d / 2,
				},
			]);
		}, []),
		s = u.useCallback((l) => {
			t((n) => n.filter((d) => d.key !== l));
		}, []);
	return { ripples: e, onClick: r, onClear: s, ...a };
}
function Bl(a) {
	var e, t, r, s, l, n, d, o;
	const i = kl(),
		p = !!i,
		{
			ref: c,
			as: f,
			children: b,
			startContent: x,
			endContent: y,
			autoFocus: m,
			className: $,
			spinner: v,
			fullWidth: C = (e = i?.fullWidth) != null ? e : !1,
			size: P = (t = i?.size) != null ? t : 'md',
			color: D = (r = i?.color) != null ? r : 'default',
			variant: k = (s = i?.variant) != null ? s : 'solid',
			disableAnimation: A = (l = i?.disableAnimation) != null ? l : !1,
			radius: F = i?.radius,
			disableRipple: R = (n = i?.disableRipple) != null ? n : !1,
			isDisabled: h = (d = i?.isDisabled) != null ? d : !1,
			isIconOnly: E = (o = i?.isIconOnly) != null ? o : !1,
			isLoading: O = !1,
			spinnerPlacement: W = 'start',
			onPress: z,
			onClick: B,
			...q
		} = a,
		S = f || 'button',
		V = typeof S == 'string',
		w = we(c),
		{ isFocusVisible: I, isFocused: H, focusProps: G } = De({ autoFocus: m }),
		X = h || O,
		Y = u.useMemo(
			() =>
				Xr({
					size: P,
					color: D,
					variant: k,
					radius: F,
					fullWidth: C,
					isDisabled: X,
					isInGroup: p,
					disableAnimation: A,
					isIconOnly: E,
					className: $,
				}),
			[P, D, k, F, C, X, p, E, A, $]
		),
		{ onClick: Z, onClear: J, ripples: ae } = Al(),
		re = u.useCallback(
			(se) => {
				R || X || A || (w.current && Z(se));
			},
			[R, X, A, w, Z]
		),
		{ buttonProps: L, isPressed: fe } = Vt(
			{ elementType: f, isDisabled: X, onPress: z, onClick: it(B, re), ...q },
			w
		),
		{ isHovered: ge, hoverProps: le } = Fe({ isDisabled: X }),
		Q = u.useCallback(
			(se = {}) => ({
				'data-disabled': M(X),
				'data-focus': M(H),
				'data-pressed': M(fe),
				'data-focus-visible': M(I),
				'data-hover': M(ge),
				'data-loading': M(O),
				...j(L, G, le, $e(q, { enabled: V }), $e(se)),
			}),
			[O, X, H, fe, V, I, ge, L, G, le, q]
		),
		ne = (se) =>
			u.isValidElement(se)
				? u.cloneElement(se, { 'aria-hidden': !0, focusable: !1, tabIndex: -1 })
				: null,
		ye = ne(x),
		Pe = ne(y),
		ie = u.useMemo(() => ({ sm: 'sm', md: 'sm', lg: 'md' })[P], [P]),
		xe = u.useCallback(() => ({ ripples: ae, onClear: J }), [ae, J]);
	return {
		Component: S,
		children: b,
		domRef: w,
		spinner: v,
		styles: Y,
		startContent: ye,
		endContent: Pe,
		isLoading: O,
		spinnerPlacement: W,
		spinnerSize: ie,
		disableRipple: R,
		getButtonProps: Q,
		getRippleProps: xe,
		isIconOnly: E,
	};
}
function zl(a) {
	const [e, t] = Ee(a, vt.variantKeys),
		{ children: r, className: s, classNames: l, label: n, ...d } = e,
		o = u.useMemo(() => vt({ ...t }), [...Object.values(t)]),
		i = T(l?.base, s),
		p = n || r,
		c = u.useMemo(
			() => (p && typeof p == 'string' ? p : d['aria-label'] ? '' : 'Loading'),
			[r, p, d['aria-label']]
		),
		f = u.useCallback(
			() => ({ 'aria-label': c, className: o.base({ class: i }), ...d }),
			[c, o, i, d]
		);
	return { label: p, slots: o, classNames: l, getSpinnerProps: f };
}
var ra = ve((a, e) => {
	const { slots: t, classNames: r, label: s, getSpinnerProps: l } = zl({ ...a });
	return g.jsxs('div', {
		ref: e,
		...l(),
		children: [
			g.jsxs('div', {
				className: t.wrapper({ class: r?.wrapper }),
				children: [
					g.jsx('i', { className: t.circle1({ class: r?.circle1 }) }),
					g.jsx('i', { className: t.circle2({ class: r?.circle2 }) }),
				],
			}),
			s && g.jsx('span', { className: t.label(), children: s }),
		],
	});
});
ra.displayName = 'NextUI.Spinner';
var la = ra,
	sa = ve((a, e) => {
		const {
			Component: t,
			domRef: r,
			children: s,
			styles: l,
			spinnerSize: n,
			spinner: d = g.jsx(la, { color: 'current', size: n }),
			spinnerPlacement: o,
			startContent: i,
			endContent: p,
			isLoading: c,
			disableRipple: f,
			getButtonProps: b,
			getRippleProps: x,
			isIconOnly: y,
		} = Bl({ ...a, ref: e });
		return g.jsxs(t, {
			ref: r,
			className: l,
			...b(),
			children: [
				i,
				c && o === 'start' && d,
				c && y ? null : s,
				c && o === 'end' && d,
				p,
				!f && g.jsx(_l, { ...x() }),
			],
		});
	});
sa.displayName = 'NextUI.Button';
var Fl = sa;
function Nl(a, e, t) {
	let { validationBehavior: r, focus: s } = a;
	wr(() => {
		if (r === 'native' && t?.current) {
			let o = e.realtimeValidation.isInvalid
				? e.realtimeValidation.validationErrors.join(' ') || 'Invalid value.'
				: '';
			t.current.setCustomValidity(o),
				t.current.hasAttribute('title') || (t.current.title = ''),
				e.realtimeValidation.isInvalid || e.updateValidation(Wl(t.current));
		}
	});
	let l = Je(() => {
			e.resetValidation();
		}),
		n = Je((o) => {
			var i;
			e.displayValidation.isInvalid || e.commitValidation();
			let p = t == null || (i = t.current) === null || i === void 0 ? void 0 : i.form;
			if (!o.defaultPrevented && t && p && Ol(p) === t.current) {
				var c;
				s ? s() : (c = t.current) === null || c === void 0 || c.focus(), Ht('keyboard');
			}
			o.preventDefault();
		}),
		d = Je(() => {
			e.commitValidation();
		});
	u.useEffect(() => {
		let o = t?.current;
		if (!o) return;
		let i = o.form;
		return (
			o.addEventListener('invalid', n),
			o.addEventListener('change', d),
			i?.addEventListener('reset', l),
			() => {
				o.removeEventListener('invalid', n),
					o.removeEventListener('change', d),
					i?.removeEventListener('reset', l);
			}
		);
	}, [t, n, d, l, r]);
}
function Rl(a) {
	let e = a.validity;
	return {
		badInput: e.badInput,
		customError: e.customError,
		patternMismatch: e.patternMismatch,
		rangeOverflow: e.rangeOverflow,
		rangeUnderflow: e.rangeUnderflow,
		stepMismatch: e.stepMismatch,
		tooLong: e.tooLong,
		tooShort: e.tooShort,
		typeMismatch: e.typeMismatch,
		valueMissing: e.valueMissing,
		valid: e.valid,
	};
}
function Wl(a) {
	return {
		isInvalid: !a.validity.valid,
		validationDetails: Rl(a),
		validationErrors: a.validationMessage ? [a.validationMessage] : [],
	};
}
function Ol(a) {
	for (let e = 0; e < a.elements.length; e++) {
		let t = a.elements[e];
		if (!t.validity.valid) return t;
	}
	return null;
}
const na = {
		badInput: !1,
		customError: !1,
		patternMismatch: !1,
		rangeOverflow: !1,
		rangeUnderflow: !1,
		stepMismatch: !1,
		tooLong: !1,
		tooShort: !1,
		typeMismatch: !1,
		valueMissing: !1,
		valid: !0,
	},
	oa = { ...na, customError: !0, valid: !1 },
	Be = { isInvalid: !1, validationDetails: na, validationErrors: [] },
	jl = u.createContext({}),
	Et = '__formValidationState' + Date.now();
function Ll(a) {
	if (a[Et]) {
		let {
			realtimeValidation: e,
			displayValidation: t,
			updateValidation: r,
			resetValidation: s,
			commitValidation: l,
		} = a[Et];
		return {
			realtimeValidation: e,
			displayValidation: t,
			updateValidation: r,
			resetValidation: s,
			commitValidation: l,
		};
	}
	return Tl(a);
}
function Tl(a) {
	let {
		isInvalid: e,
		validationState: t,
		name: r,
		value: s,
		builtinValidation: l,
		validate: n,
		validationBehavior: d = 'aria',
	} = a;
	t && (e || (e = t === 'invalid'));
	let o = e ? { isInvalid: !0, validationErrors: [], validationDetails: oa } : null,
		i = u.useMemo(() => _t(Vl(n, s)), [n, s]);
	l?.validationDetails.valid && (l = null);
	let p = u.useContext(jl),
		c = u.useMemo(
			() => (r ? (Array.isArray(r) ? r.flatMap((h) => ot(p[h])) : ot(p[r])) : []),
			[p, r]
		),
		[f, b] = u.useState(p),
		[x, y] = u.useState(!1);
	p !== f && (b(p), y(!1));
	let m = u.useMemo(() => _t(x ? [] : c), [x, c]),
		$ = u.useRef(Be),
		[v, C] = u.useState(Be),
		P = u.useRef(Be),
		D = () => {
			if (!k) return;
			A(!1);
			let h = i || l || $.current;
			at(h, P.current) || ((P.current = h), C(h));
		},
		[k, A] = u.useState(!1);
	return (
		u.useEffect(D),
		{
			realtimeValidation: o || m || i || l || Be,
			displayValidation: d === 'native' ? o || m || v : o || m || i || l || v,
			updateValidation(h) {
				d === 'aria' && !at(v, h) ? C(h) : ($.current = h);
			},
			resetValidation() {
				let h = Be;
				at(h, P.current) || ((P.current = h), C(h)), d === 'native' && A(!1), y(!0);
			},
			commitValidation() {
				d === 'native' && A(!0), y(!0);
			},
		}
	);
}
function ot(a) {
	return a ? (Array.isArray(a) ? a : [a]) : [];
}
function Vl(a, e) {
	if (typeof a == 'function') {
		let t = a(e);
		if (t && typeof t != 'boolean') return ot(t);
	}
	return [];
}
function _t(a) {
	return a.length ? { isInvalid: !0, validationErrors: a, validationDetails: oa } : null;
}
function at(a, e) {
	return a === e
		? !0
		: a &&
				e &&
				a.isInvalid === e.isInvalid &&
				a.validationErrors.length === e.validationErrors.length &&
				a.validationErrors.every((t, r) => t === e.validationErrors[r]) &&
				Object.entries(a.validationDetails).every(([t, r]) => e.validationDetails[t] === r);
}
function ia(a) {
	let { id: e, label: t, 'aria-labelledby': r, 'aria-label': s, labelElementType: l = 'label' } = a;
	e = ke(e);
	let n = ke(),
		d = {};
	t
		? ((r = r ? `${n} ${r}` : n), (d = { id: n, htmlFor: l === 'label' ? e : void 0 }))
		: !r &&
		  !s &&
		  console.warn(
				'If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility'
		  );
	let o = Pr({ id: e, 'aria-label': s, 'aria-labelledby': r });
	return { labelProps: d, fieldProps: o };
}
function da(a) {
	let { description: e, errorMessage: t, isInvalid: r, validationState: s } = a,
		{ labelProps: l, fieldProps: n } = ia(a),
		d = Le([!!e, !!t, r, s]),
		o = Le([!!e, !!t, r, s]);
	return (
		(n = j(n, {
			'aria-describedby': [d, o, a['aria-describedby']].filter(Boolean).join(' ') || void 0,
		})),
		{ labelProps: l, fieldProps: n, descriptionProps: { id: d }, errorMessageProps: { id: o } }
	);
}
function ua(a) {
	let [e, t] = Ve(a.isOpen, a.defaultOpen || !1, a.onOpenChange);
	const r = u.useCallback(() => {
			t(!0);
		}, [t]),
		s = u.useCallback(() => {
			t(!1);
		}, [t]),
		l = u.useCallback(() => {
			t(!e);
		}, [t, e]);
	return { isOpen: e, setOpen: t, open: r, close: s, toggle: l };
}
function Hl(a, e) {
	let {
			inputElementType: t = 'input',
			isDisabled: r = !1,
			isRequired: s = !1,
			isReadOnly: l = !1,
			type: n = 'text',
			validationBehavior: d = 'aria',
		} = a,
		[o, i] = Ve(a.value, a.defaultValue || '', a.onChange),
		{ focusableProps: p } = Sr(a, e),
		c = Ll({ ...a, value: o }),
		{ isInvalid: f, validationErrors: b, validationDetails: x } = c.displayValidation,
		{
			labelProps: y,
			fieldProps: m,
			descriptionProps: $,
			errorMessageProps: v,
		} = da({ ...a, isInvalid: f, errorMessage: a.errorMessage || b }),
		C = He(a, { labelable: !0 });
	const P = { type: n, pattern: a.pattern };
	return (
		Ut(e, o, i),
		Nl(a, c, e),
		u.useEffect(() => {
			if (e.current instanceof $r(e.current).HTMLTextAreaElement) {
				let D = e.current;
				Object.defineProperty(D, 'defaultValue', {
					get: () => D.value,
					set: () => {},
					configurable: !0,
				});
			}
		}, [e]),
		{
			labelProps: y,
			inputProps: j(C, t === 'input' && P, {
				disabled: r,
				readOnly: l,
				required: s && d === 'native',
				'aria-required': (s && d === 'aria') || void 0,
				'aria-invalid': f || void 0,
				'aria-errormessage': a['aria-errormessage'],
				'aria-activedescendant': a['aria-activedescendant'],
				'aria-autocomplete': a['aria-autocomplete'],
				'aria-haspopup': a['aria-haspopup'],
				value: o,
				onChange: (D) => i(D.target.value),
				autoComplete: a.autoComplete,
				maxLength: a.maxLength,
				minLength: a.minLength,
				name: a.name,
				placeholder: a.placeholder,
				inputMode: a.inputMode,
				onCopy: a.onCopy,
				onCut: a.onCut,
				onPaste: a.onPaste,
				onCompositionEnd: a.onCompositionEnd,
				onCompositionStart: a.onCompositionStart,
				onCompositionUpdate: a.onCompositionUpdate,
				onSelect: a.onSelect,
				onBeforeInput: a.onBeforeInput,
				onInput: a.onInput,
				...p,
				...m,
			}),
			descriptionProps: $,
			errorMessageProps: v,
			isInvalid: f,
			validationErrors: b,
			validationDetails: x,
		}
	);
}
function ca(a) {
	const [e, t] = Ee(a, Pt.variantKeys),
		{
			ref: r,
			as: s,
			label: l,
			baseRef: n,
			wrapperRef: d,
			description: o,
			errorMessage: i,
			className: p,
			classNames: c,
			autoFocus: f,
			startContent: b,
			endContent: x,
			onClear: y,
			onChange: m,
			validationState: $,
			innerWrapperRef: v,
			onValueChange: C = () => {},
			...P
		} = e,
		D = u.useCallback(
			(N) => {
				C(N ?? '');
			},
			[C]
		),
		[k, A] = Ve(e.value, e.defaultValue, D),
		[F, R] = u.useState(!1),
		h = s || 'div',
		E = !!k,
		O = E || F,
		W = T(c?.base, p, E ? 'is-filled' : ''),
		z = a.isMultiline,
		B = we(r),
		q = we(n),
		S = we(d),
		V = we(v),
		w = u.useCallback(() => {
			A(''), B.current && ((B.current.value = ''), B.current.focus()), y?.();
		}, [B, A, y]),
		{
			labelProps: I,
			inputProps: H,
			descriptionProps: G,
			errorMessageProps: X,
		} = Hl(
			{
				...a,
				'aria-label': Zr(a?.['aria-label'], a?.label, a?.placeholder),
				inputElementType: z ? 'textarea' : 'input',
				onChange: A,
			},
			B
		),
		{ isFocusVisible: Y, isFocused: Z, focusProps: J } = De({ autoFocus: f, isTextInput: !0 }),
		{ isHovered: ae, hoverProps: re } = Fe({ isDisabled: !!a?.isDisabled }),
		{ focusProps: L, isFocusVisible: fe } = De(),
		{ focusWithinProps: ge } = qt({ onFocusWithinChange: R }),
		{ pressProps: le } = jt({ isDisabled: !!a?.isDisabled, onPress: w }),
		Q = $ === 'invalid' || a.isInvalid,
		ne = u.useMemo(() => {
			var N;
			return (!a.labelPlacement || a.labelPlacement === 'inside') && !l
				? 'outside'
				: (N = a.labelPlacement) != null
				  ? N
				  : 'inside';
		}, [a.labelPlacement, l]),
		ye = !!y || a.isClearable,
		Pe = !!l || !!o || !!i,
		ie = !!e.placeholder,
		xe = !!l,
		se = !!o || !!i,
		Ce = ne === 'outside' || ne === 'outside-left',
		ee = ne === 'inside',
		de = B.current ? (!B.current.value || B.current.value === '' || !k || k === '') && ie : !1,
		Se = ne === 'outside-left',
		ue = !!b,
		_e = Ce ? ne === 'outside-left' || ie || (ne === 'outside' && ue) : !1,
		Ne = ne === 'outside' && !ie && !ue,
		te = u.useMemo(
			() => Pt({ ...t, isInvalid: Q, isClearable: ye }),
			[...Object.values(t), Q, ye, ue]
		),
		Ue = u.useCallback(
			(N = {}) => ({
				ref: q,
				className: te.base({ class: W }),
				'data-slot': 'base',
				'data-filled': M(E || ie || ue || de),
				'data-filled-within': M(O || ie || ue || de),
				'data-focus-within': M(F),
				'data-focus-visible': M(Y),
				'data-readonly': M(a.isReadOnly),
				'data-focus': M(Z),
				'data-hover': M(ae),
				'data-required': M(a.isRequired),
				'data-invalid': M(Q),
				'data-disabled': M(a.isDisabled),
				'data-has-elements': M(Pe),
				'data-has-helper': M(se),
				'data-has-label': M(xe),
				'data-has-value': M(!de),
				...ge,
				...N,
			}),
			[
				te,
				W,
				E,
				Z,
				ae,
				Q,
				se,
				xe,
				Pe,
				de,
				ue,
				F,
				Y,
				O,
				ie,
				ge,
				a.isReadOnly,
				a.isRequired,
				a.isDisabled,
			]
		),
		Re = u.useCallback(
			(N = {}) => ({ 'data-slot': 'label', className: te.label({ class: c?.label }), ...I, ...N }),
			[te, I, c?.label]
		),
		We = u.useCallback(
			(N = {}) => ({
				ref: B,
				'data-slot': 'input',
				'data-filled': M(E),
				'data-filled-within': M(O),
				'data-has-start-content': M(ue),
				'data-has-end-content': M(!!x),
				className: te.input({ class: T(c?.input, k ? 'is-filled' : '') }),
				...j(
					J,
					H,
					$e(P, { enabled: !0, labelable: !0, omitEventNames: new Set(Object.keys(H)) }),
					N
				),
				required: a.isRequired,
				'aria-readonly': M(a.isReadOnly),
				'aria-required': M(a.isRequired),
				onChange: it(H.onChange, m),
			}),
			[te, k, J, H, P, E, O, ue, x, c?.input, a.isReadOnly, a.isRequired, m]
		),
		Oe = u.useCallback(
			(N = {}) => ({
				ref: S,
				'data-slot': 'input-wrapper',
				'data-hover': M(ae),
				'data-focus-visible': M(Y),
				'data-focus': M(Z),
				className: te.inputWrapper({ class: T(c?.inputWrapper, k ? 'is-filled' : '') }),
				...j(N, re),
				onClick: (Ke) => {
					B.current && Ke.currentTarget === Ke.target && B.current.focus();
				},
				style: { cursor: 'text', ...N.style },
			}),
			[te, ae, Y, Z, k, c?.inputWrapper]
		),
		je = u.useCallback(
			(N = {}) => ({
				...N,
				ref: V,
				'data-slot': 'inner-wrapper',
				onClick: (Ke) => {
					B.current && Ke.currentTarget === Ke.target && B.current.focus();
				},
				className: te.innerWrapper({ class: T(c?.innerWrapper, N?.className) }),
			}),
			[te, c?.innerWrapper]
		),
		U = u.useCallback(
			(N = {}) => ({
				...N,
				'data-slot': 'main-wrapper',
				className: te.mainWrapper({ class: T(c?.mainWrapper, N?.className) }),
			}),
			[te, c?.mainWrapper]
		),
		qe = u.useCallback(
			(N = {}) => ({
				...N,
				'data-slot': 'helper-wrapper',
				className: te.helperWrapper({ class: T(c?.helperWrapper, N?.className) }),
			}),
			[te, c?.helperWrapper]
		),
		Ge = u.useCallback(
			(N = {}) => ({
				...N,
				...G,
				'data-slot': 'description',
				className: te.description({ class: T(c?.description, N?.className) }),
			}),
			[te, c?.description]
		),
		Ye = u.useCallback(
			(N = {}) => ({
				...N,
				...X,
				'data-slot': 'error-message',
				className: te.errorMessage({ class: T(c?.errorMessage, N?.className) }),
			}),
			[te, X, c?.errorMessage]
		),
		Xe = u.useCallback(
			(N = {}) => ({
				...N,
				role: 'button',
				tabIndex: 0,
				'data-slot': 'clear-button',
				'data-focus-visible': M(fe),
				className: te.clearButton({ class: T(c?.clearButton, N?.className) }),
				...j(le, L),
			}),
			[te, fe, le, L, c?.clearButton]
		);
	return {
		Component: h,
		classNames: c,
		domRef: B,
		label: l,
		description: o,
		startContent: b,
		endContent: x,
		labelPlacement: ne,
		isClearable: ye,
		isInvalid: Q,
		hasHelper: se,
		hasStartContent: ue,
		isLabelOutside: _e,
		isOutsideLeft: Se,
		isLabelOutsideAsPlaceholder: Ne,
		shouldLabelBeOutside: Ce,
		shouldLabelBeInside: ee,
		hasPlaceholder: ie,
		errorMessage: i,
		getBaseProps: Ue,
		getLabelProps: Re,
		getInputProps: We,
		getMainWrapperProps: U,
		getInputWrapperProps: Oe,
		getInnerWrapperProps: je,
		getHelperWrapperProps: qe,
		getDescriptionProps: Ge,
		getErrorMessageProps: Ye,
		getClearButtonProps: Xe,
	};
}
var fa = ve((a, e) => {
	const {
			Component: t,
			label: r,
			description: s,
			isClearable: l,
			startContent: n,
			endContent: d,
			labelPlacement: o,
			hasHelper: i,
			isOutsideLeft: p,
			shouldLabelBeOutside: c,
			errorMessage: f,
			getBaseProps: b,
			getLabelProps: x,
			getInputProps: y,
			getInnerWrapperProps: m,
			getInputWrapperProps: $,
			getMainWrapperProps: v,
			getHelperWrapperProps: C,
			getDescriptionProps: P,
			getErrorMessageProps: D,
			getClearButtonProps: k,
		} = ca({ ...a, ref: e }),
		A = r ? g.jsx('label', { ...x(), children: r }) : null,
		F = u.useMemo(() => (l ? g.jsx('span', { ...k(), children: d || g.jsx(ul, {}) }) : d), [l, k]),
		R = u.useMemo(
			() =>
				i
					? g.jsx('div', {
							...C(),
							children: f
								? g.jsx('div', { ...D(), children: f })
								: s
								  ? g.jsx('div', { ...P(), children: s })
								  : null,
					  })
					: null,
			[i, f, s, C, D, P]
		),
		h = u.useMemo(
			() =>
				n || F
					? g.jsxs('div', { ...m(), children: [n, g.jsx('input', { ...y() }), F] })
					: g.jsx('div', { ...m(), children: g.jsx('input', { ...y() }) }),
			[n, F, y, m]
		),
		E = u.useMemo(
			() =>
				c
					? g.jsxs('div', {
							...v(),
							children: [g.jsxs('div', { ...$(), children: [p ? null : A, h] }), R],
					  })
					: g.jsxs(g.Fragment, { children: [g.jsxs('div', { ...$(), children: [A, h] }), R] }),
			[o, R, c, A, h, f, s, v, $, D, P]
		);
	return g.jsxs(t, { ...b(), children: [p ? A : null, E] });
});
fa.displayName = 'NextUI.Input';
var rt = fa;
function Ul(a, e) {
	if (a == null) return {};
	var t = {},
		r = Object.keys(a),
		s,
		l;
	for (l = 0; l < r.length; l++) (s = r[l]), !(e.indexOf(s) >= 0) && (t[s] = a[s]);
	return t;
}
var ql = u.useLayoutEffect,
	Gl = function (e) {
		var t = u.useRef(e);
		return (
			ql(function () {
				t.current = e;
			}),
			t
		);
	},
	At = function (e, t) {
		if (typeof e == 'function') {
			e(t);
			return;
		}
		e.current = t;
	},
	Yl = function (e, t) {
		var r = u.useRef();
		return u.useCallback(
			function (s) {
				(e.current = s), r.current && At(r.current, null), (r.current = t), t && At(t, s);
			},
			[t]
		);
	},
	Bt = {
		'min-height': '0',
		'max-height': 'none',
		height: '0',
		visibility: 'hidden',
		overflow: 'hidden',
		position: 'absolute',
		'z-index': '-1000',
		top: '0',
		right: '0',
	},
	Xl = function (e) {
		Object.keys(Bt).forEach(function (t) {
			e.style.setProperty(t, Bt[t], 'important');
		});
	},
	zt = Xl,
	oe = null,
	Ft = function (e, t) {
		var r = e.scrollHeight;
		return t.sizingStyle.boxSizing === 'border-box' ? r + t.borderSize : r - t.paddingSize;
	};
function Zl(a, e, t, r) {
	t === void 0 && (t = 1),
		r === void 0 && (r = 1 / 0),
		oe ||
			((oe = document.createElement('textarea')),
			oe.setAttribute('tabindex', '-1'),
			oe.setAttribute('aria-hidden', 'true'),
			zt(oe)),
		oe.parentNode === null && document.body.appendChild(oe);
	var s = a.paddingSize,
		l = a.borderSize,
		n = a.sizingStyle,
		d = n.boxSizing;
	Object.keys(n).forEach(function (f) {
		var b = f;
		oe.style[b] = n[b];
	}),
		zt(oe),
		(oe.value = e);
	var o = Ft(oe, a);
	(oe.value = e), (o = Ft(oe, a)), (oe.value = 'x');
	var i = oe.scrollHeight - s,
		p = i * t;
	d === 'border-box' && (p = p + s + l), (o = Math.max(p, o));
	var c = i * r;
	return d === 'border-box' && (c = c + s + l), (o = Math.min(c, o)), [o, i];
}
var Nt = function () {},
	Jl = function (e, t) {
		return e.reduce(function (r, s) {
			return (r[s] = t[s]), r;
		}, {});
	},
	Ql = [
		'borderBottomWidth',
		'borderLeftWidth',
		'borderRightWidth',
		'borderTopWidth',
		'boxSizing',
		'fontFamily',
		'fontSize',
		'fontStyle',
		'fontWeight',
		'letterSpacing',
		'lineHeight',
		'paddingBottom',
		'paddingLeft',
		'paddingRight',
		'paddingTop',
		'tabSize',
		'textIndent',
		'textRendering',
		'textTransform',
		'width',
		'wordBreak',
	],
	es = !!document.documentElement.currentStyle,
	ts = function (e) {
		var t = window.getComputedStyle(e);
		if (t === null) return null;
		var r = Jl(Ql, t),
			s = r.boxSizing;
		if (s === '') return null;
		es &&
			s === 'border-box' &&
			(r.width =
				parseFloat(r.width) +
				parseFloat(r.borderRightWidth) +
				parseFloat(r.borderLeftWidth) +
				parseFloat(r.paddingRight) +
				parseFloat(r.paddingLeft) +
				'px');
		var l = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
			n = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
		return { sizingStyle: r, paddingSize: l, borderSize: n };
	},
	as = ts;
function pa(a, e, t) {
	var r = Gl(t);
	u.useLayoutEffect(function () {
		var s = function (n) {
			return r.current(n);
		};
		if (a)
			return (
				a.addEventListener(e, s),
				function () {
					return a.removeEventListener(e, s);
				}
			);
	}, []);
}
var rs = function (e) {
		pa(window, 'resize', e);
	},
	ls = function (e) {
		pa(document.fonts, 'loadingdone', e);
	},
	ss = ['cacheMeasurements', 'maxRows', 'minRows', 'onChange', 'onHeightChange'],
	ns = function (e, t) {
		var r = e.cacheMeasurements,
			s = e.maxRows,
			l = e.minRows,
			n = e.onChange,
			d = n === void 0 ? Nt : n,
			o = e.onHeightChange,
			i = o === void 0 ? Nt : o,
			p = Ul(e, ss),
			c = p.value !== void 0,
			f = u.useRef(null),
			b = Yl(f, t),
			x = u.useRef(0),
			y = u.useRef(),
			m = function () {
				var C = f.current,
					P = r && y.current ? y.current : as(C);
				if (P) {
					y.current = P;
					var D = Zl(P, C.value || C.placeholder || 'x', l, s),
						k = D[0],
						A = D[1];
					x.current !== k &&
						((x.current = k),
						C.style.setProperty('height', k + 'px', 'important'),
						i(k, { rowHeight: A }));
				}
			},
			$ = function (C) {
				c || m(), d(C);
			};
		return (
			u.useLayoutEffect(m),
			rs(m),
			ls(m),
			u.createElement('textarea', st({}, p, { onChange: $, ref: b }))
		);
	},
	os = u.forwardRef(ns),
	ga = ve(
		(
			{
				style: a,
				minRows: e = 3,
				maxRows: t = 8,
				cacheMeasurements: r = !1,
				disableAutosize: s = !1,
				onHeightChange: l,
				...n
			},
			d
		) => {
			const {
					Component: o,
					label: i,
					description: p,
					startContent: c,
					endContent: f,
					hasHelper: b,
					shouldLabelBeOutside: x,
					shouldLabelBeInside: y,
					errorMessage: m,
					getBaseProps: $,
					getLabelProps: v,
					getInputProps: C,
					getInnerWrapperProps: P,
					getInputWrapperProps: D,
					getHelperWrapperProps: k,
					getDescriptionProps: A,
					getErrorMessageProps: F,
				} = ca({ ...n, ref: d, isMultiline: !0 }),
				[R, h] = u.useState(e > 1),
				[E, O] = u.useState(!1),
				W = i ? g.jsx('label', { ...v(), children: i }) : null,
				z = C(),
				B = (V, w) => {
					if ((e === 1 && h(V >= w.rowHeight * 2), t > e)) {
						const I = V >= t * w.rowHeight;
						O(I);
					}
					l?.(V, w);
				},
				q = s
					? g.jsx('textarea', { ...z, style: j(z.style, a ?? {}) })
					: g.jsx(os, {
							...z,
							cacheMeasurements: r,
							'data-hide-scroll': M(!E),
							maxRows: t,
							minRows: e,
							style: j(z.style, a ?? {}),
							onHeightChange: B,
					  }),
				S = u.useMemo(
					() =>
						c || f
							? g.jsxs('div', { ...P(), children: [c, q, f] })
							: g.jsx('div', { ...P(), children: q }),
					[c, z, f, P]
				);
			return g.jsxs(o, {
				...$(),
				children: [
					x ? W : null,
					g.jsxs('div', { ...D(), 'data-has-multiple-rows': M(R), children: [y ? W : null, S] }),
					b
						? g.jsx('div', {
								...k(),
								children: m
									? g.jsx('div', { ...F(), children: m })
									: p
									  ? g.jsx('div', { ...A(), children: p })
									  : null,
						  })
						: null,
				],
			});
		}
	);
ga.displayName = 'NextUI.Textarea';
var is = ga;
function ds(a, e) {
	const {
			triggerRef: t,
			popoverRef: r,
			showArrow: s,
			offset: l = 7,
			crossOffset: n = 0,
			scrollRef: d,
			shouldFlip: o,
			boundaryElement: i,
			shouldCloseOnBlur: p = !0,
			placement: c = 'top',
			containerPadding: f,
			shouldCloseOnInteractOutside: b,
			isNonModal: x,
			isKeyboardDismissDisabled: y,
			...m
		} = a,
		$ = x || !0,
		{ overlayProps: v, underlayProps: C } = Cr(
			{
				isOpen: e.isOpen,
				onClose: e.close,
				shouldCloseOnBlur: p,
				isDismissable: !0,
				isKeyboardDismissDisabled: y,
				shouldCloseOnInteractOutside:
					b ||
					((A) => {
						let F = t?.current;
						return !F || !F.contains(A);
					}),
			},
			r
		),
		{
			overlayProps: P,
			arrowProps: D,
			placement: k,
		} = Kr({
			...m,
			shouldFlip: o,
			crossOffset: n,
			targetRef: t,
			overlayRef: r,
			isOpen: e.isOpen,
			scrollRef: d,
			boundaryElement: i,
			containerPadding: f,
			placement: Ml(c),
			offset: s ? l + 3 : l,
			onClose: () => {},
		});
	return (
		u.useEffect(() => {
			if (e.isOpen && !$ && r.current) return Dl([r.current]);
		}, [$, e.isOpen, r]),
		{ popoverProps: j(v, P), arrowProps: D, underlayProps: C, placement: k }
	);
}
function us(a) {
	var e, t;
	const [r, s] = Ee(a, yt.variantKeys),
		{
			as: l,
			children: n,
			ref: d,
			state: o,
			triggerRef: i,
			scrollRef: p,
			defaultOpen: c,
			onOpenChange: f,
			isOpen: b,
			isNonModal: x = !0,
			shouldFlip: y = !0,
			containerPadding: m = 12,
			shouldBlockScroll: $ = !1,
			shouldCloseOnBlur: v,
			portalContainer: C,
			placement: P = 'top',
			triggerType: D = 'dialog',
			showArrow: k = !1,
			offset: A = 7,
			crossOffset: F = 0,
			boundaryElement: R,
			isKeyboardDismissDisabled: h,
			shouldCloseOnInteractOutside: E,
			motionProps: O,
			className: W,
			classNames: z,
			onClose: B,
			...q
		} = r,
		S = l || 'div',
		V = we(d),
		w = u.useRef(null),
		I = u.useRef(!1),
		H = i || w,
		G = (e = a.disableAnimation) != null ? e : !1,
		X = ua({
			isOpen: b,
			defaultOpen: c,
			onOpenChange: (ee) => {
				f?.(ee), ee || B?.();
			},
		}),
		Y = o || X,
		{
			popoverProps: Z,
			underlayProps: J,
			placement: ae,
		} = ds(
			{
				triggerRef: H,
				isNonModal: x,
				popoverRef: V,
				placement: P,
				offset: A,
				scrollRef: p,
				shouldCloseOnBlur: v,
				boundaryElement: R,
				crossOffset: F,
				shouldFlip: y,
				containerPadding: m,
				isKeyboardDismissDisabled: h,
				shouldCloseOnInteractOutside: E,
			},
			Y
		),
		{ triggerProps: re } = Gt({ type: D }, Y, H),
		{ isFocusVisible: L, isFocused: fe, focusProps: ge } = De(),
		le = u.useMemo(() => yt({ ...s }), [...Object.values(s)]),
		Q = T(z?.base, W),
		ne = (ee = {}) => ({ ref: V, ...j(Z, q, ee), style: j(Z.style, q.style, ee.style) }),
		ye = (ee = {}) => ({
			'data-slot': 'base',
			'data-open': M(Y.isOpen),
			'data-focus': M(fe),
			'data-arrow': M(k),
			'data-focus-visible': M(L),
			'data-placement': kt(ae, P),
			...j(ge, ee),
			className: le.base({ class: T(Q) }),
			style: { outline: 'none' },
		}),
		Pe = u.useCallback(
			(ee = {}) => ({
				'data-slot': 'content',
				'data-open': M(Y.isOpen),
				'data-arrow': M(k),
				'data-placement': kt(ae, P),
				className: le.content({ class: T(z?.content, ee.className) }),
			}),
			[le, Y.isOpen, k, ae, P, z]
		),
		ie = u.useMemo(() => (Il(ae, P) ? ae : P), [ae, P]),
		xe = u.useCallback(
			(ee) => {
				var de;
				let Se;
				return (
					ee.pointerType === 'touch' && (a?.backdrop === 'blur' || a?.backdrop === 'opaque')
						? (Se = setTimeout(() => {
								I.current = !0;
						  }, 100))
						: (I.current = !0),
					(de = re.onPress) == null || de.call(re, ee),
					() => {
						clearTimeout(Se);
					}
				);
			},
			[re?.onPress]
		),
		se = u.useCallback(
			(ee = {}, de = null) => ({
				'data-slot': 'trigger',
				'aria-haspopup': 'dialog',
				...j(re, ee),
				onPress: xe,
				className: le.trigger({ class: T(z?.trigger, ee.className) }),
				ref: Mr(de, H),
			}),
			[Y, re, xe, H]
		),
		Ce = u.useCallback(
			(ee = {}) => ({
				'data-slot': 'backdrop',
				className: le.backdrop({ class: z?.backdrop }),
				onClick: (de) => {
					if (!I.current) {
						de.preventDefault();
						return;
					}
					Y.close(), (I.current = !1);
				},
				...J,
				...ee,
			}),
			[le, Y.isOpen, z, J]
		);
	return (
		u.useEffect(() => {
			if (Y.isOpen && V?.current) return Ir([V?.current]);
		}, [Y.isOpen, V]),
		{
			state: Y,
			Component: S,
			children: n,
			classNames: z,
			showArrow: k,
			triggerRef: H,
			placement: ie,
			isNonModal: x,
			popoverRef: V,
			portalContainer: C,
			isOpen: Y.isOpen,
			onClose: Y.close,
			disableAnimation: G,
			shouldBlockScroll: $,
			backdrop: (t = a.backdrop) != null ? t : 'transparent',
			motionProps: O,
			getBackdropProps: Ce,
			getPopoverProps: ne,
			getTriggerProps: se,
			getDialogProps: ye,
			getContentProps: Pe,
		}
	);
}
var cs = ({
		children: a,
		motionProps: e,
		placement: t,
		disableAnimation: r,
		style: s = {},
		...l
	}) =>
		r
			? g.jsx('div', { ...l, children: a })
			: g.jsx(dt.div, {
					animate: 'enter',
					exit: 'exit',
					initial: 'initial',
					style: { ...s, ...Kl(t === 'center' ? 'top' : t) },
					variants: Yt.scaleSpringOpacity,
					...j(l, e),
					children: a,
			  }),
	ba = ve((a, e) => {
		const {
				Component: t,
				state: r,
				children: s,
				placement: l,
				backdrop: n,
				portalContainer: d,
				disableAnimation: o,
				motionProps: i,
				isNonModal: p,
				getPopoverProps: c,
				getBackdropProps: f,
				getDialogProps: b,
				getContentProps: x,
			} = us({ ...a, shouldCloseOnInteractOutside: void 0, ref: e }),
			y = u.useMemo(
				() =>
					n === 'transparent'
						? null
						: o
						  ? g.jsx('div', { ...f() })
						  : g.jsx(dt.div, {
									animate: 'enter',
									exit: 'exit',
									initial: 'exit',
									variants: Yt.fade,
									...f(),
						    }),
				[n, o, f]
			);
		return g.jsxs(Dr, {
			portalContainer: d,
			children: [
				!p && y,
				g.jsx(t, {
					...c(),
					children: g.jsxs(cs, {
						disableAnimation: o,
						motionProps: i,
						placement: l,
						tabIndex: -1,
						...b(),
						children: [
							!p && g.jsx(ht, { onDismiss: r.close }),
							g.jsx('div', { ...x(), children: s }),
							g.jsx(ht, { onDismiss: r.close }),
						],
					}),
				}),
			],
		});
	});
ba.displayName = 'NextUI.FreeSoloPopover';
var fs = ba;
function ps(a) {
	return a && a.__esModule ? a.default : a;
}
var ha = {},
	ma = {};
ma = { longPressMessage: 'اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة' };
var va = {};
va = {
	longPressMessage:
		'Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто',
};
var ya = {};
ya = {
	longPressMessage: 'Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku',
};
var xa = {};
xa = { longPressMessage: 'Langt tryk eller tryk på Alt + pil ned for at åbne menuen' };
var wa = {};
wa = {
	longPressMessage: 'Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen',
};
var Pa = {};
Pa = {
	longPressMessage: 'Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού',
};
var Sa = {};
Sa = { longPressMessage: 'Long press or press Alt + ArrowDown to open menu' };
var $a = {};
$a = { longPressMessage: 'Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú' };
var Ca = {};
Ca = { longPressMessage: 'Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool' };
var Ka = {};
Ka = {
	longPressMessage: 'Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli',
};
var Ma = {};
Ma = {
	longPressMessage:
		'Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu.',
};
var Ia = {};
Ia = { longPressMessage: 'לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט' };
var Da = {};
Da = {
	longPressMessage:
		'Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika',
};
var ka = {};
ka = {
	longPressMessage:
		'Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához',
};
var Ea = {};
Ea = { longPressMessage: 'Premere a lungo o premere Alt + Freccia giù per aprire il menu' };
var _a = {};
_a = { longPressMessage: '長押しまたは Alt+下矢印キーでメニューを開く' };
var Aa = {};
Aa = { longPressMessage: '길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기' };
var Ba = {};
Ba = {
	longPressMessage:
		'Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.',
};
var za = {};
za = {
	longPressMessage:
		'Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa',
};
var Fa = {};
Fa = { longPressMessage: 'Langt trykk eller trykk Alt + PilNed for å åpne menyen' };
var Na = {};
Na = { longPressMessage: 'Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen' };
var Ra = {};
Ra = {
	longPressMessage:
		'Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu',
};
var Wa = {};
Wa = {
	longPressMessage: 'Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu',
};
var Oa = {};
Oa = { longPressMessage: 'Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu' };
var ja = {};
ja = {
	longPressMessage: 'Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul',
};
var La = {};
La = {
	longPressMessage: 'Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню',
};
var Ta = {};
Ta = {
	longPressMessage:
		'Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol',
};
var Va = {};
Va = {
	longPressMessage:
		'Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol',
};
var Ha = {};
Ha = {
	longPressMessage: 'Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni',
};
var Ua = {};
Ua = { longPressMessage: 'Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn' };
var qa = {};
qa = { longPressMessage: 'Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın' };
var Ga = {};
Ga = {
	longPressMessage:
		'Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню',
};
var Ya = {};
Ya = { longPressMessage: '长按或按 Alt + 向下方向键以打开菜单' };
var Xa = {};
Xa = { longPressMessage: '長按或按 Alt+向下鍵以開啟功能表' };
ha = {
	'ar-AE': ma,
	'bg-BG': va,
	'cs-CZ': ya,
	'da-DK': xa,
	'de-DE': wa,
	'el-GR': Pa,
	'en-US': Sa,
	'es-ES': $a,
	'et-EE': Ca,
	'fi-FI': Ka,
	'fr-FR': Ma,
	'he-IL': Ia,
	'hr-HR': Da,
	'hu-HU': ka,
	'it-IT': Ea,
	'ja-JP': _a,
	'ko-KR': Aa,
	'lt-LT': Ba,
	'lv-LV': za,
	'nb-NO': Fa,
	'nl-NL': Na,
	'pl-PL': Ra,
	'pt-BR': Wa,
	'pt-PT': Oa,
	'ro-RO': ja,
	'ru-RU': La,
	'sk-SK': Ta,
	'sl-SI': Va,
	'sr-SP': Ha,
	'sv-SE': Ua,
	'tr-TR': qa,
	'uk-UA': Ga,
	'zh-CN': Ya,
	'zh-TW': Xa,
};
function gs(a, e, t) {
	let { type: r = 'menu', isDisabled: s, trigger: l = 'press' } = a,
		n = ke(),
		{ triggerProps: d, overlayProps: o } = Gt({ type: r }, e, t),
		i = (b) => {
			if (!s && !(l === 'longPress' && !b.altKey) && t && t.current)
				switch (b.key) {
					case 'Enter':
					case ' ':
						if (l === 'longPress') return;
					case 'ArrowDown':
						'continuePropagation' in b || b.stopPropagation(),
							b.preventDefault(),
							e.toggle('first');
						break;
					case 'ArrowUp':
						'continuePropagation' in b || b.stopPropagation(), b.preventDefault(), e.toggle('last');
						break;
					default:
						'continuePropagation' in b && b.continuePropagation();
				}
		},
		p = kr(ps(ha)),
		{ longPressProps: c } = Lt({
			isDisabled: s || l !== 'longPress',
			accessibilityDescription: p.format('longPressMessage'),
			onLongPressStart() {
				e.close();
			},
			onLongPress() {
				e.open('first');
			},
		}),
		f = {
			onPressStart(b) {
				b.pointerType !== 'touch' &&
					b.pointerType !== 'keyboard' &&
					!s &&
					e.toggle(b.pointerType === 'virtual' ? 'first' : null);
			},
			onPress(b) {
				b.pointerType === 'touch' && !s && e.toggle();
			},
		};
	return (
		delete d.onPress,
		{
			menuTriggerProps: { ...d, ...(l === 'press' ? f : c), id: n, onKeyDown: i },
			menuProps: { ...o, 'aria-labelledby': n, autoFocus: e.focusStrategy || !0, onClose: e.close },
		}
	);
}
var bs = 700;
function hs() {
	return Er() || typeof window > 'u' ? !1 : window.screen.width <= bs;
}
function ms(a) {
	let e = ua(a),
		[t, r] = u.useState(null);
	return {
		focusStrategy: t,
		...e,
		open(s = null) {
			r(s), e.open();
		},
		toggle(s = null) {
			r(s), e.toggle();
		},
	};
}
class Rt {
	*[Symbol.iterator]() {
		yield* this.iterable;
	}
	get size() {
		return this.keyMap.size;
	}
	getKeys() {
		return this.keyMap.keys();
	}
	getKeyBefore(e) {
		let t = this.keyMap.get(e);
		return t ? t.prevKey : null;
	}
	getKeyAfter(e) {
		let t = this.keyMap.get(e);
		return t ? t.nextKey : null;
	}
	getFirstKey() {
		return this.firstKey;
	}
	getLastKey() {
		return this.lastKey;
	}
	getItem(e) {
		return this.keyMap.get(e);
	}
	at(e) {
		const t = [...this.getKeys()];
		return this.getItem(t[e]);
	}
	getChildren(e) {
		let t = this.keyMap.get(e);
		return t?.childNodes || [];
	}
	constructor(e) {
		(this.keyMap = new Map()), (this.iterable = e);
		let t = (l) => {
			if ((this.keyMap.set(l.key, l), l.childNodes && l.type === 'section'))
				for (let n of l.childNodes) t(n);
		};
		for (let l of e) t(l);
		let r,
			s = 0;
		for (let [l, n] of this.keyMap)
			r ? ((r.nextKey = l), (n.prevKey = r.key)) : ((this.firstKey = l), (n.prevKey = void 0)),
				n.type === 'item' && (n.index = s++),
				(r = n),
				(r.nextKey = void 0);
		this.lastKey = r?.key;
	}
}
function Za(a) {
	let { filter: e } = a,
		t = wl(a),
		r = u.useMemo(() => (a.disabledKeys ? new Set(a.disabledKeys) : new Set()), [a.disabledKeys]),
		s = u.useCallback((i) => (e ? new Rt(e(i)) : new Rt(i)), [e]),
		l = u.useMemo(
			() => ({ suppressTextValueWarning: a.suppressTextValueWarning }),
			[a.suppressTextValueWarning]
		),
		n = hl(a, s, l),
		d = u.useMemo(() => new Pl(n, t), [n, t]);
	const o = u.useRef(null);
	return (
		u.useEffect(() => {
			if (t.focusedKey != null && !n.getItem(t.focusedKey)) {
				const i = o.current.getItem(t.focusedKey),
					p = [...o.current.getKeys()]
						.map((y) => {
							const m = o.current.getItem(y);
							return m.type === 'item' ? m : null;
						})
						.filter((y) => y !== null),
					c = [...n.getKeys()]
						.map((y) => {
							const m = n.getItem(y);
							return m.type === 'item' ? m : null;
						})
						.filter((y) => y !== null),
					f = p.length - c.length;
				let b = Math.min(f > 1 ? Math.max(i.index - f + 1, 0) : i.index, c.length - 1),
					x;
				for (; b >= 0; ) {
					if (!d.isDisabled(c[b].key)) {
						x = c[b];
						break;
					}
					b < c.length - 1 ? b++ : (b > i.index && (b = i.index), b--);
				}
				t.setFocusedKey(x ? x.key : null);
			}
			o.current = n;
		}, [n, d, t, t.focusedKey]),
		{ collection: n, disabledKeys: r, selectionManager: d }
	);
}
function vs(a = {}) {
	const {
			domRef: e,
			isEnabled: t = !0,
			overflowCheck: r = 'vertical',
			visibility: s = 'auto',
			offset: l = 0,
			onVisibilityChange: n,
			updateDeps: d = [],
		} = a,
		o = u.useRef(s);
	u.useEffect(() => {
		const i = e?.current;
		if (!i || !t) return;
		const p = (b, x, y, m, $) => {
				if (s === 'auto') {
					const v = `${m}${Jr($)}Scroll`;
					x && y
						? ((i.dataset[v] = 'true'),
						  i.removeAttribute(`data-${m}-scroll`),
						  i.removeAttribute(`data-${$}-scroll`))
						: ((i.dataset[`${m}Scroll`] = x.toString()),
						  (i.dataset[`${$}Scroll`] = y.toString()),
						  i.removeAttribute(`data-${m}-${$}-scroll`));
				} else {
					const v = x && y ? 'both' : x ? m : y ? $ : 'none';
					v !== o.current && (n?.(v), (o.current = v));
				}
			},
			c = () => {
				const b = [
					{ type: 'vertical', prefix: 'top', suffix: 'bottom' },
					{ type: 'horizontal', prefix: 'left', suffix: 'right' },
				];
				for (const { type: x, prefix: y, suffix: m } of b)
					if (r === x || r === 'both') {
						const $ = x === 'vertical' ? i.scrollTop > l : i.scrollLeft > l,
							v =
								x === 'vertical'
									? i.scrollTop + i.clientHeight + l < i.scrollHeight
									: i.scrollLeft + i.clientWidth + l < i.scrollWidth;
						p(x, $, v, y, m);
					}
			},
			f = () => {
				['top', 'bottom', 'topBottom', 'left', 'right', 'leftRight'].forEach((b) => {
					i.removeAttribute(`data-${b}-scroll`);
				});
			};
		return (
			c(),
			i.addEventListener('scroll', c),
			s !== 'auto' &&
				(f(),
				s === 'both'
					? ((i.dataset.topBottomScroll = String(r === 'vertical')),
					  (i.dataset.leftRightScroll = String(r === 'horizontal')))
					: ((i.dataset.topBottomScroll = 'false'),
					  (i.dataset.leftRightScroll = 'false'),
					  ['top', 'bottom', 'left', 'right'].forEach((b) => {
							i.dataset[`${b}Scroll`] = String(s === b);
					  }))),
			() => {
				i.removeEventListener('scroll', c), f();
			}
		);
	}, [...d, t, s, r, n, e]);
}
function ys(a) {
	var e;
	const [t, r] = Ee(a, xt.variantKeys),
		{
			ref: s,
			as: l,
			children: n,
			className: d,
			style: o,
			size: i = 40,
			offset: p = 0,
			visibility: c = 'auto',
			isEnabled: f = !0,
			onVisibilityChange: b,
			...x
		} = t,
		y = l || 'div',
		m = we(s);
	vs({
		domRef: m,
		offset: p,
		visibility: c,
		isEnabled: f,
		onVisibilityChange: b,
		updateDeps: [n],
		overflowCheck: (e = a.orientation) != null ? e : 'vertical',
	});
	const $ = u.useMemo(() => xt({ ...r, className: d }), [...Object.values(r), d]);
	return {
		Component: y,
		styles: $,
		domRef: m,
		children: n,
		getBaseProps: (C = {}) => {
			var P;
			return {
				ref: m,
				className: $,
				'data-orientation': (P = a.orientation) != null ? P : 'vertical',
				style: { '--scroll-shadow-size': `${i}px`, ...o, ...C.style },
				...x,
				...C,
			};
		},
	};
}
var Ja = ve((a, e) => {
	const { Component: t, children: r, getBaseProps: s } = ys({ ...a, ref: e });
	return g.jsx(t, { ...s(), children: r });
});
Ja.displayName = 'NextUI.ScrollShadow';
var xs = Ja;
function ws(a, e, t) {
	var r;
	let { autoComplete: s, name: l, isDisabled: n, isRequired: d, selectionMode: o, onChange: i } = a,
		p = _r(),
		{ visuallyHiddenProps: c } = Ar();
	return (
		Ut(a.selectRef, e.selectedKey, e.setSelectedKey),
		{
			containerProps: { ...c, 'aria-hidden': !0, 'data-a11y-ignore': 'aria-hidden-focus' },
			inputProps: {
				type: 'text',
				tabIndex: p == null || e.isFocused || e.isOpen ? -1 : 0,
				autoComplete: s,
				value: (r = [...e.selectedKeys].join(',')) != null ? r : '',
				required: d,
				style: { fontSize: 16 },
				onFocus: () => {
					var f;
					return (f = t.current) == null ? void 0 : f.focus();
				},
				disabled: n,
				onChange: () => {},
			},
			selectProps: {
				name: l,
				tabIndex: -1,
				autoComplete: s,
				disabled: n,
				size: e.collection.size,
				value:
					o === 'multiple' ? [...e.selectedKeys].map((f) => String(f)) : [...e.selectedKeys][0],
				multiple: o === 'multiple',
				onChange: (f) => {
					e.setSelectedKeys(f.target.value), i?.(f);
				},
			},
		}
	);
}
function Ps(a) {
	var e;
	let { state: t, triggerRef: r, selectRef: s, label: l, name: n, isDisabled: d } = a,
		{ containerProps: o, inputProps: i, selectProps: p } = ws({ ...a, selectRef: s }, t, r);
	return t.collection.size <= 300
		? g.jsxs('div', {
				...o,
				'data-testid': 'hidden-select-container',
				children: [
					g.jsx('input', { ...i }),
					g.jsxs('label', {
						children: [
							l,
							g.jsxs('select', {
								...p,
								ref: s,
								children: [
									g.jsx('option', {}),
									[...t.collection.getKeys()].map((c) => {
										let f = t.collection.getItem(c);
										if (f?.type === 'item')
											return g.jsx('option', { value: f.key, children: f.textValue }, f.key);
									}),
								],
							}),
						],
					}),
				],
		  })
		: n
		  ? g.jsx('input', {
					autoComplete: p.autoComplete,
					disabled: d,
					name: n,
					type: 'hidden',
					value: (e = [...t.selectedKeys].join(',')) != null ? e : '',
		    })
		  : null;
}
function Ss(a) {
	const {
			collection: e,
			disabledKeys: t,
			selectionManager: r,
			selectionManager: { setSelectedKeys: s, selectedKeys: l, selectionMode: n },
		} = Za(a),
		d = [],
		o =
			l.size !== 0
				? Array.from(l)
						.map((i) => {
							const p = e.getItem(i);
							return p || d.push(i), p;
						})
						.filter(Boolean)
				: null;
	return (
		d.length &&
			console.warn(
				`Select: Keys "${d.join(', ')}" passed to "selectedKeys" are not present in the collection.`
			),
		{
			collection: e,
			disabledKeys: t,
			selectionManager: r,
			selectionMode: n,
			selectedKeys: l,
			setSelectedKeys: s.bind(r),
			selectedItems: o,
		}
	);
}
function $s(a) {
	const [e, t] = u.useState(!1),
		r = ms(a),
		s = Ss({
			...a,
			onSelectionChange: (l) => {
				a.onSelectionChange != null &&
					(l === 'all'
						? a.onSelectionChange(new Set(s.collection.getKeys()))
						: a.onSelectionChange(l)),
					a.selectionMode === 'single' && r.close();
			},
		});
	return {
		...s,
		...r,
		close() {
			r.close();
		},
		open() {
			s.collection.size !== 0 && r.open();
		},
		toggle(l) {
			s.collection.size !== 0 && r.toggle(l);
		},
		isFocused: e,
		setFocused: t,
	};
}
function Cs(a, e, t) {
	const { disallowEmptySelection: r, isDisabled: s } = a,
		l = Wt({ usage: 'search', sensitivity: 'base' }),
		n = u.useMemo(
			() => new Jt(e.collection, e.disabledKeys, null, l),
			[e.collection, e.disabledKeys, l]
		),
		{ menuTriggerProps: d, menuProps: o } = gs({ isDisabled: s, type: 'listbox' }, e, t),
		i = (v) => {
			if (e.selectionMode === 'single')
				switch (v.key) {
					case 'ArrowLeft': {
						v.preventDefault();
						const C =
							e.selectedKeys.size > 0
								? n.getKeyAbove(e.selectedKeys.values().next().value)
								: n.getFirstKey();
						C && e.setSelectedKeys([C]);
						break;
					}
					case 'ArrowRight': {
						v.preventDefault();
						const C =
							e.selectedKeys.size > 0
								? n.getKeyBelow(e.selectedKeys.values().next().value)
								: n.getFirstKey();
						C && e.setSelectedKeys([C]);
						break;
					}
				}
		},
		{ typeSelectProps: p } = Zt({
			keyboardDelegate: n,
			selectionManager: e.selectionManager,
			onTypeSelect(v) {
				e.setSelectedKeys([v]);
			},
		}),
		{
			labelProps: c,
			fieldProps: f,
			descriptionProps: b,
			errorMessageProps: x,
		} = da({ ...a, labelElementType: 'span' });
	(p.onKeyDown = p.onKeyDownCapture), delete p.onKeyDownCapture;
	const y = He(a, { labelable: !0 }),
		m = j(p, d, f),
		$ = ke();
	return {
		labelProps: {
			...c,
			onClick: () => {
				var v;
				a.isDisabled || ((v = t.current) == null || v.focus(), Ht('keyboard'));
			},
		},
		triggerProps: j(y, {
			...m,
			onKeyDown: it(m.onKeyDown, i, a.onKeyDown),
			onKeyUp: a.onKeyUp,
			'aria-labelledby': [
				$,
				y['aria-label'] !== void 0
					? y['aria-labelledby'] !== void 0
						? y['aria-labelledby']
						: m.id
					: m['aria-labelledby'],
			].join(' '),
			onFocus(v) {
				e.isFocused || (a.onFocus && a.onFocus(v), e.setFocused(!0));
			},
			onBlur(v) {
				e.isOpen || (a.onBlur && a.onBlur(v), e.setFocused(!1));
			},
		}),
		valueProps: { id: $ },
		menuProps: {
			...o,
			disallowEmptySelection: r,
			autoFocus: e.focusStrategy || !0,
			shouldSelectOnPressUp: !0,
			shouldFocusOnHover: !0,
			onBlur: (v) => {
				v.currentTarget.contains(v.relatedTarget) || (a.onBlur && a.onBlur(v), e.setFocused(!1));
			},
			onFocus: o?.onFocus,
			'aria-labelledby': [
				f['aria-labelledby'],
				m['aria-label'] && !f['aria-labelledby'] ? m.id : null,
			]
				.filter(Boolean)
				.join(' '),
		},
		descriptionProps: b,
		errorMessageProps: x,
	};
}
function Ks(a) {
	var e, t;
	const [r, s] = Ee(a, wt.variantKeys),
		l = (e = a.disableAnimation) != null ? e : !1,
		{
			ref: n,
			as: d,
			isOpen: o,
			label: i,
			name: p,
			isLoading: c,
			selectorIcon: f,
			defaultOpen: b,
			onOpenChange: x,
			startContent: y,
			endContent: m,
			description: $,
			errorMessage: v,
			renderValue: C,
			onSelectionChange: P,
			placeholder: D,
			children: k,
			disallowEmptySelection: A = !1,
			selectionMode: F = 'single',
			spinnerRef: R,
			scrollRef: h,
			popoverProps: E = {},
			scrollShadowProps: O = {},
			listboxProps: W = {},
			spinnerProps: z = {},
			validationState: B,
			onChange: q,
			onClose: S,
			className: V,
			classNames: w,
			...I
		} = r,
		H = we(h),
		G = {
			popoverProps: j(
				{ placement: 'bottom', triggerScaleOnOpen: !1, offset: 5, disableAnimation: l },
				E
			),
			scrollShadowProps: j(
				{
					ref: H,
					isEnabled: (t = a.showScrollIndicators) != null ? t : !0,
					hideScrollBar: !0,
					offset: 15,
				},
				O
			),
			listboxProps: j({ disableAnimation: l }, W),
		},
		X = d || 'button',
		Y = typeof X == 'string',
		Z = we(n),
		J = u.useRef(null),
		ae = u.useRef(null),
		re = u.useRef(null),
		L = $s({
			...r,
			isOpen: o,
			selectionMode: F,
			disallowEmptySelection: A,
			children: k,
			isRequired: a?.isRequired,
			isDisabled: a?.isDisabled,
			defaultOpen: b,
			onOpenChange: (K) => {
				x?.(K), K || S?.();
			},
			onSelectionChange: (K) => {
				if ((P?.(K), q && typeof q == 'function' && Z.current)) {
					const be = {
						target: { ...Z.current, value: Array.from(K).join(','), name: Z.current.name },
					};
					q(be);
				}
			},
		}),
		{
			labelProps: fe,
			triggerProps: ge,
			valueProps: le,
			menuProps: Q,
			descriptionProps: ne,
			errorMessageProps: ye,
		} = Cs({ ...r, disallowEmptySelection: A, isDisabled: a?.isDisabled }, L, J),
		{ isPressed: Pe, buttonProps: ie } = Vt(ge, J),
		{ focusProps: xe, isFocused: se, isFocusVisible: Ce } = De(),
		{ isHovered: ee, hoverProps: de } = Fe({ isDisabled: a?.isDisabled }),
		Se = u.useMemo(() => {
			var K;
			return (!a.labelPlacement || a.labelPlacement === 'inside') && !i
				? 'outside'
				: (K = a.labelPlacement) != null
				  ? K
				  : 'inside';
		}, [a.labelPlacement, i]),
		ue = !!$ || !!v,
		_e = !!D,
		Ne = B === 'invalid' || a.isInvalid,
		te = Se === 'outside-left' || (Se === 'outside' && (_e || !!a.isMultiline)),
		Ue = Se === 'inside',
		Re = L.isOpen || _e || !!L.selectedItems || !!y || !!m || !!a.isMultiline,
		We = !!L.selectedItems,
		Oe = !!i,
		je = T(w?.base, V),
		U = u.useMemo(() => wt({ ...s, isInvalid: Ne, className: V }), [...Object.values(s), Ne, V]);
	u.useEffect(() => {
		if (L.isOpen && re.current && ae.current) {
			let K = ae.current.querySelector('[aria-selected=true] [data-label=true]'),
				be = H.current;
			if (K && be && K.parentElement) {
				let fr = (be?.getBoundingClientRect()).height;
				be.scrollTop = K.parentElement.offsetTop - fr / 2 + K.parentElement.clientHeight / 2;
			}
		}
	}, [L.isOpen, l]),
		u.useEffect(() => {
			if (L.isOpen && re.current && J.current) {
				let K = J.current.getBoundingClientRect(),
					be = re.current;
				be.style.width = K.width + 'px';
			}
		}, [L.isOpen]);
	const qe = u.useCallback(
			(K = {}) => ({
				'data-slot': 'base',
				'data-filled': M(Re),
				'data-has-value': M(We),
				'data-has-label': M(Oe),
				'data-has-helper': M(ue),
				className: U.base({ class: T(je, K.className) }),
				...K,
			}),
			[U, ue, We, Oe, Re, je]
		),
		Ge = u.useCallback(
			(K = {}) => ({
				ref: J,
				'data-slot': 'trigger',
				'data-open': M(L.isOpen),
				'data-disabled': M(a?.isDisabled),
				'data-focus': M(se),
				'data-pressed': M(Pe),
				'data-focus-visible': M(Ce),
				'data-hover': M(ee),
				className: U.trigger({ class: w?.trigger }),
				...j(ie, xe, de, $e(I, { enabled: Y }), $e(K)),
			}),
			[U, J, L.isOpen, w?.trigger, a?.isDisabled, se, Pe, Ce, ee, ie, xe, de, I, Y]
		),
		Ye = u.useCallback(
			(K = {}) => ({
				state: L,
				triggerRef: J,
				selectRef: Z,
				selectionMode: F,
				label: a?.label,
				name: a?.name,
				isRequired: a?.isRequired,
				autoComplete: a?.autoComplete,
				isDisabled: a?.isDisabled,
				onChange: q,
				...K,
			}),
			[L, F, a?.label, a?.autoComplete, a?.name, a?.isDisabled, J]
		),
		Xe = u.useCallback(
			(K = {}) => ({
				'data-slot': 'label',
				className: U.label({ class: T(w?.label, K.className) }),
				...fe,
				...K,
			}),
			[U, w?.label, fe]
		),
		N = u.useCallback(
			(K = {}) => ({
				'data-slot': 'value',
				className: U.value({ class: T(w?.value, K.className) }),
				...le,
				...K,
			}),
			[U, w?.value, le]
		),
		Ke = u.useCallback(
			(K = {}) => ({
				'data-slot': 'listboxWrapper',
				className: U.listboxWrapper({ class: T(w?.listboxWrapper, K?.className) }),
				...j(G.scrollShadowProps, K),
			}),
			[U.listboxWrapper, w?.listboxWrapper, G.scrollShadowProps]
		),
		rr = (K = {}) => ({
			state: L,
			ref: ae,
			'data-slot': 'listbox',
			className: U.listbox({ class: T(w?.listbox, K?.className) }),
			...j(G.listboxProps, K, Q),
		}),
		lr = u.useCallback(
			(K = {}) => {
				var be, Ze;
				return {
					state: L,
					triggerRef: J,
					ref: re,
					'data-slot': 'popover',
					scrollRef: ae,
					triggerType: 'listbox',
					classNames: { content: U.popoverContent({ class: T(w?.popoverContent, K.className) }) },
					...j(G.popoverProps, K),
					offset:
						L.selectedItems && L.selectedItems.length > 0
							? L.selectedItems.length * 1e-8 +
							  (((be = G.popoverProps) == null ? void 0 : be.offset) || 0)
							: (Ze = G.popoverProps) == null
							  ? void 0
							  : Ze.offset,
				};
			},
			[U, w?.popoverContent, G.popoverProps, J, L, L.selectedItems]
		),
		sr = u.useCallback(
			() => ({
				'data-slot': 'selectorIcon',
				'aria-hidden': M(!0),
				'data-open': M(L.isOpen),
				className: U.selectorIcon({ class: w?.selectorIcon }),
			}),
			[U, w?.selectorIcon, L?.isOpen]
		),
		nr = u.useCallback(
			(K = {}) => ({
				...K,
				'data-slot': 'innerWrapper',
				className: U.innerWrapper({ class: T(w?.innerWrapper, K?.className) }),
			}),
			[U, w?.innerWrapper]
		),
		or = u.useCallback(
			(K = {}) => ({
				...K,
				'data-slot': 'helperWrapper',
				className: U.helperWrapper({ class: T(w?.helperWrapper, K?.className) }),
			}),
			[U, w?.helperWrapper]
		),
		ir = u.useCallback(
			(K = {}) => ({
				...K,
				...ne,
				'data-slot': 'description',
				className: U.description({ class: T(w?.description, K?.className) }),
			}),
			[U, w?.description]
		),
		dr = u.useCallback(
			(K = {}) => ({
				...K,
				'data-slot': 'mainWrapper',
				className: U.mainWrapper({ class: T(w?.mainWrapper, K?.className) }),
			}),
			[U, w?.mainWrapper]
		),
		ur = u.useCallback(
			(K = {}) => ({
				...K,
				...ye,
				'data-slot': 'errorMessage',
				className: U.errorMessage({ class: T(w?.errorMessage, K?.className) }),
			}),
			[U, ye, w?.errorMessage]
		),
		cr = u.useCallback(
			(K = {}) => ({
				'aria-hidden': M(!0),
				'data-slot': 'spinner',
				color: 'current',
				size: 'sm',
				...z,
				...K,
				ref: R,
				className: U.spinner({ class: T(w?.spinner, K?.className) }),
			}),
			[U, R, z, w?.spinner]
		);
	return {
		Component: X,
		domRef: Z,
		state: L,
		label: i,
		name: p,
		triggerRef: J,
		isLoading: c,
		placeholder: D,
		startContent: y,
		endContent: m,
		description: $,
		selectorIcon: f,
		errorMessage: v,
		hasHelper: ue,
		labelPlacement: Se,
		hasPlaceholder: _e,
		renderValue: C,
		selectionMode: F,
		disableAnimation: l,
		shouldLabelBeOutside: te,
		shouldLabelBeInside: Ue,
		getBaseProps: qe,
		getTriggerProps: Ge,
		getLabelProps: Xe,
		getValueProps: N,
		getListboxProps: rr,
		getPopoverProps: lr,
		getSpinnerProps: cr,
		getMainWrapperProps: dr,
		getListboxWrapperProps: Ke,
		getHiddenSelectProps: Ye,
		getInnerWrapperProps: nr,
		getHelperWrapperProps: or,
		getDescriptionProps: ir,
		getErrorMessageProps: ur,
		getSelectorIconProps: sr,
	};
}
function Ms(a) {
	const { isSelected: e, disableAnimation: t, ...r } = a;
	return g.jsx('svg', {
		'aria-hidden': 'true',
		'data-selected': e,
		role: 'presentation',
		viewBox: '0 0 17 18',
		...r,
		children: g.jsx('polyline', {
			fill: 'none',
			points: '1 9 7 14 15 4',
			stroke: 'currentColor',
			strokeDasharray: 22,
			strokeDashoffset: e ? 44 : 66,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
			strokeWidth: 1.5,
			style: t ? {} : { transition: 'stroke-dashoffset 200ms ease' },
		}),
	});
}
const ut = new WeakMap();
function Is(a) {
	return typeof a == 'string' ? a.replace(/\s*/g, '') : '' + a;
}
function Ds(a, e) {
	let t = ut.get(a);
	if (!t) throw new Error('Unknown list');
	return `${t.id}-option-${Is(e)}`;
}
function ks(a, e, t) {
	let r = He(a, { labelable: !0 }),
		s = a.selectionBehavior || 'toggle',
		l = a.linkBehavior || (s === 'replace' ? 'action' : 'override');
	s === 'toggle' && l === 'action' && (l = 'override');
	let { listProps: n } = dl({
			...a,
			ref: t,
			selectionManager: e.selectionManager,
			collection: e.collection,
			disabledKeys: e.disabledKeys,
			linkBehavior: l,
		}),
		{ focusWithinProps: d } = qt({
			onFocusWithin: a.onFocus,
			onBlurWithin: a.onBlur,
			onFocusWithinChange: a.onFocusChange,
		}),
		o = ke(a.id);
	ut.set(e, {
		id: o,
		shouldUseVirtualFocus: a.shouldUseVirtualFocus,
		shouldSelectOnPressUp: a.shouldSelectOnPressUp,
		shouldFocusOnHover: a.shouldFocusOnHover,
		isVirtualized: a.isVirtualized,
		onAction: a.onAction,
		linkBehavior: l,
	});
	let { labelProps: i, fieldProps: p } = ia({ ...a, id: o, labelElementType: 'span' });
	return {
		labelProps: i,
		listBoxProps: j(
			r,
			d,
			e.selectionManager.selectionMode === 'multiple' ? { 'aria-multiselectable': 'true' } : {},
			{ role: 'listbox', ...j(p, n) }
		),
	};
}
function Es(a, e, t) {
	var r;
	let { key: s } = a,
		l = ut.get(e);
	var n;
	let d = (n = a.isDisabled) !== null && n !== void 0 ? n : e.disabledKeys.has(s);
	var o;
	let i = (o = a.isSelected) !== null && o !== void 0 ? o : e.selectionManager.isSelected(s);
	var p;
	let c = (p = a.shouldSelectOnPressUp) !== null && p !== void 0 ? p : l?.shouldSelectOnPressUp;
	var f;
	let b = (f = a.shouldFocusOnHover) !== null && f !== void 0 ? f : l?.shouldFocusOnHover;
	var x;
	let y = (x = a.shouldUseVirtualFocus) !== null && x !== void 0 ? x : l?.shouldUseVirtualFocus;
	var m;
	let $ = (m = a.isVirtualized) !== null && m !== void 0 ? m : l?.isVirtualized,
		v = Le(),
		C = Le(),
		P = {
			role: 'option',
			'aria-disabled': d || void 0,
			'aria-selected': e.selectionManager.selectionMode !== 'none' ? i : void 0,
		};
	(Tt() && Br()) ||
		((P['aria-label'] = a['aria-label']), (P['aria-labelledby'] = v), (P['aria-describedby'] = C));
	let D = e.collection.getItem(s);
	if ($) {
		let W = Number(D?.index);
		(P['aria-posinset'] = Number.isNaN(W) ? void 0 : W + 1), (P['aria-setsize'] = yl(e.collection));
	}
	let {
			itemProps: k,
			isPressed: A,
			isFocused: F,
			hasAction: R,
			allowsSelection: h,
		} = il({
			selectionManager: e.selectionManager,
			key: s,
			ref: t,
			shouldSelectOnPressUp: c,
			allowsDifferentPressOrigin: c && b,
			isVirtualized: $,
			shouldUseVirtualFocus: y,
			isDisabled: d,
			onAction: l?.onAction
				? () => {
						var W;
						return l == null || (W = l.onAction) === null || W === void 0 ? void 0 : W.call(l, s);
				  }
				: void 0,
			linkBehavior: l?.linkBehavior,
		}),
		{ hoverProps: E } = Fe({
			isDisabled: d || !b,
			onHoverStart() {
				mt() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(s));
			},
		}),
		O = He(D?.props, {
			isLink: !!(!(D == null || (r = D.props) === null || r === void 0) && r.href),
		});
	return (
		delete O.id,
		{
			optionProps: { ...P, ...j(O, k, E), id: Ds(e, s) },
			labelProps: { id: v },
			descriptionProps: { id: C },
			isFocused: F,
			isFocusVisible: F && mt(),
			isSelected: i,
			isDisabled: d,
			isPressed: A,
			allowsSelection: h,
			hasAction: R,
		}
	);
}
function _s(a) {
	let { heading: e, 'aria-label': t } = a,
		r = ke();
	return {
		itemProps: { role: 'presentation' },
		headingProps: e ? { id: r, role: 'presentation' } : {},
		groupProps: { role: 'group', 'aria-label': t, 'aria-labelledby': e ? r : void 0 },
	};
}
function As(a) {
	const [e, t] = Ee(a, St.variantKeys),
		{
			as: r,
			item: s,
			state: l,
			description: n,
			startContent: d,
			endContent: o,
			isVirtualized: i,
			selectedIcon: p,
			className: c,
			classNames: f,
			autoFocus: b,
			onPress: x,
			onClick: y,
			shouldHighlightOnFocus: m,
			hideSelectedIcon: $ = !1,
			isReadOnly: v = !1,
			...C
		} = e,
		P = a.disableAnimation,
		D = u.useRef(null),
		k = r || (a.href ? 'a' : 'li'),
		A = typeof k == 'string',
		{ rendered: F, key: R } = s,
		h = l.disabledKeys.has(R) || a.isDisabled,
		E = l.selectionManager.selectionMode !== 'none',
		O = hs(),
		{ pressProps: W, isPressed: z } = zr({ ref: D, isDisabled: h, onPress: x }),
		{ isHovered: B, hoverProps: q } = Fe({ isDisabled: h }),
		{ isFocusVisible: S, focusProps: V } = De({ autoFocus: b }),
		{
			isFocused: w,
			isSelected: I,
			optionProps: H,
			labelProps: G,
			descriptionProps: X,
		} = Es({ key: R, isDisabled: h, 'aria-label': e['aria-label'], isVirtualized: i }, l, D);
	let Y = H;
	const Z = u.useMemo(
			() => St({ ...t, isDisabled: h, disableAnimation: P }),
			[...Object.values(t), h, P]
		),
		J = T(f?.base, c);
	v && (Y = el(Y));
	const ae = u.useMemo(() => (m && w ? !0 : O ? B || z : B), [B, z, w, O, m]),
		re = (Q = {}) => ({
			ref: D,
			...j({ onClick: y }, Y, v ? {} : j(V, W), q, $e(C, { enabled: A }), Q),
			'data-selectable': M(E),
			'data-focus': M(w),
			'data-hover': M(ae),
			'data-disabled': M(h),
			'data-selected': M(I),
			'data-pressed': M(z),
			'data-focus-visible': M(S),
			className: Z.base({ class: T(J, Q.className) }),
		}),
		L = (Q = {}) => ({ ...j(G, Q), 'data-label': M(!0), className: Z.title({ class: f?.title }) }),
		fe = (Q = {}) => ({ ...j(X, Q), className: Z.description({ class: f?.description }) }),
		ge = (Q = {}) => ({ ...j(Q), className: Z.wrapper({ class: f?.wrapper }) }),
		le = u.useCallback(
			(Q = {}) => ({
				'aria-hidden': M(!0),
				'data-disabled': M(h),
				className: Z.selectedIcon({ class: f?.selectedIcon }),
				...Q,
			}),
			[h, Z, f]
		);
	return {
		Component: k,
		domRef: D,
		slots: Z,
		classNames: f,
		isSelectable: E,
		isSelected: I,
		isDisabled: h,
		rendered: F,
		description: n,
		startContent: d,
		endContent: o,
		selectedIcon: p,
		hideSelectedIcon: $,
		disableAnimation: P,
		getItemProps: re,
		getLabelProps: L,
		getWrapperProps: ge,
		getDescriptionProps: fe,
		getSelectedIconProps: le,
	};
}
var Qa = ve((a, e) => {
	const {
			Component: t,
			rendered: r,
			description: s,
			isSelectable: l,
			isSelected: n,
			isDisabled: d,
			selectedIcon: o,
			startContent: i,
			endContent: p,
			hideSelectedIcon: c,
			disableAnimation: f,
			getItemProps: b,
			getLabelProps: x,
			getWrapperProps: y,
			getDescriptionProps: m,
			getSelectedIconProps: $,
		} = As(a),
		v = u.useMemo(() => {
			const C = g.jsx(Ms, { disableAnimation: f, isSelected: n });
			return typeof o == 'function' ? o({ icon: C, isSelected: n, isDisabled: d }) : o || C;
		}, [o, n, d, f]);
	return g.jsxs(t, {
		...b(),
		children: [
			i,
			s
				? g.jsxs('div', {
						...y(),
						children: [
							g.jsx('span', { ...x(), children: r }),
							g.jsx('span', { ...m(), children: s }),
						],
				  })
				: g.jsx('span', { ...x(), children: r }),
			l && !c && g.jsx('span', { ...$(), children: v }),
			p,
		],
	});
});
Qa.displayName = 'NextUI.ListboxItem';
var er = Qa,
	tr = ve(
		(
			{
				item: a,
				state: e,
				as: t,
				variant: r,
				color: s,
				disableAnimation: l,
				className: n,
				classNames: d,
				hideSelectedIcon: o,
				showDivider: i = !1,
				dividerProps: p = {},
				itemClasses: c,
				title: f,
				...b
			},
			x
		) => {
			const y = t || 'li',
				m = u.useMemo(() => Gr(), []),
				$ = T(d?.base, n),
				v = T(d?.divider, p?.className),
				{
					itemProps: C,
					headingProps: P,
					groupProps: D,
				} = _s({ heading: a.rendered, 'aria-label': a['aria-label'] });
			return g.jsxs(
				y,
				{
					'data-slot': 'base',
					...j(C, b),
					className: m.base({ class: $ }),
					children: [
						a.rendered &&
							g.jsx('span', {
								...P,
								className: m.heading({ class: d?.heading }),
								'data-slot': 'heading',
								children: a.rendered,
							}),
						g.jsxs('ul', {
							...D,
							className: m.group({ class: d?.group }),
							'data-has-title': !!a.rendered,
							'data-slot': 'group',
							children: [
								[...a.childNodes].map((k) => {
									const { key: A, props: F } = k;
									let R = g.jsx(
										er,
										{
											classNames: c,
											color: s,
											disableAnimation: l,
											hideSelectedIcon: o,
											item: k,
											state: e,
											variant: r,
											...F,
										},
										A
									);
									return k.wrapper && (R = k.wrapper(R)), R;
								}),
								i && g.jsx(Cl, { as: 'li', className: m.divider({ class: v }), ...p }),
							],
						}),
					],
				},
				a.key
			);
		}
	);
tr.displayName = 'NextUI.ListboxSection';
var Bs = tr;
function zs(a) {
	const {
			ref: e,
			as: t,
			state: r,
			variant: s,
			color: l,
			onAction: n,
			children: d,
			onSelectionChange: o,
			disableAnimation: i,
			itemClasses: p,
			className: c,
			topContent: f,
			bottomContent: b,
			emptyContent: x = 'No items.',
			hideSelectedIcon: y = !1,
			hideEmptyContent: m = !1,
			shouldHighlightOnFocus: $ = !1,
			classNames: v,
			...C
		} = a,
		P = t || 'ul',
		D = typeof P == 'string',
		k = we(e),
		A = Za({ ...a, children: d, onSelectionChange: o }),
		F = r || A,
		{ listBoxProps: R } = ks({ ...a, onAction: n }, F, k),
		h = u.useMemo(() => qr({ className: c }), [, c]),
		E = T(v?.base, c);
	return {
		Component: P,
		state: F,
		variant: s,
		color: l,
		slots: h,
		classNames: v,
		topContent: f,
		bottomContent: b,
		emptyContent: x,
		hideEmptyContent: m,
		shouldHighlightOnFocus: $,
		hideSelectedIcon: y,
		disableAnimation: i,
		className: c,
		itemClasses: p,
		getBaseProps: (B = {}) => ({
			ref: k,
			'data-slot': 'base',
			className: h.base({ class: E }),
			...$e(C, { enabled: D }),
			...B,
		}),
		getListProps: (B = {}) => ({
			'data-slot': 'list',
			className: h.list({ class: v?.list }),
			...R,
			...B,
		}),
		getEmptyContentProps: (B = {}) => ({
			'data-slot': 'empty-content',
			children: x,
			className: h.emptyContent({ class: v?.emptyContent }),
			...B,
		}),
	};
}
function ct(a, e) {
	const {
			Component: t,
			state: r,
			color: s,
			variant: l,
			itemClasses: n,
			getBaseProps: d,
			topContent: o,
			bottomContent: i,
			hideEmptyContent: p,
			hideSelectedIcon: c,
			shouldHighlightOnFocus: f,
			disableAnimation: b,
			getEmptyContentProps: x,
			getListProps: y,
		} = zs({ ...a, ref: e }),
		m = g.jsxs(t, {
			...y(),
			children: [
				!r.collection.size && !p && g.jsx('li', { children: g.jsx('div', { ...x() }) }),
				[...r.collection].map(($) => {
					var v;
					const C = {
						color: s,
						item: $,
						state: r,
						variant: l,
						disableAnimation: b,
						hideSelectedIcon: c,
						...$.props,
					};
					if ($.type === 'section') return g.jsx(Bs, { ...C, itemClasses: n }, $.key);
					let P = g.jsx(
						er,
						{
							...C,
							classNames: j(n, (v = $.props) == null ? void 0 : v.classNames),
							shouldHighlightOnFocus: f,
						},
						$.key
					);
					return $.wrapper && (P = $.wrapper(P)), P;
				}),
			],
		});
	return g.jsxs('div', { ...d(), children: [o, m, i] });
}
ct.displayName = 'NextUI.Listbox';
var Fs = ve(ct);
ct.displayName = 'NextUI.Listbox';
var Ns = pl,
	Rs = Ns;
function ar(a, e) {
	const {
			Component: t,
			state: r,
			label: s,
			hasHelper: l,
			isLoading: n,
			triggerRef: d,
			selectorIcon: o = g.jsx(cl, {}),
			description: i,
			errorMessage: p,
			startContent: c,
			endContent: f,
			placeholder: b,
			renderValue: x,
			shouldLabelBeOutside: y,
			disableAnimation: m,
			getBaseProps: $,
			getLabelProps: v,
			getTriggerProps: C,
			getValueProps: P,
			getListboxProps: D,
			getPopoverProps: k,
			getSpinnerProps: A,
			getMainWrapperProps: F,
			getInnerWrapperProps: R,
			getHiddenSelectProps: h,
			getHelperWrapperProps: E,
			getListboxWrapperProps: O,
			getDescriptionProps: W,
			getErrorMessageProps: z,
			getSelectorIconProps: B,
		} = Ks({ ...a, ref: e }),
		q = s ? g.jsx('label', { ...v(), children: s }) : null,
		S = u.cloneElement(o, B()),
		V = u.useMemo(
			() =>
				l
					? g.jsx('div', {
							...E(),
							children: p
								? g.jsx('div', { ...z(), children: p })
								: i
								  ? g.jsx('div', { ...W(), children: i })
								  : null,
					  })
					: null,
			[l, p, i, E, z, W]
		),
		w = u.useMemo(() => {
			if (!r.selectedItems) return b;
			if (x && typeof x == 'function') {
				const G = [...r.selectedItems].map((X) => ({
					key: X.key,
					data: X.value,
					type: X.type,
					props: X.props,
					textValue: X.textValue,
					rendered: X.rendered,
					'aria-label': X['aria-label'],
				}));
				return x(G);
			}
			return r.selectedItems.map((G) => G.textValue).join(', ');
		}, [r.selectedItems, x, b]),
		I = u.useMemo(() => (n ? g.jsx(la, { ...A() }) : S), [n, S, A]),
		H = u.useMemo(
			() =>
				r.isOpen
					? g.jsx(fs, {
							...k(),
							state: r,
							triggerRef: d,
							children: g.jsx(xs, { ...O(), children: g.jsx(Fs, { ...D() }) }),
					  })
					: null,
			[r.isOpen, k, r, d, O, D]
		);
	return g.jsxs('div', {
		...$(),
		children: [
			g.jsx(Ps, { ...h() }),
			y ? q : null,
			g.jsxs('div', {
				...F(),
				children: [
					g.jsxs(t, {
						...C(),
						children: [
							y ? null : q,
							g.jsxs('div', {
								...R(),
								children: [
									c,
									g.jsxs('span', {
										...P(),
										children: [w, r.selectedItems && g.jsx(Fr, { children: ',' })],
									}),
									f,
								],
							}),
							I,
						],
					}),
					V,
				],
			}),
			m ? H : g.jsx(Xt, { children: H }),
		],
	});
}
var Ws = ve(ar);
ar.displayName = 'NextUI.Select';
const qs = ({ children: a }) => {
	const [e, t] = u.useState({
			fullName: '',
			email: '',
			phoneNumber: '',
			service: '',
			message: '',
			acceptTerms: !1,
		}),
		r = (d) => {
			const { name: o, value: i, type: p } = d.target,
				c = i;
			t((f) => ({ ...f, [o]: c }));
		},
		s = (d) => {
			d.preventDefault(), console.log(e);
		},
		l = {
			label: 'text-black dark:text-white/90',
			input: ['bg-transparent', 'placeholder:text-default-700/50 dark:placeholder:text-white/60'],
			innerWrapper: 'bg-transparent',
		},
		n = ['Frontend', 'Backend', 'Devops', 'Full Stack', 'QA'];
	return g.jsx('form', {
		onSubmit: s,
		className: ' shadow-lg',
		children: g.jsxs('div', {
			className:
				'flex w-full flex-col items-center  divide-gray-400 overflow-x-hidden rounded-md bg-gradient-to-b from-primary-200 to-primary-50 p-5  backdrop-blur-2xl xs:divide-y lg:flex-row lg:divide-x lg:divide-y-0',
			children: [
				' ',
				g.jsxs('div', {
					className: ' px-5 xs:mb-10 sm:px-10  ',
					children: [
						g.jsxs('div', {
							className: 'my-6 flex w-full flex-wrap gap-4 md:flex-nowrap',
							children: [
								g.jsx(rt, {
									color: 'primary',
									isRequired: !0,
									name: 'fullName',
									type: 'text',
									label: ce('home.contact.form.name.names'),
									placeholder: ce('home.contact.form.name.placeholder'),
									value: e.fullName,
									onChange: r,
									classNames: l,
								}),
								g.jsx(rt, {
									color: 'primary',
									isRequired: !0,
									name: 'email',
									type: 'email',
									label: ce('home.contact.form.email.email'),
									placeholder: ce('home.contact.form.email.placeholder'),
									value: e.email,
									onChange: r,
									className: 'w-full',
									classNames: l,
								}),
							],
						}),
						g.jsxs('div', {
							className: 'my-6 flex w-full flex-wrap gap-4 md:flex-nowrap',
							children: [
								g.jsx(rt, {
									color: 'primary',
									isRequired: !0,
									name: 'phoneNumber',
									type: 'number',
									label: ce('home.contact.form.phone.phone'),
									placeholder: ce('home.contact.form.phone.placeholder'),
									className: 'w-full',
									value: e.phoneNumber,
									onChange: r,
									classNames: l,
								}),
								g.jsx(Ws, {
									color: 'primary',
									classNames: l,
									className: 'w-full',
									label: ce('home.contact.form.services.services'),
									placeholder: ce('home.contact.form.services.placeholder'),
									children: n.map((d) => g.jsx(Rs, { value: d, children: d }, d)),
								}),
							],
						}),
						g.jsx('div', {
							className: 'my-6 flex w-full flex-wrap gap-4 md:flex-nowrap',
							children: g.jsx(is, {
								color: 'primary',
								classNames: l,
								label: 'Message',
								name: 'message',
								placeholder: 'Enter your description',
								className: 'max-w w-full',
								value: e.message,
								onChange: r,
							}),
						}),
						g.jsx('div', {
							children: g.jsxs('label', {
								children: [
									g.jsx('span', {
										className: 'text-primary-700',
										children: ce('home.contact.form.terms.acceptance'),
									}),
									g.jsxs('span', {
										className: 'text-primary-700',
										children: [ce('home.contact.form.terms.termsAndConditions'), ' '],
									}),
									ce('home.contact.form.terms.andOur'),
									g.jsxs('span', {
										className: 'text-primary-700',
										children: [' ', ce('home.contact.form.terms.privacyPolicy'), ' '],
									}),
									' ',
									ce('home.contact.form.terms.explanation'),
								],
							}),
						}),
						g.jsx(Fl, {
							type: 'submit',
							className:
								'mt-4 w-full bg-primary-500 px-4 py-2 text-white shadow-md hover:bg-primary-200',
							children: 'Enviar',
						}),
					],
				}),
				g.jsx('div', { className: 'pt-6 xs:px-10 lg:pt-0', children: a }),
			],
		}),
	});
};
export { qs as Form };
