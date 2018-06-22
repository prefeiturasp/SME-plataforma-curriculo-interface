import { API_URL } from '../constants';

function onLoad() {
  return { type: ActivityActions.LOAD };
}

function onLoaded(data) {
  return { data, type: ActivityActions.LOADED };
}

const ActivityActions = {
  LOAD: 'AA_LOAD',
  LOADED: 'AA_LOADED',
  
  load(slug1, slug2) {
    return dispatch => {
      dispatch(onLoad());
      fetch(`${API_URL}/api/sequencias/${slug1}/atividades/${slug2}`)
        .then(response => response.json())
        .then(data => {
          dispatch(onLoaded(data));
        });
    };
  },
};

export default ActivityActions;
