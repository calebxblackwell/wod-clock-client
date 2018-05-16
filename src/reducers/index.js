import {combineReducers} from 'redux'
import stopwatch from './stopwatch'
import program from './program'
import authentication from './authentication.reducer'

const rootReducer = combineReducers({
  stopwatch,
  program,
  authentication
})



export default rootReducer
