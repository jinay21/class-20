var fr,br;
function setup() {
  createCanvas(800,400);
   fr=createSprite(400, 200, 50, 50);
   fr.shapeColor="green";
   mr=createSprite(400, 200, 50, 50);
   mr.shapeColor="green";
}
function draw() 
{
  mr.x=mouseX;
  mr.y=mouseY;
  background(255,255,255);
  if((mr.x-fr.x <mr.width/2+fr.width/2)&&
    (fr.x-mr.x <mr.width/2+fr.width/2)&&
    (mr.y-fr.y <mr.height/2+fr.height/2)&&
    (fr.y-mr.y <mr.height/2+fr.height/2))
  {
    fr.shapeColor="red";
    mr.shapeColor="red";
  }
  else
  {
    fr.shapeColor="green";
    mr.shapeColor="green";
  }
  drawSprites();
}