import loadData from './loadData';

const HomeActions = {
  LOAD: 'HA_LOAD',
  LOADED: 'HA_LOADED',
  
  load() {
    return loadData('/api/sequencias', HomeActions.LOAD, HomeActions.LOADED);
  },
};

export default HomeActions;
