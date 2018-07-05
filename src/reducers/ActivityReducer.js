import ActivityActions from '../actions/ActivityActions';

const initialState = {
  currActivity: null,
};

function ActivityReducer(state = initialState, action) {
  switch (action.type) {
    case ActivityActions.LOAD:
      return {
        ...state,
      };

    case ActivityActions.LOADED:
      return {
        ...state,
        currActivity: action.data,
      };

    default:
      return state;
  }
}

export default ActivityReducer;
