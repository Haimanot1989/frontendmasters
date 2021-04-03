/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.length++;
    this.data[this.length - 1] = value;
  }

  pop() {
    const toBeDeleted = `${this.data[this.length - 1]}`;
    delete this.data[this.length - 1];
    this.length--;
    return toBeDeleted;
  }

  get(index) {
    wr("this.data: ");
    wrObj(this.data);
    return this.data[index];
  }

  delete(index) {
    //accepts an index, removes value from list, collapses,
    //and returns removed value
    const toBeDeleted = `${this.data[index]}`;
    delete this.data[index];
    console.log(`data after delete: ${JSON.stringify(this.data)}`);
    let left = {};
    Object.keys(this.data).map((k) => {
      wr(`k: ${k}`);
      if (Number(k) < index) {
        wr("left");
        wrObj(left);
        left[k] = this.data[k];
      } else {
        left[k - 1] = this.data[k];
      }
      return;
    });
    this.data = left;
    this.length--;
    return toBeDeleted;
  }

  _collapses() {}
}

let wr = (msg = "----------") => console.log(`\n${msg}`);
let wrObj = (msg = "---------") =>
  console.log(`data after delete: ${JSON.stringify(msg)}`);

const range = (length) =>
  Array.apply(null, { length: length }).map(Number.call, Number);
const abcRange = (length) =>
  range(length).map((num) => String.fromCharCode(97 + num));
let list = new ArrayList();

abcRange(26).map((character) => list.push(character));
list.delete(13);
//expect(list.length).toEqual(25);
wr(`List length: ${list.length}`);
wr(`list.get(12): ${list.get(10)}`);
//   expect(list.get(13)).toEqual('o');
//   list.delete(0);
//   expect(list.length).toEqual(24);
//   expect(list.get(0)).toEqual('b');
