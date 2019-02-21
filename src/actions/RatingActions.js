import AlertActions from './AlertActions';
import Api from 'data/Api';
import getTeacherId from 'data/getTeacherId';

const RatingActions = {
  LOAD: 'RatingActions.LOAD',
  LOADED: 'RatingActions.LOADED',
  SAVED: 'RatingActions.SAVED',

  load(slug) {
    return Api.simpleGet(
      `/api/avaliacao_criterios`,
      RatingActions.LOAD,
      RatingActions.LOADED
    );
  },
  save(slug, answers) {
    return dispatch => {
      const ratings = [];

      for (let id in answers) {
        ratings.push({ rating_id: id, score: answers[id] });
      }

      const data = {
        activity_sequence_rating: {
          teacher_id: getTeacherId(),
          ratings,
        },
      };

      return Api.post(dispatch, `/api/sequencias/${slug}/avaliacao`, data, true)
        .then(response => dispatch({ ...response, type: RatingActions.SAVED }))
        .then(response =>
          dispatch(AlertActions.open('Avaliação salva com sucesso!'))
        )
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
};

export default RatingActions;
