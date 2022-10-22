
let planetImg = new Image
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
// drawPlanet(level) {
//     if (level === 1) {
//       planetImg.src = "./image/planet-image.jpeg";
//     } else if (level === 2) {
//       planetImg.src = "./image/planète-étrangère-exotique-originale-de-géant-gaz-vert-d-imagination-avec-r-bleu-132260247.jpeg";
//     } else if (level === 3) {
//       planetImg.src = "./image/S1e10_hideout_planet.webp";
//     }
//     context.drawImage(planetImg, this.x, this.y, 50, 50);
