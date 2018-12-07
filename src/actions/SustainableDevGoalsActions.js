import Api from 'data/Api';
import BodyActions from 'actions/BodyActions';

const SustainableDevGoalsActions = {
  LOAD: 'SustainableDevGoalsActions.LOAD',
  LOADED: 'SustainableDevGoalsActions.LOADED',
  LOADED_ITEM: 'SustainableDevGoalsActions.LOADED_ITEM',
  
  load() {
    return dispatch => {
      dispatch({ type: SustainableDevGoalsActions.LOAD });
      return Api.get('/api/ods', dispatch)
        .then(response => dispatch({ ...response, type: SustainableDevGoalsActions.LOADED }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
  loadItem(id) {
    return dispatch => {
      dispatch({ type: SustainableDevGoalsActions.LOAD });
      return Api.get(`/api/ods/${id}`, dispatch)
        .then(response => dispatch({ ...response, type: SustainableDevGoalsActions.LOADED_ITEM }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
};

export default SustainableDevGoalsActions;
