"use client"

import { ChevronDownIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Eyebrow } from "@/components/eyebrow"
import type { Heading } from "@/lib/articles"
import { cn } from "@/lib/utils"

export function TableOfContents({ headings }: { headings: Heading[] }) {
  return (
    <Collapsible className="border-y">
      <CollapsibleTrigger className="group flex w-full items-center justify-between py-3 outline-none focus-visible:ring-2 focus-visible:ring-ring/30">
        <Eyebrow className="transition-colors group-hover:text-foreground">
          Sommaire
        </Eyebrow>
        <ChevronDownIcon className="size-3.5 text-muted-foreground transition-transform group-data-panel-open:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-300 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <ol className="flex flex-col gap-2 pb-4 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={cn(heading.level === 3 && "pl-4")}
            >
              <a
                href={`#${heading.id}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  )
}
