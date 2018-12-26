import AlertActions from './AlertActions';
import Api from 'data/Api';
import CollectionsActions from './CollectionsActions';

function getTeacherId() {
  return sessionStorage.getItem('teacherId');
}

const CollectionActions = {
  CREATE: 'CollectionActions.CREATE',
  CREATED: 'CollectionActions.CREATED',
  DELETE: 'CollectionActions.DELETE',
  DELETED: 'CollectionActions.DELETED',
  EDIT: 'CollectionActions.EDIT',
  EDITED: 'CollectionActions.EDITED',
  LOAD: 'CollectionActions.LOAD',
  LOADED: 'CollectionActions.LOADED',
  LOAD_SEQUENCES: 'CollectionActions.LOAD_SEQUENCES',
  LOADED_SEQUENCES: 'CollectionActions.LOADED_SEQUENCES',
  REMOVE_SEQUENCE: 'CollectionActions.REMOVE_SEQUENCE',
  REMOVED_SEQUENCE: 'CollectionActions.REMOVED_SEQUENCE',
  SAVE_SEQUENCE: 'CollectionActions.SAVE_SEQUENCE',
  SAVED_SEQUENCE: 'CollectionActions.SAVED_SEQUENCE',

  removeSequence(id, sequenceId) {
    return dispatch => {
      dispatch({ type: CollectionActions.REMOVE_SEQUENCE });
      const teacherId = getTeacherId();
      return Api.delete(
        dispatch,
        `/api/professores/${teacherId}/colecoes/${id}/sequencias/${sequenceId}`
      )
        .then(response =>
          dispatch({ ...response, type: CollectionActions.REMOVED_SEQUENCE })
        )
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro!')));
    };
  },
  saveSequence(id, sequenceId) {
    return dispatch => {
      dispatch({ type: CollectionActions.SAVE_SEQUENCE });
      const data = {
        'collection_activity_sequence[activity_sequence_id]': sequenceId,
      };
      const teacherId = getTeacherId();
      return Api.post(
        dispatch,
        `/api/professores/${teacherId}/colecoes/${id}/sequencias`,
        data
      )
        .then(response => {
          dispatch({ ...response, type: CollectionActions.SAVED_SEQUENCE });
          dispatch(AlertActions.open('Sequência salva com sucesso!'));
        })
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro!')));
    };
  },
  create(name) {
    return dispatch => {
      dispatch({ type: CollectionActions.CREATE });
      const data = { 'collection[name]': name };
      const teacherId = getTeacherId();
      return Api.post(dispatch, `/api/professores/${teacherId}/colecoes`, data)
        .then(response => {
          dispatch({ ...response, type: CollectionActions.CREATED });
          dispatch(AlertActions.open('Coleção criada com sucesso!'));
          dispatch(CollectionsActions.load());
        })
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro!')));
    };
  },
  createAndAddSequence(name, sequenceId) {
    return dispatch => {
      dispatch({ type: CollectionActions.CREATE });
      const data = { 'collection[name]': name };
      const teacherId = getTeacherId();
      return Api.post(dispatch, `/api/professores/${teacherId}/colecoes`, data)
        .then(response => {
          dispatch({ ...response, type: CollectionActions.CREATED });
          // dispatch(CollectionActions.saveSequence(response.id, sequenceId)
          //   .then(response =>
          //     dispatch(AlertActions.open('Coleção criada e sequência salva com sucesso!'))
          //   )
        })
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro!')));
    };
  },
  delete(id) {
    return dispatch => {
      dispatch({ type: CollectionActions.DELETE });
      const teacherId = getTeacherId();
      return Api.delete(
        dispatch,
        `/api/professores/${teacherId}/colecoes/${id}`
      )
        .then(response => {
          dispatch({ ...response, type: CollectionActions.DELETED });
          dispatch(AlertActions.open('Coleção excluída com sucesso!'));
          dispatch(CollectionsActions.load());
        })
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro!')));
    };
  },
  edit(id, name) {
    return dispatch => {
      dispatch({ type: CollectionActions.EDIT });
      const data = { 'collection[name]': name };
      const teacherId = getTeacherId();
      return Api.put(
        dispatch,
        `/api/professores/${teacherId}/colecoes/${id}`,
        data
      )
        .then(response => {
          dispatch({ ...response, type: CollectionActions.EDITED });
          dispatch(AlertActions.open('Coleção salva com sucesso!'));
          dispatch(CollectionsActions.load());
        })
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro!')));
    };
  },
  load(id) {
    return dispatch => {
      dispatch({ type: CollectionActions.LOAD });
      const teacherId = getTeacherId();
      return Api.get(dispatch, `/api/professores/${teacherId}/colecoes/${id}`)
        .then(response =>
          dispatch({ ...response, type: CollectionActions.LOADED })
        )
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro.')));
    };
  },
  loadSequences(id) {
    return dispatch => {
      dispatch({ type: CollectionActions.LOAD_SEQUENCES });
      const teacherId = getTeacherId();
      return Api.get(
        dispatch,
        `/api/professores/${teacherId}/colecoes/${id}/sequencias`
      )
        .then(response =>
          dispatch({ ...response, type: CollectionActions.LOADED_SEQUENCES })
        )
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro.')));
    };
  },
};

export default CollectionActions;
