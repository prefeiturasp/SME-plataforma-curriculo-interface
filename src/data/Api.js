import AlertActions from 'actions/AlertActions';
import BodyActions from 'actions/BodyActions';
import parse from 'parse-link-header';
import { API_URL } from 'data/constants';

function getNextPage(headers) {
  if (headers.has('link')) {
    const parsed = parse(headers.get('link'));
    return parsed.next ? parsed.next.url : null;
  }

  return null;
}

function getPromise(dispatch, func, method, url, data) {
  return new Promise((resolve, reject) => {
    func.apply(this, [method, url, data])
      .then(response => {
        response.json().then(data => {
          const headers = response.headers;
          const nextPage = getNextPage(headers);
          const totalItems = headers.has('total') ? headers.get('total') : 0;
          resolve({
            data,
            headers,
            nextPage,
            totalItems,
          });
        })
        .catch(reject);
      })
      .catch(reject)
      .finally(response => dispatch({ type: BodyActions.HIDE_LOADING }));
  });
}

function doRequest(method, url, data) {
  const options = { method };
  const user = sessionStorage.getItem('user');

  if (user) {
    options.headers = JSON.parse(user);
  }

  if (data) {
    const body = new FormData();
    for (const key in data) {
      body.append(key, data[key]);
    }
    options.body = body;
  }

  return fetch(`${API_URL}${url}`, options)
    .then(response => response)
    .catch(error => {
      throw error
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
        .catch(error => dispatch(AlertActions.open('Ocorreu um erro.')));
    };
  }

  static get(dispatch, url) {
    return getPromise(dispatch, doRequest, 'GET', url);
  }

  static put(dispatch, url, data) {
    return getPromise(dispatch, doRequest, 'PUT', url, data);
  }

  static post(dispatch, url, data) {
    return getPromise(dispatch, doRequest, 'POST', url, data);
  }

  static delete(dispatch, url, data) {
    return getPromise(dispatch, doRequest, 'DELETE', url, data);
  }
}

export default Api;
