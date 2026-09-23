import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

export function Ressource({
  titre,
  href,
  description,
  prix = "Gratuit",
}: {
  titre: string
  href: string
  description: string
  prix?: "Gratuit" | "Payant" | (string & {})
}) {
  return (
    <Item
      variant="outline"
      className="group my-3 no-underline hover:border-primary/40 [a]:hover:bg-transparent"
      render={<a href={href} target="_blank" rel="noreferrer" />}
    >
      <ItemContent>
        <ItemTitle className="text-sm font-medium normal-case transition-colors group-hover:text-primary">{titre}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
      <ItemActions className="self-start">
        <Badge variant="secondary">{prix}</Badge>
        <ArrowUpRightIcon className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary group-hover:-translate-y-0.5" />
      </ItemActions>
    </Item>
  )
}
