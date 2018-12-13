import SustainableDevGoalsActions from 'actions/SustainableDevGoalsActions';

const initialState = {
  items: [],
  currItem: null,
};

function SustainableDevGoalsReducer(state = initialState, action) {
  switch (action.type) {
    case SustainableDevGoalsActions.LOAD:
      return {
        ...state,
        currItem: null,
      };

    case SustainableDevGoalsActions.LOADED:
      return {
        ...state,
        items: action.data,
      };

    case SustainableDevGoalsActions.LOADED_ITEM:
      return {
        ...state,
        currItem: action.data,
      };

    default:
      return state;
  }
}

export default SustainableDevGoalsReducer;
