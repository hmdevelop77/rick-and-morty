class Planet {
  constructor(x, y, image, width, height, name) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width; 
    this.height = height; 
    this.image = new Image();
    this.image.src = image;
    this.image.onload = () => {
      this.draw();
    };
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
