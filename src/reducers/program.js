//below is the info work recieving the workout info from the wodify api
export const RECIEVE_WORKOUT = 'RECIEVE_WORKOUT'
export const recieveWorkout = (GymProgram) => ({
  type: RECIEVE_WORKOUT,
  GymProgram
})

//this is the ajax request for the workout information from wodify api
export const fetchPrograms = () => {
  return (dispatch) => {
    fetch('http://app.wodify.com/API/Programs_v1.aspx?apikey=FvunGgKZG43ArkOBAs8KoFrT4&type=json&encoding=utf-8')
    .then(response => response.json())
    .then(json => dispatch(recieveWorkout(json.RecordList.GymProgram)))
  .catch((ex) => console.log('parsing failed', ex))
  }
}
const initialState = {
  GymProgram: null
}
const program = (state = initialState, action) => {

  switch(action.type) {
    case 'RECIEVE_WORKOUT':
      return{
        ...state,
        GymProgram: action.GymProgram
      }
      default:
        return state
  }
}

export default program
