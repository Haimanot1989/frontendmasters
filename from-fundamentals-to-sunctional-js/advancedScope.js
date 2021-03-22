const myAlert = () => {
    const x = "Help! I think I found a clue!";
    const alerter = () => {
        alert(x);
    };
    alerter();
};
alert()

const myAlert = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    };

    return alerter;

};

const funcAlert = myAlert();
const funcAlert2 = myAlert();
funcAlert(); // ==> alert(`${x} ${++count}`); and if we call this again, it will increment x

const newClue = (name) => {
    const length = name.length;

    return(weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    };
};

//when const didGreenDoItWithA = newClue('Green'); ==> This returns the inner function and we can call didGreenDoItWithA('weapon') executes the inner function. But the inner function has access to the variables in the parent scope

//Counter
function countClues(){
    var n = 0;
    return {
        count: function() { return ++n;},
        reset: function() { return n = 0;}
    };
};
//ES6 equivalent
const counterClues = () => {
    var n = 0;
    return {
        count: () => ++n,
        reset: () => n = 0
    };
};


//Timer
const makeTimer = () => {
    let elapsed = 0;

    const stopwatch = () => {
        return elapsed;
    };

    const increase = () => elapsed++;

    setInterval(increase, 1000);
    return stopwatch;
}

let timer = makeTimer();