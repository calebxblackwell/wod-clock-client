import * as actions from '../actions';


const initialState = {
  times: [{
    time: '12:43'
  }]
};

const trelloReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_TIME) {
    return Object.assign({}, state, {
      times: [...state.times, {
        time:action.time
      }]
    });
  }

  return state;
}


export default trelloReducer
