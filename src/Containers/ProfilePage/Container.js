import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCurrentUser } from '../../Redux/Selectors/user';
import { getCurrentUserInfo, changePassword } from '../../Redux/Actions/user';

const mapState = (state) => ({
  currentUser: getCurrentUser(state),
  isFetching: state.user.isFetching,
});

const mapDispatch = (dispatch) => bindActionCreators(
  {
    getCurrentUserInfo,
    changePassword,
  },
  dispatch,
);

export default connect(
  mapState,
  mapDispatch,
);
