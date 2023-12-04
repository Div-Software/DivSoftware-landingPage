import { defineConfig, squooshImageService } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import astroI18Next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		tailwind({
			build: {
				inlineStylesheets: 'always',
			},
		}),
		astroI18Next(),
	],
	image: {
		service: squooshImageService(),
	},
	output: 'static',
	adapter: vercel(),
});
