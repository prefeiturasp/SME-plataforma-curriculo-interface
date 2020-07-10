import Api from 'data/Api';
import AlertActions from './AlertActions';
import getTeacherId from 'data/getTeacherId';
import { API_URL } from 'data/constants';
import { history } from 'index';

const TeacherSurveyFormsActions = {
  NEW: 'TeacherSurveyFormsActions.NEW',
  LOADED: 'TeacherSurveyFormsActions.LOADED',
  ANSWERS_LOADED: 'TeacherSurveyFormsActions.ANSWERS_LOADED',


  new(surveyFormId) {
    const teacherId = getTeacherId();

    return Api.simpleGet(
      `/api/survey_form_answers/new?teacher_id=${teacherId}&survey_form_id=${surveyFormId}`,
      TeacherSurveyFormsActions.NEW,
      TeacherSurveyFormsActions.LOADED
    );
  },
  create(surveyFormAnswer) {
    return dispatch => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(surveyFormAnswer)
      };
      fetch(`${API_URL}/api/survey_form_answers`, requestOptions)
        .then(response => {
          dispatch(AlertActions.open(`Resposta salva com sucesso.`));
          history.push(`/consultas-publicas`);
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
  loadFinishedFormIds() {
    return dispatch => {
      const teacherId = getTeacherId();

      return Api.get(dispatch, `/api/professores/${teacherId}/todas_respostas`)
        .then(response =>
          dispatch({ ...response, type: TeacherSurveyFormsActions.ANSWERS_LOADED })
        )
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
  alertError(error) {
    return dispatch => {
      return dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
    };
  },
};

export default TeacherSurveyFormsActions;
