import { connect } from 'react-redux';
import StageButton from 'components/objects/StageButton';
import LearningObjectivesActions from 'actions/LearningObjectivesActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(LearningObjectivesActions.toggleFilter(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StageButton);
