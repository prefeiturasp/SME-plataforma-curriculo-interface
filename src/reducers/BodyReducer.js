import BodyActions from '../actions/BodyActions';

const initialState = {
  hasModal: false,
  hasPopup: false,
  isHome: false,
  isLoading: false,
  message: '',
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

    case BodyActions.HIDE_MODAL:
      return {
        ...state,
        hasModal: false,
      };

    case BodyActions.SHOW_MODAL:
      return {
        ...state,
        hasModal: true,
        message: action.message,
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
