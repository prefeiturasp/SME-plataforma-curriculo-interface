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
          console.log(response, response.headers.get('Authorization'));
          for (let pair of response.headers.entries()) {
            console.log(pair[0]+ ': '+ pair[1]);
          }

          sessionStorage.setItem(
            'accessToken',
            response.headers.get('Authorization'),
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
    sessionStorage.removeItem('accessToken');
    return Api.simpleGet(
      '/api/logout',
      LoginActions.LOGOUT,
      LoginActions.LOGGED_OUT
    );
  },
};

export default LoginActions;
