// Initialize Firebase
import * as firebase from 'firebase';

import eventModel from './models/event';

let defaultConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'pelletshjalpen.firebaseapp.com',
  databaseURL: 'https://pelletshjalpen.firebaseio.com',
  projectId: 'pelletshjalpen',
  storageBucket: 'pelletshjalpen.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID
};

let database;

export const init = (config = defaultConfig) => {
  firebase.initializeApp(config);
  if (!database) {
    database = firebase.database();
  }
  return database;
};

export const getEvents = () => {
  return database.ref('/').once('value');
};

export const addNewEvent = (id, date, event, value, message) => {
  let key = database.ref('/events').push().key;
  let model = eventModel(id, date, event, value, message);
  return database.ref('/events/' + key).set(model);
};

// const fire = firebase.initializeApp(config);
// export default fire;
