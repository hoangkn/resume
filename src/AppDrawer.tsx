import {
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Link,
} from "@material-ui/core"
import * as React from "react"

import TopPaddingContainer from "./TopPaddingContainer"

export default function AppDrawer() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))
  if (matches) {
    return (
      <Drawer variant="permanent">
        <TopPaddingContainer as={List}>
          <ListItem>
            <Link href="#Welcome">Welcome</Link>
          </ListItem>
          <ListItem>
            <Link href="#About">About Me</Link>
          </ListItem>
          <ListItem>
            <Link href="#Experience">Experience</Link>
          </ListItem>
          <ListItem>
            <Link href="#Education">Education</Link>
          </ListItem>
          <ListItem>
            <Link href="#Contact">Contact Me</Link>
          </ListItem>
        </TopPaddingContainer>
      </Drawer>
    )
  } else {
    return null
  }
}
