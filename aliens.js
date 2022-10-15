 let aliensArray = [];
let aliensImg = new Image();

class Aliens {
  constructor(x,y) {
   this.image = Math.floor((Math.random() * 5));
    this.color = "green";
     this.x = x;
    //this.y = Math.floor(Math.random() * (spaceCanvas.width - this.width));
    this.y = y ;
    this.width = 80;
    this.height = 80;
   
    //this.speedX = 1+ Math.floor(Math.random() * 6);
  }

  drawAliens() {
    if (this.image === 1){
      aliensImg.src = './image/animatronic-morty.png';
    }
    else if (this.image === 2){
      aliensImg.src = './image/dracula-morty.png';
    }
    else if (this.image === 3){
      aliensImg.src = './image/ghost-morty.png';
    }
    else if (this.image === 4){
      aliensImg.src = './image/pocket-morty.png';
    }
    else if (this.image === 5){
      aliensImg.src = './image/spooky-morty.png';
    }
    //this.y += this.speedY;
    /* aliensImg.addEventListener("load", () => {
    }); */
    console.log(this.x)
    context.drawImage(aliensImg, this.x, this.y, 50, this.height);
   
    //context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
// drawAliens (){
//   context.fillStyle = "green";
//     context.fillRect(this.x, this.y, this.width, this.height);
// }
}


 
