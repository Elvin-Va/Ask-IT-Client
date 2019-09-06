import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

import history from '../../utils/history';
import userService from '../../services/users';
import { getCurrentUserId } from '../Selectors/user';
import { types } from '../Actions/user';

function* handleUserRegister(action) {
  const { user } = action.payload;
  try {
    yield call(
      userService.userRegister, user,
    );
    yield put({ type: types.USER_REGISTER_SUCCESS });
    // toaster
    // redirect to login
    history.push('/login');
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.USER_REGISTER_FAIL, payload: error });
  }
}

function* handleUserLogin(action) {
  const { email, pass } = action.payload;
  try {
    const response = yield call(
      userService.userLogin, email, pass,
    );
    const { id } = jwtDecode(response.data.token);
    localStorage.setItem('authToken', response.data.token);
    yield put({ type: types.USER_LOGIN_SUCCESS, payload: { id, email } });
    // toaster
    // redirect to homePage
    history.push('/');
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.USER_LOGIN_FAIL, payload: error });
  }
}

function* handleGetUsers() {
  try {
    const page = yield select((state) => state.mostActiveUsers.page);
    const res = yield call(
      userService.getMostActiveUsers, page,
    );
    yield put({ type: types.GET_USERS_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.GET_USERS_FAIL, payload: error });
  }
}

function* handleGetUser() {
  try {
    const userId = yield select(getCurrentUserId);
    const res = yield call(
      userService.getUser, userId,
    );
    yield put({ type: types.GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.GET_USER_FAIL, payload: error });
  }
}

function* handleChangePass(action) {
  const { currentPass, newPass } = action.payload;
  try {
    const userId = yield select(getCurrentUserId);
    const res = yield call(
      userService.changePass, userId, currentPass, newPass,
    );
    yield put({ type: types.CHANGE_PASSWORD_SUCCESS, payload: res.data });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: types.CHANGE_PASSWORD_FAIL, payload: error });
  }
}

function* handleLogout() {
  yield localStorage.clear();
}

export default function* userSaga() {
  yield takeEvery(types.USER_REGISTER, handleUserRegister);
  yield takeEvery(types.USER_LOGIN, handleUserLogin);
  yield takeEvery(types.GET_USERS, handleGetUsers);
  yield takeEvery(types.GET_USER, handleGetUser);
  yield takeEvery(types.CHANGE_PASSWORD, handleChangePass);
  yield takeEvery(types.USER_LOGOUT, handleLogout);
}
