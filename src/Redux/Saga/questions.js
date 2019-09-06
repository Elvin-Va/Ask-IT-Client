import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';

import { getCurrentUserId } from '../Selectors/user';
import questionService from '../../services/questions';
import { types } from '../Actions/questions';

function* handleGetQuestions() {
  try {
    const page = yield select((state) => state.latestQuestions.page);
    const res = yield call(
      questionService.getLatestQuestions, page,
    );
    yield put({ type: types.GET_QUESTIONS_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.GET_QUESTIONS_FAIL, payload: error });
  }
}

function* handleGetMyQuestions() {
  try {
    const page = yield select((state) => state.myQuestions.page);
    const userId = yield select(getCurrentUserId);
    const res = yield call(
      questionService.getMyQuestions, userId, page,
    );
    yield put({ type: types.GET_MY_QUESTIONS_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.GET_MY_QUESTIONS_FAIL, payload: error });
  }
}

function* handleGetHotQuestions() {
  try {
    const page = yield select((state) => state.hotQuestions.page);
    const res = yield call(
      questionService.getHotQuestions, page,
    );
    yield put({ type: types.GET_HOT_QUESTIONS_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.GET_HOT_QUESTIONS_FAIL, payload: error });
  }
}

function* handleUpdateQuestion(action) {
  const { question } = action.payload;
  try {
    const userId = yield select(getCurrentUserId);
    const res = yield call(
      questionService.updateQuestion, { ...question, userId },
    );
    yield put({ type: types.UPDATE_QUESTION_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.UPDATE_QUESTION_FAIL, payload: error });
  }
}

function* handleCreateQuestion(action) {
  const { text } = action.payload;
  try {
    const userId = yield select(getCurrentUserId);
    const res = yield call(
      questionService.createQuestion, { text, userId },
    );
    yield put({ type: types.CREATE_QUESTION_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.CREATE_QUESTION_FAIL, payload: error });
  }
}

export default function* questionSaga() {
  yield takeEvery(types.GET_QUESTIONS, handleGetQuestions);
  yield takeEvery(types.GET_HOT_QUESTIONS, handleGetHotQuestions);
  yield takeEvery(types.UPDATE_QUESTION, handleUpdateQuestion);
  yield takeEvery(types.GET_MY_QUESTIONS, handleGetMyQuestions);
  yield takeEvery(types.CREATE_QUESTION, handleCreateQuestion);
}
