import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import episodes from './episodes'
import season from './season'
import sortBy from './sortBy'
import error from './error'

const reducer = combineReducers({ episodes, season, sortBy, error })
const middleware = [thunk, createLogger({ collapsed: true })]
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
export * from './season'
export * from './sortBy'
export * from './episodes'