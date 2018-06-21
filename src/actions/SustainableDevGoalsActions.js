import { API_URL } from '../constants';

function onLoad() {
  return { type: SustainableDevGoalsActions.LOAD };
}

function onLoaded(data) {
  return { data, type: SustainableDevGoalsActions.LOADED };
}

function onLoadItem() {
  return { type: SustainableDevGoalsActions.LOAD_ITEM };
}

function onLoadedItem(data) {
  return { data, type: SustainableDevGoalsActions.LOADED_ITEM };
}

const SustainableDevGoalsActions = {
  LOAD: 'SDGA_LOAD',
  LOADED: 'SDGA_LOADED',
  LOAD_ITEM: 'SDGA_LOAD_ITEM',
  LOADED_ITEM: 'SDGA_LOADED_ITEM',
  
  load() {
    return dispatch => {
      dispatch(onLoad());
      fetch(`${API_URL}/api/ods`)
        .then(response => response.json())
        .then(data => {
          dispatch(onLoaded(data));
        });
    };
  },
  loadItem(id) {
    return dispatch => {
      dispatch(onLoadItem());
      fetch(`${API_URL}/api/ods/${id}`)
        .then(response => response.json())
        .then(data => {
          dispatch(onLoadedItem(data));
        });
    };
  },
};

export default SustainableDevGoalsActions;
