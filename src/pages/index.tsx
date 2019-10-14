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

import HeaderDrawer from "../header-drawer/HeaderDrawer"
import store from "../store"
import SEO from "../seo"
import UpdateBarSmart from "../update/UpdateBarSmart"

import "../global.css"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: "#00acb6" },
  },
})

export default function IndexPage() {
  return (
    <Provider store={store}>
      <StyledComponentsThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <CssBaseline />
            <SEO title="Resume" />
            <HeaderDrawer />
            <Content />
            <UpdateBarSmart />
          </StylesProvider>
        </MaterialThemeProvider>
      </StyledComponentsThemeProvider>
    </Provider>
  )
}
