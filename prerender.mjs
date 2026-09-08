import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

const routes = [
  '/',
  '/about',
  '/rooms',
  '/dining',
  '/facilities',
  '/gallery',
  '/attractions',
  '/packages',
  '/reviews',
  '/contact',
  '/packages/shimla-kullu-manali',
  '/packages/special-shimla',
  '/packages/unforgettable-shimla',
  '/packages/manali-package',
  '/packages/kullu-manali',
  '/packages/shimla-manali',
  '/packages/complete-shimla-kullu-manali',
  '/packages/heaven-himachal',
  '/packages/devi-darshan',
];


async function prerender() {
  // Build client
  await build({ configFile: resolve(__dirname, 'vite.config.ts') });

  // Build SSR bundle
  await build({
    configFile: resolve(__dirname, 'vite.config.ts'),
    build: {
      ssr: true,
      rollupOptions: {
        input: resolve(__dirname, 'src/entry-server.tsx'),
        output: { format: 'esm' },
      },
      outDir: 'dist/server',
    },
  });

  const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8');
  const { render } = await import('./dist/server/entry-server.js');

  for (const route of routes) {
    const { html: appHtml, meta } = render(route);

    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Inject canonical for this route
    const canonical = `https://marcshimla.in${route === '/' ? '' : route}`;
    html = html.replace(
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${canonical}$2`
    );

    // Inject page-specific title
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

    // Inject page-specific meta description
    html = html.replace(
      /(<meta name="description" content=")[^"]*(")/,
      `$1${meta.description}$2`
    );

    // Inject og:title
    html = html.replace(
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${meta.title}$2`
    );

    // Inject og:description
    html = html.replace(
      /(<meta property="og:description" content=")[^"]*(")/,
      `$1${meta.description}$2`
    );

    // Inject og:url
    html = html.replace(
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${canonical}$2`
    );

    // Inject og:image
    if (meta.ogImage) {
      html = html.replace(
        /(<meta property="og:image" content=")[^"]*(")/,
        `$1${meta.ogImage}$2`
      );
    }

    const filePath = route === '/'
      ? resolve(__dirname, 'dist/index.html')
      : resolve(__dirname, `dist${route}/index.html`);

    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, html);
    console.log(`Prerendered: ${route}`);
  }

  // Generate 404.html for GitHub Pages fallback (SPA-style catch-all)
  const { html: notFoundHtml } = render('/');
  let html404 = template.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);
  html404 = html404.replace(/<title>[^<]*<\/title>/, '<title>Page Not Found | Hotel Marc Shimla</title>');
  const notFoundPath = resolve(__dirname, 'dist/404.html');
  writeFileSync(notFoundPath, html404);
  console.log('Prerendered: 404.html');
}

prerender().catch((e) => { console.error(e); process.exit(1); });
