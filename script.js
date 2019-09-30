let display = document.querySelector('#display');
let ac = document.querySelector('#ac');
let displayValue = [];


//reset display
function clear() {
    displayValue = [];
    display.textContent = 0;
    operateArray = [];
}

ac.addEventListener('click', function() {
    clear();
});


//retrieve data from selected number button and update display
let numButtons = document.querySelectorAll('.numButtons');

numButtons.forEach(function(e) {
    e.addEventListener('click', function(event) {
        displayValue.push(event.target.value);
        display.textContent = displayValue.join('');
    })
})


//uh make calculator do math hopefully
let operateArray = [];
let mathButtons = document.querySelectorAll('.mathButtons');

mathButtons.forEach(function(e) {
    e.addEventListener('click', function(event) {
        operateArray[0] = displayValue.join('');
        displayValue = [];
        display.textContent = '';
        
        operateArray[1] = event.target.value;
        console.log(operateArray);
    })
})

equalsButton = document.querySelector('#equalsButton');

equalsButton.addEventListener('click', function(event) {
    operateArray[2] = displayValue.join('');
    operate(operateArray[1], operateArray[0], operateArray[2]);
})

//math formulas and operator function
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

function operate(operator, a, b) {
    if (operator === '+') {
        console.log(add(a, b));
    } else if (operator === '-') {
        console.log(subtract(a, b));
    } else if (operator === '/') {
        console.log(divide(a, b));
    } else if (operator === '*') {
        console.log(multiply(a, b));
    } else {
        console.log('error in operate function');
    }
}
