import "./style.css";

const textArea = document.getElementById("textbox");
const characterCounter = document.getElementById("char_count");
const maxNumOfChars = 250;

console.log(textArea);



const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;

  let counter = maxNumOfChars - numOfEnteredChars;
  characterCounter.textContent = counter + "/250";
  if (counter < 0) {
    characterCounter.style.color = "red";
  } else if (counter < 20) {
    characterCounter.style.color = "orange";
    
  } else {
    characterCounter.style.color = "white";
  }
};

document.querySelector("#textbox").addEventListener("input", countCharacters);

