import { connect } from 'react-redux';
import SegmentButton from 'components/objects/SegmentButton';
import LearningObjectivesActions from 'actions/LearningObjectivesActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleSegments: data => {
      dispatch(LearningObjectivesActions.toggleSegments(data))
    },
    getStages: data => {
      dispatch(LearningObjectivesActions.getStages(data))
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SegmentButton);
