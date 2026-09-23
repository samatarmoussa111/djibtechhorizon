import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Comparaison({
  colonnes,
  lignes,
}: {
  /** En-têtes des colonnes comparées, ex. ["Djibouti", "États-Unis"] */
  colonnes: string[]
  /** Chaque ligne : [critère, valeur colonne 1, valeur colonne 2, …] */
  lignes: string[][]
}) {
  return (
    <div className="my-8 border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead />
            {colonnes.map((colonne) => (
              <TableHead key={colonne} className="font-heading">
                {colonne}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {lignes.map(([critere, ...valeurs]) => (
            <TableRow key={critere}>
              <TableCell className="text-muted-foreground">{critere}</TableCell>
              {valeurs.map((valeur, index) => (
                <TableCell key={index} className="whitespace-normal">
                  {valeur}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
