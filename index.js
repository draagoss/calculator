let display = document.querySelector(".display");
let currentInput = "";
let currentOperator = null;
let result = 0;

function insertNumber(nr) {
    currentInput += nr;
    display.value = currentInput;
}

function deleteDisplay() {
    currentInput = '';
    result = 0;
    currentOperator = null;
    display.value = '';
}

function insertOperator(operator) {
    if (currentInput !== "") {
        calculate();
    }
    currentOperator = operator;
    currentInput = "";
}

function calculate() {
    if (currentInput !== "") {
        const input = parseFloat(currentInput);
        switch (currentOperator) {
            case '+': result += input;
                break;

            case '-': result -= input;
                break;

            case '/': result /= input;
                break;

            case '*': result *= input;
                break;

            default: result = input;
        }
        currentInput = '';
        currentOperator = null;
        display.value = result;
    }
}

function percent() {
    display.value = parseFloat(currentInput) / 100;
}