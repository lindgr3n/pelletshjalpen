import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getTodaysDate } from '../utils';

const INITIAL_STATE = {
  id: '',
  date: getTodaysDate(),
  event: 'Sotat',
  eventaction: 'EVENT_SOTAT',
  message: ''
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
      this.setState({
        eventaction: eventAction
      });
    }
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onaddnewevent(this.state);

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
  onaddnewevent: PropTypes.func
};

export default PelletsInputForm;
