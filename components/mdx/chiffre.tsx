import { Eyebrow } from "@/components/eyebrow"

export function Chiffre({
  valeur,
  label,
  source,
}: {
  valeur: string
  label: string
  source?: string
}) {
  return (
    <figure className="my-10 flex flex-col items-center gap-2 border-y py-8 text-center">
      <span className="font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
        {valeur}
      </span>
      <figcaption className="flex max-w-sm flex-col items-center gap-1.5">
        <span className="text-sm text-balance text-muted-foreground">
          {label}
        </span>
        {source && <Eyebrow>Source : {source}</Eyebrow>}
      </figcaption>
    </figure>
  )
}
