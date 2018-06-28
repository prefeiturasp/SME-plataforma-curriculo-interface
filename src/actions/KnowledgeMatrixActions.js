import loadData from './loadData';

const KnowledgeMatrixActions = {
  LOAD: 'KA_LOAD',
  LOADED: 'KA_LOADED',
  
  load() {
    return loadData('/api/saberes', KnowledgeMatrixActions.LOAD, KnowledgeMatrixActions.LOADED);
  },
};

export default KnowledgeMatrixActions;
