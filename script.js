let ac = document.querySelector('#ac');
// let divideBtn = document.querySelector('#divide');
// let seven = document.querySelector('#seven');
// let eight = document.querySelector('#eight');
// let nine = document.querySelector('#nine');
// let multiplyBtn= document.querySelector('#multiply');
// let four = document.querySelector('#four');
// let five = document.querySelector('#five');
// let six = document.querySelector('#six');
// let minusBtn = document.querySelector('#minus');
// let one = document.querySelector('#one');
// let two = document.querySelector('#two');
// let three = document.querySelector('#three');
// let plusBtn = document.querySelector('#plus');
// let zero = document.querySelector('#zero');
// let decimal = document.querySelector('#decimal');
// let equalsBtn = document.querySelector('#equals');

let displayValue = 0;

let results = document.querySelector('#results');

let buttons = document.getElementsByClassName("click");

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else {
        console.log('error in operate function');
    }
}
