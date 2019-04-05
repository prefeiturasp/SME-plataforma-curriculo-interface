import ChallengesActions from 'actions/ChallengesActions';

const initialState = {
  items: [],
  performed: [],
};

function ChallengesReducer(state = initialState, action) {
  switch (action.type) {
    case ChallengesActions.LOADED:
      return {
        ...state,
        items: action.data,
      };

    case ChallengesActions.LOADED_PERFORMED:
      return {
        ...state,
        performed: action.data,
      };

    default:
      return state;
  }
}

export default ChallengesReducer;
