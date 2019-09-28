import { AppBar, Toolbar, Typography } from "@material-ui/core"
import * as React from "react"

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6"> Hoang's Resume</Typography>
      </Toolbar>
    </AppBar>
  )
}
