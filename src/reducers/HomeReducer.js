import HomeActions from 'actions/HomeActions';

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

    case HomeActions.TOGGLE_PREVIEW:
      return {
        ...state,
        items: state.items.map(item => {
          return {
            ...item,
            isExpanded: !item.isExpanded && item.id === action.id,
          };
        }),
      };

    default:
      return state;
  }
}

export default HomeReducer;
