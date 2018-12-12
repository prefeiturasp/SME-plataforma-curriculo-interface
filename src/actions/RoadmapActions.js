import Api from 'data/Api';

const RoadmapActions = {
  LOAD: 'RoadmapActions.LOAD',
  LOADED: 'RoadmapActions.LOADED',
  
  load() {
    return Api.simpleGet('/api/roteiros', RoadmapActions.LOAD, RoadmapActions.LOADED);
  },
};

export default RoadmapActions;
