// @ts-check
import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://sadshine11.github.io',
  base,
  trailingSlash: 'ignore',
  compressHTML: true,
  build: { inlineStylesheets: 'auto', assets: '_a' },
  devToolbar: { enabled: false },
  vite: {
    build: { cssCodeSplit: false },
  },
});
