import loadData from './loadData';

const ActivityActions = {
  LOAD: 'ActivityActions.LOAD',
  LOADED: 'ActivityActions.LOADED',
  
  load(slug1, slug2) {
    return loadData(`/api/sequencias/${slug1}/atividades/${slug2}`, ActivityActions.LOAD, ActivityActions.LOADED);
  },
};

export default ActivityActions;
