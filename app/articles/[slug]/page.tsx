import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ArticleNav } from "@/components/article/article-nav"
import { ShareButtons } from "@/components/article/share-buttons"
import { TableOfContents } from "@/components/article/table-of-contents"
import { Eyebrow } from "@/components/eyebrow"
import { Separator } from "@/components/ui/separator"
import { formatDate, getArticle, getArticles } from "@/lib/articles"
import { site } from "@/lib/site"

// La table des matières n'apparaît qu'à partir de ce nombre d'intertitres.
const MIN_HEADINGS_FOR_TOC = 3

type Props = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    return {}
  }

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      authors: [site.author.name],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const articles = await getArticles()
  const index = articles.findIndex((item) => item.slug === slug)
  // Les articles sont triés du plus récent au plus ancien.
  const previous = articles[index + 1]
  const next = articles[index - 1]
  const { Content } = article

  return (
    <article className="flex flex-col gap-10">
      <div
        aria-hidden="true"
        className="reading-progress fixed inset-x-0 top-0 z-50 h-0.5 bg-brand"
      />
      <header className="reveal flex flex-col gap-4">
        <Link
          href="/articles"
          className="w-fit font-mono text-[0.68rem] tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:text-primary"
        >
          ← Articles
        </Link>
        <h1 className="font-heading text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
          {article.title}
        </h1>
        <p className="text-[0.95rem] leading-relaxed text-pretty text-muted-foreground">
          {article.description}
        </p>
        <Eyebrow>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          {" · "}
          {article.readingTime} min de lecture
        </Eyebrow>
      </header>

      {article.headings.length >= MIN_HEADINGS_FOR_TOC && (
        <div className="reveal delay-100">
          <TableOfContents headings={article.headings} />
        </div>
      )}

      <div className="reveal text-[0.95rem] leading-7 delay-150 sm:text-base">
        <Content />
      </div>

      <Separator />

      <ShareButtons
        title={article.title}
        url={`${site.url}/articles/${slug}`}
      />

      <ArticleNav previous={previous} next={next} />
    </article>
  )
}
