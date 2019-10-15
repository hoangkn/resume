import { Container } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

import About from "./About"
import Experience from "./Experience"
import Contact from "./Contact"
import Welcome from "./Welcome"
import Education from "./Education"
import topPaddingStyle from "./topPaddingStyle"

const LeftPaddingContainer = styled.div`
  padding-bottom: 1em;
  ${props => props.theme.breakpoints.up("sm")} {
    padding-left: 106px;
  }
`
const TopPaddingDiv = styled.div`
  ${topPaddingStyle}
`
const TopPaddingContainer = styled(Container)`
  ${topPaddingStyle}
`

export default function Content() {
  return (
    <LeftPaddingContainer>
      <TopPaddingDiv id="Welcome">
        <Welcome />
      </TopPaddingDiv>
      <TopPaddingContainer id="About">
        <About />
      </TopPaddingContainer>
      <TopPaddingContainer id="Experience">
        <Experience />
      </TopPaddingContainer>
      <TopPaddingContainer id="Education">
        <Education />
      </TopPaddingContainer>
      <TopPaddingContainer id="Contact">
        <Contact />
      </TopPaddingContainer>
    </LeftPaddingContainer>
  )
}
