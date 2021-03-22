//currying: functional technique - when creating a function that can be called multiple times with different arguments curriedFun(arg1)(arg2)(arg3)
// allows us to break a arguments passed nu a number of arguments
 const curry = (fn) => {
     return (arg) => {
        return (arg2) => {
            return fn(arg, arg2)
        }
     }
 }

 var abc = function(a, b){
     return[a, b];
 };

 var curried = curry(abc);

 curried(1)(2)
 // => [1, 2]



 const compose = (fn, fn2) => {
    return (arg) => {
        const result = fn2(arg);
        return fn(result);
    }
}

 const consider = (name) => {
     return `I think it could be... ${name}`;
 };

 const exclaim = (statement) => {
     return `${statement.toUppercase()}!`;
 }

 const blame = compose(consider, exclaim);

 blame('you');

