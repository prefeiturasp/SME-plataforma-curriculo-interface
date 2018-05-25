import { combineReducers } from 'redux';
import FiltersReducer from './FiltersReducer';
import SequencesReducer from './SequencesReducer';

export default combineReducers({
  FiltersReducer,
  SequencesReducer,
});
