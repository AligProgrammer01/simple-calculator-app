// Code for the calculator program

const display = document.getElementById("display");
var operationStorage = new Array(); // stores objects, which include the input and type of input (whether operator or number)




function evaluateExpression() {
    var expression = "";
    for (let i = 0; i < operationStorage.length; i++) {
        expression += operationStorage[i];
    };
    return expression
};


function appendToDisplay (input) {
    // display.value += input;
    if (input === "+") {
        display.value += "+";
        operationStorage.push("+")
    } else if (input === "-") {
        display.value += "-";
        operationStorage.push("-")
    } else if (input === "×") {
        display.value += "×";
        operationStorage.push("*")
    } else if (input === "÷") {
        display.value += "÷"
        operationStorage.push("/")
    } else {
        display.value += input;
        operationStorage.push(input)
    };
};



function clearDisplay () {
    display.value = "";
    operationStorage = [];
};



function calculate () {
    try {
        display.value = eval(evaluateExpression());
    }
    catch(error) {
        display.value = "Error";
    };
    
};