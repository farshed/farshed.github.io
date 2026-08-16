import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from './consts';
import type { Route } from './routes';

interface Assets {
  css: string;
  /** Client bundle for hydration. Omitted for pages with no interactivity. */
  js?: string;
}

const escapeHtml = (s: string) =>
  s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

export function renderPage(route: Route, { css, js }: Assets): string {
  const title = escapeHtml(route.meta?.title ?? SITE_TITLE);
  const description = escapeHtml(route.meta?.description ?? SITE_DESCRIPTION);
  // GitHub Pages serves directory indexes with a trailing slash (/blog -> /blog/),
  // so canonical and social URLs use the final, non-redirecting form.
  const url = `${SITE_URL}${route.path === '/' ? '/' : `${route.path}/`}`;
  const cover = route.meta?.cover;
  const image = cover ? new URL(cover, url).href : `${SITE_URL}/faisal-arshed.jpeg`;
  const redirectTo = route.meta?.redirectTo;
  const jsonLd = route.meta?.jsonLd
    ? JSON.stringify(route.meta.jsonLd).replaceAll('<', '\\u003c')
    : undefined;

  // Hydrated pages get reconcilable markup + a script; static pages get bare HTML.
  const app = js ? renderToString(route.element) : renderToStaticMarkup(route.element);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
${redirectTo ? `    <meta http-equiv="refresh" content="0; url=${escapeHtml(redirectTo)}" />\n` : ''}    <link rel="sitemap" href="/sitemap-index.xml" />
    <link rel="canonical" href="${url}" />
    <title>${title}</title>
    <meta name="title" content="${title}" />
    <meta name="description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${escapeHtml(SITE_TITLE)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="${title}" />
${cover ? '' : '    <meta property="og:image:width" content="822" />\n    <meta property="og:image:height" content="822" />\n'}    <meta property="twitter:card" content="${cover ? 'summary_large_image' : 'summary'}" />
    <meta property="twitter:url" content="${url}" />
    <meta property="twitter:title" content="${title}" />
    <meta property="twitter:description" content="${description}" />
    <meta property="twitter:image" content="${image}" />
${jsonLd ? `    <script type="application/ld+json">${jsonLd}</script>\n` : ''}${route.meta?.head ? `${route.meta.head}\n` : ''}    <link rel="preload" href="/fonts/apercu-regular.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="stylesheet" href="${css}" />
${js ? `    <script type="module" src="${js}"></script>\n` : ''}  </head>
  <body>
    <div id="root">${app}</div>
  </body>
</html>
`;
}
