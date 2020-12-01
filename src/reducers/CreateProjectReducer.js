import CreateProjectActions from 'actions/CreateProjectActions';
import getTeacherId from 'data/getTeacherId';
import getTeacherBlocked from 'data/getTeacherBlocked';

const initialState = {
  teacherId: getTeacherId(),
  blocked: getTeacherBlocked(),
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
        blocked: getTeacherBlocked(),
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

    case CreateProjectActions.LOADED_LEARNING_OBJECTIVES:
      return {
        ...state,
        learningObjectives: action.data,
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
