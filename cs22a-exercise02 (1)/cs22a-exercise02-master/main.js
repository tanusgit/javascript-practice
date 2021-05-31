/*global window:false, $:false*/
/*jslint browser:true*/
//cntrl+shift+i format
var main = function () {
  "use strict";
  // TODO: Put all your code BELOW this line in this 'main' function
  //this is how we create object literal 

  //7. Create a function named getPrice that will calculate the price of a computer.
  // The base price of a computer is 500 and should be assigned to a variable named 
  //thePrice. If the speed property of an object is equal to 4GHz, add 300 to the
  // value of thePrice; otherwise, add 100 to thePrice. If the hdspace property of 
  //an object is 1TB, add 150 to the value of thePrice; otherwise, add 80 to thePrice.
  // If the ram property of an object is 16GB, add 200 to the value of thePrice; 
  //otherwise, add 100 to thePrice. End the function with a return statement that 
  //returns the value of the variable thePrice.
  var getPrice = function () {
    var thePrice = 500;
    //speed is equal to 4GHz, add 300 to the
    // value of thePrice; otherwise, add 100 to thePrice
    if (this.speed == "4GHz") {
      thePrice = thePrice + 300;
    } else {
      thePrice = thePrice + 100;
    }
    //hdspace property of 
    //an object is 1TB, add 150 to the value of thePrice; otherwise, add 80 to thePrice
    if (this.hdspace == "1TB") {
      thePrice = thePrice + 150;
    } else {
      thePrice += 80;
    }
    //ram property of an object is 16GB, add 200 to the value of thePrice; 
    //otherwise, add 100 to thePrice
    if (this.ram == "16GB") {
      thePrice += 200;
    } else {
      thePrice += 100;
    }
    return thePrice;
  };
  //3. In main.js in the main function (that will be run when the window is fully loaded)
  // create an object constructor
  // named Computer that has three properties named speed, hdspace, and ram.

  var Computer = function (speed, hdspace, ram) {
    this.speed = speed;
    this.hdspace = hdspace;
    this.ram = ram;
  };
//8. Set the Computer object constructor's prototype.price property to be the
  // getPrice function (created in step 7), 
  //so a call like computerObject.price() will run the getPrice function.
  //Car.prototype.payment = getPayment;
  
  Computer.prototype.price = getPrice;

  //4. Create an instance of a Computer object and name it workComputer. Send the 
  //string values of 3.4GHz for the speed parameter, 500GB for the hdspace parameter, 
  //and 4GB for the ram parameter.

  var workComputer = new Computer("3.4GHz", "500GB", "4GB");
  //5. Create an instance of a Computer object and name it homeComputer. Send the
  // string values of 4GHz for the speed parameter, 1TB for the hdspace parameter, 
  //and 16GB for the ram parameter.
  var homeComputer = new Computer("4GHz", "1TB", "16GB");
  //6. Create an instance of a Computer object and name it laptop. Send the 
  //string values of 2.93GHz for the speed parameter, 250GB for the hdspace parameter,
  // and 8GB for the ram parameter.
  var laptop = new Computer("2.93GHz", "250GB", "8GB");



  // TODO: Put all your code ABOVE this line in this 'main' function
  // Build an object/hash table/associative array of the Computer objects you were supposed to create
  // with user fiendly key names using an object literal.
  var computers = {
    "Work Computer": workComputer,
    "Home Computer": homeComputer,
    Laptop: laptop
  };
  // Append the prices of each property in the computers object/hash table/associative array
  for (var compName in computers) {
    $("#content").append("<h3>" + compName + "'s features:</h3>");
    for (var propName in computers[compName]) {
      if (propName != "price") {
        $("#content").append(propName + ": " + computers[compName][propName] + "<br />");
      }
    }
    $("#content").append("<strong>price</strong>: $" + computers[compName].price() + "<br />");
  }

  $("#content").append("<br/>");
};

// Bind the main function to the window.onload event
window.onload = main;
