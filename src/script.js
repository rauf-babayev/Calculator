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
};

function chooseOperation(operator) {
    firstNumber = display.textContent;
    clearDisplay();

    if (!firstNumber) {
        return;
    }
    operationSymbol = operator;    
};

function checkVariables() {
    secondNumber = display.textContent;
    clearDisplay();

    if (!secondNumber) {
        return;
    }
    getResult();    
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
        case '÷':
            result = getDivision();
            break;
        default:
            return;
    }
    display.textContent = result;
};