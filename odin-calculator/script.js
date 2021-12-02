let screen = document.getElementById("screen");
let pastscreen = document.getElementById("past");
let calculator = {
  display: "",
  num1: "",
  num2: "",
  operator: "",
  second: false,
};

function addNum(number) {
  if (calculator.second == false) {
    calculator.display += number;
    calculator.num1 += number;
    screen.innerText = calculator.display;
  } else if (calculator.second == true) {
    calculator.display += number;
    calculator.num2 += number;
    screen.innerText = calculator.display;
  }
}

function operateButton(operant) {
  calculator.display = "";
  screen.innerText = calculator.display;
  calculator.operator = operant;
  calculator.second = true;
  pastscreen.innerText = calculator.num1;
}

function equal() {
  if (calculator.operator === "/") {
    calculator.display = Number(calculator.num1) / Number(calculator.num2);
    screen.innerText = calculator.display;
    pastscreen.innerText = "";
  } else if (calculator.operator === "+") {
    calculator.display = Number(calculator.num1) + Number(calculator.num2);
    screen.innerText = calculator.display;
    pastscreen.innerText = "";
  } else if (calculator.operator === "-") {
    calculator.display = Number(calculator.num1) - Number(calculator.num2);
    screen.innerText = calculator.display;
    pastscreen.innerText = "";
  } else if (calculator.operator === "x") {
    calculator.display = Number(calculator.num1) * Number(calculator.num2);
    screen.innerText = calculator.display;
    pastscreen.innerText = "";
  }
}

function clearObj() {
  calculator.display = "";
  calculator.num1 = "";
  calculator.num2 = "";
  calculator.operator = "";
  calculator.second = false;
  screen.innerText = calculator.display;
  pastscreen.innerText = "";
}
