import Link from "next/link"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import type { Article } from "@/lib/articles"
import { cn } from "@/lib/utils"

export function ArticleNav({
  previous,
  next,
}: {
  previous?: Article
  next?: Article
}) {
  if (!previous && !next) {
    return null
  }

  return (
    <nav className="grid gap-3 sm:grid-cols-2">
      {previous && (
        <ArticleNavLink article={previous} label="← Article précédent" />
      )}
      {next && (
        <ArticleNavLink
          article={next}
          label="Article suivant →"
          align="end"
        />
      )}
    </nav>
  )
}

function ArticleNavLink({
  article,
  label,
  align = "start",
}: {
  article: Article
  label: string
  align?: "start" | "end"
}) {
  return (
    <Item
      variant="outline"
      render={<Link href={`/articles/${article.slug}`} />}
      className={cn(
        "items-start hover:border-primary/40 [a]:hover:bg-transparent",
        align === "end" && "sm:col-start-2 sm:text-right"
      )}
    >
      <ItemContent className={cn(align === "end" && "sm:items-end")}>
        <ItemDescription className="font-mono text-[0.68rem] tracking-[0.06em] uppercase">
          {label}
        </ItemDescription>
        <ItemTitle className="line-clamp-2 text-sm font-medium normal-case">
          {article.title}
        </ItemTitle>
      </ItemContent>
    </Item>
  )
}
