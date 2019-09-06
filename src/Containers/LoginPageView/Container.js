import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../../Redux/Actions/user';

const mapState = (state) => ({
  isFetching: state.user.isFetching,
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatch = (dispatch) => bindActionCreators(
  {
    login,
  },
  dispatch,
);

export default connect(
  mapState,
  mapDispatch,
);
