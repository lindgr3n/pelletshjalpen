import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Row, Col, CardTitle, CardText } from 'reactstrap';
import { isEmpty } from 'react-redux-firebase';

const PelletsOverview = props => {
  const { data } = props;
  if (isEmpty(data)) {
    return <div>empty</div>;
  }
  return (
    <Card className="overview">
      <CardBody>
        <Row>
          <Col sm="3">
            <PelletsOverviewItem text="Datum" value={data.timestamp} />
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

PelletsOverview.propTypes = {
  data: PropTypes.object
};

export default PelletsOverview;

const PelletsOverviewItem = props => {
  const { text, value } = props;
  return (
    <Card body>
      <CardTitle>{text}</CardTitle>
      <CardText>{value}</CardText>
    </Card>
  );
};

PelletsOverviewItem.propTypes = {
  text: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
