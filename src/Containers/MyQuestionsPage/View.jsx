import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import QuestionList from '../../Components/Questions/QuestionList';
import TextForm from '../../Components/TextForm/TextForm';

const MyQuestionsPage = ({
  getMyQuestions, questions, createQuestion, isFetching, history,
}) => {
  useEffect(() => {
    getMyQuestions();
  }, [getMyQuestions]);

  return (
    <div className="mt-5">
      <div className="col-12 mt-5">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Ask a question</h4>
            {<TextForm onSubmit={createQuestion} /> }
          </div>
        </div>
      </div>
      <div className="col-12 mt-5">
        {!isFetching && <QuestionList showRating={false} questions={questions} title="My Questions" history={history} /> }
      </div>
    </div>
  );
};

MyQuestionsPage.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    createdAt: PropTypes.string,
    like: PropTypes.number,
    dislike: PropTypes.number,
    userId: PropTypes.number,
    User: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    }),
  })).isRequired,
  getMyQuestions: PropTypes.func.isRequired,
  createQuestion: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default MyQuestionsPage;
