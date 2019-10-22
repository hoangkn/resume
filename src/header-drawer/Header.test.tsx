import { render, fireEvent } from "@testing-library/react"
import { useStaticQuery } from "gatsby"
import * as React from "react"

import Header from "./Header"
import { ThemeProvider } from "styled-components"

const theme = { zIndex: { drawer: 0 } }

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockReturnValue({
    logo: {
      childImageSharp: {
        fixed: {
          base64:
            "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEDBf/aAAwDAQACEAMQAAABvS2fIF//xAAWEAEBAQAAAAAAAAAAAAAAAAAAEhH/2gAIAQEAAQUCliX/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGI/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAEP/aAAgBAQAGPwJ//8QAGBABAAMBAAAAAAAAAAAAAAAAAQARITH/2gAIAQEAAT8hMdJtqyOuk//aAAwDAQACAAMAAAAQ9C//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8QBI2//8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAECAQE/EKuv/8QAHBABAAICAwEAAAAAAAAAAAAAAREhAMExQWHR/9oACAEBAAE/EBsr3MprGElpS01kXD8v5n//2Q==",
          width: 400,
          height: 133,
          src: "/static/b5b99c261f9302da8b8cacf1427ab95c/8539d/header.jpg",
          srcSet:
            "/static/b5b99c261f9302da8b8cacf1427ab95c/8539d/header.jpg 1x,\n/static/b5b99c261f9302da8b8cacf1427ab95c/775d9/header.jpg 1.5x,\n/static/b5b99c261f9302da8b8cacf1427ab95c/bc3a8/header.jpg 2x",
        },
      },
    },
    pdf: {
      publicUrl: "URL",
    },
  })
})

test("show menu button on mobile", () => {
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
  const element = render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )

  // assert
  expect(element.queryByLabelText("open drawer")).toBeInTheDocument()
})

test("show menu button on mobile", () => {
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
  const element = render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )

  // assert
  expect(element.queryByLabelText("open drawer")).not.toBeInTheDocument()
})

test("fire onMenuClick event", () => {
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
  const handleEvent = jest.fn()
  const element = render(
    <ThemeProvider theme={theme}>
      <Header onMenuClick={handleEvent} />
    </ThemeProvider>
  )

  // act
  fireEvent.click(element.getByLabelText("open drawer"))

  // assert
  expect(handleEvent.mock.calls).toHaveLength(1)
})
