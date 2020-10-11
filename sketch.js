var bullet, wall;
var speed,weight;
var damage,thickness;




function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(500,200,50,30);
  bullet.shapeColor="white";
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor =color(80,80,80);
  bullet.velocityX=speed;
  thickness=random(22,83)
 

}

function draw() {
  background("lightblue");
  
  if(wall.x-bullet.x <= (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    //wall.y=200;
    //wall.x=1500;

   if(damage>10){
     wall.shapeColor="red";
   }

    if(damage<10){
     wall.shapeColor="green";
   }



  }





  drawSprites();
}