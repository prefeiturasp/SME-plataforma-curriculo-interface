import getFiltersQueryString from './getFiltersQueryString';
import loadData from './loadData';
import SequencesActions from './SequencesActions';
import { API_URL } from '../constants';

const FiltersActions = {
  LOAD: 'FiltersActions.LOAD',
  LOADED: 'FiltersActions.LOADED',
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
    return { type: FiltersActions.SHOW_CATEGORY, category };
  },
  clearFilters() {
    return (dispatch) => {
      dispatch({ type: FiltersActions.CLEAR_FILTERS });
      dispatch({ type: SequencesActions.SEARCH })
      const url = '/api/sequencias';

      fetch(API_URL + url)
        .then(response => response.json())
        .then(data => {
          dispatch({ data, type: SequencesActions.LOADED });
        });
    }
  },
  cacheFilter(filter) {
    return { type: FiltersActions.CACHE_FILTER, filter };
  },
  toggleFilter(filter) {
    return { type: FiltersActions.TOGGLE_FILTER, filter };
  },
  toggleFilterAndSearch(filter) {
    return (dispatch, getState) => {
      dispatch({ type: FiltersActions.TOGGLE_FILTER, filter })
      dispatch({ type: SequencesActions.SEARCH })
      
      const filters = getState().FiltersReducer.filters.filter(item => item.isActive);
      const queryString = getFiltersQueryString(filters);
      const url = `/api/sequencias?${queryString}`;

      fetch(API_URL + url)
        .then(response => response.json())
        .then(data => {
          dispatch({ data, type: SequencesActions.LOADED });
        });
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
