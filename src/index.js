import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './css/index.css';
import App from './containers/App';
import configureStore from './store';
import registerServiceWorker from './utils/registerServiceWorker';
import MerchantListContainer from './containers/MerchantListContainer';
import MerchantItemEditContainer from './containers/MerchantItemEditContainer';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <Route path="list" query='page:number' component={ MerchantListContainer } />
        <Route path="edit/:id" component={ MerchantItemEditContainer } mode='edit' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
