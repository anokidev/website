import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */

const config = {
  
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter()
  }

};

export default config;
