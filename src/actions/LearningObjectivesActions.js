import Api from 'data/Api';
import BodyActions from 'actions/BodyActions';
import getFiltersQueryString from 'data/getFiltersQueryString';

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
    return dispatch => {
      dispatch({ type: LearningObjectivesActions.LOAD });
      return Api.get('/api/filtros', dispatch)
        .then(response => dispatch({ ...response, type: LearningObjectivesActions.LOADED }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
  hideObjectives() {
    return { type: LearningObjectivesActions.HIDE_OBJECTIVES };
  },
  showObjectives() {
    return { type: LearningObjectivesActions.SHOW_OBJECTIVES };
  },
  search(filters) {
    const queryString = getFiltersQueryString(filters);
    return dispatch => {
      dispatch({ type: LearningObjectivesActions.LOAD });
      return Api.get(`/api/filtros?${queryString}`, dispatch)
        .then(response => dispatch({ ...response, type: LearningObjectivesActions.LOADED_RESULTS }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
  hideResults() {
    return { type: LearningObjectivesActions.HIDE_RESULTS };
  },
  toggleFilter(filter) {
    return { type: LearningObjectivesActions.TOGGLE_FILTER, filter };
  },
};

export default LearningObjectivesActions;
