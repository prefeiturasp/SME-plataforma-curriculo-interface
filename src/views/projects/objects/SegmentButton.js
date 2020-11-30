import { connect } from 'react-redux';
import SegmentButton from 'components/objects/SegmentButton';
import ProjectFiltersActions from 'actions/ProjectFiltersActions';

const mapDispatchToProps = dispatch => {
  return {
    toggleSegments: data => {
      dispatch(ProjectFiltersActions.toggleSegments(data))
    },
    getStages: data => {
      dispatch(ProjectFiltersActions.getStages(data))
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SegmentButton);
