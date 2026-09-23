import type { Metadata } from "next"

import { ArticleList } from "@/components/article/article-list"
import { Eyebrow } from "@/components/eyebrow"
import { getArticles, type Article } from "@/lib/articles"

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Métiers du numérique, compétences, travail à distance et regards sur l’écosystème tech américain.",
}

export default async function ArticlesPage() {
  const articles = await getArticles()
  const byYear = Map.groupBy(articles, (article: Article) =>
    article.date.slice(0, 4)
  )

  return (
    <>
      <header className="reveal flex flex-col gap-3">
        <h1 className="font-heading text-4xl font-semibold tracking-tight">
          Articles
        </h1>
        <p className="text-[0.95rem] leading-relaxed text-pretty text-muted-foreground">
          Métiers du numérique, compétences recherchées, travail à distance et
          regards sur l’écosystème tech américain. {articles.length} articles
          publiés.
        </p>
      </header>

      {[...byYear].map(([year, yearArticles], index) => (
        <section
          key={year}
          className="reveal flex flex-col gap-2"
          style={{ animationDelay: `${(index + 1) * 100}ms` }}
        >
          <Eyebrow className="tabular-nums">{year}</Eyebrow>
          <ArticleList articles={yearArticles} dateFormat="d MMM" />
        </section>
      ))}
    </>
  )
}
