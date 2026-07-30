export async function GET({ site }) {
  const base = site ?? new URL('http://localhost:8640');
  const sitemap = new URL('sitemap-index.xml', base).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
