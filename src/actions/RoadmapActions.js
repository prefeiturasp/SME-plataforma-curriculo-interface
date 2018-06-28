import loadData from './loadData';

const RoadmapActions = {
  LOAD: 'RA_LOAD',
  LOADED: 'RA_LOADED',
  
  load() {
    return loadData('/api/roteiros', RoadmapActions.LOAD, RoadmapActions.LOADED);
  },
};

export default RoadmapActions;
