import { combineReducers } from 'redux';

import user from './user';
import latestQuestions from './latestQuestions';
import hotQuestions from './hotQuestions';
import myQuestions from './myQuestions';
import mostActiveUsers from './mostActiveUsers';
import answers from './answers';

export default combineReducers({
  user,
  latestQuestions,
  hotQuestions,
  mostActiveUsers,
  answers,
  myQuestions,
});
