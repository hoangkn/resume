/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import { show } from "./src/update/updateSlice"
import store from "./src/store"

export const onServiceWorkerUpdateReady = () => {
  store.dispatch(show())
}
