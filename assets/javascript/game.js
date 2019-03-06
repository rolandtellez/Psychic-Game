var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var guessesArray = [];
document.getElementById("guessed-letters").innerHTML = guessesArray;

document.getElementById("displayed-wins").textContent = wins;
document.getElementById("displayed-losses").textContent = losses;
document.getElementById("guesses-left").textContent = remainingGuesses;

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function newGame() {

var letterToGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(letterToGuess);

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);

    if (userGuess === letterToGuess){
        wins++;
        remainingGuesses = 9;
        guessesArray = [];
        newGame();

    }   else if (guessesArray.includes(userGuess)){
        remainingGuesses++;
        remainingGuesses--;
    }
    
    else {remainingGuesses--;
            guessesArray.push(userGuess);
            document.getElementById("guessed-letters").innerHTML = guessesArray;
    };



    if (remainingGuesses === 0){
        losses++;
        remainingGuesses = 9;
        guessesArray = [];
        newGame();
    };
    





document.getElementById("displayed-wins").textContent = wins;

document.getElementById("displayed-losses").textContent = losses;

document.getElementById("guesses-left").textContent = remainingGuesses;

document.getElementById("guessed-letters").innerHTML = guessesArray;

}}