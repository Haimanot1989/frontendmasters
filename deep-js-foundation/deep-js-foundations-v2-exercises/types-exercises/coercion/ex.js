// TODO: write the validation functions

/**
 	- must be a string
	- must be non-empty
	- must contain non-whitespace of at least 3 characters
 */
function isValidName(name) {
  return typeof name == "string" && name.trim().length >= 3;
}

/*
2. Define an `hoursAttended(..)` validator that takes two parameters, `attended` and `length`. The validator returns `true` if all the following match the two parameters (`false` otherwise):

	- either parameter may only be a string or number
	- both parameters should be treated as numbers
	- both numbers must be 0 or higher
	- both numbers must be whole numbers
	- `attended` must be less than or equal to `length`
 */
function hoursAttended(attended, length) {
  let allowedTypes = ["string", "number"];
  let paramsAreOfAllowedTypes =
    typeof allowedTypes.includes(typeof attended) &&
    allowedTypes.includes(typeof length);

  let parsedAttend = Number.parseInt(attended);
  let parsedLength = Number.parseInt(length);

  let canBeParsedToNumber = !isNaN(parsedAttend) && !isNaN(parsedLength);
  let isInt = parsedAttend === attended && parsedLength === length;

  let validSize =
    parsedAttend > 0 && parsedLength > 0 && parsedAttend <= length;

  return paramsAreOfAllowedTypes && canBeParsedToNumber && isInt && validSize;
}

// tests:
console.log(isValidName("Frank") === true);

// console.log(hoursAttended(6, 10) === true);
// console.log(hoursAttended(6, "10") === true);
// console.log(hoursAttended("6", 10) === true);
// console.log(hoursAttended("6", "10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

// //console.log(hoursAttended("", 6) === false);

// console.log(hoursAttended(6, "") === false);
// console.log(hoursAttended("", "") === false);
// console.log(hoursAttended("foo", 6) === false);
// console.log(hoursAttended(6, "foo") === false);
// console.log(hoursAttended("foo", "bar") === false);
// console.log(hoursAttended(null, null) === false);
// console.log(hoursAttended(null, undefined) === false);
// console.log(hoursAttended(undefined, null) === false);
// console.log(hoursAttended(undefined, undefined) === false);
// console.log(hoursAttended(false, false) === false);
// console.log(hoursAttended(false, true) === false);
// console.log(hoursAttended(true, false) === false);
// console.log(hoursAttended(true, true) === false);
// console.log(hoursAttended(10, 6) === false);
// console.log(hoursAttended(10, "6") === false);
// console.log(hoursAttended("10", 6) === false);
// console.log(hoursAttended("10", "6") === false);
// console.log(hoursAttended(6, 10.1) === false);
// console.log(hoursAttended(6.1, 10) === false);
// console.log(hoursAttended(6, "10.1") === false);
// console.log(hoursAttended("6.1", 10) === false);
// console.log(hoursAttended("6.1", "10.1") === false);
