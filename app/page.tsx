import Link from "next/link"

import { ArticleList } from "@/components/article/article-list"
import { Eyebrow } from "@/components/eyebrow"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getArticles } from "@/lib/articles"
import { site } from "@/lib/site"

// Contenu d'exemple : à remplacer par ta vraie histoire.
const story = [
  "Je suis né et j’ai grandi à Djibouti. Comme beaucoup de jeunes de ma génération, j’avais de l’ambition mais très peu de repères : personne autour de moi ne savait vraiment ce que faisait un développeur, un designer ou un data analyst.",
  "J’ai appris à coder seul, le soir, avec une connexion instable et des tutoriels en anglais que je traduisais mot à mot. Cette curiosité m’a mené jusqu’aux États-Unis, où j’ai découvert un écosystème où le talent compte plus que l’adresse.",
  "Aujourd’hui, je travaille dans la tech aux USA, et une conviction ne me quitte pas : les jeunes Djiboutiens ont tout pour réussir dans ce domaine. Il leur manque surtout l’information, les bonnes méthodes et quelqu’un qui leur montre que c’est possible.",
]

const timeline = [
  { year: "2012", event: "Premier ordinateur, premières lignes de code à Djibouti-ville" },
  { year: "2016", event: "Départ pour les États-Unis pour mes études" },
  { year: "2020", event: "Premier poste de développeur dans une startup américaine" },
  { year: "2026", event: "Lancement de Djibouti Tech Horizon" },
]

const pillars = [
  {
    title: "Comprendre",
    description:
      "Les métiers du numérique expliqués simplement : ce qu’on y fait vraiment, ce qu’on y gagne, comment on y entre.",
  },
  {
    title: "Apprendre",
    description:
      "Les compétences recherchées et les meilleures ressources pour les acquérir, souvent gratuitement.",
  },
  {
    title: "Accéder",
    description:
      "Le travail à distance, les entreprises qui recrutent à l’international et la culture professionnelle américaine.",
  },
]

export default async function HomePage() {
  const articles = (await getArticles()).slice(0, 5)

  return (
    <>
      <section className="reveal flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <Avatar className="size-16 bg-brand">
            <AvatarImage src={site.author.photo} alt={site.author.name} />
            <AvatarFallback>{site.author.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h1 className="font-heading text-2xl font-semibold tracking-tight">
              {site.author.name}
            </h1>
            <Eyebrow>{site.author.role}</Eyebrow>
          </div>
        </div>
        <p className="font-heading text-2xl leading-snug text-balance sm:text-[1.7rem]">
          J’aide les jeunes Djiboutiens à comprendre les métiers du numérique,
          développer des compétences recherchées et{" "}
          <em className="text-brand pr-1">
            accéder à des opportunités qui dépassent les frontières.
          </em>
        </p>
        <ul className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-sm">
          {site.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noreferrer",
                })}
                className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="reveal flex flex-col gap-5 delay-100">
        <Eyebrow>Mon histoire</Eyebrow>
        <div className="flex flex-col gap-4 text-[0.95rem] leading-relaxed text-pretty">
          {story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ol className="mt-2 flex flex-col border-l">
          {timeline.map((step) => (
            <li
              key={step.year}
              className="relative flex items-baseline gap-4 py-2 pl-5 before:absolute before:top-1/2 before:-left-[3.5px] before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-brand"
            >
              <Eyebrow className="w-9 shrink-0 tabular-nums">{step.year}</Eyebrow>
              <span className="text-sm">{step.event}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="reveal flex flex-col gap-5 delay-200">
        <Eyebrow>Ce que je partage ici</Eyebrow>
        <ol className="flex flex-col gap-5">
          {pillars.map((pillar, index) => (
            <li key={pillar.title} className="flex gap-4">
              <Eyebrow className="pt-1 text-primary tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </Eyebrow>
              <div className="flex flex-col gap-1">
                <h2 className="font-heading text-lg font-semibold">
                  {pillar.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="reveal flex flex-col gap-3 delay-300">
        <div className="flex items-baseline justify-between gap-4">
          <Eyebrow>Derniers articles</Eyebrow>
          <Link
            href="/articles"
            className="font-mono text-[0.68rem] tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:text-primary"
          >
            Tout voir →
          </Link>
        </div>
        <ArticleList articles={articles} showDescription={false} />
      </section>
    </>
  )
}
