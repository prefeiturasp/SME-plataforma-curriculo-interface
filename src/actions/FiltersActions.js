const FiltersActions = {
  TOGGLED_FILTER: 'TOGGLED_FILTER',
  TOGGLED_PANEL: 'TOGGLED_PANEL',
  SEARCHED: 'SEARCHED',
  
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
