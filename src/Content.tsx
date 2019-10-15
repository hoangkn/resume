import { Container } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

import About from "./About"
import Experience from "./Experience"
import Contact from "./Contact"
import Welcome from "./Welcome"
import Education from "./Education"
import TopPaddingContainer from "./TopPaddingContainer"

const LeftPaddingContainer = styled.div`
  padding-bottom: 1em;
  ${props => props.theme.breakpoints.up("sm")} {
    padding-left: 106px;
  }
`

export default function Content() {
  return (
    <LeftPaddingContainer>
      <TopPaddingContainer id="Welcome">
        <Welcome />
      </TopPaddingContainer>
      <TopPaddingContainer as={Container} id="About">
        <About />
      </TopPaddingContainer>
      <TopPaddingContainer as={Container} id="Experience">
        <Experience />
      </TopPaddingContainer>
      <TopPaddingContainer as={Container} id="Education">
        <Education />
      </TopPaddingContainer>
      <TopPaddingContainer as={Container} id="Contact">
        <Contact />
      </TopPaddingContainer>
    </LeftPaddingContainer>
  )
}
