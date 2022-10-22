const spaceCanvas = document.getElementById("canvas");
const context = spaceCanvas.getContext("2d");
document.getElementById("start-button").onclick = () => {
  document.getElementById("restart-button").style.visibility = "hidden";
  document.getElementById("levelpass-button").style.visibility = "hidden";
  startGame();
};
document.getElementById("restart-button").onclick = () => {
  document.getElementById("restart-button").style.visibility = "hidden";
  document.getElementById("levelpass-button").style.visibility = "hidden";
  startGame();
};
document.getElementById("levelpass-button").onclick = () => {
  document.getElementById("restart-button").style.visibility = "hidden";
  document.getElementById("levelpass-button").style.visibility = "hidden";
  nextLevel();
};

let currentGame;
<<<<<<< HEAD
const themeSong = new Audio('Sound/theme.mp3');
const planetLand = new Audio('Sound/woo_vu_luvub_dub_dub.wav');
const hitShip = new Audio('Sound/tiny-rick.wav');

=======
let level = 1
let reachedFirstPlanet = false;
>>>>>>> 4f07c9fabf87495937ee5314e3dee2b3ee7b650a
class Game {
  constructor() {
    this.ship = {};
    this.aliens = [];
    this.planet = null;
    this.aliensFrequency = 0;
    this.gamerun = false;
    this.gameOver = false;
    this.level = 1;
    this.intervalId = null;
    this.planet1 = {};
    this.planet2 = {}
  }
}

function startGame() {
  if (!currentGame) {
    //   let level ;
    //  currentGame.level = level;
    currentGame = new Game();
    let firstPosOfShip = new Ship(50, 650);
    currentGame.ship = firstPosOfShip;
    let firstPlanet = new Planet(950, 20, "image/planet-image.jpeg", 100, 100, "first");
    currentGame.planet1 = firstPlanet;
    currentGame.intervalId = setInterval(() => {
      updateCanvas();
    }, 1000 / 30);
  }
}
function detectCollision(alien) {
  return !(
    currentGame.ship.x > alien.x + alien.width - 25 ||
    currentGame.ship.x + currentGame.ship.width - 25 < alien.x ||
    currentGame.ship.y > alien.y + alien.height - 20 ||
    currentGame.ship.y + currentGame.ship.height - 30 < alien.y
  );
}
function checkGameOver() {
  currentGame.aliens = [];
  context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
  clearInterval(currentGame.intervalId);
  document.getElementById("restart-button").style.visibility = "visible";
  context.shadowColor = "black";
  context.fillStyle = "rgb(114, 239, 113)";
  context.font = "100px Ricks";
  context.fillText("GAME OVER", 200, 400);
<<<<<<< HEAD
 currentGame = null
 themeSong.pause();
 hitShip.play();
 
 
};
=======
  currentGame = null;
}
>>>>>>> 4f07c9fabf87495937ee5314e3dee2b3ee7b650a
function checkReachPlanet() {
  context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
  clearInterval(currentGame.intervalId);
  document.getElementById("levelpass-button").style.visibility = "visible";
  context.shadowColor = "black";
  context.fillStyle = "rgb(114, 239, 113)";
<<<<<<< HEAD
  context.font = "100px Ricks";
  context.fillText("LEVEL PASS", 200, 400);
  themeSong.pause();
  planetLand.play();
  // nextLevel ()
};
// function nextLevel (){
//   context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
//   clearInterval(currentGame.intervalId);
// }
currentGame = null ;
function startNewGame() {
  // context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
  // if(!currentGame){
    startGame();
  // currentGame = new Game();
  // let currentShip = new Ship();
  // currentGame.ship = currentShip;
  // let currentPlanet = new Planet();
  // currentGame.planet = currentPlanet;
  // currentGame.intervalId = setInterval(() => {
  //   updateCanvas();
  // }, 1);
  //}
};


=======
  context.font = "45px Ricks";
  context.fillText("CONGRATULATIONS YOU LANDED SALEFY", 110, 350);
  reachedFirstPlanet = true;
 
}
function nextLevel() {
  context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
  clearInterval(currentGame.intervalId);
  let secondPosOfShip = new Ship(900, 40);
  currentGame.ship = secondPosOfShip;
  let secondPlanet = new Planet(30, 600, "image/second planet.png", 150, 150, "second");
  currentGame.planet2 = secondPlanet;
  currentGame.intervalId = setInterval(() => {
    updateCanvas();
  }, 1000 / 30);
 
}
function winGame() {
  context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
  clearInterval(currentGame.intervalId);
  context.shadowColor = "black";
  context.fillStyle = "rgb(114, 239, 113)";
  context.font = "45px Ricks";
  context.fillText("CONGRATULATIONS YOU WON", 110, 350);
}
>>>>>>> 4f07c9fabf87495937ee5314e3dee2b3ee7b650a
function updateCanvas() {
  themeSong.play();
  context.clearRect(0, 0, spaceCanvas.clientWidth, spaceCanvas.clientHeight);
  currentGame.ship.draw();
<<<<<<< HEAD
  currentGame.planet.draw();
  if (detectCollision(currentGame.planet)) {
    currentGame.gameOver = true;
    checkReachPlanet();
   
  };
  if (detectCollision(currentGame.planet)) {
    currentGame.gameOver = true;
    currentGame.aliensFrequency = 0;
=======
  if (level === 1) {
    currentGame.planet1.draw();
    if (detectCollision(currentGame.planet1)) {
      currentGame.gameOver = true;
      currentGame.aliensFrequency = 0;
>>>>>>> 4f07c9fabf87495937ee5314e3dee2b3ee7b650a
      currentGame.aliens = [];
      level = 2;
      checkReachPlanet();
    }
  } else if (level === 2 && currentGame.planet2.name !== undefined) {
    currentGame.planet2.draw()
    if (detectCollision(currentGame.planet2)) {
      currentGame.gameOver = true;
      currentGame.aliensFrequency = 0;
      currentGame.aliens = [];
      winGame();
    }
  }

  currentGame.aliensFrequency += 10;
  currentGame.aliens.forEach((alien) => {
    alien.x += 7; // speed of aliens
    alien.drawAliens();
    if (detectCollision(alien)) {
      currentGame.gameOver = true;
      currentGame.aliensFrequency = 0;
      currentGame.aliens = [];
      checkGameOver();
    }
  });
  if (currentGame.aliensFrequency % 120 === 60) {
    const randomAlienX = 0;
    const randomAlienY = Math.floor(Math.random() * 600);
    const currentAliens = new Aliens(randomAlienX, randomAlienY);
    currentGame.aliens.push(currentAliens);
<<<<<<< HEAD
  };

  const backgroundMusic = new Audio("Sound/396239__romariogrande__alien-dream.wav");
   backgroundMusic.play();

};
=======
  }
}
>>>>>>> 4f07c9fabf87495937ee5314e3dee2b3ee7b650a
document.addEventListener("keydown", (keyboardEvent) => {
  currentGame.ship.moveShip(keyboardEvent.key);
});
