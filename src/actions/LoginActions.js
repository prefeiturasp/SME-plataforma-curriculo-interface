import Api from 'data/Api';
import AlertActions from 'actions/AlertActions';
import ProfileActions from 'actions/ProfileActions';
import { history } from 'index';

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
            'accessToken',
            response.headers.get('Authorization'),
          );

          history.goBack();
          dispatch({ type: LoginActions.LOGGED_IN });
          dispatch(ProfileActions.load());
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
  logout() {
    return dispatch => {
      sessionStorage.removeItem('accessToken');
      dispatch({ type: LoginActions.LOGOUT });

      return Api.get(dispatch, '/api/logout')
        .then(response => {
          dispatch({ type: LoginActions.LOGGED_OUT });

          if (history.location.pathname.match(/perfil|colecao/)) {
            history.push('/');
          }
        });
    };
  },
};

export default LoginActions;
