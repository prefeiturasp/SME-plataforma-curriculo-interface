import BodyActions from '../actions/BodyActions';

const initialState = {
  hasMobileMenu: false,
  hasAlert: false,
  hasModal: false,
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

    case BodyActions.HIDE_MOBILE_MENU:
      return {
        ...state,
        hasMobileMenu: false,
        hasModal: false,
      };

    case BodyActions.SHOW_MOBILE_MENU:
      return {
        ...state,
        hasMobileMenu: true,
        hasModal: true,
      };

    case BodyActions.HIDE_ALERT:
      return {
        ...state,
        hasAlert: false,
      };

    case BodyActions.SHOW_ALERT:
      return {
        ...state,
        hasAlert: true,
        message: action.message,
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
      };

    default:
      return state;
  }
}

export default BodyReducer;
