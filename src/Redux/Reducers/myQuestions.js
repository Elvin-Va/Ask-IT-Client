import { types } from '../Actions/questions';

const initialState = {
  isFetching: false,
  error: {},
  data: {},
  page: 0,
};

const handleGetQuestions = (state, questions) => {
  const questionsMap = questions.reduce((map, obj) => {
    // eslint-disable-next-line no-param-reassign
    map[obj.id] = obj;
    return map;
  }, state.data);
  return {
    ...state,
    isFetching: false,
    page: state.page + 1,
    data: questionsMap,
  };
};

export default function myQuestionReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_MY_QUESTIONS:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_MY_QUESTIONS_SUCCESS:
      return handleGetQuestions(state, action.payload);
    case types.GET_MY_QUESTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case types.CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    case types.CREATE_QUESTION_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
