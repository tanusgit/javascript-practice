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

// CS22A: A Basic Calculator Part 3 - calcu() function with if-else

var calcu = function (calcValue) {
    "use strict";
    if (calcValue) {
        // calcValue wasn't null or undefined'
        if (calcValue === '1') {
            calc.output.value += '1'
        } else if (calcValue === '2') {
            calc.output.value += '2'
        } else if (calcValue === '3') {
            calc.output.value += '3'
        } else if (calcValue === '4') {
            calc.output.value += '4'
        } else if (calcValue === '5') {
            calc.output.value += '5'
        } else if (calcValue === '6') {
            calc.output.value += '6'
        } else if (calcValue === '7') {
            calc.output.value += '7'
        } else if (calcValue === '8') {
            calc.output.value += '8'
        } else if (calcValue === '9') {
            calc.output.value += '9'
        } else if (calcValue === '0') {
            calc.output.value += '0'
        } else if (calcValue === '+') {
            calc.output.value += '+'
        } else if (calcValue === '-') {
            calc.output.value += '-'
        } else if (calcValue === '*') {
            calc.output.value += '*'
        } else if (calcValue === '/') {
            calc.output.value += '/'
        } else if (calcValue === 'c') {
            calc.reset();
        } else {
            calc.output.value = math.eval(calc.output.value);
        }
    }
};
// Bind onclick events below here and don't use window.onload.
var inputs = document.getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++) {
   if(inputs[i].type === "button") {
       inputs[i].onclick = function() {
           calcu(this.id)
       }
   } 
}

// Usually using window.onload is a good idea,
// but that prevents the Jasmine test suite from loading and since the
// script tag for ifelse.js is near the bottom of the
// ABasicCalculator-ifelse.html page and there are no big images to
// slow the loading of the HTML elements down it will all work OK without that.
