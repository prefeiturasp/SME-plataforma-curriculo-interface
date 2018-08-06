import { connect } from 'react-redux';
import YearButton from '../common/YearButton';
import FiltersActions from '../../actions/FiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: data => {
      dispatch(FiltersActions.toggleFilter(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(YearButton);
