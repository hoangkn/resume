import { faBars, faFilePdf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import styled from "styled-components"

const StyledAppBar = styled(AppBar)`
  z-index: ${props => props.theme.zIndex.drawer + 1};
`

const Grow = styled.div`
  flex-grow: 1;
`

function PdfIcon() {
  return <FontAwesomeIcon icon={faFilePdf} />
}

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const { logo, pdf } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fixed(height: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pdf: file(relativePath: { eq: "resume.pdf" }) {
        publicURL
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
        <Img fixed={logo.childImageSharp.fixed} />
        <Grow />
        {matches ? (
          <a href={pdf.publicURL} aria-label="download as pdf">
            <IconButton>
              <PdfIcon />
            </IconButton>
          </a>
        ) : (
          <Button href={pdf.publicURL} startIcon={<PdfIcon />}>
            Download
          </Button>
        )}
      </Toolbar>
    </StyledAppBar>
  )
}
