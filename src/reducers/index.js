import {combineReducers} from 'redux'
import stopwatch from './stopwatch'
import {fetchPrograms} from './program'
import authentication from './authentication.reducer'

const rootReducer = combineReducers({
  stopwatch,
  fetchPrograms,
  authentication
})



export default rootReducer
