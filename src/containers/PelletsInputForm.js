import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getTodaysDate } from '../utils';
import * as actionCreators from '../actions/actionCreator';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const INITIAL_STATE = {
  id: '',
  date: getTodaysDate(),
  event: 'Sotat',
  eventaction: 'EVENT_SOTAT',
  message: '',
  value: 0,
  isNumber: false
};

class PelletsInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (target.type === 'select-one') {
      const eventAction = target.selectedOptions[0].attributes['tag'].value;
      const isNumber = eventAction === 'EVENT_SOTAT' ? false : true;
      this.setState({
        eventaction: eventAction,
        isNumber: isNumber
      });
    }
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    // this.props.onaddnewevent(this.state);
    this.props.addEventItem(this.state);
    // e.target.reset(); // Reset back to defaultvalues? Use defaultValue on <input>?
    this.setState(INITIAL_STATE); // Should you use form.reset() instead?
  }

  // TODO: When selecting sotat show textinput
  // TODO: WHen selecting rest show numberinput
  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup style={{ margin: 10 }}>
          <Label for="date">Datum:</Label>
          <Input type="date" name="date" id="date" onChange={this.handleInputChange} value={this.state.date} />
        </FormGroup>
        <FormGroup style={{ margin: 10 }}>
          <Label for="event">Event:</Label>
          <Input type="select" name="event" id="event" onChange={this.handleInputChange} value={this.state.event}>
            <option tag="EVENT_SOTAT">Sotat</option>
            <option tag="EVENT_BUY">Köpt</option>
            <option tag="EVENT_FILL">Fyllt</option>
            <option tag="EVENT_BORROW">Lånat</option>
            <option tag="EVENT_RETURN">Åter</option>
          </Input>
        </FormGroup>
        {this.state.isNumber ? (
          <FormGroup style={{ margin: 10 }}>
            <Label fro="value">Antal:</Label>
            <Input type="number" name="value" id="value" valid={this.state.value !== 0} onChange={this.handleInputChange} value={this.state.value} />
          </FormGroup>
        ) : (
          ''
        )}
        <FormGroup style={{ margin: 10 }}>
          <Label fro="message">Meddelande:</Label>
          <Input name="message" id="message" onChange={this.handleInputChange} value={this.state.message} />
        </FormGroup>
        <Button color="primary">Lägg till</Button>
      </Form>
    );
  }
}

PelletsInputForm.propTypes = {
  date: PropTypes.string,
  event: PropTypes.string,
  message: PropTypes.string,
  addEventItem: PropTypes.func
};

// export default PelletsInputForm;
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

const PelletsInputFormContainer = connect(mapStateToProps, mapDispatchToProps)(PelletsInputForm);

export default PelletsInputFormContainer;
