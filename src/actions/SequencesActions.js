import Api from 'data/Api';
import BodyActions from 'actions/BodyActions';
import getFiltersQueryString from 'data/getFiltersQueryString';

const SequencesActions = {
  CLEAR: 'SequencesActions.CLEAR',
  LOAD: 'SequencesActions.LOAD',
  LOAD_ITEM: 'SequencesActions.LOAD_ITEM',
  LOAD_MORE: 'SequencesActions.LOAD_MORE',
  LOADED: 'SequencesActions.LOADED',
  LOADED_ITEM: 'SequencesActions.LOADED_ITEM',
  LOADED_MORE: 'SequencesActions.LOADED_MORE',
  SEARCH: 'SequencesActions.SEARCH',
  TOGGLE_PREVIEW: 'SequencesActions.TOGGLE_PREVIEW',
  
  clearSearch() {
    return { type: SequencesActions.CLEAR };
  },
  search(filters) {
    const queryString = getFiltersQueryString(filters);
    return dispatch => {
      dispatch({ type: SequencesActions.SEARCH });
      return Api.get(`/api/sequencias?${queryString}`, dispatch)
        .then(response => dispatch({ ...response, type: SequencesActions.LOADED }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
  load() {
    return dispatch => {
      dispatch({ type: SequencesActions.LOAD });
      return Api.get('/api/sequencias', dispatch)
        .then(response => dispatch({ ...response, type: SequencesActions.LOADED }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
  loadItem(slug) {
    return dispatch => {
      dispatch({ type: SequencesActions.LOAD_ITEM });
      return Api.get(`/api/sequencias/${slug}`, dispatch)
        .then(response => dispatch({ ...response, type: SequencesActions.LOADED_ITEM }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
  loadMore(page) {
    return dispatch => {
      dispatch({ type: SequencesActions.LOAD_MORE });
      return Api.get(page, dispatch)
        .then(response => dispatch({ ...response, type: SequencesActions.LOADED_MORE }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
  loadWithFilter(filter) {
    const queryString = getFiltersQueryString([filter]);
    return dispatch => {
      dispatch({ type: SequencesActions.SEARCH });
      return Api.get(`/api/sequencias?${queryString}`, dispatch)
        .then(response => dispatch({ ...response, type: SequencesActions.LOADED }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
  togglePreview(id) {
    return { type: SequencesActions.TOGGLE_PREVIEW, id };
  },
};

export default SequencesActions;
