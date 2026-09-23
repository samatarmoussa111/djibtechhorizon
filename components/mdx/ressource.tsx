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
      className="group my-3 no-underline"
      render={<a href={href} target="_blank" rel="noreferrer" />}
    >
      <ItemContent>
        <ItemTitle className="normal-case text-sm font-medium">{titre}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemContent>
      <ItemActions className="self-start">
        <Badge variant="secondary">{prix}</Badge>
        <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </ItemActions>
    </Item>
  )
}
