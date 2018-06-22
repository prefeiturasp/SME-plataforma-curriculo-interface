import HomeActions from '../actions/HomeActions';

const initialState = {
  items: [],
};

function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case HomeActions.LOAD:
      return {
        ...state,
        isLoading: true,
      };
      
    case HomeActions.LOADED:
      return {
        ...state,
        isLoading: false,
        items: action.data,
      };
  
    default:
      return state;
  }
}

export default HomeReducer;
