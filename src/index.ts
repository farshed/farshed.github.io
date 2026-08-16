import { serve } from "bun";
import tailwind from "bun-plugin-tailwind";
import path from "node:path";
import { renderPage } from "./render";
import { getRoutes } from "./routes";
import { clearPostCache } from "./lib/blog";

const publicDir = path.join(import.meta.dir, "..", "public");

// In-memory client bundles, rebuilt on each page load so refreshes pick up changes
let clientAssets = new Map<string, Blob>();

async function buildClient() {
  const result = await Bun.build({
    entrypoints: [
      path.join(import.meta.dir, "styles", "index.css"),
      path.join(import.meta.dir, "styles", "resume.css"),
      path.join(import.meta.dir, "client", "home.tsx"),
    ],
    plugins: [tailwind],
    external: ["/fonts/*", "/media/*"],
    splitting: true,
    target: "browser",
    naming: { entry: "[name].[ext]", chunk: "chunk-[hash].[ext]" },
  });
  clientAssets = new Map(result.outputs.map((o) => ["/" + path.basename(o.path), o]));
}

async function servePage(pathname: string): Promise<Response> {
  clearPostCache();
  const routes = await getRoutes();
  const route = routes.find((r) => r.path === pathname) ?? routes.find((r) => r.path === "/404");
  if (!route) return new Response("Not found", { status: 404 });

  await buildClient();
  const html = renderPage(route, {
    css: `/${route.stylesheet ?? "index"}.css`,
    js: route.entry ? `/${route.entry}.js` : undefined,
  });
  return new Response(html, {
    status: route.path === "/404" ? 404 : 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

const server = serve({
  routes: {
    "/*": async (req) => {
      let { pathname } = new URL(req.url);
      if (pathname !== "/" && pathname.endsWith("/")) pathname = pathname.slice(0, -1);

      const asset = clientAssets.get(pathname);
      if (asset) return new Response(asset);

      const file = Bun.file(path.join(publicDir, pathname));
      if (await file.exists()) return new Response(file);

      return servePage(pathname);
    },
  },
});

console.log(`🚀 Server running at ${server.url}`);
