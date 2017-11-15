export const events = (state = [], action) => {
  console.log('The post will change');
  console.log(state, action);
  return state;
};
