import ChallengesActions from 'actions/ChallengesActions';

const initialState = {
  items: [],
};

function ChallengesReducer(state = initialState, action) {
  switch (action.type) {
    case ChallengesActions.LOADED:
      return {
        ...state,
        items: action.data,
      };

    default:
      return state;
  }
}

export default ChallengesReducer;
