import { API_URL } from '../constants';

function onLoad() {
  return { type: RoadmapActions.LOAD };
}

function onLoaded(data) {
  return { data, type: RoadmapActions.LOADED };
}

const RoadmapActions = {
  LOAD: 'RA_LOAD',
  LOADED: 'RA_LOADED',
  
  load() {
    return dispatch => {
      dispatch(onLoad());
      fetch(`${API_URL}roteiros`)
        .then(response => response.json())
        .then(data => {
          dispatch(onLoaded(data));
        });
    };
  },
};

export default RoadmapActions;
