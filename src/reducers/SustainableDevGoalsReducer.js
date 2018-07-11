import SustainableDevGoalsActions from '../actions/SustainableDevGoalsActions';

const emptyItem = {
  goals: [],
  name: '',
  description: '',
  icon: '',
};

const initialState = {
  items: [],
  currItem: emptyItem,
};

function SustainableDevGoalsReducer(state = initialState, action) {
  switch (action.type) {
    case SustainableDevGoalsActions.LOAD:
      return {
        ...state,
        currItem: emptyItem,
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
