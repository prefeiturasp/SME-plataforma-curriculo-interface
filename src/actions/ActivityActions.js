import loadData from './loadData';

const ActivityActions = {
  LOAD: 'AA_LOAD',
  LOADED: 'AA_LOADED',
  
  load(slug1, slug2) {
    return loadData(`/api/sequencias/${slug1}/atividades/${slug2}`, ActivityActions.LOAD, ActivityActions.LOADED);
  },
};

export default ActivityActions;
