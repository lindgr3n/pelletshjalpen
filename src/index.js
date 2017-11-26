import 'bootstrap/dist/css/bootstrap.css';
import Raven from 'raven-js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { init as firebaseInit, addNewEvent } from './firebase';
import { addEventItem } from './actions/actionCreator';

Raven.config(process.env.REACT_APP_RAVEN_KEY).install();

firebaseInit();

addNewEvent(1, '20171114', 'Påfyllt', 25, '');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}
