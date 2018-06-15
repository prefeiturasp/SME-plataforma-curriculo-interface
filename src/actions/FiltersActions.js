const FiltersActions = {
  SHOWED_CATEGORY: 'FA_SHOWED_CATEGORY',
  CLOSED_CATEGORY: 'FA_CLOSED_CATEGORY',
  TOGGLED_FILTER: 'FA_TOGGLED_FILTER',
  TOGGLED_PANEL: 'FA_TOGGLED_PANEL',
  CLEARED_FILTERS: 'FA_CLEARED_FILTERS',
  SEARCHED: 'FA_SEARCHED',
  DISMISSED_SEARCH_WARNING: 'FA_DISMISSED_SEARCH_WARNING',
  
  showCategory(category) {
    return { type: FiltersActions.SHOWED_CATEGORY, category };
  },
  closeCategory() {
    return { type: FiltersActions.CLOSED_CATEGORY };
  },
  toggleFilter(filter) {
    return { type: FiltersActions.TOGGLED_FILTER, filter };
  },
  togglePanel() {
    return { type: FiltersActions.TOGGLED_PANEL };
  },
  clearFilters() {
    return { type: FiltersActions.CLEARED_FILTERS };
  },
  search() {
    return { type: FiltersActions.SEARCHED };
  },
  dismissSearchWarning() {
    return { type: FiltersActions.DISMISSED_SEARCH_WARNING };
  },
};

export default FiltersActions;
