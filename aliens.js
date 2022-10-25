let aliensArray = [];
let aliensImg = new Image();
class Aliens {
  constructor(x, y) {
    this.image = Math.floor(Math.random() * 4);
    this.color = "green";
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
  }
  drawAliens() {
    if (this.image === 1) {
      aliensImg.src = "./image/animatronic-morty.png";
    } else if (this.image === 2) {
      aliensImg.src = "./image/dracula-morty.png";
    } else if (this.image === 3) {
      aliensImg.src = "./image/ghost-morty.png";
    } else if (this.image === 4) {
      aliensImg.src = "./image/pocket-morty.png";
    }
    context.drawImage(aliensImg, this.x, this.y, 50, 50);
  }
}
