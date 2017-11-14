import React, { Component } from 'react';
import { Card, CardBody, Col, Row, CardTitle, CardText, Table, Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
    console.log(e);
    this.setState({ events: [...this.state.events, e] });
  }
  render() {
    return <PelletsAppView storedata={this.state.store} eventsdata={this.state.events} onaddnewevent={this.onAddNewEvent} />;
  }
}

export default PelletsApp;

const PelletsAppView = props => {
  const { storedata, eventsdata, onaddnewevent } = props;
  return (
    <div>
      <PelletsOverview data={storedata} />
      <PelletsInputForm onaddnewevent={onaddnewevent} />
      <PelletsEvents data={eventsdata} />
    </div>
  );
};

const PelletsOverview = props => {
  const { data } = props;
  return (
    <Card className="overview">
      <CardBody>
        <Row>
          <Col sm="3">
            <PelletsOverviewItem text="Datum" value={data.date} />
          </Col>
          <Col sm="3">
            <PelletsOverviewItem text="Lager" value={data.total} />
          </Col>
          <Col sm="4">
            <Card>
              <PelletsOverviewItem text="Meddelande" value="Lagret är fullt och fint!" />
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

const PelletsOverviewItem = props => {
  const { text, value } = props;
  return (
    <Card body>
      <CardTitle>{text}</CardTitle>
      <CardText>{value}</CardText>
    </Card>
  );
};

const getTodaysDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  today = `${yyyy}-${mm}-${dd}`;
  return today; //(today = mm + '/' + dd + '/' + yyyy);
};

class PelletsInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: getTodaysDate(),
      event: 'Sotat',
      message: ''
    };

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
          <Input type="select" name="date" id="event" onChange={this.handleInputChange} value={this.state.event}>
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

const PelletsEvents = props => {
  const { data } = props;
  let counter = 1;
  return (
    <Card>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Datum</th>
            <th>Event</th>
            <th>Meddelande</th>
          </tr>
        </thead>
        <tbody>
          {data.map(event => {
            return <PelletsEventsItem key={event.date} id={counter++} date={event.date} event={event.event} message={event.message} />;
          })}
        </tbody>
      </Table>
    </Card>
  );
};

const PelletsEventsItem = props => {
  const { id, date, event, message } = props;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{date}</td>
      <td>{event}</td>
      <td>{message}</td>
    </tr>
  );
};
