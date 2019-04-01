import Api from 'data/Api';
import AlertActions from 'actions/AlertActions';
import { history } from 'index';

const LoginActions = {
  login(username, password) {
    return dispatch => {
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

          history.push('/perfil');
        })
        .catch(error =>
          dispatch(AlertActions.open(`Ocorreu um erro: ${error}`))
        );
    };
  },
  logout() {
    return dispatch => {
      Api.get(dispatch, '/api/logout');
      sessionStorage.removeItem('accessToken');

      if (history.location.pathname.match(/perfil|colecao/)) {
        history.push('/');
      }
    };
  },
};

export default LoginActions;
