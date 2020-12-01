import ActivityActions from 'actions/ActivityActions';
import BodyActions from 'actions/BodyActions';
import ChallengeActions from 'actions/ChallengeActions';
import ChallengesActions from 'actions/ChallengesActions';
import ConsultationsActions from 'actions/ConsultationsActions';
import CollectionActions from 'actions/CollectionActions';
import CollectionsActions from 'actions/CollectionsActions';
import HomeActions from 'actions/HomeActions';
import KnowledgeMatrixActions from 'actions/KnowledgeMatrixActions';
import LearningObjectivesActions from 'actions/LearningObjectivesActions';
import RoadmapActions from 'actions/RoadmapActions';
import SequenceActions from 'actions/SequenceActions';
import SequencesActions from 'actions/SequencesActions';
import ProjectsActions from 'actions/ProjectsActions';
import ProjectActions from 'actions/ProjectActions';
import SustainableDevGoalsActions from 'actions/SustainableDevGoalsActions';

const initialState = {
  hasMobileMenu: false,
  isLoading: false,
};

function BodyReducer(state = initialState, action) {
  switch (action.type) {
    case ActivityActions.LOADED:
    case BodyActions.HIDE_LOADING:
    case ChallengeActions.LOADED:
    case ChallengesActions.LOADED:
    case CollectionActions.LOADED_SEQUENCES:
    case CollectionsActions.LOADED:
    case ConsultationsActions.LOADED:
    case HomeActions.LOADED:
    case KnowledgeMatrixActions.LOADED:
    case LearningObjectivesActions.LOADED:
    case RoadmapActions.LOADED:
    case SequenceActions.LOADED:
    case SequencesActions.LOADED:
    case SequencesActions.LOADED_MORE:
    case ProjectActions.LOADED:
    case ProjectsActions.LOADED:
    case ProjectsActions.LOADED_MORE:
    case SustainableDevGoalsActions.LOADED:
      return {
        ...state,
        isLoading: false,
      };

    case BodyActions.SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case BodyActions.HIDE_MOBILE_MENU:
      return {
        ...state,
        hasMobileMenu: false,
        hasModal: false,
      };

    case BodyActions.SHOW_MOBILE_MENU:
      return {
        ...state,
        hasMobileMenu: true,
        hasModal: true,
      };

    default:
      return state;
  }
}

export default BodyReducer;
