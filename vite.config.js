import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	base: process.env.NODE_ENV === 'development' ? '/' : '/STARS_blog',
	resolve: {
		alias: {
			$routes: path.resolve('./src/routes')
		}
	}
};


export default config;
