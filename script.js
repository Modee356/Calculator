let display = document.getElementById('display');

function AppendToDisplay(value) {
const display = document.getElementById('display');
  display.value += value;


  }
  function ClearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  function DeleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  function calculate() {
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    }catch (error){
        alert('Error: Invalid expression');
        display.value = '';
    }
}