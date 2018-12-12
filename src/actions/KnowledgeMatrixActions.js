import Api from 'data/Api';

const KnowledgeMatrixActions = {
  LOAD: 'KnowledgeMatrixActions.LOAD',
  LOADED: 'KnowledgeMatrixActions.LOADED',
  
  load() {
    return Api.simpleGet('/api/saberes', KnowledgeMatrixActions.LOAD, KnowledgeMatrixActions.LOADED);
  },
};

export default KnowledgeMatrixActions;
