import * as React from "react"
import * as Loadable from "react-loadable"
import styled from "styled-components"

import { ContentContainer } from "./ContentContainer"

const MainContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`
const LoadableParticles = Loadable({
  loader() {
    return import("./Particles")
  },
  loading() {
    return null
  },
})

const StyledLoadableParticles = styled(LoadableParticles)`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

export default function Welcome() {
  return (
    <MainContainer>
      <ContentContainer>Welcome</ContentContainer>
      <StyledLoadableParticles />
    </MainContainer>
  )
}
