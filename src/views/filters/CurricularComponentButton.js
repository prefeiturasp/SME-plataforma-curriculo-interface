import { connect } from 'react-redux';
import CurricularComponentButton from '../common/CurricularComponentButton';
import FiltersActions from '../../actions/FiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(FiltersActions.toggleFilter(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(CurricularComponentButton);
