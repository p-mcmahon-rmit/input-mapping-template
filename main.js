///////////// Button
let myButton = document.getElementById("exampleButton");
let buttonOutputText = document.getElementById("buttonOutput");
let buttonEventText = document.getElementById("currentButtonEvent");

function exampleFunction(){
  let screenWidth = window.innerWidth;
  buttonOutputText.textContent = `This window is ${screenWidth}px wide.`;
}

myButton.addEventListener("click", exampleFunction);

myButton.addEventListener("mouseenter", () => { 
  buttonEventText.textContent = "mouseenter";
});

myButton.addEventListener("mouseleave", () => { 
  buttonEventText.textContent = "mouseleave";
});

myButton.addEventListener("mousedown", () => { 
  buttonEventText.textContent = "mousedown";
});

myButton.addEventListener("mouseup", () => { 
  buttonEventText.textContent = "mouseup";
});

///////////// Checkbox
let myCheckbox = document.getElementById("exampleCheckbox");
let checkboxOutputText = document.getElementById("checkboxOutput");
let checkboxCheckedText = document.getElementById("checkboxChecked");

myCheckbox.addEventListener("change", (e) => {
  checkboxOutputText.textContent = e.target.value;
  checkboxCheckedText.textContent = e.target.checked;
});

///////////// Radio
let mySineRadio = document.getElementById("sine");
let myTriangleRadio = document.getElementById("triangle");
let radioOutputText = document.getElementById("radioOutput");

function listRadioSelection(e){
  console.log(e.target);
  radioOutputText.textContent = e.target.value;
}

mySineRadio.addEventListener("input", listRadioSelection);
myTriangleRadio.addEventListener("input", listRadioSelection);

///////////// Range
let myRange = document.getElementById("exampleRange");
let rangeOutputText = document.getElementById("rangeOutput");

/* difference between change and input events */
myRange.addEventListener("input", (e) => {
  rangeOutputText.textContent = e.target.value;
});

///////////// Range
let myColourPicker = document.getElementById("exampleColourPicker");
let colourOutputText = document.getElementById("colourOutput");

myColourPicker.addEventListener("input", listColourOutput);

function listColourOutput(e){
  colourOutputText.textContent = e.target.value;
}