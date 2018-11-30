import ProfileActions from '../actions/ProfileActions';

const initialState = {
  name: '',
  nickname: '',
  photo: '',
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
        // name: action.data.name,
        // nickname: action.data.nickname,
        // photo: action.data.photo,
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
      };

    case ProfileActions.SAVED_PHOTO:
      return {
        ...state,
      };
  
    default:
      return state;
  }
}

export default ProfileReducer;
