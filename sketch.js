var frect,mrect;
function setup() {
  createCanvas(1200,800);
  frect=createSprite(400, 200, 50, 50);
  mrect=createSprite(700,200,30,50);
  mrect.velocityX=-2;
  frect.velocityX=2;
}

function draw() {
  background(0);  
  
  bounceOff(mrect,frect);
  
  drawSprites();
}
function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
}