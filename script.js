let display = document.querySelector('#display');
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

//reset display
let resetDisplayValue = 0;

let clear = () => display.textContent = resetDisplayValue;

ac.addEventListener('click', function() {
    clear();
});

//retrieve data from selected button
let buttons = document.querySelectorAll('.buttons');

buttons.forEach(function(e) {
    e.addEventListener('click', function() {
        console.log(e.target);
    })
})

// buttons.addEventListener('click', function(e) {
//     console.log(e.target);
// })

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
