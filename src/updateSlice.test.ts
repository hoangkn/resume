import { Action } from "redux"

import reducer, { hide, show } from "./updateSlice"

test("default state", () => {
  expect(reducer(undefined, {} as Action)).toEqual({ display: false })
})
test("set display to true if show action", () => {
  expect(reducer({ display: false }, show()).display).toEqual(true)
})
test("set display to false if hide action", () => {
  expect(reducer({ display: true }, hide()).display).toEqual(false)
})
