import Api from 'data/Api';

const MethodologiesActions = {
  LOAD: 'ChallengesActions.LOAD',
  LOADED: 'ChallengesActions.LOADED',
  LOAD_ITEM: 'ChallengesActions.LOAD_ITEM',
  LOADED_ITEM: 'ChallengesActions.LOADED_ITEM',

  load() {
    return Api.simpleGet(
      '/api/metodos/',
      MethodologiesActions.LOAD,
      MethodologiesActions.LOADED
    );
  },
  loadItem(slug) {
    return Api.simpleGet(
      `/api/metodos/${slug}`,
      MethodologiesActions.LOAD_ITEM,
      MethodologiesActions.LOADED_ITEM
    );
  },
};

export default MethodologiesActions;
