import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';

// Actions
const LOGIN = 'APP/LOGIN';
const LOGIN_SUCCESS = 'APP/LOGIN_SUCCESS';
const LOGIN_ERROR = 'APP/LOGIN_ERROR';

const FACULTY_SEARCH = 'APP/FACULTY_SEARCH';
const FACULTY_LOAD = 'APP/FACULTY_LOAD';

const initialState = {
  loginLoading: false,
  token: '',
  userName: '',
  loginError: '',
  facultyLoading: false,
  facultyList: []
};
// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN: {
      return {...state, loginLoading: true};
    }
    case LOGIN_SUCCESS: {
      const { kbs_token: token, userName } = action.payload.data;
      return {...state, token, userName, loginLoading: false, loginError: ''};
    }
    case LOGIN_ERROR: {
      return {...state, loginLoading: false, loginError: action.payload.error};
    }
    default:
      return state;
  }
}

// Actions
export function doLogin({ username, password }) {
  return {
    type: LOGIN,
    payload: { username, password }
  };
}

export function doSearchFaculty({ name }) {
  return {
    type: FACULTY_SEARCH,
    payload: { name }
  };
}

export function doLoadFaculty({ list }) {
  return {
    type: FACULTY_LOAD,
    payload: { list }
  };
}

export function doLoginSuccess({ data }) {
  return {
    type: LOGIN_SUCCESS,
    payload: { data }
  };
}

export function doLoginError({ error }) {
  return {
    type: LOGIN_ERROR,
    payload: { error }
  };
}

// Epics
export const loginEpic = (action$) =>
  action$
    .ofType(LOGIN)
    .map(({ payload: { username, password } }) => btoa(`${username}:${password}`))
    .mergeMap(token =>
      ajax({
        url: `https://auth.kaptest.com/auth/kbs/token/${token}`,
        headers: {},
        crossDomain: true,
        method: 'GET'
      })
        .map(r => r.response)
        .map(data => doLoginSuccess({ data }))
        .catch(error => Observable.of(doLoginError({ error: 'Bad credentials, Please try again.' })))
    );
