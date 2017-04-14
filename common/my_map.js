const MAX_HASH_LEN = 65536;

module.exports = class MyMap {
  constructor() {
    this._table = new Array(MAX_HASH_LEN);
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
