import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// import './style.css';

const UserItem = ({ user }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="card-title">{`${user.firstName} ${user.lastName}`}</h3>
      <h6 className="card-title">{` email: ${user.email}`}</h6>
      { user.numOfAnswers
      && (
      <p className="card-text text-right h5">
        {user.numOfAnswers}
        {' '}
Answers
      </p>
      )}
      <small>
registered:
        {' '}
        {moment(user.createdAt).fromNow()}
      </small>
    </div>
  </div>
);

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    numOfAnswers: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default UserItem;
