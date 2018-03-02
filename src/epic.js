import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';

// Actions
const SERACH = 'APP/SERACH';
const LOAD = 'APP/LOAD';
const ERROR = 'APP/ERROR';
const FETCH_DETAIL = 'APP/FETCH_DETAIL';
const LOAD_DETAIL = 'APP/LOAD_DETAIL';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SERACH: {
      return {...state, loading: true};
    }
    case LOAD: {
      const list = {};
      return {...state, list, loading: false};
    }
    default:
      return state;
  }
}

// Actions
export function doSearch({name}) {
  return {
    type: SERACH,
    payload: { name }
  };
}
export function doLoad({list}) {
  return {
    type: LOAD,
    payload: {list}
  };
}
export function doError({error}) {
  return {
    type: ERROR,
    error
  };
}


// Epics
export const searchEpic = (action$) =>
  action$
    .ofType(SERACH) // it must depends on KE Token
    .mergeMap(({name}) =>
      ajax({
        url: `https://api.github.com/search/users?q=${name}`,
        headers: {
          // Authorization: TOKEN
        },
        method: 'GET'
      })
        .map(r => r.response)
        .map(list => doLoad({ list }))
        .catch(error => Observable.of(doError({ error })))
    );




