const FiltersActions = {
  SHOWED_CATEGORY: 'SHOWED_CATEGORY',
  CLOSED_CATEGORY: 'CLOSED_CATEGORY',
  TOGGLED_FILTER: 'TOGGLED_FILTER',
  TOGGLED_PANEL: 'TOGGLED_PANEL',
  SEARCHED: 'SEARCHED',
  
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
  search() {
    return { type: FiltersActions.SEARCHED };
  },
};

export default FiltersActions;
