import tailwind from 'bun-plugin-tailwind';
import path from 'node:path';

const src = path.join(import.meta.dir, '..');

/** Bundle stylesheets and client scripts in memory. Returns name -> file contents, for inlining. */
export async function bundleAssets({ minify }: { minify: boolean }): Promise<Map<string, string>> {
  const result = await Bun.build({
    entrypoints: [
      path.join(src, 'styles', 'index.css'),
      path.join(src, 'styles', 'resume.css'),
      path.join(src, 'client', 'home.ts'),
    ],
    plugins: [tailwind],
    external: ['/fonts/*', '/media/*'],
    minify,
    target: 'browser',
    naming: '[name].[ext]',
  });

  const assets = new Map<string, string>();
  for (const output of result.outputs) {
    const name = path.basename(output.path, path.extname(output.path));
    assets.set(name, await output.text());
  }
  return assets;
}
