// Initialize Firebase
import * as firebase from 'firebase';

export let defaultConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'pelletshjalpen.firebaseapp.com',
  databaseURL: 'https://pelletshjalpen.firebaseio.com',
  projectId: 'pelletshjalpen',
  storageBucket: 'pelletshjalpen.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID
};

export const init = (config = defaultConfig) => {
  firebase.initializeApp(config);

  return firebase;
};

firebase.initializeApp(defaultConfig);

export default firebase;
