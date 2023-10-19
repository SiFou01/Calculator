let currentValue = "";
let result = "";
let previousValue = "";
let operator = "";
let operation = "";
let click = 0;

let finalResult = document.getElementById("result");
let display = document.getElementById("display");

let btnAdd = document.getElementById("addition");
let btnEquals = document.getElementById("equals");

let btn0 = document.getElementById("n0");
let btn1 = document.getElementById("n1");
let btn2 = document.getElementById("n2");
let btn3 = document.getElementById("n3");
let btn4 = document.getElementById("n4");
let btn5 = document.getElementById("n5");
let btn6 = document.getElementById("n6");
let btn7 = document.getElementById("n7");
let btn8 = document.getElementById("n8");
let btn9 = document.getElementById("n9");

btn0.addEventListener("click", function(){makeValue("0"); write("0")});
btn1.addEventListener("click", function(){makeValue("1"); write("1")});
btn2.addEventListener("click", function(){makeValue("2"); write("2")});
btn3.addEventListener("click", function(){makeValue("3"); write("3")});
btn4.addEventListener("click", function(){makeValue("4"); write("4")});
btn5.addEventListener("click", function(){makeValue("5"); write("5")});
btn6.addEventListener("click", function(){makeValue("6"); write("6")});
btn7.addEventListener("click", function(){makeValue("7"); write("7")});
btn8.addEventListener("click", function(){makeValue("8"); write("8")});
btn9.addEventListener("click", function(){makeValue("9"); write("9")});

btnAdd.addEventListener("click", function(){makeOperator(" + "); write(" + ")});
btnEquals.addEventListener("click", function(){equate()});

function makeValue(n) {
    currentValue += n;
}

function write(ex) {
    if  (operation.length < 19) {
        operation += ex;
        if (click == 1 && ex == operator) {
            operation = `Ans ${operator}`
            click--;
        }
        else if (click == 1) {
            operation = ex;
            previousValue = "";
            currentValue = "";
            result = "";
            click--;
        }
        display.textContent = operation;
    }
}

function makeOperator(op) {
    if (!(currentValue == "") && !(previousValue == "")) {
        calculate(op)
    }
    else {
        previousValue = +currentValue;
    }
    currentValue = "";
    operator = "";
    operator = op;
}

function equate() {
    if (operator == " + ") {
       result = previousValue + +currentValue;
    }
    finalResult.textContent = result;
    click++;
}

function calculate(op) {
    if (op == " + ") {
        previousValue = previousValue + +currentValue;
    }
}