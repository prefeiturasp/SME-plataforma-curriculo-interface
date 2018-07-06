import loadData from './loadData';

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
  togglePanel() {
    return { type: FiltersActions.TOGGLE_PANEL };
  },
  search() {
    return { type: FiltersActions.SEARCH };
  },
};

export default FiltersActions;
