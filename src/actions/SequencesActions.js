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
  search() {
    return { type: SequencesActions.SEARCH };
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
