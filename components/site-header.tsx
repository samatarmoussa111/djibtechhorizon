import Link from "next/link"

import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-4">
      <Logo />
      <nav className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="xs"
          nativeButton={false}
          render={<Link href="/articles" />}
          className="font-mono text-[0.68rem] font-normal tracking-[0.06em] text-muted-foreground hover:text-primary"
        >
          Articles
        </Button>
        <ThemeToggle />
      </nav>
    </header>
  )
}
