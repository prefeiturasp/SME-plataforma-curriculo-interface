import { connect } from 'react-redux';
import CurricularComponentButton from 'components/CurricularComponentButton';
import FiltersActions from 'actions/FiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(FiltersActions.toggleFilter(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(CurricularComponentButton);
