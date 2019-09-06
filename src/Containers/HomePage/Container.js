import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLatestQuestions, getHotQuestions, updateQuestion } from '../../Redux/Actions/questions';
import { getMostActiveUsers } from '../../Redux/Actions/user';

const mapState = (state) => ({
  isLatestFetching: state.latestQuestions.isFetching,
  latestQuestions: Object.values(state.latestQuestions.data)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
  isHotFetching: state.hotQuestions.isFetching,
  hotQuestions: Object.values(state.hotQuestions.data)
    .sort((a, b) => b.like - a.like),
  isUsersFetching: state.mostActiveUsers.isFetching,
  users: state.mostActiveUsers.data,
});

const mapDispatch = (dispatch) => bindActionCreators(
  {
    getLatestQuestions,
    getHotQuestions,
    updateQuestion,
    getMostActiveUsers,
  },
  dispatch,
);

export default connect(
  mapState,
  mapDispatch,
);
