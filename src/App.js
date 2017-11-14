import React, { Component } from 'react';
import './App.css';

import PelletsApp from './containers/PelletsApp';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
