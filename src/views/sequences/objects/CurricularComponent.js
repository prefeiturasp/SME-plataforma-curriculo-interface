import { connect } from 'react-redux';
import CurricularComponent from 'components/objects/CurricularComponent';
import FiltersActions from 'actions/FiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(FiltersActions.toggleFilter(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CurricularComponent);
