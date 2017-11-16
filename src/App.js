import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import store from './store';

import PelletsApp from './containers/PelletsApp';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header ">
            <p style={{ width: '33%' }} className="text-left float-left">
              <span>logo</span>
            </p>
            <p style={{ width: '33%' }} className="text-center float-left">
              Pelletshjälpen
            </p>
            <p style={{ width: '33%' }} className="text-right float-left">
              Profile
            </p>
          </header>
          <div className="content">
            <PelletsApp />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
