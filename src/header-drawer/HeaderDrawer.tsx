import * as React from "react"
import * as Loadable from "react-loadable"

import Header from "../header-drawer/Header"

const LoadableDrawer = Loadable({
  loader() {
    return import("./AppDrawer")
  },
  loading() {
    return null
  },
})

export default function HeaderDrawer() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  function handleMenuClick() {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <LoadableDrawer
        mobileMenuOpen={mobileMenuOpen}
        onClose={handleMenuClick}
      />
    </>
  )
}
