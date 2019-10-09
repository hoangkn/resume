import { Typography } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

const HeaderWithMargin = styled(Typography)`
  margin-top: 2em;
`

export default function SectionTitle({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <HeaderWithMargin variant="h4" gutterBottom>
      {children}
    </HeaderWithMargin>
  )
}
