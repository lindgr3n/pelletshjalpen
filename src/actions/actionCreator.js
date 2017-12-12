export const addEventItem = data => {
  return async (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    console.log('Push to firebase: ', { data });
    await firebase.push('events', data).key;
    // Get data and update
    const { overviewdata } = getState();
    console.log('over', overviewdata);
    await firebase.update('overviewdata', { timestamp: data.timestamp, total: overviewdata.total - data.value }).key;

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
    const fbRefdata = firebase.ref('/events');
    let data = {};

    const snapshot = await fbRefdata.once('value');
    snapshot.forEach(function(child) {
      data[child.key] = child.val();
    });

    // console.log(fbRefdata, { data });
    dispatch(getEventsAction(data));
  };
};

const getEventsAction = data => {
  return {
    type: 'EVENT_GET',
    data
  };
};

export const getOverViewData = data => {
  return async (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const fbRefdata = firebase.ref('/overviewdata');
    let data = {};

    const snapshot = await fbRefdata.once('value');
    snapshot.forEach(function(child) {
      data[child.key] = child.val();
    });

    // console.log(fbRefdata, { data });
    dispatch(getOverViewAction(data));
  };
};

const getOverViewAction = data => {
  return {
    type: 'OVERVIEW_GET',
    data
  };
};
