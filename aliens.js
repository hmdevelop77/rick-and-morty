 let aliensArray = [];
//let aliensImg = new Image();

class Aliens {
  constructor(x,y) {
   // this.image = Math.round((Math.floor() * 5));
    this.color = "green";
     this.x = x;
    //this.y = Math.floor(Math.random() * (spaceCanvas.width - this.width));
    this.y = y ;
    this.width = 50;
    this.height = 50;
   
    //this.speedX = 1+ Math.floor(Math.random() * 6);
  }

  // drawAliens() {
  //   if (this.image === 1){
  //     aliensImg.src = 'image/animatronic-morty.png';
  //   }
  //   else if (this.image === 2){
  //     aliensImg.src = 'image/dracula-morty.png';
  //   }
  //   else if (this.image === 3){
  //     aliensImg.src = 'image/ghost-morty.png';
  //   }
  //   else if (this.image === 4){
  //     aliensImg.src = 'image/pocket-morty.png';
  //   }
  //   else if (this.image === 5){
  //     aliensImg.src = 'image/spooky-morty.png';
  //   }
  //   this.y += this.speedY;
  //   context.drawImage(this.image, this.x, this.y, this.width, this.height);
  // }
drawAliens (){
  context.fillStyle = "green";
    context.fillRect(this.x, this.y, this.width, this.height);
}
}


 
