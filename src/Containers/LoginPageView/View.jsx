import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader';


const LoginView = ({
  login, isFetching, isLoggedIn, history,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // if user is logged in redirect him to home page
  useEffect(() => {
    if (isLoggedIn) history.push('/');
  }, [isLoggedIn, history]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    if (email && password) {
      login(email, password);
    }
  };

  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Login</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className={`form-group${submitted && !email ? ' has-error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {submitted && !email
                            && <div className="help-block">Email is required</div>}
        </div>
        <div className={`form-group${submitted && !password ? ' has-error' : ''}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {submitted && !password
                            && <div className="help-block">Password is required</div>}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Login</button>
          {isFetching
          && <Loader /> }
          <Link to="/register" className="btn btn-link">Register</Link>
        </div>
      </form>
    </div>
  );
};

LoginView.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginView;
