import styled from "styled-components"
export default styled.div`
  padding-top: 56px;
  @media (min-width: 0px) and (orientation: landscape) {
    padding-top: 48px;
  }
  ${props => props.theme.breakpoints.up("sm")} {
    padding-top: 64px;
  }
`
