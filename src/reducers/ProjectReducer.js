import ProjectActions from 'actions/ProjectActions';
import CollectionActions from 'actions/CollectionActions';

const initialState = {
  currItem: {},
  comments: [],
  collections: [],
  isSaved: false,
  isSearching: false,
};

function ProjectReducer(state = initialState, action) {
  switch (action.type) {
    case ProjectActions.LOAD:
      return {
        ...state,
        isSearching: true,
      };

    case ProjectActions.LOADED:
      return {
        ...state,
        currItem: action.data,
        comments: action.data.comments,
        isSearching: false,
      };

    case ProjectActions.LOAD_COLLECTIONS:
      return {
        ...state,
        collections: [],
      };

    case ProjectActions.LOADED_COLLECTIONS:
      return {
        ...state,
        collections: action.data,
        isSaved: action.data.length > 0,
      };

    case CollectionActions.SAVED_PROJECT:
      return {
        ...state,
        isSaved: true,
      };

    default:
      return state;
  }
}

export default ProjectReducer;
