import Link from "next/link"

import { Eyebrow } from "@/components/eyebrow"
import { formatDate, type Article } from "@/lib/articles"

export function ArticleList({
  articles,
  showDescription = true,
  dateFormat = "d MMM yyyy",
}: {
  articles: Article[]
  showDescription?: boolean
  dateFormat?: string
}) {
  return (
    <ul className="-mx-3 flex flex-col">
      {articles.map((article) => (
        <li key={article.slug}>
          <Link
            href={`/articles/${article.slug}`}
            className="group flex flex-col gap-1 px-3 py-3 transition-colors outline-none hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring/30"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-medium text-pretty transition-colors group-hover:text-primary">{article.title}</span>
              <Eyebrow className="shrink-0 tabular-nums">
                {formatDate(article.date, dateFormat)}
              </Eyebrow>
            </div>
            {showDescription && (
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {article.description}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}
