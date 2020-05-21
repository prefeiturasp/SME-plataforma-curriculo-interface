import { connect } from 'react-redux';
import StageButton from 'components/objects/StageButton';
import LearningObjectivesActions from 'actions/LearningObjectivesActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilterAndSearch: data => {
      dispatch(LearningObjectivesActions.toggleFilterAndSearch(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StageButton);
