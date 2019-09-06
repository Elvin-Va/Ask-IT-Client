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

const handleQuestionUpdate = (state, newQuestion) => ({
  ...state,
  data: {
    ...state.data,
    [newQuestion.id]: {
      ...state.data[newQuestion.id],
      ...newQuestion,
    },
  },
});

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_QUESTIONS:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_QUESTIONS_SUCCESS:
      return handleGetQuestions(state, action.payload);
    case types.GET_QUESTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case types.UPDATE_QUESTION_SUCCESS:
      return handleQuestionUpdate(state, action.payload);
    default:
      return state;
  }
}
