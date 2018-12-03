import { getData, postData, putData } from './dataUtils';

const ProfileActions = {
  LOAD: 'ProfileActions.LOAD',
  LOADED: 'ProfileActions.LOADED',
  SAVE_NICKNAME: 'ProfileActions.SAVE_NICKNAME',
  SAVE_PHOTO: 'ProfileActions.SAVE_PHOTO',
  SAVED_NICKNAME: 'ProfileActions.SAVED_NICKNAME',
  SAVED_PHOTO: 'ProfileActions.SAVED_PHOTO',
  
  load() {
    return getData('/api/perfil', ProfileActions.LOAD, ProfileActions.LOADED);
  },
  saveNickname(id, nickname) {
    return putData(
      `/api/professores/${id}`,
      { 'teacher[nickname]': nickname },
      ProfileActions.SAVE_NICKNAME,
      ProfileActions.SAVED_NICKNAME
    );
  },
  savePhoto() {
    return postData(
      '/api/professores/',
      {},
      ProfileActions.SAVE_PHOTO,
      ProfileActions.SAVED_PHOTO
    );
  },
};

export default ProfileActions;
