'use strict';

var fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var formatDate = function formatDate(date) {
  var monthIdx = date.getMonth();
  var monthStr = fullMonths[monthIdx];

  return date.getDate() + ' ' + monthStr + ' ' + date.getFullYear();
};

module.exports = {
  formatDate: formatDate
};