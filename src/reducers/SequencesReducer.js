import SequencesActions from '../actions/SequencesActions';

const initialState = {
  items: [],
  currItem: null,
};

function SequencesReducer(state = initialState, action) {
  switch (action.type) {
    case SequencesActions.CLEAR_SEARCH:
      return initialState;

    case SequencesActions.SEARCH:
      return {
        items: [],
        currItem: null,
      };

    case SequencesActions.LOAD:
      return {
        ...state,
        isLoading: true,
      };
      
    case SequencesActions.LOADED:
      return {
        ...state,
        isLoading: false,
        items: action.data,
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
