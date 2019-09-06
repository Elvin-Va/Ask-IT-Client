export const types = {
  GET_ANSWERS: 'GET_ANSWERS',
  GET_ANSWERS_SUCCESS: 'GET_ANSWERS_SUCCESS',
  GET_ANSWERS_FAIL: 'GET_ANSWERS_FAIL',

  ANSWER_CREATE: 'ANSWER_CREATE',
  ANSWER_CREATE_SUCCESS: 'ANSWER_CREATE_SUCCESS',
  ANSWER_CREATE_FAIL: 'ANSWER_CREATE_FAIL',

  UPDATE_ANSWER: 'UPDATE_ANSWER',
  UPDATE_ANSWER_SUCCESS: 'UPDATE_ANSWER_SUCCESS',
  UPDATE_ANSWER_FAIL: 'UPDATE_ANSWER_FAIL',
};

export const getAnswers = (questionId) => ({
  type: types.GET_ANSWERS,
  payload: { questionId },
});

export const createAnswer = (answer) => ({
  type: types.ANSWER_CREATE,
  payload: answer,
});

export const updateAnswer = (answer) => ({
  type: types.UPDATE_ANSWER,
  payload: { answer },
});
