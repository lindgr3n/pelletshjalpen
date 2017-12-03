const events = (state = {}, action) => {
  console.log('events:', action.type);
  switch (action.type) {
    case 'EVENT_ADD_ITEM':
      return Object.assign({}, action.data, state);
    case 'EVENT_GET':
      // Set the values returned from firebase
      return action.data;
    default:
      break;
  }
  return state;
};

export default events;
