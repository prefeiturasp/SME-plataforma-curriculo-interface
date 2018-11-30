import loadData from './loadData';

const ProfileActions = {
  LOAD: 'ProfileActions.LOAD',
  LOADED: 'ProfileActions.LOADED',
  SAVE_NICKNAME: 'ProfileActions.SAVE_NICKNAME',
  SAVE_PHOTO: 'ProfileActions.SAVE_PHOTO',
  SAVED_NICKNAME: 'ProfileActions.SAVED_NICKNAME',
  SAVED_PHOTO: 'ProfileActions.SAVED_PHOTO',
  
  load() {
    return loadData('/api/perfil', ProfileActions.LOAD, ProfileActions.LOADED);
  },
  saveNickname(nickname) {
    return loadData('/api/professores/${id}', ProfileActions.SAVE_NICKNAME, ProfileActions.SAVED_NICKNAME);
  },
  savePhoto() {
    return loadData('/api/professores/${id}', ProfileActions.SAVE_PHOTO, ProfileActions.SAVED_PHOTO);
  },
};

export default ProfileActions;
