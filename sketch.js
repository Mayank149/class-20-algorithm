var fixedrect;
var movingrect;



function setup() {
  createCanvas(800,400);
   fixedrect = createSprite(600,200,90,20);
  fixedrect.shapeColor = "red";

 movingrect = createSprite(200,200,90,20);
 movingrect.shapeColor = "red";


}

function draw() {
  background(255,255,255); 
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  fixedrect.debug = true;
  movingrect.debug = true;

  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2 && 
    movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 && 
    fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2  ){

movingrect.shapeColor ="blue";
fixedrect.shapeColor = "blue";

  }

else{

  movingrect.shapeColor ="green";
  fixedrect.shapeColor = "green";

}


  drawSprites();
}