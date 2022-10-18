class Planet {
  constructor() {
    this.x = 950;
    this.y = 20;
    this.width = 100;
    this.height = 100;
    this.image = new Image();
    this.image.src = "image/planet-image.jpeg";
    this.image.onload = () => {
      this.draw();
    };
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
