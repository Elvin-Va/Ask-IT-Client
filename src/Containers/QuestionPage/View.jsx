import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import QuestionItem from '../../Components/Questions/QuestionItem';
import TextForm from '../../Components/TextForm/TextForm';

const QuestionPage = ({
  question, updateQuestion, getAnswers, answers, updateAnswer, createAnswer, isLoggedIn,
}) => {
  useEffect(() => {
    getAnswers(question.id);
  }, [getAnswers, question.id]);

  const handleSubmit = (text) => {
    createAnswer({ text, questionId: question.id });
  };

  return (
    <div>
      <div className="col-12 mt-5">
        <QuestionItem
          item={question}
          updateItem={updateQuestion}
          showRating={false}
        />
      </div>
      <div className="col-12 m-3"><h4>Answers:</h4></div>
      <div className="col-8 float-right">
        { answers.map((answer) => (
          <QuestionItem
            key={answer.id}
            item={answer}
            updateItem={updateAnswer}
          />
        ))}
      </div>
      <div className="col-8 float-right">
        {
        isLoggedIn
          ? (
            <TextForm onSubmit={handleSubmit} />
          ) : (
            <div className="m-2">
            To answer the question
              <Link to="/login" className="btn btn-link">Login</Link>
            Or
              <Link to="/register" className="btn btn-link">Register</Link>
            </div>
          )
      }
      </div>
    </div>
  );
};

QuestionPage.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    createdAt: PropTypes.string,
    like: PropTypes.number,
    dislike: PropTypes.number,
    userId: PropTypes.number,
  }).isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    createdAt: PropTypes.string,
    like: PropTypes.number,
    dislike: PropTypes.number,
    userId: PropTypes.number,
  })).isRequired,
  updateQuestion: PropTypes.func.isRequired,
  updateAnswer: PropTypes.func.isRequired,
  getAnswers: PropTypes.func.isRequired,
  createAnswer: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default QuestionPage;
