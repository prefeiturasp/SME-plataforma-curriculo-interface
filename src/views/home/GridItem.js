import { connect } from 'react-redux';
import HomeActions from '../../actions/HomeActions';
import GridItemBase from '../sequences/GridItemBase';

const mapDispatchToProps = dispatch => {
  return {
    togglePreview: (id) => {
      dispatch(HomeActions.togglePreview(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(GridItemBase);
