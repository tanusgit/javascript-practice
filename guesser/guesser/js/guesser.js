
const guesser = () => {
  let min = 0;
  let max = 100;
  let guess;

  alert("Think of a number betwwen 0 and 100");
  while (min <= max) {
    guess = Math.round((min + max) / 2);
    var userinput = confirm("Did you think of " + guess + " ?");
    if (userinput == true) {
      return;
    }else{
      var input = confirm("Did you think of something higher ?");
      if(input == true){
        min = guess;
      }else{
        max = guess;
      }
    }
  }

  alert("I could not guess your number. I think you are cheating!");
};

window.onload = guesser;

