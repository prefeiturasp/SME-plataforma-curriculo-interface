import Api from 'data/Api';
import AlertActions from './AlertActions';
import getFiltersQueryString from 'data/getFiltersQueryString';

function isYearOrComponent(s) {
  return s === 'years' || s === 'curricular_components';
}

const FiltersActions = {
  CACHE_FILTER: 'FiltersActions.CACHE_FILTER',
  CLEAR_FILTERS: 'FiltersActions.CLEAR_FILTERS',
  LOAD: 'FiltersActions.LOAD',
  LOADED: 'FiltersActions.LOADED',
  LOADED_STAGES: 'FiltersActions.LOADED_STAGES',
  LOADED_YEARS: 'FiltersActions.LOADED_YEARS',
  LOADED_EXTRA: 'FiltersActions.LOADED_EXTRA',
  HIDE_CATEGORY: 'FiltersActions.HIDE_CATEGORY',
  TOGGLE_SEGMENTS: 'FiltersActions.TOGGLE_SEGMENTS',
  TOGGLE_STAGES: 'FiltersActions.TOGGLE_STAGES',
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
  toggleStages(filter) {
    return (dispatch, getState) => {
      let filterToRemove = getState().FiltersReducer.filters.filter(
        item => (item !== filter) && (item.type === 'stages') && (item.isActive === true)
      );
      if (filterToRemove.length > 0) {
        filterToRemove = filterToRemove[0];
        dispatch({ type: FiltersActions.TOGGLE_STAGES, filterToRemove });
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
  getYears(filter) {
    return (dispatch, getState) => {
      let segment = getState().FiltersReducer.filters.filter(
        item => (item.type === 'segments') && (item.isActive === true)
      );
      if (filter.isActive === true){
        let queryString = `stage_id[]=${filter.id}&segment_id[]=${segment[0].id}`
        return Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: FiltersActions.LOADED_YEARS })
        );
      } else {
        return Api.get(dispatch, `/api/filtros`).then(response =>
          dispatch({ ...response, type: FiltersActions.LOADED_YEARS })
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
        item => isYearOrComponent(item.type) && item.isActive
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

      if (isYearOrComponent(filter.type)) {
        const filters = getState().FiltersReducer.filters.filter(
          item => isYearOrComponent(item.type) && item.isActive
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

      if (filter.type = "segments") {
        Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: FiltersActions.LOADED_STAGES })
        );
      }
      if (filter.type = "stages") {
        Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: FiltersActions.LOADED_YEARS })
        );
      }
      if (isYearOrComponent(filter.type)) {
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
