import { combineReducers } from 'redux';
import ActivityReducer from './ActivityReducer';
import BodyReducer from './BodyReducer';
import FiltersReducer from './FiltersReducer';
import KnowledgeMatrixReducer from './KnowledgeMatrixReducer';
import RoadmapReducer from './RoadmapReducer';
import SequencesReducer from './SequencesReducer';
import SustainableDevGoalsReducer from './SustainableDevGoalsReducer';

export default combineReducers({
  ActivityReducer,
  BodyReducer,
  FiltersReducer,
  KnowledgeMatrixReducer,
  RoadmapReducer,
  SequencesReducer,
  SustainableDevGoalsReducer,
});
