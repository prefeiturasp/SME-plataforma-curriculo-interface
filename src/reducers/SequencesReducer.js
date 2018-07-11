import SequencesActions from '../actions/SequencesActions';

const initialState = {
  items: [],
  currItem: null,
  isSearching: false,
};

function SequencesReducer(state = initialState, action) {
  switch (action.type) {
    case SequencesActions.CLEAR:
      return initialState;

    case SequencesActions.LOAD:
      return {
        ...state,
        currItem: null,
      };
      
    case SequencesActions.LOADED:
      return {
        ...state,
        items: action.data,
        isSearching: false,
      };
      
    case SequencesActions.LOADED_ITEM:
      return {
        ...state,
        currItem: action.data,
      };

    case SequencesActions.SEARCH:
      return {
        ...state,
        currItem: null,
        isSearching: true,
      };

    case SequencesActions.TOGGLE_PREVIEW:
      return {
        ...state,
        items: state.items.map(item => {
          return {
            ...item,
            isExpanded: !item.isExpanded && item.id === action.id,
          };
        }),
      };
      
    default:
      return state;
  }
}

export default SequencesReducer;
