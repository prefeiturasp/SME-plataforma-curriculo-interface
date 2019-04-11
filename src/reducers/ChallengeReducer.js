import ChallengeActions from 'actions/ChallengeActions';

const initialState = {
  currItem: null,
  results: [],
  isLoadingResults: false,
  isSaved: false,
};

function ChallengeReducer(state = initialState, action) {
  switch (action.type) {
    case ChallengeActions.LOADED:
      return {
        ...state,
        currItem: action.data,
      };

    case ChallengeActions.LOAD_RESULTS:
      return {
        ...state,
        isLoadingResults: true,
      };

    case ChallengeActions.LOADED_RESULTS:
      return {
        ...state,
        isLoadingResults: false,
        results: state.results.concat(action.data),
      };

    case ChallengeActions.SAVED:
      return {
        ...state,
        isSaved: true,
      };

    default:
      return state;
  }
}

export default ChallengeReducer;
