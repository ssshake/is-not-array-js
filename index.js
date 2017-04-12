var isArray = require('isarray');

module.exports = function(arr) {
  return !isArray(arr);
}
