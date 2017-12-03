import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';

import PelletsOverview from './PelletsOverview';
import PelletsInputForm from './PelletsInputForm';
import PelletsEvents from './PelletsEvents';
import { firebaseConnect } from 'react-redux-firebase';

// Mock data
// import { STORE_DATA, EVENTS_DATA } from '../data';

export class PelletsApp extends Component {
  constructor(props) {
    super(props);

    this.props.getEvents();
  }
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
    events: state.firebase.data.events,
    overviewdata: state.overviewdata
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const PelletsAppWrapper = compose(firebaseConnect(['events']), connect(mapStateToProps, mapDispatchToProps))(PelletsApp);
/* const PelletsAppWrapper = compose(
  firebaseConnect(['events']),
  connect(
    state => ({
      events: state.firebase.data.events
    }),
    mapDispatchToProps
  )
)(PelletsApp); */
// const PelletsAppContainer = connect(mapStateToProps, mapDispatchToProps)(PelletsApp);

export default PelletsAppWrapper; //PelletsAppContainer;
