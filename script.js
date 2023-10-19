let str = "";

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

btn0.addEventListener("click", function(){addToString("0")});
btn1.addEventListener("click", function(){addToString("1")});
btn2.addEventListener("click", function(){addToString("2")});
btn3.addEventListener("click", function(){addToString("3")});
btn4.addEventListener("click", function(){addToString("4")});
btn5.addEventListener("click", function(){addToString("5")});
btn6.addEventListener("click", function(){addToString("6")});
btn7.addEventListener("click", function(){addToString("7")});
btn8.addEventListener("click", function(){addToString("8")});
btn9.addEventListener("click", function(){addToString("9")});

function addToString(n) {
    str += n;
}

let btnAdd = document.getElementById("o+");

btnAdd.addEventListener("click", function(){makeOperator("+")})

let operator = "";

function makeOperator(op) {
    operator = "";
    operator = op;
}

