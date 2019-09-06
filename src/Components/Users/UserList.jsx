import React from 'react';
import PropTypes from 'prop-types';

import UserItem from './UserItem';

const UserList = ({ title, users }) => (
  <div className="card">
    <div className="card-body">
      <h3 className="card-title mb-4">{title}</h3>
      <div className="list-group">
        { users.map((user) => (
          <UserItem
            key={user.userId}
            user={user}
          />
        ))}
      </div>
      <div className="nav-item">
        {users.length === 20 && <button type="button" className="btn btn-link">Load More</button>}
      </div>
    </div>
  </div>
);

UserList.defaultProps = {
  title: 'Most Active Users',
};

UserList.propTypes = {
  title: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    numberOfAnswers: PropTypes.string,
  })).isRequired,
};

export default UserList;
