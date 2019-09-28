import { IconButton, Snackbar } from "@material-ui/core"
import { Close } from "@material-ui/icons"
import * as React from "react"

import message from "./updateMessage"

export default function UpdateBar({
  open,
  onClose,
}: {
  open: boolean
  onClose?: () => void
}) {
  return (
    <Snackbar
      message={message}
      open={open}
      action={
        <IconButton aria-label="close" color="inherit" onClick={onClose}>
          <Close />
        </IconButton>
      }
    />
  )
}
