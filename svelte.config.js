import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		
		files: {
			assets: 'static',
			lib: 'src/lib',
			routes: 'src/routes', // Ensure 'src/routes' is included
			serviceWorker: 'src/service-worker',
		  },
		adapter: adapter()
	}
};

export default config;
