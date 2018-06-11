import { combineReducers } from 'redux';
import ActivityReducer from './ActivityReducer';
import FiltersReducer from './FiltersReducer';
import KnowledgeMatrixReducer from './KnowledgeMatrixReducer';
import RoadmapReducer from './RoadmapReducer';
import SequencesReducer from './SequencesReducer';
import SustainableDevGoalsReducer from './SustainableDevGoalsReducer';

export default combineReducers({
  ActivityReducer,
  FiltersReducer,
  KnowledgeMatrixReducer,
  RoadmapReducer,
  SequencesReducer,
  SustainableDevGoalsReducer,
});
