const display = document.getElementById('display');
let firstNumber = '';
let secondNumber = '';
let operationSymbol = '';
let result = 0;

function clearDisplay() {
    display.innerHTML = '';
};

function insertNumber(number) {
    display.textContent += number;
    console.log('number inserted');
    
};

function chooseOperation(operator) {
    firstNumber = display.textContent;
    clearDisplay();
    console.log('first number inserted');

    if (!firstNumber) {
        return;
    }
    chooseOperation = operator;
    console.log('operator chosen');
    
};

function checkVariables() {
    secondNumber = display.textContent;
    clearDisplay();

    if (!secondNumber) {
        return;
    }
    console.log('second number inserted');
    getResult();
    console.log('result');
    
};

const getSum = () => +firstNumber + +secondNumber;
const getSubtraction = () => +firstNumber - +secondNumber;
const getMultiplication = () => +firstNumber * +secondNumber;
const getDivision = () => +firstNumber / +secondNumber;

function getResult() {
    switch(operationSymbol) {
        case '+':
            result = getSum();
            break;

        case '-':
            result = getSubtraction();
            break;

        case '*':
            result = getMultiplication();
            break;

        case '/':
            result = getDivision();
            break;

        default:
            return;
    }
    display.textContent = result;
    console.log('switch case result');
    
};