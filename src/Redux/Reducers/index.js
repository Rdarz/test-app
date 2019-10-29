import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import homeReducer from './homeReducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    login: loginReducer,
    home: homeReducer,
    ...asyncReducers
  })
}

export default {
  makeRootReducer,
}
