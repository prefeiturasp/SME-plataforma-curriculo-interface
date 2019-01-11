import ActivityActions from 'actions/ActivityActions';
import BodyActions from 'actions/BodyActions';
import CollectionActions from 'actions/CollectionActions';
import HomeActions from 'actions/HomeActions';
import KnowledgeMatrixActions from 'actions/KnowledgeMatrixActions';
import LearningObjectivesActions from 'actions/LearningObjectivesActions';
import ProfileActions from 'actions/ProfileActions';
import RoadmapActions from 'actions/RoadmapActions';
import SequencesActions from 'actions/SequencesActions';
import SustainableDevGoalsActions from 'actions/SustainableDevGoalsActions';

const initialState = {
  hasMobileMenu: false,
  isLoading: false,
};

function BodyReducer(state = initialState, action) {
  switch (action.type) {
    case ActivityActions.LOADED:
    case BodyActions.HIDE_LOADING:
    case HomeActions.LOADED:
    case KnowledgeMatrixActions.LOADED:
    case LearningObjectivesActions.LOADED:
    case ProfileActions.LOADED:
    case CollectionActions.LOADED_SEQUENCES:
    case RoadmapActions.LOADED:
    case SequencesActions.LOADED:
    case SequencesActions.LOADED_ITEM:
    case SequencesActions.LOADED_MORE:
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
