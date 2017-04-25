const MyMap = require('../../common/my_map');


module.exports = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const map = new MyMap();
  for (let i = 0; i < str1.length; i++) {
    const c = str1[i];
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (let i = 0; i < str2.length; i++) {
    const c = str2[i];
    const num = map.get(c);
    if (!num) {
      return false;
    }
    map.set(c, num - 1);
  }
  return true;
};
