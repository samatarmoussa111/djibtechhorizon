export const site = {
  name: "Djibouti Tech Horizon",
  description:
    "J’aide les jeunes Djiboutiens à comprendre les métiers du numérique, développer des compétences recherchées et accéder à des opportunités professionnelles qui dépassent les frontières de Djibouti.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://djiboutitechhorizon.com",
  locale: "fr_FR",
  author: {
    name: "Samatar Barkadleh",
    role: "Fondateur · Djibouti Tech Horizon",
    photo: "/photo.svg",
    initials: "SB",
  },
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "WhatsApp", href: "https://wa.me/" },
    { label: "Email", href: "mailto:bonjour@djiboutitechhorizon.com" },
  ],
}
