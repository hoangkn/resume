import { createSlice } from "redux-starter-kit"

export interface Update {
  display: boolean
}

const initialState: Update = { display: false }

const updateSlice = createSlice({
  slice: "update",
  initialState,
  reducers: {
    show(state) {
      state.display = true
    },
    hide(state) {
      state.display = false
    },
  },
})

export const { hide, show } = updateSlice.actions

export default updateSlice.reducer
