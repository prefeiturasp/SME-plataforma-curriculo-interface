import BodyActions from './BodyActions';
import getFiltersQueryString from './getFiltersQueryString';
import parse from 'parse-link-header';
import { API_URL } from 'utils/constants';

function getNextPage(headers) {
  if (headers.has('link')) {
    const parsed = parse(headers.get('link'));
    return parsed.next ? parsed.next.url : null;
  }

  return null;
}

function doPaginatedFetch(method, url, action1, action2) {
  return dispatch => {
    dispatch({ type: action1 });

    const request = { method };
    const user = sessionStorage.getItem('user');
    if (user) {
      request.headers = JSON.parse(user);
    }

    fetch(`${API_URL}${url}`, request)
      .then(response => {
        response.json().then(data => {
          const headers = response.headers;
          const nextPage = getNextPage(headers);
          const totalItems = headers.has('total') ? headers.get('total') : 0;
          
          dispatch({ type: BodyActions.HIDE_LOADING });
          dispatch({
            data,
            nextPage,
            totalItems,
            type: action2,
          });
        });
      });
  };
}

function doFetch(method, url, data, action1, action2) {
  return dispatch => {
    dispatch({ type: action1 });

    const body = new FormData();
    for (const key in data) {
      body.append(key, data[key]);
    }

    const request = { method, body };
    const user = sessionStorage.getItem('user');
    if (user) {
      request.headers = JSON.parse(user);
    }

    fetch(`${API_URL}${url}`, request)
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          dispatch({ type: BodyActions.HIDE_LOADING });
          dispatch({ data, type: action2 });
        } catch (e) {
          dispatch({ type: BodyActions.HIDE_LOADING });
          dispatch({ type: action2 });
        }
      });
  };
}

export function getData1(dispatch, url, filters, action) {
  const queryString = getFiltersQueryString(filters);
  
  fetch(`${API_URL}${url}?${queryString}`)
    .then(response => response.json())
    .then(data => {
      dispatch({ data, type: action });
    });
}

export function getData(url, action1, action2) {
  return doPaginatedFetch('GET', url, action1, action2);
}

export function postData(url, data, action1, action2) {
  return doFetch('POST', url, data, action1, action2);
}

export function putData(url, data, action1, action2) {
  return doFetch('PUT', url, data, action1, action2);
}
