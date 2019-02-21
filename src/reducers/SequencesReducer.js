import CollectionActions from 'actions/CollectionActions';
import SequencesActions from 'actions/SequencesActions';

const initialState = {
  items: [],
  performed: [],
  isSearching: false,
  nextPage: null,
  totalItems: 0,
};

function SequencesReducer(state = initialState, action) {
  switch (action.type) {
    case SequencesActions.CLEAR:
      return initialState;

    case SequencesActions.LOAD:
      return {
        ...state,
        items: [],
        isSearching: true,
      };

    case SequencesActions.LOAD_MORE:
      return {
        ...state,
        isSearching: true,
      };

    case SequencesActions.LOADED:
      return {
        ...state,
        items: action.data,
        isSearching: false,
        nextPage: action.nextPage,
        totalItems: action.totalItems,
      };

    case SequencesActions.LOADED_MORE:
      return {
        ...state,
        items: state.items.concat(action.data),
        isSearching: false,
        nextPage: action.nextPage,
      };

    case SequencesActions.LOADED_PERFORMED:
      return {
        ...state,
        performed: action.data,
      };

    case SequencesActions.SEARCH:
      return {
        ...state,
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

    case CollectionActions.SAVED_SEQUENCE:
      return {
        ...state,
        items: state.items.map(item => {
          return {
            ...item,
            isSaved: item.id === action.sequenceId || item.isSaved,
          };
        }),
      };

    default:
      return state;
  }
}

export default SequencesReducer;
