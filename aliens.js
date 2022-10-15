let aliensArray = [];
let aliensImg = new Image();

class Aliens {
  constructor() {
    this.image = Math.round((Math.random() * 5));
    this.color = "red";
    this.width = 100;
    this.height = 100;
    this.x = 0;
    this.y = Math.floor(Math.random() * (spaceCanvas.width - this.width));
    this.speedX = 1+ Math.floor(Math.random() * 6);
  }

  drawAliens() {
    if (this.image === 1){
      aliensImg.src = 'image/animatronic-morty.png';
    }
    else if (this.image === 2){
      aliensImg.src = 'image/dracula-morty.png';
    }
    else if (this.image === 3){
      aliensImg.src = 'image/ghost-morty.png';
    }
    else if (this.image === 4){
      aliensImg.src = 'image/pocket-morty.png';
    }
    else if (this.image === 5){
      aliensImg.src = 'image/spooky-morty.png';
    }
    this.y += this.speedY;
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
const addNewWToAliensArray = () => {
  if (frames % 120 === 0) {
    aliensArray.push(new Aliens());
  }
};

const createNewAliens = () =>
  aliensArray.forEach(element => element.drawAliens());
