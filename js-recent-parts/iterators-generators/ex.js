var numbers = {
  // ..Make this an iterable object
  *[Symbol.iterator]({ start = 0, end = 100, step = 1 } = {}) {
    for (let index = start; index <= end; index += step) {
      yield index;
    }
  }
};

// should print 0..100 by 1s
for (let num of numbers) {
  console.log(num);
}

// should print 6..30 by 4s
console.log(
  `My lucky numbers are: ${[
    ...numbers[Symbol.iterator]({
      start: 6,
      end: 30,
      step: 4
    })
  ]}`
);

// Hint:
//     [...numbers[Symbol.iterator]( ?? )]

//How do I define my iterator
//How do I pass it some inputs
//How do I iterate over it
