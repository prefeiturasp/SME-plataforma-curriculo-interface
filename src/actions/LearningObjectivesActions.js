import getFiltersQueryString from './getFiltersQueryString';
import { getData } from './dataUtils';

const LearningObjectivesActions = {
  LOAD: 'LearningObjectivesActions.LOAD',
  LOADED: 'LearningObjectivesActions.LOADED',
  HIDE_OBJECTIVES: 'LearningObjectivesActions.HIDE_OBJECTIVES',
  SHOW_OBJECTIVES: 'LearningObjectivesActions.SHOW_OBJECTIVES',
  SEARCH: 'LearningObjectivesActions.SEARCH',
  LOADED_RESULTS: 'LearningObjectivesActions.LOADED_RESULTS',
  HIDE_RESULTS: 'LearningObjectivesActions.HIDE_RESULTS',
  TOGGLE_FILTER: 'LearningObjectivesActions.TOGGLE_FILTER',
  
  load() {
    return getData('/api/filtros', LearningObjectivesActions.LOAD, LearningObjectivesActions.LOADED);
  },
  hideObjectives() {
    return { type: LearningObjectivesActions.HIDE_OBJECTIVES };
  },
  showObjectives() {
    return { type: LearningObjectivesActions.SHOW_OBJECTIVES };
  },
  search(filters) {
    const queryString = getFiltersQueryString(filters);
    return getData(`/api/filtros?${queryString}`, LearningObjectivesActions.SEARCH, LearningObjectivesActions.LOADED_RESULTS);
  },
  hideResults() {
    return { type: LearningObjectivesActions.HIDE_RESULTS };
  },
  toggleFilter(filter) {
    return { type: LearningObjectivesActions.TOGGLE_FILTER, filter };
  },
};

export default LearningObjectivesActions;
