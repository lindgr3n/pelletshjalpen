import { combineReducers } from 'redux';

import events from './events';
import overviewdata from './overviewdata';

import { firebaseReducer as firebase } from 'react-redux-firebase';

const rootReducer = combineReducers({ firebase, events, overviewdata });

export default rootReducer;
