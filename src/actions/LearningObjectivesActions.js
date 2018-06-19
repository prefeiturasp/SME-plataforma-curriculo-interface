const LearningObjectivesActions = {
  HIDE_OBJECTIVES: 'LOA_HIDE_OBJECTIVES',
  SHOW_OBJECTIVES: 'LOA_SHOW_OBJECTIVES',
  HIDE_RESULTS: 'LOA_CLOSE_RESULTS',
  SEARCH: 'LOA_SEARCH',
  TOGGLED_FILTER: 'LOA_TOGGLE_FILTER',
  
  hideObjectives() {
    return { type: LearningObjectivesActions.HIDE_OBJECTIVES };
  },
  showObjectives() {
    return { type: LearningObjectivesActions.SHOW_OBJECTIVES };
  },
  hideResults() {
    return { type: LearningObjectivesActions.HIDE_RESULTS };
  },
  search() {
    return { type: LearningObjectivesActions.SEARCH };
  },
  toggleFilter(filter) {
    return { type: LearningObjectivesActions.TOGGLE_FILTER, filter };
  },
};

export default LearningObjectivesActions;
