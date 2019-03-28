

//declare global variables and initialize game
var wordList = ["Mario", "Yoshi", "Link", "Zelda", "Princess Peach", "Luigi", "Bowser", "Mega Man", "Samus", "Zero Suit Samus", "Cloud", "Tifa", "Ganondorf", "Pac-Man", "Sonic The Hedghog", "Donkey Kong", "Little Mac", "Toad", "Rosalina", "Toadette"] 
var wordToGuess = Math.floor(Math.random() * wordList.length);
var answer = wordList[wordToGuess];
var myLength = answer.length;
var display = [myLength];
var victory = myLength;
var letters = answer.split(" ");
var remainingGuesses = 15;
var toScreen = "";
var userGuess = "";


console.log(answer)

//initial key press hides instructions and returns an underscore word from wordlist
/*document.onkeyup = function(event) {
   
    document.getElementById("game-begin").style.visibility = "hidden";
    
    document.getElementById("word-guess").innerHTML = wordToGuess;

    var underscores = "_ ".repeat(wordToGuess.length);
    
    console.log(underscores);
    document.getElementById("word-guess").innerHTML = underscores;
}*/

var startGame = function(){
    for (let i=0; i<answer.length; i++){
       
            display[i] = "_ ";
            toScreen = toScreen + display[i];
        
    }
    document.getElementById("word-guess").innerHTML = toScreen;
    toScreen = "";
}

window.onload = function(){
    startGame();
}


