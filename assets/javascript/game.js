
var wins= 0;
var losses= 0;
var targetNumber = Math.floor(Math.random()*101+19);

  $("#number-to-guess").text(targetNumber);

  var counter = 0;

 
var num1 = Math.floor(Math.random()*(10-1)+1);
var num2 = Math.floor(Math.random()*(10-1)+1);
var num3 = Math.floor(Math.random()*(10-1)+1);
var num4 = Math.floor(Math.random()*(10-1)+1);



   function pokeValue() {
   
 

    var imageSquirtle = $("#squirtle");
    var imageBulbasaur = $("#bulbasaur");
    var imageCharmander = $("#charmander");
    var imagePikachu = $("#pikachu");

imageSquirtle.attr("num1");
imageBulbasaur.attr("num2");
imageCharmander.attr("num3");
imagePikachu.attr("num4");



  }

  // your total score is going to go up by the value of num1 
  $("#squirtle").on("click", function() {

   
  
    
    counter += num1;

    if (counter === targetNumber) {
      alert("You win!");
    	wins ++
    	counter= 0;
    	restart();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    losses ++
    counter=0
    restart();
    }

 $("#sumscore").text(counter);

    $("#wincount").text(wins);

    $("#losscount").text(losses);

  });




  $("#pikachu").on("click", function() {

    

  
    var crystalValue = ($(this).attr("num4"));
    crystalValue = parseInt(crystalValue);
    
    counter += num4;

    if (counter === targetNumber) {
      alert("You win!");
    	wins ++
    	counter= 0;
    	restart();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    losses ++
    counter=0
    restart();
    }

 $("#sumscore").text(counter);

    $("#wincount").text(wins);

    $("#losscount").text(losses);

  });


    $("#bulbasaur").on("click", function() {

    
    
    var crystalValue = ($(this).attr("num2"));
    crystalValue = parseInt(crystalValue);
    
    counter += num2;

 
    if (counter === targetNumber) {
      alert("You win!");
    	wins ++
    	counter= 0;
    	restart();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    losses ++
    counter=0
    restart();
    }

 $("#sumscore").text(counter);

    $("#wincount").text(wins);

    $("#losscount").text(losses);

  });





      $("#charmander").on("click", function() {


    
    var crystalValue = ($(this).attr("num3"));
    crystalValue = parseInt(crystalValue);
   
    counter += num3;

    

    if (counter === targetNumber) {
      alert("You win!");
    	wins ++
    	counter= 0;
    	restart();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    losses ++
    counter=0
    restart();
    }

 $("#sumscore").text(counter);

    $("#wincount").text(wins);

    $("#losscount").text(losses);


  });


function restart(){


 targetNumber = Math.floor(Math.random()*101+19);

  $("#number-to-guess").text(targetNumber)
num1 = Math.floor(Math.random()*(10-1)+1);
num2 = Math.floor(Math.random()*(10-1)+1);
num3 = Math.floor(Math.random()*(10-1)+1);
num4 = Math.floor(Math.random()*(10-1)+1);



}
