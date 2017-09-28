import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { routerReducer } from 'react-router-redux';

const configureStore = (preloadedState) => {
  const enhancers = [applyMiddleware(thunk)];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  return createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    preloadedState,
    compose(
      ...enhancers
    )
  );
};

export default configureStore;
