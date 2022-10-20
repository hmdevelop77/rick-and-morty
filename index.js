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
    this.planet = {};
    this.aliensFrequency = 0;
    this.gameOver = false;
    this.levelPassed = true;
    this.intervalId = null ;
  }
}
function startGame() {
  currentGame = new Game();
  let currentShip = new Ship();
  currentGame.ship = currentShip;
  let currentPlanet = new Planet();
  currentGame.planet = currentPlanet;
  currentGame.intervalId = setInterval(() => {
    updateCanvas()
  }, 1000 / 60);

}
function detectCollision(alien) {
  return !(
    currentGame.ship.x > alien.x + alien.width - 25 ||
    currentGame.ship.x + currentGame.ship.width - 25 < alien.x ||
    currentGame.ship.y > alien.y + alien.height - 20 ||
    currentGame.ship.y + currentGame.ship.height - 30 < alien.y
  );
}
function checkGameOver(){
  context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);

  clearInterval(currentGame.intervalId);
     window.alert("game over");
    //  document.getElementById("restart-button").onclick = () => {
    //   startGame();
    // };
}
function updateCanvas() {
  context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
  currentGame.ship.draw();
  currentGame.planet.draw();
     if (detectCollision(currentGame.planet)) {
    alert("Congratulations");
   }; 
  currentGame.aliensFrequency++;
  currentGame.aliens.forEach((alien) => {
    alien.x += 0.7; // speed of aliens
    alien.drawAliens();
    if (detectCollision(alien)) {
      currentGame.gameOver = true;
      currentGame.aliensFrequency = 0;
      currentGame.aliens = [];
      checkGameOver() 
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
