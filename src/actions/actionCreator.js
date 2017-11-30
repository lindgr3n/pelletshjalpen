export const addEventItem = data => {
  return async (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    console.log('Push to firebase: ', { data });
    await firebase.push('events', data).key;
    dispatch(addEventItemAction(data));
  };
};

const addEventItemAction = data => {
  return {
    type: 'EVENT_ADD_ITEM',
    data
  };
};
