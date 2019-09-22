import { createMuiTheme, CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import React from "react"
import "typeface-roboto"

import SEO from "../components/seo"

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
})

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </ThemeProvider>
)

export default IndexPage
