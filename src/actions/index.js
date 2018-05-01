export const ADD_TIME = "ADD_TIME";
export const action = {
  type: ADD_TIME,
};


const RECIEVE_WORKOUT = 'RECIEVE_WORKOUT'
const recieveWorkout = (workout) => ({
  type: RECIEVE_WORKOUT,
  workout
})


export const fetchPrograms = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/api/programs')
    .then(response => response.json())
    .then(json => dispatch(recieveWorkout(json.workout)))
  .catch((ex) => console.log('parsing failed', ex))
  }
}
