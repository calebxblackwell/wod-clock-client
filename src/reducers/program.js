const initialState = {
  workout: 'placeholder for program'
}

//below is the info work recieving the workout info from the wodify api
export const RECIEVE_WORKOUT = 'RECIEVE_WORKOUT'
export const recieveWorkout = (workout) => ({
  type: RECIEVE_WORKOUT,
  workout
})

//this is the ajax request for the workout information from wodify api
export const fetchPrograms = () => {
  return (dispatch) => {
    console.log("test")
    fetch('http://app.wodify.com/API/Programs_v1.aspx?apikey=FvunGgKZG43ArkOBAs8KoFrT4&type=json&encoding=utf-8')
    .then(response => response.json())
    .then(json => dispatch(recieveWorkout(json.workout)))
  .catch((ex) => console.log('parsing failed', ex))
  }
}

const program = (state = initialState, action) => {
  switch(action.type) {
    case 'RECIEVE_WORKOUT':
      return{
        ...state,
        workout: action.workout
      }

      default:
        return state
  }
}

export default program
