// ====== Selectors ======== //
var BUTTONS = document.querySelectorAll('button')
var EQUALS_BUTTON = document.getElementById('equals');
var AC = document.getElementById('ac');
var DISPLAY = document.getElementById('display');
var DEL = document.getElementById('borrar');

//-----
var OLD_RESULT_DISPLAYED = false;
var operationValues = ['+', '-', '*', '/']
//-----

//=========== Adding Events to selections ======== //

BUTTONS.forEach(function(button){
    button.addEventListener('click', addValue)
});

EQUALS_BUTTON.addEventListener('click', function(event){
    if(DISPLAY.value !== ""){
        DISPLAY.value = eval(DISPLAY.value);
        OLD_RESULT_DISPLAYED = true;
    }
});

AC.addEventListener('click', ac)

DEL.addEventListener('click', del);

// ====== Functions ========== //

function addValue(event){
    
    var lastChar = DISPLAY.value.slice(-1);
    var value = event.target.value;

    if(!OLD_RESULT_DISPLAYED){
        freshStart(value, lastChar)
    } else  {
        keepGoing(value);
    }
}

function freshStart(value, lastChar) {
    if(event.target.className !== "operation"){
        console.log(event)
        DISPLAY.value += value
    }
    if(operationValues.includes(value)){
        if(!operationValues.includes(lastChar) && DISPLAY.value !== ''){
            DISPLAY.value += value;
        }
    }
}

function keepGoing(value) {
    if(operationValues.includes(value)){
        DISPLAY.value += value;
        OLD_RESULT_DISPLAYED = false;
    } else {
        DISPLAY.value = "";
        DISPLAY.value += value;
        OLD_RESULT_DISPLAYED = false;
    } 
}

function ac() {
    DISPLAY.value = "";
};

function del(){
    var newString = DISPLAY.value.slice(0, -1);
    DISPLAY.value = newString;
}


