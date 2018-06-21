import SustainableDevGoalsActions from '../actions/SustainableDevGoalsActions';

const initialState = {
  items: [],
  currItem: null,
};

function SustainableDevGoalsReducer(state = initialState, action) {
  switch (action.type) {
    case SustainableDevGoalsActions.LOAD:
      return {
        ...state,
        isLoading: true,
      };

    case SustainableDevGoalsActions.LOADED:
      return {
        ...state,
        isLoading: false,
        items: action.data,
      };

    case SustainableDevGoalsActions.LOAD_ITEM:
      return {
        ...state,
        isLoading: true,
      };

    case SustainableDevGoalsActions.LOADED_ITEM:
      return {
        ...state,
        isLoading: false,
        currItem: action.data,
      };

    default:
      return state;
  }
}

export default SustainableDevGoalsReducer;
