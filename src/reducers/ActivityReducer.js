import ActivityActions from '../actions/ActivityActions';

const initialState = {};

function ActivityReducer(state = initialState, action) {
  let newState;
  const slug = `${action.slug1}_${action.slug2}`;

  switch (action.type) {
    case ActivityActions.LOAD:
      newState = { ...state };
      newState[slug] = null;
      return newState;

    case ActivityActions.LOADED:
      newState = { ...state };
      newState[slug] = action.data;
      return newState;

    default:
      return state;
  }
}

export default ActivityReducer;
