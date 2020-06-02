import { connect } from 'react-redux';
import YearButton from 'components/objects/YearButton';
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
)(YearButton);
