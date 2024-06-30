function add(x, y) {
    return ((Number(x) + Number(y)).toPrecision(13) / 1).toString();
}

function subtract(x, y) {
    return ((Number(x) - Number(y)).toPrecision(13) / 1).toString();
}

function multiply(x, y) {
    return ((Number(x) * Number(y)).toPrecision(13) / 1).toString();
}

function divide(x, y) {
    if (y === '0') return NaN;
    return ((Number(x) / Number(y)).toPrecision(13) / 1).toString();
}

function operate(x, y, operation) {
    switch(operation) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case 'x':
            return multiply(x, y);
        case '÷':
            return divide(x, y);
    }
}

function getNumber(target) {
    if (screen.innerText.length >= 15) return 'error: number is too large';

    screen_txt += target.innerText;
    operator === null ? left_op = screen_txt : right_op = screen_txt;
    return screen_txt;
}

function getOperator(target) {
    if (!left_op) return screen.innerText;

    screen_txt = '';
    if (operator === null) {
        operator = target.innerText;
        return screen.innerText;
    } else {
        result = operate(left_op, right_op, operator);
        left_op = result;
        right_op = null;
        operator = target.innerText;
        return result;
    }
}

function getEquivalent(target) {
    if (!left_op || !right_op || !operator) return screen.innerText;
    
    left_op = operate(left_op, right_op, operator)
    operator = null;
    right_op = null;
    return left_op;
}


function setScreen(target) {
    if (target.id === 'ac') {
        screen.innerText = '0';
        screen_txt = '';
        left_op = null;
        right_op = null;
        operator = null;
    } else if (target.id === 'clear') {
        screen.innerText = '0';
        screen_txt = '';
        !operator? left_op = null : right_op = null;
    } else if (target.className === 'number') {
        screen.innerText = getNumber(target);
    } else if (target.className === 'operator') {
        screen.innerText = getOperator(target);
    } else if (target.id === 'equal') {
        screen.innerText = getEquivalent(target);
    }
}

let screen_txt = '';
let left_op = null;
let right_op = null;
let operator = null;

const container_div = document.querySelector('.container');
const screen = document.querySelector("#screen");

container_div.addEventListener('click', e => {
    setScreen(e.target);
    console.log(left_op, operator, right_op);
});

