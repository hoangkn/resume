import { Typography } from "@material-ui/core"
import * as React from "react"

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Typography variant="h4" gutterBottom>
      {children}
    </Typography>
  )
}
