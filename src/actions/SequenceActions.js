import Api from 'data/Api';
import getTeacherId from 'data/getTeacherId';

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
  loadRatings(slug) {
    const teacherId = getTeacherId();
    return Api.simpleGet(
      `api/professores/${teacherId}/sequencias_realizadas/${slug}/avaliacoes`,
      SequenceActions.LOAD_RATINGS,
      SequenceActions.LOADED_RATINGS
    );
  },
};

export default SequenceActions;
