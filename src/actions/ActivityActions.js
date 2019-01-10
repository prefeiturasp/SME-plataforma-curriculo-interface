import BodyActions from './BodyActions';
import { API_URL } from 'data/constants';

const ActivityActions = {
  LOAD: 'ActivityActions.LOAD',
  LOADED: 'ActivityActions.LOADED',

  load(slug1, slug2) {
    const url = `${API_URL}/api/sequencias/${slug1}/atividades/${slug2}`;

    return dispatch => {
      dispatch({
        slug1,
        slug2,
        type: ActivityActions.LOAD,
      });
      fetch(url).then(response => {
        response.json().then(data => {
          dispatch(BodyActions.hideLoading());
          dispatch({
            data,
            slug1,
            slug2,
            type: ActivityActions.LOADED,
          });
        });
      });
    };
  },
};

export default ActivityActions;
