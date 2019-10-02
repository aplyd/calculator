let display = document.querySelector('#display');
let ac = document.querySelector('#ac');
let displayValue = [];
let operateArray = [];

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

        operateArray[0] = displayValue.join('');
        //update operateArray[1] here instead of pulling value from display
        console.log(operateArray); 
    })
})


//uh make calculator do math hopefully
let mathButtons = document.querySelectorAll('.mathButtons');

mathButtons.forEach(function(e) {
    e.addEventListener('click', function(event) {
        
        displayValue = [];
        display.textContent = displayValue;

        resetMathButtonStyling();
        
        operateArray[1] = event.target.value;
        event.target.style.backgroundColor = "black";
        event.target.style.color = "white";
        console.log(operateArray);
    })
})

equalsButton = document.querySelector('#equalsButton');

equalsButton.addEventListener('click', function(event) {
    operateArray[2] = displayValue.join('');
    display.textContent = operate(operateArray[0], operateArray[1], operateArray[2]);
    console.log(operateArray);
    resetMathButtonStyling();
})

//math formulas and operator function
let add = (a, b) => Number(a) + Number(b);
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

function operate(a, operator, b) {
    if (operator === '+') {
        display.textContent = add(a, b);

    } else if (operator === '-') {
        display.textContent = subtract(a, b);

    } else if (operator === '/') {
        display.textContent = divide(a, b);

    } else if (operator === '*') {
        display.textContent = multiply(a, b);

    } else {
        console.log('error in operate function');
    }
}

//reset styling
function resetMathButtonStyling() {
    mathButtons.forEach(function(el) {
        el.style.backgroundColor = 'white';
        el.style.color = 'black';
    })
}
