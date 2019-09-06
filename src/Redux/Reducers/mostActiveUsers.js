import { types } from '../Actions/user';

const initialState = {
  isFetching: false,
  error: {},
  data: [],
  page: 0,
};

export default function mostActiveUserReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case types.GET_USERS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
