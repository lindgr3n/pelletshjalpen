import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import firebase from './firebase';
import { reactReduxFirebase, firebaseReducer, getFirebase } from 'react-redux-firebase';

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

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

/* const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig) // firebase instance as first argument
  // reduxFirestore(firebase) // <- needed if using firestore
)(createStore); */

/* // Add Firebase to reducers
const firebaseRootReducer = combineReducers({
  firebase: firebaseReducer,
  rootReducer
  // firestore: firestoreReducer // <- needed if using firestore
}); */

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
// const store = createStoreWithFirebase(rootReducer, defaultState, applyMiddleware(thunk));
const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
      thunk.withExtraArgument(getFirebase) // Pass getFirebase functioin as extra argument
    ),
    reactReduxFirebase(firebase, rrfConfig)
  )
);

export default store;
