"use strict";
const inputText = document.getElementById("name-input");

const spanOutput = document.getElementById("name-output");

inputText.addEventListener("input", (event) => {
  const inputValue = inputText.value.trim();

  spanOutput.textContent  = inputValue === "" ? "Anonymous" : inputValue;
  
});


