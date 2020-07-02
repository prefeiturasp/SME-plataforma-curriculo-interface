import AlertActions from './AlertActions';
import Api from 'data/Api';

function getTeacherId() {
  return localStorage.getItem('teacherId');
}

const CollectionsActions = {
  LOAD: 'CollectionsActions.LOAD',
  LOADED: 'CollectionsActions.LOADED',

  load() {
    return dispatch => {
      dispatch({ type: CollectionsActions.LOAD });
      const teacherId = getTeacherId();
      return Api.get(dispatch, `/api/professores/${teacherId}/colecoes`)
        .then(response =>
          dispatch({ ...response, type: CollectionsActions.LOADED })
        )
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
};

export default CollectionsActions;
