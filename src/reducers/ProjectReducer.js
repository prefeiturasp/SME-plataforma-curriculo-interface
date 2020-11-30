import ProjectActions from 'actions/ProjectActions';

const initialState = {
  currItem: {},
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
        isSearching: false,
      };

    default:
      return state;
  }
}

export default ProjectReducer;
