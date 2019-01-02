import Api from 'data/Api';
import AlertActions from './AlertActions';
import SequencesActions from './SequencesActions';
import getFiltersQueryString from 'data/getFiltersQueryString';

function isYearOrComponent(s) {
  return s === 'years' || s === 'curricular_components';
}

const FiltersActions = {
  LOAD: 'FiltersActions.LOAD',
  LOADED: 'FiltersActions.LOADED',
  LOADED_EXTRA: 'FiltersActions.LOADED_EXTRA',
  HIDE_CATEGORY: 'FiltersActions.HIDE_CATEGORY',
  SHOW_CATEGORY: 'FiltersActions.SHOW_CATEGORY',
  CLEAR_FILTERS: 'FiltersActions.CLEAR_FILTERS',
  CACHE_FILTER: 'FiltersActions.CACHE_FILTER',
  TOGGLE_FILTER: 'FiltersActions.TOGGLE_FILTER',
  TOGGLE_PANEL: 'FiltersActions.TOGGLE_PANEL',
  SEARCH: 'FiltersActions.SEARCH',
  SET_QUERY: 'FiltersActions.SET_QUERY',

  load() {
    return Api.simpleGet(
      '/api/filtros',
      FiltersActions.LOAD,
      FiltersActions.LOADED
    );
  },
  hideCategory() {
    return { type: FiltersActions.HIDE_CATEGORY };
  },
  showCategory(category) {
    return (dispatch, getState) => {
      const filters = getState().FiltersReducer.filters.filter(
        item => item.isActive && isYearOrComponent(item.type)
      );

      if (
        (category.slug === 'axes' || category.slug === 'learning_objectives') &&
        filters.length <= 0
      ) {
        dispatch({
          type: AlertActions.OPEN,
          message: 'Selecione um ano ou componente curricular.',
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
          item => item.isActive && isYearOrComponent(item.type)
        );
        const queryString = getFiltersQueryString(filters);
        Api.simpleGet(
          `/api/filtros?${queryString}`,
          null,
          FiltersActions.LOADED_EXTRA
        );
      }
    };
  },
  toggleFilterAndSearch(filter) {
    return (dispatch, getState) => {
      dispatch({ type: FiltersActions.TOGGLE_FILTER, filter });
      dispatch({ type: SequencesActions.SEARCH });

      let filters = getState().FiltersReducer.filters.filter(
        item => item.isActive
      );
      let queryString = getFiltersQueryString(filters);
      Api.simpleGet(
        `/api/sequencias?${queryString}`,
        null,
        SequencesActions.LOADED
      );

      filters = getState().FiltersReducer.filters.filter(
        item => item.isActive && isYearOrComponent(item.type)
      );
      queryString = getFiltersQueryString(filters);
      Api.simpleGet(
        `/api/filtros?${queryString}`,
        null,
        FiltersActions.LOADED_EXTRA
      );
    };
  },
  togglePanel() {
    return { type: FiltersActions.TOGGLE_PANEL };
  },
  search() {
    return { type: FiltersActions.SEARCH };
  },
  setQuery(query) {
    return { type: FiltersActions.SET_QUERY, query };
  },
};

export default FiltersActions;
