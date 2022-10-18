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
    this.aliensFrequency = 0;
    this.animationId = null;
    this.gameOver = false;
    this.levelPassed = true;
  }
}
function startGame() {
  currentGame = new Game();
  let currentShip = new Ship();
  currentGame.ship = currentShip;
  let currentPlanet = new Planet();
  currentGame.Planet = currentPlanet;
  setInterval(updateCanvas, 1);
}
function detectCollision(alien) {
  return !(
    currentGame.ship.x > alien.x + alien.width - 25||
    currentGame.ship.x + currentGame.ship.width  - 25 < alien.x ||
    currentGame.ship.y > alien.y + alien.height - 20||
    currentGame.ship.y + currentGame.ship.height - 30 < alien.y
  );
}
function updateCanvas() {
  context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
  currentGame.ship.draw();
  currentGame.Planet.draw();
  currentGame.aliensFrequency++;
  currentGame.aliens.forEach((alien) => {
    alien.x += 0.7; // speed of aliens
    alien.drawAliens();

    if (detectCollision(alien)) {
      currentGame.gameOver = true;
     // currentGame.aliensFrequency = 0;
      currentGame.aliens = [];
      //document.getElementById("score").innerHTML = 0;
     // document.getElementById("game-board").style.display = "none";
      //cancelAnimationFrame(currentGame.animationId);
      alert("BOOOOMM! GAME OVER!");
    }
  });

  if (currentGame.aliensFrequency % 120 === 0) {
    const randomAlienX = 0;
    const randomAlienY = Math.floor(Math.random() * 600);
    const currentAliens = new Aliens(randomAlienX, randomAlienY);
    currentGame.aliens.push(currentAliens);
  }
}

document.addEventListener("keydown", (keyboardEvent) => {
  currentGame.ship.moveShip(keyboardEvent.key);
});
