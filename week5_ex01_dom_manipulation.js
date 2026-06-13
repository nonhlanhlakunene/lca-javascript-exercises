const generateBtn = document.getElementById("generateButton");
const resetBtn = document.getElementById("resetButton");
const spellArea = document.getElementById("spellArea");
const spellResult = document.getElementById("spellResult");

const ingredientsList = [
  "Dragon Scale",
  "Phoenix Feather",
  "Unicorn Horn"
];

function handleGenerateSpell() {
  let count = 3;
  
  const countdown = setInterval(() => {
    spellResult.textContent = count;
    
    if (count === 1) {
      clearInterval(countdown);
      
      const randomIndex = Math.floor(
        Math.random() * ingredientsList.length
      );
      
      const chosenIngredient = ingredientsList[randomIndex];
      
      spellResult.textContent =
      ` Magical Spell Ingredient: ${chosenIngredient} `;
      
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      
      spellArea.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    
    count--;
  }, 1000);
}

function handleReset() {
  spellResult.textContent = "Your spell will appear here...";
  spellArea.style.backgroundColor = "";
}

generateBtn.addEventListener("click", handleGenerateSpell);
resetBtn.addEventListener("click", handleReset);
