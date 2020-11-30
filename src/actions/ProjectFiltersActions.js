import Api from 'data/Api';
import AlertActions from './AlertActions';
import getFiltersQueryString from 'data/getFiltersQueryString';

function isYearOrComponent(s) {
  return s === 'years' || s === 'curricular_components';
}

const ProjectFiltersActions = {
  CACHE_FILTER: 'ProjectFiltersActions.CACHE_FILTER',
  CLEAR_FILTERS: 'ProjectFiltersActions.CLEAR_FILTERS',
  LOAD: 'ProjectFiltersActions.LOAD',
  LOADED: 'ProjectFiltersActions.LOADED',
  LOADED_STAGES: 'ProjectFiltersActions.LOADED_STAGES',
  LOADED_YEARS: 'ProjectFiltersActions.LOADED_YEARS',
  LOADED_EXTRA: 'ProjectFiltersActions.LOADED_EXTRA',
  HIDE_CATEGORY: 'ProjectFiltersActions.HIDE_CATEGORY',
  TOGGLE_SEGMENTS: 'ProjectFiltersActions.TOGGLE_SEGMENTS',
  TOGGLE_STAGES: 'ProjectFiltersActions.TOGGLE_STAGES',
  TOGGLE_FILTER: 'ProjectFiltersActions.TOGGLE_FILTER',
  TOGGLE_PANEL: 'ProjectFiltersActions.TOGGLE_PANEL',
  SEARCH: 'ProjectFiltersActions.SEARCH',
  SET_ORDER: 'ProjectFiltersActions.SET_ORDER',
  SET_QUERY: 'ProjectFiltersActions.SET_QUERY',
  SHOW_CATEGORY: 'ProjectFiltersActions.SHOW_CATEGORY',

  load() {
    return Api.simpleGet(
      '/api/filtros',
      ProjectFiltersActions.LOAD,
      ProjectFiltersActions.LOADED
    );
  },
  toggleSegments(filter) {
    return (dispatch, getState) => {
      let filterToRemove = getState().ProjectFiltersReducer.filters.filter(
        item => (item !== filter) && (item.type === 'segments') && (item.isActive === true)
      );
      if (filterToRemove.length > 0) {
        filterToRemove = filterToRemove[0];
        dispatch({ type: ProjectFiltersActions.TOGGLE_SEGMENTS, filterToRemove });
      }
      dispatch({ type: ProjectFiltersActions.TOGGLE_FILTER, filter });
    };
  },
  toggleStages(filter) {
    return (dispatch, getState) => {
      let filterToRemove = getState().ProjectFiltersReducer.filters.filter(
        item => (item !== filter) && (item.type === 'stages') && (item.isActive === true)
      );
      if (filterToRemove.length > 0) {
        filterToRemove = filterToRemove[0];
        dispatch({ type: ProjectFiltersActions.TOGGLE_STAGES, filterToRemove });
      }
      dispatch({ type: ProjectFiltersActions.TOGGLE_FILTER, filter });
    };
  },
  getStages(filter) {
    return (dispatch, getState) => {
      if (filter.isActive === true){
        let queryString = `segment_id[]=${filter.id}`
        return Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: ProjectFiltersActions.LOADED_STAGES })
        );
      } else {
        return Api.get(dispatch, `/api/filtros`).then(response =>
          dispatch({ ...response, type: ProjectFiltersActions.LOADED_STAGES })
        );
      }
    };
  },
  getYears(filter) {
    return (dispatch, getState) => {
      let segment = getState().ProjectFiltersReducer.filters.filter(
        item => (item.type === 'segments') && (item.isActive === true)
      );
      if (filter.isActive === true){
        let queryString = `stage_id[]=${filter.id}&segment_id[]=${segment[0].id}`
        return Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: ProjectFiltersActions.LOADED_YEARS })
        );
      } else {
        return Api.get(dispatch, `/api/filtros`).then(response =>
          dispatch({ ...response, type: ProjectFiltersActions.LOADED_YEARS })
        );
      }
    };
  },
  hideCategory() {
    return { type: ProjectFiltersActions.HIDE_CATEGORY };
  },
  showCategory(category) {
    return (dispatch, getState) => {
      const filters = getState().ProjectFiltersReducer.filters.filter(
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
        dispatch({ type: ProjectFiltersActions.SHOW_CATEGORY, category });
      }
    };
  },
  clearFilters() {
    return { type: ProjectFiltersActions.CLEAR_FILTERS };
  },
  cacheFilter(filter) {
    return { type: ProjectFiltersActions.CACHE_FILTER, filter };
  },
  toggleFilter(filter) {
    return (dispatch, getState) => {
      dispatch({ type: ProjectFiltersActions.TOGGLE_FILTER, filter });

      if (isYearOrComponent(filter.type)) {
        const filters = getState().ProjectFiltersReducer.filters.filter(
          item => isYearOrComponent(item.type) && item.isActive
        );
        const queryString = getFiltersQueryString(filters);
        return Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: ProjectFiltersActions.LOADED_EXTRA })
        );
      }
    };
  },
  toggleFilterAndSearch(filter) {
    return (dispatch, getState) => {
      dispatch({ type: ProjectFiltersActions.TOGGLE_FILTER, filter });
      const filters = getState().ProjectFiltersReducer.filters.filter(
        item => item.isActive
      );

      const queryString = getFiltersQueryString(filters);

      if (filter.type = "segments") {
        Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: ProjectFiltersActions.LOADED_STAGES })
        );
      }
      if (filter.type = "stages") {
        Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: ProjectFiltersActions.LOADED_YEARS })
        );
      }
      if (isYearOrComponent(filter.type)) {
        Api.get(dispatch, `/api/filtros?${queryString}`).then(response =>
          dispatch({ ...response, type: ProjectFiltersActions.LOADED_EXTRA })
        );
      }
    };
  },
  togglePanel() {
    return { type: ProjectFiltersActions.TOGGLE_PANEL };
  },
  search() {
    return { type: ProjectFiltersActions.SEARCH };
  },
  setOrder(order) {
    return { type: ProjectFiltersActions.SET_ORDER, order };
  },
  setQuery(query) {
    return { type: ProjectFiltersActions.SET_QUERY, query };
  },
};

export default ProjectFiltersActions;
