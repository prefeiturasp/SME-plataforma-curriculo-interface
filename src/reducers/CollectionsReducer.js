import CollectionsActions from 'actions/CollectionsActions';

const initialState = {
  items: [],
};

function CollectionsReducer(state = initialState, action) {
  switch (action.type) {
    case CollectionsActions.LOADED:
      return {
        ...state,
        items: action.data,
      };

    default:
      return state;
  }
}

export default CollectionsReducer;
