import type { MetadataRoute } from "next"

import { getArticles } from "@/lib/articles"
import { site } from "@/lib/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles()

  return [
    { url: site.url, lastModified: articles[0]?.date },
    { url: `${site.url}/articles`, lastModified: articles[0]?.date },
    ...articles.map((article) => ({
      url: `${site.url}/articles/${article.slug}`,
      lastModified: article.date,
    })),
  ]
}
