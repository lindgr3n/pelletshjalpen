const events = (state = [], action) => {
  switch (action.type) {
    case 'EVENT_ADD_ITEM':
      action.data.id = state.length + 1; // Add a new id
      return [action.data, ...state];
    default:
      break;
  }
  return state;
};

export default events;
