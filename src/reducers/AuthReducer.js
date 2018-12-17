import AuthActions from 'actions/AuthActions';

const initialState = {
  hasSetup: false,
  hasLogged: false,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AuthActions.LOGGED_IN:
      return {
        hasSetup: true,
        hasLogged: true,
      };

    case AuthActions.LOGOUT:
      sessionStorage.removeItem('user');

      return {
        hasSetup: true,
        hasLogged: false,
      };

    case AuthActions.SETUP:
      return {
        hasSetup: true,
        hasLogged: sessionStorage.getItem('user') !== null,
      };

    default:
      return state;
  }
}

export default AuthReducer;
