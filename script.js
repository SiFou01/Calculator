let str = "";
let result = "";
let value = "";
let operator = "";
let expression = "";
let click = 0;

let finalResult = document.getElementById("result");
let written = document.getElementById("write");

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

btn0.addEventListener("click", function(){addToString("0"); write("0")});
btn1.addEventListener("click", function(){addToString("1"); write("1")});
btn2.addEventListener("click", function(){addToString("2"); write("2")});
btn3.addEventListener("click", function(){addToString("3"); write("3")});
btn4.addEventListener("click", function(){addToString("4"); write("4")});
btn5.addEventListener("click", function(){addToString("5"); write("5")});
btn6.addEventListener("click", function(){addToString("6"); write("6")});
btn7.addEventListener("click", function(){addToString("7"); write("7")});
btn8.addEventListener("click", function(){addToString("8"); write("8")});
btn9.addEventListener("click", function(){addToString("9"); write("9")});

function addToString(n) {
    str += n;
}

function write(ex) {
    if (expression.length < 19) {
        expression += ex;
        if (click == 1 && ex == operator) {
            expression = `Ans ${operator}`
            click--;
        }
        else if (click == 1) {
            expression = ex;
            click--;
        }
        written.textContent = expression;
    }
}

let btnAdd = document.getElementById("o+");

btnAdd.addEventListener("click", function(){makeOperator(" + "); write(" + ")})

function makeOperator(op) {
    if (!(str == "") && !(value == "")) {
        two()
    }
    else {
        value = +str;
    }
    str = "";
    operator = "";
    operator = op;
}

let btnEquals = document.getElementById("equals");

btnEquals.addEventListener("click", function(){equate()})

function equate() {
    if (operator == " + ") {
       result = value + +str;
    }
    finalResult.textContent = result;
    click++;
}

function two() {
    value = value + +str;
}