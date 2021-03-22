function upper(strings, ...values) {
  var str = "";

  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == "string") {
        str += values[i - 1].toUpperCase();
      } else {
        str += values[i - 1];
      }
    }
    str += strings[i];
  }
  console.log(str);
  return str;
}

var name = "kyle",
  twitter = "getify",
  topic = "JS Recent Parts";

console.log(
  upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
