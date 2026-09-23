import { BookmarkIcon, LightbulbIcon, TriangleAlertIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const types = {
  astuce: { icon: LightbulbIcon, title: "Astuce" },
  attention: { icon: TriangleAlertIcon, title: "Attention" },
  "a-retenir": { icon: BookmarkIcon, title: "À retenir" },
}

export function Encadre({
  type = "astuce",
  titre,
  children,
}: {
  type?: keyof typeof types
  titre?: string
  children: React.ReactNode
}) {
  const { icon: Icon, title } = types[type]

  return (
    <Alert className="my-8">
      <Icon />
      <AlertTitle>{titre ?? title}</AlertTitle>
      <AlertDescription className="text-pretty [&_p]:mt-0">
        {children}
      </AlertDescription>
    </Alert>
  )
}
