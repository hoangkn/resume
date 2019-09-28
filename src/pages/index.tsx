import { createMuiTheme, CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import * as React from "react"
import { Provider } from "react-redux"
import "typeface-roboto"

import Header from "../Header"
import store from "../store"
import SEO from "../seo"
import UpdateBarSmart from "../update/UpdateBarSmart"
import FullPage from "../FullPage"

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
})

const IndexPage = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SEO title="Home" />
      <Header />
      <FullPage />
      <UpdateBarSmart />
    </ThemeProvider>
  </Provider>
)

export default IndexPage
