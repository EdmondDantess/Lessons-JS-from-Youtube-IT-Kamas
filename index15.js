var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDived = document.getElementById("buttonDived");

function onButtonPlusClick() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 + number2;

    window.alert(summ);
}

function OnButtonMinusClick() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 - number2;

    window.alert(summ);
}

function onButtonMultiplyClick() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 * number2;

    window.alert(summ);
}

function onButtonDivedClick() {
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");
    
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ = number1 / number2;

    window.alert(summ);
}

buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", OnButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDived.addEventListener("click", onButtonDivedClick);