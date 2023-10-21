/** @type {import('tailwindcss').Config} */
// tailwind.config.cjs
const { nextui } = require('@nextui-org/react');

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				dark: {
					colors: {
						background: '#11071F',
						foreground: '#ffffff',
						primary: {
							50: '#1A0B2E',
							100: '#2C1250',
							200: '#4F228D',
							300: '#7127BA',
							400: '#9857D3',
							500: '#A362FF',
							DEFAULT: '#7127BA',
							foreground: '#ffffff',
						},
					},
				},
			},
		}),
	],
};
