import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';

import { getCurrentUserId } from '../Selectors/user';
import answerService from '../../services/answers';
import { types } from '../Actions/answers';

function* handleGetAnswers(action) {
  const { questionId } = action.payload;
  try {
    const res = yield call(
      answerService.getAnswersByQuestion, questionId,
    );
    yield put({ type: types.GET_ANSWERS_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.GET_ANSWERS_FAIL, payload: error });
  }
}

function* handleAnswerCreate(action) {
  try {
    const userId = yield select(getCurrentUserId);
    const answer = { ...action.payload, userId };
    const res = yield call(
      answerService.createAnswer, answer,
    );
    yield put({ type: types.ANSWER_CREATE_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.ANSWER_CREATE_FAIL, payload: error });
  }
}

function* handleUpdateAnswer(action) {
  const { answer } = action.payload;
  try {
    const userId = yield select(getCurrentUserId);
    const res = yield call(
      answerService.updateAnswer, { ...answer, userId },
    );
    yield put({ type: types.UPDATE_ANSWER_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.UPDATE_ANSWER_FAIL, payload: error });
  }
}

export default function* questionSaga() {
  yield takeEvery(types.GET_ANSWERS, handleGetAnswers);
  yield takeEvery(types.ANSWER_CREATE, handleAnswerCreate);
  yield takeEvery(types.UPDATE_ANSWER, handleUpdateAnswer);
}
