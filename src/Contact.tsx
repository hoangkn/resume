import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "@material-ui/core"
import * as React from "react"
import styled from "styled-components"

import SectionTitle from "./SectionTitle"

const StyledLink = styled(Link)`
  padding-left: 1em;
`

const ContactLine = styled.div`
  padding: 0.5em 0 0.5em 0;
`

function SizedIcon({ icon }: { icon: IconProp }) {
  return <FontAwesomeIcon icon={icon} size="lg" />
}

export default function Contact() {
  return (
    <>
      <SectionTitle>Contact Me</SectionTitle>
      <ContactLine>
        <SizedIcon icon={faEnvelope} />
        <StyledLink href="mailto:hoangkn_dev@icloud.com">
          hoangkn_dev@icloud.com
        </StyledLink>
      </ContactLine>
      <ContactLine>
        <SizedIcon icon={faPhone} />
        <StyledLink href="tel:+36207783223">+36207783223</StyledLink>
      </ContactLine>
      <ContactLine>
        <SizedIcon icon={faLinkedin} />
        <StyledLink href="https://www.linkedin.com/in/hoangkn">
          linkedin.com/in/hoangkn
        </StyledLink>
      </ContactLine>
      <ContactLine>
        <SizedIcon icon={faGithub} />
        <StyledLink href="https://github.com/hoangkn">
          github.com/hoangkn
        </StyledLink>
      </ContactLine>
    </>
  )
}
