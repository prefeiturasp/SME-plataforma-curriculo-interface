import ChallengesActions from 'actions/ChallengesActions';

const initialState = {
  items: [],
  saved: [],
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
        items: action.data.map(item => {
          return {
            ...item,
            isSaved: !!state.saved.find(o => o === item.id),
          }
        }),
      };

    case ChallengesActions.LOADED_FINISHED:
      return {
        ...state,
        items: state.items.concat(action.data.map(item => {
          return {
            ...item,
            isSaved: !!state.saved.find(o => o === item.id),
          }
        })),
      };

    case ChallengesActions.LOADED_SAVED:
      return {
        items: state.items.map(item => {
          return {
            ...item,
            isSaved: !!action.data.challenges.find(o => o === item.id),
          };
        }),
        saved: action.data.challenges,
      };

    default:
      return state;
  }
}

export default ChallengesReducer;
