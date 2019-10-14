import {
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Link,
} from "@material-ui/core"
import * as React from "react"
import { polyfill } from "smoothscroll-polyfill"

import TopPaddingContainer from "../TopPaddingContainer"

polyfill()

export default function AppDrawer({
  mobileMenuOpen,
  onClose,
}: {
  mobileMenuOpen?: boolean
  onClose?: () => void
}) {
  function handleClick(item: string) {
    if (onClose) {
      onClose()
    }
    const target = document.querySelector(`#${item.split(" ")[0]}`)
    if (target) {
      setTimeout(
        () =>
          target.scrollIntoView({
            behavior: "smooth",
          }),
        0
      )
    }
  }

  const ListContent = [
    "Welcome",
    "About Me",
    "Experience",
    "Education",
    "Contact Me",
  ].map(item => (
    <ListItem key={item}>
      <Link onClick={() => handleClick(item)}>{item}</Link>
    </ListItem>
  ))

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
