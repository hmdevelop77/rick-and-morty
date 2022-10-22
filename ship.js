class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 70;
    this.image = new Image();
    this.image.src =
      "image/ship. 7x507-pad_600x600_f8f8f8-removebg-preview (3).png";
    this.image.onload = () => {
      this.draw();
    };
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= 15;
  }
  moveRight() {
    this.x += 15;
  }
  moveUp() {
    this.y -= 15;
  }
  moveDown() {
    this.y += 15;
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
