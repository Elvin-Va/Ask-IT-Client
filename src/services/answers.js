import request from './api';
import authRequest from './authRequest';

const getAnswersByQuestion = async (questionId) => request.get(`/answers/${questionId}`);

const createAnswer = async (answer) => authRequest().post('/answer', answer);

const updateAnswer = async (answer) => request.put('/updateAnswer', answer);

export default {
  getAnswersByQuestion,
  createAnswer,
  updateAnswer,
};
