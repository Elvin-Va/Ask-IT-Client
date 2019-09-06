import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ChangePassForm from '../../Components/ChangePassForm/ChangePassForm';
import UserItem from '../../Components/Users/UserItem';
import Loader from '../../Components/Loader';

const ProfilePage = ({
  currentUser, getCurrentUserInfo, changePassword, isFetching,
}) => {
  useEffect(() => {
    getCurrentUserInfo();
  }, [getCurrentUserInfo]);

  return (
    <div className="row mt-5">
      <div className="col-6 mt-5">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">User Profile</h4>
            {!isFetching ? <UserItem user={currentUser} /> : <Loader /> }
          </div>
        </div>
      </div>
      <div className="col-6 mt-5">
        <ChangePassForm onSubmit={changePassword} />
      </div>
    </div>
  );
};
ProfilePage.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    numOfAnswers: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
  getCurrentUserInfo: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default ProfilePage;
