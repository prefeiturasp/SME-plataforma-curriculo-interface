import RoadpmapActions from 'actions/RoadmapActions';

const initialState = {
  items: [],
};

function RoadmapReducer(state = initialState, action) {
  switch (action.type) {
    case RoadpmapActions.LOADED:
      return {
        ...state,
        items: action.data,
      };

    default:
      return state;
  }
}

export default RoadmapReducer;
