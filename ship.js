
class Ship {
  constructor() {
    this.x = 500;
    this.y = 650;
    this.width = 50;
    this.height = 50;
    const image = new Image();
    image.src = "image/st,small,507x507-pad,600x600,f8f8f8.jpeg";
    image.onload = () => {
      this.image = image;
     this.draw();
    };
  }
  
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= 5;
  }
  moveRight() {
    this.x += 5;
  }
  moveUp() {
    this.y -= 5;
  }
  moveDown() {
    this.y += 5;
  }
  moveShip(key) {
    context.clearRect(this.x, this.y, this.width, this.height);
    switch (key) {
      case "ArrowLeft":
        if (this.x > 10) {
          this.x -= 10;
        }
        break;
      case "ArrowRight":
        if (this.x < 1000) {
         this.x += 10; 
        }
        break;
      case "ArrowUp":
        if (this.y > 0) {
          this.y -= 10;
        }
        break;
      case "ArrowDown":
        if (this.y < 690) {
          this.y += 10;
        }
        break;
    }
  }
}
