import ChallengeActions from 'actions/ChallengeActions';

const initialState = {
  currItem: null,
  currResult: null,
  results: [],
  isLoadingResults: false,
  nextPage: null,
  totalItems: 0,
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
        results: [],
      };

    case ChallengeActions.LOADED_RESULT:
      return {
        ...state,
        currResult: action.data,
      };

    case ChallengeActions.LOADED_RESULTS:
      return {
        ...state,
        isLoadingResults: false,
        results: state.results.concat(action.data),
        nextPage: action.nextPage,
        totalItems: action.totalItems,
      };

    default:
      return state;
  }
}

export default ChallengeReducer;
