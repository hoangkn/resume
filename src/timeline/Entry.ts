import { Moment } from "moment"

export default interface Entry {
  readonly title: string
  readonly organization: string
  readonly location: string
  readonly start: Moment
  readonly end?: Moment
  readonly details: string
}
