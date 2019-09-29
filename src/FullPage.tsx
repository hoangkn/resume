import ReactFullpage from "@fullpage/react-fullpage"
import * as React from "react"
import * as Loadable from "react-loadable"
import styled from "styled-components"

import "./FullPage.scss"

const LoadableContainer = styled.div`
  height: 100%;
  width: 100%;
`

const LoadableWelcome = Loadable({
  loader() {
    return import("./Welcome")
  },
  loading() {
    return null
  },
})

const StyledWelcome = styled(LoadableWelcome)`
  height: 100%;
  width: 100%;
`

export default function FullPage() {
  return (
    <ReactFullpage
      navigation={true}
      navigationPosition="left"
      showActiveTooltip={true}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section" data-tooltip="Welcome">
            <LoadableContainer>
              <StyledWelcome />
            </LoadableContainer>
          </div>
          <div className="section" data-tooltip="Experience"></div>
        </ReactFullpage.Wrapper>
      )}
    />
  )
}
