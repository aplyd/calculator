let display = document.querySelector('#display');
let ac = document.querySelector('#ac');
let displayValue = [];

display.textContent = 0;

//reset display
function clear() {
    displayValue = [];
    display.textContent = 0;
    operateArray = [];
}

ac.addEventListener('click', function() {
    clear();

    mathButtons.forEach(function(el) {
        el.style.backgroundColor = 'white';
        el.style.color = 'black';
    })
});


//retrieve data from selected number button and update display
let numButtons = document.querySelectorAll('.numButtons');

numButtons.forEach(function(e) {
    e.addEventListener('click', function(event) {
        displayValue.push(event.target.value);
        display.textContent = displayValue.join('');

        resetMathButtonStyling();
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

        resetMathButtonStyling();
        
        operateArray[1] = event.target.value;
        event.target.style.backgroundColor = "black";
        event.target.style.color = "white";
    })
})

equalsButton = document.querySelector('#equalsButton');

equalsButton.addEventListener('click', function(event) {
    operateArray[2] = displayValue.join('');
    operate(operateArray[1], operateArray[0], operateArray[2]);

    resetMathButtonStyling();
})

//math formulas and operator function
let add = (a, b) => Number(a) + Number(b);
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

function operate(operator, a, b) {
    if (operator === '+') {
        display.textContent = (add(a, b));
    } else if (operator === '-') {
        display.textContent = (subtract(a, b));
    } else if (operator === '/') {
        display.textContent = (divide(a, b));
    } else if (operator === '*') {
        display.textContent = (multiply(a, b));
    } else {
        console.log('error in operate function');
    }
}


function resetMathButtonStyling() {
    mathButtons.forEach(function(el) {
        el.style.backgroundColor = 'white';
        el.style.color = 'black';
    })
}
