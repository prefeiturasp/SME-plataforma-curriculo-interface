import { getData } from './dataUtils';

const SustainableDevGoalsActions = {
  LOAD: 'SustainableDevGoalsActions.LOAD',
  LOADED: 'SustainableDevGoalsActions.LOADED',
  LOADED_ITEM: 'SustainableDevGoalsActions.LOADED_ITEM',
  
  load() {
    return getData('/api/ods', SustainableDevGoalsActions.LOAD, SustainableDevGoalsActions.LOADED);
  },
  loadItem(id) {
    return getData(`/api/ods/${id}`, SustainableDevGoalsActions.LOAD, SustainableDevGoalsActions.LOADED_ITEM);
  },
};

export default SustainableDevGoalsActions;
