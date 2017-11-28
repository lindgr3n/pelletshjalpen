import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';

import PelletsOverview from './PelletsOverview';
import PelletsInputForm from './PelletsInputForm';
import PelletsEvents from './PelletsEvents';

// Mock data
// import { STORE_DATA, EVENTS_DATA } from '../data';

export class PelletsApp extends Component {
  render() {
    return (
      <div>
        <PelletsOverview data={this.props.overviewdata} />
        <PelletsInputForm />
        <PelletsEvents data={this.props.events} />
      </div>
    );
  }
}

PelletsApp.propTypes = {
  overviewdata: PropTypes.object,
  addEventItem: PropTypes.func,
  events: PropTypes.array
};

const mapStateToProps = state => {
  return {
    events: state.events,
    overviewdata: state.overviewdata
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const PelletsAppContainer = connect(mapStateToProps, mapDispatchToProps)(PelletsApp);

export default PelletsAppContainer;
