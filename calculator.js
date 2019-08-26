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


function power(a, b) {
	let total = 1;
	for (i = 0; i < b; i++) {
		total * a;
	}
	return total;
}

function factorial(a) {
	let total = 0;
	for (i = a; i > 0; i--) {
		total += a;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
