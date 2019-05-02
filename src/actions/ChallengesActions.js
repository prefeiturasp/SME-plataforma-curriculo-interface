import Api from 'data/Api';

const performed = [
  {
    id: 1,
  },
];

const ChallengesActions = {
  LOAD_FINISHED: 'ChallengesActions.LOAD_FINISHED',
  LOAD_ONGOING: 'ChallengesActions.LOAD_ONGOING',
  LOAD_PERFORMED: 'ChallengesActions.LOAD_PERFORMED',
  LOADED_FINISHED: 'ChallengesActions.LOADED_FINISHED',
  LOADED_ONGOING: 'ChallengesActions.LOADED_ONGOING',
  LOADED_PERFORMED: 'ChallengesActions.LOADED_PERFORMED',

  loadPerformed() {
    return dispatch => {
      dispatch({ type: ChallengesActions.LOAD_PERFORMED });

      setTimeout(() => {
        dispatch({ data: performed, type: ChallengesActions.LOADED_PERFORMED });
      }, 1000);
    };
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
