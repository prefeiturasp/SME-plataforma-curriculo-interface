import Api from 'data/Api';
import getTeacherId from 'data/getTeacherId';

const ChallengesActions = {
  LOAD_FINISHED: 'ChallengesActions.LOAD_FINISHED',
  LOAD_ONGOING: 'ChallengesActions.LOAD_ONGOING',
  LOAD_SAVED: 'ChallengesActions.LOAD_SAVED',
  LOADED_FINISHED: 'ChallengesActions.LOADED_FINISHED',
  LOADED_ONGOING: 'ChallengesActions.LOADED_ONGOING',
  LOADED_SAVED: 'ChallengesActions.LOADED_SAVED',

  loadAll() {
    return dispatch => {
      const teacherId = getTeacherId();
      return Api.get(dispatch, '/api/desafios/andamento')
        .then(response => dispatch({ ...response, type: ChallengesActions.LOADED_ONGOING }))
        .then(finished => Api.get(dispatch, '/api/desafios/finalizados'))
        .then(response => dispatch({ ...response, type: ChallengesActions.LOADED_FINISHED }))
        .then(saved => Api.get(dispatch, `/api/professores/${teacherId}/favoritos`))
        .then(response => dispatch({ ...response, type: ChallengesActions.LOADED_SAVED }));
    };
  },
  loadSaved() {
    const teacherId = getTeacherId();
    console.log(teacherId);
    return Api.simpleGet(
      `/api/professores/${teacherId}/favoritos`,
      ChallengesActions.LOAD_SAVED,
      ChallengesActions.LOADED_SAVED
    );
  },
  loadFinished() {
    return Api.simpleGet(
      '/api/desafios/finalizados',
      ChallengesActions.LOAD_FINISHED,
      ChallengesActions.LOADED_FINISHED
    );
  },
  loadOngoing() {
    return Api.simpleGet(
      '/api/desafios/andamento',
      ChallengesActions.LOAD_ONGOING,
      ChallengesActions.LOADED_ONGOING
    );
  },
};

export default ChallengesActions;
