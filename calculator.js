function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    if (num2 === 0) return "Cannot divide by 0";
    return num1 / num2;
  }
  
  function getInputs() {
    const number1 = parseFloat(document.getElementById("number1").value) || 0;
    const number2 = parseFloat(document.getElementById("number2").value) || 0;
    return [number1, number2];
  }
  
  document.getElementById("add").addEventListener("click", function () {
    const [num1, num2] = getInputs();
    document.getElementById("calculation-result").textContent = add(num1, num2);
  });
  
  document.getElementById("subtract").addEventListener("click", function () {
    const [num1, num2] = getInputs();
    document.getElementById("calculation-result").textContent = subtract(num1, num2);
  });
  
  document.getElementById("multiply").addEventListener("click", function () {
    const [num1, num2] = getInputs();
    document.getElementById("calculation-result").textContent = multiply(num1, num2);
  });
  
  document.getElementById("divide").addEventListener("click", function () {
    const [num1, num2] = getInputs();
    document.getElementById("calculation-result").textContent = divide(num1, num2);
  });
  