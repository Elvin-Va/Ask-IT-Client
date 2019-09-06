import request from './api';
import authRequest from './authRequest';

const userRegister = async (user) => request.post('/register', user);

const userLogin = async (email, password) => request.post('/login', { email, password });

const getMostActiveUsers = async (page) => request.get('/usersWithMostAnswers', {
  params: {
    page,
  },
});

const getUser = async (id) => authRequest().get('/user', {
  params: {
    id,
  },
});

const changePass = async (id, currentPass, newPass) => authRequest().post('/changePass', {
  id, currentPass, newPass,
});

export default {
  userRegister,
  userLogin,
  getMostActiveUsers,
  getUser,
  changePass,
};
