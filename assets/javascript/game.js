// GLOBAL VARIABLES 
var player;
var opponent;
var playerHP;
var opponentHP;
var playerHealthMeter;
var opponentHealthMeter;
var playerAttackPower;
var opponentAttackPower
var noOpponent = true;
var endGame = false;

// PLAYER VARIABLES & VALUES
var thor = {
    name: "THOR",
    image: "assets/images/thor.png",
    healthPoints: 180,
    attackPower: 7,
    counterAttackPower: 10,
};

var ironMan = {
    name: "IRON MAN",
    image: "assets/images/ironman.png",
    healthPoints: 140,
    attackPower: 8,
    counterAttackPower: 15,
};

var blackWidow = {
    name: "BLACK WIDOW",
    image: "assets/images/black-widow.png",
    healthPoints: 110,
    attackPower: 18,
    counterAttackPower: 6,
};

var hulk = {
    name: "HULK",
    image: "assets/images/hulk.png",
    healthPoints: 200,
    attackPower: 4,
    counterAttackPower: 20,
};

var captainAmerica = {
    name: "CAPTAIN AMERICA",
    image: "assets/images/captain-america.png",
    healthPoints: 120,
    attackPower: 12,
    counterAttackPower: 5,
};

var playersArray = [thor, ironMan, blackWidow, hulk, captainAmerica];

// DYNAMICALLY DISPLAY PLAYERS ON THE STARTING SCREEN

function displayPlayers() {

 for (var i = 0; i < playersArray.length; i++) {
    //first div
    var healthPointTag = $("<p>");
    healthPointTag.text(playersArray[i].healthPoints);
    healthPointTag.addClass("card-text");

    var nameTag = $("<h3>");
    nameTag.text(playersArray[i].name);
    nameTag.addClass("card-title");

    var cardBodyTag = $("<div>");
    cardBodyTag.addClass("card-body");
    cardBodyTag.append(nameTag, healthPointTag);
   
    //second div
    var imageTag = $("<img>");
    imageTag.attr("src", playersArray[i].image);
    imageTag.append(cardBodyTag);

    var cardTag = $("<div>");
    cardTag.addClass("card border-0");
    cardTag.append(imageTag, cardBodyTag);
  
    $(".card-deck").append(cardTag);

    }; 
}
displayPlayers()

// DETERMINE PLAYER SELECTED AND MOVE TO THE PLAYER AREA


// DISPLAY OPPONENTS IN THE SECTION BELOW THE SELECTED PLAYER


// DETERMINE OPPONENT SELECTED AND MOVE TO OPPONENT AREA


// ATTACK FUNCTIONS


// RESET FUNCTION


// CHECK TO SEE IF PLAYER WON

    // If won...then


    // If lost...then



// WHEN IT'S A TIE ATTACK



// EXECUTE CODE AND ON CLICK

// call start game function

$(document).ready(function(){
    // display all players
    

    // handle click event when one player is clicked 

        //save my player's info

   
        //display the enemies


    // handle click event when one opponent is clicked
   
        //if there is no opponent, define it and display
      



    // handle when player attacks (use if/else)

            // reduce player's and opponents's health point  
   

            //increase player's attack power


            // do this if defender loses the game else
            
            //if player loses the game, do this
                     
            // else print health points and attack detail


    // When restart button is clicked, restart game.

})