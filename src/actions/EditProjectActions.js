import Api from 'data/Api';
import AlertActions from 'actions/AlertActions';
import getProjectFiltersQueryString, {
  getSearchQueryString,
} from 'data/getProjectFiltersQueryString';
import { API_URL } from 'data/constants';
import { history } from 'index';
import axios from 'axios';


const EditProjectActions = {
  LOAD: 'EditProjectActions.LOAD',
	LOADED: 'EditProjectActions.LOADED',
	LOAD_OPTIONS: 'EditProjectActions.LOAD_OPTIONS',
	LOADED_OPTIONS: 'EditProjectActions.LOADED_OPTIONS',
  LOADED_LEARNING_OBJECTIVES: 'EditProjectActions.LOADED_LEARNING_OBJECTIVES',
  LOADED_SCHOOLS: 'EditProjectActions.LOADED_SCHOOLS',

  load(slug) {
		return Api.simpleGet(
			`/api/projects/${slug}`,
			EditProjectActions.LOAD,
			EditProjectActions.LOADED
		);
	},
	loadOptions() {
    return dispatch => {
      dispatch({type: EditProjectActions.LOAD_OPTIONS })
      Api.get(dispatch, `/api/project_select_options`)
        .then(response =>
          dispatch({ ...response, type: EditProjectActions.LOADED_OPTIONS })
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
          dispatch({ ...response, type: EditProjectActions.LOADED_LEARNING_OBJECTIVES })
      )
    };
  },
  getSchools(regionalEducationBoardId) {
    return dispatch => {
      Api.get(dispatch, `/api/schools?regional_education_board_id=${regionalEducationBoardId}`)
        .then(response =>
          dispatch({ ...response, type: EditProjectActions.LOADED_SCHOOLS })
      )
    };
  },
  update(project, slug) {
    return dispatch => {
      axios.put(`${API_URL}/api/projects/${slug}`, project, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
        dispatch(AlertActions.open(`Projeto atualizado com sucesso.`));
        history.push(`/perfil`);
      })
      .catch(err => dispatch(AlertActions.open(`Ocorreu um erro: ${err}`)));
    };
  },
  alertError(error) {
    return dispatch => {
      return dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
    };
  },
};

export default EditProjectActions;
