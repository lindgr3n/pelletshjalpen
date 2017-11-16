import { createStore, compose } from 'redux';

// Get reducers
import rootReducer from './reducers';

// Get inital data
import { EVENTS_DATA, STORE_DATA } from './data';

const defaultState = {
  events: EVENTS_DATA,
  overviewdata: STORE_DATA
};

// Can test the redux by using in chrome devtools -> react when selecting Provider
// $r.store.dispatch({type: 'EVENT_ADD_ITEM', data: {id: 5, date: '20171115', event: 'Sotat', message:''}})

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
const store = createStore(rootReducer, defaultState, enhancers);

export default store;
