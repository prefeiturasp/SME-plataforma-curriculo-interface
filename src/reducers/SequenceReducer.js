import CollectionActions from 'actions/CollectionActions';
import SequenceActions from 'actions/SequenceActions';
import SequencesActions from 'actions/SequencesActions';

const initialState = {
  currItem: null,
  collections: [],
  isSaved: false,
};

function SequenceReducer(state = initialState, action) {
  switch (action.type) {
    case SequenceActions.LOAD:
    case SequencesActions.LOAD:
    case SequencesActions.LOAD_MORE:
    case SequencesActions.SEARCH:
      return initialState;

    case SequenceActions.LOADED:
      return {
        ...state,
        currItem: action.data,
      };

    case SequenceActions.LOADED_COLLECTIONS:
      return {
        ...state,
        collections: action.data,
        isSaved: action.data.length > 0,
      };

    case CollectionActions.SAVED_SEQUENCE:
      return {
        ...state,
        isSaved: true,
      };

    default:
      return state;
  }
}

export default SequenceReducer;