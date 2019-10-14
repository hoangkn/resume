import { render } from "@testing-library/react"
import * as React from "react"
import { ThemeProvider } from "styled-components"

import AppDrawer from "./AppDrawer"

const theme = { breakpoints: { up: jest.fn() } }

test("menu is shown on desktop", () => {
  // arrange
  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }
  })

  // act
  const component = render(
    <ThemeProvider theme={theme}>
      <AppDrawer />
    </ThemeProvider>
  )

  // assert
  expect(component.queryByText("Welcome")).toBeInTheDocument()
})

test("menu is not shown on mobile", () => {
  // arrange
  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }
  })

  // act
  const component = render(
    <ThemeProvider theme={theme}>
      <AppDrawer />
    </ThemeProvider>
  )

  // assert
  expect(component.queryByText("Welcome")).not.toBeInTheDocument()
})

test("show mobile menu", () => {
  // arrange
  window.matchMedia = jest.fn().mockImplementation(query => {
    return {
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }
  })

  // act
  const component = render(
    <ThemeProvider theme={theme}>
      <AppDrawer mobileMenuOpen={true} />
    </ThemeProvider>
  )

  // assert
  expect(component.queryByText("Welcome")).toBeInTheDocument()
})
