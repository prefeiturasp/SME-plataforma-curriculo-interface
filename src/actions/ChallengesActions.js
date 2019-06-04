import Api from 'data/Api';
import getTeacherId from 'data/getTeacherId';

const ChallengesActions = {
  LOAD_FINISHED: 'ChallengesActions.LOAD_FINISHED',
  LOAD_ONGOING: 'ChallengesActions.LOAD_ONGOING',
  LOAD_SAVED: 'ChallengesActions.LOAD_SAVED',
  LOADED_FINISHED: 'ChallengesActions.LOADED_FINISHED',
  LOADED_ONGOING: 'ChallengesActions.LOADED_ONGOING',
  LOADED_SAVED: 'ChallengesActions.LOADED_SAVED',

  loadSaved() {
    const teacherId = getTeacherId();
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
