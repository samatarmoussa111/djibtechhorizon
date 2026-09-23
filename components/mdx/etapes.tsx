import { Children, cloneElement, isValidElement } from "react"

import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

type EtapeProps = {
  titre: string
  children?: React.ReactNode
  numero?: number
}

export function Etapes({ children }: { children: React.ReactNode }) {
  const etapes = Children.toArray(children).filter(
    isValidElement<EtapeProps>
  )

  return (
    <ItemGroup className="relative my-8 gap-0">
      {/* Ligne verticale qui relie les numéros */}
      <span
        aria-hidden="true"
        className="absolute top-6 bottom-6 left-[29px] w-px bg-border"
      />
      {etapes.map((etape, index) =>
        cloneElement(etape, { key: index, numero: index + 1 })
      )}
    </ItemGroup>
  )
}

export function Etape({ titre, children, numero }: EtapeProps) {
  return (
    <Item role="listitem" className="relative items-start px-3">
      <ItemMedia className="size-8 border bg-background font-mono text-xs">
        {String(numero).padStart(2, "0")}
      </ItemMedia>
      <ItemContent className="pt-1.5">
        <ItemTitle className="line-clamp-none">{titre}</ItemTitle>
        {children && (
          <div className="text-sm leading-relaxed text-muted-foreground [&_p]:mt-0">
            {children}
          </div>
        )}
      </ItemContent>
    </Item>
  )
}
