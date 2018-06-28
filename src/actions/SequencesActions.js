import { API_URL } from '../constants';

function onLoad() {
  return { type: SequencesActions.LOAD };
}

function onLoaded(data) {
  return { data, type: SequencesActions.LOADED };
}

function onLoadItem() {
  return { type: SequencesActions.LOAD_ITEM };
}

function onLoadedItem(data) {
  return { data, type: SequencesActions.LOADED_ITEM };
}

function onSearch() {
  return { type: SequencesActions.LOAD };
}

function onSearched(data) {
  return { data, type: SequencesActions.LOADED };
}

function getParameterName(type) {
  switch (type) {
    case 'years':
      return 'years';

    case 'curricular_components':
      return 'curricular_components_friendly_slugs';

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

    return dispatch => {
      dispatch(onSearch());
      fetch(`${API_URL}/api/sequencias?${paramsString}`)
        .then(response => response.json())
        .then(data => {
          dispatch(onSearched(data));
        });
    };
  },
  load() {
    return dispatch => {
      dispatch(onLoad());
      fetch(`${API_URL}/api/sequencias`)
        .then(response => response.json())
        .then(data => {
          dispatch(onLoaded(data));
        });
    };
  },
  loadItem(slug) {
    return dispatch => {
      dispatch(onLoadItem());
      fetch(`${API_URL}/api/sequencias/${slug}`)
        .then(response => response.json())
        .then(data => {
          dispatch(onLoadedItem(data));
        });
    };
  },
  togglePreview(id) {
    return { type: SequencesActions.TOGGLE_PREVIEW, id };
  },
};

export default SequencesActions;
