function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	if (arr.length == 0) {
		return 0;
	} else {
		let total = 0;
		for (i = 0; i < arr.length; i++) {
			total += arr[i];
		}
		return total;
	}
}

function multiply (arr) {
	if (arr.length <= 0) {
		return 0;
	} else {
		let total = arr[arr.length - 1];
		for (i = 0; i < arr.length - 1; i++) {
			total = arr[i] * total;
		}
		return total;
	}
}

//LEFT OFF HERE
function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	if (a == 0 || a == 1) {
		return 1;
	} else {
		return (a * factorial(a - 1));
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
