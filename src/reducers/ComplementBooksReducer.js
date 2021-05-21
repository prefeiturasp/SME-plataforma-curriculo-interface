import ComplementBooksActions from 'actions/ComplementBooksActions';

const initialState = {
  complementBooks: [],
  isSearching: false,
};

function ComplementBooksReducer(state = initialState, action) {
  switch (action.type) {
    case ComplementBooksActions.LOAD:
      return {
        ...initialState,
        isSearching: true,
      };

    case ComplementBooksActions.LOADED:
      return {
        ...state,
        complementBooks: action.data,
        isSearching: false,
      };

    default:
      return state;
  }
}

export default ComplementBooksReducer;
