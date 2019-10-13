import { Container } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

import About from "./About"
import Experience from "./Experience"
import Contact from "./Contact"
import Welcome from "./Welcome"
import Education from "./Education"
import TopPaddingContainer from "./TopPaddingContainer"

const SidePaddingContainer = styled(Container)`
  padding-bottom: 1em;
`
const TopAndLeftPaddingContainer = styled(TopPaddingContainer)`
  ${props => props.theme.breakpoints.up("sm")} {
    padding-left: 106px;
  }
`

export default function Content() {
  return (
    <TopAndLeftPaddingContainer id="Welcome">
      <Welcome />
      <SidePaddingContainer>
        <About />
        <Experience />
        <Education />
        <Contact />
      </SidePaddingContainer>
    </TopAndLeftPaddingContainer>
  )
}
