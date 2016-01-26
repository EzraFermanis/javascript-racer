$(document).ready(function() {


var player1 = 0;
var player2 = 0;

var trackLength = prompt('How long would you like the track to be? (Select a length between 20 and 60');
console.log(trackLength);


/*---------------------------------------------------------*/



var gameStart = function() {
  $("td").removeClass("active");
  $("#player1_strip" td:first).addClass("active");
  $("#player2_strip" td:first).addClass("active");

var player1adv = 0;
var player2adv = 0;

};

for (var i=0; i<=trackLength; i++) {
$(".column").append("<td>");
};

gameStart();

/*---------------------------------------------------------*/

$(document).on('keyup', function(keypress) {

if(keyPress.keyCode === 80) {

  if (player1adv < trackLength -1) {
  updatePlayerPosition("player1_strip");
  player1adv++;
  }

  else {
    theWinner("Player 1");
  };

  
  } else if (keyPress.keyCode === 81) {

    if (player2adv < trackLength -1) {
     updatePlayerPosition(player2_strip);
      player2adv++;
    }
   else {
    theWinner("Player 2");
  };
};
});

/*---------------------------------------------------------*/


var updatePlayerPosition = function(player) {
var tdactive = $("#" + player + " td.active");
var tdmove = tdactive.next();

tdactive.removeClass("active");
tdmove.addClass("active");s
};

/*---------------------------------------------------------*/

var Winner = function(theWinner) {
window.alert (theWinner + " has won the race!! Well done. To play again, just click ok.")
gameStart();
};

});

