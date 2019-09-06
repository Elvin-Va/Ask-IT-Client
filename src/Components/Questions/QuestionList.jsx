import React from 'react';
import PropTypes from 'prop-types';

import QuestionItem from './QuestionItem';

const QuestionList = ({
  title, questions, updateQuestion, history, showRating,
}) => {
  const openQuestion = (question) => {
    history.push(`/question/${question.id}`, question);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title mb-4">{title}</h3>
        <div className="list-group">
          { questions.map((question) => (
            <QuestionItem
              key={question.id}
              item={question}
              updateItem={updateQuestion}
              onClick={openQuestion}
              showRating={showRating}
              pointer="pointer"
            />
          ))}
        </div>
        <div className="nav-item">
          {questions.length === 20 && <button type="button" className="btn btn-link">Load More</button>}
        </div>
      </div>
    </div>
  );
};

QuestionList.defaultProps = {
  title: 'Questions',
  showRating: true,
  updateQuestion: () => {},
};

QuestionList.propTypes = {
  title: PropTypes.string,
  showRating: PropTypes.bool,
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
  updateQuestion: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default QuestionList;
