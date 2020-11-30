import { connect } from 'react-redux';
import CurricularComponent from 'components/objects/CurricularComponent';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(ProjectFiltersActions.toggleFilter(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CurricularComponent);
