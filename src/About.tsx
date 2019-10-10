import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faReact,
  faAngular,
  faJs,
  faHtml5,
  faSass,
  faCss3,
  faGit,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

const IconSpan = styled.span`
  padding-right: 13px;
`

function BigIcon({ icon }: { icon: IconProp }) {
  return (
    <IconSpan>
      <FontAwesomeIcon icon={icon} size="4x" />
    </IconSpan>
  )
}

const Icons = styled.div`
  padding-bottom: 16px;
`

export default function About() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="subtitle1" paragraph>
        I am an enthusiastic front-end developer with 3 years’ experience
        including Angular, TypeScript, JavaScript, SCSS, CSS, HTML, Git. I am
        looking for new challenges especially with React in Western Europe.
      </Typography>
      <Typography variant="h5">Skills</Typography>
      <Icons>
        <BigIcon icon={faReact} />
        <BigIcon icon={faAngular} />
        <BigIcon icon={faJs} />
        <BigIcon icon={faSass} />
        <BigIcon icon={faCss3} />
        <BigIcon icon={faHtml5} />
        <BigIcon icon={faGit} />
      </Icons>
      <Typography variant="h5">Age</Typography>
      <Typography variant="body1">27</Typography>
    </>
  )
}
