import Api from 'data/Api';
import AlertActions from 'actions/AlertActions';
import ProfileActions from 'actions/ProfileActions';

const LoginActions = {
  LOGIN: 'LoginActions.LOGIN',
  LOGOUT: 'LoginActions.LOGOUT',
  LOGGED_IN: 'LoginActions.LOGGED_IN',
  LOGGED_OUT: 'LoginActions.LOGGED_OUT',

  login(username, password) {
    return dispatch => {
      dispatch({ type: LoginActions.LOGIN });

      const data = {
        'user[login]': username,
        'user[password]': password,
      };

      return Api.post(dispatch, `/api/login`, data)
        .then(response => {
          sessionStorage.setItem(
            'user',
            JSON.stringify({
              'access-token': response['access-token'],
              client: response.client,
              uid: response.uid,
              expiry: response.expiry,
              'token-type': 'Bearer',
            })
          );

          dispatch({ type: LoginActions.LOGGED_IN });
          dispatch(ProfileActions.load());
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
  logout() {
    sessionStorage.removeItem('user');
    return Api.simpleGet(
      '/api/logout',
      LoginActions.LOGOUT,
      LoginActions.LOGGED_OUT
    );
  },
};

export default LoginActions;
