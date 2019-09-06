export const types = {
  USER_REGISTER: 'USER_REGISTER',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAIL: 'USER_REGISTER_FAIL',
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',

  GET_USERS: 'GET_USERS',
  GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
  GET_USERS_FAIL: 'GET_USERS_FAIL',

  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  GET_USER_FAIL: 'GET_USER_FAIL',

  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  CHANGE_PASSWORD_SUCCESS: 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAIL: 'CHANGE_PASSWORD_FAIL',
};

export const register = (user) => ({
  type: types.USER_REGISTER,
  payload: { user },
});

export const login = (email, pass) => ({
  type: types.USER_LOGIN,
  payload: { email, pass },
});

export const logout = () => ({
  type: types.USER_LOGOUT,
});

export const changePassword = (currentPass, newPass) => ({
  type: types.CHANGE_PASSWORD,
  payload: { currentPass, newPass },
});

export const getMostActiveUsers = () => ({
  type: types.GET_USERS,
});

export const getCurrentUserInfo = () => ({
  type: types.GET_USER,
});
