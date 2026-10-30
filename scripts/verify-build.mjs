import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
const read = async path => (await readFile(path, 'utf8')).replace(/^\uFEFF/, '');
const posts = JSON.parse(await read('public/data/blog.json'));
const routes = ['/', '/portafolio', '/blog', '/terminos', '/privacidad', '/cookies', '/devoluciones', ...posts.map(p => '/blog/' + p.id)];
const titles = new Set();
for (const route of routes) {
  const html = await read(resolve('dist', '.' + route, 'index.html'));
  const readable = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/href="[^"]*"/g, '');
  assert.ok(!/[a-zA-Z]\?[a-zA-Z]/.test(readable), route + ': intact Spanish characters');
  for (const [, hash] of html.matchAll(/<a\b[^>]*href="#([^"]+)"/g)) {
    assert.ok(html.includes('id="' + hash + '"'), route + ': heading anchor ' + hash);
  }
  assert.equal((html.match(/<h1\b/g) || []).length, 1, route + ': one H1');
  assert.equal((html.match(/<main\b/g) || []).length, 1, route + ': one main');
  assert.equal((html.match(/<title>/g) || []).length, 1, route + ': one title');
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, route + ': one canonical');
  assert.ok(html.includes('href="https://tu-sitioweb.com' + route + '"'), route + ': correct canonical');
  assert.ok(html.includes('<meta name="description"'), route + ': description');
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  assert.ok(!titles.has(title), route + ': unique title'); titles.add(title);
  for (const [, src] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) if (src.startsWith('/')) await access(resolve('dist', '.' + src));
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(json);
  for (const [, href] of html.matchAll(/<a\b[^>]*href="(\/[^"]*)"/g)) {
    const [path, hash] = href.split('#');
    if (path.startsWith('/assets/') || /\.ico$/.test(path)) continue;
    assert.ok(routes.includes(path || '/'), 'Local link: ' + href);
    if (hash) {
      const destination = await read(resolve('dist', '.' + (path || '/'), 'index.html'));
      assert.ok(destination.includes('id="' + hash + '"'), 'Anchor: ' + href);
    }
  }
}
assert.ok((await read('dist/404.html')).includes('noindex, follow'));
const sitemap = await read('dist/sitemap.xml');
assert.equal((sitemap.match(/<loc>/g) || []).length, routes.length);
console.log('SEO checks passed: ' + routes.length + ' routes, unique metadata, one H1/main, local links, images, JSON-LD, sitemap and noindex 404.');


