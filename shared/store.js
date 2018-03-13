import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './root';
import 'rxjs';

const initialState = {};
const epicMiddleware = createEpicMiddleware(rootEpic);

const middlewares = [epicMiddleware];

const enhancers = [applyMiddleware(...middlewares)];

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(...enhancers)
);
