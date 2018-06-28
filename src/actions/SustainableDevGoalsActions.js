import loadData from './loadData';

const SustainableDevGoalsActions = {
  LOAD: 'SDGA_LOAD',
  LOADED: 'SDGA_LOADED',
  LOAD_ITEM: 'SDGA_LOAD_ITEM',
  LOADED_ITEM: 'SDGA_LOADED_ITEM',
  
  load() {
    return loadData('/api/ods', SustainableDevGoalsActions.LOAD, SustainableDevGoalsActions.LOADED);
  },
  loadItem(id) {
    return loadData(`/api/ods/${id}`, SustainableDevGoalsActions.LOAD_ITEM, SustainableDevGoalsActions.LOADED_ITEM);
  },
};

export default SustainableDevGoalsActions;
