"use strict";

function lotteryNum() {
  return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(number, numbers) {
  if (!numbers.includes(number)) {
    numbers = [...numbers, number];
    numbers.sort(function asc(x, y) {
      return x - y;
    });
  }
  return numbers;
}

var luckyLotteryNumbers = [];
var NUM_COUNT = 6;

while (luckyLotteryNumbers.length < NUM_COUNT) {
  luckyLotteryNumbers = pickNumber(
    lotteryNum(),
    Object.freeze(luckyLotteryNumbers)
  );
}

console.log(luckyLotteryNumbers);
