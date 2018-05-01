const initialState = {
  workout: 'placeholder for program'
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
