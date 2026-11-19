import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sajjadhaider.me',
  trailingSlash: 'always',
  server: { port: 4321 },
});
