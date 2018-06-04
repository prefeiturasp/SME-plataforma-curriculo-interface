const SequencesActions = {
  LOADED: 'LOADED',
  LOADED_MORE: 'LOADED_MORE',
  TOGGLED_PREVIEW: 'TOGGLED_PREVIEW',
  
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
