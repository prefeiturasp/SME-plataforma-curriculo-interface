import CollectionActions from 'actions/CollectionActions';

const initialState = {
  data: {},
  sequences: [],
};

function CollectionReducer(state = initialState, action) {
  switch (action.type) {
    case CollectionActions.CREATE:
    case CollectionActions.DELETE:
    case CollectionActions.EDIT:
    case CollectionActions.LOAD:
    case CollectionActions.LOAD_SEQUENCE:
    case CollectionActions.REMOVE_SEQUENCE:
    case CollectionActions.SAVE_SEQUENCE:
      return {
        ...state,
      };

    case CollectionActions.LOADED:
      return {
        ...state,
        data: action.data,
      };

    case CollectionActions.LOADED_SEQUENCES:
      return {
        ...state,
        sequences: action.data,
      };

    default:
      return state;
  }
}

export default CollectionReducer;
