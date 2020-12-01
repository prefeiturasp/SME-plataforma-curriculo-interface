import Api from 'data/Api';
import AlertActions from './AlertActions';
import { API_URL } from 'data/constants';
import { history } from 'index';
import axios from 'axios';

const CreateProjectActions = {
  LOAD: 'CreateProjectActions.LOAD',
  LOADED: 'CreateProjectActions.LOADED',
  LOADED_LEARNING_OBJECTIVES: 'CreateProjectActions.LOADED_LEARNING_OBJECTIVES',
  LOADED_SCHOOLS: 'CreateProjectActions.LOADED_SCHOOLS',

  load() {
    return dispatch => {
      dispatch({type: CreateProjectActions.LOAD })
      Api.get(dispatch, `/api/project_select_options`)
        .then(response =>
          dispatch({ ...response, type: CreateProjectActions.LOADED })
      )
    };
  },
  getLearningObjectives (curricularComponentIds, yearIds) {
    let queryString = "";
    for (let index = 0; index < curricularComponentIds.length; index++) {
      if (queryString.length < 0) {
        queryString = `curricular_component_ids[]=${curricularComponentIds[index]}`
      } else {
        queryString = `${queryString}&curricular_component_ids[]=${curricularComponentIds[index]}`
      }
    }
    for (let index = 0; index < yearIds.length; index++) {
      if (queryString.length < 0) {
        queryString = `year_ids[]=${yearIds[index]}`
      } else {
        queryString = `${queryString}&year_ids[]=${yearIds[index]}`
      }
    }
    return dispatch => {
      Api.get(dispatch, `/api/learning_objectives?${queryString}`)
        .then(response =>
          dispatch({ ...response, type: CreateProjectActions.LOADED_LEARNING_OBJECTIVES })
      )
    };
  },
  getSchools(regionalEducationBoardId) {
    return dispatch => {
      Api.get(dispatch, `/api/schools?regional_education_board_id=${regionalEducationBoardId}`)
        .then(response =>
          dispatch({ ...response, type: CreateProjectActions.LOADED_SCHOOLS })
      )
    };
  },
  create(project) {
    return dispatch => {
      axios.post(`${API_URL}/api/projects`, project, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
        dispatch(AlertActions.open(`Projeto salvo com sucesso.`));
        history.push(`/perfil`);
      })
      .catch(err => dispatch(AlertActions.open(`Ocorreu um erro: ${err}`)));
    };
  },
  unauthorizedUser() {
    return dispatch => {
      dispatch(AlertActions.open(`Você precisa efetuar login para acessar essa página.`));
      history.push(`/`);
    };
  },
  blockedUser() {
    return dispatch => {
      dispatch(AlertActions.open(`Você está bloquado e não pode criar projetos no momento. Entre em contato com a Secretaria Municipal de Educação.`));
      history.push(`/`);
    };
  },
  alertError(error) {
    return dispatch => {
      return dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
    };
  },
};

export default CreateProjectActions;
