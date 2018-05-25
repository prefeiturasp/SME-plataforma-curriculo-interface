const SequencesActions = {
  LOADED: 'LOADED',
  LOADED_MORE: 'LOADED_MORE',
  
  load() {
    return { type: SequencesActions.LOADED };
  },
  loadMore() {
    return { type: SequencesActions.LOADED_MORE };
  },
};

export default SequencesActions;
