import React, { Component } from 'react';

import PelletsAppView from './PelletsAppView';

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
    return <PelletsAppView storedata={this.state.store} eventsdata={this.state.events} onaddnewevent={this.onAddNewEvent} />;
  }
}

export default PelletsApp;
