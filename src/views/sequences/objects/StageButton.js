import { connect } from 'react-redux';
import StageButton from 'components/objects/StageButton';
import FiltersActions from 'actions/FiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleStages: data => {
      dispatch(FiltersActions.toggleStages(data))
    },
    getYears: data => {
      dispatch(FiltersActions.getYears(data))
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StageButton);
