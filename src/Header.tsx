import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AppBar, Toolbar } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

const StyledAppBar = styled(AppBar)`
  z-index: ${props => props.theme.zIndex.drawer + 1};
`

export default function Header() {
  const { file } = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fixed(height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <StyledAppBar>
      <Toolbar>
        <Img fixed={file.childImageSharp.fixed} />
      </Toolbar>
    </StyledAppBar>
  )
}
