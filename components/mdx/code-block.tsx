"use client"

import { useRef, useState } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CodeBlock({
  className,
  children,
  ...props
}: React.ComponentProps<"pre">) {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(ref.current?.textContent ?? "")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group/code relative">
      <pre
        ref={ref}
        className={cn(
          "overflow-x-auto border bg-muted/40 py-4 font-mono text-[0.8rem] leading-relaxed",
          className
        )}
        {...props}
      >
        {children}
      </pre>
      <Button
        variant="ghost"
        size="icon-xs"
        aria-label={copied ? "Code copié" : "Copier le code"}
        onClick={copy}
        className="absolute top-2 right-2 bg-background opacity-0 transition-opacity group-hover/code:opacity-100 focus-visible:opacity-100 max-sm:opacity-100"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  )
}
