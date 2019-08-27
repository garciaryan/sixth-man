import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
	LOGIN_USER,
	REGISTER_USER,
	REGISTER_USER_FAIL,
	REGISTER_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
			return { ...state, error: 'Authentication Failed.', password: '', loading: false };
		case REGISTER_USER:
			return { ...state, loading: true }
		case REGISTER_USER_FAIL:
			return { ...state, error: 'Could not create account. The email might already be in use.', password: '', loading: false };
		case REGISTER_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
    default:
      return state;
  }
};