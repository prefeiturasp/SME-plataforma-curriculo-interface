import Api from 'data/Api';
import AlertActions from './AlertActions';
import SequencesActions from './SequencesActions';
import getFiltersQueryString from 'data/getFiltersQueryString';

function isStageOrComponent(s) {
  return s === 'stages' || s === 'curricular_components';
}

const FiltersActions = {
  CACHE_FILTER: 'FiltersActions.CACHE_FILTER',
  CLEAR_FILTERS: 'FiltersActions.CLEAR_FILTERS',
  LOAD: 'FiltersActions.LOAD',
  LOADED: 'FiltersActions.LOADED',
  LOADED_STAGES: 'FiltersActions.LOADED_STAGES',
  LOADED_EXTRA: 'FiltersActions.LOADED_EXTRA',
  HIDE_CATEGORY: 'FiltersActions.HIDE_CATEGORY',
  TOGGLE_SEGMENTS: 'FiltersActions.TOGGLE_SEGMENTS',
  TOGGLE_FILTER: 'FiltersActions.TOGGLE_FILTER',
  TOGGLE_PANEL: 'FiltersActions.TOGGLE_PANEL',
  SEARCH: 'FiltersActions.SEARCH',
  SET_ORDER: 'FiltersActions.SET_ORDER',
  SET_QUERY: 'FiltersActions.SET_QUERY',
  SHOW_CATEGORY: 'FiltersActions.SHOW_CATEGORY',

  load() {
    return Api.simpleGet(
      '/api/filtros',
      FiltersActions.LOAD,
      FiltersActions.LOADED
    );
  },
  toggleSegments(filter) {
    return (dispatch, getState) => {
      let filterToRemove = getState().FiltersReducer.filters.filter(
        item => (item !== filter) && (item.type === 'segments') && (item.isActive === true)
      );
      if (filterToRemove.length > 0) {
        filterToRemove = filterToRemove[0];
        dispatch({ type: FiltersActions.TOGGLE_SEGMENTS, filterToRemove });
      }
      dispatch({ type: FiltersActions.TOGGLE_FILTER, filter });
    };
  },
  getStages(filter) {
    return (dispatch, getState) => {
      if (filter.isActive === true){
        let queryString = `segment_id[]=${filter.id}`
        return Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: FiltersActions.LOADED_STAGES })
        );
      } else {
        return Api.get(dispatch, `/api/filtros`).then(response =>
          dispatch({ ...response, type: FiltersActions.LOADED_STAGES })
        );
      }
    };
  },
  hideCategory() {
    return { type: FiltersActions.HIDE_CATEGORY };
  },
  showCategory(category) {
    return (dispatch, getState) => {
      const filters = getState().FiltersReducer.filters.filter(
        item => isStageOrComponent(item.type) && item.isActive
      );

      if (
        filters.length <= 0 &&
        (category.slug === 'axes' || category.slug === 'learning_objectives')
      ) {
        dispatch({
          type: AlertActions.OPEN,
          message: 'Selecione uma etapa ou componente curricular.',
        });
      } else {
        dispatch({ type: FiltersActions.SHOW_CATEGORY, category });
      }
    };
  },
  clearFilters() {
    return { type: FiltersActions.CLEAR_FILTERS };
  },
  cacheFilter(filter) {
    return { type: FiltersActions.CACHE_FILTER, filter };
  },
  toggleFilter(filter) {
    return (dispatch, getState) => {
      dispatch({ type: FiltersActions.TOGGLE_FILTER, filter });

      if (isStageOrComponent(filter.type)) {
        const filters = getState().FiltersReducer.filters.filter(
          item => isStageOrComponent(item.type) && item.isActive
        );
        const queryString = getFiltersQueryString(filters);
        return Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: FiltersActions.LOADED_EXTRA })
        );
      }
    };
  },
  toggleFilterAndSearch(filter) {
    return (dispatch, getState) => {
      dispatch({ type: FiltersActions.TOGGLE_FILTER, filter });
      const filters = getState().FiltersReducer.filters.filter(
        item => item.isActive
      );
      const queryString = getFiltersQueryString(filters);

      if (filter.type === 'segments') {
        Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: FiltersActions.LOADED_STAGES })
        );
      } else if (isStageOrComponent(filter.type)) {
        Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: FiltersActions.LOADED_EXTRA })
        );
      }
    };
  },
  togglePanel() {
    return { type: FiltersActions.TOGGLE_PANEL };
  },
  search() {
    return { type: FiltersActions.SEARCH };
  },
  setOrder(order) {
    return { type: FiltersActions.SET_ORDER, order };
  },
  setQuery(query) {
    return { type: FiltersActions.SET_QUERY, query };
  },
};

export default FiltersActions;
