import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';
import App from './App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
