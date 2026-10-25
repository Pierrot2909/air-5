// A decommenter pour main en push sur Netlify
// import { defineConfig } from 'astro/config';

// Remplacer par l'URL définitive du site (utile pour le sitemap / SEO)
// export default defineConfig({
//  site: 'https://air-5.netlify.app/',
//  trailingSlash: 'ignore',
// });

// A decommencer pour dev en push sur Github Pages
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pierrot2909.github.io',
  base: '/air-5',
});
