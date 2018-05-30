import { combineReducers } from 'redux';
import ActivityReducer from './ActivityReducer';
import FiltersReducer from './FiltersReducer';
import SequencesReducer from './SequencesReducer';

export default combineReducers({
  ActivityReducer,
  FiltersReducer,
  SequencesReducer,
});
