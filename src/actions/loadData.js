import parse from 'parse-link-header';
import BodyActions from './BodyActions';
import { API_URL } from '../constants';

export function getFullUrl(url) {
  return url.match(/http/) ? url : API_URL + url;
}

function getNextPage(headers) {
  if (headers.has('link')) {
    const parsed = parse(headers.get('link'));
    return parsed.next ? parsed.next.url : null;
  }

  return null;
}

export default function loadData(url, action1, action2) {
  return dispatch => {
    dispatch({ type: action1 });
    fetch(getFullUrl(url))
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
        })
      });
  };
}
