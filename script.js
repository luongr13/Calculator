function add(x, y) {
    return ((Number(x) + Number(y)).toPrecision(15) / 1).toString();
}

function subtract(x, y) {
    return ((Number(x) - Number(y)).toPrecision(15) / 1).toString();
}

function multiply(x, y) {
    return ((Number(x) * Number(y)).toPrecision(15) / 1).toString();
}

function divide(x, y) {
    if (y === '0') return NaN;
    return ((Number(x) / Number(y)).toPrecision(15) / 1).toString();
}

function operate(x, y, operator) {
    switch(operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '÷':
            return divide(x, y);
    }
}



// let arr = [];
// let op1;
// let op2;
// let operator;

const container_div = document.querySelector('.container');
const screen = document.querySelector("#screen");

// 
// container_div.addEventListener('click', e => {
//     screen.innerText = setScreen(e.target); 
// });

