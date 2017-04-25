const MAX_HASH_LEN = 65536;

module.exports = class MyMap {
  constructor() {
    this._table = new Array(MAX_HASH_LEN);
    this._keys = [];
  }

  set(key, value) {
    const hashValue = MyMap.calcHashValue(key);
    const keyValue = new KeyValue(key, value);
    const target = (this._table[hashValue] = this._table[hashValue] || []);
    // TODO binary search
    for (let i = 0; i < target.length; i++) {
      if (target[i].key === key) {
        target[i] = keyValue;
        return;
      }
    }
    target.push(keyValue);
    this._keys.push(key);
    return;
  }

  get(key) {
    const target = this._table[MyMap.calcHashValue(key)];
    if (!target) return;
    // TODO binary search
    for (let i = 0; i < target.length; i++) {
      if (target[i].key === key) {
        return target[i].value;
      }
    }
  }

  keys() {
    return this._keys.slice();
  }

  static calcHashValue(key) {
    // TODO
    return key.length % MAX_HASH_LEN;
  }
};

class KeyValue {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
