import { combineReducers } from "redux-starter-kit"

import updateReducer from "./update/updateSlice"

const rootReducer = combineReducers({ update: updateReducer })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
