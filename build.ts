import tailwind from "bun-plugin-tailwind";
import { rm, cp } from "node:fs/promises";
import path from "node:path";
import { renderPage } from "./src/render";
import { getRoutes, type Route } from "./src/routes";
import { SITE_URL } from "./src/consts";

const root = process.cwd();
const outdir = path.join(root, "dist");

await rm(outdir, { recursive: true, force: true });

const assets = await bundleAssets();
const routes = await getRoutes();

await prerenderRoutes(routes, assets);
await writeSitemap(routes);
await cp(path.join(root, "public"), outdir, { recursive: true });

// ---------------------------------------------------------------------------

/** Bundle stylesheets and client (hydration) entrypoints. Returns name -> public href. */
async function bundleAssets(): Promise<Map<string, string>> {
  const result = await Bun.build({
    entrypoints: ["src/styles/index.css", "src/styles/resume.css", "src/client/home.tsx"],
    outdir,
    plugins: [tailwind],
    external: ["/fonts/*", "/media/*"],
    splitting: true,
    minify: true,
    target: "browser",
    naming: {
      entry: "assets/[name]-[hash].[ext]",
      chunk: "assets/chunk-[hash].[ext]",
      asset: "assets/[name]-[hash].[ext]",
    },
    define: { "process.env.NODE_ENV": JSON.stringify("production") },
  });

  // "assets/home-ab12cd34.js" -> "home". CSS entrypoints are reported as kind "asset".
  const hrefs = new Map<string, string>();
  for (const output of result.outputs) {
    const isEntry = output.kind === "entry-point" || (output.kind === "asset" && output.path.endsWith(".css"));
    if (!isEntry) continue;
    const base = path.basename(output.path);
    const name = base.slice(0, base.lastIndexOf("-"));
    hrefs.set(name, "/" + path.relative(outdir, output.path).replaceAll(path.sep, "/"));
    logFile(output.path, output.size);
  }
  return hrefs;
}

/** Render every route to a static HTML file. */
async function prerenderRoutes(routes: Route[], assets: Map<string, string>) {
  for (const route of routes) {
    const css = assets.get(route.stylesheet ?? "index");
    if (!css) throw new Error(`Missing stylesheet "${route.stylesheet}" for ${route.path}`);

    const js = route.entry ? assets.get(route.entry) : undefined;
    if (route.entry && !js) throw new Error(`Missing client bundle "${route.entry}" for ${route.path}`);

    const html = renderPage(route, { css, js });
    const file = outputPath(route.path);
    await Bun.write(file, html);
    logFile(file, html.length);
  }
}

/** "/" -> index.html, "/404" -> 404.html (static-host convention), "/a/b" -> a/b/index.html */
function outputPath(routePath: string): string {
  if (routePath === "/") return path.join(outdir, "index.html");
  if (routePath === "/404") return path.join(outdir, "404.html");
  return path.join(outdir, routePath.slice(1), "index.html");
}

/** Sitemap index + urlset, matching the old @astrojs/sitemap layout that robots.txt points at. */
async function writeSitemap(routes: Route[]) {
  const urls = routes
    .map((route) => route.path)
    .filter((p) => p !== "/404" && !p.startsWith("/noindex/") && !p.startsWith("/portfolio"))
    // Trailing slash matches how GitHub Pages serves directory indexes
    .map((p) => (p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}/`));

  const urlset = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;

  const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${SITE_URL}/sitemap-0.xml</loc></sitemap>
</sitemapindex>
`;

  await Bun.write(path.join(outdir, "sitemap-0.xml"), urlset);
  await Bun.write(path.join(outdir, "sitemap-index.xml"), index);
  console.log(` dist/sitemap-index.xml + dist/sitemap-0.xml  (${urls.length} URLs)`);
}

function logFile(file: string, bytes: number) {
  console.log(` ${path.relative(root, file)}  ${(bytes / 1024).toFixed(1)} KB`);
}
