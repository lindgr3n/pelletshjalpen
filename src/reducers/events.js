export const events = (state = {}, action) => {
  switch (action.type) {
    case 'EVENT_ADD_ITEM':
      action.data.id = state.events.length + 1; // Add a new id
      return Object.assign({}, state, { events: [action.data, ...state.events] });
    default:
      break;
  }
  return state;
};
