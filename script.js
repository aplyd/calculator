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

        //update display
        displayValue.push(event.target.value);
        display.textContent = displayValue.join('');
        
        //update calculation
        if (operateArray.length > 1) {
            operateArray[2] = displayValue.join('');
        } else {
            operateArray[0] = displayValue.join('');
        }
        
        console.log(operateArray);
        resetMathButtonStyling();
    })
})


//uh make calculator do math hopefully
let mathButtons = document.querySelectorAll('.mathButtons');

mathButtons.forEach(function(e) {
    e.addEventListener('click', function(event) {
        
        //reset display
        displayValue = [];
        display.textContent = displayValue;

        
        //update calculation
        if (operateArray.length == 3) {
            operateArray[0] = operate(operateArray[0], operateArray[1], operateArray[2]);
        }

        operateArray[1] = event.target.value;

        console.log(operateArray);
        //update styling
        resetMathButtonStyling();
        event.target.style.backgroundColor = "black";
        event.target.style.color = "white";
        
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
        return add(a, b);

    } else if (operator === '-') {
        return subtract(a, b);

    } else if (operator === '/') {
        return divide(a, b);

    } else if (operator === '*') {
        return multiply(a, b);

    } else {
        console.log('no calculation done');
    }
}

//reset styling
function resetMathButtonStyling() {
    mathButtons.forEach(function(el) {
        el.style.backgroundColor = 'white';
        el.style.color = 'black';
    })
}
