import MethodologiesActions from 'actions/MethodologiesActions';

const initialState = {
  currItem: null,
  items: [],
};

function MethodologiesReducer(state = initialState, action) {
  switch (action.type) {
    case MethodologiesActions.LOAD:
      return {
        ...state,
        items: [],
      };

    case MethodologiesActions.LOADED:
      return {
        ...state,
        items: action.data,
      };

    case MethodologiesActions.LOAD_ITEM:
      return {
        ...state,
        currItem: null,
      };

    case MethodologiesActions.LOADED_ITEM:
      return {
        ...state,
        currItem: action.data,
      };

    default:
      return state;
  }
}

export default MethodologiesReducer;
