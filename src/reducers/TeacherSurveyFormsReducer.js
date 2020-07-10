import TeacherSurveyFormsActions from 'actions/TeacherSurveyFormsActions';

const initialState = {
  surveyFormAnswer: {},
  isLoading: false,
  answersFinished: [],
};

function TeacherSurveyFormsReducer(state = initialState, action) {
  switch (action.type) {
    case TeacherSurveyFormsActions.NEW:
      return {
        ...state,
        surveyFormAnswer: {},
        isLoading: true,
      };

    case TeacherSurveyFormsActions.LOADED:
      return {
        ...state,
        surveyFormAnswer: action.data,
        isLoading: false,
      };

    case TeacherSurveyFormsActions.ANSWERS_LOADED:
      return {
        ...state,
        answersFinished: action.data,
      };

    default:
      return state;
  }
}

export default TeacherSurveyFormsReducer;
