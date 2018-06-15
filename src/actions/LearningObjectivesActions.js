const LearningObjectivesActions = {
  CLOSED_RESULTS: 'LOA_CLOSED_RESULTS',
  TOGGLED_FILTER: 'LOA_TOGGLED_FILTER',
  SEARCHED: 'LOA_SEARCHED',
  
  closeResults() {
    return { type: LearningObjectivesActions.CLOSED_RESULTS };
  },
  toggleFilter(filter) {
    return { type: LearningObjectivesActions.TOGGLED_FILTER, filter };
  },
  search() {
    return { type: LearningObjectivesActions.SEARCHED };
  },
};

export default LearningObjectivesActions;
