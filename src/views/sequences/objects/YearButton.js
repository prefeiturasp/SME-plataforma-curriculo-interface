import { connect } from 'react-redux';
import YearButton from 'components/objects/YearButton';
import FiltersActions from 'actions/FiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilterAndSearch: data => {
      dispatch(FiltersActions.toggleFilterAndSearch(data));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(YearButton);
