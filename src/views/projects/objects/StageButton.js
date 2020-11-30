import { connect } from 'react-redux';
import StageButton from 'components/objects/StageButton';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleStages: data => {
      dispatch(ProjectFiltersActions.toggleStages(data))
    },
    getYears: data => {
      dispatch(ProjectFiltersActions.getYears(data))
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StageButton);
