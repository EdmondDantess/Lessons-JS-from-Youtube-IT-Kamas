var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDived = document.getElementById("buttonDived");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function getNumber1() {
    return Number(input1.value);
}

function getNumber2() {
    return   Number(input2.value);
}

function makeOperation(operationcode) {
    if (operationcode === "+") {
        var result = getNumber1() + getNumber2();
    } else  if (operationcode === "-") {
        var result = getNumber1() - getNumber2();
    } else if (operationcode === "*") {
        var result = getNumber1() * getNumber2();
    } else if (operationcode === "/") {
        var result = getNumber1() / getNumber2();
    } else {
        window.alert("unknown operation");
    }
     window.alert(result);
}

function onButtonPlusClick() {
 makeOperation("+");
}

function OnButtonMinusClick() {
    makeOperation("-");
}

function onButtonMultiplyClick() {
    makeOperation("*");
}

function onButtonDivedClick() {
    makeOperation("/");
}

buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", OnButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDived.addEventListener("click", onButtonDivedClick);