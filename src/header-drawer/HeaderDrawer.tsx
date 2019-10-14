import * as React from "react"

import AppDrawer from "../header-drawer/AppDrawer"
import Header from "../header-drawer/Header"

export default function HeaderDrawer() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  function handleMenuClick() {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <AppDrawer mobileMenuOpen={mobileMenuOpen} onClose={handleMenuClick} />
    </>
  )
}
