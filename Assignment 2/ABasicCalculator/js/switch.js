// The following comments are settings for various linters
// Not sure if a reported error matters? Look it up at http://linterrors.com/js
/*global math: false, calc: false, console: false, eval: false */

/*jslint es5: true */
/*jslint node: false*/
/*jslint browser: true*/
/*jslint devel: true*/
/*jslint plusplus: true */
/*jslint evil: true */

/*jshint es5: true */
/*jshint globalstrict: true*/
/*jshint jquery: false*/
/*jshint node: false*/
/*jshint browser: true*/
/*jshint devel: true*/

/*eslint-env jquery: false*/
/*eslint-env browser*/
/*eslint no-console: 0*/

// CS22A: A Basic Calculator Part 2 - calcu() function with switch
//////////////////////////////////////////////////////////////////////////////////////////////
// The value from the HTML page is passed through calcu() as a parameter argument,
// e.g., calcu('1') which takes the place of 'calcValue' entering the function below
// which is then passed to the switch for comparison. If the value of calcValue equals
// '1' then the first case of the switch will be true and the value of the output text
// box will be a '1' with the += concatenating this value every time the button is pressed.
// The math.eval() function at the bottom turns all the concatenated string into an arithmetic
// equation that can be evaluated, thus allowing the calculator to produce a viable answer.
//////////////////////////////////////////////////////////////////////////////////////////////

var calcu = function (calcValue) {
    "use strict";
    switch (calcValue) {
        // Add missing code here
        case '1':
            calc.output.value += '1';
            break;
        case '2':
            calc.output.value += '2';
            break;
        case '3':
            calc.output.value += '3';
            break;
        case '4':
            calc.output.value += '4';
            break;
        case '5':
            calc.output.value += '5';
            break;
        case '6':
            calc.output.value += '6';
            break;
        case '7':
            calc.output.value += '7';
            break;
        case '8':
            calc.output.value += '8';
            break;
        case '9':
            calc.output.value += '9';
            break;
        case '0':
            calc.output.value += '0';
            break;
        case '+':
            calc.output.value += '+';
            break;
        case '-':
            calc.output.value += '-';
            break;
        case 'x':
            calc.output.value += '*';
            break;
        case '/':
            calc.output.value += '/';
            break;
        case 'C':
            calc.reset();
            break;
        case "=":
            // use the math.eval() function from the Math.js math library to parse and evaluate the String with mathematics in it
            calc.output.value = math.eval(calc.output.value);
            break;
    }
};
