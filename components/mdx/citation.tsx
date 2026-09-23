import { Eyebrow } from "@/components/eyebrow"

export function Citation({
  auteur,
  role,
  children,
}: {
  auteur: string
  role?: string
  children: React.ReactNode
}) {
  return (
    <figure className="my-10 flex flex-col gap-4 px-2 sm:px-6">
      <blockquote className="font-heading text-xl leading-snug text-balance italic sm:text-2xl [&_p]:mt-0">
        {children}
      </blockquote>
      <figcaption className="flex items-center gap-2">
        <span aria-hidden="true" className="h-px w-6 bg-foreground" />
        <span className="text-sm font-medium">{auteur}</span>
        {role && <Eyebrow>{role}</Eyebrow>}
      </figcaption>
    </figure>
  )
}
