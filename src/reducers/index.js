import {combineReducers} from 'redux'
import stopwatch from './stopwatch'
import {fetchPrograms} from './program'
import authentication from './authentication.reducer'
import program from './program'


const rootReducer = combineReducers({
  stopwatch,
  fetchPrograms,
  authentication,
  program
})



export default rootReducer
