import { createServer } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const posts = JSON.parse((await readFile('public/data/blog.json', 'utf8')).replace(/^\uFEFF/, ''));
const routes = ['/', '/portafolio', '/blog', '/terminos', '/privacidad', '/cookies', '/devoluciones', ...posts.map(post => '/blog/' + post.id)];
const template = await readFile('dist/index.html', 'utf8');
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
const assetPaths = Object.values(manifest).filter(entry => entry.src).map(entry => ['/' + entry.src, '/' + entry.file]);
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { render } = await server.ssrLoadModule('/src/prerender.tsx');
  for (const route of [...routes, '/404']) {
    let html = render(route);
    for (const [source, built] of assetPaths) html = html.replaceAll('"' + source + '"', '"' + built + '"');
    const head = [];
    html = html.replace(/<title>[\s\S]*?<\/title>|<meta\b[^>]*\/>|<link\b[^>]*\/>/g, tag => { head.push(tag); return ''; });
    const target = route === '/404' ? 'dist/404.html' : resolve('dist', '.' + route, 'index.html');
    await mkdir(resolve(target, '..'), { recursive: true });
    await writeFile(target, template.replace('<!--app-head-->', head.join('\n    ')).replace('<div id="root"></div>', '<div id="root">' + html + '</div>'));
  }
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + routes.map(route => '  <url><loc>https://tu-sitioweb.com' + route + '</loc></url>').join('\n') + '\n</urlset>\n';
  await writeFile('dist/sitemap.xml', xml);
  console.log('Prerendered ' + routes.length + ' pages, 404.html and sitemap.xml.');
} finally {
  await server.close();
}

