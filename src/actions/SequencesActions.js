const SequencesActions = {
  CLEARED_SEARCH: 'CLEARED_SEARCH',
  SEARCHED: 'SEARCHED',
  LOADED: 'LOADED',
  LOADED_MORE: 'LOADED_MORE',
  TOGGLED_PREVIEW: 'TOGGLED_PREVIEW',
  
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
