import { connect } from 'react-redux';
import CurricularComponentButton from 'components/objects/CurricularComponentButton';
import LearningObjectivesActions from 'actions/LearningObjectivesActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(LearningObjectivesActions.toggleFilter(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(CurricularComponentButton);
