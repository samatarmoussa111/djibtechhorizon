import fs from "node:fs"
import path from "node:path"
import type { ComponentType } from "react"
import { format, parseISO } from "date-fns"
import { fr } from "date-fns/locale"
import GithubSlugger from "github-slugger"

const ARTICLES_DIR = path.join(process.cwd(), "content/articles")
const WORDS_PER_MINUTE = 200

export type ArticleMetadata = {
  title: string
  description: string
  /** Date de publication au format AAAA-MM-JJ */
  date: string
}

export type Heading = {
  id: string
  text: string
  level: 2 | 3
}

export type Article = ArticleMetadata & {
  slug: string
  readingTime: number
  headings: Heading[]
}

type ArticleModule = {
  default: ComponentType
  metadata: ArticleMetadata
}

function getSlugs() {
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

function readSource(slug: string) {
  return fs.readFileSync(path.join(ARTICLES_DIR, `${slug}.mdx`), "utf8")
}

function stripCodeFences(source: string) {
  return source.replace(/^```[\s\S]*?^```/gm, "")
}

function getReadingTime(source: string) {
  const text = source
    .replace(/^(import|export) .*$/gm, "")
    .replace(/<[^>]+>/g, " ")
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}

// Reproduit les ids générés par rehype-slug pour construire la table des matières.
function getHeadings(source: string): Heading[] {
  const slugger = new GithubSlugger()

  return stripCodeFences(source)
    .split("\n")
    .map((line) => /^(#{2,3})\s+(.+?)\s*$/.exec(line))
    .filter((match) => match !== null)
    .map(([, hashes, raw]) => {
      const text = raw.replace(/[*_`]/g, "").replace(/\[(.+?)\]\(.+?\)/g, "$1")
      return {
        id: slugger.slug(text),
        text,
        level: hashes.length as 2 | 3,
      }
    })
}

async function loadModule(slug: string) {
  return (await import(`@/content/articles/${slug}.mdx`)) as ArticleModule
}

async function toArticle(slug: string): Promise<Article> {
  const { metadata } = await loadModule(slug)
  const source = readSource(slug)
  return {
    ...metadata,
    slug,
    readingTime: getReadingTime(source),
    headings: getHeadings(source),
  }
}

/** Tous les articles, du plus récent au plus ancien. */
export async function getArticles() {
  const articles = await Promise.all(getSlugs().map(toArticle))
  return articles.sort((a, b) => b.date.localeCompare(a.date))
}

export async function getArticle(slug: string) {
  if (!getSlugs().includes(slug)) {
    return null
  }

  const [article, { default: Content }] = await Promise.all([
    toArticle(slug),
    loadModule(slug),
  ])
  return { ...article, Content }
}

export function formatDate(date: string, pattern = "d MMMM yyyy") {
  return format(parseISO(date), pattern, { locale: fr })
}
