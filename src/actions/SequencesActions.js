const SequencesActions = {
  CLEAR_SEARCH: 'SA_CLEAR_SEARCH',
  SEARCH: 'SA_SEARCH',
  LOAD: 'SA_LOAD',
  LOAD_MORE: 'SA_LOADE_MORE',
  TOGGLE_PREVIEW: 'SA_TOGGLE_PREVIEW',
  
  clearSearch() {
    return { type: SequencesActions.CLEAR_SEARCH };
  },
  search() {
    return { type: SequencesActions.SEARCH };
  },
  load() {
    return { type: SequencesActions.LOAD };
  },
  loadMore() {
    return { type: SequencesActions.LOAD_MORE };
  },
  togglePreview(id) {
    return { type: SequencesActions.TOGGLE_PREVIEW, id };
  },
};

export default SequencesActions;
