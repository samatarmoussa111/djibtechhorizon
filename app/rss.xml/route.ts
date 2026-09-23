import { getArticles } from "@/lib/articles"
import { site } from "@/lib/site"

export const dynamic = "force-static"

function escape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export async function GET() {
  const articles = await getArticles()

  const items = articles
    .map((article) => {
      const url = `${site.url}/articles/${article.slug}`
      return `
    <item>
      <title>${escape(article.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description>${escape(article.description)}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    </item>`
    })
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(site.name)}</title>
    <link>${site.url}</link>
    <description>${escape(site.description)}</description>
    <language>fr</language>${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}
