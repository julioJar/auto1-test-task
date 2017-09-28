import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';

import './css/index.css';
import App from './containers/App';
import configureStore from './store';
import registerServiceWorker from './utils/registerServiceWorker';
import MerchantListContainer from './containers/MerchantListContainer';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
        <Route path="/" component={ App }>
          <Route path="list" component={ MerchantListContainer }>
          </Route>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
