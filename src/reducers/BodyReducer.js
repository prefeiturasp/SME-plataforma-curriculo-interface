import BodyActions from '../actions/BodyActions';

const initialState = {
  hasPopup: false,
  isHome: false,
  isLoading: false,
};

function BodyReducer(state = initialState, action) {
  switch (action.type) {
    case BodyActions.ENTER_HOME:
      return {
        ...state,
        isHome: true,
      };

    case BodyActions.EXIT_HOME:
      return {
        ...state,
        isHome: false,
      };

    case BodyActions.HIDE_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case BodyActions.SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case BodyActions.HIDE_POPUP:
      return {
        ...state,
        hasPopup: false,
      };

    case BodyActions.SHOW_POPUP:
      return {
        ...state,
        hasPopup: true,
      };

    default:
      return state;
  }
}

export default BodyReducer;
