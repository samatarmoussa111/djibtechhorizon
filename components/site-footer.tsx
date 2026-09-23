import { site } from "@/lib/site"

export function SiteFooter() {
  const links = [...site.links, { label: "RSS", href: "/rss.xml" }]

  return (
    <footer className="flex flex-col items-start justify-between gap-3 border-t pt-5 text-[0.8rem] text-muted-foreground sm:flex-row sm:items-center">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <ul className="flex flex-wrap items-center gap-x-3.5 gap-y-1">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.href.startsWith("http") && {
                target: "_blank",
                rel: "noreferrer",
              })}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
