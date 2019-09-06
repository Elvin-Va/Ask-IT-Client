import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../../Redux/Actions/user';

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    logout,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
