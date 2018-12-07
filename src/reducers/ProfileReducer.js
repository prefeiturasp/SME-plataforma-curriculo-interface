import ProfileActions from 'actions/ProfileActions';

const initialState = {
  id: 0,
  isUploading: false,
  name: '',
  nickname: '',
  photo: null,
};

function ProfileReducer(state = initialState, action) {
  switch (action.type) {
    case ProfileActions.LOAD:
      return {
        ...state
      };
      
    case ProfileActions.LOADED:
      return {
        ...state,
        id: 1,//action.data.teacher.id,
        name: 'Marília Silva',//action.data.name || '',
        nickname: 'Marília Silva',//action.data.teacher.nickname || '',
        photo: null//action.data.teacher.avatar_attributes.default_url,
      };

    case ProfileActions.SAVE_NICKNAME:
      return {
        ...state,
      };

    case ProfileActions.SAVED_NICKNAME:
      return {
        ...state,
      };

    case ProfileActions.SAVE_PHOTO:
      return {
        ...state,
        isUploading: true,
      };

    case ProfileActions.SAVED_PHOTO:
      return {
        ...state,
        isUploading: false,
      };
  
    default:
      return state;
  }
}

export default ProfileReducer;
