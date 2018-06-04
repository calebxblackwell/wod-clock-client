import * as actions from '../actions';


const initialState = {
  times: [{
    time: '12:43'
  }]
};

export const ADD_TIME = "ADD_TIME";
export const action = {
  type: ADD_TIME,
};

const stopwatch = (state=initialState, action) => {
  if (action.type === actions.ADD_TIME) {
    return Object.assign({}, state, {
      times: [...state.times, {
        time:action.time
      }]
    });
  }

  return state;
}


export default stopwatch
