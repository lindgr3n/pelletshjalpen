import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'reactstrap';
import { getDateFromTimeStamp } from '../utils';
import { isEmpty } from 'react-redux-firebase';

const PelletsEvents = props => {
  const { data } = props;
  if (isEmpty(data)) {
    return <div>Loading!!!</div>;
  }
  return (
    <Card>
      <Table>
        <thead>
          <tr>
            <th>Datum</th>
            <th>Event</th>
            <th>Value</th>
            <th>Meddelande</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key, i) => {
            return <PelletsEventsItem key={i} timestamp={data[key].timestamp} event={data[key].event} value={data[key].value} message={data[key].message} />;
          })}
        </tbody>
      </Table>
    </Card>
  );
};

PelletsEvents.propTypes = {
  data: PropTypes.object
};

export default PelletsEvents;

const PelletsEventsItem = props => {
  const { timestamp, event, value, message } = props;
  return (
    <tr>
      <td>{getDateFromTimeStamp(timestamp)}</td>
      <td>{event}</td>
      <td>{parseInt(value, 10)}</td>
      <td>{message}</td>
    </tr>
  );
};

PelletsEventsItem.propTypes = {
  id: PropTypes.number,
  timestamp: PropTypes.string,
  event: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
