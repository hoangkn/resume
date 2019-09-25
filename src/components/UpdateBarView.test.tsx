import { fireEvent, render } from "@testing-library/react"
import * as React from "react"

import UpdateBarview from "./UpdateBarView"
import message from "../updateMessage"

test("show update message", () => {
  expect(
    render(<UpdateBarview open={true} />).queryByText(message)
  ).toBeInTheDocument()
})
test("hide update message", () => {
  expect(
    render(<UpdateBarview open={false} />).queryByText(message)
  ).not.toBeInTheDocument()
})
test("close", () => {
  // arrange
  const handleClose = jest.fn()
  const instnace = render(<UpdateBarview open={true} onClose={handleClose} />)

  // act
  fireEvent.click(instnace.getByLabelText("close"))

  // assert
  expect(handleClose.mock.calls).toHaveLength(1)
})
