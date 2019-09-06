import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader';

const RegisterView = ({ register, isFetching }) => {
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    if (user.firstName && user.lastName && user.email && user.password) {
      register(user);
    }
  };

  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Register</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className={`form-group${submitted && !user.firstName ? ' has-error' : ''}`}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={handleChange} />
          {submitted && !user.firstName
                    && <div className="help-block">First Name is required</div>}
        </div>
        <div className={`form-group${submitted && !user.lastName ? ' has-error' : ''}`}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={handleChange} />
          {submitted && !user.lastName
                    && <div className="help-block">Last Name is required</div>}
        </div>
        <div className={`form-group${submitted && !user.email ? ' has-error' : ''}`}>
          <label htmlFor="email">email</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} />
          {submitted && !user.email
                    && <div className="help-block">email is required</div>}
        </div>
        <div className={`form-group${submitted && !user.password ? ' has-error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} />
          {submitted && !user.password
                    && <div className="help-block">Password is required</div>}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Register</button>
          {isFetching
                    && <Loader /> }
          <Link to="/login" className="btn btn-link">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

RegisterView.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

export default RegisterView;
