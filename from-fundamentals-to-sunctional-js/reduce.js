var reduce = function(list, cb, initial){
    //loop through list
        //call the cb with arr[i], prev/initial
        //save the return value
    //return result
    let memo = initial;
    for(let i = 0; i < list.length; i++){
        if( i === 0 && !memo){
            memo = list[0];
        } else {
            memo = cb(list[i], memo);
        }
    }
    return memo;
}

var add = (a, b) => {return a + b};

console.log(reduce([1,2,3], add, 0));

function intersectionCb(intersectionAcc, arr){
    let acc = [];
    for(let i = 0; i < arr.length; i++){
        let item = arr[i];
        if(intersectionAcc.includes(item) && !acc.includes(item)){
            acc.push(item);
        }
    }
    return acc;
}