import { connect } from 'react-redux';
import SequencesActions from '../../actions/SequencesActions';
import GridItemBase from './GridItemBase';

const mapDispatchToProps = dispatch => {
  return {
    togglePreview: (id) => {
      dispatch(SequencesActions.togglePreview(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(GridItemBase);
