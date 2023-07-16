let firstNumber;
let operator;
let secondNumber;
let numbers = [];
let newOperator;

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
    document.getElementById("top").value = "";
    operate(number1, numbers[1], number2, false);
  }
  if (numbers.length == 4) {
    secondNumber = number.slice(0, -1);
    numbers.push(secondNumber);
    let number1 = parseInt(numbers[0]);
    let number2 = parseInt(numbers[2]);
    newOperator = numbers[3];
    operate(number1, numbers[1], number2, true, newOperator);
  }
}

function operate(
  firstNumber,
  operator,
  secondNumber,
  boolean, // Boolean is set to true if equal sign is not hit and multiple calculations were chained together (ex. 2 * 8 - 2 + 3)
  newOperator = numbers[1] // Optional parameter to allow you to chain different calculations together
) {
  if (operator == "+") {
    let answer = firstNumber + secondNumber;
    document.getElementById("output").value = answer;
    numbers.splice(0, numbers.length);
    if (boolean == true) {
      numbers.push(answer);
      numbers.push(newOperator);
      document.getElementById("output").value = "";
      document.getElementById("top").value = answer;
    }
  }
  if (operator == "-") {
    let answer = firstNumber - secondNumber;
    document.getElementById("output").value = answer;
    numbers.splice(0, numbers.length);
    if (boolean == true) {
      numbers.push(answer);
      numbers.push(newOperator);
      document.getElementById("output").value = "";
      document.getElementById("top").value = answer;
    }
  }
  if (operator == "x") {
    let answer = firstNumber * secondNumber;
    document.getElementById("output").value = answer;
    numbers.splice(0, numbers.length);
    if (boolean == true) {
      numbers.push(answer);
      numbers.push(newOperator);
      document.getElementById("output").value = "";
      document.getElementById("top").value = answer;
    }
  }
  if (operator == "/") {
    let answer = firstNumber / secondNumber;
    document.getElementById("output").value = answer;
    numbers.splice(0, numbers.length);
    if (boolean == true) {
      numbers.push(answer);
      numbers.push(newOperator);
      document.getElementById("output").value = "";
      document.getElementById("top").value = answer;
    }
  }
}
