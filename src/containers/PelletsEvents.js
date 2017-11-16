import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'reactstrap';
import { parseDateTo } from '../utils';

const PelletsEvents = props => {
  const { data } = props;
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
          {data.map((event, i) => {
            return <PelletsEventsItem key={i} date={event.date} event={event.event} value={event.value} message={event.message} />;
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
