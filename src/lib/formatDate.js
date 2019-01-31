const fullMonths = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
];

const formatDate = (date) => {
  const monthIdx = date.getMonth()
  const monthStr = fullMonths[monthIdx]

  return `${date.getDate()} ${monthStr} ${date.getFullYear()}`
};

module.exports = {
  formatDate
};
