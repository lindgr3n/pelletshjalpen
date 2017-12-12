export const overviewdata = (state = {}, action) => {
  let total = null;
  switch (action.type) {
    case 'EVENT_ADD_ITEM':
      switch (action.data.eventAction) {
        case 'EVENT_SOTAT':
          // TODO: Update last sotat and reminder to next time
          break;
        case 'EVENT_BUY':
          // TOOD: Increase warehouse stock
          total = parseInt(state.total, 10) + parseInt(action.data.value, 10);
          break;
        case 'EVENT_FILL':
          // TOOD: Decrease warehouse stock
          total = parseInt(state.total, 10) - parseInt(action.data.value, 10);
          break;
        case 'EVENT_BORROW':
          // TOOD: Increase warehouse stock (Add minus if you lend out)
          // TODO: Later add own list of people you let to
          break;
        case 'EVENT_RETURN':
          // TOOD: Decrease warehouse stock (Add minus if you get it back)
          // TOOD: Later add own list of people you owe
          break;
        default:
          break;
      }
      return Object.assign({}, state, { total });
    case 'OVERVIEW_GET':
      return Object.assign({}, state, action.data);
    default:
      break;
  }
  return state;
};

export default overviewdata;

/*
      
*/
