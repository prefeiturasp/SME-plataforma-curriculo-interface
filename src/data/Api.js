import AlertActions from 'actions/AlertActions';
import BodyActions from 'actions/BodyActions';
import parse from 'parse-link-header';
import { API_URL } from 'data/constants';
import { history } from 'index';

function getNextPage(headers) {
  if (headers.has('link')) {
    const parsed = parse(headers.get('link'));
    return parsed.next ? parsed.next.url : null;
  }

  return null;
}

function getPromise(dispatch, func, method, url, data, isJson) {
  return new Promise((resolve, reject) => {
    func
      .apply(this, [method, url, data, isJson])
      .then(response => {
        if (response.status === 401) { // Unauthorized
          sessionStorage.removeItem('user');
          history.push('/');
          dispatch(BodyActions.hideLoading());
          dispatch(AlertActions.open('Ocorreu um erro de autenticação. Por favor tente logar novamente.'));
        } else {
          response.text().then(text => {
            if (text.length) {
              try {
                const data = JSON.parse(text);
                const { headers } = response;
                const nextPage = getNextPage(headers);
                const totalItems = headers.has('total')
                  ? headers.get('total')
                  : 0;
                if (data.errors) {
                  reject(data.errors.message);
                } else {
                  resolve({ data, headers, nextPage, totalItems });
                }
              } catch(e) {
                console.error('error', e);
                reject(e);
              }
            } else {
              resolve({});
            }
          });
        }
      })
      .catch(reject);
  });
}

function doRequest(method, url, data, isJson) {
  const options = { method };
  const user = sessionStorage.getItem('user');

  if (user) {
    options.headers = JSON.parse(user);
  }

  if (data) {
    if (isJson) {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(data);
    } else {
      const body = new FormData();
      for (const key in data) {
        body.append(key, data[key]);
      }
      options.body = body;
    }
  }

  const fullUrl = url.match(/http/) ? url : API_URL + url;

  return fetch(fullUrl, options)
    .then(response => response)
    .catch(error => {
      throw error;
    });
}

class Api {
  static simpleGet(url, onCall, onSuccess) {
    return dispatch => {
      if (onCall) {
        dispatch({ type: onCall });
      }

      return Api.get(dispatch, url)
        .then(response => dispatch({ ...response, type: onSuccess }))
        .catch(error => dispatch(AlertActions.open(`Ocorreu um erro: ${error}`)));
    };
  }

  static get(dispatch, url) {
    return getPromise(dispatch, doRequest, 'GET', url);
  }

  static put(dispatch, url, data, isJson) {
    return getPromise(dispatch, doRequest, 'PUT', url, data, isJson);
  }

  static post(dispatch, url, data, isJson) {
    return getPromise(dispatch, doRequest, 'POST', url, data, isJson);
  }

  static delete(dispatch, url, data, isJson) {
    return getPromise(dispatch, doRequest, 'DELETE', url, data, isJson);
  }
}

export default Api;
