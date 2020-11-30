import { connect } from 'react-redux';
import RegionalEducationBoard from 'components/objects/RegionalEducationBoard';
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
)(RegionalEducationBoard);
