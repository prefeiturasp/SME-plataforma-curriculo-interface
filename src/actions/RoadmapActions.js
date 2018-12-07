import Api from 'data/Api';
import BodyActions from 'actions/BodyActions';

const RoadmapActions = {
  LOAD: 'RoadmapActions.LOAD',
  LOADED: 'RoadmapActions.LOADED',
  
  load() {
    return dispatch => {
      dispatch({ type: RoadmapActions.LOAD });
      return Api.get('/api/roteiros', dispatch)
        .then(response => dispatch({ ...response, type: RoadmapActions.LOADED }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
};

export default RoadmapActions;
