import {
  createMuiTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import * as React from "react"
import { Provider } from "react-redux"
import "typeface-roboto"

import store from "../store"
import SEO from "../components/seo"
import UpdateBarSmart from "../components/UpdateBarSmart"

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
      <AppBar>
        <Toolbar>
          <Typography variant="h6"> Hoang's Resume</Typography>
        </Toolbar>
      </AppBar>
      <UpdateBarSmart />
    </ThemeProvider>
  </Provider>
)

export default IndexPage
