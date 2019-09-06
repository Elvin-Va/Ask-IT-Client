import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const NavBar = ({ isLoggedIn, logout }) => (
  <div className="mt-5">
    { !isLoggedIn
      ? (
        <div className="col-12 mt-5">
          <div className="m-2 text-right">
            To answer or ask a question please
            <Link to="/login" className="btn btn-link">Login</Link>
            OR
            <Link to="/register" className="btn btn-link">Register</Link>
          </div>
        </div>
      )
      : (
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link active" to="/myQuestions">My Questions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link onClick={logout} className="nav-link" to="/">Logout</Link>
          </li>
        </ul>
      )}
  </div>
);

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavBar;
