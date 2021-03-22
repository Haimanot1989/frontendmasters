"use strict";

function isPalindrome(str) {
  if (str <= 1) return true;
  var isPal = str[0] == str[str.length - 1];
  return isPal ? isPalindrome(str.slice(1, str.length - 1)) : false;
}

console.log(isPalindrome("") === true);
console.log(isPalindrome("a") === true);
console.log(isPalindrome("aa") === true);
console.log(isPalindrome("aba") === true);
console.log(isPalindrome("abba") === true);
console.log(isPalindrome("abccba") === true);

console.log(isPalindrome("ab") === false);
console.log(isPalindrome("abc") === false);
console.log(isPalindrome("abca") === false);
console.log(isPalindrome("abcdba") === false);
