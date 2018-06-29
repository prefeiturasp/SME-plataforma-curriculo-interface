import loadData from './loadData';

const RoadmapActions = {
  LOAD: 'RoadmapActions.LOAD',
  LOADED: 'RoadmapActions.LOADED',
  
  load() {
    return loadData('/api/roteiros', RoadmapActions.LOAD, RoadmapActions.LOADED);
  },
};

export default RoadmapActions;
