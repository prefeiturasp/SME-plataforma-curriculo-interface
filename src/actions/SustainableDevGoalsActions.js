import Api from 'data/Api';

const SustainableDevGoalsActions = {
  LOAD: 'SustainableDevGoalsActions.LOAD',
  LOADED: 'SustainableDevGoalsActions.LOADED',
  LOADED_ITEM: 'SustainableDevGoalsActions.LOADED_ITEM',

  load() {
    return Api.simpleGet(
      '/api/ods',
      SustainableDevGoalsActions.LOAD,
      SustainableDevGoalsActions.LOADED
    );
  },
  loadItem(id) {
    return Api.simpleGet(
      `/api/ods/${id}`,
      SustainableDevGoalsActions.LOAD,
      SustainableDevGoalsActions.LOADED_ITEM
    );
  },
};

export default SustainableDevGoalsActions;
