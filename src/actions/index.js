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
    fetch('app.wodify.com/API/Programs_v1.aspx?apikey=FvunGgKZG43ArkOBAs8KoFrT4&type=json&encoding=utf-8')
    .then(response => response.json())
    .then(json => dispatch(recieveWorkout(json.workout)))
  .catch((ex) => console.log('parsing failed', ex))
  }
}
