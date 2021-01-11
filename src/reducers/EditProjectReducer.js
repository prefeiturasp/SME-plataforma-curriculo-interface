import EditProjectActions from 'actions/EditProjectActions';
import getTeacherId from 'data/getTeacherId';
import getTeacherBlocked from 'data/getTeacherBlocked';
import isLogged from 'data/isLogged';

const initialState = {
  isLogged: true,
  isLoading: true,
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
  project: null,
};

function EditProjectReducer(state = initialState, action) {
  switch (action.type) {
    case EditProjectActions.LOAD:
      return {
        ...state,
        teacherId: getTeacherId(),
        blocked: getTeacherBlocked(),
        isLogged: isLogged(),
        isLoading: true,
				project: null,
      };

    case EditProjectActions.LOADED:
      return {
				...state,
        project: action.data,
        isLoading: false,
      }

    case EditProjectActions.LOAD_OPTIONS:
      return {
        ...state,
        isLoading: true,
        curricularComponents: [],
        knowledgeMatrices: [],
        studentProtagonisms: [],
        segments: [],
        stages: [],
        years: [],
        learningObjectives: [],
        dres: [],
        schools: [],
      }

    case EditProjectActions.LOADED_OPTIONS:
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

    case EditProjectActions.LOADED_LEARNING_OBJECTIVES:
      return {
        ...state,
        learningObjectives: action.data,
      };

    case EditProjectActions.LOADED_SCHOOLS:
      return {
        ...state,
        schools: action.data,
      };

    default:
      return state;
  }
}

export default EditProjectReducer;
