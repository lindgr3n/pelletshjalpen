export const events = (state = {}, action) => {
  switch (action.type) {
    case 'EVENT_ADD_ITEM':
      return Object.assign({}, state, { events: [action.data, ...state.events] });

    default:
      break;
  }
  return state;
};
