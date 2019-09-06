import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import QuestionList from '../../Components/Questions/QuestionList';
import UserList from '../../Components/Users/UserList';
import Loader from '../../Components/Loader';


const HomeView = ({
  getLatestQuestions, latestQuestions, isLatestFetching,
  getHotQuestions, hotQuestions, isHotFetching,
  updateQuestion,
  getMostActiveUsers, users, isUsersFetching,
  history,
}) => {
  useEffect(() => {
    getLatestQuestions();
  }, [getLatestQuestions]);

  useEffect(() => {
    getHotQuestions();
  }, [getHotQuestions]);

  useEffect(() => {
    getMostActiveUsers();
  }, [getMostActiveUsers]);

  return (
    <div>
      <div className="col-12 mt-5">
        {!isLatestFetching ? <QuestionList questions={latestQuestions} updateQuestion={updateQuestion} title="Latest questions" history={history} /> : <Loader />}
      </div>
      <div className="col-12 mt-5">
        {!isHotFetching ? <QuestionList questions={hotQuestions} updateQuestion={updateQuestion} title="Hot questions" history={history} /> : <Loader />}
      </div>
      <div className="col-12 mt-5">
        {!isUsersFetching ? <UserList users={users} title="Most Active Users" /> : <Loader /> }
      </div>
    </div>
  );
};

HomeView.propTypes = {
  isLatestFetching: PropTypes.bool.isRequired,
  isHotFetching: PropTypes.bool.isRequired,
  isUsersFetching: PropTypes.bool.isRequired,
  getLatestQuestions: PropTypes.func.isRequired,
  getHotQuestions: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
  getMostActiveUsers: PropTypes.func.isRequired,
  latestQuestions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    createdAt: PropTypes.string,
    numerOfLikes: PropTypes.number,
    numerOfDislikes: PropTypes.number,
    userId: PropTypes.number,
    User: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    }),
  })).isRequired,
  hotQuestions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    createdAt: PropTypes.string,
    numerOfLikes: PropTypes.number,
    numerOfDislikes: PropTypes.number,
    userId: PropTypes.number,
    User: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    }),
  })).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    createdAt: PropTypes.string,
    numerOfAnswers: PropTypes.string,
  })).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeView;
