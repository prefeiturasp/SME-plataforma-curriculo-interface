import { connect } from 'react-redux';
import StageButton from 'components/objects/StageButton';
import LearningObjectivesActions from 'actions/LearningObjectivesActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleStages: data => {
      dispatch(LearningObjectivesActions.toggleStages(data))
    },
    getYears: data => {
      dispatch(LearningObjectivesActions.getYears(data))
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StageButton);
