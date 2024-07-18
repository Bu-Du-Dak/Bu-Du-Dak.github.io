const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://bu-du-dak.github.io';

const pages = [
  '', // index.tsx
  'admin',
  'api',
  'blog',
  'works'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => {
    const routePath = page === '' ? '/' : `/${page}`;
    return `
      <url>
        <loc>${BASE_URL}${routePath}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>
    `;
  }).join('')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);

console.log('sitemap.xml generated successfully!');
