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
import gatsbyIcon from "@iconify/icons-simple-icons/gatsby"
import typescriptIcon from "@iconify/icons-simple-icons/typescript"
import { Icon } from "@iconify/react"
import { Typography } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

const IconSpan = styled.span`
  padding-right: 13px;
`

function StyledFontAwesome({ icon }: { icon: IconProp }) {
  return (
    <IconSpan>
      <FontAwesomeIcon icon={icon} size="4x" />
    </IconSpan>
  )
}

const StyledIconify = styled(Icon)`
  font-size: 49px;
  vertical-align: -3px;
`

function StyledIconifyWithSpan({ icon }: { icon: object }) {
  return (
    <IconSpan>
      <StyledIconify icon={icon} />
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
        <StyledIconifyWithSpan icon={gatsbyIcon} />
        <StyledFontAwesome icon={faReact} />
        <StyledFontAwesome icon={faAngular} />
        <StyledIconifyWithSpan icon={typescriptIcon} />
        <StyledFontAwesome icon={faJs} />
        <StyledFontAwesome icon={faSass} />
        <StyledFontAwesome icon={faCss3} />
        <StyledFontAwesome icon={faHtml5} />
        <StyledFontAwesome icon={faGit} />
      </Icons>
      <Typography variant="h5">Age</Typography>
      <Typography variant="body1">27</Typography>
    </>
  )
}
