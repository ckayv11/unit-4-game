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

// GLOBAL VARIABLES 
var playersArray = [thor, ironMan, blackWidow, hulk, captainAmerica];
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


$(document).ready(function(){

// DYNAMICALLY DISPLAY PLAYERS ON THE STARTING SCREEN
for (var i=0; i<playersArray.length; i++) {
    // Create variables to create divs or tags to assign object 
    var healthPointTag = $("<p>");
    healthPointTag.text(playersArray[i].healthPoints + " HP");
    healthPointTag.attr("data-player", playersArray[i]);
    healthPointTag.addClass("card-text");

    var nameTag = $("<h3>");
    nameTag.text(playersArray[i].name);
    nameTag.addClass("card-title");
    // Append each new div or tag to each other for card display
    var cardBodyTag = $("<div>");
    cardBodyTag.addClass("card-body");
    cardBodyTag.append(nameTag, healthPointTag);
   
    var imageTag = $("<img>");
    imageTag.addClass("card-img-top character");
    imageTag.attr("src", playersArray[i].image);
    imageTag.attr("alt", "game character" + [i]);
    imageTag.append(cardBodyTag);

    var cardTag = $("<div>");
    cardTag.addClass("card bg-transparent border-0 playerCard");
    cardTag.attr("data-player", playersArray[i]);
    cardTag.append(imageTag, cardBodyTag);
    
    // Append last div or tag to the existing div class from html
    $("#gameCharacters").append(cardTag);

};

//-------------->


// DETERMINE PLAYERS SELECTED AND MOVE TO THE DESIGNATED FIGHTING AREA

    // Select a Player and Opponent by creating an "on-click" event attached to the ".playerCard" class.
    $(".playerCard").click(function() {
        $("#gameplay-screen").show();
        if ($("#player-area").is(":empty")) {
            //Set the player object
            player = ($(this).attr("data-player"));
            myPlayer = $(this);
            playerHP = player.healthPoints;
            playerAP = player.attackPoints;
            $("#player-area").append(myPlayer);
            $("#start-message").text("CHOOSE YOUR OPPONENT");
            $("#starting-screen").remove();
            $("#enemy-area").show();
            $(".card-deck").appendTo("#enemy-area");
            
        }
        else if ($("#opponent-area").is(":empty")) {
            opponent = ($(this).attr("data-player"));
            myOpponent = $(this);
            $("#opponent-area").append(myOpponent);
            $("#game-message").text("START ATTACKING!")
        }
        else {
            $("#game-message").text("ONE OPPONENT AT A TIME! START ATTACKING!")
        }
    });

     
//-------------->

// ATTACK FUNCTIONS
$("#attack").click(function() {
    //If attack button is pressed with no opponent, messagse shows to user (for before attack)
    if ($("#opponent-area").is(":empty")) {
		$("#game-message").text("NO OPPONENT HERE!");
    }

//-------------->///NEED TO FIX // <------------------//
//     else {
//         //Opponent loses points
//         opponentHP = opponentHP - playerAP;
//         //Player loses points from counter-attack
//         playerHP = playerHP - opponent.counterAttackPower;
//         $("#game-messsage").text(player.name + " HIT " + opponent.name + " FOR " + playerAP + " DAMAGE AND " + opponent.name + " HIT BACK WITH " + opponent.counterAttackPower + " DAMAGE.");
//     }
//     //Get rid of opponent if defeated
//     if(opponentHP <= 0) {
// 		//empty fighting area
// 		$("#opponent-area").empty();
// 		//reset opponent
// 		opponent = "";
// 		// //reset health
// 		// $("#opponent-health").text("");
// 		//update onscreen message
// 		$("#game-message").text("YOU DEFEATED YOUR OPPONENT!");
// 		//check if anymore opponents left
// 		if($("#opponent-area").is(":empty")) {
// 		    //pause starting music
//             $("#fightsong").trigger("pause");
//             //start victory music
//             $("#victorysong").trigger("play");
// 			//move player to win screen
// 			$("#player-win").append(player);
// 			//show win screen 
// 			$(".win-screen").show();
// 		} 
//     }
//     if (playerHP <= 0) {
//         //Player loses if health drops below zero
//             //pause starting music
//             $("#fightsong").trigger("pause");
//             //start losing music (need to get)
//             // $("#losersong").trigger("play");
//     }
//     //If attack button is pressed with no enemy, messagse shows to user (for after attack)
// 	if($("opponent-area").is(":empty")) {
// 		$("#game-message").text("No Opponent here!");
// 	}
});

});