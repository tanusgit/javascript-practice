/*global console: false, exampleForm: false*/
/*jslint browser: true*/

// Defining setOutput function
var setOutput = function () {
  console.log("this:");
  console.log(this);
  exampleForm.output.value = 'The 2nd inline button was clicked.';
};

document.getElementById("external-button1").onclick = function (event) {
  console.log("event:");
  console.log(event);
  console.log("this:");
  console.log(this);
  exampleForm.output.value = this.id + ' was clicked.';
};

document.getElementById("external-button2").onclick = function (event) {
  console.log("event:");
  console.log(event);
  console.log("this:");
  console.log(this);
  exampleForm.output.value = this.id + ' was clicked.';
};
















/*
 // Binding onclick events (the best way because it is DRY and separates dynamic (JavaScript) code from content (HTML) code )
 // See https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
 var inputs = document.getElementsByTagName("input");
 for (var i = 0; i < inputs.length; i++) {
 if ((inputs[i].type === "button") && (inputs[i].id !== "inline-button1") && (inputs[i].id !== "inline-button2")) {
 inputs[i].onclick = function (event) {
 console.log("event:");
 console.log(event);
 console.log("this:");
 console.log(this);
 exampleForm.output.value = this.id + ' was clicked.';
 };
 }
 }
 */