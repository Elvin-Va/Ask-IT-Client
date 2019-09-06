import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChangePassForm = ({ onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (current && newPass && (newPass === confirmPass)) {
      onSubmit(current, newPass);
      setSubmitted(false);
      setCurrent('');
      setNewPass('');
      setConfirmPass('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Change Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="password" className="form-control" id="currentPass" placeholder="Current password" value={current} onChange={(e) => setCurrent(e.target.value)} />
            {submitted && !current && <div className="help-block">Field is required</div>}
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="newPass" placeholder="New password" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
            {submitted && !newPass && <div className="help-block">Field is required</div>}
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="confirm" placeholder="Confirm password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
            {submitted && !confirmPass && <div className="help-block">Field is required</div>}
            {submitted && (newPass !== confirmPass) && <div className="help-block">Password doesn&apos;t match</div>}
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

ChangePassForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ChangePassForm;
