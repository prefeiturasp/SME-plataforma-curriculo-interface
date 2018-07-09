import { connect } from 'react-redux';
import YearButton from '../common/YearButton';
import LearningObjectivesActions from '../../actions/LearningObjectivesActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(LearningObjectivesActions.toggleFilter(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(YearButton);
