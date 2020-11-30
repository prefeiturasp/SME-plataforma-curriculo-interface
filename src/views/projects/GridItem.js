import { connect } from 'react-redux';
import ProjectsActions from 'actions/ProjectsActions';
import GridItemBase from './GridItemBase';

const mapDispatchToProps = dispatch => {
  return {
    togglePreview: id => {
      dispatch(ProjectsActions.togglePreview(id));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GridItemBase);
