import { connect } from 'react-redux';
import AuthActions from 'actions/AuthActions';
import HomeActions from 'actions/HomeActions';
import GridItemBase from 'views/sequences/GridItemBase';

const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(AuthActions.login());
    },
    togglePreview: id => {
      dispatch(HomeActions.togglePreview(id));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GridItemBase);
