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
    this.animationId = null;
    this.gameOver = false;
    this.levelPassed = true;
  }
}
function startGame() {
  currentGame = new Game();
  let currentShip = new Ship();
//let currentAliens = new Aliens();
//currentGame.aliens.push(currentAliens);
  currentGame.ship = currentShip;
  setInterval(updateCanvas, 1);
}
function updateCanvas() {
  context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
  currentGame.ship.draw();
 currentGame.aliensFrequency ++;
 currentGame.aliens.forEach((enemie) => {
  enemie.x += 1;
  enemie.drawAliens()
 })
 if (currentGame.aliensFrequency % 120 === 1) {
  const randomObstacleX =0;
  const randomObstacleY = Math.floor(Math.random() * 600);
  const randomObstacleWidth = 50
  const randomObstacleHeight = 50

  const currentAliens = new Aliens(
    randomObstacleX,
    randomObstacleY,
    randomObstacleWidth,
    randomObstacleHeight
  );
  currentGame.aliens.push(currentAliens);
  //currentGame.obstacles.push(newObstacle);
};
// if (currentGame) {
//   currentGame.animationId = requestAnimationFrame(updateCanvas);
// }
}
//const createNewAliens = () =>
  //aliensArray.forEach(element => element.drawAliens());


document.addEventListener("keydown", (keyboardEvent) => {
  currentGame.ship.moveShip(keyboardEvent.key);
});

