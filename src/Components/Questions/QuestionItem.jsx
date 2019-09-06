import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import LikeDislike from '../LikeDislike/LikeDislike';
import './style.css';


const QuestionItem = ({
  item, updateItem, onClick, showRating, pointer,
}) => {
  const onLike = (e) => {
    e.stopPropagation();
    updateItem({ id: item.id, isLike: true });
  };
  const onDislike = (e) => {
    e.stopPropagation();
    updateItem({ id: item.id, isLike: false });
  };

  return (
    <div onClick={() => onClick(item)} onKeyPress={() => onClick(item)} role="link" tabIndex={0} className={`list-group-item ${pointer}`}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{item.text}</h5>
        <small>{moment(item.createdAt).fromNow()}</small>
      </div>
      {showRating
      && (
      <div className="like-dislike-position">
        <LikeDislike
          onLike={onLike}
          onDislike={onDislike}
          questionId={item.id}
          numerOfLikes={item.like}
          numerOfDislikes={item.dislike}
        />
      </div>
      )}
      { item.User
        ? <small>{`${item.User.firstName} ${item.User.lastName}`}</small>
        : <br />}
    </div>
  );
};

QuestionItem.defaultProps = {
  onClick: () => {},
  showRating: true,
  updateItem: () => {},
  pointer: '',
};

QuestionItem.propTypes = {
  showRating: PropTypes.bool,
  item: PropTypes.shape({
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
  }).isRequired,
  updateItem: PropTypes.func,
  onClick: PropTypes.func,
  pointer: PropTypes.string,
};

export default QuestionItem;
