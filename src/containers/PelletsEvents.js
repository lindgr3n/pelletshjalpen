import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'reactstrap';
import { parseDateTo } from '../utils';
import { isLoaded } from 'react-redux-firebase';

const PelletsEvents = props => {
  const { data } = props;
  if (!isLoaded(data)) {
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
            return <PelletsEventsItem key={i} date={data[key].date} event={data[key].event} value={data[key].value} message={data[key].message} />;
          })}
        </tbody>
      </Table>
    </Card>
  );
};

PelletsEvents.propTypes = {
  data: PropTypes.array
};

export default PelletsEvents;

const PelletsEventsItem = props => {
  const { date, event, value, message } = props;
  return (
    <tr>
      <td>{parseDateTo(date)}</td>
      <td>{event}</td>
      <td>{value}</td>
      <td>{message}</td>
    </tr>
  );
};

PelletsEventsItem.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  event: PropTypes.string,
  value: PropTypes.number,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
