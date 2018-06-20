import RoadpmapActions from '../actions/RoadmapActions';

const initialState = {
  items: [],
};

function RoadmapReducer(state = initialState, action) {
  switch (action.type) {
    case RoadpmapActions.LOAD:
      return {
        ...state,
        isLoading: true
      };

    case RoadpmapActions.LOADED:
      return {
        ...state,
        isLoading: false,
        items: action.data
      };

    default:
      return state;
  }
}

export default RoadmapReducer;
