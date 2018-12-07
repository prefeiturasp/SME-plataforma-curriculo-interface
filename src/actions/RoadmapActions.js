import { getData } from './dataUtils';

const RoadmapActions = {
  LOAD: 'RoadmapActions.LOAD',
  LOADED: 'RoadmapActions.LOADED',
  
  load() {
    return getData('/api/roteiros', RoadmapActions.LOAD, RoadmapActions.LOADED);
  },
};

export default RoadmapActions;
