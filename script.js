let firstNumber;
let operator;
let secondNumber;
let numbers = [];

function number(value) {
  let number = (document.getElementById("output").value += value);
  if (value == "C") {
    document.getElementById("output").value = "";
    numbers.splice(0, numbers.length);
  }
  if (value == "+" || value == "-" || value == "x" || value == "/") {
    firstNumber = number.slice(0, -1);
    operator = value;
    document.getElementById("output").value = "";
    numbers.push(firstNumber);
    numbers.push(operator);
  }
  if (value == "=") {
    secondNumber = number.slice(0, -1);
    numbers.push(secondNumber);
    let number1 = parseInt(numbers[0]);
    let number2 = parseInt(numbers[2]);
    operate(number1, numbers[1], number2);
  }
}

function operate(firstNumber, operator, secondNumber) {
  if (operator == "+") {
    let answer = firstNumber + secondNumber;
    document.getElementById("output").value = answer;
    numbers.splice(0, numbers.length);
  }
  if (operator == "-") {
    let answer = firstNumber - secondNumber;
    document.getElementById("output").value = answer;
    numbers.splice(0, numbers.length);
  }
  if (operator == "x") {
    let answer = firstNumber * secondNumber;
    document.getElementById("output").value = answer;
    numbers.splice(0, numbers.length);
  }
  if (operator == "/") {
    let answer = firstNumber / secondNumber;
    document.getElementById("output").value = answer;
    numbers.splice(0, numbers.length);
  }
}
