import { createStore } from 'redux';

// Get reducers
import { events } from './reducers/events';

// Get inital data
import { EVENTS_DATA, STORE_DATA } from './data';

const defaultState = {
  events: EVENTS_DATA,
  overviewdata: STORE_DATA
};

// Can test the redux by using in chrome devtools -> react when selecting Provider
// $r.store.dispatch({type: 'EVENT_ADD_ITEM', data: {id: 5, date: '20171115', event: 'Sotat', message:''}})
const store = createStore(events, defaultState);

export default store;
