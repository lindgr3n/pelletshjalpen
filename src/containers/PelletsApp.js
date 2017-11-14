import React, { Component } from 'react';
import { Card, CardBody, Col, Row, CardTitle, CardText, Table, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import { STORE_DATA, EVENTS_DATA } from '../data';

class PelletsApp extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    console.log(e);
    e.preventDefault();
  }
  render() {
    return <PelletsAppView storedata={STORE_DATA} eventsdata={EVENTS_DATA} onsubmit={this.onSubmit} />;
  }
}

export default PelletsApp;

const PelletsAppView = props => {
  const { storedata, eventsdata, onsubmit } = props;
  return (
    <div>
      <PelletsOverview data={storedata} />
      <PelletsInput onsubmit={onsubmit} />
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

const PelletsInput = props => {
  const { onsubmit } = props;
  return (
    <Form inline onSubmit={onsubmit}>
      <FormGroup style={{ margin: 10 }}>
        <Label for="date">Datum:</Label>
        <Input type="date" name="date" id="date" defaultValue={getTodaysDate()} />
      </FormGroup>
      <FormGroup style={{ margin: 10 }}>
        <Label for="event">Event:</Label>
        <Input type="select" name="date" id="event" defaultValue="Sotat">
          <option>Sotat</option>
          <option>Beställt</option>
          <option>Fyllt</option>
          <option>Lånat</option>
          <option>Åter</option>
        </Input>
      </FormGroup>
      <FormGroup style={{ margin: 10 }}>
        <Label fro="message">Meddelande:</Label>
        <Input name="message" id="message" />
      </FormGroup>
      <Button>Lägg till</Button>
    </Form>
  );
};

const PelletsEvents = props => {
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
          <PelletsEventsItem id="1" date="20171001" event="Påfyllt" message="25" />
          <PelletsEventsItem id="2" date="20171011" event="Sotat" message="" />
          <PelletsEventsItem id="3" date="20171201" event="Beställt" message="3 pallar" />
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
