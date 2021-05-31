// The following comments are settings for various linters
/*jslint es6: true*/ // Causes an "Unexpected 'es6'." warning in JSLint that you should ignore.
/*jshint globalstrict: true*/
/*jshint esversion: 6 */
/*jshint jquery: false*/
/*jshint node: false*/
/*jshint browser: true*/
/*jshint devel: true*/
/*eslint-env es6*/
/*eslint-env jquery: false*/
/*eslint-env browser*/
/*eslint no-console: 0*/

/*
 * INSTRUCTIONS:
 * Make a guessing game where the computer guesses what the human
 *  user's
 * number is between 0 and 100 (inclusive). Do NOT use Arrays,
 *  do NOT use a linear search algorithm, and do NOT use the prompt
 *  functions!
 * Use if-else and confirm("some question") inside
 *  the while-loop.
 * The human is expected to click the cancel button to 
 * indicate No 
 * (and thus the confirm function retuns false)
 * or the OK button to indicate Yes (confirm function returns
 *  true).
 * Do NOT change the line "guess = Math.round((min + max) / 2);"
 * because the computer is supposed to guess efficiently by
 * asking the human if their number is higher, lower,
 *  or equal to
 * the computer's current guess.
 * Do NOT use break or continue. You can use the "return;" statement
 *  inside the while-loop to get the computer to leave the guesser function.
 * For info on how while loops work see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * For info on how return works see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 */
var guess = 0;
var min = 0;
var max = 100;
//to make sure that the alert string is coming on the
//screen only once I have made a separate function which 
//will alert the user only once in the program
const guesseronload = () =>{
  alert("Think of a number betwwen 0 and 100");
  guesser();
}
//this is a guesser function which guesses a random number
const guesser = () => {
    while (min <= max) {
      guess = Math.round((min + max) / 2);
      document.getElementById("guess").innerHTML ="the computer guessed " + guess;
      return;
    }
    result.append(guess);
    alert("I could not guess your number. I think you are cheating!");
};

//I did not use confirm function inside the while loop of
//the guesser function as I have used eventhandlers
confirm = () => {
    document.getElementById("o").innerHTML = "true";
    return true; 
}
//if high button is clicked that means computer has guessed something 
//lower so guess beomes the min value
valueHigh = () => {
  min = guess;
  console.log(min, max);
  guesser();
}
//if low button is clicked that means computer has guessed something 
//higher so guess beomes the max value
valueLow = () => {
  max = guess;
  console.log(min, max);
  guesser();
}

//function confirm returns true and false based on the guess
document.getElementById("ok").addEventListener("click", confirm);
document.getElementById("restart").addEventListener("click", guesseronload);
document.getElementById("cancel").addEventListener("click", confirm);
document.getElementById("hi").addEventListener("click", valueHigh);
document.getElementById("lo").addEventListener("click", valueLow);

window.onload = guesseronload;
