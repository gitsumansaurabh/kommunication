const adviceNumber = document.getElementById("adviceNumber");
const adviceText = document.getElementById("adviceText");
const newAdviceButton = document.getElementById("newAdviceButton");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { id, advice } = data.slip;
      adviceNumber.textContent = `Advice #${id}`;
      adviceText.textContent = `"${advice}"`;
    })
    .catch((error) => {
      console.error("Error:", error);
      adviceText.textContent =
        "An error occurred while fetching advice. Please try again.";
    });
}

newAdviceButton.addEventListener("click", getAdvice);
getAdvice();
