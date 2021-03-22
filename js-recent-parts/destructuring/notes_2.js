// function data() {
//   return [1, 2, 3];
// }

// var [
//     first,
//     second,
//     third
// ] = data();

function data() {
  return { a: 1, b: 2, c: 3 };
}

var { a: first, b: second, c: third } = data();
