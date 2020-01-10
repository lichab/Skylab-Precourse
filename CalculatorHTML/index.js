// ====== Selectors ======== //
var buttons = document.querySelectorAll('button');
var equalsButton = document.getElementById('equals');
var acButton = document.getElementById('ac');
var display = document.getElementById('display');
var delButton = document.getElementById('borrar');

//-----
var oldResultDisplayed = false;
var operationValues = ['+', '-', '*', '/'];
//-----

//=========== Adding Events to selections ======== //

buttons.forEach(function(button) {
	button.addEventListener('click', addValue);
});

equalsButton.addEventListener('click', function(event) {
	if (display.value !== '') {
		display.value = eval(display.value);
		oldResultDisplayed = true;
	}
});

acButton.addEventListener('click', ac);

delButton.addEventListener('click', del);

// ====== Functions ========== //

function addValue(event) {
	var lastChar = display.value.slice(-1);
	var value = event.target.value;

	if (!oldResultDisplayed) {
		freshStart(value, lastChar);
	} else {
		keepGoing(value);
	}
}

function freshStart(value, lastChar) {
	if (event.target.className !== 'operation') {
		console.log(event);
		display.value += value;
	}
	if (operationValues.includes(value)) {
		if (!operationValues.includes(lastChar) && display.value !== '') {
			display.value += value;
		}
	}
}

function keepGoing(value) {
	if (operationValues.includes(value)) {
		display.value += value;
		oldResultDisplayed = false;
	} else {
		display.value = '';
		display.value += value;
		oldResultDisplayed = false;
	}
}

function ac() {
	display.value = '';
}

function del() {
	var newString = display.value.slice(0, -1);
	display.value = newString;
}
