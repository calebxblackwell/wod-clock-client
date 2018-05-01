import {combineReducers} from 'redux'
import trelloReducer from './stopwatch'
import program from './program'


const rootReducer = combineReducers({
  trelloReducer,
  program
})

export default rootReducer
