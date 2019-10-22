import * as moment from "moment"
import * as React from "react"

import EntriesSection from "./timeline/EntriesSection"
import Entry from "./timeline/Entry"

const entries: Entry[] = [
  {
    title: "Full Stack Developer",
    organization: "Morgan Stanley",
    location: "Budapest, Hungary",
    start: moment("2016-08"),
    end: moment("2019-05"),
    details: `Design and implement a new web UI with global team
    Review code and coach junior developers
    Improve enterprise web apps
    Technologies: Angular, ngRx, RxJS, TypeScript, JavaScript, SCSS, CSS, REST, Git, Java, Spring, Elasticsearch, IBM DB2`,
  },
  {
    title: "Software Developer Intern",
    organization: "Morgan Stanley",
    location: "Budapest, Hungary",
    start: moment("2015-03"),
    end: moment("2016-08"),
    details: `Improve and create tooling for enterprise app 
    Technologies: AngularJS, JavaScript, Bootstrap, Less, CSS, REST, Java, Spring, IBM DB2`,
  },
]

export default function Experience() {
  return <EntriesSection title="Experience" entries={entries} />
}
