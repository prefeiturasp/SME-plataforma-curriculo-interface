import loadData from './loadData';

function getParameterName(type) {
  switch (type) {
    case 'years':
      return 'years';

    case 'curricular_components':
      return 'curricular_components_slugs';

    case 'sustainable_development_goals':
      return 'sustainable_development_goal_ids';

    case 'knowledge_matrices':
      return 'knowledge_matrix_ids';

    case 'learning_objectives':
      return 'learning_objective_ids';

    case 'axes':
      return 'axis_ids';

    case 'activity_types':
      return 'activity_type_ids';
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

const SequencesActions = {
  CLEAR_SEARCH: 'SA_CLEAR_SEARCH',
  SEARCH: 'SA_SEARCH',
  LOAD: 'SA_LOAD',
  LOADED: 'SA_LOADED',
  LOAD_ITEM: 'SA_LOAD_ITEM',
  LOADED_ITEM: 'SA_LOADED_ITEM',
  TOGGLE_PREVIEW: 'SA_TOGGLE_PREVIEW',
  
  clearSearch() {
    return { type: SequencesActions.CLEAR_SEARCH };
  },
  search(filters) {
    const params = filters.map(filter => {
      const name = getParameterName(filter.type);
      const value = getParameterValue(filter);
      return `${name}[]=${value}`;
    });
    const paramsString = params.join('&');
    
    return loadData(`/api/sequencias?${paramsString}`, SequencesActions.SEARCH, SequencesActions.LOADED);
  },
  load() {
    return loadData('/api/sequencias', SequencesActions.LOAD, SequencesActions.LOADED);
  },
  loadItem(slug) {
    return loadData(`/api/sequencias?${slug}`, SequencesActions.LOAD_ITEM, SequencesActions.LOADED_ITEM);
  },
  togglePreview(id) {
    return { type: SequencesActions.TOGGLE_PREVIEW, id };
  },
};

export default SequencesActions;
