import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography, Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import * as Loadable from "react-loadable"
import styled from "styled-components"

const MainContainer = styled.div`
  position: relative;
  height: calc(100vh - 56px);
  ${props => props.theme.breakpoints.up("sm")} {
    height: calc(100vh - 64px);
  }
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

const FlexContentContainer = styled(Container)`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

const StyledImg = styled(Img)`
  border-radius: 50%;
`

const StyledIcon = styled(FontAwesomeIcon)`
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation-name: bounce;
  animation-timing-function: ease;
  animation-duration: 2s;
  animation-iteration-count: infinite;
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
        <Typography variant="h3" align="center">
          Hoang Khac Nguyen
        </Typography>
        <Typography variant="h4" align="center">
          Front-end Developer
        </Typography>
        <StyledIcon icon={faChevronDown} size="2x" />
      </FlexContentContainer>
      <StyledLoadableParticles />
    </MainContainer>
  )
}
