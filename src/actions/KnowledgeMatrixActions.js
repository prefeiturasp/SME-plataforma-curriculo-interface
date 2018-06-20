import { API_URL } from '../constants';

function onLoad() {
  return { type: KnowledgeMatrixActions.LOAD };
}

function onLoaded(data) {
  return { data, type: KnowledgeMatrixActions.LOADED };
}

const KnowledgeMatrixActions = {
  LOAD: 'KA_LOAD',
  LOADED: 'KA_LOADED',
  
  load() {
    return dispatch => {
      dispatch(onLoad());
      fetch(`${API_URL}saberes`)
        .then(response => response.json())
        .then(data => {
          dispatch(onLoaded(data));
        });
    };
  },
};

export default KnowledgeMatrixActions;
