$(document).ready(function() {

//The below adds audio to the page by 

var vid = document.getElementById("rev");
function enableAutoplay() { 
    vid.autoplay = true;
    vid.load();
}

var player1Move = 0;
var player2Move = 0;

var rowLength = prompt('How long would you like the track to be? (Select a length between 5 and 20');
console.log(rowlength);

if (rowlength<5){
  var rowlength = 5;
}  else if (rowlength>20) {
  var rowLength = 20;
};



var gameStart = function() {
  $("td").removeClass("active");
  $("#player1 td:first").addClass("active");
  $("#player2 td:first").addClass("active");

var player1Move = 0;
var player2Move = 0;
};

for (var i=0; i<= rowLength; i++) {
$(".row").append('<td>');
};


gameStart();



$(document).on('keyup', function(keyPress) {

if (keyPress.keyCode === 80) {




  if (player1Move < rowLength -1) {
  updatePlayerPosition("player1");
  player1Move++;
  } else {
    theWinner("player1");
  };
    } else if (keyPress.keyCode === 81) {

    if (player2Move < rowLength -1) {
     updatePlayerPosition("player2");
      player2Move++;
    }
   else {
    theWinner("player2");
    };
  };
});



var updatePlayerPosition = function(player) {
var activeTD = $("#" + player + " td.active");
var moveTD = activeTD.next();

activeTD.removeClass("active");
moveTD.addClass("active");
};


var theWinner = function(winner) {
window.alert(theWinner + " has won the race!! Well done. To play again, just click ok.")
gameStart();
};

});


