import RatingActions from 'actions/RatingActions';

function compare(a, b) {
  if (a.sequence < b.sequence) {
    return -1;
  }
  if (a.sequence > b.sequence) {
    return 1;
  }
  return 0;
}

const initialState = {
  items: [],
};

function RatingReducer(state = initialState, action) {
  switch (action.type) {
    case RatingActions.LOADED:
      return {
        ...state,
        items: action.data.sort(compare),
      };

    default:
      return state;
  }
}

export default RatingReducer;
