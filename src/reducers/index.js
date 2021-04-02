// contains the combined reducers
import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import loggedReducer from './loggedReducer'

// combine all the reducers
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
})

export default allReducers