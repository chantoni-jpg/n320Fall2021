//this is a variable for the title
var title = document.getElementById("title");
//this is a variable of for the button
var button = document.getElementsByClassName("restart");
//this displays the winning message
const winner = () => `Player ${currentPlayer} has won!`;
//this grabs the h2 id and allows text to be added to it
let gameStatus = document.getElementById("currentStatus");
//this is the draw text
const draw = () => `Game ended in a draw!`;
//this is the current piece
let currentPlayer = "X";
//this is the sate of the board
let gameState = ["", "", "", "", "", "", "", ""];
//these are the winning conditons, they are grabbed from the id's of the div
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
class Board {
  constructor() {}
}

class Player {
  constructor() {}
}

class Game {
  constructor() {}
}
//this adds the cellClick function to the cells which are the divs
document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", cellClick));
//this is the cellclick function
function cellClick(clickedCellEvent) {
  //this targets the cell
  let clickedCell = clickedCellEvent.target;
  //this grabs the index of the cell which is the id of the divs
  let cellIndex = parseInt(clickedCell.getAttribute("id"));
  gameState[cellIndex] = currentPlayer;
  //this allows the cell to have the piece put inside it
  clickedCell.innerHTML = currentPlayer;
  //this grabs the switch players method from the player class
  switchPlayers();
  //this grabs the checkWins method from the game class
  checkWins();
}
function checkWins() {
  //this makes the win false
  let Win = false;
  //this for loop loops through the array that we have set up in the winCondition const
  for (let i = 0; i <= 7; i++) {
    const winningConditions = winCondition[i];
    let one = gameState[winningConditions[0]];
    let two = gameState[winningConditions[1]];
    let three = gameState[winningConditions[2]];
    //if none of the conditions are met, then the game continues
    if (one === "" || two === "" || three === "") {
      continue;
    }
    //if the conndtions for a win combination are met, then the game is wons and it ends
    if (one === two && two === three) {
      Win = true;
      break;
    }
  }
  //if there is a won game, it will display the winning message
  if (Win) {
    gameStatus.innerHTML = winner();
    return;
  }
  //if the game is at a draw, then it displays the draw message
  let Draw = !gameState.includes("");
  if (Draw) {
    gameStatus.innerHTML = draw();
    return;
  }
}
//this is the restart method, it resets the board once the restart button is clicked
function restartGame() {
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
  gameStatus.innerHTML = "";
}
//this is selects the restart button and when it is clicked, the game is reset
document.querySelector(".restart").addEventListener("click", restartGame);
//this is the switch player method
function switchPlayers() {
  //if the current player X is false, then it switches to O, or it stays X
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}
//this allows for a new game to be created
let g = new Game();
//this initalizes the init function
init();
function init() {
  //this tween fades in the title of the game
  TweenMax.from(title, { autoAlpha: 0, duration: 3 });
  //this tween fades in the button of the game
  TweenMax.from(button, { autoAlpha: 0, duration: 3 });
}
