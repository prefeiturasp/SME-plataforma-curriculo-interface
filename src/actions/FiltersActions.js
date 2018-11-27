import getFiltersQueryString from './getFiltersQueryString';
import loadData from './loadData';
import BodyActions from './BodyActions';
import SequencesActions from './SequencesActions';
import { API_URL } from '../constants';

function fetchData(dispatch, url, filters, action) {
  const queryString = getFiltersQueryString(filters);
      
  fetch(`${API_URL}${url}?${queryString}`)
    .then(response => response.json())
    .then(data => {
      dispatch({ data, type: action });
    });
}

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
  
  load() {
    return loadData('/api/filtros', FiltersActions.LOAD, FiltersActions.LOADED);
  },
  hideCategory() {
    return { type: FiltersActions.HIDE_CATEGORY };
  },
  showCategory(category) {
    return (dispatch, getState) => {
      const filters = getState().FiltersReducer.filters.filter(item => item.isActive && isYearOrComponent(item.type));

      if (
        (
          category.slug === 'axes' ||
          category.slug === 'learning_objectives'
        ) &&
        filters.length <= 0
      ) {
        dispatch({ type: BodyActions.SHOW_ALERT, message: 'Selecione um ano ou componente curricular.'});
      } else {
        dispatch({ type: FiltersActions.SHOW_CATEGORY, category });
      }
    }
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
        const filters = getState().FiltersReducer.filters.filter(item => item.isActive && isYearOrComponent(item.type));
        fetchData(dispatch, '/api/filtros', filters, FiltersActions.LOADED_EXTRA);
      }
    }
  },
  toggleFilterAndSearch(filter) {
    return (dispatch, getState) => {
      dispatch({ type: FiltersActions.TOGGLE_FILTER, filter })
      dispatch({ type: SequencesActions.SEARCH })
      
      let filters = getState().FiltersReducer.filters.filter(item => item.isActive);
      fetchData(dispatch, '/api/sequencias', filters, SequencesActions.LOADED);

      filters = getState().FiltersReducer.filters.filter(item => item.isActive && isYearOrComponent(item.type));
      fetchData(dispatch, '/api/filtros', filters, FiltersActions.LOADED_EXTRA);
    }
  },
  togglePanel() {
    return { type: FiltersActions.TOGGLE_PANEL };
  },
  search() {
    return { type: FiltersActions.SEARCH };
  },
};

export default FiltersActions;
