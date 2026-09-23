import { ogSize, renderOgImage } from "@/lib/og"
import { site } from "@/lib/site"

export const alt = site.name
export const size = ogSize
export const contentType = "image/png"

export default function Image() {
  return renderOgImage({
    eyebrow: site.author.name,
    title: "Du talent djiboutien aux opportunités du monde entier.",
    description: "Métiers du numérique, compétences et travail à distance.",
  })
}
