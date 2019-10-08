import * as React from "react"
import styled from "styled-components"

import Experience from "./Experience"
import Welcome from "./Welcome"

const StyledContainer = styled.div`
  padding-top: 56px;
  ${props => props.theme.breakpoints.up("sm")} {
    padding-top: 64px;
  }
`

export default function Content() {
  return (
    <StyledContainer>
      <Welcome />
      <Experience />
    </StyledContainer>
  )
}
