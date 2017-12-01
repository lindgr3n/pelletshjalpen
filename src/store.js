import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import firebase from './firebase';
import { reactReduxFirebase, firebaseReducer, getFirebase } from 'react-redux-firebase';

// Get reducers
import rootReducer from './reducers';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
// const store = createStoreWithFirebase(rootReducer, defaultState, applyMiddleware(thunk));
const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
      thunk.withExtraArgument(getFirebase) // Pass getFirebase function as extra argument
    ),
    reactReduxFirebase(firebase, rrfConfig),
    enhancers
  )
);

export default store;
