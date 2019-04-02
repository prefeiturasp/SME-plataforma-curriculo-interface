import LoginActions from 'actions/LoginActions';
import ProfileActions from 'actions/ProfileActions';

const initialState = {
  id: 0,
  isLogged: false,
  isUploading: false,
  name: '',
  nickname: '',
  photo: null,
  schools: [],
};

function ProfileReducer(state = initialState, action) {
  switch (action.type) {
    case LoginActions.LOGGED_IN:
      return {
        ...state,
        isLogged: true,
      };

    case LoginActions.LOGGED_OUT:
      return {
        ...state,
        isLogged: false,
      };

    case ProfileActions.LOAD:
      return initialState;

    case ProfileActions.LOADED:
      const { teacher } = action.data;
      sessionStorage.setItem('teacherId', teacher.id);

      return {
        ...state,
        id: teacher.id,
        name: teacher.name || '',
        nickname: teacher.nickname || '',
        photo: teacher.avatar_attributes.default_url,
        numClasses: teacher.number_of_classes,
        numCollections: teacher.number_of_collections,
        numComponents: teacher.number_of_components,
        numNotEvaluatedSequences: teacher.number_of_sequences_not_evaluated,
      };

    case ProfileActions.LOADED_CLASSROOMS:
      return {
        ...state,
        schools: action.data.schools,
      };

    case ProfileActions.SAVED_NICKNAME:
      return {
        ...state,
        nickname: action.data.nickname || '',
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

    case ProfileActions.DELETED_PHOTO:
      return {
        ...state,
        photo: null,
      };

    default:
      return state;
  }
}

export default ProfileReducer;
