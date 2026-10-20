import { defineConfig } from 'astro/config';

// Remplacer par l'URL définitive du site (utile pour le sitemap / SEO)
export default defineConfig({
 // site: 'https://www.air-5.fr',
  site: 'https://air-5.netlify.app/'
  trailingSlash: 'ignore',
});
