var fixedRect, movingRect;
var gameobj1,gameobj2,gameobj3;
function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  gameobj1 = createSprite(200,200,50,50)
  gameobj1.shapeColor = "green"

  gameobj2 = createSprite(700,200,50,50)
  gameobj2.shapeColor = "purple"

  gameobj3 = createSprite(500,300,70,50)
  gameobj3.shapeColor = "orange"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if( isTouching(movingRect,gameobj2))
  {
    movingRect.shapeColor = "red";
    gameobj2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    gameobj2.shapeColor = "purple";
  }
  
  drawSprites();
}







