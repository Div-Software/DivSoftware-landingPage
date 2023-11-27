/** @type {import('tailwindcss').Config} */
// tailwind.config.cjs
const { nextui } = require('@nextui-org/react');

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				float: {
					'0%': {
						transform: 'translatey(25px)',
					},

					'50%': {
						transform: 'translatey(-25px)',
					},

					'100%': {
						transform: 'translatey(25px)',
					},
				},
				spin: {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
			},
		},
		screens: {
			xs: '320px',
			...defaultTheme.screens,
		},
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
							300: '#693B93',
							400: '#7127BA',
							500: '#763CAC',
							600: '#9857D3',
							700: '#A362FF',
							DEFAULT: '#7127BA',
							foreground: '#ffffff',
						},
						whatsapp: '#65b259',
						telegram: '#f0f0f0',
					},
				},
			},
		}),
	],
};
