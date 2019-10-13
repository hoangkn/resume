import { Typography } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

const HeaderWithMargin = styled(Typography)`
  padding-top: 64px;
`

export default function SectionTitle({
  id,
  children,
}: {
  id?: string
  children: React.ReactNode
}) {
  return (
    <HeaderWithMargin id={id} variant="h4" gutterBottom>
      {children}
    </HeaderWithMargin>
  )
}
