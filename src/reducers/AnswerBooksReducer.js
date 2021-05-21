import AnswerBooksActions from 'actions/AnswerBooksActions';

const initialState = {
  books: [],
  segments: [],
  stages: [],
  years: [],
  isSearching: false,
};

function AnswerBooksReducer(state = initialState, action) {
  switch (action.type) {
    case AnswerBooksActions.LOAD:
      return {
        ...initialState,
        isSearching: true,
      };

    case AnswerBooksActions.LOADED:
      return {
        ...state,
        books: action.data,
        isSearching: false,
      };

    case AnswerBooksActions.LOADED_SEGMENTS:
      return {
        ...state,
        segments: action.data,
        isSearching: false,
      };
    
    case AnswerBooksActions.LOADED_STAGES:
      return {
        ...state,
        stages: action.data,
        isSearching: false,
      };

    case AnswerBooksActions.LOADED_YEARS:
      return {
        ...state,
        years: action.data,
        isSearching: false,
      };

    default:
      return state;
  }
}

export default AnswerBooksReducer;
