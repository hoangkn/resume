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
    details: `Architect and develop a widget framework UI
    Improve a data heavy, exception management app which has 10 000 users
    Review code and help junior developers
    Lead retrospective and responsible for team improvement
    Technologies: Angular, TypeScript, JavaScript, SCSS, CSS, REST, Git, Java, Spring, Elasticsearch, SQL`,
  },
  {
    title: "Software Developer Intern",
    organization: "Morgan Stanley",
    location: "Budapest, Hungary",
    start: moment("2015-03"),
    end: moment("2016-08"),
    details: `Create an onboarding and management tool for an internal app
    Improve a to-do application with dev team
    Technologies: AngularJS, JavaScript, Bootstrap, CSS, REST, Java, Spring, Elasticsearch, SQL`,
  },
]

export default function Experience() {
  return <EntriesSection title="Experience" entries={entries} />
}
