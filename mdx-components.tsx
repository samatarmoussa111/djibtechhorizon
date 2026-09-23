import Link from "next/link"
import type { MDXComponents } from "mdx/types"

import { Chiffre } from "@/components/mdx/chiffre"
import { Citation } from "@/components/mdx/citation"
import { CodeBlock } from "@/components/mdx/code-block"
import { Comparaison } from "@/components/mdx/comparaison"
import { Encadre } from "@/components/mdx/encadre"
import { Etape, Etapes } from "@/components/mdx/etapes"
import { FicheMetier } from "@/components/mdx/fiche-metier"
import { Ressource } from "@/components/mdx/ressource"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const components = {
  // Éléments Markdown
  h2: (props) => (
    <h2
      className="mt-14 scroll-mt-8 font-heading text-2xl font-semibold tracking-tight text-balance"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-10 scroll-mt-8 text-base font-semibold tracking-tight"
      {...props}
    />
  ),
  p: (props) => <p className="mt-5 text-pretty" {...props} />,
  a: ({ href = "", ...props }) => {
    const className =
      "font-medium underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"

    return href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} className={className} {...props} />
    ) : (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        {...props}
      />
    )
  },
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  ul: (props) => (
    <ul
      className="mt-5 flex list-disc flex-col gap-2 pl-5 marker:text-primary"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 flex list-decimal flex-col gap-2 pl-5 marker:font-mono marker:text-xs marker:text-primary"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1 [&>p]:mt-0" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-primary pl-5 text-muted-foreground italic"
      {...props}
    />
  ),
  hr: () => <Separator className="my-12" />,
  code: (props) => (
    <code
      className="bg-muted px-1.5 py-0.5 font-mono text-[0.85em] [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-[1em]"
      {...props}
    />
  ),
  pre: CodeBlock,
  table: (props) => (
    <div className="my-8 border">
      <Table {...props} />
    </div>
  ),
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: (props) => <TableHead className="font-heading" {...props} />,
  td: (props) => <TableCell className="whitespace-normal" {...props} />,

  // Composants utilisables dans les articles
  Chiffre,
  Citation,
  Comparaison,
  Encadre,
  Etape,
  Etapes,
  FicheMetier,
  Ressource,
} satisfies MDXComponents

export function useMDXComponents(): MDXComponents {
  return components
}
