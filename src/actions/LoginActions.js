import Api from 'data/Api';
import AlertActions from 'actions/AlertActions';
import { history } from 'index';

const LoginActions = {
  LOGGED_IN: 'LoginActions.LOGGED_IN',
  LOGGED_OUT: 'LoginActions.LOGGED_OUT',

  login(username, password) {
    return dispatch => {
      const data = {
        'user[login]': username,
        'user[password]': password,
      };

      return Api.post(dispatch, `/api/login`, data)
        .then(response => {
          localStorage.setItem(
            'accessToken',
            response.headers.get('Authorization'),
          );

          history.push('/perfil');
          dispatch({ type: LoginActions.LOGGED_IN });
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
  logout() {
    return dispatch => {
      Api.get(dispatch, '/api/logout');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('blocked');
      localStorage.removeItem('teacherId');
      dispatch({ type: LoginActions.LOGGED_OUT });

      if (history.location.pathname.match(/perfil|colecao/)) {
        history.push('/');
      }
    };
  },
};

export default LoginActions;
