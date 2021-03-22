var obj = {
  a: 1,
  b: 2,
  c: 3,
  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) {
      yield this[key];
    }
  },
  *keys() {
    for (let key of Object.keys(this)) {
      yield key;
    }
  }
};

console.log([...obj.values()]);
console.log([...obj.keys()]);
