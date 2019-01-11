import { connect } from 'react-redux';
import AuthActions from 'actions/AuthActions';
import SequencesActions from 'actions/SequencesActions';
import GridItemBase from './GridItemBase';

const mapDispatchToProps = dispatch => {
  return {
    login: () => {
      dispatch(AuthActions.login());
    },
    togglePreview: id => {
      dispatch(SequencesActions.togglePreview(id));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GridItemBase);
