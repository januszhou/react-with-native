import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import app, {
  loginEpic
} from './epic';

export const rootEpic = combineEpics(
  loginEpic
);

export const rootReducer = combineReducers({
  app
});