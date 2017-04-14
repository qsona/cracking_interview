const MyMap = require('../../common/my_map');

module.exports = function(str) {
  const map = new MyMap();
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i])) {
      return true;
    }
    map.set(str[i], true);
  }
  return false;
};
