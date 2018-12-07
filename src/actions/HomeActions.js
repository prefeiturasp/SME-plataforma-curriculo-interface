import Api from 'data/Api';
import BodyActions from 'actions/BodyActions';

const HomeActions = {
  LOAD: 'HomeActions.LOAD',
  LOADED: 'HomeActions.LOADED',
  TOGGLE_PREVIEW: 'HomeActions.TOGGLE_PREVIEW',
  
  load() {
    return dispatch => {
      dispatch({ type: HomeActions.LOAD });
      return Api.get('/api/sequencias', dispatch)
        .then(response => dispatch({ ...response, type: HomeActions.LOADED }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
  togglePreview(id) {
    return { type: HomeActions.TOGGLE_PREVIEW, id };
  },
};

export default HomeActions;
