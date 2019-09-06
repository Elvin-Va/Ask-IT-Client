import request from './api';
import authRequest from './authRequest';

const getLatestQuestions = async (page) => request.get('/latestQuestions', {
  params: {
    page,
  },
});

const getHotQuestions = async (page) => request.get('/hotQuestions', {
  params: {
    page,
  },
});

const getMyQuestions = async (userId, page) => authRequest().get('/myQuestions', {
  params: {
    userId,
    page,
  },
});

const createQuestion = async (question) => authRequest().post('/question', question);

const updateQuestion = async (question) => request.put('/updateQuestion', question);

export default {
  getLatestQuestions,
  getHotQuestions,
  updateQuestion,
  getMyQuestions,
  createQuestion,
};
