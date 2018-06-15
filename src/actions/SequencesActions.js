const SequencesActions = {
  CLEARED_SEARCH: 'SA_CLEARED_SEARCH',
  SEARCHED: 'SA_SEARCHED',
  LOADED: 'SA_LOADED',
  LOADED_MORE: 'SA_LOADED_MORE',
  TOGGLED_PREVIEW: 'SA_TOGGLED_PREVIEW',
  
  clearSearch() {
    return { type: SequencesActions.CLEARED_SEARCH };
  },
  search() {
    return { type: SequencesActions.SEARCHED };
  },
  load() {
    return { type: SequencesActions.LOADED };
  },
  loadMore() {
    return { type: SequencesActions.LOADED_MORE };
  },
  togglePreview(id) {
    return { type: SequencesActions.TOGGLED_PREVIEW, id };
  },
};

export default SequencesActions;
