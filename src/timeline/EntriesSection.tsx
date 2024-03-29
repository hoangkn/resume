import { Typography, Card, CardContent, CardHeader } from "@material-ui/core"
import * as moment from "moment"
import * as React from "react"
import styled from "styled-components"

import Entry from "./Entry"
import SectionTitle from "../SectionTitle"

const dateFormat = "MMM YYYY"

const StyledCard = styled(Card)`
  margin-bottom: 1em;
`

function EntryCard({ entry }: { entry: Entry }) {
  const duration = entry.start.to(entry.end || moment(), true)
  const dateField = `${entry.start.format(dateFormat)} - ${
    entry.end ? entry.end.format(dateFormat) : "present"
  } · ${duration}`

  const subheader = (
    <>
      <Typography variant="h6">{entry.organization}</Typography>
      <div>{dateField}</div>
      <div>{entry.location}</div>
    </>
  )
  const paragraphs = entry.details
    ? entry.details.split("\n").map((paragraph, index) => (
        <Typography key={index} variant="body1">
          {paragraph}
        </Typography>
      ))
    : []
  return (
    <StyledCard>
      <CardHeader title={entry.title} subheader={subheader} />
      <CardContent>{paragraphs}</CardContent>
    </StyledCard>
  )
}

export default function EntriesSection({
  title,
  entries,
}: {
  readonly title: string
  readonly entries: Entry[]
}) {
  const cards = entries.map((entry, index) => (
    <EntryCard key={index} entry={entry} />
  ))
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      {cards}
    </>
  )
}
