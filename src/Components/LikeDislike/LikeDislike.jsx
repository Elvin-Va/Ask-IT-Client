import React from 'react';
import PropTypes from 'prop-types';

const LikeDislike = ({
  numerOfLikes, numerOfDislikes, onLike, onDislike,
}) => (
  <div className="btn-group btn-group-sm" role="group">
    <button onClick={onLike} type="button" className="btn btn-primary">
Like
      {' '}
      <span className="badge badge-light">{numerOfLikes}</span>
    </button>
    <button onClick={onDislike} type="button" className="btn btn-dark">
Dislike
      {' '}
      <span className="badge badge-light">{numerOfDislikes}</span>
    </button>
  </div>
);
LikeDislike.propTypes = {
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  numerOfLikes: PropTypes.number.isRequired,
  numerOfDislikes: PropTypes.number.isRequired,
};

export default LikeDislike;
