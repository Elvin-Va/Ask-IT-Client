import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { register } from '../../Redux/Actions/user';

const mapState = (state) => ({ isFetching: state.user.isFetching });

const mapDispatch = (dispatch) => bindActionCreators(
  {
    register,
  },
  dispatch,
);

export default connect(
  mapState,
  mapDispatch,
);
