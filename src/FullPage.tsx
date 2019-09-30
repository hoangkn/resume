import ReactFullpage from "@fullpage/react-fullpage"
import * as React from "react"
import styled from "styled-components"

import Experience from "./Experience"
import Welcome from "./Welcome"

import "./FullPage.scss"

const Padding = styled.div`
  height: 100%;
  padding-top: 56px;
  ${props => props.theme.breakpoints.up("sm")} {
    padding-top: 64px;
  }
`
function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="section">
      <Padding>{children}</Padding>
    </div>
  )
}

export default function FullPage() {
  return (
    <ReactFullpage
      navigation={true}
      navigationPosition="left"
      navigationTooltips={["Welcome", "Experience"]}
      render={() => (
        <ReactFullpage.Wrapper>
          <Section>
            <Welcome />
          </Section>
          <Section>
            <Experience />
          </Section>
        </ReactFullpage.Wrapper>
      )}
    />
  )
}
