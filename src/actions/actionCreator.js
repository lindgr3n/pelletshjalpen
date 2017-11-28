export const addEventItem = data => {
  return dispatch => {
    console.log('Time to call firebase!');

    dispatch(addEventItemAction(data));
  };
};

const addEventItemAction = data => {
  return {
    type: 'EVENT_ADD_ITEM',
    data
  };
};
