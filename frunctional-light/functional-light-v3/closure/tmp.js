function strBuilder(str) {
  return function next(v) {
    if (typeof v == "string") {
      return strBuilder(str + v); //Closing over
    }
    return str;
  };
}

var hello = strBuilder("Hello");
var haimanot = hello(" Haimanot");
var hanna = haimanot(" & Hanna");

console.log(hello()); //Hello
console.log(haimanot()); //Hello Haimanot
console.log(hanna()); //Hello Haimanot & Hanna
