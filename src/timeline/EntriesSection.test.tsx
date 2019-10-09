import { render } from "@testing-library/react"
import * as moment from "moment"
import * as React from "react"

import EntriesSection from "./EntriesSection"
import Entry from "./Entry"

const title = "TITLE"
const entry: Entry = {
  title: "ENTRY_TITLE",
  location: "LOCATION",
  organization: "ORGANIZATION",
  start: moment("2019-10"),
  end: moment("2020-10"),
}

test("show title", () => {
  expect(
    render(<EntriesSection title={title} entries={[]} />).queryByText(title)
  ).toBeInTheDocument()
})

test("show entry title", () => {
  expect(
    render(<EntriesSection title={title} entries={[entry]} />).queryByText(
      entry.title
    )
  ).toBeInTheDocument()
})

test("show date field with end", () => {
  const component = render(<EntriesSection title={title} entries={[entry]} />)
  expect(
    component.queryByText("Oct 2019 - Oct 2020 · a year")
  ).toBeInTheDocument()
})

test("show present in date field", () => {
  const component = render(
    <EntriesSection title={title} entries={[{ ...entry, end: undefined }]} />
  )
  expect(component.queryByText("present", { exact: false })).toBeInTheDocument()
})
