import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		kit: {
			appDir: 'app', // Required as the default is _app
			adapter: adapter()
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/whn-thueringen.github.io' : '',
		}
	},
	preprocess: preprocess({
    scss: {
			prependData: '@import "src/app.scss" as *;'
    },
  })
};

export default config;
