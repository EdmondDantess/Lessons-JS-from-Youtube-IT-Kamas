var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDived = document.getElementById("buttonDived");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function makeOperation(operationcode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if (operationcode === "+") {
        var result = number1 + number2;
    } else if (operationcode === "-") {
        var result = number1 - number2;
    } else if (operationcode === "*") {
        var result = number1 * number2;
    } else if (operationcode === "/") {
        var result = number1 / number2;
    } else {
        window.alert("unknown operation");
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDived];

for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener("click", onOperationButtonClick);
   }


