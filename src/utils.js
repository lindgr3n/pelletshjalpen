export const parseDateTo = date => {
  if (date.indexOf('-') !== -1) {
    return date;
  }
  const dateYear = date.substring(0, 4);
  const dateMonth = date.substring(4, 6);
  const dateDay = date.substring(6);

  return `${dateYear}-${dateMonth}-${dateDay}`;
};

export const getTodaysDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  today = `${yyyy}-${mm}-${dd}`;
  return today; //(today = mm + '/' + dd + '/' + yyyy);
};
