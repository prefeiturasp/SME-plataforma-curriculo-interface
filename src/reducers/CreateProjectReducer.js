import CreateProjectActions from 'actions/CreateProjectActions';
import getTeacherId from 'data/getTeacherId';


const initialState = {
  teacherId: getTeacherId(),
  curricularComponents: [],
  knowledgeMatrices: [],
  studentProtagonisms: [],
  segments: [],
  years: [],
  learningObjectives: [],
  dres: [],
  schools: [],
  isLoading: true,
};

function CreateProjectReducer(state = initialState, action) {
  switch (action.type) {
    case CreateProjectActions.LOAD:
      return {
        ...state,
        teacherId: getTeacherId(),
        curricularComponents: [],
        knowledgeMatrices: [],
        studentProtagonisms: [],
        segments: [],
        stages: [],
        years: [],
        learningObjectives: [],
        dres: [],
        schools: [],
        isLoading: true,
      };

    case CreateProjectActions.LOADED:
      return {
        ...state,
        curricularComponents: action.data.curricular_components,
        knowledgeMatrices: action.data.knowledge_matrices,
        studentProtagonisms: action.data.student_protagonisms,
        segments: action.data.segments,
        stages: action.data.stages,
        years: action.data.years,
        dres: action.data.regional_education_boards,
        isLoading: false,
      }

    case CreateProjectActions.LOADED_CURRICULAR_COMPONENTS:
      return {
        ...state,
        curricularComponents: action.data,
      };

    case CreateProjectActions.LOADED_KNOWLEDGE_MATRICES:
      return {
        ...state,
        knowledgeMatrices: action.data,
      };

    case CreateProjectActions.LOADED_STUDENT_PROTAGONISMS:
      return {
        ...state,
        studentProtagonisms: action.data,
      };

    case CreateProjectActions.LOADED_SEGMENTS:
      return {
        ...state,
        segments: action.data,
      };

    case CreateProjectActions.LOADED_STAGES:
      return {
        ...state,
        stages: action.data,
      };

    case CreateProjectActions.LOADED_YEARS:
      return {
        ...state,
        years: action.data,
      };

    case CreateProjectActions.LOADED_LEARNING_OBJECTIVES:
      return {
        ...state,
        learningObjectives: action.data,
      };

    case CreateProjectActions.LOADED_DRES:
      return {
        ...state,
        dres: action.data,
      };

    case CreateProjectActions.LOADED_SCHOOLS:
      return {
        ...state,
        schools: action.data,
      };

    default:
      return state;
  }
}

export default CreateProjectReducer;
