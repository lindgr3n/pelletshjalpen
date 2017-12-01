/* {
  id: 1,
  date: '20171114',
  event: 'Påfyllt',
  value: 25,
  message: ''
} */

export const eventItem = (id, timestamp, event, value, message) => {
  return {
    id,
    timestamp,
    event,
    value,
    message
  };
};
