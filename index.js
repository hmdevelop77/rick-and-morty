const spaceCanvas = document.getElementById("canvas");
const context = spaceCanvas.getContext("2d");
document.getElementById("start-button").onclick = () => {
startGame();
 };
 let currentGame;
 class Game {
    constructor() {
      this.ship = {};
      this.aliens = [];
      //this.score = 0;
      this.aliensFrequency = 0;
      this.aliensDimensions = 0;
      //this.animationId = null;
      this.gameOver = false;
      this.levelPassed = true ;
    }
  };
  function startGame() {
    //Instantiate new game
    currentGame = new Game();
    //Instantiate new car
    let currentShip = new Ship();
    //Assign my new car to my new game
    currentGame.ship = currentShip;
    currentGame.ship.draw();
    //cancelAnimationFrame(currentGame.animationId);
    updateCanvas();
  };
  function updateCanvas() {
    context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
    currentGame.ship.draw();
  };
  document.addEventListener("keydown", (keyboardEvent) => {
    currentGame.ship.moveShip(keyboardEvent.key);
  });