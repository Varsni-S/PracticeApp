import {SET_USER_EMAIL} from './actions';
import {SET_USER_PASSWORD} from './actions';
import {INCREMENT} from './actions';
import {DECREMENT} from './actions';

// Initial state
const initialState = {
  email: '',
  password: '',
  counter: 0,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {...state, email: action.payload};
    case SET_USER_PASSWORD:
      return {...state, password: action.payload};
    case INCREMENT:
      return {...state, counter: state.counter + 1};
    case DECREMENT:
      return {...state, counter: state.counter - 1};
    default:
      return state;
  }
}

export default mainReducer;
