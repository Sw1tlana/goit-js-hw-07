function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector(".change-color");
changeButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor () {
 const bodyColor = document.body;
 const colorSpan = document.querySelector(".color");
 const randomColor = getRandomHexColor();

 bodyColor.style.backgroundColor = randomColor;
 colorSpan.textContent = randomColor;
};
