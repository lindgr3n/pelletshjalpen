import { combineReducers } from 'redux';

import events from './events';
import overviewdata from './overviewdata';

const rootReducer = combineReducers({ events, overviewdata });

export default rootReducer;
