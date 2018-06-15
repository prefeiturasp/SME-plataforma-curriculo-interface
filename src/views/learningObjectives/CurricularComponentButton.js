import { connect } from 'react-redux';
import CurricularComponentButton from '../common/CurricularComponentButton';
import LearningObjectivesActions from '../../actions/LearningObjectivesActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(LearningObjectivesActions.toggleFilter(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(CurricularComponentButton);
