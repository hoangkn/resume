import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AppBar, Toolbar } from "@material-ui/core"
import * as React from "react"

export default function Header() {
  const { file } = useStaticQuery(graphql`
    query {
      file: file(relativePath: { eq: "header.png" }) {
        childImageSharp {
          fixed(height: 56) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <AppBar>
      <Toolbar>
        <Img fixed={file.childImageSharp.fixed} />
      </Toolbar>
    </AppBar>
  )
}
