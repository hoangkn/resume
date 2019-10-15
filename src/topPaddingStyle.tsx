export default function topPaddingStyle(props: any) {
  return `
  padding-top: 56px;
  @media (min-width: 0px) and (orientation: landscape) {
    padding-top: 48px;
  }
  ${props.theme.breakpoints.up("sm")} {
    padding-top: 64px;
  }
`
}
