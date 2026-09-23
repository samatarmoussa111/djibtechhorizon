"use client"

import { LinkIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { Eyebrow } from "@/components/eyebrow"

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const text = encodeURIComponent(`${title} ${url}`)
  const encodedUrl = encodeURIComponent(url)

  const networks = [
    { label: "WhatsApp", href: `https://wa.me/?text=${text}` },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "X",
      href: `https://x.com/intent/post?text=${encodeURIComponent(title)}&url=${encodedUrl}`,
    },
  ]

  async function copyLink() {
    await navigator.clipboard.writeText(url)
    toast.add({ title: "Lien copié", type: "success" })
  }

  return (
    <div className="flex flex-col gap-3">
      <Eyebrow>Partager cet article</Eyebrow>
      <div className="flex flex-wrap gap-2">
        {networks.map((network) => (
          <Button
            key={network.label}
            variant="outline"
            size="xs"
            nativeButton={false}
            render={<a href={network.href} target="_blank" rel="noreferrer" />}
          >
            {network.label}
          </Button>
        ))}
        <Button variant="outline" size="xs" onClick={copyLink}>
          <LinkIcon data-icon="inline-start" />
          Copier le lien
        </Button>
      </div>
    </div>
  )
}
