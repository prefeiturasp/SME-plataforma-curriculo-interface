import Api from 'data/Api';
import AlertActions from 'actions/AlertActions';

const ProfileActions = {
  DELETE_PHOTO: 'ProfileActions.DELETE_PHOTO',
  DELETED_PHOTO: 'ProfileActions.DELETED_PHOTO',
  LOAD: 'ProfileActions.LOAD',
  LOADED: 'ProfileActions.LOADED',
  SAVE_NICKNAME: 'ProfileActions.SAVE_NICKNAME',
  SAVE_PHOTO: 'ProfileActions.SAVE_PHOTO',
  SAVED_NICKNAME: 'ProfileActions.SAVED_NICKNAME',
  SAVED_PHOTO: 'ProfileActions.SAVED_PHOTO',

  deletePhoto() {
    return { type: ProfileActions.DELETE_PHOTO };
  },
  load() {
    return Api.simpleGet(
      '/api/perfil',
      ProfileActions.LOAD,
      ProfileActions.LOADED
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
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro!')));
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
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro!')));
    };
  },
};

export default ProfileActions;
