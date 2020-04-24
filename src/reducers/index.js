import { combineReducers } from 'redux';
import ActivityReducer from './ActivityReducer';
import AlertReducer from './AlertReducer';
import BodyReducer from './BodyReducer';
import ChallengeReducer from './ChallengeReducer';
import ChallengesReducer from './ChallengesReducer';
import CollectionReducer from './CollectionReducer';
import CollectionsReducer from './CollectionsReducer';
import ConfirmReducer from './ConfirmReducer';
import FiltersReducer from './FiltersReducer';
import HomeReducer from './HomeReducer';
import KnowledgeMatrixReducer from './KnowledgeMatrixReducer';
import LearningObjectivesReducer from './LearningObjectivesReducer';
import MethodologiesReducer from './MethodologiesReducer';
import ProfileReducer from './ProfileReducer';
import RatingReducer from './RatingReducer';
import RoadmapReducer from './RoadmapReducer';
import SequenceReducer from './SequenceReducer';
import SequencesReducer from './SequencesReducer';
import SnackbarReducer from './SnackbarReducer';
import SustainableDevGoalsReducer from './SustainableDevGoalsReducer';

export default combineReducers({
  ActivityReducer,
  AlertReducer,
  BodyReducer,
  ChallengeReducer,
  ChallengesReducer,
  CollectionReducer,
  CollectionsReducer,
  ConfirmReducer,
  FiltersReducer,
  HomeReducer,
  KnowledgeMatrixReducer,
  LearningObjectivesReducer,
  MethodologiesReducer,
  ProfileReducer,
  RatingReducer,
  RoadmapReducer,
  SequenceReducer,
  SequencesReducer,
  SnackbarReducer,
  SustainableDevGoalsReducer,
});
