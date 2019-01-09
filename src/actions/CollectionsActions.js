import AlertActions from './AlertActions';
import Api from 'data/Api';

function getTeacherId() {
  return sessionStorage.getItem('teacherId');
}

const CollectionsActions = {
  LOAD: 'CollectionsActions.LOAD',
  LOADED: 'CollectionsActions.LOADED',

  load() {
    // return { type: 'NOTHING' };
    return dispatch => {
      dispatch({ type: CollectionsActions.LOAD });
      const teacherId = getTeacherId();
      return Api.get(dispatch, `/api/professores/${teacherId}/colecoes`)
        .then(response =>
          dispatch({ ...response, type: CollectionsActions.LOADED })
        )
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro.')));
    };
  },
};

export default CollectionsActions;
