import ProfileActions from '../actions/ProfileActions';

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
        id: action.data.teacher.id,
        name: action.data.name || '',
        nickname: action.data.teacher.nickname || '',
        photo: action.data.teacher.avatar_attributes.default_url,
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
