import * as React from "react"
import { useDispatch, useSelector } from "react-redux"

import UpdateBarView from "./UpdateBarView"
import { hide } from "./updateSlice"
import { RootState } from "../rootReducer"

export default function UpdateBarSmart() {
  const dispatch = useDispatch()
  const open = useSelector((state: RootState) => state.update.display)

  return <UpdateBarView open={open} onClose={() => dispatch(hide())} />
}
