import React, { Component } from 'react';

import PelletsOverview from './PelletsOverview';
import PelletsInputForm from './PelletsInputForm';
import PelletsEvents from './PelletsEvents';

// Mock data
import { STORE_DATA, EVENTS_DATA } from '../data';

class PelletsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: EVENTS_DATA,
      store: STORE_DATA
    };
    this.onAddNewEvent = this.onAddNewEvent.bind(this);
  }

  /**
   * Passed from PelletsInputForm when submiting form
   * @param {*} e
   */
  onAddNewEvent(e) {
    e = Object.assign({}, e, { id: this.state.events.length + 1 });
    this.setState({ events: [e, ...this.state.events] });
  }
  render() {
    return (
      <div>
        <PelletsOverview data={this.state.store} />
        <PelletsInputForm onaddnewevent={this.onAddNewEvent} />
        <PelletsEvents data={this.state.events} />
      </div>
    );
  }
}

export default PelletsApp;
