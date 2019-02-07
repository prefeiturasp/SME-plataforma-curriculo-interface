import React from 'react';
import AlertActions from './AlertActions';
import Api from 'data/Api';
import CollectionsActions from './CollectionsActions';
import SnackbarActions from './SnackbarActions';
import getTeacherId from 'data/getTeacherId';

function doSaveSequence(dispatch, id, name, sequenceId) {
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
      dispatch({ ...response, sequenceId, type: CollectionActions.SAVED_SEQUENCE });
      dispatch(
        SnackbarActions.open(
          <span>
            Salvo em <strong>{name}</strong>
          </span>
        )
      );
    })
    .catch(error => dispatch(AlertActions.open(`Ocorreu um erro: ${error}`)));
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
        .then(response => {
          dispatch({ ...response, type: CollectionActions.REMOVED_SEQUENCE });
          dispatch(CollectionActions.loadSequences(id));
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
  saveSequence(id, name, sequenceId) {
    return dispatch => {
      return doSaveSequence(dispatch, id, name, sequenceId);
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
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
  createAndSaveSequence(name, sequenceId) {
    return dispatch => {
      dispatch({ type: CollectionActions.CREATE });
      const data = { 'collection[name]': name };
      const teacherId = getTeacherId();
      return Api.post(dispatch, `/api/professores/${teacherId}/colecoes`, data)
        .then(response => {
          console.warn(
            'createAndSaveSequence',
            name,
            sequenceId,
            response.data.id
          );
          return doSaveSequence(dispatch, response.data.id, name, sequenceId);
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
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
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
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
          dispatch(CollectionActions.load(id));
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
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
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
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
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
};

export default CollectionActions;
