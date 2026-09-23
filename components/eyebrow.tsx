import { cn } from "@/lib/utils"

// Petite étiquette en police mono, utilisée pour les dates, les titres de section, etc.
export function Eyebrow({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-mono text-[0.68rem] tracking-[0.06em] text-muted-foreground uppercase",
        className
      )}
      {...props}
    />
  )
}
