function appendValue(value) {
    document.getElementById("display").value += value;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
  