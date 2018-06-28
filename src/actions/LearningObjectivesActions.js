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
  LOAD: 'LOA_LOAD',
  LOADED: 'LOA_LOADED',
  HIDE_OBJECTIVES: 'LOA_HIDE_OBJECTIVES',
  SHOW_OBJECTIVES: 'LOA_SHOW_OBJECTIVES',
  HIDE_RESULTS: 'LOA_CLOSE_RESULTS',
  SEARCH: 'LOA_SEARCH',
  LOADED_SEARCH: 'LOA_LOADED_SEARCH',
  TOGGLE_FILTER: 'LOA_TOGGLE_FILTER',
  
  load() {
    return loadData('/api/filtros', LearningObjectivesActions.LOAD, LearningObjectivesActions.LOADED);
  },
  hideObjectives() {
    return { type: LearningObjectivesActions.HIDE_OBJECTIVES };
  },
  showObjectives() {
    return { type: LearningObjectivesActions.SHOW_OBJECTIVES };
  },
  hideResults() {
    return { type: LearningObjectivesActions.HIDE_RESULTS };
  },
  search(filters) {
    const params = filters.map(filter => {
      const name = getParameterName(filter.type);
      const value = getParameterValue(filter);
      return `${name}[]=${value}`;
    });
    const paramsString = params.join('&');

    return loadData(`/api/filtros?${paramsString}`, LearningObjectivesActions.SEARCH, LearningObjectivesActions.LOADED_SEARCH);
  },
  toggleFilter(filter) {
    return { type: LearningObjectivesActions.TOGGLE_FILTER, filter };
  },
};

export default LearningObjectivesActions;
