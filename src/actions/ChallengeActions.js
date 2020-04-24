import Api from 'data/Api';
import AlertActions from 'actions/AlertActions';
import ChallengesActions from 'actions/ChallengesActions';
import SnackbarActions from 'actions/SnackbarActions';
import getTeacherId from 'data/getTeacherId';
import { history } from 'index';

const ChallengeActions = {
  DELETE: 'ChallengeActions.DELETE',
  DELETED: 'ChallengeActions.DELETED',
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
      const teacherId = getTeacherId();
      return Api.delete(dispatch, `/api/professores/${teacherId}/favoritos/${id}`)
        .then(response => {
          dispatch({ ...response, type: ChallengeActions.DELETED });
          dispatch(SnackbarActions.open('Desafio removido'));
          dispatch(ChallengesActions.loadSaved());
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
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
      const teacherId = getTeacherId();
      const data = {
        'favourite[challenge]': id,
      };
      return Api.post(dispatch, `/api/professores/${teacherId}/favoritos`, data)
        .then(response => {
          dispatch({ ...response, type: ChallengeActions.SAVED });
          dispatch(SnackbarActions.open('Desafio salvo'));
          dispatch(ChallengesActions.loadSaved());
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
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
        .then(response => {
          history.goBack();
          dispatch({ ...response, type: ChallengeActions.SENT_RESULT });
          dispatch(SnackbarActions.open('Desafio salvo'));
          dispatch(ChallengeActions.loadResults(slug));
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
};

export default ChallengeActions;
