import { all, fork } from 'redux-saga/effects';
import userSaga from './user';
import questionsSaga from './questions';
import answersSaga from './answers';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(questionsSaga),
    fork(answersSaga),
  ]);
}
