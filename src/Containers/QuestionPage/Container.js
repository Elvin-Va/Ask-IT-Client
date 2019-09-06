import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateQuestion } from '../../Redux/Actions/questions';
import { getAnswers, createAnswer, updateAnswer } from '../../Redux/Actions/answers';

const mapState = (state, ownProps) => ({
  question: ownProps.location.state,
  answers: Object.values(state.answers.data),
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatch = (dispatch) => bindActionCreators(
  {
    updateQuestion,
    updateAnswer,
    getAnswers,
    createAnswer,
  },
  dispatch,
);

export default connect(
  mapState,
  mapDispatch,
);
