import {
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  Link,
} from "@material-ui/core"
import * as React from "react"
import Scrollspy from "react-scrollspy"
import { polyfill } from "smoothscroll-polyfill"
import styled from "styled-components"

import topPaddingStyle from "../topPaddingStyle"

polyfill()

const StyledDrawer = styled(Drawer)`
  div {
    justify-content: center;
    ${topPaddingStyle}
  }
`

const sectionTitles = [
  "Welcome",
  "About Me",
  "Experience",
  "Education",
  "Contact Me",
]

function titleToId(title: string) {
  return title.split(" ")[0]
}

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
    const target = document.querySelector(`#${titleToId(item)}`)
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

  const ListItems = sectionTitles.map(item => (
    <ListItem key={item}>
      <Link onClick={() => handleClick(item)}>{item}</Link>
    </ListItem>
  ))

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("xs"))
  if (matches) {
    return (
      <Drawer open={mobileMenuOpen} onClose={onClose}>
        <List>{ListItems}</List>
      </Drawer>
    )
  } else {
    return (
      <StyledDrawer variant="permanent">
        <Scrollspy
          items={sectionTitles.map(titleToId)}
          componentTag={List}
          currentClassName="Mui-selected"
        >
          {ListItems}
        </Scrollspy>
      </StyledDrawer>
    )
  }
}
