import getFiltersQueryString from './getFiltersQueryString';
import loadData from './loadData';
import BodyActions from './BodyActions';
import SequencesActions from './SequencesActions';
import { API_URL } from '../constants';

const FiltersActions = {
  LOAD: 'FiltersActions.LOAD',
  LOADED: 'FiltersActions.LOADED',
  HIDE_CATEGORY: 'FiltersActions.HIDE_CATEGORY',
  SHOW_CATEGORY: 'FiltersActions.SHOW_CATEGORY',
  CLEAR_FILTERS: 'FiltersActions.CLEAR_FILTERS',
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
    return { type: FiltersActions.CLEAR_FILTERS };
  },
  toggleFilter(filter) {
    return { type: FiltersActions.TOGGLE_FILTER, filter };
  },
  toggleFilterAndSearch(filter) {
    return (dispatch, getState) => {
      dispatch({ type: BodyActions.SHOW_LOADING })
      dispatch({ type: FiltersActions.TOGGLE_FILTER, filter })

      const filters = getState().FiltersReducer.filters.filter(item => item.isActive);
      const queryString = getFiltersQueryString(filters);
      const url = `/api/sequencias?${queryString}`;

      fetch(API_URL + url)
        .then(response => response.json())
        .then(data => {
          dispatch({ type: BodyActions.HIDE_LOADING });
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
