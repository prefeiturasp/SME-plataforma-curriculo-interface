const ChallengeActions = {
  DELETE: 'ChallengesActions.DELETE',
  DELETED: 'ChallengesActions.DELETED',

  delete(id) {
    return dispatch => {
      dispatch({ type: ChallengeActions.DELETE });

      setTimeout(() => {
        dispatch({ type: ChallengeActions.DELETED });
      }, 1000);
    };
  },
};

export default ChallengeActions;
