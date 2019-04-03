import ChallengeActions from 'actions/ChallengeActions';

const initialState = {
  currItem: null,
  results: [],
  isSaved: false,
};

function ChallengeReducer(state = initialState, action) {
  switch (action.type) {
    case ChallengeActions.LOADED:
      return {
        ...state,
        currItem: action.data,
      };

    case ChallengeActions.LOADED_RESULTS:
      return {
        ...state,
        results: state.results.concat(action.data),
      };

    default:
      return state;
  }
}

export default ChallengeReducer;
