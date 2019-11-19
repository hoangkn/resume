import * as moment from "moment"
import * as React from "react"

import EntriesSection from "./timeline/EntriesSection"
import Entry from "./timeline/Entry"

const entries: Entry[] = [
  {
    title: "Career Break - Personal Development",
    organization: "",
    location: "Budapest, Hungary",
    start: moment("2019-06"),
    details: `Create my resume website: www.hoangkn.com
    Experiment with front-end technologies: React, Redux, Webpack, Jest, Styled Components, Progressive Web Application (PWA), React Testing Library, Material-UI, Gatsby, Storybook, Gulp
    Experiment with cloud: Amazon Web Services (AWS), Netlify, Terraform`,
  },
  {
    title: "Software Engineer",
    organization: "Morgan Stanley",
    location: "Budapest, Hungary",
    start: moment("2016-08"),
    end: moment("2019-05"),
    details: `Architect and develop a widget framework UI
    Improve a data heavy, exception management app which has 10 000 users
    Review code and help junior developers
    Lead retrospective and responsible for team improvement
    Technologies: Angular, TypeScript, JavaScript, SCSS, CSS, REST, Git, Java, Spring, Elasticsearch, SQL, RxJS, ngRx, Highcharts`,
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
