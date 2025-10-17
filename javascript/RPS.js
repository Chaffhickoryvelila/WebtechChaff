var selectInput = document.getElementById("selector");
var imageHolder = document.getElementById("imgholder");
var aiImage = document.getElementById("aichoice");


function RPS(value) {
  if (value == "1") {
    imageHolder.src = "/ASSETS/Rock.jpg";
  } else if (value == "2") {
    imageHolder.src = "/ASSETS/Paper.jpg";
  } else if (value == "3") {
    imageHolder.src = "/ASSETS/Scissor.jpg";
  } else {
    imageHolder.src = "/ASSETS/LIL.jpg";
  }
}


function randomizer() {
  var playerChoice = selectInput.value;

  if (!playerChoice) {
    alert("Please choose Rock, Paper, or Scissor first.");
    return;
  }

 
  var aiChoice = Math.floor(Math.random() * 3) + 1;

 
  if (aiChoice == 1) {
    aiImage.src = "/ASSETS/Rock.jpg";
  } else if (aiChoice == 2) {
    aiImage.src = "/ASSETS/Paper.jpg";
  } else if (aiChoice == 3) {
    aiImage.src = "/ASSETS/Scissor.jpg";
  }

  
  var resultText = getResult(Number(playerChoice), aiChoice);
  document.getElementById("result").textContent = resultText;
}


function getResult(player, ai) {
  if (player === ai) {
    return "It's a draw!";
  } else if (
    (player === 1 && ai === 3) ||
    (player === 2 && ai === 1) ||
    (player === 3 && ai === 2)
  ) {
    return "You win!";
  } else {
    return "AI wins!";
  }
}