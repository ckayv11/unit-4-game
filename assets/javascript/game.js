// PLAYER VARIABLES & VALUES
var thor = {
    name: "THOR",
    image: "assets/images/thor.png",
    healthPoints: 180,
    attackPower: 7,
    counterAttackPower: 10,
    // isPlayer = false,
};

var ironMan = {
    name: "IRON MAN",
    image: "assets/images/ironman.png",
    healthPoints: 140,
    attackPower: 8,
    counterAttackPower: 15,
    // isPlayer = false,
};

var blackWidow = {
    name: "BLACK WIDOW",
    image: "assets/images/black-widow.png",
    healthPoints: 110,
    attackPower: 18,
    counterAttackPower: 6,
    // isPlayer = false,
};

var hulk = {
    name: "HULK",
    image: "assets/images/hulk.png",
    healthPoints: 200,
    attackPower: 4,
    counterAttackPower: 20,
    // isPlayer = false,
};

var captainAmerica = {
    name: "CAPTAIN AMERICA",
    image: "assets/images/captain-america.png",
    healthPoints: 120,
    attackPower: 12,
    counterAttackPower: 5,
    // isPlayer = false,
};

var playersArray = [thor, ironMan, blackWidow, hulk, captainAmerica];
// GLOBAL VARIABLES 
var player;
var opponent;
var playerHP;
var opponentHP;
var playerHealthMeter;
var opponentHealthMeter;
var playerAP;
var opponentAP;
var noOpponent = true;
var endGame = false;

// DYNAMICALLY DISPLAY PLAYERS ON THE STARTING SCREEN

function displayPlayers() {

// Create a for-loop to iterate through the players array.    

 for (var i = 0; i < playersArray.length; i++) {
    // Create variables to create divs or tags to assign object 
    var healthPointTag = $("<p>");
    healthPointTag.text(playersArray[i].healthPoints);
    healthPointTag.addClass("card-text");

    var nameTag = $("<h3>");
    nameTag.text(playersArray[i].name);
    nameTag.addClass("card-title");
    // Append each new div or tag to each other for card display
    var cardBodyTag = $("<div>");
    cardBodyTag.addClass("card-body");
    cardBodyTag.append(nameTag, healthPointTag);
   
    var imageTag = $("<img>");
    imageTag.addClass("character");
    imageTag.attr("src", playersArray[i].image);
    imageTag.append(cardBodyTag);

    var cardTag = $("<div>");
    cardTag.addClass("card bg-transparent border-0 playerCard");
    cardTag.attr("data-player", playersArray[i]);
    cardTag.append(imageTag, cardBodyTag);
  
    // Append last div or tag to the existing div class from html
    $("#gameCharacters").append(cardTag);

    }; 
}
//Execute function to dynamically display players on screen
displayPlayers()

//-------------->

// DETERMINE PLAYERS SELECTED AND MOVE TO THE DESIGNATED FIGHTING AREA

    // Select a Player and Opponent by creating an "on-click" event attached to the ".playerCard" class.
    $(".playerCard").on("click", function() {
        if ($("#player-area").is(":empty")) {
        player = ($(this).attr("data-player"));
        player = $(this);
        $("#player-area").append(player);
        $("#start-message").text("CHOOSE YOUR OPPONENT");
        }
        else {
        opponent = ($(this).attr("data-player"));
        opponent = $(this);
        $("#opponent-area").append(opponent);
        $("#game-message").text("START ATTACKING!")
        }
       
    });


//-------------->

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