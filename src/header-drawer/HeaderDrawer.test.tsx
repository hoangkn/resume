import * as React from "react"
import { render, fireEvent, wait } from "@testing-library/react"
import { useStaticQuery } from "gatsby"
import { ThemeProvider } from "styled-components"

import HeaderDrawer from "./HeaderDrawer"

const theme = { breakpoints: { up: jest.fn() }, zIndex: { drawer: 0 } }

beforeEach(() => {
  ;(useStaticQuery as jest.Mock).mockReturnValue({
    file: {
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
  })
})

test("should open mobile menu", async () => {
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
  const element = render(
    <ThemeProvider theme={theme}>
      <HeaderDrawer />
    </ThemeProvider>
  )

  // act
  fireEvent.click(element.getByLabelText("open drawer"))

  // assert
  await wait(() => {
    expect(element.queryByText("Welcome")).toBeInTheDocument()
  })
})
