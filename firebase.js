// Initialize Firebase
import firebase from 'firebase';
var config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'pelletshjalpen.firebaseapp.com',
  databaseURL: 'https://pelletshjalpen.firebaseio.com',
  projectId: 'pelletshjalpen',
  storageBucket: 'pelletshjalpen.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID
};
const fire = firebase.initializeApp(config);
export default fire;
