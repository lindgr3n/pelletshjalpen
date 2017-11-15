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
          <header className="App-header">
            <div>logo</div>
            <h1>Pelletshjälpen</h1>
            <div>Profile</div>
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
