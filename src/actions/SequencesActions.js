import Api from 'data/Api';
import AlertActions from './AlertActions';
import getFiltersQueryString, { getSearchQueryString } from 'data/getFiltersQueryString';

const SequencesActions = {
  CLEAR: 'SequencesActions.CLEAR',
  LOAD: 'SequencesActions.LOAD',
  LOAD_MORE: 'SequencesActions.LOAD_MORE',
  LOAD_PERFORMED: 'SequencesActions.LOAD_PERFORMED',
  LOADED: 'SequencesActions.LOADED',
  LOADED_MORE: 'SequencesActions.LOADED_MORE',
  LOADED_PERFORMED: 'SequencesActions.LOADED_PERFORMED',
  SEARCH: 'SequencesActions.SEARCH',
  TOGGLE_PREVIEW: 'SequencesActions.TOGGLE_PREVIEW',

  clearSearch() {
    return { type: SequencesActions.CLEAR };
  },
  search() {
    return (dispatch, getState) => {
      const state = getState().FiltersReducer;
      const { filters, order, query } = state;
      const activeFilters = filters.filter(item => item.isActive);
      const queryString = getSearchQueryString(activeFilters, query, order);

      dispatch({ type: SequencesActions.SEARCH });
      return Api.get(dispatch, `/api/sequencias?${queryString}`)
        .then(response => dispatch({ ...response, type: SequencesActions.LOADED }))
        .catch(error => dispatch(AlertActions.open(`Ocorreu um erro: ${error}`)));
    };
  },
  load() {
    return Api.simpleGet(
      '/api/sequencias',
      SequencesActions.LOAD,
      SequencesActions.LOADED
    );
  },
  loadMore(page) {
    return Api.simpleGet(
      page,
      SequencesActions.LOAD_MORE,
      SequencesActions.LOADED_MORE
    );
  },
  loadPerformed() {
    return Api.simpleGet(
      '/api/sequencias_realizadas',
      SequencesActions.LOAD_PERFORMED,
      SequencesActions.LOADED_PERFORMED
    );
  },
  loadWithFilter(filter) {
    const queryString = getFiltersQueryString([filter]);
    return Api.simpleGet(
      `/api/sequencias?${queryString}`,
      SequencesActions.SEARCH,
      SequencesActions.LOADED
    );
  },
  togglePreview(id) {
    return { type: SequencesActions.TOGGLE_PREVIEW, id };
  },
};

export default SequencesActions;
