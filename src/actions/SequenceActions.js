import Api from 'data/Api';

const SequenceActions = {
  LOAD: 'SequenceActions.LOAD',
  LOAD_COLLECTIONS: 'SequenceActions.LOAD_COLLECTIONS',
  LOADED: 'SequenceActions.LOADED',
  LOADED_COLLECTIONS: 'SequenceActions.LOADED_COLLECTIONS',

  load(slug) {
    return Api.simpleGet(
      `/api/sequencias/${slug}`,
      SequenceActions.LOAD,
      SequenceActions.LOADED
    );
  },
  loadCollections(slug) {
    return Api.simpleGet(
      `/api/sequencias/${slug}/colecoes`,
      SequenceActions.LOAD_COLLECTIONS,
      SequenceActions.LOADED_COLLECTIONS
    );
  },
};

export default SequenceActions;
