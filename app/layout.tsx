import type { Metadata } from "next"
import { Geist_Mono, Mona_Sans, Playfair_Display } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toast"
import { TooltipProvider } from "@/components/ui/tooltip"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const monaSans = Mona_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.author.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        monaSans.variable,
        playfairDisplayHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster>
              <div className="mx-auto flex min-h-svh w-full max-w-xl flex-col gap-9 px-6 py-10">
                <SiteHeader />
                <main className="flex flex-1 flex-col gap-12 pt-5">
                  {children}
                </main>
                <SiteFooter />
              </div>
            </Toaster>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
