import { API_URL } from '../constants';

function onLoad() {
  return { type: HomeActions.LOAD };
}

function onLoaded(data) {
  return { data, type: HomeActions.LOADED };
}

const HomeActions = {
  LOAD: 'HA_LOAD',
  LOADED: 'HA_LOADED',
  
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
};

export default HomeActions;
