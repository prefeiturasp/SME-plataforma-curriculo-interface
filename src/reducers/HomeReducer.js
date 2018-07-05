import HomeActions from '../actions/HomeActions';

const initialState = {
  items: [],
};

function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case HomeActions.LOAD:
      return {
        ...state,
      };
      
    case HomeActions.LOADED:
      return {
        ...state,
        items: action.data,
      };
  
    default:
      return state;
  }
}

export default HomeReducer;
