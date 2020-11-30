import { connect } from 'react-redux';
import YearButton from 'components/objects/YearButton';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilterAndSearch: data => {
      dispatch(ProjectFiltersActions.toggleFilterAndSearch(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(YearButton);
