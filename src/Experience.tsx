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
    details: `I had a chance to work on some projects and attend trainings. One project started with rewriting an old Flex application to Angular which is used by 10000 users. Insted of rewriting, we rethought user experience and created an entirely new UI.
    Technologies: Angular, ngRx, RxJS, TypeScript, SCSS, Git
    My other project was improvement of a workflow management application.
    Techonlogies: AngularJS, JavaScript, SCSS, Java, Spring, IBM DB2, Elasticsearch, Git
    I participated on a 15-week training program in New York and London includes an orientation to the Firm, intensive technology training and an introduction to proprietary technologies, and culminates with a four-week group project.`,
  },
  {
    title: "Software Developer Intern",
    organization: "Morgan Stanley",
    location: "Budapest, Hungary",
    start: moment("2015-03"),
    end: moment("2016-08"),
    details: `I created a new configuration tool for an enterprise web application. 
    Technologies: AngularJS, Bootstrap, Java, Spring, IBM DB2.`,
  },
  {
    title: "Engineering Intern",
    organization: "Innotec",
    location: "Budaörs, Hungary",
    start: moment("2013-07"),
    end: moment("2013-10"),
    details:
      "I measured radiation characteristic and temperature dependency of LED, assembled the experiment. I helped engineers at the molding line.",
  },
]

export default function() {
  return <EntriesSection title="Experience" entries={entries} />
}
