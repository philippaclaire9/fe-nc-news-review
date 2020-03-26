const dateFormatter = date => {
  if (!date.length) return date;
  const splitDate = date.split('T');

  return splitDate[0];
};

module.exports = dateFormatter;
