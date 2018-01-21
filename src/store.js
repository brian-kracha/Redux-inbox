import thunkMiddleWare from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducers from './Reducers'
import logger from 'redux-logger'

const store = createStore(
  rootReducers,
  applyMiddleware(
    thunkMiddleWare,
    logger
  )
)
export default store
