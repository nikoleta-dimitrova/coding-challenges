// Calculator Output
let calculation = ""; 

function changeOutput(value) {
    if(value === ' = ') {
        let calculatorArray = calculation.split(' ');
        let number;

        for (let i = 0; i < calculatorArray.length; i++) {

            if (i == 0) {number = parseInt(calculatorArray[0]);}

            if (i % 2 != 0) {

                if(calculatorArray[i] == "+") {number += parseInt(calculatorArray[i + 1]);}
                else if(calculatorArray[i] == "-") {number -= parseInt(calculatorArray[i + 1]);}
                else if(calculatorArray[i] == "*") {number *= parseInt(calculatorArray[i + 1]);}
                else if(calculatorArray[i] == "/") {number /= parseInt(calculatorArray[i + 1]);}

            }
          }
          
          //After the for loop we display the answer
          document.getElementById("calculator-output").innerHTML = number;
    }
    else {
    document.getElementById("calculator-output").innerHTML += value;
    calculation += value;
    }
}

function clearOutput() {
    document.getElementById("calculator-output").innerHTML = "";
    calculation = "";
}

