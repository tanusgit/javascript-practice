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
 * Make a guessing game where the computer guesses what the human user's
 * number is between 0 and 100 (inclusive). Do NOT use Arrays, do NOT use a linear search algorithm, and do NOT use the prompt functions!
 * Use if-else and confirm("some question") inside the while-loop.
 * The human is expected to click the cancel button to indicate No (and thus the confirm function retuns false)
 * or the OK button to indicate Yes (confirm function returns true).
 * Do NOT change the line "guess = Math.round((min + max) / 2);"
 * because the computer is supposed to guess efficiently by
 * asking the human if their number is higher, lower, or equal to
 * the computer's current guess.
 * Do NOT use break or continue. You can use the "return;" statement inside the while-loop to get the computer to leave the guesser function.
 * For info on how while loops work see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * For info on how return works see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
 */

/* TODO: I see that you were trying to do this assignment by manipulating the DOM and using events, but we have not learned enough yet to do that in a straightforward way, so just use the alert and the confirm methods to communicate with the user. You must not change the HTML code. */
const guesser = () => {
    // TODO: We are using ES6 in this assignment, so use let instead of var.
    let min = 0;
    let max = 100;
    let guess;

    alert("Think of a number betwwen 0 and 100");
    while (min <= max) {
        guess = Math.round((min + max) / 2);
        // TODO: Add your code below here ONLY!

        /* TODO: You are supposed to use an iterative implementation of 
        the binary search algorithm.
        Specifically, you must call the confirm function to find out if 
        the user's number is the current guess. 
        If so: then use alert and return because the computer has won by
        guessing the secret number.
        If not: find out if the user's number is larger or smaller than 
        guess and set min to guess plus 1 or max to guess minus 1. Then 
        your code will work if people choose zero as their secret number, 
        and it will also correctly detect cheaters. */

        // TODO: Move or remove the next line. It is only here to prevent an infinite
        // loop.
        return;
        // TODO: Add your code above here ONLY!
    }

    alert("I could not guess your number. I think you are cheating!");
};

window.onload = guesser;
