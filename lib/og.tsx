import fs from "node:fs"
import path from "node:path"
import { ImageResponse } from "next/og"

import { site } from "@/lib/site"

export const ogSize = { width: 1200, height: 630 }

const fontsDir = path.join(process.cwd(), "assets/fonts")
const fonts = [
  { name: "Playfair Display", file: "playfair-display-600.woff", weight: 600 },
  { name: "Mona Sans", file: "mona-sans-400.woff", weight: 400 },
  { name: "Geist Mono", file: "geist-mono-500.woff", weight: 500 },
] as const
const fontData = fonts.map((font) => ({
  name: font.name,
  weight: font.weight,
  style: "normal" as const,
  data: fs.readFileSync(path.join(fontsDir, font.file)),
}))

const colors = { background: "#fafafa", foreground: "#171717", muted: "#737373" }

// Image d'aperçu (Open Graph) commune au site et aux articles.
export function renderOgImage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: colors.background,
          color: colors.foreground,
          fontFamily: "Mona Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 32 32"
            fill="none"
            stroke={colors.foreground}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 5.5v3M8.2 9.7l2.1 2.1M23.8 9.7l-2.1 2.1M4 16.5h3M25 16.5h3" />
            <path d="M9 21a7 7 0 0 1 14 0Z" fill={colors.foreground} />
            <path d="M3 21h26M8 25h16M12 28.5h8" />
          </svg>
          <span style={{ fontFamily: "Playfair Display", fontSize: 32 }}>
            {site.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontFamily: "Geist Mono",
              fontSize: 22,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: colors.muted,
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              fontFamily: "Playfair Display",
              fontSize: title.length > 60 ? 56 : 68,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </span>
          {description && (
            <span style={{ fontSize: 28, lineHeight: 1.4, color: colors.muted }}>
              {description}
            </span>
          )}
        </div>
      </div>
    ),
    { ...ogSize, fonts: fontData }
  )
}
