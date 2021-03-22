//When a button is clicked then the value of the button should be added to the screen
//if the screen has only 0 as a txt, replace it,
//
const buttons = document.querySelectorAll('.calc-button-row');
const screen = document.querySelector('.screen');
const operands = [];
const operators = [];
const resultArr = [];
let result;

buttons.forEach(
    function(item, idx){
        item.addEventListener('click', function(event){
            let clickedButtonText = event.target.innerText;
            let screenText = screen.innerText;
            let a = !isOperator(clickedButtonText);
            let b = isFirstNumberInput(screenText);
            if(a){
                if(b){
                    screen.innerText = clickedButtonText;
                } else{
                    screen.innerText += clickedButtonText;
                }
                operands.push(Number(screen.innerText));
            } else{
                switch(clickedButtonText){
                    case 'C':
                        screen.innerText = clear();
                        break;
                    case '÷':
                        screen.innerText = handleDevideButton();
                       break;
                    case 'x':
                       screen.innerText = handleMultiplicationButton();
                       break;
                    case '-':
                        screen.innerText = handleSubstructionButton();
                       break;
                    case '+':
                        screen.innerText = handleAdditionButton();
                       break;
                    case '=':
                        screen.innerText = calculatedResult();
                        //operands.length = 0;
                        //operators.length = 0;
                        break;
                }
            }
        });
    }
);

function isOperator(buttonText){
    return isNaN(buttonText);
}

function isFirstNumberInput(screenText){
    return Number(screenText) == 0;
}

function clear(){
    operands.length = 0;
    operators.length = 0;
}

function handleDevideButton(){
    operators.push('÷');
    if(operands && operands.length > 1){
        result /= operands[operands.length - 1];
        resultArr.push(result);
    }
    else 
        result = operands[0];
}

function handleMultiplicationButton(){
    operators.push('x');
    if(operands && operands.length > 1){
        result *= operands[operands.length - 1];
        resultArr.push(result);
    }
    else {
        result = operands[0];
    }
}

function handleSubstructionButton(){
    operators.push('-');
    if(operands && operands.length > 1){
        result -= operands[operands.length - 1];
        resultArr.push(result);
    }
    else 
        result = operands[0];
    return 0;
}

function handleAdditionButton(){
    operators.push('+');
    if(operands && operands.length > 1){
        result += operands[operands.length - 1];
        resultArr.push(result);
    }
    else {
        result = operands[0];
    }
}

function calculatedResult(){
    let lastOpearand = operands[operands.length - 1];
    switch(operators[operators.length - 1]){
        case '÷':
            return result / lastOpearand;
        case 'x':
            return result * lastOpearand;
        case '-':
            return result - lastOpearand;
        case '+':
            return result + lastOpearand;
    }

}