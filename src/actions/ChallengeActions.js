import Api from 'data/Api';
import AlertActions from 'actions/AlertActions';
import SnackbarActions from 'actions/SnackbarActions';
import getTeacherId from 'data/getTeacherId';

const ChallengeActions = {
  DELETE: 'ChallengesActions.DELETE',
  DELETED: 'ChallengesActions.DELETED',
  LOAD: 'ChallengeActions.LOAD',
  LOAD_MORE_RESULTS: 'ChallengeActions.LOAD_MORE_RESULTS',
  LOAD_RESULT: 'ChallengeActions.LOAD_RESULT',
  LOAD_RESULTS: 'ChallengeActions.LOAD_RESULTS',
  LOADED: 'ChallengeActions.LOADED',
  LOADED_MORE_RESULTS: 'ChallengeActions.LOADED_MORE_RESULTS',
  LOADED_RESULT: 'ChallengeActions.LOADED_RESULT',
  LOADED_RESULTS: 'ChallengeActions.LOADED_RESULTS',
  SAVE: 'ChallengeActions.SAVE',
  SAVED: 'ChallengeActions.SAVED',
  SEND_RESULT: 'ChallengeActions.SEND_RESULT',
  SENT_RESULT: 'ChallengeActions.SENT_RESULT',
  
  delete(id) {
    return dispatch => {
      dispatch({ type: ChallengeActions.DELETE });

      setTimeout(() => {
        dispatch({ type: ChallengeActions.DELETED });
      }, 1000);
    };
  },
  load(slug) {
    return Api.simpleGet(
      `/api/desafios/${slug}`,
      ChallengeActions.LOAD,
      ChallengeActions.LOADED
    );
  },
  loadMoreResults(page) {
    return Api.simpleGet(
      page,
      ChallengeActions.LOAD_MORE_RESULTS,
      ChallengeActions.LOADED_MORE_RESULTS
    );
  },
  loadResult(slug, resultId) {
    return Api.simpleGet(
      `/api/desafios/${slug}/resultados/${resultId}`,
      ChallengeActions.LOAD_RESULT,
      ChallengeActions.LOADED_RESULT
    );
  },
  loadResults(slug) {
    return Api.simpleGet(
      `/api/desafios/${slug}/resultados`,
      ChallengeActions.LOAD_RESULTS,
      ChallengeActions.LOADED_RESULTS
    );
  },
  save(id) {
    return dispatch => {
      dispatch({ type: ChallengeActions.SAVE });

      setTimeout(() => {
        dispatch({ type: ChallengeActions.SAVED });
        dispatch(SnackbarActions.open('Desafio salvo'));
      }, 1000);
    };
  },
  sendResult(slug, classroom, description, links, files) {
    return dispatch => {
      dispatch({ type: ChallengeActions.SEND_RESULT });
      const teacherId = getTeacherId();
      const data = {
        'result[class_name]': classroom,
        'result[description]': description,
        'result[links_attributes][][link]': links,
        'result[archives][]': files,
        'result[teacher_id]': teacherId,
      };
      return Api.post(dispatch, `/api/desafios/${slug}/resultados`, data)
        .then(response =>
          dispatch({ ...response, type: ChallengeActions.SENT_RESULT })
        )
        .then(response =>
          dispatch(SnackbarActions.open('Desafio salvo'))
        )
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
};

export default ChallengeActions;
