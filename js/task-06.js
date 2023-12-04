function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
controls.classList.add("container-controls");

function createBoxes (amount) {
  const boxesContainer = document.getElementById("boxes");
  for(let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

const setCreateBtn = document.querySelector("[data-create]");
setCreateBtn.classList.add("create-btn");

setCreateBtn.addEventListener("click", () => {
   const input = document.querySelector("input");
   const amount = parseInt(input.value, 10);

   if(amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
   }
});

const removeDestroyBtn = document.querySelector("[data-destroy]");
removeDestroyBtn.classList.add("destroy-btn");

removeDestroyBtn.addEventListener("click", () => {
const boxesContainer = document.getElementById("boxes");
boxesContainer.innerHTML = "";
});
