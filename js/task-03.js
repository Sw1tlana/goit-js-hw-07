const inputText = document.getElementById("name-input");

const spanOutput = document.getElementById("name-output");

const title = document.querySelector("h1");
title.classList.add("span-output");

title.textContent = "Anonymous"; 

inputText.addEventListener("input", (event) => {
  const inputValue = inputText.value.trim();

  title.textContent  = inputValue === "" ? "Anonymous" : inputValue;
  
});

