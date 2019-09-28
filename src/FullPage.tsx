import ReactFullpage from "@fullpage/react-fullpage"
import * as React from "react"

import "./FullPage.scss"

export default function FullPage() {
  return (
    <ReactFullpage
      navigation={true}
      navigationPosition="left"
      showActiveTooltip={true}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section" data-tooltip="Welcome"></div>
          <div className="section" data-tooltip="Experience"></div>
        </ReactFullpage.Wrapper>
      )}
    />
  )
}
