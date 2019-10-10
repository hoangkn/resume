import * as moment from "moment"
import * as React from "react"

import EntriesSection from "./timeline/EntriesSection"
import Entry from "./timeline/Entry"

const entries: Entry[] = [
  {
    title: "Master's Degree, Electrical Engineering",
    organization: "Budapest University of Technology and Economics",
    location: "Budapest, Hungary",
    start: moment("2014-02"),
    end: moment("2016-06"),
  },
  {
    title: "Bachelor's Degree, Electrical Engineering",
    organization: "Budapest University of Technology and Economics",
    location: "Budapest, Hungary",
    start: moment("2010-09"),
    end: moment("2014-02"),
  },
]

export default function Education() {
  return <EntriesSection title="Education" entries={entries} />
}
