import { formatDate, getArticle, getArticles } from "@/lib/articles"
import { ogSize, renderOgImage } from "@/lib/og"

export const alt = "Aperçu de l’article"
export const size = ogSize
export const contentType = "image/png"

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticle(slug)

  return renderOgImage({
    eyebrow: article
      ? `${formatDate(article.date)} · ${article.readingTime} min de lecture`
      : "Article",
    title: article?.title ?? "Djibouti Tech Horizon",
  })
}
