var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(100,400,50,80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;

  movingRect = createSprite(700,400,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;
 fixedRect.velocityX = 5;
// fixedRect.velocityY = 7;
 movingRect.velocityX = -8;
// movingRect.velocityY = 6;
}

function draw() {
  background(0);  

  
  
 if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  ){

      fixedRect.velocityX = fixedRect.velocityX * -1;
      //fixedRect.velocityY = -7;
      movingRect.velocityX *= -1;
     // movingRect.velocityY = -6;
  }
  
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
     && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){

       fixedRect.velocityY *= -1;
       movingRect.velocityY *= -1;
     }  

  drawSprites();
}