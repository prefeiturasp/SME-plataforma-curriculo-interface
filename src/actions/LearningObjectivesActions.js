import loadData from './loadData';

function getParameterName(type) {
  switch (type) {
    case 'years':
      return 'years';

    case 'curricular_components':
      return 'curricular_components_slugs';
  }
}

function getParameterValue(filter) {
  switch (filter.type) {
    case 'curricular_components':
      return filter.slug;

    default:
      return filter.id;
  }
}

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
    return loadData('/api/filtros', LearningObjectivesActions.LOAD, LearningObjectivesActions.LOADED);
  },
  hideObjectives() {
    return { type: LearningObjectivesActions.HIDE_OBJECTIVES };
  },
  showObjectives() {
    return { type: LearningObjectivesActions.SHOW_OBJECTIVES };
  },
  search(filters) {
    const params = filters.map(filter => {
      const name = getParameterName(filter.type);
      const value = getParameterValue(filter);
      return `${name}[]=${value}`;
    });
    const paramsString = params.join('&');

    return loadData(`/api/filtros?${paramsString}`, LearningObjectivesActions.SEARCH, LearningObjectivesActions.LOADED_RESULTS);
  },
  hideResults() {
    return { type: LearningObjectivesActions.HIDE_RESULTS };
  },
  toggleFilter(filter) {
    return { type: LearningObjectivesActions.TOGGLE_FILTER, filter };
  },
};

export default LearningObjectivesActions;
