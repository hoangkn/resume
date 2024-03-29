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
import hungary from "@iconify/icons-emojione/flag-for-flag-hungary"
import uk from "@iconify/icons-emojione/flag-for-flag-united-kingdom"
import gatsbyIcon from "@iconify/icons-simple-icons/gatsby"
import typescriptIcon from "@iconify/icons-simple-icons/typescript"
import { Icon } from "@iconify/react"
import { Typography } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

import SectionTitle from "./SectionTitle"

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

const InfoSection = styled.div`
  padding-bottom: 16px;
`

export default function About() {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>
      <Typography variant="h5">Skills</Typography>
      <InfoSection>
        <StyledIconifyWithSpan icon={gatsbyIcon} />
        <StyledFontAwesome icon={faReact} />
        <StyledFontAwesome icon={faAngular} />
        <StyledIconifyWithSpan icon={typescriptIcon} />
        <StyledFontAwesome icon={faJs} />
        <StyledFontAwesome icon={faSass} />
        <StyledFontAwesome icon={faCss3} />
        <StyledFontAwesome icon={faHtml5} />
        <StyledFontAwesome icon={faGit} />
      </InfoSection>
      <Typography variant="h5">Languages</Typography>
      <InfoSection>
        <StyledIconifyWithSpan icon={hungary} />
        <StyledIconifyWithSpan icon={uk} />
      </InfoSection>
    </>
  )
}
