import Api from 'data/Api';

const HomeActions = {
  LOAD: 'HomeActions.LOAD',
  LOADED: 'HomeActions.LOADED',
  TOGGLE_PREVIEW: 'HomeActions.TOGGLE_PREVIEW',

  load() {
    return Api.simpleGet(
      '/api/sequencias',
      HomeActions.LOAD,
      HomeActions.LOADED
    );
  },
  togglePreview(id) {
    return { type: HomeActions.TOGGLE_PREVIEW, id };
  },
};

export default HomeActions;
