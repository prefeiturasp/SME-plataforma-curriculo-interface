import Api from 'data/Api';
import AlertActions from 'actions/AlertActions';

const ProfileActions = {
  DELETE_PHOTO: 'ProfileActions.DELETE_PHOTO',
  DELETED_PHOTO: 'ProfileActions.DELETED_PHOTO',
  LOAD: 'ProfileActions.LOAD',
  LOADED: 'ProfileActions.LOADED',
  LOAD_CLASSROOMS: 'ProfileActions.LOAD_CLASSROOMS',
  LOADED_CLASSROOMS: 'ProfileActions.LOADED_CLASSROOMS',
  SAVE_NICKNAME: 'ProfileActions.SAVE_NICKNAME',
  SAVE_PHOTO: 'ProfileActions.SAVE_PHOTO',
  SAVED_NICKNAME: 'ProfileActions.SAVED_NICKNAME',
  SAVED_PHOTO: 'ProfileActions.SAVED_PHOTO',

  deletePhoto(id) {
    return dispatch => {
      return Api.delete(dispatch, `/api/professores/${id}/avatar`)
        .then(response =>
          dispatch({ ...response, type: ProfileActions.DELETED_PHOTO })
        )
        .then(response =>
          dispatch(AlertActions.open('Foto apagada com sucesso!'))
        )
        .catch(error => dispatch(AlertActions.open(`Ocorreu um erro: ${error}`)));
    };
  },
  load() {
    return Api.simpleGet(
      '/api/perfil',
      ProfileActions.LOAD,
      ProfileActions.LOADED
    );
  },
  loadClassrooms() {
    const teacherId = sessionStorage.getItem('teacherId');
    return Api.simpleGet(
      `/api/professores/${teacherId}`,
      ProfileActions.LOAD_CLASSROOMS,
      ProfileActions.LOADED_CLASSROOMS
    );
  },
  saveNickname(id, nickname) {
    return dispatch => {
      dispatch({ type: ProfileActions.SAVE_NICKNAME });
      const data = { 'teacher[nickname]': nickname };
      return Api.put(dispatch, `/api/professores/${id}`, data)
        .then(response =>
          dispatch({ ...response, type: ProfileActions.SAVED_NICKNAME })
        )
        .then(response =>
          dispatch(AlertActions.open('Perfil salvo com sucesso!'))
        )
        .catch(error => dispatch(AlertActions.open(`Ocorreu um erro: ${error}`)));
    };
  },
  savePhoto(id, photo) {
    return dispatch => {
      dispatch({ type: ProfileActions.SAVE_PHOTO });
      const data = { 'teacher[avatar]': photo };
      return Api.post(dispatch, `/api/professores/${id}/avatar`, data)
        .then(response =>
          dispatch({ ...response, type: ProfileActions.SAVED_PHOTO })
        )
        .then(response =>
          dispatch(AlertActions.open('Foto salva com sucesso!'))
        )
        .catch(error => dispatch(AlertActions.open(`Ocorreu um erro: ${error}`)));
    };
  },
};

export default ProfileActions;
