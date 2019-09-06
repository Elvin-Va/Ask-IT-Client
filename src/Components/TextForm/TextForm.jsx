import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextForm = ({ onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [text, setText] = useState('');

  const handleClick = () => {
    if (text) {
      onSubmit(text);
      setText('');
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="list-group-item list-group-item-action">
      <div className="input-group">
        <textarea className="form-control" aria-label="With textarea" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleClick} type="button" className="btn btn-primary">Submit</button>
      </div>
      {submitted && !text
                            && <div className="help-block">Text is required</div>}
    </div>
  );
};

TextForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TextForm;
