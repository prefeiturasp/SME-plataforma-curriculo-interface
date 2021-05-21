import Api from 'data/Api';

const ComplementBooksActions = {
  LOAD: 'ComplementBooksActions.LOAD',
  LOADED: 'ComplementBooksActions.LOADED',

  load() {
    return Api.simpleGet(
      '/api/complement_books',
      ComplementBooksActions.LOAD,
      ComplementBooksActions.LOADED,
    );
  },
};
export default ComplementBooksActions;
