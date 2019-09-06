import { types } from '../Actions/answers';

const initialState = {
  isFetching: false,
  error: {},
  data: {},
};

const handleGetAnswers = (state, answers) => {
  const answersMap = answers.reduce((map, obj) => {
    // eslint-disable-next-line no-param-reassign
    map[obj.id] = obj;
    return map;
  }, state.data);
  return {
    ...state,
    isFetching: false,
    data: answersMap,
  };
};

const handleAnswerUpdate = (state, newAnswer) => ({
  ...state,
  data: {
    ...state.data,
    [newAnswer.id]: {
      ...state.data[newAnswer.id],
      ...newAnswer,
    },
  },
});

export default function answersReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ANSWERS:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_ANSWERS_SUCCESS:
      return handleGetAnswers(state, action.payload);
    case types.GET_ANSWERS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case types.ANSWER_CREATE_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
      };
    case types.ANSWER_CREATE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case types.UPDATE_ANSWER_SUCCESS:
      return handleAnswerUpdate(state, action.payload);
    default:
      return state;
  }
}
