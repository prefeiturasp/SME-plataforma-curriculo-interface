import { getData } from './dataUtils';

const KnowledgeMatrixActions = {
  LOAD: 'KnowledgeMatrixActions.LOAD',
  LOADED: 'KnowledgeMatrixActions.LOADED',
  
  load() {
    return getData('/api/saberes', KnowledgeMatrixActions.LOAD, KnowledgeMatrixActions.LOADED);
  },
};

export default KnowledgeMatrixActions;
