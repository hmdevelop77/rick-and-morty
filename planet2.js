
class Nipton {
  constructor() {
    this.x = 40;
    this.y = 700;
    this.width = 100;
    this.height = 100;
    this.image = new Image();
    this.image.src = "image/planète-étrangère-exotique-originale-de-géant-gaz-vert-d-imagination-avec-r-bleu-132260247.jpeg";
    this.image.onload = () => {
      this.draw();
    };
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
