import { API_URL } from '../constants';

function onLoad() {
  return { type: FiltersActions.LOAD };
}

function onLoaded(data) {
  return { data, type: FiltersActions.LOADED };
}

const FiltersActions = {
  LOAD: 'FA_LOAD',
  LOADED: 'FA_LOADED',
  HIDE_CATEGORY: 'FA_HIDE_CATEGORY',
  SHOW_CATEGORY: 'FA_SHOW_CATEGORY',
  TOGGLE_FILTER: 'FA_TOGGLE_FILTER',
  TOGGLE_PANEL: 'FA_TOGGLE_PANEL',
  CLEAR_FILTERS: 'FA_CLEAR_FILTERS',
  SEARCH: 'FA_SEARCH',
  DISMISS_SEARCH_WARNING: 'FA_DISMISS_SEARCH_WARNING',
  
  load() {
    return dispatch => {
      dispatch(onLoad());
      fetch(`${API_URL}/api/filtros`)
        .then(response => response.json())
        .then(data => {
          dispatch(onLoaded(data));
        });
    };
  },
  hideCategory() {
    return { type: FiltersActions.HIDE_CATEGORY };
  },
  showCategory(category) {
    return { type: FiltersActions.SHOW_CATEGORY, category };
  },
  toggleFilter(filter) {
    return { type: FiltersActions.TOGGLE_FILTER, filter };
  },
  togglePanel() {
    return { type: FiltersActions.TOGGLE_PANEL };
  },
  clearFilters() {
    return { type: FiltersActions.CLEAR_FILTERS };
  },
  search() {
    return { type: FiltersActions.SEARCH };
  },
  dismissSearchWarning() {
    return { type: FiltersActions.DISMISS_SEARCH_WARNING };
  },
};

export default FiltersActions;
