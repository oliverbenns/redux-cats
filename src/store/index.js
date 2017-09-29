import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import cats from '../reducers/cats';

const reducer = combineReducers({ cats });

const showDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  reducer,
  showDevTools,
  applyMiddleware(thunk)
);

export default store;

