import loadData from './loadData';

const HomeActions = {
  LOAD: 'HomeActions.LOAD',
  LOADED: 'HomeActions.LOADED',
  
  load() {
    return loadData('/api/sequencias', HomeActions.LOAD, HomeActions.LOADED);
  },
};

export default HomeActions;
