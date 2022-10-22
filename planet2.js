class Planet {
    constructor() {
      this.x = 950;
      this.y = 20;
      this.width = 100;
      this.height = 100;
      this.image = new Image();
      this.image.src = "image/S1e10_hideout_planet.webp";
      this.image.onload = () => {
        this.draw();
      };
    }
    draw() {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }