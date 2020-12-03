import Api from 'data/Api';
import getTeacherId from 'data/getTeacherId';
import axios from 'axios';
import AlertActions from './AlertActions';
import { API_URL } from 'data/constants';

const ProjectActions = {
  LOAD: 'ProjectActions.LOAD',
  LOADED: 'ProjectActions.LOADED',

  load(slug) {
    return Api.simpleGet(
      `/api/projects/${slug}`,
      ProjectActions.LOAD,
      ProjectActions.LOADED
    );
  },
  createComment(comment) {
    return (dispatch) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(comment)
      };
      fetch(`${API_URL}/api/comments`, requestOptions)
        .then(response => {
          dispatch(AlertActions.open(`Comentário salvo com sucesso.`));
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
  deleteComment(comment_id) {
    return (dispatch) => {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id: comment_id})
      };
      fetch(`${API_URL}/api/comments/${comment_id}`, requestOptions)
        .then(response => {
          dispatch(AlertActions.open(`Comentário apagado com sucesso.`));
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  }
};

export default ProjectActions;
