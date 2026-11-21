import { readFile } from "node:fs/promises"
import path from "node:path"

// Serves the static landing page (public/home/index.html) at "/".
// Rendered once at build time, so the HTML is a static asset on the CDN.
export const dynamic = "force-static"

export async function GET() {
  const html = await readFile(path.join(process.cwd(), "public/home/index.html"), "utf8")
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  })
}
