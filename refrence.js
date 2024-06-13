// const randomNumber = parseInt(Math.random() * 100 + 1);
// // const randomNumber = Math.round((Math.random() * 100) + 1)

// console.log(randomNumber)

// const guessField = document.querySelector("#guessField");
// const submit = document.querySelector("#subt");
// const guesses = document.querySelector(".guesses");
// const lastResult = document.querySelector(".lastResult");
// const lowOrHigh = document.querySelector(".lowOrHi");
// const resultParas = document.querySelector(".resultParas");

// const createButton = document.createElement('button')

// const p = document.createElement("p");

// let prevGuess = [];
// let numberRemaining = 1;
// let playGame = true;

// if(playGame){
//     submit.addEventListener('click', (e) => {
//         e.preventDefault()
//         const value = guessField.value
//         // console.log(value)
//         validateGuess(value)
//     })
// }

// function validateGuess(guess){
//     if(isNaN(guess)){
//         alert("Please Enter A Valid Number")
//         guessField.value = ""
//     }else if(guess < 1){
//         alert("Please Enter A Number Greater Than 1")
//         guessField.value = ""
//     }else if(guess > 100){
//         alert("Please Enter A Number Less Than 101")
//         guessField.value = ""
//     }else{
//         prevGuess.push(guess)
//         if(numberRemaining > 10){
//             displayMessage(`Game Over. Random Number Is ${randomNumber}`)
//             endGame()
//         }else{
//             displayGuess(guess)
//             checkGuess(guess)
//         }
//     }
// }
// function checkGuess(guess){
//     if(guess < randomNumber){
//         displayMessage("Ooooo Your Number Is Toooo Low")
//     }else if(guess > randomNumber){
//         displayMessage("Oooo Your Guess Number Is Tooooooo High")
//     }else{
//         displayMessage("You Won")
//         endGame()
//     }
// }
// function displayGuess(guess){
//     guessField.value = ""
//     guesses.innerHTML += `${guess} , `
//     numberRemaining++
//     lastResult.innerHTML = `${11 - numberRemaining}`
// }
// function displayMessage(message){
//     lowOrHigh.innerHTML = `<h2>${message}</h2>`
// }
// function endGame(){
//     guessField.value = ""
//     guessField.setAttribute('disabled', "")
//     // resultParas.innerHTML = ""

//     playGame = false

//     createButton.id = "newGame"

//     createButton.innerHTML = `Start New Game`

//     resultParas.appendChild(createButton)

//     newGameStart()
// }
// function newGameStart(){
//     const newGame = document.querySelector('#newGame')
    
//     newGame.addEventListener('click', () => {

//         guessField.removeAttribute('disabled')
//         guessField.value = ""

//         resultParas.removeChild('button')

//         playGame = true
//     })
// }
