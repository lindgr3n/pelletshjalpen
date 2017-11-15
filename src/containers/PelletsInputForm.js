import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getTodaysDate } from '../utils';

const INITIAL_STATE = {
  id: '',
  date: getTodaysDate(),
  event: 'Sotat',
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

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onaddnewevent(this.state);

    this.setState(INITIAL_STATE);
  }

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
            <option>Sotat</option>
            <option>Beställt</option>
            <option>Fyllt</option>
            <option>Lånat</option>
            <option>Åter</option>
          </Input>
        </FormGroup>
        <FormGroup style={{ margin: 10 }}>
          <Label fro="message">Meddelande:</Label>
          <Input name="message" id="message" onChange={this.handleInputChange} value={this.state.message} />
        </FormGroup>
        <Button>Lägg till</Button>
      </Form>
    );
  }
}

PelletsInputForm.propTypes = {
  onaddnewevent: PropTypes.func
};

export default PelletsInputForm;
