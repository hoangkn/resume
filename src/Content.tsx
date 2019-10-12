import { Container } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

import About from "./About"
import Experience from "./Experience"
import Contact from "./Contact"
import Welcome from "./Welcome"
import Education from "./Education"

const ContentContainer = styled.div`
  padding-top: 56px;
  @media (min-width: 0px) and (orientation: landscape) {
    padding-top: 48px;
  }
  ${props => props.theme.breakpoints.up("sm")} {
    padding-top: 64px;
  }
`

const HorizontalContainer = styled(Container)`
  padding-bottom: 1em;
`

export default function Content() {
  return (
    <ContentContainer>
      <Welcome />
      <HorizontalContainer>
        <About />
        <Experience />
        <Education />
        <Contact />
      </HorizontalContainer>
    </ContentContainer>
  )
}
