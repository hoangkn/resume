import {
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Link,
} from "@material-ui/core"
import * as React from "react"

import TopPaddingContainer from "../TopPaddingContainer"

const ListContent = (
  <>
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
  </>
)

export default function AppDrawer({
  mobileMenuOpen,
  onClose,
}: {
  mobileMenuOpen?: boolean
  onClose?: () => void
}) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("xs"))
  if (matches) {
    return (
      <Drawer open={mobileMenuOpen} onClose={onClose}>
        <List>{ListContent}</List>
      </Drawer>
    )
  } else {
    return (
      <Drawer variant="permanent">
        <TopPaddingContainer as={List}>{ListContent}</TopPaddingContainer>
      </Drawer>
    )
  }
}
