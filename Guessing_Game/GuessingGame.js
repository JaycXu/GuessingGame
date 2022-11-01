var submitGuess = document.getElementById('submitGuess');
var playAgain = document.getElementById('playAgain');
var output = document.getElementById('outputText');
var hint = document.getElementById('hint');
var guess = document.getElementById('previousGuess');
var remaining = document.getElementById('remaining');

let count = 5;
let hintguess = 1;
submitGuess.disable = false;
remaining.innerText= "You have " + count + " times left";

// to select a number between one to a hundred randomly
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
// TEST - console.log('Random Number', randomNum)

// to create a function named checkGuessNum to compare the guess number and the select number
function checkGuessNum(){
    //var submitGuess = document.getElementById('submitGuess').value;
    let inputNum = document.getElementById('playerInput').value;
    console.log(inputNum);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputNum.toString()));
    guess.appendChild(li);
// if the guess number is the same as the select number, return "You got it right!"
    if (inputNum == randomNum) {

        output.innerText = "Congratulations, You got it right!";

// if the guess number higher than the select number, return "Your guess is too high. Please try agian!"
    } else if (inputNum > randomNum) {

        output.innerText = "Your guess is too high. Please try again!";
    } 
   
// if the guess number lower than the select number, return "Your guess is too low. Please try agian!"    
    else if (inputNum < randomNum) {

        output.innerText = "Your guess is too low. Please try agian!";
    }
    
}

// run the checkGuessNum function when the player click the Submit Guess buttom

submitGuess.addEventListener('click', function(){
    if(count > 0){
       count = count - 1;
       remaining.innerText= "You have " + count + " times left";
       checkGuessNum(); 
    }else{
        submitGuess.disable = true;
        output.innerText = "No ramianing"
    }
    
});


hint.addEventListener('click', function(){
    if(hintguess >= 1){
        hintguess = hintguess - 1;
        output.innerText = (Math.floor(Math.random() * 100) + 1).toString() + " " + randomNum.toString() + " " + (Math.floor(Math.random() * 100) + 1).toString();
    }else{
        output.innerText = "One chance only";
    }
    
});



// reload the page when the player click the Play Again buttom
playAgain.addEventListener('click', function(){
    location.reload();
});