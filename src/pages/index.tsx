import { createMuiTheme, CssBaseline } from "@material-ui/core"
import {
  StylesProvider,
  ThemeProvider as MaterialThemeProvider,
} from "@material-ui/styles"
import * as React from "react"
import { Provider } from "react-redux"
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components"
import "typeface-roboto"

import Content from "../Content"
import Header from "../Header"
import store from "../store"
import SEO from "../seo"
import UpdateBarSmart from "../update/UpdateBarSmart"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#354d62" },
  },
})

const IndexPage = () => (
  <Provider store={store}>
    <StyledComponentsThemeProvider theme={theme}>
      <MaterialThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <SEO title="Resume" />
          <Header />
          <Content />
          <UpdateBarSmart />
        </StylesProvider>
      </MaterialThemeProvider>
    </StyledComponentsThemeProvider>
  </Provider>
)

export default IndexPage
