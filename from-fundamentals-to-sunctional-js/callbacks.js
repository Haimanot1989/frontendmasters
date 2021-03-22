#!/usr/bin/env node
/* const ifElse = (condition, isTrue, isFalse) => {
    return condition ? isTrue() : isFalse();
};

const logTrue = () => {console.log(true)};
const logFalse = () => {console.log(false)};
ifElse(true, logTrue,logFalse);

//Passing arguments
var increment = function(n){return n + 1;};
var square = function(n){ return n*n;};
var doMathSoIDontHaveTo = function(n, func){ return func(n);};
doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);

//To es6
const increment = (n) => { return n+1}; 
const square = (n) => n*n;
const doMathSoIDontHaveTo = (n, func) => {return func(n)}

const ifElse = (condition, isTrue, isFalsse, p) => {
    return condition ? isTrue() : isFalse();
}; */


var reduce = function(list, cb, initial){
    let memo = initial;
        for(let i = 0; i< list.length; i ++){
            if(i === 0 && memo === undefined) {
                memo = list[0];
            } else {
                memo = cb(list[i], memo)
            }
    }
    return memo;
}

console.log(reduce([1,2,3], (v, sum) => v + sum));

const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];
