var gameMode = "welcome";
var insults = [];
var roll1 = 0;
var roll2 = 0;
var player1Result = 0;
var player2Result = 0;

var main = function (input) {
  if (gameMode == "welcome") {
    if (input == "") {
      gameMode = "player1FirstRoll";
      return "Player 1, click submit to roll the dice.";
    }
  }
  // player 1 moves
  else if (gameMode == "player1FirstRoll") {
    if (input == "") {
      gameMode = "player1SecondRoll";
      return playerFirstRoll();
    }
  } else if (gameMode == "player1SecondRoll") {
    if (input == "") {
      gameMode = "ChooseOrderReturnP1Result";
      return playerSecondRoll();
    }
  } else if (gameMode == "ChooseOrderReturnP1Result") {
    if (input == roll1) {
      player1Result = "" + roll1 + roll2;
      gameMode = "player2FirstRoll";
      return (
        "Player 1 result: " +
        roll1 +
        roll2 +
        "<br><br> Player 2, please roll the dice."
      );
    } else if (input == roll2) {
      player1Result = "" + roll2 + roll1;
      gameMode = "player2FirstRoll";
      return (
        "Player 1 result: " +
        roll2 +
        roll1 +
        "<br><br>Player 2, please roll the dice."
      );
    }
  }
  // player 2 moves
  else if (gameMode == "player2FirstRoll") {
    if (input == "") {
      gameMode = "player2SecondRoll";
      return playerFirstRoll();
    }
  } else if (gameMode == "player2SecondRoll") {
    if (input == "") {
      gameMode = "ChooseOrderReturnP2Result";
      return playerSecondRoll();
    }
  } else if (gameMode == "ChooseOrderReturnP2Result") {
    if (input == roll1) {
      gameMode = "welcome";
      player2Result = "" + roll1 + roll2;
      return (
        "Player 2 result: " +
        roll1 +
        roll2 +
        ".<br><br>" +
        getOutcome(player1Result, player2Result)
      );
    } else if (input == roll2) {
      gameMode = "welcome";
      player2Result = "" + roll2 + roll1;
      return (
        "Player result: " +
        roll2 +
        roll1 +
        ".<br><br>" +
        getOutcome(player1Result, player2Result)
      );
    }
  }
};

var diceRoll = function () {
  var randomDec = Math.random();
  var diceNum = Math.floor(Math.random() * 6) + 1;
  return diceNum;
};

var playerFirstRoll = function () {
  roll1 = diceRoll();
  return "Your first roll: " + roll1 + "<br><br>Click submit to roll again.";
};

var playerSecondRoll = function (input) {
  roll2 = diceRoll();
  return (
    "Your second roll: " +
    roll2 +
    "<br><br>You rolled " +
    roll1 +
    " and " +
    roll2 +
    ". <br><br>Please choose which number to come first."
  );
};

var getOutcome = function (player1Result, player2Result) {
  if (parseInt(player1Result) > parseInt(player2Result)) {
    return (
      "Player 1 won!<br><br>PLAYER 2, " +
      getInsult() +
      "<br><br>Click submit to play again."
    );
  } else {
    return (
      "Player 2 won! <br><br>PLAYER 1, " +
      getInsult() +
      "<br><br>Click submit to play again."
    );
  }
};

insults.push("YOU PLAYED LIKE YOU HAD A CHEAT CODE FOR LOSING.");
insults.push("YOU'RE LIKE WI-FI—STRONG START, THEN SUDDENLY GONE.");
insults.push("YOU LOST SO HARD, EVEN THE GAME FELT AWKWARD.");
insults.push("CONGRATS! YOU LOST FASTER THAN I EXPECTED.");
insults.push("THAT WAS LESS A GAME AND MORE A LIVE COMEDY SHOW.");
insults.push("YOUR GAMEPLAY WAS SO OFF, I ALMOST CALLED A DOCTOR!");

var getInsult = function () {
  randomIndex = Math.floor(Math.random() * insults.length);
  return insults[randomIndex];
};
