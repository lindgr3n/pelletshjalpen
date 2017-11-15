import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'reactstrap';
import { parseDateTo } from '../utils';

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
            return <PelletsEventsItem key={event.id} id={counter++} date={event.date} event={event.event} message={event.message} />;
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
  const { id, date, event, message } = props;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{parseDateTo(date)}</td>
      <td>{event}</td>
      <td>{message}</td>
    </tr>
  );
};

PelletsEventsItem.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  event: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
