import Link from "next/link"

import { LogoIcon } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function NotFound() {
  return (
    <Empty className="reveal">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <LogoIcon />
        </EmptyMedia>
        <EmptyTitle>Page introuvable</EmptyTitle>
        <EmptyDescription>
          Cette page n’existe pas ou a été déplacée. L’horizon est ailleurs.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm" nativeButton={false} render={<Link href="/" />}>
          Retour à l’accueil
        </Button>
      </EmptyContent>
    </Empty>
  )
}
