// import "@testing-library/jest-dom/extend-expect"
import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import * as React from "react"
import { Provider } from "react-redux"
import { EnhancedStore, configureStore } from "redux-starter-kit"

import UpdateBarSmart from "./UpdateBarSmart"
import message from "../updateMessage"
import { show } from "../updateSlice"
import rootReducer from "../rootReducer"

let store: EnhancedStore

const renderWithRedux = (component: any) =>
  render(component, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  })

beforeEach(() => {
  store = configureStore({ reducer: rootReducer })
})

test("show update message", () => {
  // arrange
  const ui = renderWithRedux(<UpdateBarSmart />)

  // act
  store.dispatch(show())

  // assert
  expect(ui.queryByText(message)).toBeTruthy()
})

test("hide update message default", () => {
  expect(
    renderWithRedux(<UpdateBarSmart />).queryByText(message)
  ).not.toBeInTheDocument()
})

test("close", async () => {
  // arrange
  const ui = renderWithRedux(<UpdateBarSmart />)
  store.dispatch(show())

  // act
  fireEvent.click(ui.getByLabelText("close"))

  // assert
  await waitForElementToBeRemoved(() => ui.queryByText(message))
})
