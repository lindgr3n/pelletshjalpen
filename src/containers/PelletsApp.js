import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import './PelletsApp.css';

class PelletsApp extends Component {
  render() {
    return <PelletsAppView />;
  }
}

export default PelletsApp;

const PelletsAppView = props => {
  return (
    <div>
      <Card className="overview">
        <CardBody>
          <PelletsOverview />
        </CardBody>
      </Card>
      <br className="clearfix" />
      <PelletsEvents />
    </div>
  );
};

const PelletsOverview = props => {
  return (
    <div>
      <PelletsOverviewStore />
      <PelletsOverviewMessage />
    </div>
  );
};

const PelletsOverviewStore = props => {
  return <div className="store">Lager: 300</div>;
};

const PelletsOverviewMessage = props => {
  return <div className="message">Message: Lagret är fullt och fint!</div>;
};

const PelletsEvents = props => {
  return (
    <div className="events">
      <PelletsEventsItem />
      <PelletsEventsItem />
    </div>
  );
};

const PelletsEventsItem = props => {
  return <div>Event 1</div>;
};
