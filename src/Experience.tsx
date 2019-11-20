import * as moment from "moment"
import * as React from "react"

import EntriesSection from "./timeline/EntriesSection"
import Entry from "./timeline/Entry"

const entries: Entry[] = [
  {
    title: "Software Engineer",
    organization: "Morgan Stanley",
    location: "Budapest, Hungary",
    start: moment("2016-08"),
    end: moment("2019-05"),
    details: `Designed the architecture of micro frontend framework by adopting Redux pattern
    Improved project quality by adopting continuous integration (CI), unit testing and code review
    Improved team story points delivery by 100% through introducing Scrum and managing team retrospective agenda
    Coached team members by holding pair programming
    Improved web application which displays, aggregates and visualizes millions of Elasticsearch documents
    Leveraged knowledge: Angular, TypeScript, JavaScript, SCSS, Redux, Java, Spring Boot, SQL, Jenkins
    `,
  },
  {
    title: "Software Developer Intern",
    organization: "Morgan Stanley",
    location: "Budapest, Hungary",
    start: moment("2015-03"),
    end: moment("2016-08"),
    details: `Reduced user onboarding process by 2 weeks by building a management application
    Leveraged knowledge: AngularJS, JavaScript, Less, Java, Spring, SQL, Jenkins`,
  },
]

export default function Experience() {
  return <EntriesSection title="Experience" entries={entries} />
}
