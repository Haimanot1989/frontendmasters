#!/usr/bin/env node
const constructArr = function() {
    //const arr = Array.prototype.slice.call(arguments);
    const arr = Array.from(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};
console.log(constructArr('was', 'it', 'in'));


//implementing _.from()
//create an array like object that has indices and length, but no array method like push
const from = arr => {
    return Array.prototype.slice.call(arr)
}