/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

let middleware = [thunk]
let logger = createLogger()

if (__DEV__) {
  middleware = [...middleware, logger]
} else {
  middleware = [...middleware]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
}
