import { connect } from 'react-redux';
import SegmentButton from 'components/objects/SegmentButton';
import FiltersActions from 'actions/FiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleSegments: data => {
      dispatch(FiltersActions.toggleSegments(data))
    },
    getStages: data => {
      dispatch(FiltersActions.getStages(data))
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SegmentButton);
