import loadData from './loadData';

const KnowledgeMatrixActions = {
  LOAD: 'KnowledgeMatrixActions.LOAD',
  LOADED: 'KnowledgeMatrixActions.LOADED',
  
  load() {
    return loadData('/api/saberes', KnowledgeMatrixActions.LOAD, KnowledgeMatrixActions.LOADED);
  },
};

export default KnowledgeMatrixActions;
