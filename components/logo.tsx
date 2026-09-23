import Link from "next/link"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

// L'icône est chargée depuis /public et utilisée comme masque sur le dégradé
// « horizon » : elle suit ainsi les couleurs du thème clair et du thème sombre.
export function LogoIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-5 shrink-0 bg-brand [mask:url(/logo.svg)_center/contain_no-repeat]",
        className
      )}
    />
  )
}

export function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/30"
    >
      <LogoIcon className="transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="font-heading text-[0.95rem] font-semibold tracking-tight">
        {site.name}
      </span>
    </Link>
  )
}
