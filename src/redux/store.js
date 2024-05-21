import { createStore, ApplyMiddleware, compose, applyMiddleware } from 'redux';
import { reducers } from './reducers/root';
import { thunk } from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( //deprecated
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )  
)

export default store;