import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMyQuestions, createQuestion } from '../../Redux/Actions/questions';

const mapState = (state) => ({
  questions: Object.values(state.myQuestions.data)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
  isFetching: state.myQuestions.isFetching,
});

const mapDispatch = (dispatch) => bindActionCreators(
  {
    getMyQuestions,
    createQuestion,
  },
  dispatch,
);

export default connect(
  mapState,
  mapDispatch,
);
