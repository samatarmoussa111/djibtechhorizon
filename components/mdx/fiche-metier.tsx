import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Eyebrow } from "@/components/eyebrow"

export function FicheMetier({
  titre,
  salaire,
  duree,
  remote,
  competences,
  children,
}: {
  titre: string
  /** Ex. « 95 000 $ / an » */
  salaire: string
  /** Temps pour se former, ex. « 8 à 12 mois » */
  duree: string
  /** Ex. « Très courant » */
  remote: string
  competences: string[]
  children?: React.ReactNode
}) {
  const stats = [
    { label: "Salaire moyen (USA)", value: salaire },
    { label: "Pour se former", value: duree },
    { label: "Remote", value: remote },
  ]

  return (
    <Card size="sm" className="relative my-8">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-brand" />
      <CardHeader>
        <Eyebrow>Fiche métier</Eyebrow>
        <CardTitle>{titre}</CardTitle>
        {children && (
          <CardDescription className="[&_p]:mt-0">{children}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt>
                <Eyebrow>{stat.label}</Eyebrow>
              </dt>
              <dd className="w-fit font-heading text-lg font-semibold text-brand">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
        <Separator />
        <div className="flex flex-col gap-2.5">
          <Eyebrow>Compétences clés</Eyebrow>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {competences.map((competence) => (
              <li key={competence}>
                <Badge variant="secondary">{competence}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
