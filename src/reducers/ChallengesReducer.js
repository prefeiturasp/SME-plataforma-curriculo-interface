import ChallengesActions from 'actions/ChallengesActions';

const initialState = {
  items: [],
  performed: [],
};

function ChallengesReducer(state = initialState, action) {
  switch (action.type) {
    case ChallengesActions.LOAD_ONGOING:
      return {
        ...state,
        items: [],
      };

    case ChallengesActions.LOADED_ONGOING:
      return {
        ...state,
        items: action.data,
      };

    case ChallengesActions.LOADED_FINISHED:
      return {
        ...state,
        items: state.items.concat(action.data),
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
