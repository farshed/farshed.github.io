import tailwind from "bun-plugin-tailwind";
import { rm, cp } from "node:fs/promises";
import path from "node:path";
import { renderPage, renderStandalone } from "./src/render";
import { getRoutes } from "./src/routes";
import { SITE_URL } from "./src/consts";

const outdir = path.join(process.cwd(), "dist");
await rm(outdir, { recursive: true, force: true });

// Bundle the stylesheet and the client (hydration) entrypoints.
// Splitting shares React between the client bundles instead of duplicating it.
const result = await Bun.build({
  entrypoints: [
    "src/index.css",
    "src/resume.css",
    "src/client/home.tsx",
    "src/client/portfolio.tsx",
    "src/client/portfolio-project.tsx",
  ],
  outdir,
  plugins: [tailwind],
  external: ["/fonts/*", "/media/*"],
  splitting: true,
  minify: true,
  target: "browser",
  sourcemap: "linked",
  naming: {
    entry: "assets/[name]-[hash].[ext]",
    chunk: "assets/chunk-[hash].[ext]",
    asset: "assets/[name]-[hash].[ext]",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

// Map each entrypoint back to its hashed output path ("home-ab12cd34.js" -> "home")
const entryHrefs = new Map<string, string>();
for (const output of result.outputs) {
  const isCssEntry = output.kind === "asset" && output.path.endsWith(".css");
  if (output.kind !== "entry-point" && !isCssEntry) continue;
  const base = path.basename(output.path);
  const name = base.slice(0, base.lastIndexOf("-"));
  entryHrefs.set(name, "/" + path.relative(outdir, output.path).replaceAll(path.sep, "/"));
}

const css = entryHrefs.get("index");
if (!css) throw new Error("Expected a CSS artifact from the build");

// Prerender every route to static HTML
const routes = await getRoutes();
for (const route of routes) {
  let html: string;
  if (route.standalone) {
    const standaloneCss = entryHrefs.get(route.standalone.css);
    if (!standaloneCss) throw new Error(`Missing stylesheet "${route.standalone.css}"`);
    html = renderStandalone(route, standaloneCss);
  } else {
    const js = route.entry ? entryHrefs.get(route.entry) : undefined;
    if (route.entry && !js) throw new Error(`Missing client bundle for entry "${route.entry}"`);
    html = renderPage(route, { css, js });
  }
  // "/404" becomes 404.html — the not-found convention on static hosts
  const file =
    route.path === "/"
      ? path.join(outdir, "index.html")
      : route.path === "/404"
        ? path.join(outdir, "404.html")
        : path.join(outdir, route.path.slice(1), "index.html");
  await Bun.write(file, html);
  console.log(` ${path.relative(process.cwd(), file)}  ${(html.length / 1024).toFixed(1)} KB`);
}

// Sitemap (robots.txt points at /sitemap-index.xml, same as the old @astrojs/sitemap setup).
// Excludes /noindex/* (as the old site did) and the 404 page.
const sitemapUrls = routes
  .map((route) => route.path)
  .filter((p) => p !== "/404" && !p.startsWith("/noindex/") && !p.startsWith("/portfolio"))
  // Trailing-slash form matches how GitHub Pages serves directory indexes
  .map((p) => `${SITE_URL}${p === "/" ? "/" : `${p}/`}`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${SITE_URL}/sitemap-0.xml</loc></sitemap>
</sitemapindex>
`;

await Bun.write(path.join(outdir, "sitemap-0.xml"), sitemap);
await Bun.write(path.join(outdir, "sitemap-index.xml"), sitemapIndex);
console.log(` dist/sitemap-index.xml + dist/sitemap-0.xml  (${sitemapUrls.length} URLs)`);

// Copy static assets
await cp(path.join(process.cwd(), "public"), outdir, { recursive: true });

for (const output of result.outputs) {
  console.log(` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB`);
}
