import Api from 'data/Api';
import BodyActions from 'actions/BodyActions';

const KnowledgeMatrixActions = {
  LOAD: 'KnowledgeMatrixActions.LOAD',
  LOADED: 'KnowledgeMatrixActions.LOADED',
  
  load() {
    return dispatch => {
      dispatch({ type: KnowledgeMatrixActions.LOAD });
      return Api.get('/api/saberes', dispatch)
        .then(response => dispatch({ ...response, type: KnowledgeMatrixActions.LOADED }))
        .catch(error => dispatch(BodyActions.showAlert('')));
    };
  },
};

export default KnowledgeMatrixActions;
