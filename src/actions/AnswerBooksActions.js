import Api from 'data/Api';

const AnswerBooksActions = {
  LOAD: 'AnswerBooksActions.LOAD',
  LOADED: 'AnswerBooksActions.LOADED',
  LOADED_SEGMENTS: 'AnswerBooksActions.LOADED_SEGMENTS',
  LOADED_STAGES: 'AnswerBooksActions.LOADED_STAGES',
  LOADED_YEARS: 'AnswerBooksActions.LOADED_YEARS',
  LOADED_FILE: 'AnswerBooksActions.LOADED_FILE',

  load() {
    return Api.simpleGet(
      '/api/answer_books',
      AnswerBooksActions.LOAD,
      AnswerBooksActions.LOADED,
    );
  },
  loadSegments() {
    return Api.simpleGet(
      '/api/segments',
      AnswerBooksActions.LOAD,
      AnswerBooksActions.LOADED_SEGMENTS,
    );
  },
  loadSegments() {
    return Api.simpleGet(
      '/api/segments',
      AnswerBooksActions.LOAD,
      AnswerBooksActions.LOADED_SEGMENTS,
    );
  },
  loadStages() {
    return Api.simpleGet(
      '/api/stages',
      AnswerBooksActions.LOAD,
      AnswerBooksActions.LOADED_STAGES,
    );
  },
  loadYears() {
    return Api.simpleGet(
      '/api/years',
      AnswerBooksActions.LOAD,
      AnswerBooksActions.LOADED_YEARS,
    );
  },
  getFile(url) {
    
  },
};
// return dispatch => {
//   const accessToken = localStorage.getItem('accessToken');
//   return fetch(url,
//       { 
//           method: "GET",
//           headers: { "Content-Type": "application/json",'Authorization': accessToken},
//       }).then(response => response.blob()).then(response => console.log(response))
// }
export default AnswerBooksActions;
