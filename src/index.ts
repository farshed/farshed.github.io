import { serve } from "bun";
import path from "node:path";
import { renderPage } from "./render";
import { getRoutes } from "./routes";
import { clearPostCache } from "./lib/blog";
import { bundleAssets } from "./lib/assets";

const publicDir = path.join(import.meta.dir, "..", "public");

async function servePage(pathname: string): Promise<Response> {
  clearPostCache();
  const routes = await getRoutes();
  const route = routes.find((r) => r.path === pathname) ?? routes.find((r) => r.path === "/404");
  if (!route) return new Response("Not found", { status: 404 });

  const assets = await bundleAssets({ minify: false });
  const html = renderPage(route, {
    css: assets.get(route.stylesheet ?? "index")!,
    js: route.entry ? assets.get(route.entry) : undefined,
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

      const file = Bun.file(path.join(publicDir, pathname));
      if (await file.exists()) return new Response(file);

      return servePage(pathname);
    },
  },
});

console.log(`🚀 Server running at ${server.url}`);
