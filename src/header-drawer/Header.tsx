import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import styled from "styled-components"

const StyledAppBar = styled(AppBar)`
  z-index: ${props => props.theme.zIndex.drawer + 1};
`

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
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
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <StyledAppBar>
      <Toolbar>
        {matches ? (
          <IconButton
            onClick={onMenuClick}
            aria-label="open drawer"
            edge="start"
          >
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
        ) : null}
        <Img fixed={file.childImageSharp.fixed} />
      </Toolbar>
    </StyledAppBar>
  )
}
