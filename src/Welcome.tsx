import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import * as Loadable from "react-loadable"
import styled from "styled-components"

import { ContentContainer } from "./ContentContainer"
import { Typography } from "@material-ui/core"

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
  z-index: -1;
`

const FlexContentContainer = styled(ContentContainer)`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const StyledImg = styled(Img)`
  border-radius: 50%;
`

export default function Welcome() {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `).file.childImageSharp.fixed

  return (
    <MainContainer>
      <FlexContentContainer>
        <StyledImg fixed={imageData} />
        <Typography variant="h4" align="center">
          Hoang Khac Nguyen
        </Typography>
        <Typography variant="h5" align="center">
          Frontend Developer
        </Typography>
      </FlexContentContainer>
      <StyledLoadableParticles />
    </MainContainer>
  )
}
