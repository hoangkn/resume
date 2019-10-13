import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope,
  faMobileAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card, CardContent, Link } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

import SectionTitle from "./SectionTitle"

const StyledLink = styled(Link)`
  padding-left: 1em;
`

const ContactLine = styled.div`
  padding: 0.5em 0 0.5em 0;
`

const iconSize = "lg"

export default function Contact() {
  return (
    <>
      <SectionTitle id="Contact">Contact Me</SectionTitle>
      <ContactLine>
        <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
        <StyledLink href="mailto:hoangkn_dev@icloud.com">
          hoangkn_dev@icloud.com
        </StyledLink>
      </ContactLine>
      <ContactLine>
        <FontAwesomeIcon icon={faPhone} size={iconSize} />
        <StyledLink href="tel:+36207783223">+36207783223</StyledLink>
      </ContactLine>
      <ContactLine>
        <FontAwesomeIcon icon={faGithub} size={iconSize} />
        <StyledLink href="https://github.com/hoangkn">
          github.com/hoangkn
        </StyledLink>
      </ContactLine>
    </>
  )
}
