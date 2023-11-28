import { j as s, L as g, o as l, s as d } from './LogoComponent.3676cf1a.js';
import './index.6460afdd.js';
const h = '/assets/',
	o = '/assets/icons/',
	m = '/assets/projects/',
	i = '/assets/services/',
	e = '/assets/technologies/',
	r = {
		astronaut: `${h}div-astronaut.webp`,
		icons: {
			facebook: `${o}facebook.svg`,
			github: `${o}github.svg`,
			instagram: `${o}instagram.svg`,
		},
		projects: { globalredex: `${m}globalredex-desktop.webp` },
		services: {
			uiux: `${i}uxui.webp`,
			webdev: `${i}webdev.webp`,
			mobile: `${i}mobileapps.webp`,
			marketing: `${i}marketing.webp`,
		},
		technologies: {
			Ai: `${e}Ai.svg`,
			angular: `${e}angular.svg`,
			astro: `${e}astroreal.svg`,
			css: `${e}css.svg`,
			django: `${e}django.svg`,
			express: `${e}express.svg`,
			figma: `${e}figma.svg`,
			flask: `${e}flask.svg`,
			javascript: `${e}javascript.svg`,
			mongodb: `${e}mongo.svg`,
			next: `${e}next.svg`,
			node: `${e}node.svg`,
			postgresql: `${e}postgres.svg`,
			python: `${e}python.svg`,
			react: `${e}react.svg`,
			typescript: `${e}typescript.svg`,
			vue: `${e}vue.svg`,
			Xd: `${e}Xd.svg`,
			crossLogo: `${e}crossfunclogo.svg`,
			techLines: {
				firstLine: `${e}lines/firstline.svg`,
				secondLine: `${e}lines/secondline.svg`,
				thirdLine: `${e}lines/thirdline.svg`,
				fourthLine: `${e}lines/fourthline.svg`,
				fifthLine: `${e}lines/fifthline.svg`,
				sixthLine: `${e}lines/sixthline.svg`,
				seventhLine: `${e}lines/seventhline.svg`,
				eighthline: `${e}lines/eighthline.svg`,
			},
		},
	};
function p() {
	const a = [
			{ title: 'Home', href: '#banner' },
			{ title: 'About', href: '#about' },
			{ title: 'Services', href: '#services' },
			{ title: 'Contact', href: '#contact' },
		],
		c = [
			{ title: 'Github', href: '#', icon: r.icons.github },
			{ title: 'Facebook', href: '#', icon: r.icons.facebook },
			{ title: 'Instagram', href: '#', icon: r.icons.instagram },
		];
	return s.jsxs('footer', {
		className: 'bg-primary-50 px-5 py-10 text-foreground-50',
		children: [
			s.jsxs('div', {
				className:
					'container mx-auto grid grid-cols-1 justify-items-center gap-10 align-middle lg:grid-cols-3',
				children: [
					s.jsxs('aside', {
						className: 'flex flex-col items-center justify-center gap-2',
						children: [
							s.jsx(g, { size: 'large' }),
							s.jsx('p', {
								className:
									'mt-2 max-w-xs text-center text-lg font-semibold lg:text-left lg:text-xl',
								children: 'Empowering business through design and technology.',
							}),
						],
					}),
					s.jsxs('aside', {
						className:
							'flex flex-col items-center justify-center gap-3 space-y-2 md:space-x-3 md:space-y-0',
						children: [
							s.jsx('p', {
								className: 'text-center text-lg font-semibold',
								children: 'Navigation',
							}),
							s.jsx('ul', {
								className: 'flex flex-row gap-2 sm:gap-3',
								children: a.map((t, n) =>
									s.jsx(
										l,
										{
											className: 'w-full cursor-pointer',
											size: 'lg',
											onClick: () => d(t.href),
											children: s.jsx('p', {
												className: 'font-medium text-foreground-50',
												children: t.title,
											}),
										},
										`${t.title}-${n}`
									)
								),
							}),
						],
					}),
					s.jsxs('aside', {
						className: 'flex flex-col items-center justify-center space-y-2',
						children: [
							s.jsx('p', { className: 'text-lg font-semibold', children: 'Follow Us' }),
							s.jsx('ul', {
								className: 'flex cursor-pointer flex-row gap-2',
								children: c.map((t, n) =>
									s.jsx(
										l,
										{
											className: 'w-full',
											href: t.href,
											target: '_blank',
											rel: 'noopener noreferrer',
											size: 'lg',
											children: s.jsx('img', {
												src: t.icon,
												alt: t.title,
												width: 40,
												height: 40,
												className: 'hover:brightness-200',
											}),
										},
										`${t.title}-${n}`
									)
								),
							}),
						],
					}),
				],
			}),
			s.jsx('div', {
				className: 'container mx-auto mt-10 text-center',
				children: s.jsxs('p', {
					children: ['© ', new Date().getFullYear(), ' Div Software. All rights reserved.'],
				}),
			}),
		],
	});
}
export { p as Footer };
