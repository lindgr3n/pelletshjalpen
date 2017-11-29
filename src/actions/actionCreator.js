import { getFirebase } from 'react-redux-firebase';

export const addEventItem = data => {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    console.log('Push to firebase: ', { data });
    firebase.push('events', data);
    dispatch(addEventItemAction(data));
  };
};

const addEventItemAction = data => {
  return {
    type: 'EVENT_ADD_ITEM',
    data
  };
};
