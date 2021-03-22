function isVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char);
}

function countVowels(str) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("The quick brown fox jumps over the lazy dog"));

function countVowels(str) {
  if (str.length == 0) return 0;
  var first = isVowel(str[0]) ? 1 : 0;
  return first + countVowels(str.slice(1));
}
