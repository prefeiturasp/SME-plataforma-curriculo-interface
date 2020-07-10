import SurveyFormActions from 'actions/SurveyFormActions';

const initialState = {
  surveyForm: {},
  contentBlocks: [],
  isLoading: false,
};

function SurveyFormReducer(state = initialState, action) {
  switch (action.type) {
    case SurveyFormActions.LOAD:
      return {
        ...state,
        surveyForm: {},
        contentBlocks: [],
        isLoading: true,
      };

    case SurveyFormActions.LOADED:
      return {
        ...state,
        surveyForm: action.data.survey_form,
        contentBlocks: action.data.survey_form_content_blocks,
        isLoading: false,
      };

    default:
      return state;
  }
}

export default SurveyFormReducer;
