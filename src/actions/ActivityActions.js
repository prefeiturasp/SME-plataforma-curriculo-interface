import BodyActions from './BodyActions';
import { getFullUrl } from './loadData';

const ActivityActions = {
  LOAD: 'ActivityActions.LOAD',
  LOADED: 'ActivityActions.LOADED',
  
  load(slug1, slug2) {
    const url = `/api/sequencias/${slug1}/atividades/${slug2}`;

    return dispatch => {
      dispatch({
        slug1,
        slug2,
        type: ActivityActions.LOAD,
      });
      fetch(getFullUrl(url))
        .then(response => {
          response.json().then(data => {
            dispatch({ type: BodyActions.HIDE_LOADING });
            dispatch({
              data,
              slug1,
              slug2,
              type: ActivityActions.LOADED,
            });
          })
        });
    };
  },
};

export default ActivityActions;
