var movingrect, fixrect;


function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 50, 80);
  fixrect = createSprite(200, 200, 80, 50);
  movingrect.shapeColor = "yellow";
  fixrect.shapeColor = "blue";
}

function draw() {
  background(0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(movingrect.x - fixrect.x < movingrect.width/2 + fixrect.width/2
    && fixrect.x - movingrect.x < movingrect.width/2 + fixrect.width/2
    && movingrect.y - fixrect.y < movingrect.height/2 + fixrect.width/2
    && fixrect.y - movingrect.y < movingrect.height/2 + fixrect.width/2){
    movingrect.shapeColor = "lightblue";
    fixrect.shapeColor = "lightblue";
  }
  else {
  movingrect.shapeColor = "yellow";
  fixrect.shapeColor = "blue";
  }
  drawSprites();
}