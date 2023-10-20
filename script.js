let value = "";
let ans = 0;

let finalResult = document.getElementById("result");
let display = document.getElementById("display");

let btnAdd = document.getElementById("addition");
let btnSubtraction = document.getElementById("subtraction");
let btnMultiplication = document.getElementById("multiplication");
let btnDivision = document.getElementById("division");
let btnModulus = document.getElementById("modulus");
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
let btnDot = document.getElementById("dot");

btn0.addEventListener("click", function(){makeValue("0");});
btn1.addEventListener("click", function(){makeValue("1");});
btn2.addEventListener("click", function(){makeValue("2");});
btn3.addEventListener("click", function(){makeValue("3");});
btn4.addEventListener("click", function(){makeValue("4");});
btn5.addEventListener("click", function(){makeValue("5");});
btn6.addEventListener("click", function(){makeValue("6");});
btn7.addEventListener("click", function(){makeValue("7");});
btn8.addEventListener("click", function(){makeValue("8");});
btn9.addEventListener("click", function(){makeValue("9");});

btnDot.addEventListener("click", function(){makeValue(".");})

btnAdd.addEventListener("click", function(){makeValue(" + ")});
btnSubtraction.addEventListener("click", function(){makeValue(" - ")});
btnMultiplication.addEventListener("click", function(){makeValue(" × ")});
btnDivision.addEventListener("click", function(){makeValue(" ÷ ")});
btnModulus.addEventListener("click", function(){makeValue(" % ")});
btnEquals.addEventListener("click", function(){equate()});

function makeValue(n) {
    value += n;
}

// this function checks the operator and replaces in the array the operation made with the answer.

function equate() {
    value = value.split(" ");
    for (let i = 1 ;i < value.length;) {
        if (value.includes("÷") || value.includes("×") || value.includes("%")) {
            indexDiv = value.indexOf("÷");
            indexMul = value.indexOf("×");
            indexMod = value.indexOf("%");
            if ((indexDiv < indexMul || indexMul == -1) && (indexDiv < indexMod || indexMod == -1) && indexDiv !== -1) {
                ans = +value[indexDiv - 1] / +value[indexDiv + 1];
                value.splice(indexDiv - 1, 3,ans);
            }
            else if ((indexMul < indexDiv || indexDiv == -1) && (indexMul < indexMod || indexMod == -1) && indexMul !== -1) {
                ans = +value[indexMul - 1] * +value[indexMul + 1];
                value.splice(indexMul - 1, 3,ans);
            }
            else if ((indexMod < indexDiv || indexDiv == -1) && (indexMod < indexMul || indexMul == -1) && indexMod !== -1) {
                ans = +value[indexMod - 1] % +value[indexMod + 1];
                value.splice(indexMod - 1, 3,ans);
            }
        }
        else if (value.includes("+") || value.includes("-")) {
            indexAdd = value.indexOf("+");
            indexSub = value.indexOf("-");
            if ((indexAdd < indexSub || indexSub == -1) && indexAdd !== -1) {
                ans = +value[indexAdd - 1] + +value[indexAdd + 1];
                value.splice(indexAdd - 1, 3,ans);
            }
            else if ((indexSub < indexAdd || indexAdd == -1) && indexSub !== -1) {
                ans = +value[indexSub - 1] - +value[indexSub + 1];
                value.splice(indexSub - 1, 3,ans);
            }
        }
    }
    finalResult.textContent = ans;
}