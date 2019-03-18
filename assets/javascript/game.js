//DEFINE VARIABLES

var player
var playerImage
var playerHP
var opponentHP
var playerAP

//Game character object 
function gameCharacter(name, hP, aP, cA, gImg) {
	this.name = name;
	this.healthPoints = hP;
	this.attackPoints = aP;
	this.counterAttack = cA;
	this.gameImage = gImg; 
	this.isFighter = false;
}

//Create new characters 
var thor = new gameCharacter("THOR", 110, 15, 5, "assets/images/thor.png", false);
var ironMan = new gameCharacter("IRON MAN", 120, 10, 8, "assets/images/ironman.png", false);
var blackWidow = new gameCharacter("BLACK WIDOW", 160, 3, 18, "assets/images/black-widow.png");
var hulk = new gameCharacter("HULK", 140, 7, 15, "assets/images/hulk.png", false);
var captainAmerica = new gameCharacter("CAPTAIN AMERICA", 130, 6, 17, "assets/images/captain-america.png", false);
//Add new characters to array 
var availableCharacters = [thor, ironMan, blackWidow, hulk, captainAmerica];

$(document).ready(function(){
// DYNAMICALLY DISPLAY PLAYERS ON THE STARTING SCREEN
for (var i=0; i<availableCharacters.length; i++) {
    // Create variables to create divs or tags to assign object 
    var healthPointTag = $("<p>");
    healthPointTag.text(availableCharacters[i].healthPoints + " HP");
    healthPointTag.attr("data-player", availableCharacters[i]);
    healthPointTag.addClass("card-text");

    var nameTag = $("<h3>");
    nameTag.text(availableCharacters[i].name);
    nameTag.addClass("card-title");
    // Append each new div or tag to each other for card display
    var cardBodyTag = $("<div>");
    cardBodyTag.addClass("card-body");
    cardBodyTag.append(nameTag, healthPointTag);
   
    var imageTag = $("<img>");
    imageTag.addClass("card-img-top character");
    imageTag.attr("src", availableCharacters[i].gameImage);
    imageTag.attr("alt", "game character" + [i]);
    imageTag.append(cardBodyTag);

    var cardTag = $("<div>");
    cardTag.addClass("card bg-transparent border-0 playerCard");
    cardTag.attr("data-player", availableCharacters[i]);
    cardTag.append(imageTag, cardBodyTag);
    
    // Append last div or tag to the existing div class from html
    $("#gameCharacters").append(cardTag);

}

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
    else {
        //Opponent loses points
        opponentHP = opponentHP - playerAP;
        //Player loses points from counter-attack
        playerHP = playerHP - opponent.counterAttackPower;
        $("#game-messsage").text(player.name + " HIT " + opponent.name + " FOR " + playerAP + " DAMAGE AND " + opponent.name + " HIT BACK WITH " + opponent.counterAttackPower + " DAMAGE.");
    }
    //Get rid of opponent if defeated
    if(opponentHP <= 0) {
		//empty fighting area
		$("#opponent-area").empty();
		//reset opponent
		opponent = "";
		// //reset health
		// $("#opponent-health").text("");
		//update onscreen message
		$("#game-message").text("YOU DEFEATED YOUR OPPONENT!");
		//check if anymore opponents left
		if($("#opponent-area").is(":empty")) {
		    //pause starting music
            $("#fightsong").trigger("pause");
            //start victory music
            $("#victorysong").trigger("play");
			//move player to win screen
			$("#player-win").append(player);
			//show win screen 
			$(".win-screen").show();
		} 
    }
    if (playerHP <= 0) {
        //Player loses if health drops below zero
            //pause starting music
            $("#fightsong").trigger("pause");
            //start losing music (need to get)
            // $("#losersong").trigger("play");
    }
    //If attack button is pressed with no enemy, messagse shows to user (for after attack)
	if($("opponent-area").is(":empty")) {
		$("#game-message").text("No Opponent here!");
	}
});

});