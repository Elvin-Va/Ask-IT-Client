import jwtDecode from 'jwt-decode';
import { types } from '../Actions/user';

const initialState = {
  isFetching: false,
  error: {},
  isLoggedIn: false,
  currentUser: {},
};

const token = localStorage.getItem('authToken');

if (token) {
  const decodedToken = jwtDecode(token);
  initialState.isLoggedIn = true;
  initialState.currentUser = { id: decodedToken.id, email: decodedToken.email };
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_REGISTER:
      return {
        ...state,
        isFetching: true,
      };
    case types.USER_REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case types.USER_REGISTER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case types.USER_LOGIN:
      return {
        ...state,
        isFetching: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    case types.USER_LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
      };
    case types.GET_USER:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        },
      };
    case types.GET_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case types.USER_LOGOUT:
      return {
        ...state,
        currentUser: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
