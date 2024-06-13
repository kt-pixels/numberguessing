// console.log("hello")

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const resultParas = document.querySelector(".resultParas");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

// Create Element
const p = document.createElement("p");

let prevResult = [];
let numbGuesses = 1;
let playGame = true;

let randomNumb = Math.round(Math.random() * 100 + 1);
console.log(randomNumb);

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    const userValue = userInput.value;
    validateGuess(userValue);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter A Valid Value");
  } else if (guess < 1) {
    alert("Please Enter A Number Greater Then 1 or 1");
  } else if (guess > 100) {
    alert("Please Enter A Number Less Then Or Equals To 100");
  } else {
    prevResult.push(guess);
    if (numbGuesses > 10) {
      displayMessage(`Game Over. The Random Number Is ${randomNumb}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess > randomNumb) {
    displayMessage("The Number You Enter Is Toooooo High");
  } else if (guess < randomNumb) {
    displayMessage("The Number You Enter Is Toooooo Low");
  } else {
    displayMessage(`You Won This Match, The Correct Anser is ${randomNumb}`);
    endGame();
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guesses.innerHTML += `${guess}, `;
  numbGuesses++;
  lastResult.innerHTML = `${11 - numbGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");

  playGame = false;

  p.className = "newGame";

  p.innerHTML = "Start New Game";

  resultParas.appendChild(p);

  newGame();
}

function newGame() {
  const newGameStart = document.querySelector(".newGame");
  newGameStart.addEventListener("click", (e) => {
    userInput.removeAttribute("disabled");
    // randomNumb = Math.round(Math.random() * 100 + 1);
    // prevResult = [];

    playGame = true;
    if (playGame) {
      randomNumb = Math.round(Math.random() * 100 + 1);
      prevResult = [];
      guesses.innerHTML = ""
      numbGuesses = 1;
      lastResult.innerHTML = `${11 - numbGuesses}`;
      lowOrHi.innerHTML = ""
      newGameStart.style.display = "none"
    }
  });
}
