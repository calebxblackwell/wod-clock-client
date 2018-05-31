//below is the info work recieving the workout info from the wodify api
export const RECIEVE_WORKOUT = 'RECIEVE_WORKOUT'
export const recieveWorkout = (GymProgram) => ({
  type: RECIEVE_WORKOUT,
  GymProgram
})


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
