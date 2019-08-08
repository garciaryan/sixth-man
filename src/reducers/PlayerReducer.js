import {
  AUTHORIZE
} from '../actions/types';

const INITIAL_STATE = {
  loginPage: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case AUTHORIZE:
      return { ...state, loginPage: action.payload }
    default:
      return state;
  }
}