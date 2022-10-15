let enemiesArray = [];
let enemiesImg = new Image();

class Enemies {
  constructor() {
    this.image = Math.round((Math.random() * 12));
    this.color = "red";
    this.width = 70;
    this.height = 80;
    this.x = Math.floor(Math.random() * (gameBoard.width - this.width));
    this.y = 0;
    this.speedY = 1+ Math.floor(Math.random() * 6);
  }

  drawEnemies() {
    if (this.image === 1){
      enemiesImg.src = 'src/images/pocket-morty.png';
    }
    else if (this.image === 2){
      enemiesImg.src = 'src/images/evil-morty.png';
    }
    else if (this.image === 3){
      enemiesImg.src = 'src/images/wizard-morty.png';
    }
    else if (this.image === 4){
      enemiesImg.src = 'src/images/spooky-morty.png';
    }
    else if (this.image === 5){
      enemiesImg.src = 'src/images/punk-morty.png';
    }
};