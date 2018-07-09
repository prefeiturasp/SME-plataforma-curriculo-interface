import loadData from './loadData';

const SustainableDevGoalsActions = {
  LOAD: 'SustainableDevGoalsActions.LOAD',
  LOADED: 'SustainableDevGoalsActions.LOADED',
  LOADED_ITEM: 'SustainableDevGoalsActions.LOADED_ITEM',
  
  load() {
    return loadData('/api/ods', SustainableDevGoalsActions.LOAD, SustainableDevGoalsActions.LOADED);
  },
  loadItem(id) {
    return loadData(`/api/ods/${id}`, SustainableDevGoalsActions.LOAD, SustainableDevGoalsActions.LOADED_ITEM);
  },
};

export default SustainableDevGoalsActions;
