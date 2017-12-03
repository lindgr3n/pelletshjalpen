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

export const getEvents = data => {
  return async (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const { firebaseRef } = getState();
    console.log('test', firebaseRef);
    // const data = await firebase.watchEvent('value', 'events');
    const fbRefdata = firebase.ref('/events');
    let data = {};
    const dataSnapshot = await fbRefdata.once('value');
    /* fbRefdata.once('value', snapshot => {
      snapshot.forEach(function(child) {
        console.log('SNAP', child.key, child.val());
        data[child.key] = child.val();
      });
    }); */
    const snapshot = await fbRefdata.once('value');
    snapshot.forEach(function(child) {
      console.log('SNAP', child.key, child.val());
      data[child.key] = child.val();
    });
    console.log(fbRefdata, { data });
    /*  fbRefdata.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    }); */
    dispatch(getEventsAction(data));
  };
};

const getEventsAction = data => {
  return {
    type: 'EVENT_GET',
    data
  };
};
